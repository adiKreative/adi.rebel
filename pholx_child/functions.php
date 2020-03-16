<?php

require 'sdk-php/autoload.php';  
use net\authorize\api\contract\v1 as AnetAPI; 
use net\authorize\api\controller as AnetController;

define("AUTHORIZENET_LOG_FILE","phplog");

add_action( 'wp_enqueue_scripts', 'pholx_child_enqueue_styles' );
function pholx_child_enqueue_styles() {
	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' ); 
    wp_enqueue_style('child-theme', get_stylesheet_directory_uri() .'/assets/css/other.css', array('parent-style'));
    if(is_page('create-an-account') || is_page('account-my') || is_page('invest-question')){
        wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/assets/css/custom.css', array('parent-style'), '2.0'); 
    }
    if(is_page('invest-question')){
        wp_enqueue_style('bootstrap-style', 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', array('parent-style'), '2.0');
    }
} 

add_action('wp_enqueue_scripts', 'theme_js');
function theme_js() {
    if(is_page('invest-question')){
        wp_enqueue_script('custom-js', get_stylesheet_directory_uri() .'/assets/js/global.js', array('jquery'), '1.0', true);
        wp_enqueue_script('invest-js', get_stylesheet_directory_uri() .'/assets/js/invest-procedure.js', array('jquery'), '1.0', true);
    }
    if(is_page('account-my')){
        wp_enqueue_style( 'custom-datatable', "https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css", array(), '1.0' );
         wp_enqueue_script( 'custom-jsd', 'https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js', array(), '2.0');
    }
    if(is_page('subscription2')){
       wp_enqueue_style( 'sub-style', get_stylesheet_directory_uri().'/assets/css/subscript_style.css', array(), '1.1' );
    }
}

/*-------------------------------------------------------------------------------------------------*/

add_action('init', 'registerCustomPostTypeOrders');

function registerCustomPostTypeOrders() {

  $labels = array(
    'name' => 'Orders',
    'singular_name' => 'Order',
    'all_items' => 'All',
    'add_new' => 'Add New',
    'add_new_item' => 'Add New Order',
    'edit_item' => 'Edit Order',
    'new_item' => 'New Order',
    'view_item' => 'View Order',
    'search_items' => 'Search Orders',
    'not_found' =>  'Nothing found',
    'not_found_in_trash' => 'Nothing found in Trash',
    'parent_item_colon' => ''
  );

  $args = array(
    'labels' => $labels,
    'public' => true,
    'publicly_queryable' => true,
    'show_ui' => true,
    'query_var' => true,
    'rewrite' => array('slug' => 'orders', 'with_front' => false),
    'capability_type' => 'post',
    'hierarchical' => false,
    'menu_position' => null,
    'has_archive' => false,
    'supports' => array( 'title', 'author', 'thumbnail')
    );

  register_post_type( 'orders' , $args );
}

add_action("admin_init", "initCustomPostTypeOrder");

function initCustomPostTypeOrder(){
  add_meta_box("order-meta", "Order Details", "orderDetails", "orders", "normal", "low");
}

function orderDetails(){
  global $post;
  $custom = get_post_custom($post->ID);
?>

<div>
  <b>Number of Shares</b>
  <input type="text" style="width:100%;" value="<?php echo get_post_meta($post->ID, 'pts_meta_order_share_count', true); ?>" name="pts_meta_order_share_count" id="pts_meta_order_share_count">
</div>

<div>
  <b>Processing Fee</b>
  <input type="text" style="width:100%;" value="<?php echo get_post_meta($post->ID, 'pts_meta_order_additional_cost', true); ?>" name="pts_meta_order_additional_cost" id="pts_meta_order_additional_cost">
</div>

<div>
  <b>Total Transaction Amount</b>
  <input type="text" style="width:100%;" value="<?php echo get_post_meta($post->ID, 'pts_meta_order_total_amount', true); ?>" name="pts_meta_order_total_amount" id="pts_meta_order_total_amount">
 </div>

<div>
  <b>Payment Method</b>
  <input type="text" style="width:100%;" value="<?php echo get_post_meta($post->ID, 'pts_meta_order_payment_method', true); ?>" name="pts_meta_order_payment_method" id="pts_meta_order_payment_method">
</div>

<div>
  <b>Signature</b>
  <div><img style="background:#fff;border:1px solid #ccc;padding:10px;" src="<?php echo get_post_meta($post->ID, 'pts_meta_order_signature', true); ?>" alt="" /></div>
</div>

<?php $img_id = get_post_meta($post->ID, 'pts_meta_order_photo_upload', true); 
if(!empty($img_id)){?>
<div>
  <b>Image ID proof</b>
  <div><img style="width: 60%; height: 300px;" src="<?= wp_get_attachment_url($img_id); ?>" alt="" /></div>
</div>
<?php } 

/* $img_id_proof = get_post_meta($post->ID, 'pts_meta_order_id_proof_upload', true); 
if(!empty($img_id_proof)){?>
<div>
  <b>Image ID Proof</b>
  <div><img style="width: 60%; height: 300px;" src="<?= wp_get_attachment_url($img_id_proof); ?>" alt="" /></div>
</div>
<?php } */

$img_tax = get_post_meta($post->ID, 'pts_meta_order_tax_image_upload', true); 
if(!empty($img_tax)){?>
<div>
  <b>Document for taxes</b>
  <div><iframe id="viewer" src="<?= wp_get_attachment_url($img_tax); ?>" frameborder="0" width="600" height="auto"></iframe></div>
</div>
<?php } ?>

<div>
  <b>Status</b>
  <div>
    <select name='pts_meta_order_status' id='pts_meta_order_status'>
      <option <?php selected( get_post_meta($post->ID, 'pts_meta_order_status', true), 'pending' ); ?> value="pending">Pending</option>
      <option <?php selected( get_post_meta($post->ID, 'pts_meta_order_status', true), 'paid' ); ?> value="paid">Payment Received</option>
      <option <?php selected( get_post_meta($post->ID, 'pts_meta_order_status', true), 'completed' ); ?> value="completed">Completed</option>
      <option <?php selected( get_post_meta($post->ID, 'pts_meta_order_status', true), 'cc-transaction-failed' ); ?> value="cc-transaction-failed">Credit Card Transaction Failed</option>
      <option <?php selected( get_post_meta($post->ID, 'pts_meta_order_status', true), 'company-declined' ); ?> value="company-declined">Company Declined</option>
      <option <?php selected( get_post_meta($post->ID, 'pts_meta_order_status', true), 'refunded' ); ?> value="refunded">Refunded</option>      
    </select>
  </div>
</div>

<div>
  <b>Thank You Page Shown</b>
  <input type="text" style="width:100%;" value="<?php echo get_post_meta($post->ID, 'pts_meta_order_thank_you_shown', true); ?>" name="pts_meta_order_thank_you_shown" id="pts_meta_order_thank_you_shown">
</div>
<?php
}

add_action('save_post', 'saveOrderDetails');

function saveOrderDetails(){
  global $post;
  update_post_meta($post->ID, "pts_meta_order_share_count", $_POST["pts_meta_order_share_count"]);
  update_post_meta($post->ID, "pts_meta_order_additional_cost", $_POST["pts_meta_order_additional_cost"]);
  update_post_meta($post->ID, "pts_meta_order_total_amount", $_POST["pts_meta_order_total_amount"]);
  update_post_meta($post->ID, "pts_meta_order_payment_method", $_POST["pts_meta_order_payment_method"]);
  update_post_meta($post->ID, "pts_meta_order_status", $_POST["pts_meta_order_status"]);
}

/*-------------------------------------------------------------------------------------------*/

add_action('wp', 'invest_in_punch_page_func');
function invest_in_punch_page_func(){
    $html = '';
    if(is_page('invest-in-punch')){
        if(is_user_logged_in()){
            $html .= '<input type="hidden" id="logged_in" value="1">';
        }else{
            $html .= '<input type="hidden" id="logged_in" value="0">';
        }
        echo $html;
    }
}

add_action('wp_footer', 'url_logged_in_link');
function url_logged_in_link(){
   $sign_up =  get_page_by_path('create-an-account');
   $invest_form = get_page_by_path('invest-question');
    if(is_page('invest-in-punch')){?>
      <script>
        jQuery(document).ready(function(){
            var id = jQuery("#logged_in").val();
            if(id == 1){
                jQuery('a#us-id').attr("href", "<?php echo esc_url( get_permalink( $invest_form->ID ) ); ?>");
            }else{
                jQuery('a#us-id').attr("href", "<?php echo esc_url( get_permalink( $sign_up->ID ) ); ?>");
            }
           jQuery(document).on('click', 'a#us-id', function(event){
              event.preventDefault();
               setTimeout(function (){
                  jQuery("a#us-id").prop('disabled', true);
                }, 0);
              var href = jQuery(this).attr('href');
              var log_id = jQuery("#logged_in").val();
              if(log_id == 0){
                var flag = 1;
                var admim_url = "<?php echo admin_url('admin-ajax.php'); ?>";
                jQuery.ajax({
                    type: "POST",
                    url: admim_url,
                    dataType: "json",
                    data: {
                      action : "shareform_page",
                      id: flag
                    },
                    success: function(response){
                      console.log(response)
                        if(response.success){
                          window.location = href;
                          return false;
                       }
                    }
                });
            }else if(log_id == 1){
                window.location = href;
            }
          });
   });
      </script>;
<?php
    }
}

/*-----On click Invest punch button------*/
add_action('wp_ajax_shareform_page', 'shareform_page_func');
add_action('wp_ajax_nopriv_shareform_page', 'shareform_page_func');
function shareform_page_func(){
  
    $_SESSION['service'] = $_POST['id'];
    echo json_encode(array('success'=>true, 'data'=>$_SESSION['service']));
    exit();
}

/*-----------Session start----------*/
add_action('init', 'myStartSession', 1);
add_action('wp_logout', 'myEndSession');
add_action('wp_login', 'myEndSession');
function myStartSession() {
    if(!session_id()) {
        session_start();
    }
}
function myEndSession() {
    session_destroy ();
}

/*add_filter( 'nav_menu_link_attributes', 'add_specific_menu_location_atts', 10, 3 );
function add_specific_menu_location_atts( $atts, $item, $args ) {

    $url_h = get_page_by_path('account-my');
    $url_s = get_page_by_path('create-an-account');
    $menu_items = array(284);
    // check if the item is in the primary menu
    if(in_array($item->ID, $menu_items)) {
        if( is_user_logged_in()){
          $user_id = get_current_user_id();
           $s_id = get_user_meta($user_id, 'is_activated', true);
           if(!empty($s_id)){
             $atts['href'] = get_permalink($url_h->ID);
            }
        }
        else{
            $atts['href'] = get_permalink($url_s->ID);
        }  
    }
     return $atts;
}
*/

add_action('wp_head','hide_menu',10);
function hide_menu() { 
    if ( is_user_logged_in() ) {
        $output = "<style> li#menu-item-284 { display: none; } </style>";
    } else {
        $output = "<style> li#menu-item-284  { display: inline-block; } </style>";
    }
    echo $output;
}


add_action('admin_menu', 'authorize_net_paymemnt_option');
function authorize_net_paymemnt_option(){
     add_menu_page( 'Payment Credentials', 'Payment Credentials', 'manage_options', 'p_gateway', 'punchtv_payment_credential_func' );
     //call register settings function
  add_action( 'admin_init', 'payment_credentials_settings' );
}

function payment_credentials_settings() {
  //register our settings
  register_setting( 'payment_credentials_settings-group', 'api_id' );
  register_setting( 'payment_credentials_settings-group', 'transaction_key' );
}

function punchtv_payment_credential_func() {
?>
<div class="wrap">
<h1>Payment Credentials</h1>

<form method="post" action="options.php">
    <?php settings_fields( 'payment_credentials_settings-group' ); ?>
    <?php do_settings_sections( 'payment_credentials_settings-group' ); ?>
    <table class="form-table">
        <tr valign="top">
        <th scope="row">API ID: </th>
        <td><input type="text" name="api_id" value="<?php echo esc_attr( get_option('api_id') ); ?>" /><br/></td>
        
        </tr>    
        <tr valign="top">
        <th scope="row">Transaction Key: </th>
        <td><input type="text" name="transaction_key" value="<?php echo esc_attr( get_option('transaction_key') ); ?>" /></td> 
        </tr>
    </table>
    
    <?php submit_button(); ?>
</form>
</div>
<?php } 

// Register Ajax  
add_action('wp_ajax_nopriv_RegisterAjax', 'RegisterAjax');
add_action('wp_ajax_RegisterAjax', 'RegisterAjax');
function RegisterAjax() {

  global $wpdb;
  $errors = array();
  $isValid = true;
  if(empty($_POST['user_email']) ||
     empty($_POST['first_name']) ||
     empty($_POST['last_name']) ||
     empty($_POST['user_phone']) ||
     empty($_POST['user_password']) ||
     empty($_POST['conuser_pass'])||
     empty($_POST['country'])) {
    array_push($errors, 'A Required field is missing');
    $isValid = false;
  }

   // $user = get_user_by( 'login', $_POST['user_email'] );
  if (username_exists($_POST['user_email']) || email_exists($_POST['user_email'])){
    array_push($errors, 'Email already exists');
    $isValid = false;
  }

    $email = $_POST["user_email"];
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      array_push($errors, 'Invalid email format');
      $isValid = false;
    }

    if(!preg_match("/^[0-9]{3}-[0-9]{10}$/", $_POST['user_phone'])) {
       array_push($errors, 'Please enter a valid phone number');
      $isValid = false;
    }  

  if(!empty($_POST['user_password']) || !empty($_POST['conuser_pass'])){
      if($_POST['user_password'] != $_POST['conuser_pass']){
        array_push($errors, 'Passwords must be the same');
        $isValid = false;
      }
      if(strlen($_POST['user_password']) <= 5) {
        array_push($errors, ' Password length must be greater than 5');
        $isValid = false;
      }
}

  if($isValid){
    $userdata = array(
      'user_login'    =>   $_POST['user_email'],
      'user_email'    =>   $_POST['user_email'],
      'user_pass'     =>   $_POST['user_password'],
      'first_name'    =>   $_POST['first_name'],
      'last_name'     =>   $_POST['last_name'],
      'role'          =>   'subscriber'
      );

    try {
      $user_id = wp_insert_user($userdata);
      if($user_id){
            my_registration($user_id);
       }
      add_user_meta( $user_id,'user_phone', $_POST['user_phone']);
      add_user_meta( $user_id,'user_country', $_POST['country']);

      // $creds = array(
      //   'user_login'    => $userdata['user_login'],
      //   'user_password' => $userdata['user_pass'],
      //   'remember'      => true
      // );
      // $user = wp_signon($creds, false);

      // if($_POST['referrer']){
      //   $post = get_post($_POST['referrer']);
      //   //make sure page to redirect to exists
      //   if($post){
      //     $redirectUrl = get_permalink($post->ID);
      //   }
      // }
    }
    catch(Exception $e){
      $isValid = false;
      array_push($errors, $e->getMessage());
    }
  }

  echo json_encode(array('success' => $isValid, 'errors' => $errors));
  exit();
}

add_action('user_register', 'my_registration', 10, 2 );
function my_registration( $user_id ) {
    // get user data
    $user_info = get_userdata($user_id);
    // create md5 code to verify later
    $code = md5(time());
    $message = '';
   
    // create the activation code and activation status
    if(isset($_SESSION['service']) || !empty($_SESSION['service'])){  
       $ques_form = array('uid' => $user_id, 'flag' => $_SESSION['service']); 
          update_user_meta($user_id, 'account_activated', 0); 
          update_user_meta($user_id, 'activation_flag', $_SESSION['service']); 
       $url = get_site_url(). '/invest-question/?ques_form=' .base64_encode( maybe_serialize($ques_form));
       $subject  = 'New User Register.';
       $message .= 'Please click the following links to activate your account: '.$url;
    }else{
    unset($_SESSION['service']);
    $string = array('id' => $user_id, 'code' => $code);
    update_user_meta($user_id, 'account_activated', 0);
    update_user_meta($user_id, 'activation_code', $code);
    $url = get_site_url(). '/account-my/?act=' .base64_encode( maybe_serialize($string));
    $subject  = 'New User Register.';
    // basically we will edit here to make this nicer
    $message .= 'Please click the following links to activate your account: '.$url;
   }
    // send an email out to user
   if (did_action('user_register') === 1){
    wp_mail( $user_info->user_email, $subject, $message);
  }
}

/*function my_login_redirect( $url, $request, $user ){
    if( $user && is_object( $user ) && is_a( $user, 'WP_User' ) ) {
        if( $user->has_cap( 'administrator' ) ) {
            $url = admin_url();
        } else {
            $url = home_url('/members-only/');
        }
    }
    return $url;
}
add_filter('login_redirect', 'my_login_redirect', 10, 3 );*/

// creating Ajax call for WordPress  
add_action('wp_ajax_nopriv_LogInAjax', 'LogInAjax');
add_action('wp_ajax_LogInAjax', 'LogInAjax');
function LogInAjax() {

  global $wpdb;
  $errors = array();
  $isValid = true;
 
  if(empty($_POST['log_in_id']) ||
     empty($_POST['password_id']))
  {
    array_push($errors, 'A Required field is missing');
    $isValid = false;
  }
  if(!username_exists($_POST['log_in_id'])){
    array_push($errors, 'Invalid Email');
    $isValid = false;
  }

  if(strlen($_POST['password_id']) <= 5) {
    array_push($errors, 'Password length must be greater than 5');
    $isValid = false;
  }

    $user_id      = $_POST['log_in_id'];
    $password_id  = $_POST['password_id'];
    $table_name   = $wpdb->prefix.'users';

    $userdata   = get_user_by('login', $user_id);
  
    $result = $wpdb->get_results( "SELECT * FROM $table_name WHERE user_login = '$user_id'" );
   // $userdata   = get_user_by('account-my', $user_id);
    $resultdata = wp_check_password($password_id, $result[0]->user_pass, $result[0]->ID);

  $verify_login_id = get_user_meta($result[0]->ID, 'is_activated', true);
  $verify_form_id = get_user_meta($result[0]->ID, 'is_activated_flag', true);
    if(empty($verify_login_id) && empty($verify_form_id)){
       if ( in_array( 'administrator', (array) $userdata->roles )){
         $isValid = true;
      }else{
        array_push($errors, 'Your account is not activated.');
        $isValid = false;
      }

    }

  if($isValid && $resultdata == true){
    try {
      $creds = array(
        'user_login'    => $user_id,
        'user_password' => $password_id,
        'remember'      => true
      );
      $user = wp_signon($creds, false);

      if(is_wp_error($user)){
        $isValid = false;
        array_push($errors, 'The password you entered for the email address '.$user_id.' is incorrect');
      }
    }
    catch(Exception $e){
      $isValid = false;
      array_push($errors, $e->getMessage());
    }
  }

  echo json_encode(array('success' => $isValid, 'errors' => $errors));

/*   
    $result = $wpdb->get_results( "SELECT * FROM $table_name WHERE user_login = '$user_id'" );

    $userdata   = get_user_by('account-my', $user_id);
    $resultdata = wp_check_password($password_id, $result[0]->user_pass, $result[0]->ID);

    if($resultdata == 'true'){
        $maindata = 1;
    }else{
        $maindata = 2;
    }
    echo json_encode($maindata);*/
    exit();
}

 //User Update 
add_action('wp_ajax_UserUpdate', 'UserUpdate_func');
//add_action('wp_ajax_nopriv_UserUpdate', 'UserUpdate_func');
function UserUpdate_func() {
   check_ajax_referer( 'update-user', 'security' );

    global $current_user, $wpdb;
    $message = '';
    $error = array();
    $user_id = $_POST['userid'];
    $first_name = $_POST['first_name'];
    $last_name  = $_POST['last_name'];
    $email = $_POST['email'];
    $p_address = $_POST['address'];              
    $apt_num = $_POST['apt_num'];                       
    $city = $_POST['city'];                    
    $state = $_POST['state'];                     
    $zip_code = $_POST['zip_code'];               
    $display_name = $_POST['display_name'];
    $user_details = $_POST['user_details'];
    $password = $_POST['current_password'];
    $password_new = $_POST['new_password'];
//    $conf_pass = $_POST['confirm_p'];
    $table_name = $wpdb->prefix.'users';

    $status = true;

    $userdata = get_user_by('id', $user_id);
    $resultdata = wp_check_password($password, $userdata->data->user_pass, $userdata->ID);
  
    if(!empty($first_name) || !empty($last_name) || !empty($display_name) || !empty($user_details) || !empty($p_address) || !empty($apt_num) || !empty($city) || !empty($state) || !empty($zip_code)){
          $status = true;  
    }else{
          array_push($error, "You need to fill at least one data.");
          $status = false; 
    }

    /* Update user password. */
    if (!empty($password_new ) && !empty($password) ) {
        if ( $userdata && $resultdata){
            $status = true;   
        }
        else{
          $status = false;
          array_push($error, "You have entered wrong current password");
        }
    }
  
    if(empty($email)){
        array_push($error, "You need to fill your email box");
        $status = false;
      }
     else if(email_exists(esc_attr( $email )) == $user_id ){
          array_push($error, "This email is already used by another user. Try a different one.");
          $status = false;
      }

  if($status){
      try{  
           if(!empty($email)){
              wp_update_user( array ('ID' => $user_id, 'user_email' => esc_attr( $email)));
           }
           if(!empty($password_new )){
             wp_update_user( array( 'ID' => $user_id, 'user_pass' => esc_attr( $password_new ) ) );
           }
           if( !empty( $display_name) ){
                wp_update_user(array('ID' => $user_id, 'display_name' => esc_attr( $display_name) ));
            }
            if ( !empty( $first_name ) ){
                update_user_meta( $user_id, 'first_name', esc_attr( $first_name ) );
            }
            if ( !empty( $last_name ) ){
                update_user_meta($user_id, 'last_name', esc_attr( $last_name ) );
            }
            if ( !empty( $user_details ) ){
                update_user_meta( $user_id, 'description', esc_attr( $user_details ) );
            }
            if ( !empty( $p_address ) ){
                update_user_meta( $user_id, 'user_address1', esc_attr( $p_address ) );
            }
            if ( !empty( $apt_num ) ){
                update_user_meta( $user_id, 'user_address2', esc_attr( $apt_num ) );
            }
            if ( !empty( $city ) ){
                update_user_meta( $user_id, 'user_city', esc_attr( $city ) );
            }
            if ( !empty( $state ) ){
                update_user_meta( $user_id, 'user_state', esc_attr( $state ) );
            }
            if ( !empty( $zip_code ) ){
                update_user_meta( $user_id, 'user_zip', esc_attr( $zip_code ) );
            }
            $message = "User Updated Successfully";  
        }
        catch(Exception $e){
            $status = false;
            array_push($error, $e->getMessage()); 
        }
      }

    echo json_encode(array('success'=>$status, 'error'=>$error, 'message'=>$message));
    exit();
}

add_action('wp_footer', 'myplugin_ajaxurl');
function myplugin_ajaxurl() {
   echo '<script type="text/javascript">
           var ajaxurl = "' . admin_url('admin-ajax.php') . '";
         </script>';
}

// Save Personal Details form
add_action( 'wp_ajax_save_personal_details', 'save_personal_details_callback' );
add_action( 'wp_ajax_nopriv_save_personal_details', 'save_personal_details_callback' );
function save_personal_details_callback() {
  $errors = array();
  $params = array();
  parse_str($_POST['formData'], $params);

  $isValid = true;
  if(
    empty($params['first_name']) ||
    empty($params['last_name']) ||
    empty($params['address1']) ||
    empty($params['city']) ||
    empty($params['zip']) ||
    empty($params['gov_id']) ||
    empty($params['state']) ||
    empty($params['birth_month']) ||
    empty($params['birth_day']) ||
    empty($params['birth_year']) ||
    empty($params['user_phone']) ||
    empty($params['user_ssn'])){
    array_push($errors, 'A Required field is missing');
    $isValid = false;
  }
  
  if(!is_user_logged_in()){
   array_push($errors, 'You need to log in first for further proceeding from my account page');
   $isValid = false;
  }

  if($isValid){
    try {
      //save data here
      update_user_meta( get_current_user_id(), 'user_city', $params['city'] );
      update_user_meta( get_current_user_id(), 'user_state', $params['state'] );
      update_user_meta( get_current_user_id(), 'user_zip', $params['zip'] );
      update_user_meta( get_current_user_id(), 'user_gov_id', $params['gov_id'] );
      update_user_meta( get_current_user_id(), 'user_address1', $params['address1'] );
      update_user_meta( get_current_user_id(), 'user_address2', $params['address2'] );
      update_user_meta( get_current_user_id(), 'birth_month', $params['birth_month'] );
      update_user_meta( get_current_user_id(), 'birth_day', $params['birth_day'] );
      update_user_meta( get_current_user_id(), 'birth_year', $params['birth_year'] );
      update_user_meta( get_current_user_id(), 'user_phone', $params['user_phone'] );
      update_user_meta( get_current_user_id(), 'user_phone_secondary', $params['user_phone_secondary'] );
      update_user_meta( get_current_user_id(), 'user_ssn', $params['user_ssn'] );

      //extra data for US and Canada
      // update_user_meta( get_current_user_id(), 'user_occupation', $params['user_occupation'] );
      // update_user_meta( get_current_user_id(), 'user_occupation_years', $params['user_occupation_years'] );
      // update_user_meta( get_current_user_id(), 'user_present_employer', $params['user_present_employer'] );
      // update_user_meta( get_current_user_id(), 'user_present_position', $params['user_present_position'] );
      // update_user_meta( get_current_user_id(), 'user_business_address', $params['user_business_address'] );
      // update_user_meta( get_current_user_id(), 'user_business_phone', $params['user_business_phone'] );
      // update_user_meta( get_current_user_id(), 'user_business_fax', $params['user_business_fax'] );
      // update_user_meta( get_current_user_id(), 'isVoterOutsideUs', $params['isVoterOutsideUs'] );
      // update_user_meta( get_current_user_id(), 'user_voter_countries', $params['user_voter_countries'] );
      // update_user_meta( get_current_user_id(), 'user_residence_countries', $params['user_residence_countries'] );
      // update_user_meta( get_current_user_id(), 'user_relationships', $params['user_relationships'] );
      // update_user_meta( get_current_user_id(), 'user_investment_experience', $params['user_investment_experience'] );
      // update_user_meta( get_current_user_id(), 'isForSelf', $params['isForSelf'] );
      // update_user_meta( get_current_user_id(), 'user_for_whom', $params['user_for_whom'] );
      // update_user_meta( get_current_user_id(), 'user_accountant', $params['user_accountant'] );
      // update_user_meta( get_current_user_id(), 'user_attorney', $params['user_attorney'] );
      // update_user_meta( get_current_user_id(), 'user_adviser', $params['user_adviser'] );
    }
    catch(Exception $e){
      $isValid = false;
      array_push($errors, $e->getMessage());
    }
  }

  print json_encode(array('success' => $isValid, 'errors' => $errors));
  die();
}

// add image upload code
add_action( 'wp_ajax_image_file_upload', 'image_file_upload_callback' );
add_action( 'wp_ajax_nopriv_image_file_upload', 'image_file_upload_callback' );
function image_file_upload_callback() {

  $errors = array();
  $isValid = true;
  if(isset($_FILES['file']) && is_array($_FILES['file'])){
      
        $validextensions = array("jpeg", "jpg", "png", "pdf");
        $temporary = explode(".", basename($_FILES["file"]["name"]));
        $file_extension = end($temporary);

  if($isValid){
    try {

    if ((($_FILES["file"]["type"] == "image/png") || ($_FILES["file"]["type"] == "image/jpg") || ($_FILES["file"]["type"] == "image/jpeg") || ($_FILES["file"]["type"] == "application/pdf")) && in_array($file_extension, $validextensions) && $_FILES["file"]["size"] <= 2000000) {
    
      if ($_FILES["file"]["error"] > 0)
      {
          array_push($errors, "Return Code: " . $_FILES["file"]["error"] ."<br/>");
          $isValid = false;
      }
      else
      {
       //  if ( ! function_exists( 'wp_handle_upload' ) ) {
       //   require_once( ABSPATH . 'wp-admin/includes/file.php' );
       // }

      require_once( ABSPATH . 'wp-admin/includes/admin.php' );
      require_once( ABSPATH . 'wp-admin/includes/media.php' );

         if ($_FILES['file']['name'])  {
                  $file = array(
                      'name' => $_FILES['file']['name'],
                      'type' => $_FILES['file']['type'],
                      'tmp_name' => $_FILES['file']['tmp_name'],
                      'error' => $_FILES['file']['error'],
                      'size' => $_FILES['file']['size']
                  );
              $upload_overrides = array('test_form' => false);
              $movefile  = wp_handle_upload($file, $upload_overrides);

            if (isset($movefile['error']) || isset($movefile['upload_error_handler']))
               {
                 return false;
               }
             else {
               $filename = $movefile['file'];
               $attachment = array(
                 'post_mime_type' => $movefile['type'],
                 'post_title' => preg_replace('/\.[^.]+$/', '', basename($filename)) ,
                 'post_content' => '',
                 'post_status' => 'inherit',
                 'guid' => $movefile['url']
               );

               $attachment_id = wp_insert_attachment($attachment, $filename );
               require_once (ABSPATH . 'wp-admin/includes/image.php');
                $attachment_data = wp_generate_attachment_metadata($attachment_id, $filename);
                wp_update_attachment_metadata($attachment_id, $attachment_data);
            }
          }
        }
      }
      else
      {
        array_push($errors, "<span id='invalid'>***Invalid file Size or Type***<span>");
        $isValid = false;
      }
    }
      catch(Exception $e){
         $isValid = false;
        array_push($errors, $e->getMessage());
      }
    }

  echo json_encode(array('success' => $isValid, 'errors' => $errors, 'img_id'=> $attachment_id));
   die;
  }  
}

//delete image upload code
add_action('wp_ajax_cvf_delete_files', 'cvf_delete_files');
add_action('wp_ajax_nopriv_cvf_delete_files', 'cvf_delete_files'); // Allow front-end submission
function cvf_delete_files(){
  $dataid = $_POST['dataid'];
  wp_delete_attachment( $dataid );
  echo json_encode(array('data'=>$dataid, 'success'=>true));
  exit();
}

//create order
add_action( 'wp_ajax_create_order', 'create_order_callback' );
add_action( 'wp_ajax_nopriv_create_order', 'create_order_callback' );
function create_order_callback() {
  $errors = array();
  $isValid = true;

  $orderDetails = array();
  parse_str($_POST['formData'], $orderDetails);
  $signature = $_POST['user_signature'];
  $id_proof_img = $orderDetails['img_upload'];
  $tax_img_upload = $orderDetails['tax_img_upload'];
 // $id_proof_img = $orderDetails['id_img_upload'];

  if(empty($signature) ||
   empty($orderDetails['shares']) ||
   empty($orderDetails['handlingCostHidden']) ||
   empty($orderDetails['totalAmountHidden']) || 
   empty($orderDetails['totalAmountForCCHidden'])
  )
  {
    array_push($errors, 'A Required field is missing');
    $isValid = false;
  }

  if(empty($id_proof_img)){
     array_push($errors, 'You need to upload your ID proof photo');
     $isValid = false;
  }
  // if(empty($tax_img_upload)){
  //    array_push($errors, 'You need to upload your photo');
  //    $isValid = false;
  // }
  // if(empty($id_proof_img)){
  //    array_push($errors, 'You need to upload your at least one id proof');
  //    $isValid = false;
  // }

/*  if($signature == 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAADICAYAAADGFbfiAAAHFklEQVR4Xu3VsQ0AAAjDMPr/0/yQ2exdLKTsHAECBAgQCAILGxMCBAgQIHAC4gkIECBAIAkISGIzIkCAAAEB8QMECBAgkAQEJLEZESBAgICA+AECBAgQSAICktiMCBAgQEBA/AABAgQIJAEBSWxGBAgQICAgfoAAAQIEkoCAJDYjAgQIEBAQP0CAAAECSUBAEpsRAQIECAiIHyBAgACBJCAgic2IAAECBATEDxAgQIBAEhCQxGZEgAABAgLiBwgQIEAgCQhIYjMiQIAAAQHxAwQIECCQBAQksRkRIECAgID4AQIECBBIAgKS2IwIECBAQED8AAECBAgkAQFJbEYECBAgICB+gAABAgSSgIAkNiMCBAgQEBA/QIAAAQJJQEASmxEBAgQICIgfIECAAIEkICCJzYgAAQIEBMQPECBAgEASEJDEZkSAAAECAuIHCBAgQCAJCEhiMyJAgAABAfEDBAgQIJAEBCSxGREgQICAgPgBAgQIEEgCApLYjAgQIEBAQPwAAQIECCQBAUlsRgQIECAgIH6AAAECBJKAgCQ2IwIECBAQED9AgAABAklAQBKbEQECBAgIiB8gQIAAgSQgIInNiAABAgQExA8QIECAQBIQkMRmRIAAAQIC4gcIECBAIAkISGIzIkCAAAEB8QMECBAgkAQEJLEZESBAgICA+AECBAgQSAICktiMCBAgQEBA/AABAgQIJAEBSWxGBAgQICAgfoAAAQIEkoCAJDYjAgQIEBAQP0CAAAECSUBAEpsRAQIECAiIHyBAgACBJCAgic2IAAECBATEDxAgQIBAEhCQxGZEgAABAgLiBwgQIEAgCQhIYjMiQIAAAQHxAwQIECCQBAQksRkRIECAgID4AQIECBBIAgKS2IwIECBAQED8AAECBAgkAQFJbEYECBAgICB+gAABAgSSgIAkNiMCBAgQEBA/QIAAAQJJQEASmxEBAgQICIgfIECAAIEkICCJzYgAAQIEBMQPECBAgEASEJDEZkSAAAECAuIHCBAgQCAJCEhiMyJAgAABAfEDBAgQIJAEBCSxGREgQICAgPgBAgQIEEgCApLYjAgQIEBAQPwAAQIECCQBAUlsRgQIECAgIH6AAAECBJKAgCQ2IwIECBAQED9AgAABAklAQBKbEQECBAgIiB8gQIAAgSQgIInNiAABAgQExA8QIECAQBIQkMRmRIAAAQIC4gcIECBAIAkISGIzIkCAAAEB8QMECBAgkAQEJLEZESBAgICA+AECBAgQSAICktiMCBAgQEBA/AABAgQIJAEBSWxGBAgQICAgfoAAAQIEkoCAJDYjAgQIEBAQP0CAAAECSUBAEpsRAQIECAiIHyBAgACBJCAgic2IAAECBATEDxAgQIBAEhCQxGZEgAABAgLiBwgQIEAgCQhIYjMiQIAAAQHxAwQIECCQBAQksRkRIECAgID4AQIECBBIAgKS2IwIECBAQED8AAECBAgkAQFJbEYECBAgICB+gAABAgSSgIAkNiMCBAgQEBA/QIAAAQJJQEASmxEBAgQICIgfIECAAIEkICCJzYgAAQIEBMQPECBAgEASEJDEZkSAAAECAuIHCBAgQCAJCEhiMyJAgAABAfEDBAgQIJAEBCSxGREgQICAgPgBAgQIEEgCApLYjAgQIEBAQPwAAQIECCQBAUlsRgQIECAgIH6AAAECBJKAgCQ2IwIECBAQED9AgAABAklAQBKbEQECBAgIiB8gQIAAgSQgIInNiAABAgQExA8QIECAQBIQkMRmRIAAAQIC4gcIECBAIAkISGIzIkCAAAEB8QMECBAgkAQEJLEZESBAgICA+AECBAgQSAICktiMCBAgQEBA/AABAgQIJAEBSWxGBAgQICAgfoAAAQIEkoCAJDYjAgQIEBAQP0CAAAECSUBAEpsRAQIECAiIHyBAgACBJCAgic2IAAECBATEDxAgQIBAEhCQxGZEgAABAgLiBwgQIEAgCQhIYjMiQIAAAQHxAwQIECCQBAQksRkRIECAgID4AQIECBBIAgKS2IwIECBAQED8AAECBAgkAQFJbEYECBAgICB+gAABAgSSgIAkNiMCBAgQEBA/QIAAAQJJQEASmxEBAgQICIgfIECAAIEkICCJzYgAAQIEBMQPECBAgEASEJDEZkSAAAECAuIHCBAgQCAJCEhiMyJAgAABAfEDBAgQIJAEBCSxGREgQICAgPgBAgQIEEgCApLYjAgQIEBAQPwAAQIECCQBAUlsRgQIECAgIH6AAAECBJKAgCQ2IwIECBAQED9AgAABAklAQBKbEQECBAgIiB8gQIAAgSQgIInNiAABAgQExA8QIECAQBIQkMRmRIAAAQIC4gcIECBAIAkISGIzIkCAAAEB8QMECBAgkAQEJLEZESBAgICA+AECBAgQSAICktiMCBAgQOABB1wAyWjdfzMAAAAASUVORK5CYII='){
    array_push($errors, 'Signature is required');
    $isValid = false;
  }*/

 
  $post_id = 0;
  if($isValid){
    try {
      global $current_user;
      get_currentuserinfo();
      $ord_uid = $orderDetails['inputUserId'];
      if($orderDetails['inputOrderId'] == 0){
        $new_post = array(
          'post_title' => 'Temporary Title',
          'post_status' => 'publish',
          'post_date' => date('Y-m-d H:i:s'),
          'post_author' => $current_user->ID,
          'post_type' => 'orders',
          'post_category' => array(0),
        );
        $post_id = wp_insert_post($new_post);

        add_post_meta( $post_id, 'pts_meta_order_photo_upload', $id_proof_img);
        add_post_meta( $post_id, 'pts_meta_order_tax_image_upload', $tax_img_upload);
       // add_post_meta( $post_id, 'pts_meta_order_id_proof_upload', $id_proof_img);
        add_post_meta( $post_id, 'pts_meta_order_signature', $signature);
        add_post_meta( $post_id, 'pts_meta_order_share_count', $orderDetails['shares']);
        add_post_meta( $post_id, 'pts_meta_order_additional_cost', $orderDetails['handlingCostHidden']);
        add_post_meta( $post_id, 'pts_meta_order_total_amount', $orderDetails['totalAmountHidden']);
        //add_post_meta( $post_id, 'pts_meta_order_payment_method', $orderDetails['radioPaymentMethod']);
        add_post_meta($post_id, 'pts_meta_transac_date', date("F j, Y"));
        add_post_meta( $post_id, 'pts_meta_order_status', 'pending');
      }
      else{
        $post_id = $orderDetails['inputOrderId'];
        update_post_meta( $post_id, 'pts_meta_order_photo_upload', $id_proof_img);
        update_post_meta( $post_id, 'pts_meta_order_tax_image_upload', $tax_img_upload);
       // update_post_meta( $post_id, 'pts_meta_order_id_proof_upload', $id_proof_img);
        update_post_meta( $post_id, 'pts_meta_order_signature', $signature);
        update_post_meta( $post_id, 'pts_meta_order_share_count', $orderDetails['shares']);
        update_post_meta( $post_id, 'pts_meta_order_additional_cost', $orderDetails['handlingCostHidden']);
        update_post_meta( $post_id, 'pts_meta_order_total_amount', $orderDetails['totalAmountHidden']);
      }

      $updated_post = array(
          'ID'           => $post_id,
          'post_title'   => "Order ID: ".$post_id." | Shares: ".$orderDetails['shares']." | Amount: $".$orderDetails['totalAmountHidden']." | By: ".$current_user->first_name.' '.$current_user->last_name,
      );
      //Update the post into the database
      wp_update_post( $updated_post );
    }
    catch(Exception $e){
      $isValid = false;
      array_push($errors, $e->getMessage());
    }
  }

  echo json_encode(array('success' => $isValid, 'errors' => $errors, 'user_id' => $ord_uid, 'order_id'=>$post_id,'amount'=> $orderDetails['totalAmountHidden'], 'amountForCC'=> $orderDetails['totalAmountForCCHidden']));
  die();
}


//update payment
add_action( 'wp_ajax_update_payment_method', 'update_payment_method_callback' );
add_action( 'wp_ajax_nopriv_update_payment_method', 'update_payment_method_callback' );
function update_payment_method_callback() {
  $errors = array();
  $isValid = true;

  $paymentDetails = array();
  parse_str($_POST['formData'], $paymentDetails);

  $post_id = $paymentDetails['inputOrderId'];

  try {
    update_post_meta( $post_id, 'pts_meta_order_payment_method', $paymentDetails['paymentMethodHidden']);
  }
  catch(Exception $e){
    $isValid = false;
    array_push($errors, $e->getMessage());
  }

  echo json_encode(array('success' => $isValid, 'errors' => $errors));
  die();
}


//credit card
add_action( 'wp_ajax_pay_via_credit_card', 'pay_via_credit_card_callback' );
add_action( 'wp_ajax_nopriv_pay_via_credit_card', 'pay_via_credit_card_callback' );
function pay_via_credit_card_callback() {

  $errors = array();
  $success_msg = array();
  $isValid = true;
  $redirect_url= '';

  $paymentDetails = array();
  parse_str($_POST['formData'], $paymentDetails);

  if(empty($paymentDetails['card_owner_name']) ||
     empty($paymentDetails['card_number']) ||
     empty($paymentDetails['card_security_code']) ||
     empty($paymentDetails['card_expiry_mm']) ||
     empty($paymentDetails['card_expiry_yy']) ||
     empty($paymentDetails['card_address1']) ||
     empty($paymentDetails['card_city']) ||
     empty($paymentDetails['card_state']) ||
     empty($paymentDetails['card_zip']) ||
     empty($paymentDetails['inputOrderId'])) {
    array_push($errors, 'A Required field is missing');
    $isValid = false;
  }

  if($isValid){
    $processingFee = 10;
    $post_id = $paymentDetails['inputOrderId'];
    $userId = $post->post_author;
    $redirect_url = home_url('/account-my').'?order_id='.$post_id.'&user_id='.$userId;

    $post = get_post($post_id);
    $title = $post->post_title;
   

    $fname = get_the_author_meta( 'first_name', $userId );
    $lname = get_the_author_meta( 'last_name', $userId );
    $email = get_the_author_meta( 'user_email', $userId );
    $address1 = $paymentDetails['card_address1'];
    $address2 = $paymentDetails['card_address2'];
    $user_city = $paymentDetails['card_city'];
    $user_state = $paymentDetails['card_state'];
    $user_zip = $paymentDetails['card_zip'];

    /*
    $address1 = get_the_author_meta( 'user_address1', $userId );
    $address2 = get_the_author_meta( 'user_address2', $userId );
    $user_city = get_the_author_meta( 'user_city', $userId );
    $user_state = get_the_author_meta( 'user_state', $userId );
    $user_zip = get_the_author_meta( 'user_zip', $userId );
    */
    $user_phone = get_the_author_meta( 'user_phone', $userId );
    $user_ssn = get_the_author_meta( 'user_ssn', $userId );
    $user_country = get_the_author_meta( 'user_country', $userId );
    if(empty($user_country)){
      $user_country = "USA";
    }

    $amountString = get_post_meta($post_id, 'pts_meta_order_total_amount', true);

    //$amount = str_replace( ',', '', $amountString );
    $amount = $amountString - $processingFee;
    //There is a 3.9% processing fee for credit card on the investment amount.
    $amount = ($amount * 1.039) + $processingFee;
    $api_id = get_option('api_id');
    $transaction_key = get_option('transaction_key');

    try {
      
     update_post_meta( $post_id, 'pts_meta_order_payment_method', 'credit-card');
      /* Create a merchantAuthenticationType object with authentication details
         retrieved from the constants file */
       $merchantAuthentication = new AnetAPI\MerchantAuthenticationType();

      //production keys
      // $merchantAuthentication->setName("4rk69WFXA");
      // $merchantAuthentication->setTransactionKey("67KWY36E7be4uwH2");

       //sandbox keys
       $merchantAuthentication->setName($api_id);
       $merchantAuthentication->setTransactionKey($transaction_key);

      // Set the transaction's refId
       $refId = 'REF'.time();

      // Create the payment data for a credit card
      $creditCard = new AnetAPI\CreditCardType();
      $creditCard->setCardNumber($paymentDetails['card_number']);
      $creditCard->setExpirationDate($paymentDetails['card_expiry_yy']."-".$paymentDetails['card_expiry_mm']);
      $creditCard->setCardCode($paymentDetails['card_security_code']);

      // Add the payment data to a paymentType object
      $paymentOne = new AnetAPI\PaymentType();
      $paymentOne->setCreditCard($creditCard);

      // Create order information
      $order = new AnetAPI\OrderType();
      $order->setInvoiceNumber($post_id);
      $order->setDescription($title);

      // Set the customer's Bill To address
      $customerAddress = new AnetAPI\CustomerAddressType();
      $customerAddress->setFirstName($fname);
      $customerAddress->setLastName($lname);
      //$customerAddress->setCompany("");
      $customerAddress->setAddress($address1 .' '.$address2);
      $customerAddress->setCity($user_city);
      $customerAddress->setState($user_state);
      $customerAddress->setZip($user_zip);
      $customerAddress->setCountry($user_country);

      // Set the customer's identifying information
      $customerData = new AnetAPI\CustomerDataType();
      $customerData->setType("individual");
      $customerData->setId($userId);
      $customerData->setEmail($email);
      //$customerData->setPhone($user_phone);

      // Add values for transaction settings
      //$duplicateWindowSetting = new AnetAPI\SettingType();
      //$duplicateWindowSetting->setSettingName("duplicateWindow");
      //$duplicateWindowSetting->setSettingValue("60");

      // Add some merchant defined fields. These fields won't be stored with the transaction,
      // but will be echoed back in the response.
      //$merchantDefinedField1 = new AnetAPI\UserFieldType();
      //$merchantDefinedField1->setName("customerLoyaltyNum");
      //$merchantDefinedField1->setValue("1128836273");

      //$merchantDefinedField2 = new AnetAPI\UserFieldType();
      //$merchantDefinedField2->setName("favoriteColor");
      //$merchantDefinedField2->setValue("blue");

      // Create a TransactionRequestType object and add the previous objects to it
      $transactionRequestType = new AnetAPI\TransactionRequestType();
      $transactionRequestType->setTransactionType("authCaptureTransaction");
      $transactionRequestType->setAmount($amount);
      $transactionRequestType->setOrder($order);
      $transactionRequestType->setPayment($paymentOne);
      $transactionRequestType->setBillTo($customerAddress);
      $transactionRequestType->setCustomer($customerData);
      //$transactionRequestType->addToTransactionSettings($duplicateWindowSetting);
      //$transactionRequestType->addToUserFields($merchantDefinedField1);
      //$transactionRequestType->addToUserFields($merchantDefinedField2);

      // Assemble the complete transaction request
      $request = new AnetAPI\CreateTransactionRequest();
      $request->setMerchantAuthentication($merchantAuthentication);
      $request->setRefId($refId);
      $request->setTransactionRequest($transactionRequestType);

      // Create the controller and get the response
      $controller = new AnetController\CreateTransactionController($request);
      $response = $controller->executeWithApiResponse(\net\authorize\api\constants\ANetEnvironment::SANDBOX);
      // $response = $controller->executeWithApiResponse(\net\authorize\api\constants\ANetEnvironment::PRODUCTION);

      if ($response != null) {
          // Check to see if the API request was successfully received and acted upon
          if ($response->getMessages()->getResultCode() == 'Ok') {
              // Since the API request was successful, look for a transaction response
              // and parse it to display the results of authorizing the card
              $tresponse = $response->getTransactionResponse();

              if ($tresponse != null && $tresponse->getMessages() != null) {
                  $isValid = true;

                  // $transaction_id = $tresponse->getTransId(); 
                   $payment_status = $response->getMessages()->getResultCode(); 
                  // $payment_response = $tresponse->getResponseCode(); 
                  // $auth_code = $tresponse->getAuthCode(); 
                  // $message_code = $tresponse->getMessages()[0]->getCode(); 
                  // $message_desc = $tresponse->getMessages()[0]->getDescription();

                  array_push($success_msg, " Successfully created transaction with Transaction ID: " . $tresponse->getTransId() . "\n");
                  array_push($success_msg, " Transaction Response Code: " . $tresponse->getResponseCode() . "\n");
                  array_push($success_msg, " Message Code: " . $tresponse->getMessages()[0]->getCode() . "\n");
                  array_push($success_msg, " Auth Code: " . $tresponse->getAuthCode() . "\n");
                  array_push($success_msg, " Description: " . $tresponse->getMessages()[0]->getDescription() . "\n");

                  update_post_meta($post_id, 'pts_meta_order_status', 'paid');
                  update_post_meta($post_id, 'pts_meta_transac_date',  date("F j, Y"));
                  update_post_meta($post_id, 'pts_meta_payment_status', $payment_status);
                 // update_post_meta($post_id, 'pts_meta_payment_response', $payment_response);
                //  update_post_meta($post_id, 'pts_meta_transac_id', $transaction_id);
                  update_post_meta($post_id, 'pts_meta_order_total_amount', $amount);
              }
              else {
                  $isValid = false;
                  array_push($errors,"Transaction Failed \n");
                  if ($tresponse->getErrors() != null) {
                      array_push($errors," Error Code  : " . $tresponse->getErrors()[0]->getErrorCode() . "\n");
                      array_push($errors," Error Message : " . $tresponse->getErrors()[0]->getErrorText() . "\n");
                  }
                  update_post_meta( $post_id, 'pts_meta_order_status', 'cc-transaction-failed');
                  update_post_meta($post_id, 'pts_meta_transac_date',  date("F j, Y"));
              }
              // Or, print errors if the API request wasn't successful
          }
          else {
              $isValid = false;
              array_push($errors,"Transaction Failed \n");
              $tresponse = $response->getTransactionResponse();

              if ($tresponse != null && $tresponse->getErrors() != null) {
                  array_push($errors," Error Code  : " . $tresponse->getErrors()[0]->getErrorCode() . "\n");
                  array_push($errors," Error Message : " . $tresponse->getErrors()[0]->getErrorText() . "\n");
              }
              else {
                  array_push($errors," Error Code  : " . $response->getMessages()->getMessage()[0]->getCode() . "\n");
                  array_push($errors," Error Message : " . $response->getMessages()->getMessage()[0]->getText() . "\n");
              }
              update_post_meta( $post_id, 'pts_meta_order_status', 'cc-transaction-failed');
              update_post_meta($post_id, 'pts_meta_transac_date',  date("F j, Y"));
          }
      }
      else {
        $isValid = false;
        array_push($errors,"No response returned \n");
      }
    }
    catch(Exception $e){
      if($isValid == true){
        array_push($success_msg, $e->getMessage());
      }else{
          // $isValid = false;
        array_push($errors, $e->getMessage());
      }
    }
  
  }

  echo json_encode(array('success' => $isValid, 'errors' => $errors, 'success_msg' => $success_msg, 'redirect_url'=> $redirect_url));
  die();
}


// function curl_get($url) {
//   $curl = curl_init($url);
//   curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
//   curl_setopt($curl, CURLOPT_TIMEOUT, 30);
//   curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);
//   $return = curl_exec($curl);
//   curl_close($curl);
//   return $return;
// }

// Show Extra profile on admin user
add_action( 'show_user_profile', 'extra_user_profile_fields' );
add_action( 'edit_user_profile', 'extra_user_profile_fields' );

function extra_user_profile_fields( $user ) { ?>
    <h3><?php _e("Extra profile information", "blank"); ?></h3>

    <table class="form-table">
      <tr>
          <th><label for="user_phone">Phone Number</label></th>
          <td>
              <input type="text" name="user_phone" id="user_phone" value="<?php echo esc_attr( get_the_author_meta( 'user_phone', $user->ID ) ); ?>" style= "width:35%;"/><br />
              <span class="description">User's primary phone number</span>
          </td>
      </tr>
       <tr>
          <th><label for="user_phone_secondary">Home or Secondary Number</label></th>
          <td>
              <input type="text" name="user_phone_secondary" id="user_phone_secondary" value="<?php echo esc_attr( get_the_author_meta( 'user_phone_secondary', $user->ID ) ); ?>" style= "width:35%;"/><br />
          </td>
      </tr>
      <tr>
          <th><label for="user_address1">Address</label></th>
          <td>
              <input type="text" name="user_address1" id="user_address1" value="<?php echo esc_attr( get_the_author_meta( 'user_address1', $user->ID ) ); ?>" style= "width:35%;" /><br />
          </td>
      </tr>
      <tr>
          <th><label for="user_address2">Apt Number</label></th>
          <td>
              <input type="text" name="user_address2" id="user_address2" value="<?php echo esc_attr( get_the_author_meta( 'user_address2', $user->ID ) ); ?>" style= "width:35%;"/><br />
          </td>
      </tr>
      <tr>
          <th><label for="user_city">City</label></th>
          <td>
              <input type="text" name="user_city" id="user_city" value="<?php echo esc_attr( get_the_author_meta( 'user_city', $user->ID ) ); ?>" style= "width:35%;"  /><br />
          </td>
      </tr>
      <tr>
          <th><label for="user_state">State</label></th>
          <td>
              <input type="text" name="user_state" id="user_state" value="<?php echo esc_attr( get_the_author_meta( 'user_state', $user->ID ) ); ?>" style= "width:35%;"/><br />
          </td>
      </tr>
      <tr>
          <th><label for="user_zip">Zip</label></th>
          <td>
              <input type="text" name="user_zip" id="user_zip" value="<?php echo esc_attr( get_the_author_meta( 'user_zip', $user->ID ) ); ?>" style= "width:35%;"/><br />
          </td>
      </tr>
      <tr>
          <th><label for="user_gov_id">Government ID</label></th>
          <td>
              <input type="text" name="user_gov_id" id="user_gov_id" value="<?php echo esc_attr( get_the_author_meta( 'user_gov_id', $user->ID ) ); ?>" style= "width:35%;"/><br />
          </td>
      </tr>
      <tr>
          <th><label for="user_birthdate">Birth Date</label></th>
          <td>
              <select name="birth_month">
                <option disabled selected value>Month</option>
                <option value="1" <?php if(get_the_author_meta('birth_month', $user->ID) == 1){ echo 'selected'; }?> >January</option>
                <option value="2" <?php if(get_the_author_meta('birth_month', $user->ID) == 2){ echo 'selected'; }?> >February</option>
                <option value="3" <?php if(get_the_author_meta('birth_month', $user->ID) == 3){ echo 'selected'; }?> >March </option>
                <option value="4" <?php if(get_the_author_meta('birth_month', $user->ID) == 4){ echo 'selected'; }?> >April </option>
                <option value="5" <?php if(get_the_author_meta('birth_month', $user->ID) == 5){ echo 'selected'; }?> >May </option>
                <option value="6" <?php if(get_the_author_meta('birth_month', $user->ID) == 6){ echo 'selected'; }?> >June</option>
                <option value="7" <?php if(get_the_author_meta('birth_month', $user->ID) == 7){ echo 'selected'; }?> >July</option>
                <option value="8" <?php if(get_the_author_meta('birth_month', $user->ID) == 8){ echo 'selected'; }?> >August</option>
                <option value="9" <?php if(get_the_author_meta('birth_month', $user->ID) == 9){ echo 'selected'; }?> >September</option>
                <option value="10" <?php if(get_the_author_meta('birth_month', $user->ID) == 10){ echo 'selected'; }?> >October</option>
                <option value="11" <?php if(get_the_author_meta('birth_month', $user->ID) == 11){ echo 'selected'; }?> >November</option>
                <option value="12" <?php if(get_the_author_meta('birth_month', $user->ID) == 12){ echo 'selected'; }?> >December</option>
              </select>

              <select required name="birth_day">
                <option disabled selected value>Day</option>
                <?php for($i=1; $i<=31; $i++ ){ ?>
                        <option value="<?= $i; ?>" <?php if(get_the_author_meta('birth_day', $user->ID) == $i){ echo 'selected'; }?> ><?php echo $i; ?></option>
                <?php } ?>
              </select>

              <select required name="birth_year">
                <option disabled selected value>Year</option>
                <?php for($j=2017; $j>=1905; $j--) { ?>
                    <option value="<?= $j; ?>" <?php if(get_the_author_meta('birth_year', $user->ID) == $j){ echo 'selected'; }?>><?php echo $j; ?></option>
                <?php } ?>
              </select>
          </td>
      </tr>
      <tr>
          <th><label for="user_signature">Country</label></th>
          <td>
            <select id="country" name="user_country" <?php if(get_the_author_meta('user_country', $user->ID) == ""){ echo 'selected'; }?> style= "width:35%;" >
              <option disabled selected value>Please Select Country</option>
              <option value="US" <?php if(get_the_author_meta('user_country', $user->ID) == "US"){ echo 'selected'; }?> >United States</option>
              <option value="CA" <?php if(get_the_author_meta('user_country', $user->ID) == "CA"){ echo 'selected'; }?> >Canada</option>
              <option disabled>--------</option>
              <option value="AF" <?php if(get_the_author_meta('user_country', $user->ID) == "AF"){ echo 'selected'; }?> >Afghanistan</option>
              <option value="AX" <?php if(get_the_author_meta('user_country', $user->ID) == "AX"){ echo 'selected'; }?> >Åland Islands</option>
              <option value="AL" <?php if(get_the_author_meta('user_country', $user->ID) == "AL"){ echo 'selected'; }?> >Albania</option>
              <option value="DZ" <?php if(get_the_author_meta('user_country', $user->ID) == "DZ"){ echo 'selected'; }?> >Algeria</option>
              <option value="AS" <?php if(get_the_author_meta('user_country', $user->ID) == "AS"){ echo 'selected'; }?> >American Samoa</option>
              <option value="AD" <?php if(get_the_author_meta('user_country', $user->ID) == "AD"){ echo 'selected'; }?> >Andorra</option>
              <option value="AO" <?php if(get_the_author_meta('user_country', $user->ID) == "AO"){ echo 'selected'; }?> >Angola</option>
              <option value="AI" <?php if(get_the_author_meta('user_country', $user->ID) == "AI"){ echo 'selected'; }?> >Anguilla</option>
              <option value="AQ" <?php if(get_the_author_meta('user_country', $user->ID) == "AQ"){ echo 'selected'; }?> >Antarctica</option>
              <option value="AG" <?php if(get_the_author_meta('user_country', $user->ID) == "AG"){ echo 'selected'; }?> >Antigua and Barbuda</option>
              <option value="AR" <?php if(get_the_author_meta('user_country', $user->ID) == "AR"){ echo 'selected'; }?> >Argentina</option>
              <option value="AM" <?php if(get_the_author_meta('user_country', $user->ID) == "AM"){ echo 'selected'; }?> >Armenia</option>
              <option value="AW" <?php if(get_the_author_meta('user_country', $user->ID) == "AW"){ echo 'selected'; }?> >Aruba</option>
              <option value="AU" <?php if(get_the_author_meta('user_country', $user->ID) == "AU"){ echo 'selected'; }?> >Australia</option>
              <option value="AT" <?php if(get_the_author_meta('user_country', $user->ID) == "AT"){ echo 'selected'; }?> >Austria</option>
              <option value="AZ" <?php if(get_the_author_meta('user_country', $user->ID) == "AZ"){ echo 'selected'; }?> >Azerbaijan</option>
              <option value="BS" <?php if(get_the_author_meta('user_country', $user->ID) == "BS"){ echo 'selected'; }?> >Bahamas</option>
              <option value="BH" <?php if(get_the_author_meta('user_country', $user->ID) == "BH"){ echo 'selected'; }?> >Bahrain</option>
              <option value="BD" <?php if(get_the_author_meta('user_country', $user->ID) == "BD"){ echo 'selected'; }?> >Bangladesh</option>
              <option value="BB" <?php if(get_the_author_meta('user_country', $user->ID) == "BB"){ echo 'selected'; }?> >Barbados</option>
              <option value="BY" <?php if(get_the_author_meta('user_country', $user->ID) == "BY"){ echo 'selected'; }?> >Belarus</option>
              <option value="BE" <?php if(get_the_author_meta('user_country', $user->ID) == "BE"){ echo 'selected'; }?> >Belgium</option>
              <option value="BZ" <?php if(get_the_author_meta('user_country', $user->ID) == "BZ"){ echo 'selected'; }?> >Belize</option>
              <option value="BJ" <?php if(get_the_author_meta('user_country', $user->ID) == "BJ"){ echo 'selected'; }?> >Benin</option>
              <option value="BM" <?php if(get_the_author_meta('user_country', $user->ID) == "BM"){ echo 'selected'; }?> >Bermuda</option>
              <option value="BT" <?php if(get_the_author_meta('user_country', $user->ID) == "BT"){ echo 'selected'; }?> >Bhutan</option>
              <option value="BO" <?php if(get_the_author_meta('user_country', $user->ID) == "BO"){ echo 'selected'; }?> >Bolivia, Plurinational State of</option>
              <option value="BQ" <?php if(get_the_author_meta('user_country', $user->ID) == "BQ"){ echo 'selected'; }?> >Bonaire, Sint Eustatius and Saba</option>
              <option value="BA" <?php if(get_the_author_meta('user_country', $user->ID) == "BA"){ echo 'selected'; }?> >Bosnia and Herzegovina</option>
              <option value="BW" <?php if(get_the_author_meta('user_country', $user->ID) == "BW"){ echo 'selected'; }?> >Botswana</option>
              <option value="BV" <?php if(get_the_author_meta('user_country', $user->ID) == "BV"){ echo 'selected'; }?> >Bouvet Island</option>
              <option value="BR" <?php if(get_the_author_meta('user_country', $user->ID) == "BR"){ echo 'selected'; }?> >Brazil</option>
              <option value="IO" <?php if(get_the_author_meta('user_country', $user->ID) == "IO"){ echo 'selected'; }?> >British Indian Ocean Territory</option>
              <option value="BN" <?php if(get_the_author_meta('user_country', $user->ID) == "BN"){ echo 'selected'; }?> >Brunei Darussalam</option>
              <option value="BG" <?php if(get_the_author_meta('user_country', $user->ID) == "BG"){ echo 'selected'; }?> >Bulgaria</option>
              <option value="BF" <?php if(get_the_author_meta('user_country', $user->ID) == "BF"){ echo 'selected'; }?> >Burkina Faso</option>
              <option value="BI" <?php if(get_the_author_meta('user_country', $user->ID) == "BI"){ echo 'selected'; }?> >Burundi</option>
              <option value="KH" <?php if(get_the_author_meta('user_country', $user->ID) == "KH"){ echo 'selected'; }?> >Cambodia</option>
              <option value="CM" <?php if(get_the_author_meta('user_country', $user->ID) == "CM"){ echo 'selected'; }?> >Cameroon</option>
              <option value="CV" <?php if(get_the_author_meta('user_country', $user->ID) == "CV"){ echo 'selected'; }?> >Cape Verde</option>
              <option value="KY" <?php if(get_the_author_meta('user_country', $user->ID) == "KY"){ echo 'selected'; }?> >Cayman Islands</option>
              <option value="CF" <?php if(get_the_author_meta('user_country', $user->ID) == "CF"){ echo 'selected'; }?> >Central African Republic</option>
              <option value="TD" <?php if(get_the_author_meta('user_country', $user->ID) == "TD"){ echo 'selected'; }?> >Chad</option>
              <option value="CL" <?php if(get_the_author_meta('user_country', $user->ID) == "CL"){ echo 'selected'; }?> >Chile</option>
              <option value="CN" <?php if(get_the_author_meta('user_country', $user->ID) == "CN"){ echo 'selected'; }?> >China</option>
              <option value="CX" <?php if(get_the_author_meta('user_country', $user->ID) == "CX"){ echo 'selected'; }?> >Christmas Island</option>
              <option value="CC" <?php if(get_the_author_meta('user_country', $user->ID) == "CC"){ echo 'selected'; }?> >Cocos (Keeling) Islands</option>
              <option value="CO" <?php if(get_the_author_meta('user_country', $user->ID) == "CO"){ echo 'selected'; }?> >Colombia</option>
              <option value="KM" <?php if(get_the_author_meta('user_country', $user->ID) == "KM"){ echo 'selected'; }?> >Comoros</option>
              <option value="CG" <?php if(get_the_author_meta('user_country', $user->ID) == "CG"){ echo 'selected'; }?> >Congo</option>
              <option value="CD" <?php if(get_the_author_meta('user_country', $user->ID) == "CD"){ echo 'selected'; }?> >Congo, the Democratic Republic of the</option>
              <option value="CK" <?php if(get_the_author_meta('user_country', $user->ID) == "CK"){ echo 'selected'; }?> >Cook Islands</option>
              <option value="CR" <?php if(get_the_author_meta('user_country', $user->ID) == "CR"){ echo 'selected'; }?> >Costa Rica</option>
              <option value="CI" <?php if(get_the_author_meta('user_country', $user->ID) == "CI"){ echo 'selected'; }?> >Côte d'Ivoire</option>
              <option value="HR" <?php if(get_the_author_meta('user_country', $user->ID) == "HR"){ echo 'selected'; }?> >Croatia</option>
              <option value="CU" <?php if(get_the_author_meta('user_country', $user->ID) == "CU"){ echo 'selected'; }?> >Cuba</option>
              <option value="CW" <?php if(get_the_author_meta('user_country', $user->ID) == "CW"){ echo 'selected'; }?> >Curaçao</option>
              <option value="CY" <?php if(get_the_author_meta('user_country', $user->ID) == "CY"){ echo 'selected'; }?> >Cyprus</option>
              <option value="CZ" <?php if(get_the_author_meta('user_country', $user->ID) == "CZ"){ echo 'selected'; }?> >Czech Republic</option>
              <option value="DK" <?php if(get_the_author_meta('user_country', $user->ID) == "DK"){ echo 'selected'; }?> >Denmark</option>
              <option value="DJ" <?php if(get_the_author_meta('user_country', $user->ID) == "DJ"){ echo 'selected'; }?> >Djibouti</option>
              <option value="DM" <?php if(get_the_author_meta('user_country', $user->ID) == "DM"){ echo 'selected'; }?> >Dominica</option>
              <option value="DO" <?php if(get_the_author_meta('user_country', $user->ID) == "DO"){ echo 'selected'; }?> >Dominican Republic</option>
              <option value="EC" <?php if(get_the_author_meta('user_country', $user->ID) == "EC"){ echo 'selected'; }?> >Ecuador</option>
              <option value="EG" <?php if(get_the_author_meta('user_country', $user->ID) == "EG"){ echo 'selected'; }?> >Egypt</option>
              <option value="SV" <?php if(get_the_author_meta('user_country', $user->ID) == "SV"){ echo 'selected'; }?> >El Salvador</option>
              <option value="GQ" <?php if(get_the_author_meta('user_country', $user->ID) == "GQ"){ echo 'selected'; }?> >Equatorial Guinea</option>
              <option value="ER" <?php if(get_the_author_meta('user_country', $user->ID) == "ER"){ echo 'selected'; }?> >Eritrea</option>
              <option value="EE" <?php if(get_the_author_meta('user_country', $user->ID) == "EE"){ echo 'selected'; }?> >Estonia</option>
              <option value="ET" <?php if(get_the_author_meta('user_country', $user->ID) == "ET"){ echo 'selected'; }?> >Ethiopia</option>
              <option value="FK" <?php if(get_the_author_meta('user_country', $user->ID) == "FK"){ echo 'selected'; }?> >Falkland Islands (Malvinas)</option>
              <option value="FO" <?php if(get_the_author_meta('user_country', $user->ID) == "FO"){ echo 'selected'; }?> >Faroe Islands</option>
              <option value="FJ" <?php if(get_the_author_meta('user_country', $user->ID) == "FJ"){ echo 'selected'; }?> >Fiji</option>
              <option value="FI" <?php if(get_the_author_meta('user_country', $user->ID) == "FI"){ echo 'selected'; }?> >Finland</option>
              <option value="FR" <?php if(get_the_author_meta('user_country', $user->ID) == "FR"){ echo 'selected'; }?> >France</option>
              <option value="GF" <?php if(get_the_author_meta('user_country', $user->ID) == "GF"){ echo 'selected'; }?> >French Guiana</option>
              <option value="PF" <?php if(get_the_author_meta('user_country', $user->ID) == "PF"){ echo 'selected'; }?> >French Polynesia</option>
              <option value="TF" <?php if(get_the_author_meta('user_country', $user->ID) == "TF"){ echo 'selected'; }?> >French Southern Territories</option>
              <option value="GA" <?php if(get_the_author_meta('user_country', $user->ID) == "GA"){ echo 'selected'; }?> >Gabon</option>
              <option value="GM" <?php if(get_the_author_meta('user_country', $user->ID) == "GM"){ echo 'selected'; }?> >Gambia</option>
              <option value="GE" <?php if(get_the_author_meta('user_country', $user->ID) == "GE"){ echo 'selected'; }?> >Georgia</option>
              <option value="DE" <?php if(get_the_author_meta('user_country', $user->ID) == "DE"){ echo 'selected'; }?> >Germany</option>
              <option value="GH" <?php if(get_the_author_meta('user_country', $user->ID) == "GH"){ echo 'selected'; }?> >Ghana</option>
              <option value="GI" <?php if(get_the_author_meta('user_country', $user->ID) == "GI"){ echo 'selected'; }?> >Gibraltar</option>
              <option value="GR" <?php if(get_the_author_meta('user_country', $user->ID) == "GR"){ echo 'selected'; }?> >Greece</option>
              <option value="GL" <?php if(get_the_author_meta('user_country', $user->ID) == "GL"){ echo 'selected'; }?> >Greenland</option>
              <option value="GD" <?php if(get_the_author_meta('user_country', $user->ID) == "GD"){ echo 'selected'; }?> >Grenada</option>
              <option value="GP" <?php if(get_the_author_meta('user_country', $user->ID) == "GP"){ echo 'selected'; }?> >Guadeloupe</option>
              <option value="GU" <?php if(get_the_author_meta('user_country', $user->ID) == "GU"){ echo 'selected'; }?> >Guam</option>
              <option value="GT" <?php if(get_the_author_meta('user_country', $user->ID) == "GT"){ echo 'selected'; }?> >Guatemala</option>
              <option value="GG" <?php if(get_the_author_meta('user_country', $user->ID) == "GG"){ echo 'selected'; }?> >Guernsey</option>
              <option value="GN" <?php if(get_the_author_meta('user_country', $user->ID) == "GN"){ echo 'selected'; }?> >Guinea</option>
              <option value="GW" <?php if(get_the_author_meta('user_country', $user->ID) == "GW"){ echo 'selected'; }?> >Guinea-Bissau</option>
              <option value="GY" <?php if(get_the_author_meta('user_country', $user->ID) == "GY"){ echo 'selected'; }?> >Guyana</option>
              <option value="HT" <?php if(get_the_author_meta('user_country', $user->ID) == "HT"){ echo 'selected'; }?> >Haiti</option>
              <option value="HM" <?php if(get_the_author_meta('user_country', $user->ID) == "HM"){ echo 'selected'; }?> >Heard Island and McDonald Islands</option>
              <option value="VA" <?php if(get_the_author_meta('user_country', $user->ID) == "VA"){ echo 'selected'; }?> >Holy See (Vatican City State)</option>
              <option value="HN" <?php if(get_the_author_meta('user_country', $user->ID) == "HN"){ echo 'selected'; }?> >Honduras</option>
              <option value="HK" <?php if(get_the_author_meta('user_country', $user->ID) == "HK"){ echo 'selected'; }?> >Hong Kong</option>
              <option value="HU" <?php if(get_the_author_meta('user_country', $user->ID) == "HU"){ echo 'selected'; }?> >Hungary</option>
              <option value="IS" <?php if(get_the_author_meta('user_country', $user->ID) == "IS"){ echo 'selected'; }?> >Iceland</option>
              <option value="IN" <?php if(get_the_author_meta('user_country', $user->ID) == "IN"){ echo 'selected'; }?> >India</option>
              <option value="ID" <?php if(get_the_author_meta('user_country', $user->ID) == "ID"){ echo 'selected'; }?> >Indonesia</option>
              <option value="IR" <?php if(get_the_author_meta('user_country', $user->ID) == "IR"){ echo 'selected'; }?> >Iran, Islamic Republic of</option>
              <option value="IQ" <?php if(get_the_author_meta('user_country', $user->ID) == "IQ"){ echo 'selected'; }?> >Iraq</option>
              <option value="IE" <?php if(get_the_author_meta('user_country', $user->ID) == "IE"){ echo 'selected'; }?> >Ireland</option>
              <option value="IM" <?php if(get_the_author_meta('user_country', $user->ID) == "IM"){ echo 'selected'; }?> >Isle of Man</option>
              <option value="IL" <?php if(get_the_author_meta('user_country', $user->ID) == "IL"){ echo 'selected'; }?> >Israel</option>
              <option value="IT" <?php if(get_the_author_meta('user_country', $user->ID) == "IT"){ echo 'selected'; }?> >Italy</option>
              <option value="JM" <?php if(get_the_author_meta('user_country', $user->ID) == "JM"){ echo 'selected'; }?> >Jamaica</option>
              <option value="JP" <?php if(get_the_author_meta('user_country', $user->ID) == "JP"){ echo 'selected'; }?> >Japan</option>
              <option value="JE" <?php if(get_the_author_meta('user_country', $user->ID) == "JE"){ echo 'selected'; }?> >Jersey</option>
              <option value="JO" <?php if(get_the_author_meta('user_country', $user->ID) == "JO"){ echo 'selected'; }?> >Jordan</option>
              <option value="KZ" <?php if(get_the_author_meta('user_country', $user->ID) == "KZ"){ echo 'selected'; }?> >Kazakhstan</option>
              <option value="KE" <?php if(get_the_author_meta('user_country', $user->ID) == "KE"){ echo 'selected'; }?> >Kenya</option>
              <option value="KI" <?php if(get_the_author_meta('user_country', $user->ID) == "KI"){ echo 'selected'; }?> >Kiribati</option>
              <option value="KP" <?php if(get_the_author_meta('user_country', $user->ID) == "KP"){ echo 'selected'; }?> >Korea, Democratic People's Republic of</option>
              <option value="KR" <?php if(get_the_author_meta('user_country', $user->ID) == "KR"){ echo 'selected'; }?> >Korea, Republic of</option>
              <option value="KW" <?php if(get_the_author_meta('user_country', $user->ID) == "KW"){ echo 'selected'; }?> >Kuwait</option>
              <option value="KG" <?php if(get_the_author_meta('user_country', $user->ID) == "KG"){ echo 'selected'; }?> >Kyrgyzstan</option>
              <option value="LA" <?php if(get_the_author_meta('user_country', $user->ID) == "LA"){ echo 'selected'; }?> >Lao People's Democratic Republic</option>
              <option value="LV" <?php if(get_the_author_meta('user_country', $user->ID) == "LV"){ echo 'selected'; }?> >Latvia</option>
              <option value="LB" <?php if(get_the_author_meta('user_country', $user->ID) == "LB"){ echo 'selected'; }?> >Lebanon</option>
              <option value="LS" <?php if(get_the_author_meta('user_country', $user->ID) == "LS"){ echo 'selected'; }?> >Lesotho</option>
              <option value="LR" <?php if(get_the_author_meta('user_country', $user->ID) == "LR"){ echo 'selected'; }?> >Liberia</option>
              <option value="LY" <?php if(get_the_author_meta('user_country', $user->ID) == "LY"){ echo 'selected'; }?> >Libya</option>
              <option value="LI" <?php if(get_the_author_meta('user_country', $user->ID) == "LI"){ echo 'selected'; }?> >Liechtenstein</option>
              <option value="LT" <?php if(get_the_author_meta('user_country', $user->ID) == "LT"){ echo 'selected'; }?> >Lithuania</option>
              <option value="LU" <?php if(get_the_author_meta('user_country', $user->ID) == "LU"){ echo 'selected'; }?> >Luxembourg</option>
              <option value="MO" <?php if(get_the_author_meta('user_country', $user->ID) == "MO"){ echo 'selected'; }?> >Macao</option>
              <option value="MK" <?php if(get_the_author_meta('user_country', $user->ID) == "MK"){ echo 'selected'; }?> >Macedonia, the former Yugoslav Republic of</option>
              <option value="MG" <?php if(get_the_author_meta('user_country', $user->ID) == "MG"){ echo 'selected'; }?> >Madagascar</option>
              <option value="MW" <?php if(get_the_author_meta('user_country', $user->ID) == "MW"){ echo 'selected'; }?> >Malawi</option>
              <option value="MY" <?php if(get_the_author_meta('user_country', $user->ID) == "MY"){ echo 'selected'; }?> >Malaysia</option>
              <option value="MV" <?php if(get_the_author_meta('user_country', $user->ID) == "MV"){ echo 'selected'; }?> >Maldives</option>
              <option value="ML" <?php if(get_the_author_meta('user_country', $user->ID) == "ML"){ echo 'selected'; }?> >Mali</option>
              <option value="MT" <?php if(get_the_author_meta('user_country', $user->ID) == "MT"){ echo 'selected'; }?> >Malta</option>
              <option value="MH" <?php if(get_the_author_meta('user_country', $user->ID) == "MH"){ echo 'selected'; }?> >Marshall Islands</option>
              <option value="MQ" <?php if(get_the_author_meta('user_country', $user->ID) == "MQ"){ echo 'selected'; }?> >Martinique</option>
              <option value="MR" <?php if(get_the_author_meta('user_country', $user->ID) == "MR"){ echo 'selected'; }?> >Mauritania</option>
              <option value="MU" <?php if(get_the_author_meta('user_country', $user->ID) == "MU"){ echo 'selected'; }?> >Mauritius</option>
              <option value="YT" <?php if(get_the_author_meta('user_country', $user->ID) == "YT"){ echo 'selected'; }?> >Mayotte</option>
              <option value="MX" <?php if(get_the_author_meta('user_country', $user->ID) == "MX"){ echo 'selected'; }?> >Mexico</option>
              <option value="FM" <?php if(get_the_author_meta('user_country', $user->ID) == "FM"){ echo 'selected'; }?> >Micronesia, Federated States of</option>
              <option value="MD" <?php if(get_the_author_meta('user_country', $user->ID) == "MD"){ echo 'selected'; }?> >Moldova, Republic of</option>
              <option value="MC" <?php if(get_the_author_meta('user_country', $user->ID) == "MC"){ echo 'selected'; }?> >Monaco</option>
              <option value="MN" <?php if(get_the_author_meta('user_country', $user->ID) == "MN"){ echo 'selected'; }?> >Mongolia</option>
              <option value="ME" <?php if(get_the_author_meta('user_country', $user->ID) == "ME"){ echo 'selected'; }?> >Montenegro</option>
              <option value="MS" <?php if(get_the_author_meta('user_country', $user->ID) == "MS"){ echo 'selected'; }?> >Montserrat</option>
              <option value="MA" <?php if(get_the_author_meta('user_country', $user->ID) == "MA"){ echo 'selected'; }?> >Morocco</option>
              <option value="MZ" <?php if(get_the_author_meta('user_country', $user->ID) == "MZ"){ echo 'selected'; }?> >Mozambique</option>
              <option value="MM" <?php if(get_the_author_meta('user_country', $user->ID) == "MM"){ echo 'selected'; }?> >Myanmar</option>
              <option value="NA" <?php if(get_the_author_meta('user_country', $user->ID) == "NA"){ echo 'selected'; }?> >Namibia</option>
              <option value="NR" <?php if(get_the_author_meta('user_country', $user->ID) == "NR"){ echo 'selected'; }?> >Nauru</option>
              <option value="NP" <?php if(get_the_author_meta('user_country', $user->ID) == "NP"){ echo 'selected'; }?> >Nepal</option>
              <option value="NL" <?php if(get_the_author_meta('user_country', $user->ID) == "NL"){ echo 'selected'; }?> >Netherlands</option>
              <option value="NC" <?php if(get_the_author_meta('user_country', $user->ID) == "NC"){ echo 'selected'; }?> >New Caledonia</option>
              <option value="NZ" <?php if(get_the_author_meta('user_country', $user->ID) == "NZ"){ echo 'selected'; }?> >New Zealand</option>
              <option value="NI" <?php if(get_the_author_meta('user_country', $user->ID) == "NI"){ echo 'selected'; }?> >Nicaragua</option>
              <option value="NE" <?php if(get_the_author_meta('user_country', $user->ID) == "NE"){ echo 'selected'; }?> >Niger</option>
              <option value="NG" <?php if(get_the_author_meta('user_country', $user->ID) == "NG"){ echo 'selected'; }?> >Nigeria</option>
              <option value="NU" <?php if(get_the_author_meta('user_country', $user->ID) == "NU"){ echo 'selected'; }?> >Niue</option>
              <option value="NF" <?php if(get_the_author_meta('user_country', $user->ID) == "NF"){ echo 'selected'; }?> >Norfolk Island</option>
              <option value="MP" <?php if(get_the_author_meta('user_country', $user->ID) == "MP"){ echo 'selected'; }?> >Northern Mariana Islands</option>
              <option value="NO" <?php if(get_the_author_meta('user_country', $user->ID) == "NO"){ echo 'selected'; }?> >Norway</option>
              <option value="OM" <?php if(get_the_author_meta('user_country', $user->ID) == "OM"){ echo 'selected'; }?> >Oman</option>
              <option value="PK" <?php if(get_the_author_meta('user_country', $user->ID) == "PK"){ echo 'selected'; }?> >Pakistan</option>
              <option value="PW" <?php if(get_the_author_meta('user_country', $user->ID) == "PW"){ echo 'selected'; }?> >Palau</option>
              <option value="PS" <?php if(get_the_author_meta('user_country', $user->ID) == "PS"){ echo 'selected'; }?> >Palestinian Territory, Occupied</option>
              <option value="PA" <?php if(get_the_author_meta('user_country', $user->ID) == "PA"){ echo 'selected'; }?> >Panama</option>
              <option value="PG" <?php if(get_the_author_meta('user_country', $user->ID) == "PG"){ echo 'selected'; }?> >Papua New Guinea</option>
              <option value="PY" <?php if(get_the_author_meta('user_country', $user->ID) == "PY"){ echo 'selected'; }?> >Paraguay</option>
              <option value="PE" <?php if(get_the_author_meta('user_country', $user->ID) == "PE"){ echo 'selected'; }?> >Peru</option>
              <option value="PH" <?php if(get_the_author_meta('user_country', $user->ID) == "PH"){ echo 'selected'; }?> >Philippines</option>
              <option value="PN" <?php if(get_the_author_meta('user_country', $user->ID) == "PN"){ echo 'selected'; }?> >Pitcairn</option>
              <option value="PL" <?php if(get_the_author_meta('user_country', $user->ID) == "PL"){ echo 'selected'; }?> >Poland</option>
              <option value="PT" <?php if(get_the_author_meta('user_country', $user->ID) == "PT"){ echo 'selected'; }?> >Portugal</option>
              <option value="PR" <?php if(get_the_author_meta('user_country', $user->ID) == "PR"){ echo 'selected'; }?> >Puerto Rico</option>
              <option value="QA" <?php if(get_the_author_meta('user_country', $user->ID) == "QA"){ echo 'selected'; }?> >Qatar</option>
              <option value="RE" <?php if(get_the_author_meta('user_country', $user->ID) == "RE"){ echo 'selected'; }?> >Réunion</option>
              <option value="RO" <?php if(get_the_author_meta('user_country', $user->ID) == "RO"){ echo 'selected'; }?> >Romania</option>
              <option value="RU" <?php if(get_the_author_meta('user_country', $user->ID) == "RU"){ echo 'selected'; }?> >Russian Federation</option>
              <option value="RW" <?php if(get_the_author_meta('user_country', $user->ID) == "RW"){ echo 'selected'; }?> >Rwanda</option>
              <option value="BL" <?php if(get_the_author_meta('user_country', $user->ID) == "BL"){ echo 'selected'; }?> >Saint Barthélemy</option>
              <option value="SH" <?php if(get_the_author_meta('user_country', $user->ID) == "SH"){ echo 'selected'; }?> >Saint Helena, Ascension and Tristan da Cunha</option>
              <option value="KN" <?php if(get_the_author_meta('user_country', $user->ID) == "KN"){ echo 'selected'; }?> >Saint Kitts and Nevis</option>
              <option value="LC" <?php if(get_the_author_meta('user_country', $user->ID) == "LC"){ echo 'selected'; }?> >Saint Lucia</option>
              <option value="MF" <?php if(get_the_author_meta('user_country', $user->ID) == "MF"){ echo 'selected'; }?> >Saint Martin (French part)</option>
              <option value="PM" <?php if(get_the_author_meta('user_country', $user->ID) == "PM"){ echo 'selected'; }?> >Saint Pierre and Miquelon</option>
              <option value="VC" <?php if(get_the_author_meta('user_country', $user->ID) == "VC"){ echo 'selected'; }?> >Saint Vincent and the Grenadines</option>
              <option value="WS" <?php if(get_the_author_meta('user_country', $user->ID) == "WS"){ echo 'selected'; }?> >Samoa</option>
              <option value="SM" <?php if(get_the_author_meta('user_country', $user->ID) == "SM"){ echo 'selected'; }?> >San Marino</option>
              <option value="ST" <?php if(get_the_author_meta('user_country', $user->ID) == "ST"){ echo 'selected'; }?> >Sao Tome and Principe</option>
              <option value="SA" <?php if(get_the_author_meta('user_country', $user->ID) == "SA"){ echo 'selected'; }?> >Saudi Arabia</option>
              <option value="SN" <?php if(get_the_author_meta('user_country', $user->ID) == "SN"){ echo 'selected'; }?> >Senegal</option>
              <option value="RS" <?php if(get_the_author_meta('user_country', $user->ID) == "RS"){ echo 'selected'; }?> >Serbia</option>
              <option value="SC" <?php if(get_the_author_meta('user_country', $user->ID) == "SC"){ echo 'selected'; }?> >Seychelles</option>
              <option value="SL" <?php if(get_the_author_meta('user_country', $user->ID) == "SL"){ echo 'selected'; }?> >Sierra Leone</option>
              <option value="SG" <?php if(get_the_author_meta('user_country', $user->ID) == "SG"){ echo 'selected'; }?> >Singapore</option>
              <option value="SX" <?php if(get_the_author_meta('user_country', $user->ID) == "SX"){ echo 'selected'; }?> >Sint Maarten (Dutch part)</option>
              <option value="SK" <?php if(get_the_author_meta('user_country', $user->ID) == "SK"){ echo 'selected'; }?> >Slovakia</option>
              <option value="SI" <?php if(get_the_author_meta('user_country', $user->ID) == "SI"){ echo 'selected'; }?> >Slovenia</option>
              <option value="SB" <?php if(get_the_author_meta('user_country', $user->ID) == "SB"){ echo 'selected'; }?> >Solomon Islands</option>
              <option value="SO" <?php if(get_the_author_meta('user_country', $user->ID) == "SO"){ echo 'selected'; }?> >Somalia</option>
              <option value="ZA" <?php if(get_the_author_meta('user_country', $user->ID) == "ZA"){ echo 'selected'; }?> >South Africa</option>
              <option value="GS" <?php if(get_the_author_meta('user_country', $user->ID) == "GS"){ echo 'selected'; }?> >South Georgia and the South Sandwich Islands</option>
              <option value="SS" <?php if(get_the_author_meta('user_country', $user->ID) == "SS"){ echo 'selected'; }?> >South Sudan</option>
              <option value="ES" <?php if(get_the_author_meta('user_country', $user->ID) == "ES"){ echo 'selected'; }?> >Spain</option>
              <option value="LK" <?php if(get_the_author_meta('user_country', $user->ID) == "LK"){ echo 'selected'; }?> >Sri Lanka</option>
              <option value="SD" <?php if(get_the_author_meta('user_country', $user->ID) == "SD"){ echo 'selected'; }?> >Sudan</option>
              <option value="SR" <?php if(get_the_author_meta('user_country', $user->ID) == "SR"){ echo 'selected'; }?> >Suriname</option>
              <option value="SJ" <?php if(get_the_author_meta('user_country', $user->ID) == "SJ"){ echo 'selected'; }?> >Svalbard and Jan Mayen</option>
              <option value="SZ" <?php if(get_the_author_meta('user_country', $user->ID) == "SJ"){ echo 'selected'; }?> >Swaziland</option>
              <option value="SE" <?php if(get_the_author_meta('user_country', $user->ID) == "SE"){ echo 'selected'; }?> >Sweden</option>
              <option value="CH" <?php if(get_the_author_meta('user_country', $user->ID) == "CH"){ echo 'selected'; }?> >Switzerland</option>
              <option value="SY" <?php if(get_the_author_meta('user_country', $user->ID) == "SY"){ echo 'selected'; }?> >Syrian Arab Republic</option>
              <option value="TW" <?php if(get_the_author_meta('user_country', $user->ID) == "TW"){ echo 'selected'; }?> >Taiwan, Province of China</option>
              <option value="TJ" <?php if(get_the_author_meta('user_country', $user->ID) == "TJ"){ echo 'selected'; }?> >Tajikistan</option>
              <option value="TZ" <?php if(get_the_author_meta('user_country', $user->ID) == "TZ"){ echo 'selected'; }?> >Tanzania, United Republic of</option>
              <option value="TH" <?php if(get_the_author_meta('user_country', $user->ID) == "TH"){ echo 'selected'; }?> >Thailand</option>
              <option value="TL" <?php if(get_the_author_meta('user_country', $user->ID) == "TL"){ echo 'selected'; }?> >Timor-Leste</option>
              <option value="TG" <?php if(get_the_author_meta('user_country', $user->ID) == "TG"){ echo 'selected'; }?> >Togo</option>
              <option value="TK" <?php if(get_the_author_meta('user_country', $user->ID) == "TK"){ echo 'selected'; }?> >Tokelau</option>
              <option value="TO" <?php if(get_the_author_meta('user_country', $user->ID) == "TO"){ echo 'selected'; }?> >Tonga</option>
              <option value="TT" <?php if(get_the_author_meta('user_country', $user->ID) == "TT"){ echo 'selected'; }?> >Trinidad and Tobago</option>
              <option value="TN" <?php if(get_the_author_meta('user_country', $user->ID) == "TN"){ echo 'selected'; }?> >Tunisia</option>
              <option value="TR" <?php if(get_the_author_meta('user_country', $user->ID) == "TR"){ echo 'selected'; }?> >Turkey</option>
              <option value="TM" <?php if(get_the_author_meta('user_country', $user->ID) == "TM"){ echo 'selected'; }?> >Turkmenistan</option>
              <option value="TC" <?php if(get_the_author_meta('user_country', $user->ID) == "TC"){ echo 'selected'; }?> >Turks and Caicos Islands</option>
              <option value="TV" <?php if(get_the_author_meta('user_country', $user->ID) == "TV"){ echo 'selected'; }?> >Tuvalu</option>
              <option value="UG" <?php if(get_the_author_meta('user_country', $user->ID) == "UG"){ echo 'selected'; }?> >Uganda</option>
              <option value="UA" <?php if(get_the_author_meta('user_country', $user->ID) == "UA"){ echo 'selected'; }?> >Ukraine</option>
              <option value="AE" <?php if(get_the_author_meta('user_country', $user->ID) == "AE"){ echo 'selected'; }?> >United Arab Emirates</option>
              <option value="GB" <?php if(get_the_author_meta('user_country', $user->ID) == "GB"){ echo 'selected'; }?> >United Kingdom</option>
              <option value="UM" <?php if(get_the_author_meta('user_country', $user->ID) == "UM"){ echo 'selected'; }?> >United States Minor Outlying Islands</option>
              <option value="UY" <?php if(get_the_author_meta('user_country', $user->ID) == "UY"){ echo 'selected'; }?> >Uruguay</option>
              <option value="UZ" <?php if(get_the_author_meta('user_country', $user->ID) == "UZ"){ echo 'selected'; }?> >Uzbekistan</option>
              <option value="VU" <?php if(get_the_author_meta('user_country', $user->ID) == "VU"){ echo 'selected'; }?> >Vanuatu</option>
              <option value="VE" <?php if(get_the_author_meta('user_country', $user->ID) == "VE"){ echo 'selected'; }?> >Venezuela, Bolivarian Republic of</option>
              <option value="VN" <?php if(get_the_author_meta('user_country', $user->ID) == "VN"){ echo 'selected'; }?> >Viet Nam</option>
              <option value="VG" <?php if(get_the_author_meta('user_country', $user->ID) == "VG"){ echo 'selected'; }?> >Virgin Islands, British</option>
              <option value="VI" <?php if(get_the_author_meta('user_country', $user->ID) == "VI"){ echo 'selected'; }?> >Virgin Islands, U.S.</option>
              <option value="WF" <?php if(get_the_author_meta('user_country', $user->ID) == "WF"){ echo 'selected'; }?> >Wallis and Futuna</option>
              <option value="EH" <?php if(get_the_author_meta('user_country', $user->ID) == "EH"){ echo 'selected'; }?> >Western Sahara</option>
              <option value="YE" <?php if(get_the_author_meta('user_country', $user->ID) == "YE"){ echo 'selected'; }?> >Yemen</option>
              <option value="ZM" <?php if(get_the_author_meta('user_country', $user->ID) == "ZM"){ echo 'selected'; }?> >Zambia</option>
              <option value="ZW" <?php if(get_the_author_meta('user_country', $user->ID) == "ZW"){ echo 'selected'; }?> >Zimbabwe</option>
            </select>
          </td>
      </tr>
      <!-- <tr>
        <th><label for="user_survey">Where did you hear about us?</label></th>
        <td>
          <select name="user_survey">
            <option disabled selected value>Please Select One</option>
            <option value="Facebook" <?php if(get_the_author_meta('user_survey', $user->ID) == 'Facebook'){ echo 'selected'; }?>>Facebook</option>
            <option value="Instagram" <?php if(get_the_author_meta('user_survey', $user->ID) == 'Instagram'){ echo 'selected'; }?>>Instagram</option>
            <option value="Twitter" <?php if(get_the_author_meta('user_survey', $user->ID) == 'Twitter'){ echo 'selected'; }?>>Twitter</option>
            <option value="Google" <?php if(get_the_author_meta('user_survey', $user->ID) == 'Google'){ echo 'selected'; }?>>Google</option>
            <option value="Friend" <?php if(get_the_author_meta('user_survey', $user->ID) == 'Friend'){ echo 'selected'; }?>>Friend</option>
            <option value="Church" <?php if(get_the_author_meta('user_survey', $user->ID) == 'Church'){ echo 'selected'; }?>>Church</option>
            <option value="Spectrum Cable" <?php if(get_the_author_meta('user_survey', $user->ID) == 'Spectrum Cable'){ echo 'selected'; }?>>Spectrum Cable</option>
            <option value="OWN" <?php if(get_the_author_meta('user_survey', $user->ID) == 'OWN'){ echo 'selected'; }?>>OWN</option>
            <option value="BET" <?php if(get_the_author_meta('user_survey', $user->ID) == 'BET'){ echo 'selected'; }?>>BET</option>
            <option value="TVOne" <?php if(get_the_author_meta('user_survey', $user->ID) == 'TVOne'){ echo 'selected'; }?>>TVOne</option>
            <option value="Radio" <?php if(get_the_author_meta('user_survey', $user->ID) == 'Radio'){ echo 'selected'; }?>>Radio</option>
            <option value="Television" <?php if(get_the_author_meta('user_survey', $user->ID) == 'Television'){ echo 'selected'; }?>>Television</option>
            <option value="Other" <?php if(get_the_author_meta('user_survey', $user->ID) == 'Other'){ echo 'selected'; }?>>Other</option>
          </select>
        </td>
      </tr> -->
   <!--    <tr>
           <th><label for="user_shares">Number of Shares</label></th>
           <td>
               <input type="number" name="user_shares" id="user_shares" value="<?php echo esc_attr( get_the_author_meta( 'user_shares', $user->ID ) ); ?>" style= "width:35%;" /><br />
               <span class="description">User's verified total number of shares to be inputted by Punch TV Studios Employee</span>
           </td>
       </tr>   -->    
    </table>
<?php }

add_action( 'personal_options_update', 'save_extra_user_profile_fields' );
add_action( 'edit_user_profile_update', 'save_extra_user_profile_fields' );

function save_extra_user_profile_fields( $user_id ) {
    if ( !current_user_can( 'edit_user', $user_id ) ) {
        return false;
    }
    update_user_meta( $user_id, 'user_phone', $_POST['user_phone'] );
    update_user_meta( $user_id, 'user_phone_secondary', $_POST['user_phone_secondary']);
    update_user_meta( $user_id, 'user_city', $_POST['user_city'] );
    update_user_meta( $user_id, 'user_state', $_POST['user_state'] );
    update_user_meta( $user_id, 'user_zip', $_POST['user_zip'] );
    update_user_meta( $user_id, 'user_gov_id', $_POST['user_gov_id'] );
    update_user_meta( $user_id, 'user_address1', $_POST['user_address1'] );
    update_user_meta( $user_id, 'user_address2', $_POST['user_address2'] );
    update_user_meta( $user_id, 'birth_month', $_POST['birth_month'] );
    update_user_meta( $user_id, 'birth_day', $_POST['birth_day'] );
    update_user_meta( $user_id, 'birth_year', $_POST['birth_year'] );
    //update_user_meta( $user_id, 'user_survey', $_POST['user_survey'] );
    update_user_meta( $user_id, 'user_country', $_POST['user_country'] );
    //update_user_meta( $user_id, 'user_shares', $_POST['user_shares'] );
}


function createOldPDF($orderId, $userId){

require_once (WP_CONTENT_DIR.'/themes/pholx_child/vendor/autoload.php');
// require_once (WP_CONTENT_DIR.'/themes/pholx_child/setasign/fpdf/fpdf.php');
//require_once (WP_CONTENT_DIR.'/themes/pholx_child/setasign/fpdi/fpdi.php');

$mpdf = new \Mpdf\Mpdf(['default_font_size' => 9,
                       'default_font' => 'Helvetica']);

// Buffer the following html with PHP so we can store it to a variable later
ob_start();
// This is where your script would normally output the HTML using echo or print

$my_postid = 4178;//This is page id or post id

$user = get_user_by('id', $userId);

$url = wp_get_attachment_url( get_post_thumbnail_id($my_postid), 'thumbnail' ); 
$fist_cont_1 = get_field('content_1', $my_postid);
$fist_cont_2 = get_field('content_2', $my_postid);
$fist_cont_3 = get_field('content_3', $my_postid);
$fist_cont_4 = get_field('second_page_content1', $my_postid);
$fist_cont_5 = get_field('second_page_content3', $my_postid);

$sec_cont_1 = get_field('second_page_content_5a', $my_postid);

$last_page = get_field('last_page_content_1', $my_postid);

// name & address
$p_address = get_the_author_meta('user_address1', $user->ID);
$apt_numner = get_the_author_meta('user_address2', $user->ID);
$city = get_the_author_meta('user_city', $user->ID);
$state = get_the_author_meta('user_state', $user->ID);
$zip_code = get_the_author_meta('user_zip', $user->ID);
$email = $user->user_email;

//shares
$numberOfShares = get_post_meta($orderId, 'pts_meta_order_share_count', true);
$amount = get_post_meta($orderId, 'pts_meta_order_total_amount', true);

//signature & image
$signature= get_post_meta($orderId, 'pts_meta_order_signature', true);
$image_content = base64_decode(str_replace("data:image/png;base64,","",$signature)); //remove "data:image/png;base64,"
$tempfile = tmpfile(); // create temporary file
fwrite($tempfile, $image_content); // fill data to temporary file
$metaDatas = stream_get_meta_data($tempfile);
$tmpFilename = $metaDatas['uri'];

$img_up = get_post_meta($orderId, 'pts_meta_order_photo_upload', true);
$img_src = get_attached_file($img_up);

$img_tax = get_post_meta($orderId, 'pts_meta_order_tax_image_upload', true);
$img_tax_src = wp_get_attachment_url($img_tax);


$html = $html_2 = $html_3 = '';
$html .= '  <div class="container"><div class="row"><div class="col-md-offset-1 col-md-10">';
$html .= '<div class="text-center"><img src="'.$url.'" alt="" style="max-width:100px;margin:0 0 30px 0;"/></div>';
$html .=  $fist_cont_1;
$html .= '<hr/><p class="text-right">'.$fist_cont_2.'</p>';
$html .= '<p class="text-right">'.date("F").'_____'.date("Y").'</p><br/><br/>';
$html .= '<p class="text-right">'.$fist_cont_3.'</p>';
ob_end_clean();
$html_2 .= '<div class="text-center">'.$fist_cont_4.'</div>';
$html_2 .= '<p style="text-indent: 50px;">This Subscription Agreement (“Agreement”) executed this <span class="unerline">'.date("jS").'</span> day of <span class="unerline">'.date("F").'</span> '. date("Y").'  by and between Punch TV Studios, Inc. (“Punch” or “Company”), located at 11705 Willake Street, Santa Fe Springs, California 90670, and “Investor”:</p>';
$html_2 .= '<div>';
$html_2 .= '<div class="columns small-1 large-offset-1">';
$html_2 .= '<p>Name: <span class="unerline" style="width: 92%;float: right;height: 20px;">'.$user->user_firstname.' '.$user->user_lastname.'</span></p>';
$html_2 .= '<p>Address: <span class="unerline" style="width: 92%;float: right;height: 20px;">'.$p_address.', '.$apt_numner .', '.$city.', '.$state.', '.$zip_code.'</span></p></div>';
$html_2 .= '<div class="columns small-10"><p> Email: <span class="unerline" style="width: 92%;float: right;height: 20px;">'.$email.'</span></p></div>';   
$html_2 .= '</div>';
$html_2 .= '<p class="text-center">'.$fist_cont_5.'</p>';
  // check if the repeater field has rows of data
  if( get_field('second_page_content4', $my_postid) ) {
      while( the_repeater_field('second_page_content4', $my_postid) ) { 
          $html_2 .= '<p style="text-indent: 50px;">'.get_sub_field('text1').'</p>';
      }
    }
$html_2 .= '<ul>';
$html_2 .= '<li>';
$html_2 .= '<p>'.$sec_cont_1.'</p>';
$html_2 .= '<p><b>Number of Shares:       </b><span class="unerline" id="ag-shares-count">'.$numberOfShares.'</span> shares</p>';
$html_2 .= '<p><b>Total Investment:       </b>$<span class="unerline" id="ag-shares-price">'.$amount.'</span> U.S.</p>';
$html_2 .= '</li>';
 // check if the repeater field has rows of data
  if( get_field('second_page_content5', $my_postid) ) {
    while( the_repeater_field('second_page_content5', $my_postid) ) { 
      $ord_text = get_sub_field('content');
      $html_2 .=  '<li>';
      $html_2 .=  get_sub_field('title');
      $html_2 .= '<ul>';
            foreach ($ord_text as $ord_value) { 
              $html_2 .= '<li><p>'. $ord_value['ordered_text'].'</p></li>';
             } 
      $html_2 .= '</ul>';   
      $html_2 .= '</li>';
          }
      }
$html_2 .= '</ul>';
$html_2 .= '<p>IN WITNESS, the parties have executed this Agreement on <span class="unerline">'. date("F j,").'</span> '.date('Y').'</p>';
$html_2 .=  '<p>'.$last_page.'</p>';
$html_2 .= '</div></div></div>';
ob_end_clean();
$html_3 .=  '<div class="container"><div class="row"><div class="col-md-offset-1 col-md-10">';
$html_3 .=  '<div class="row">';
$html_3 .=  '<div style="width: 50%; position: relative; float: left;"><p><b>On behalf of Punch TV Studios, Inc. </b></p><div style="width: 200px;height: 100px;outline: 1px solid #e4e4e4;background: #f5f5f5;margin:59px 0 46px 0;"></div><span class="unerline" style="width:100%;"></span><p>By: Joseph Collins</p></div>';
$html_3 .=  '<div style="width: 50%; position: relative; float: left;"><p><b>Investor</b></p><div class="signature-wrapper"><img src="'.$tmpFilename.'" alt/></div><span class="unerline" style="width:100%;"></span><p>By: '.$user->user_firstname.' '.$user->user_lastname.'</p></div>';
$html_3 .=  '<div style="width: 50%; position: relative; float: left;"><p><b>Id Proof</b></p><div class="signature-wrapper"><img style ="width: 50%;" src="'.$img_src.'" alt/></div><span class="unerline" style="width:100%;"></span></div>';
if(!empty($img_tax_src)){
$html_3 .=  '<div style="width: 50%; position: relative; float: left;"><p><b>Tax Document</b></p><p>'.$img_tax_src.'</p><span class="unerline" style="width:100%;"></span>';
}
$html_3 .= '</div>'; 
$html_3 .= '</div></div></div>';

// Define the Header/Footer before writing anything so they appear on the first page
$mpdf->SetFooter('
<table width="100%" style="vertical-align: bottom; font-family: Helvetica; 
    font-size: 8pt;">
    <tr>
        <td width="33%">{DATE F d,Y}</td>
        <td width="33%" align="center">Subscription Agreement</td>
        <td width="33%" style="text-align: right;">Pageno {PAGENO}/{nbpg}</td>
    </tr>
</table>');
// Now collect the output buffer into a variable
ob_end_clean();
$mpdf->SetDisplayMode('fullpage');
// send the captured HTML from the output buffer to the mPDF class for processing
$stylesheet = file_get_contents(WP_CONTENT_DIR.'/themes/pholx_child/assets/css/subscript_style.css');
$mpdf->WriteHTML($stylesheet, \Mpdf\HTMLParserMode::HEADER_CSS);

// $mpdf->WriteHTML('Hello World', \Mpdf\HTMLParserMode::HTML_BODY);

$mpdf->WriteHTML($html);
$mpdf->AddPage();
$mpdf->WriteHTML($html_2);
$mpdf->AddPage();
$mpdf->WriteHTML($html_3);
// $mpdf->WriteHTML($html_3, \Mpdf\HTMLParserMode::HTML_BODY);

//out put in browser below output function
$mpdf->Output('subscription_aggrement_'.$orderId.'.pdf', 'I');

}

/*require_once (WP_CONTENT_DIR.'/themes/pholx_child/helper_function.php');
$pdf = new PDF_HTML();

function output_pdf($orderId, $userId) {

        $my_postid = 4178;//This is page id or post id
        $content_post = get_post($my_postid);
        $content = $content_post->post_content;
        $user = get_user_by('id', $userId);

    if( ! empty( $content ) ) {
        global $pdf;
        $title_line_height = 10;
        $content_line_height = 8;

            $pdf->AddPage();

            // Add a line break
            $pdf->Ln(15);

        $pdf->SetFont('Helvetica','',10 );
        $pdf->SetXY(100, 115);
        $pdf->Write(0,  $user->user_firstname );

        $pdf->SetXY(52, 124);
        $pdf->Write(0, $user->user_lastname);

        $numberOfShares = get_post_meta($orderId, 'pts_meta_order_share_count', true);
        $amount = get_post_meta($orderId, 'pts_meta_order_total_amount', true);

        $pdf->SetXY(164, 132);
        $pdf->Write(0, $numberOfShares);

        $pdf->SetXY(164, 163);
        $pdf->Write(0, $amount);


        $signature= get_post_meta($orderId, 'pts_meta_order_signature', true);

        $image_content = base64_decode(str_replace("data:image/png;base64,","",$signature)); //remove "data:image/png;base64,"
        $tempfile = tmpfile(); // create temporary file
        fwrite($tempfile, $image_content); // fill data to temporary file
        $metaDatas = stream_get_meta_data($tempfile);
        $tmpFilename = $metaDatas['uri'];
     
        $pdf->Image($tmpFilename,60,200,80,0,'PNG');
 
            // Post Content
            $pdf->Ln(10);
            $pdf->SetFont('Helvetica','',10);
            $pdf->WriteHTML($content);
             // Image
            $img_up = get_post_meta($orderId, 'pts_meta_order_photo_upload', true);
            $img_src = get_attached_file($img_up);
            $pdf->Image($img_src,10,10,50,50,'jpg');
    }

    //$pdf->Output("agreement.pdf", "F");
    $pdf->Output();
    exit;
}*/