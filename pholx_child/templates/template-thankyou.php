<?php /* 
Template Name: Thank You Page 
*/
get_header(); 

if ( !is_user_logged_in() ) {
  wp_redirect('/account-my');
  exit;
}

//there is an order_id
$orderId = 0;
if(isset($_GET["order_id"]) && !empty($_GET["order_id"])){
  $orderId = $_GET["order_id"];
}
else{
  //there is no order_id but user is logged in
  wp_redirect('/account-my');
  exit;
}

global $current_user;

$args = array(
  'author'        =>  $current_user->ID,
  'orderby'       =>  'post_date',
  'order'         =>  'ASC',
  'post_type'     =>  'orders',
  'posts_per_page' => -1 // no limit
);

$post = get_post($orderId);

if(!$post){
  wp_redirect('/account-my');
  exit;
}

//current user is not the author of this order
if($current_user->ID != $post->post_author){
  wp_redirect('/account-my');
  exit;
}


$isThankYouShownAlready = get_post_meta($orderId, 'pts_meta_order_thank_you_shown', true);
//one time visit to thank you page
if($isThankYouShownAlready == 'yes'){
  wp_redirect('/account-my');
  exit;
}
else{
  update_post_meta( $orderId, 'pts_meta_order_thank_you_shown', 'yes');
}


$totalAmountString = get_post_meta($orderId, 'pts_meta_order_total_amount', true);
$transaction_id = get_post_meta($orderId, 'pts_meta_transac_id', true);
$orderSts = get_post_meta($orderId, 'pts_meta_order_status', true);  
$totalAmount = (float) str_replace(',', '', $totalAmountString);

?>
    <div class="hero clear-top-bar medium">
      <div class="hero-text tint darker">
        <div class="layout-table">
          <div class="layout-table-row">
            <div class="layout-table-cell middle text-center">
              <h1 class="page-title">Thank You</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div class="status-main" id="main"> 
          <h4>Payment Information</h4>
          <p><b>Reference Number:</b> Reference #<?php echo $orderId; ?></p>
          <p><b>Transaction ID:</b> <?php echo $transaction_id; ?></p>
          <p><b>Status:</b> <?php echo $orderSts; ?></p>
          <p><b>Price:</b> <?php echo $totalAmount; ?></p>

         <div class="panel-material">
            <p>Thank you for your investment  in Punch TV Studios. With your support we can achieve significant milestones in television broadcasting.</p>
            <div class="reference-number"><?php echo 'Reference #'; ?>: <b id="textOrderId"><?php echo $post->ID; ?></b></div>
            <div id="notForCreditCard">
              <p>Please include the Reference Number in the memo section of your check.</p>
              <p>Your Payment may take up to four days to process and your patience is appreciated.</p>
            </div>
            <p>You can download your signed subscription agreement below.</p>
            <a id="downloadAgreementLink" target="_blank" href="/generate-pdf?order_id=<?php echo $orderId; ?>" class="button large transparent on-white"><?php echo 'Download Subscription Agreement'; ?></a>
            <p>To review your share purchase go to <a href="<?php echo esc_url(home_url('/account-my')); ?>">My Account</a></p>
          </div>
      </div>

      <!--  <div class="row column" id="main">
        <div class="columns large-6 large-offset-3 text-center">
       
          <br/><br/><br/><br/><br/><br/>
        </div>
       </div> --> 

        <?php //echo do_shortcode( '[affiliate_conversion_script amount="'.$totalAmount.'" reference="'.$orderId.'" ]' ) ?>

<?php get_footer(); ?>


