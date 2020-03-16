<?php /* Template Name: Generate Order Details PDF */ ?>
<?php
// if ( !is_user_logged_in() ) {
//   wp_redirect(home_url('/signup'));
//   exit;
// }
// else{
  if(isset($_GET["order_id"]) && !empty($_GET["order_id"])){

    // $userId;
    // if(isset($_GET["user_id"]) && !empty($_GET["user_id"])){
    //     $userId = $_GET["user_id"];
    // }
    // else{
    //     global $current_user;
    //     get_currentuserinfo();        
    //     $userId = $current_user->ID;
    // }
    createOrderPDF($_GET["order_id"]); 
  }
  else{
    wp_redirect(home_url('/my-account'));
    exit;    
  }
// }
?>

