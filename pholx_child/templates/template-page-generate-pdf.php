<?php /* Template Name: Generate PDF */
//get_header(); ?>
<?php

if ( !is_user_logged_in() ) {
  wp_redirect(home_url('/create-an-account'));
  exit;
}
else{
  $order_id = base64_decode($_GET["order_id"]);

  if(isset($order_id) && !empty($order_id)){

    $userId = '';
    if(isset($_GET["user_id"]) && !empty($_GET["user_id"])){
        $userId = base64_decode($_GET["user_id"]);
    }
    else{
        global $current_user;
        get_currentuserinfo();
        $userId = $current_user->ID;
    }
    createOldPDF($order_id, $userId);
  }
  else{
    wp_redirect('/account-my');
    exit;
  }
}


