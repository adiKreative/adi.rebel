<?php 
/*Template Name: Template Login*/
get_header();

$rediect_url = esc_url(home_url('/account-my')); 
global $current_user, $wp_roles;

  if(isset($_GET['act'])){
    $data = base64_decode($_GET['act']);
    $unser_d = maybe_unserialize($data);
    $code = get_user_meta($unser_d['id'], 'activation_code', true);
       // verify whether the code given is the same as ours
          if($code == $unser_d['code']){
              // update the user meta
             update_user_meta($unser_d['id'], 'is_activated', '1');
              $script = "<script>jQuery(document).ready(function(){";
              $script .= "jQuery('p#success').fadeIn(function() {";
              $script .= "jQuery('p#success').html('<strong>Success:</strong> Your account has been activated!'); }); ";
              $script .= "setTimeout(function(){ jQuery('p#success').fadeOut('slow') }, 2200);";
              $script .= "}); </script>";
          }
    }

//there is an order_id
$orderId = 0;
if(isset($_GET["order_id"]) && !empty($_GET["order_id"])){
  $orderId = $_GET["order_id"];
              $script_1 = "<script>jQuery(document).ready(function(){";
              $script_1 .= "jQuery('p#success_msg').fadeIn(function() {";
              $script_1 .= "jQuery('p#success_msg').html('<strong>Success:</strong> Your payment has been successfull!'); }); ";
              $script_1 .= "setTimeout(function(){ jQuery('p#success_msg').fadeOut('slow') }, 2200);";
              $script_1 .= "}); </script>";

  $isThankYouShownAlready = get_post_meta($orderId, 'pts_meta_order_thank_you_shown', true);
  //one time visit to thank you page
  if($isThankYouShownAlready == 'yes'){
    wp_redirect('/account-my');
    exit;
  }
  else{
    update_post_meta( $orderId, 'pts_meta_order_thank_you_shown', 'yes');
  }
}
else{
  //there is no order_id but user is logged in
  wp_redirect('/account-my');
  
}

// $post = get_post($orderId);
// if(!$post){
//   wp_redirect('/account-my');
//   exit;
// }

// //current user is not the author of this order
// if($current_user->ID != $post->post_author){
//   wp_redirect('/account-my');
//   exit;
// }

$user = wp_get_current_user();
$s_id = get_user_meta($current_user->ID, 'is_activated', true);
$f_id = get_user_meta($current_user->ID, 'is_activated_flag', true);
if((!empty($s_id) || in_array( 'administrator', (array) $user->roles ) || !empty($f_id)) && is_user_logged_in()){
?>
<section class="dashboard">
  <!--  <div class="aux-container"> -->
      <div class="my-profile-part">
         <p id="success_msg" style="display: none;"></p> 
        <div class="dashboard-sidebar"> <!-- required for floating -->
          <!-- Nav tabs -->
          <button class="tablinks" onclick="openCity(event, 'dashboard')" id="defaultOpen">Share Purchase History</button>
          <button class="tablinks" onclick="openCity(event, 'profile')" >Profile</button>
          <button class="tablinks" onclick="openCity(event, 'upload')" >Upload Documents</button>
          <button class="tablinks" onclick="redirectPurchase()">Buy Shares</button>
          <button class="tablinks" onclick="newsfeed()">News</button>
          <a class="log-out" href="<?php echo wp_logout_url( home_url('/account-my') ); ?>">Logout</a>
        </div>

        <div class="dashboard-cont">
          <div id="dashboard" class="tabcontent">
              <h3>Share Purchase History</h3>
              <div class="order-data">         
                <table class="display" id="table_id">
                  <thead>
                    <tr>
                      <th>Reference No#</th>
                      <th>Total No of Shares</th>
                      <th class="no-sort">Price per share</th>
                      <th class="no-sort">Amount Paid</th>
                      <th class="no-sort">Payment Method</th>
                      <th class="no-sort">Status</th>
                      <th class="no-sort">Transaction Date</th>
                      <th class="no-sort">Agreement</th>
                    </tr>
                  </thead>
                  <tbody>
                  <?php   
                      $args = array(
                        'author'        =>  $current_user->ID,
                        'orderby'       =>  'post_date',
                        'order'         =>  'DESC',
                        'post_type'     =>  'orders',
                        'posts_per_page' => -1 // no limit
                      );

                      $orders = get_posts($args);
                      foreach ($orders as $key => $order_val) {?>
                      <tr>
                        <td><?php echo $order_val->ID; ?></td>
                        <td><?php echo get_post_meta($order_val->ID, 'pts_meta_order_share_count', true);?></td>
                        <td>10.00</td>
                        <td><?php echo get_post_meta($order_val->ID, 'pts_meta_order_total_amount', true); ?></td>
                        <td><?php echo get_post_meta($order_val->ID, 'pts_meta_order_payment_method', true); ?> </td>
                        <td><?php echo get_post_meta($order_val->ID, 'pts_meta_order_status', true); ?></td>
                        <td><?php echo get_post_meta($order_val->ID, 'pts_meta_transac_date', true ); ?></td>
                        <td><a class="pdf_view" href="<?php echo home_url('/generate-pdf'); ?>?order_id=<?= base64_encode($order_val->ID); ?>&user_id=<?= base64_encode($current_user->ID); ?>">View</a></td>
                      </tr>
                        <?php } ?>
                  </tbody>      
                </table>
                
              </div>
          </div>

          <div id="profile" class="tabcontent">
            <h3>Profile</h3>
               <?php //else : ?>
                    <?php if ( count($error) > 0 ) echo '<p class="error">' . implode("<br />", $error) . '</p>'; ?>
                    <form method="post" id="adduser" action="">
                        <div class="form-username one-third">
                            <label for="first-name"><?php _e('First Name', 'plox_child'); ?></label>
                            <input class="text-input" name="first-name" type="text" id="first-name" value="<?php the_author_meta( 'first_name', $current_user->ID ); ?>" autocomplete="off"/>
                        </div><!-- .form-username -->
                        <div class="form-username one-third">
                            <label for="last-name"><?php _e('Last Name', 'plox_child'); ?></label>
                            <input class="text-input" name="last-name" type="text" id="last-name" value="<?php the_author_meta( 'last_name', $current_user->ID ); ?>" autocomplete="off" />
                        </div><!-- .form-username -->
                         <div class="form-displayname one-third">
                            <label for="last-name"><?php _e('Display Name', 'plox_child'); ?></label>
                            <input class="text-input" name="display-name" type="text" id="display-name" value="<?php the_author_meta( 'display_name', $current_user->ID ); ?>" autocomplete="off" />
                        </div><!-- .form-username -->
                        <div class="form-email one-third">
                            <label for="email-s"><?php _e('E-mail *', 'plox_child'); ?></label>
                            <input class="text-input" name="email-s" type="text" id="email-s" value="<?php the_author_meta( 'user_email', $current_user->ID ); ?>"autocomplete="off" />
                        </div><!-- .form-email -->
                        <div class="form-email one-third">
                            <label for="address"><?php _e( 'Address', 'plox_child'); ?></label>
                            <input class="text-input" name="address" type="text" id="address" value="<?php the_author_meta( 'user_address1', $current_user->ID ); ?>"autocomplete="off" />
                        </div><!-- .form-address -->
                         <div class="form-aptnum one-third">
                            <label for="apt_num"><?php _e('Apt Number', 'plox_child'); ?></label>
                            <input class="text-input" name="apt_num" type="text" id="apt_num" value="<?php the_author_meta( 'user_address2', $current_user->ID ); ?>"autocomplete="off" />
                        </div><!-- .form-address -->
                        <div class="form-city one-third">
                            <label for="city"><?php _e('City', 'plox_child'); ?></label>
                            <input class="text-input" name="city" type="text" id="city" value="<?php the_author_meta( 'user_city', $current_user->ID ); ?>"autocomplete="off" />
                        </div><!-- .form-address -->
                        <div class="form-state one-third">
                            <label for="state"><?php _e('State', 'plox_child'); ?></label>
                            <input class="text-input" name="state" type="text" id="state" value="<?php the_author_meta( 'user_state', $current_user->ID ); ?>"autocomplete="off" />
                        </div><!-- .form-address -->
                        <div class="form-zip one-third">
                            <label for="zip_code"><?php _e('Zip Code', 'plox_child'); ?></label>
                            <input class="text-input" name="zip_code" type="text" id="zip_code" value="<?php the_author_meta('user_zip', $current_user->ID ); ?>"autocomplete="off" />
                        </div><!-- .form-address -->
                     
                        <div class="form-password one-third">
                            <label for="pass"><?php _e('Current Password', 'plox_child'); ?> </label>
                            <input class="text-input" name="pass" type="password" id="current_password" autocomplete="off"/>
                        </div>
                        <!-- .form-password -->
                        <div class="form-password one-third">
                            <label for="pass1"><?php _e('Password', 'plox_child'); ?> </label>
                            <input class="text-input" name="pass1" type="password" id="new_password" autocomplete="off"/>
                        </div><!-- .form-password -->
                       <!--  <div class="form-password one-third">
                           <label for="pass2"><?php _e('Repeat Password', 'plox_child'); ?></label>
                           <input class="text-input" name="pass2" type="password" id="con_password" autocomplete="off"/>
                       </div> --><!-- .form-password -->
                        <div class="form-textarea">
                            <label for="description"><?php _e('Biographical Information', 'plox_child') ?></label>
                            <textarea name="description" id="description" rows="3" cols="50"><?php the_author_meta( 'description', $current_user->ID ); ?></textarea>
                        </div><!-- .form-textarea -->

                        <div class="form-submit">
                            <input name="updateuser" type="submit" id="updateuser" class="submit button" value="<?php _e('Update', 'plox_child'); ?>" />
                            <?php $ajax_nonce = wp_create_nonce( "update-user" ); ?>
                          <!--   <?php wp_nonce_field( 'update-user' ) ?>
                            <input name="action" type="hidden" id="action" value="update-user" /> -->
                        </div><!-- .form-submit -->
                          <div class="loder_class_log" id="loader-info" style="display: none">
                              <img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/loader.gif" alt="">
                           </div>
                    </form><!-- #adduser -->
                <?php// endif; ?>
                <p class="message-box" id="message-info" style="display: none"></p>
                <div class="form-errors" id="formErrors_up">
                     <p>Error Messages</p>
               </div>
          </div>
          <div id="upload" class="tabcontent"> 
             <h3>Uploaded Documents</h3>
             <table class="display">
              <thead>
                  <tr>
                  <th>Reference No#</th>
                  <th class="no-sort">Images</th>
                  <th class="no-sort">Tax Doc</th>
                  </tr>
              </thead>
              <tbody>
             <?php
              $args_1 = array(
                        'author'        =>  $current_user->ID,
                        'orderby'       =>  'post_date',
                        'order'         =>  'DESC',
                        'post_type'     =>  'orders',
                        'posts_per_page' => -1 // no limit
                      );
              $orders_doc = get_posts($args_1);
              foreach ($orders_doc as $key => $ord_val) {?>                
                    <tr>
                      <td><?php echo $ord_val->ID; ?></td>
                      <td>
                <?php $img_id_proof = get_post_meta($ord_val->ID, 'pts_meta_order_photo_upload', true);
                        if(!empty($img_id_proof)){?>
                          <div><img style="width: 900px; height: auto;" src="<?= wp_get_attachment_url($img_id_proof); ?>" alt="" /></div>
                        <?php } ?>
                      </td>
                      <td>
                    <?php $img_tax = get_post_meta($ord_val->ID, 'pts_meta_order_tax_image_upload', true); 
                          if(!empty($img_tax)){?>
                            <div><iframe id="viewer" src="<?= wp_get_attachment_url($img_tax); ?>" frameborder="0" width="600" height="auto"></iframe></div>
                          <?php } ?>
                      </td>
                    </tr>     
             <?php } ?> 
                </tbody>
              </table>    
          </div>

          <!-- Tab panes -->         
        </div>

        <div class="clearfix"></div>

      </div>  
<!--   </div> -->

<input type="hidden" value="<?php echo $current_user->ID; ?>" id="users_id">
</section>
 
<?php
 }
  else{
?>

<section class="theme-login-part">
   <div class="container">
      <div class="row">
        <p id="success" style="display: none;"></p> 
         <div class="col-md-6">
            <div class="login-side">         
               <h1>Login  to  account</h1>
               <h6>Enter your e-mail address and your password.</h6>
               <form action="<?php echo site_url( '/wp-login.php' ); ?>" method="post" id="loginform">
                  <div class="form-group">      
                     <input type="text" class="form-control" name="log" id="user_id" placeholder="Enter Username">
                  </div>
                  <div class="form-group">      
                     <input type="password" class="form-control" name="pwd" id="pwd" placeholder="Enter password">
                      <input type="hidden" value="<?php echo $rediect_url; ?>" name="redirect_to">
                      <input type="hidden" value="<?=uniqid();?>" name="cookie">
                  </div>
                  <div class="checkbox">
                     <label class="check"><input type="checkbox" name="remember" id="remenber_me"> Remember me</label>  
                     <a href="<?php echo site_url('/wp-login.php?action=lostpassword' );?>" class="forgot-passwd"><i class="fa fa-unlock-alt" aria-hidden="true"></i>Forgot Password</a>           
                  </div>
                  <div class="form-group"> 
                     <input type="submit" class="btn sbmt-btn" id="login_butt" value="Sign In" name="wp-submit">                     
                  </div>
                  
                    <p class="validation"></p>
                  <div class="bottom-link">
                     <p>Not yet registered click here to <a href="<?php echo esc_url(home_url('/create-an-account'));?>">Register</a></p>
                  </div>
               </form>
               <div id="success" style="display:none;"></div>
               <div class="form-errors" id="formErrors_lp">
                     <p>Error Messages</p>
               </div>
            </div>
         </div>
         <div class="loder_class_log" style="display: none">
            <img src="<?php echo  get_stylesheet_directory_uri(); ?>/assets/images/loader.gif" alt="Loader">
          </div>
      </div>
   </div>
</section>
<?php } ?>

<?php get_footer(); 
echo $script;
echo $script_1;
?>
<script type="text/javascript">
  jQuery(document).ready( function () {
      jQuery('.display').DataTable({
          "pageLength": 10,
          "lengthMenu": [[10, 20, 50, -1], [10, 20, 50, "All"]],
          "order": [[ 0, "desc" ]],
          "columnDefs": [{
            "targets": 'no-sort',
            "orderable": false
         }]
      });
  } );
</script>

<script>
function redirectPurchase(){
  window.location= "<?php echo esc_url(home_url('/invest-question')); ?>";
}
function newsfeed(){
  window.location= "<?php echo esc_url(home_url('/blog')); ?>";
}
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
</script>

<script>
   jQuery(document).ready(function(){
      jQuery('#login_butt').keypress(function(event){
       var keycode = (event.keyCode ? event.keyCode : event.which);
          if(keycode == '13'){
              window.location = "<?php echo esc_url(home_url('/account-my')); ?>";
          }
         });

      jQuery(document).on('click','#login_butt',function(e){
         e.preventDefault();
         jQuery('body').addClass('temporary-class');
         var user_id  = jQuery('#user_id').val();
         var password = jQuery('#pwd').val();
         var acc_activate = jQuery('#acc_activate').val();

         var form_data = new FormData();
            form_data.append('action', 'LogInAjax');
            form_data.append('log_in_id', user_id);
            form_data.append('password_id', password);
            // form_data.append('acc_activate', acc_activate);
            jQuery.ajax({
               type: 'POST', 
               url: "<?php echo admin_url('admin-ajax.php'); ?>",
               dataType: 'JSON',
               contentType: false,
               processData: false,
               data: form_data, 
                  beforeSend: function(){
                      jQuery('.loder_class_log').slideDown();
                  },
                  success: function(result){
                     jQuery('body').removeClass('temporary-class');
                     jQuery('.loder_class_log').slideUp();
                    if (1 == result.success) jQuery("div#success").html("Login Success. Redirecting to the Member's area."), jQuery('#loginform').fadeOut(function() {
                        jQuery("div#success").fadeIn(function() {
                            setTimeout(function() {
                               jQuery( "#loginform" ).submit();
                            }, 2500)
                        })
                    });
                    else {
                        if (result.errors.length) {
                           var list = '<ul>';
                           jQuery.each(result.errors, function(item,value){
                             list += "<li>"+value+"</li>";
                           });
                             list+= "</ul>";
                           jQuery('#formErrors_lp p').html(list);
                           jQuery('#formErrors_lp').fadeIn();
                           setTimeout(function() {
                               jQuery('#formErrors_lp').fadeOut("slow");
                           }, 6000); 
                             return false;    
                        } else jQuery(".formErrors_lp p").html("Oops, Something went wrong.");
                    }
                    // jQuery('.loder_class_log').slideUp();
                  }
            });

      });

      jQuery(document).on('click', '#updateuser', function(event){
         event.preventDefault();
         var userid  = jQuery('#users_id').val();
         var first_name = jQuery('#first-name').val();
         var last_name= jQuery('#last-name').val();
         var display_name = jQuery('#display-name').val();
         var email = jQuery('#email-s').val();
         var address = jQuery('#address').val();
         var apt_num = jQuery('#apt_num').val();
         var city = jQuery('#city').val();
         var state = jQuery('#state').val();
         var zip_code = jQuery('#zip_code').val();
         var oldp = jQuery('#current_password').val();
         var newp = jQuery('#new_password').val();
        // var conp = jQuery('#con_password').val();
         var user_details = jQuery('#description').val();

         // if( first_name == '' || last_name == '' || user_details == ''){
         //    jQuery('#loader-info').slideUp();
         //    jQuery('#message-info').text('Please fill at least one data');
         //    jQuery('#message-info').slideDown();
         //    return false;
         // }
         // if( oldp == '' || newp == '' || conp == ''){
         //    jQuery('#loader-info').slideUp();
         //    jQuery('#message-info').text('Please fill in the required fields');
         //    jQuery('#message-info').slideDown();
         //    return false;
         // }

         // if(newp != conp){
         //    jQuery('#loader-info').slideUp();
         //    jQuery('#message-info').text('Password are not match');
         //    jQuery('#message-info').slideDown();
         //    return false;
         // }
         // if(oldp == newp){
         //    jQuery('#loader-info').slideUp();
         //    jQuery('#message-info').text('Do not use Current Password');
         //    jQuery('#message-info').slideDown();
         //    return false;
         // }

         var form_data = new FormData();
            form_data.append('action', 'UserUpdate');
            form_data.append('security', "<?php echo $ajax_nonce; ?>");
            form_data.append('first_name', first_name);
            form_data.append('last_name', last_name);
            form_data.append('email', email);
            form_data.append('address', address);
            form_data.append('apt_num', apt_num);
            form_data.append('city', city);
            form_data.append('state', state);
            form_data.append('zip_code', zip_code);
            form_data.append('display_name', display_name);
            form_data.append('user_details', user_details);
            form_data.append('current_password', oldp);
            form_data.append('new_password', newp);
          //  form_data.append('confirm_p', conp);
            form_data.append('userid', userid);
        
            jQuery.ajax({
               type: 'POST', 
               url: '<?php echo admin_url("admin-ajax.php"); ?>',
               dataType: 'JSON',
               contentType: false,
               processData: false,
               data: form_data,
               beforeSend: function(){
                    jQuery('#loader-info').slideDown();
               },
               success: function(result){
              
                  if(result.success == 1){
                       jQuery('#loader-info').slideUp(); 
                       jQuery('#message-info').css({ "background-color": "#c4eac4",  "border": "1px solid #0c9c17","box-sizing": "border-box"});   
                        jQuery('#message-info').fadeIn().html(result.message);
                        setTimeout(function() {
                            jQuery('#message-info').fadeOut("slow");
                            location.reload();
                        }, 2500);  
                  }else{
                    if (result.error.length) {
                        var list = '<ul>';
                        jQuery.each(result.error, function(item,value){
                          list += "<li>"+value+"</li>";
                        });
                          list+= "</ul>";
                          console.log(list);
                        jQuery('#formErrors_up p').html(list);
                         jQuery('#formErrors_up').fadeIn();
                        setTimeout(function() {
                            jQuery('#formErrors_up').fadeOut("slow");
                        }, 6000); 
                          jQuery("#loader-info").slideUp(); 
                          return false;       
                        }       
                  }
               }
         });

      });

   });
</script>