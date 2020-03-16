<?php 
/*Template Name: Template Invest Form */
if(!is_user_logged_in()){
      wp_redirect( home_url('/create-an-account') );
}else{

get_header();

global $current_user;
$page_inv = get_page_by_path('invest-question');

if(isset($_GET['ques_form'])){
    $data = base64_decode($_GET['ques_form']);
    $unser_d = maybe_unserialize($data);
    $u_id = $unser_d['uid'];
    $code = get_user_meta($unser_d['uid'], 'activation_flag', true);
       // verify whether the code given is the same as ours
          if($code == $unser_d['flag']){
              // update the user meta
             update_user_meta($unser_d['uid'], 'is_activated_flag', '1');
              $script = "<script>jQuery(document).ready(function(){";
              $script .= "jQuery('p#success').fadeIn(function() {";
              $script .= "jQuery('p#success').html('<strong>Success:</strong> Your account has been activated!'); }); ";
              $script .= "setTimeout(function(){ jQuery('p#success').fadeOut('slow') }, 2200);";
              $script .= "}); </script>";
          }
    }
    $user_logged = is_user_logged_in();
?>
<section>
      <p id="success" style="display: none;"></p> 
      <div class="slide-down-menu" id="mobile-menu" data-toggler=".is-active" aria-expanded="true">
         <ul class="vertical menu" data-accordion-menu="1yw3ok-accordion-menu" role="menu" aria-multiselectable="true">
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1153 is-accordion-submenu-parent" role="menuitem" aria-haspopup="true" aria-label="About" aria-controls="ul4ykw-acc-menu" aria-expanded="false" id="q2jbk8-acc-menu-link">
               <a href="https://www.punchtvstudios.com/company/">About</a>
               <ul class="sub-menu menu submenu is-accordion-submenu" data-submenu="" role="menu" style="display: none;" aria-labelledby="q2jbk8-acc-menu-link" aria-hidden="true" id="ul4ykw-acc-menu">
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1179 is-submenu-item is-accordion-submenu-item" role="menuitem"><a href="https://www.punchtvstudios.com/watch-live/">Watch the Punch TV Studios Annual Stockholders Meeting</a></li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1154 is-submenu-item is-accordion-submenu-item" role="menuitem"><a href="https://www.punchtvstudios.com/company/ceo/">Meet the CEO</a></li>
                  <li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-6912 is-submenu-item is-accordion-submenu-item" role="menuitem"><a href="https://www.punchtvstudios.com/pictures-videos/">Pictures &amp; Videos</a></li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1157 is-submenu-item is-accordion-submenu-item" role="menuitem"><a href="https://www.punchtvstudios.com/company/recent-awards/">Recent Awards</a></li>
               </ul>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-8079" role="menuitem"><a href="https://www.punchtvstudios.com/blog/rent-our-studios-for-special-events/">Have Your Event at Punch</a></li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4857 is-accordion-submenu-parent" role="menuitem" aria-haspopup="true" aria-label="Investor Relations" aria-controls="7yn4k3-acc-menu" aria-expanded="false" id="78s69b-acc-menu-link">
               <a href="https://www.punchtvstudios.com/invest-questionnaire/#">Investor Relations</a>
               <ul class="sub-menu menu submenu is-accordion-submenu" data-submenu="" role="menu" style="display: none;" aria-labelledby="78s69b-acc-menu-link" aria-hidden="true" id="7yn4k3-acc-menu">
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4843 is-accordion-submenu-parent is-submenu-item is-accordion-submenu-item" role="menuitem" aria-haspopup="true" aria-label="Invest Now" aria-controls="7yy45x-acc-menu" aria-expanded="false" id="mj5wmv-acc-menu-link">
                     <a href="https://www.punchtvstudios.com/">Invest Now</a>
                     <ul class="sub-menu menu submenu is-accordion-submenu" data-submenu="" role="menu" style="display: none;" aria-labelledby="mj5wmv-acc-menu-link" aria-hidden="true" id="7yy45x-acc-menu">
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9045 is-submenu-item is-accordion-submenu-item" role="menuitem"><a href="https://www.punchtvstudios.com/invest-in-punch/">Invest in Punch</a></li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-9092 is-submenu-item is-accordion-submenu-item" role="menuitem"><a href="https://www.punchtvstudios.com/blog/understanding-investing/">Watch Video – Understanding Investing</a></li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1163 is-submenu-item is-accordion-submenu-item" role="menuitem"><a href="https://www.punchtvstudios.com/invest-2/investor-packet/">Investor Packet</a></li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5304 is-submenu-item is-accordion-submenu-item" role="menuitem"><a target="_blank" rel="noopener noreferrer" href="https://www.sec.gov/cgi-bin/browse-edgar?CIK=0001651699&amp;action=getcompany">SEC Filings</a></li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1165 is-submenu-item is-accordion-submenu-item" role="menuitem"><a href="https://www.punchtvstudios.com/invest-2/social-media-disclosure/">Social Media Disclosure</a></li>
                     </ul>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9044 is-submenu-item is-accordion-submenu-item" role="menuitem"><a href="https://www.punchtvstudios.com/update-my-information/">Update My Information</a></li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5318 is-submenu-item is-accordion-submenu-item" role="menuitem"><a href="https://www.punchtvstudios.com/contact-investor-relations/">Contact Investor Relations</a></li>
               </ul>
            </li>
            <li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-1176 is-accordion-submenu-parent" role="menuitem" aria-haspopup="true" aria-label="News" aria-controls="6et6a3-acc-menu" aria-expanded="false" id="evsx6r-acc-menu-link">
               <a href="https://www.punchtvstudios.com/blog/">News</a>
               <ul class="sub-menu menu submenu is-accordion-submenu" data-submenu="" role="menu" style="display: none;" aria-labelledby="evsx6r-acc-menu-link" aria-hidden="true" id="6et6a3-acc-menu">
                  <li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1178 is-submenu-item is-accordion-submenu-item" role="menuitem"><a href="https://www.punchtvstudios.com/blog/press-releases/">Press Releases</a></li>
               </ul>
            </li>
         </ul>
      </div>
      <div class="row column clear-top-bar">
         <br><br><br>
         <ul class="progress-tracker">
            <li data-target-id="#step1" data-step-count="1" class="is-active"><span>Bid Review</span></li>
            <li data-target-id="#step2" data-step-count="2"><span>Provide personal information</span></li>
            <li data-target-id="#step3" data-step-count="3"><span>Specify # of actions</span></li>
            <li data-target-id="#step4" data-step-count="4"><span>Sign agreement</span></li>
            <li data-target-id="#step5" data-step-count="5"><span>Select payment method</span></li>
         </ul>
      </div>
      <div id="step1">
         <div class="row">
            <h2 class="text-center">BID REVIEW</h2>
            <div class="large-12 columns">
               <div class="step1-banner">
                  <div class="overlay">
                     <div class="row">
                        <div class="large-7 columns">
                           <?php if( have_rows('step1_content') ): ?>
                                  <?php while( have_rows('step1_content') ): the_row(); 
                                      // Get sub field values.
                                      $title = get_sub_field('title');
                                      $content = get_sub_field('content');
                                      echo $title;
                                      echo $content;
                                      ?>
                              
                                  <?php endwhile; ?>
                              <?php endif; ?>
                       <!--     <h3>PUNCH TV STUDIOS</h3>
                           <p>Currently, Punch TV Studios is raising $ 750 million in direct financing. We are offering 75 million shares at $ 10 per share. It is now possible for investors to become shareholders and active participants in our success. Punch TV Studios is really a company at the forefront of media, technology and advances in broadcasting. Invest in Punch TV Studios. We are using technology to create a global media empire.</p> -->
                        </div>
                        <div class="large-5 columns">
                           <?php echo get_field('step1_description', $page_inv->ID ); ?>
                           <!-- <h3>$750 Million</h3>
                           <p>@ $10 per share</p>
                           <h3>Let's build the Punch TV Studios Entertainment Complex</h3>
                           <p>Our Time, Our Legacy</p> -->
                        </div>
                     </div>
                  </div>
                  <img src="<?= get_stylesheet_directory_uri() .'/assets/images/invest-bg.jpg' ?>" style="width:100%;" alt="">
               </div>
            </div>
         </div>
         <div class="row">
            <div class="large-6 large-offset-3 columns mt20 mb20">
               <div class="panel-material">
                  <h2 class="text-center">INVESTMENT PACKAGE</h2>
                  <br>
                  <div class="row text-center">
                     <div class="large-3 medium-3 small-6 medium-offset-3 columns">
                        <a href="<?php echo get_stylesheet_directory_uri(); ?>/pdf/InvestorBooklet.pdf" target="_blank"><img src="<?= get_stylesheet_directory_uri() .'/assets/images/pdf-icon-3.png' ?>" alt=""></a>
                        <p><small>Investor Brochure</small></p>
                     </div>
                     <div class="large-3 medium-3 small-6 columns end">
                        <a href="<?php echo get_stylesheet_directory_uri(); ?>/pdf/Finanacials.pdf" target="_blank"><img src="<?= get_stylesheet_directory_uri() .'/assets/images/pdf-icon-3.png' ?>" alt=""></a>
                        <p><small>Financial Projections</small></p>
                     </div>
                  </div>
                  <div class="row mt20 mb20">
                     <div class="medium-1 small-1 columns">
                        <input id="cbTerms" type="checkbox">
                     </div>
                     <div class="medium-11 small-11 columns">
                        <label for="cbTerms">I have reviewed the terms of the offers and wish to continue</label>
                     </div>
                  </div>
                  <div class="form-errors" id="formErrorsStep1">
                     <p>Please confirm that you have reviewed the terms of the offers.</p>
                  </div>
                   <div class="form-errors" id="formErrorsStep1a">
                     <p>You must be logged in before proceeding to the further step.</p>
                  </div>
                  <div class="text-center">
                     <button class="next-or-previous button on-white large" data-current-id="#step1" data-next-id="#step2" data-direction="forward">NEXT</button>
                  </div>
                  <input type="hidden" name="user_logged_in" id="user_logged_in" value="<?= $user_logged; ?>">
               </div>
            </div>
         </div>
      </div>
      <!-- #step1 -->
      <div id="step2" class="row" style="display:none;">
         <div class="columns large-6 large-offset-3 mb20">
            <div class="panel-material">
               <span class="next-or-previous back" data-current-id="#step2" data-next-id="#step1" data-direction="back"><i class="fa fa-angle-left" aria-hidden="true"></i>Last step</span>
               <h2 class="text-center">PERSONAL INFORMATION</h2>
               <p class="text-center">All your information is stored securely on our servers.</p>
               <br>
               <form id="personalDetailsForm" data-abide="lppwen-abide" novalidate="">
                  <input id="isUsorCanadian" type="hidden" value="no">
                  <div class="row">
                     <div class="medium-12 columns">
                        <label>Unique email address per investor. <span><a href="#" id="email_ulink">Learn More</a></span>              
                           <input type="email" name="user_email" placeholder="" value="<?php !(empty($u_id)) ? the_author_meta( 'user_email', $u_id ) :the_author_meta( 'user_email', $current_user->ID ); ?>" disabled="" required="">
                        </label>
                     </div>
                     <div class="medium-6 small-6 columns">
                        <label>First name                
                           <input type="text" name="first_name" placeholder="" value="<?php !(empty($u_id)) ? the_author_meta( 'first_name', $u_id ) : the_author_meta( 'first_name', $current_user->ID ); ?>" required="" autocomplete="off" />
                        </label>
                     </div>
                     <div class="medium-6 small-6 columns">
                        <label>Surname                
                           <input type="text" name="last_name" placeholder="" value="<?php !(empty($u_id)) ? the_author_meta( 'last_name', $u_id ) : the_author_meta( 'last_name', $current_user->ID ); ?>" required="" autocomplete="off"/>
                        </label>
                     </div>
                     <div class="medium-12 columns">
                        <label>Physical Address
                        <input type="text" name="address1" placeholder="Dirección, P.O. caja, nombre de la empresa" value="<?php !(empty($u_id)) ? the_author_meta( 'user_address1', $u_id ) : the_author_meta( 'user_address1', $current_user->ID ); ?>" required="" autocomplete="off" />
                        </label>
                     </div>
                     <div class="medium-12 columns">
                        <label>Apt Number
                        <input type="text" name="address2" placeholder="apartamento, suite, unidad, edificio, piso, etc." value="<?php !(empty($u_id)) ? the_author_meta( 'user_address2', $u_id ) : the_author_meta( 'user_address2', $current_user->ID ); ?>" autocomplete="off" />
                        </label>
                     </div>
                     <div class="medium-4 small-6 columns">
                        <label>City                
                           <input type="text" name="city" placeholder="" value="<?php !(empty($u_id)) ? the_author_meta( 'user_city', $u_id ) : the_author_meta( 'user_city', $current_user->ID ); ?>" required="" autocomplete="off" />
                        </label>
                     </div>
                     <div class="medium-4 small-6 columns">
                        <label>State                
                           <input type="text" name="state" placeholder="" value="<?php !(empty($u_id)) ? the_author_meta( 'user_state', $u_id ) : the_author_meta( 'user_state', $current_user->ID ); ?>" required="" autocomplete="off" />
                        </label>
                     </div>
                     <div class="medium-4 small-12 columns">
                        <label>Postal Code 
                           <input type="text" name="zip" placeholder="" value="<?php !(empty($u_id)) ? the_author_meta( 'user_zip', $u_id ) : the_author_meta('user_zip', $current_user->ID ); ?>" required="" autocomplete="off" />
                        </label>
                     </div>
                     <div class="medium-4 small-12 columns">
                        <label>Government ID
                           <input type="text" name="gov_id" placeholder="" value="<?php !(empty($u_id)) ? the_author_meta( 'user_gov_id', $u_id ) : the_author_meta('user_gov_id', $current_user->ID ); ?>" required="" autocomplete="off" />
                        </label>
                     </div>

                     <div class="medium-9 small-12 columns">
                        <label>Birthdate</label>
                        <div class="row collapse">
                           <div class="medium-5 small-12 columns">
                              <select required="" name="birth_month">
                                 <option disabled="" selected="" value="">Month</option>
                                 <option value="1" <?php echo (!(empty($u_id)) ? ((get_the_author_meta( 'birth_month', $u_id ) == "1") ? 'selected' : '') : ((get_the_author_meta('birth_month', $current_user->ID) == "1") ?  'selected' : '')); ?>>January</option>
                                 <option value="2" <?php echo (!(empty($u_id)) ? ((get_the_author_meta( 'birth_month', $u_id ) == "2") ? 'selected' : '') : ((get_the_author_meta('birth_month', $current_user->ID) == "2") ?  'selected' : '')); ?>>February</option>
                                 <option value="3" <?php echo (!(empty($u_id)) ? ((get_the_author_meta( 'birth_month', $u_id ) == "3") ? 'selected' : '') : ((get_the_author_meta('birth_month', $current_user->ID) == "3") ?  'selected' : '')); ?>>March</option>
                                 <option value="4" <?php echo (!(empty($u_id)) ? ((get_the_author_meta( 'birth_month', $u_id ) == "4") ? 'selected' : '') : ((get_the_author_meta('birth_month', $current_user->ID) == "4") ?  'selected' : '')); ?>>April</option>
                                 <option value="5" <?php echo (!(empty($u_id)) ? ((get_the_author_meta( 'birth_month', $u_id ) == "5") ? 'selected' : '') : ((get_the_author_meta('birth_month', $current_user->ID) == "5") ?  'selected' : '')); ?>>May</option>
                                 <option value="6" <?php echo (!(empty($u_id)) ? ((get_the_author_meta( 'birth_month', $u_id ) == "6") ? 'selected' : '') : ((get_the_author_meta('birth_month', $current_user->ID) == "6") ?  'selected' : '')); ?>>June</option>
                                 <option value="7" <?php echo (!(empty($u_id)) ? ((get_the_author_meta( 'birth_month', $u_id ) == "7") ? 'selected' : '') : ((get_the_author_meta('birth_month', $current_user->ID) == "7") ?  'selected' : '')); ?>>July</option>
                                 <option value="8" <?php echo (!(empty($u_id)) ? ((get_the_author_meta( 'birth_month', $u_id ) == "8") ? 'selected' : '') : ((get_the_author_meta('birth_month', $current_user->ID) == "8") ?  'selected' : '')); ?>>August</option>
                                 <option value="9" <?php echo (!(empty($u_id)) ? ((get_the_author_meta( 'birth_month', $u_id ) == "9") ? 'selected' : '') : ((get_the_author_meta('birth_month', $current_user->ID) == "9") ?  'selected' : '')); ?>>September</option>
                                 <option value="10" <?php echo (!(empty($u_id)) ? ((get_the_author_meta( 'birth_month', $u_id ) == "10") ? 'selected' : '') : ((get_the_author_meta('birth_month', $current_user->ID) == "10") ?  'selected' : '')); ?>>October</option>
                                 <option value="11" <?php echo (!(empty($u_id)) ? ((get_the_author_meta( 'birth_month', $u_id ) == "11") ? 'selected' : '') : ((get_the_author_meta('birth_month', $current_user->ID) == "11") ?  'selected' : '')); ?>>November</option>
                                 <option value="12" <?php echo (!(empty($u_id)) ? ((get_the_author_meta( 'birth_month', $u_id ) == "12") ? 'selected' : '') : ((get_the_author_meta('birth_month', $current_user->ID) == "12") ?  'selected' : '')); ?>>December</option>
                              </select>
                           </div>
                           <div class="medium-3 small-12 columns">
                              <select required="" name="birth_day">
                                 <option disabled="" selected="" value="">Day</option>
                                 <?php for($i=1; $i<=30; $i++) {?>
                                    <option value="<?= $i; ?>" <?php echo (!(empty($u_id)) ? ((get_the_author_meta( 'birth_day', $u_id ) == $i) ? 'selected' : '') : ((get_the_author_meta('birth_day', $current_user->ID) == $i) ?  'selected' : '')); ?>><?php echo $i; ?></option>
                                 <?php } ?>
                              </select>
                           </div>
                           <div class="medium-4 small-12 columns">
                              <select required="" name="birth_year">
                                 <option disabled="" selected="" value="">Year</option>
                                 <?php for($j=2017; $j>=1905; $j--) {?>
                                    <option value="<?= $j; ?>" <?php echo (!(empty($u_id)) ? ((get_the_author_meta( 'birth_year', $u_id ) == $j) ? 'selected' : '') : ((get_the_author_meta('birth_year', $current_user->ID) == $j) ?  'selected' : '')); ?>><?php echo $j; ?></option>
                                 <?php } ?>
                              </select>
                           </div>
                        </div>
                     </div>
                     <div class="medium-3 small-12 columns">
                        <label>SSN/EIN #
                        <input type="text" name="user_ssn" placeholder="" value="<?php !(empty($u_id)) ? the_author_meta( 'user_ssn', $u_id ) : the_author_meta('user_ssn', $current_user->ID ); ?>" required="" autocomplete="off">
                        </label>
                     </div>
                     <div class="medium-6 small-12 columns">
                        <label>Cell Phone Number               
                           <input type="text" name="user_phone" placeholder="" value="<?php !(empty($u_id)) ? the_author_meta( 'user_phone', $u_id ) :  the_author_meta('user_phone', $current_user->ID ); ?>" required="" autocomplete="off">
                        </label>
                     </div>
                     <div class="medium-6 small-12 columns">
                        <label>Home Number or Secondary number
                        <input type="text" name="user_phone_secondary" placeholder="" value="<?php !(empty($u_id)) ? the_author_meta( 'user_phone_secondary', $u_id ) :  the_author_meta('user_phone_secondary', $current_user->ID ); ?>" autocomplete="off">
                        </label>
                     </div>
                  </div>
                  <div class="row column text-center">
                     <div data-abide-error="" class="alert callout" style="display: none;">
                        <p><i class="fi-alert"></i> There are some errors in your form.</p>
                     </div>
                     <div class="form-errors" id="formErrorsStep2">
                        <p>Please fill in all the required fields</p>
                     </div>
                     <button type="submit" class="button large">NEXT</button>
                     <br><br>
                  </div>
               </form>
               <button id="btnGoToStep3" class="next-or-previous hide" data-current-id="#step2" data-next-id="#step3" data-direction="forward">NEXT</button>
            </div>
         </div>
         <!-- .columns.large-6.large-offset-3 -->
      </div>
      <!-- #step2 -->
      <form id="sharesOrderForm" novalidate="">
         <input id="minAmountToInvest" type="hidden" name="minAmountToInvest" value="100">
         <div id="step3" class="row" style="display:none;">
            <div class="columns large-6 large-offset-3 mb20">
               <div class="panel-material">
                  <span class="next-or-previous back" data-current-id="#step3" data-next-id="#step2" data-direction="back"><i class="fa fa-angle-left" aria-hidden="true"></i>Last step</span>
                  <h2 class="text-center">NEW STOCK PURCHASE</h2>
                  <label>How many shares would you like to buy?
                        <input type="number" id="shares" name="shares" placeholder="" value="">
                  </label>
                  <table style="border:1px solid #eaeaea;">
                     <tbody>
                        <tr>
                           <th>Maximum number of shares on offer</th>
                           <td>75,000,000</td>
                        </tr>
                        <tr>
                           <th>Price per share</th>
                           <td>$10.00</td>
                        </tr>
                        <tr>
                           <th>Number of Shares Purchasing</th>
                           <td><span id="numberOfShares"></span></td>
                        </tr>
                        <tr>
                           <th>Cost of your investment</th>
                           <td>$ <span id="costOfShares"></span><input id="costOfSharesHidden" type="hidden" name="costOfSharesHidden"></td>
                        </tr>
                        <tr>
                           <th>Processing fee</th>
                           <td>$ <span id="handlingCost"></span> <input id="handlingCostHidden" type="hidden" name="handlingCostHidden"></td>
                        </tr>
                        <tr>
                           <th>Total amount of the transaction</th>
                           <td>$ <span id="totalAmount"></span> <input id="totalAmountHidden" type="hidden" name="totalAmountHidden"></td>
                        </tr>
                        <tr>
                           <th>
                              <div>Credit Card Transaction Amount</div>
                              <span style="font-weight:normal;font-size: 0.8em;">For credit card payments, there is a 3.9% processing fee.</span>
                           </th>
                           <td>
                              $ <span id="totalAmountForCC"></span> <input id="totalAmountForCCHidden" type="hidden" name="totalAmountForCCHidden">
                           </td>
                        </tr>
                     </tbody>
                  </table>
                  <div class="form-errors mt20" id="formErrorsStep3">
                     <p>Please specify the amount of shares you wish to buy</p>
                  </div>
                  <div class="text-center">
                     <button class="next-or-previous button large" data-current-id="#step3" data-next-id="#step4" data-direction="forward" type="button">NEXT</button>
                  </div>
               </div>
            </div>
         </div>
         <!-- #step3 -->
         <div id="step4" style="display:none;">
            <div class="row">
               <div class="columns large-6 large-offset-3 mb20">
                  <div class="panel-material">
                     <span class="next-or-previous back" data-current-id="#step4" data-next-id="#step3" data-direction="back"><i class="fa fa-angle-left" aria-hidden="true"></i> Last step</span>
                     <h2 class="text-center">SIGN AGREEMENT</h2>
                     <p class="text-center">Please read the agreement below and place your signature.</p>
                     <div class="row mt20 mb20">
                        <div class="medium-1 small-1 columns">
                           <input id="agrem_terms" type="checkbox">
                        </div>
                        <div class="medium-11 small-11 columns">
                           <label for="agrem_terms">By clicking "I AGREE", you give your affirmative consent for us to provide you with electronic communications as described in the Disclosure and Consent for the accounts(s) listed above as "paperless."</label>
                        </div>
                  </div>
                  </div>
               </div>
            </div>
            <div class="paper-container">
               <div class="scroll">
                  <div class="row">
                     <div class="columns large-12">
                        <div id="agreement" class="paper">
                           <!-- current language = es -->
                           <?php     
                            $my_postid = $page_inv->ID;//This is page id or post id
                            $content_post = get_post($my_postid);
                            $content = $content_post->post_content;
                            echo $content;
                            ?>
                          <!--  <div class="text-center">
                             <img src="logo.png" alt="" style="max-width:100px;margin:0 0 30px 0;">
                          </div>
                          <h2 class="text-center">
                             SUBSCRIPTION CONTRACT<br>
                             <br>
                             PUNCH TV STUDIOS, INC.<br>
                          </h2>
                          <p>This agreement ("Agreement") is established as of the date set forth below by and between Punch TV Studios, Inc., a Delaware corporation (The "Co Company") and the undersigned ("Subscriber"). Collectively, Punch and the Subscriber will be called the "Parties" and each of the "Parties" This Agreement is intended to establish certain representations, agreements and agreements between the Subscriber and the Company with respect to the offer (the "Offering") for the sale by the Company of Shares of its ordinary shares (the Shares or Securities) as described in the Company Offer Circular of March 3, 2016 (the "Offer Circular"), a copy of which delivered to the Subscriber.</p>
                          <h2 class="text-center">ARTICLE I</h2>
                          <ol>
                             <li>
                                <p><b>Subscription.</b> Subject to the terms and conditions of the present, the Subscriber irrevocably subscribes and agrees to buy from the Company the number of Shares in a purchase of $ 10.00 per Share for the total amount of the Signing Page of the Subscription Contract (the "Price of Purchase")</p>
                             </li>
                             <li>
                                <p><b>Delivery of subscription amount; Subscription Acceptance; Delivery of securities. The subscriber understands and accepts that this subscription is subject to the following terms and conditions:</b></p>
                                <ol>
                                   <li>
                                      <p>Simultaneously to the execution and delivery of this agreement, the Subscriber will pay the purchase price of the shares by means of a check payable to "Punch TV Studios, Inc", by debit transfer, or by bank transfer.</p>
                                   </li>
                                   <li>
                                      <p>This Subscription will be considered accepted only when this agreement has been signed by an authorized official or agent of the Company. The deposit of the purchase price payment for the authorization will not be considered an acceptance of this agreement.</p>
                                   </li>
                                   <li>
                                      <p>The Company will have the right to refuse this subscription, totally or partially.</p>
                                   </li>
                                   <li>
                                      <p>The subscription payment (or, in case of rejection of a part of the subscriber's subscription, the part of the payment corresponding to said rejected part) will be returned promptly, without interest or deductions, if the subscriber's subscription is rejected in its entirety or in part or if the offer is withdrawn or canceled.</p>
                                   </li>
                                   <li>
                                      <p>Upon liquidation of the subscriber's purchase price, subscribers will receive a notification and evidence of the digital entry (or other form of registration) of the number of Shares owned by the subscriber reflected in the books and records of the Company and verified by Security Transfer (the Transfer Agent). what books and records will carry the annotation that the shares were sold depending on regulation A.</p>
                                   </li>
                                </ol>
                             </li>
                          </ol>
                          <h2 class="text-center">ARTICLE 2</h2>
                          <p class="text-center"><b>REPRESENTATIONS AND GUARANTEES OF THE SUBSCRIBER</b></p>
                          <p>In executing this Subscription Agreement, the Subscriber (and, if the Subscriber purchases the Securities subscribed by this means as a trustee, the person or persons for whom the Subscriber purchases it) represents and guarantees, which representations and guarantees are true and complete in all material respects as the date of each Closing Date.</p>
                          <ol>
                             <li>
                                <p><b>Power and Authority Requirement.</b> Said Subscriber has all the necessary powers and authority under all applicable legal provisions to execute and comply with this Subscription Agreement. Any action by the Subscriber required for the legal execution and delivery of this Subscription Agreement has been or will be effectively taken before the Closing.</p>
                             </li>
                             <li>
                                <p><b>Investment Representation.</b> The subscriber understands that the values ​​have not been registered under the Security Law. The Subscriber also understands that the Securities are offered and sold in accordance with a registration exemption contained in the Security Law based, in part, on the Subscriber's representations included in this Subscription Agreement.</p>
                             </li>
                             <li>
                                <p><b>Illiquidity and Continuous Economic Risk.</b> The subscriber acknowledges and criticizes that there is no public market ready for the Securities and there is no guarantee that the market for resale ever exists. The subscriber must assume the economic risk of this investment indefinitely and the Company has no obligation to quote the securities in any market or take any action (including registration under the securities in any market or take any action (including registration under the Securities Act or the Stock Exchange of 1934, as amended) to facilitate the negotiation or resale of the Securities The subscriber recognizes that the subscriber is able to bear the economic risk of losing all the subscriber's investment in the Securities.</p>
                             </li>
                             <li>
                                <p><b>Accredited investor status or Investment limits.</b> The subscriber represents that:</p>
                                <ol>
                                   <li>
                                      <p>The Subscriber is an "Accredited Inventory" with the meaning of Rule 501 of Regulation D under the Securities Act. The Subscriber declares and guarantees that the information established in response to question (c) on the Signature Page of the Subscription Agreement here to the Subscriber is true and correct; or</p>
                                   </li>
                                   <li>
                                      <p>The Purchase Price established in paragraph (b) of the Signing Page of the Subscription Contract, together with any other amount previously used to purchase Securities in this offer, does not include 10% of the majority of the annual income or equity Subscriber net.</p>
                                   </li>
                                </ol>
                                <p>The subscriber declares that, to the extent that he has any questions regarding his status as an accredited investor, or the application of investment limits, he has sought professional advice.</p>
                             </li>
                             <li>
                                <p><b>Shareholder Information.</b> Within five days after receipt of a request from the company or from Securities Transfer Corporation, which acts as the company's management agent, the Subscriber agrees to provide such information with respect to its status as a shareholder (or possible shareholder) and execute and deliver the documents that are reasonably necessary to comply with each and every one of the laws and regulations to which the Company is or may become subject, including, among others, the need to determine the accredited status of the Shareholders of the company. The subscriber also agrees that, in the event that he transfers any Securities, he will require the transfer of said securities to agree to provide said information to the company as a condition of said transfer.</p>
                             </li>
                             <li>
                                <p><b>Company Information </b> The subscriber has read the Offer Circular with the SCE, presented including the section entitled "Risk factors". The Subscriber understands that the Company is subject to all risks that apply to companies in the initial stage, regardless of whether or not those risks are explicitly in the Offer Circular. The Subscriber acknowledges that the Company has not made representations or guarantees for the representative. others with respect to the business or prospects of the Company or its financial condition.</p>
                             </li>
                             <li>
                                <p><b> Valuation.</b>The subscriber acknowledges that the price of the securities was established by the Company based on the internal valuation of the Company and no guarantees regarding the value are offered. The subscriber also recognizes that future offers of securities may have lower valuations, with the result that the Subscriber's investment will have a lower valuation.</p>
                             </li>
                             <li>
                                <p><b>Home.</b> The subscriber maintains the address of the subscribers (and is not a temporary or temporary resident) at the address shown on the signature page.</p>
                             </li>
                             <li>
                                <p><b>No brokerage fees.</b> There are no claims for commission fees, search engines or similar compensation in connection with the transaction contemplated by this subscription agreement or related documents based on any binding agreement arrangement for the subscriber. The Subscriber will indemnify and keep the Company against any liability, loss or expense (including without limitation, reasonable attorneys' fees and out-of-pocket expenses) that arise in relation to such claim.</p>
                             </li>
                             <li>
                                <p><b>Foreign Investors.</b>If the Subscriber is not a person from the United States (as defined in section 7701 (a) (30) of the Internal Revenue Code of 1986, as amended), the Subscriber declares that he has complied with the full observance of the jurisdictional laws in connection with any invitation to subscribe the securities or any agreement or agreement, including (a) the legal requirements in your jurisdiction for the purchase of any security (b) any exchange restrictions applicable to such purchase, (c) any government or other consents to be obtained, and (d) the consequences of the income tax, if any, that may be relevant for the purchase, possession, redemption, sale or transfer of the Securities. The subscription.</p>
                             </li>
                          </ol>
                          <h2 class="text-center">ARTICLE 3</h2>
                          <p class="text-center"><b>SURVIVAL; COMPENSATION</b></p>
                          <ol>
                             <li>
                                <p><b>Survival; Compensation.</b>All statements, warranties and covenants contained in this agreement and the compensation contained in this document will survive (a) the acceptance of this Agreement by the Company, (b) changes in the transaction, documents and instruments described herein that are not material or that they benefit the Subscriber, and (c) the death or disability of the Subscriber. The subscriber recognizes the meaning and legal consequences of the representations, warranties and covenants in Article II of the present and the qualification and suitability to buy the securities. The Subscriber agrees to identify, defend and keep injured the Company, its officers, directors, employees, agents and persons under control, from and against all losses, claims, damages, responsibilities, expenses (including attorneys' fees and disbursements), judgments or amounts paid in the resolution of an action that arises or results from the lack of veracity of any representation of the Subscriber in this document or the breach of any guarantee or agreement hereby signed by the Subscriber. Notwithstanding the foregoing, however, no representation, guarantee, agreement or knowledge made in this document by the subscriber will be considered, in any way, as a waiver of the rights granted under the Security Law or the laws of State security.</p>
                             </li>
                          </ol>
                          <h2 class="text-center">ARTICLE 4</h2>
                          <p class="text-center"><b>MISCELLANEOUS PROVISIONS</b></p>
                          <ol>
                             <li>
                                <p><b>Legends and Titles.</b> The section and section titles throughout this agreement are for reference purposes only and are not considered included in this agreement.</p>
                             </li>
                             <li>
                                <p><b>Notification of changes.</b> The Subscriber accepts and agrees to notify the Company to the extent of any representation, guarantee, agreement or other representation in this agreement in the opposite direction to the consummation of this offering.</p>
                             </li>
                             <li>
                                <p><b>Transferability.</b> This agreement is not assignable by the subscriber, and cannot be modified, waived or terminated except by the written instrument signed by the party against which the execution of such modification, resignation or termination is requested.</p>
                             </li>
                             <li>
                                <p><b> Link Effect.</b> Unless otherwise provided, this agreement will be binding and will benefit the parties and their heirs, executors, administrations, successors, legal representatives and assign appointments, representation, successors, legal representatives and assigns.</p>
                             </li>
                             <li>
                                <p><b>Irrevocable obligation.</b> The obligations of the subscriber will be irrevocable. Except with the consent of the Company, until the consumption or the termination of the offer.</p>
                             </li>
                             <li>
                                <p><b>Full agreement; Amendment. </b> This Agreement establishes the complete agreement and the underestimation of the parties in relation to matters related to the subject. No modification of the agreement will be made without the express written consent of all parties.</p>
                             </li>
                             <li>
                                <p><b>Severability.</b> The invalidity or unenforceability of any particular provision of this Agreement shall not affect any other provision of this Agreement, which shall be construed in all respects, as such valid or unenforceable provision was omitted.</p>
                             </li>
                             <li>
                                <p><b>Meeting place;</b>This agreement will be governed and construed in accordance with the laws of California.</p>
                             </li>
                             <li>
                                <p><b>Notices.</b> All notices, requests, demands, consents and other communications will then be transmitted in writing and will be considered duly delivered by hand or sent by certified mail, with postage paid and with acknowledgment of receipt, addressed to the parties as follows: a The Company, 1201 North La Brea Avenue, Suite 256, Inglewood, California 90302, and the Subscriber, at the address indicated below. Either party may change their address for the purposes of this Section by means of the notice as provided in this document.</p>
                             </li>
                             <li>
                                <p><b>Counterparts. </b> Counterparts This agreement can be executed in any number of counterparts, each of which, when executed and delivered will be considered an original and all together will be considered as a single and same agreement.</p>
                             </li>
                          </ol>
                          <p><b>[THE REST OF THIS PAGE HAS INTENTIONALLY LEFT BLANK]</b></p>
                          <h2 class="text-center">PUNCH TV STUDIOS, INC.</h2>
                          <p class="text-center"><b>SIGNATURE OF THE SUBSCRIPTION AGREEMENT</b></p>
                          <p>The undersigned, who wishes to purchase ordinary shares of Punch TV Studios, Inc., by executing this signature page, which executes, adopts and agrees to all the terms, conditions and representations of the Subscription Agreement.</p> -->
                           <ol>
                              <li>
                                 <p><b>The number of shares for which the undersigned irrevocably subscribes is: </b><span class="underline" id="ag-shares-count"></span></p>
                              </li>
                              <li>
                                 <p><b>The Aggregate Purchase Price (based on a price of $10.00 per Share) for the shares that subscribers subscribe irrevocably is:</b> $<span class="underline" id="ag-shares-price"></span></p>
                              </li>
                              <li>
                                 <p>Check the corresponding box</p>
                                 <p>The undersigned is an accredited investor (as that term is defined in Regulation D under the Securities Act) The undersigned has checked the corresponding box on the Certificate of Accredited State of the Investor indicating the basis of said accredited investor status.</p>
                                 <p>The Amount established in paragraph (b) above (together with any previous investment in the Securities pursuant to this offer) does not exceed 10% of the greater between the net worth or the annual income of the undersigned. </p>
                              </li>
                           </ol>
                           <p style="margin-bottom:0;">The securities in which you subscribe will be the property of, and must be registered in the company book, in the name of:</p>
                           <p style="border-bottom:1px solid #777;"><?php echo (!(empty($u_id)) ? ( get_the_author_meta( 'first_name', $u_id ).'&nbsp;'.get_the_author_meta( 'last_name', $u_id )) : (get_the_author_meta( 'first_name', $current_user->ID ).'&nbsp;'.get_the_author_meta( 'last_name', $current_user->ID ))); ?> </p>
                           <div class="row">
                              <div class="columns large-4">                               
                                 <br><br>
                                 <p><b>On behalf of Punch TV Studios, Inc.</b></p>
                                 <div style="width: 100%;height: 200px;outline: 1px solid #e4e4e4;background: #f5f5f5;margin:59px 0 46px 0;"></div>
                                 <p>By: Joseph Collins</p>
                              </div>   
                              <div class="columns large-4">                              
                                 <br><br>
                                 <p><b>Investor</b></p>
                                 <p style="color:#ec2028;"><i class="fa fa-level-down fa-flip-horizontal" aria-hidden="true"></i> Signature Here <i class="fa fa-level-down" aria-hidden="true"></i></p>
                                 <div class="signature-wrapper">
                                    <canvas id="signature-pad" class="signature-pad" height="200" style="width:100%; touch-action: none;"></canvas>
                                    <div class="buttons-wrapper">
                                       <button class="pull-right" id="clear" type="button">Clear</button>
                                    </div>
                                 </div>
                                 <p>Click and drag in the space above to sign.</p>
                                 <p>By: <?php  echo (!(empty($u_id)) ? ( get_the_author_meta( 'first_name', $u_id ).'&nbsp;'.get_the_author_meta( 'last_name', $u_id )) : (get_the_author_meta( 'first_name', $current_user->ID ).'&nbsp;'.get_the_author_meta( 'last_name', $current_user->ID ))); ?> </p>
                              </div>
                              <div class="columns large-4">                               
                                 <br><br>
                                 <p><b>Note: All uploaded documents should be viewable on the clients profile but not downloadable nor should the client be able to delete the documents once it is in their profile.</b></p>
                               <!--   <div style="width: 100%;height: 200px;outline: 1px solid #e4e4e4;background: #f5f5f5;margin:59px 0 46px 0;"></div>
                                 <p>By: Joseph Collins</p> -->
                              </div>
                       
                           <div class="clearfix"></div>
                             <div class="columns large-6">    
                                 <br><br>
                                 <p><b>Drag&Drop Your ID Proof Here</b></p>
                                    <div id="drop-area">  
                                          <input type="file" id="fileElem" name="fileElem" accept="image/*" onchange="handleFiles(this.files)">
                                           <input type="hidden" id="sing_upd" name="img_upload" value=""/> 
                                          <h5>Drag&Drop Your File(s)Here</h5>
                                          <label class="button" for="fileElem">or select file to upload</label>
                                        <progress id="progress-bar" max=100 value=0></progress>

                                       <div class="loder_class_log" id="loader-info" style="display: none">
                                          <img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/loader.gif" alt=""> 
                                       </div>
                                     <!-- <div id="gallery_sing" class="image_section" /></div> -->
                                    <div id="gallery">
                                      <a href="JavaScript:Void(0);" id="img_remove" data-id="">Remove</a>
                                    </div>
                                    </div>
                              </div>
                              <div class="columns large-6">    
                                  <br><br>
                                  <p><b>If you are accredited, Drag and drop your taxes here, or a letter from your CPA as proof of capability.</b></p>
                                     <div id="drop-area-2">  
                                           <input type="file" id="fileElem_2" name="fileElem2" accept="application/pdf" onchange="handleFiles2(this.files)">
                                            <input type="hidden" id="sing_upd_2" name="tax_img_upload" value=""/> 
                                           <h5>Drag&Drop Your File(s)Here</h5>
                                           <label class="button" for="fileElem_2">or select file to upload</label>
                                          <progress id="progress-bar-2" max=100 value=0></progress>
                               
                                        <div class="loder_class_log" id="loader-info-2" style="display: none">
                                           <img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/loader.gif" alt=""> 
                                        </div>
                                     <div id="gallery_2">
                                       <a href="JavaScript:Void(0);" id="img_remove_2" data-idr="">Remove</a>
                                     </div>
                                     </div>
                              </div> 
                            <!--   <div class="columns large-4">    
                                <br><br>
                                <p><b>Drag&Drop Your Id Proof here</b></p>
                                   <div id="drop-area-3">  
                                         <input type="file" id="fileElem_3" name="fileElem3" accept="image/*" onchange="handleFiles3(this.files)">
                                          <input type="hidden" id="sing_upd_3" name="id_img_upload" value=""/> 
                                         <h5>Drag&Drop Your File(s)Here</h5>
                                         <label class="button" for="fileElem_3">or select file to upload</label>
                                        <progress id="progress-bar-3" max=100 value=0></progress>
                             
                                      <div class="loder_class_log" id="loader-info-3" style="display: none">
                                         <img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/loader.gif" alt=""> 
                                      </div>
                                  <div id="gallery_sing" class="image_section" /></div>
                                   <div id="gallery_3">
                                     <a href="JavaScript:Void(0);" id="img_remove_3" data-idf="">Remove</a>
                                   </div>
                                   </div>
                            </div>  -->
                           </div>
                           <div class="row text-center mt20">
                             <div class="columns large-6 large-offset-3">
                                <div class="form-errors mt20" id="formErrorsStep4">
                                   <p>Please paste your signature at the end of the agreement document.</p>
                                </div>
                                <div class="form-errors mt20" id="formErrorsStep4a">
                                   <p>Please select your photo.</p>
                                </div>
                                 <div class="form-errors" id="formErrorsStep4b">
                                   <p>Please confirm that you have reviewed the agreement.</p>
                                </div>
                                <button class="next-or-previous button large" id="btnGoToStep5" data-current-id="#step4" data-next-id="#step5" data-direction="forward" type="button">SUBMIT</button>
                             </div>
                          </div>
                        </div>
                        <!-- #agreement -->
                     </div>
                  </div>
                  <!-- .row -->
               </div>
               <!-- .scroll -->
            </div>
            <!-- .paper-container -->
   
         </div>
         <!-- #step4 -->
         <input type="hidden" class="input-user-id" name="inputUserId" value="<?= $current_user->ID; ?>">
         <input class="input-order-id" type="hidden" value="0" name="inputOrderId">
      </form>
      <!-- #sharesOrderForm -->
      <div id="step5" class="row" style="display:none;">
         <div class="columns large-6 large-offset-3 mb20">
            <div class="panel-material">
               <span class="next-or-previous back" data-current-id="#step5" data-next-id="#step4" data-direction="back"><i class="fa fa-angle-left" aria-hidden="true"></i>Last step</span>
               <h2 class="text-center">PAYMENT METHOD</h2>
               <p class="text-center">select your payment method</p>
               <label for="payViaCreditCard"><input name="radioPaymentMethod" type="radio" id="payViaCreditCard" required="" value="credit-card"> Credit card</label>
               <div id="slideOutPayViaCreditCard" class="slide-out-panel left">
                  <form id="creditCardForm" data-abide="1mg55s-abide" novalidate="">
                     <div class="row">
                        <div class="medium-8 columns">
                           <label>Credit card number                
                              <input type="number" name="card_number" placeholder="" required="">
                           </label>
                        </div>
                        <div class="medium-4 columns">
                           <label>
                             Security code                 
                              <div class="input-group">
                                 <input class="input-group-field" name="card_security_code" type="number" required="">
                                 <div class="input-group-label security-code-wrapper">
                                    <div class="cvv-icon-wrapper">
                                       <div class="cvv-icon-wrapper-inner">
                                          <i class="fa fa-question-circle" aria-hidden="true"></i>
                                          <div class="cvv-popover">
                                             <div class="cvv-popover-inner">
                                                <span class="cvv-close">X</span>
                                                <div class="col col1">
                                                   <img src="card-3-digit.png">
                                                   <b>Visa, Mastercard &amp; Discover</b>
                                                   <p>The three-digit, non embossed number printed on the signature panel on the back of your card.</p>
                                                </div>
                                                <div class="col col2">
                                                   <img src="card-4-digit.png">
                                                   <b>American Express</b>
                                                   <p>The four-digit, number printed on the front of your card just above your account number</p>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </label>
                        </div>
                        <div class="medium-7 columns">
                           <label>Name on the card                  <input type="text" name="card_owner_name" placeholder="" value="" required="">
                           </label>
                        </div>
                        <div class="medium-5 columns">
                           <label>Expiration</label>
                           <div class="row collapse">
                              <div class="medium-6 small-6 columns">
                                 <select required="" name="card_expiry_mm">
                                    <option disabled="" selected="" value="">MM</option>
                                    <?php for($k = 1; $k<=12; $k++ ){
                                       if($k<=9){?>
                                        <option value="<?= $k; ?>"><?php echo '0'.$k; ?></option> 
                                    <?php } else {?>
                                        <option value="<?= $k; ?>"><?php echo $k; ?></option>
                                    <?php } 
                                       }?>
                             <!--        <option value="1">01</option>
                                    <option value="2">02</option>
                                    <option value="3">03</option>
                                    <option value="4">04</option>
                                    <option value="5">05</option>
                                    <option value="6">06</option>
                                    <option value="7">07</option>
                                    <option value="8">08</option>
                                    <option value="9">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option> -->
                                 </select>
                              </div>
                              <div class="medium-6 small-6 columns">
                                 <select required="" name="card_expiry_yy">
                                    <option disabled="" selected="" value="">YY</option>
                                    <?php for($m = 2010; $m<=2027; $m++ ){?>
                                        <option value="<?= $m; ?>"><?php echo $m; ?></option> 
                                    <?php } ?>
                                 </select>
                              </div>
                           </div>
                        </div>
                        <div class="medium-12 columns">
                           <div class="text-center mb10 mt10"><b>Shipping Address</b></div>
                           <input id="cbSameAsPersonal" name="cbSameAsPersonal" type="checkbox"><label for="cbSameAsPersonal">Same as the address I provided in Step 2</label>
                           <label>Address Line 1
                           <input type="text" class="card-details" name="card_address1" placeholder="Dirección, P.O. caja, nombre de la empresa" value="" required="">
                           </label>
                        </div>
                        <div class="medium-12 columns">
                           <label>Address Line 2
                           <input type="text" class="card-details" name="card_address2" placeholder="apartamento, suite, unidad, edificio, piso, etc." value="">
                           </label>
                        </div>
                        <div class="medium-4 small-6 columns">
                           <label>City                  <input type="text" class="card-details" name="card_city" placeholder="" value="" required="">
                           </label>
                        </div>
                        <div class="medium-4 small-6 columns">
                           <label>State                  <input type="text" class="card-details" name="card_state" placeholder="" value="" required="">
                           </label>
                        </div>
                        <div class="medium-4 small-12 columns">
                           <label>Postal Code                 <input type="text" class="card-details" name="card_zip" placeholder="" value="" required="">
                           </label>
                        </div>
                        <div class="medium-12 columns">
                           <div class="mb10"><small>The previous billing address must match the billing address declared in your card provider's records, otherwise, the transaction will not be made.</small></div>
                        </div>
                     </div>
                     <div class="form-errors" id="formErrorsStep5a">
                        <p>Payment Method is required</p>
                     </div>
                     <div id="success" style="display: none;">
                        <p>Payment Method success</p>
                     </div>
                     <button type="submit" class="button large">Pay Now</button>
                     <input class="input-order-id" type="hidden" value="0" name="inputOrderId">
                  </form>
               </div>
               <label for="payViaWire"><input name="radioPaymentMethod" type="radio" id="payViaWire" required="" value="wire"> Wire transfer</label>
               <div id="slideOutPayViaWire" class="slide-out-panel left">
                  <p>
                     <b>Wire Transfer Instructions</b><br/>
                     Wells Fargo Bank NA<br/>
                     Santa Fe Springs Branch<br/>
                     11701 Telegraph Road<br/>
                     Santa Fe Springs, CA 90670<br/>
                     (562)949-9431<br/>
                     Account Holder Name: Punch TV Studios, Inc.<br/>
                     ABA (Routing Number): 121000248<br/>
                     Account Number: 9033437709<br/>
                  </p>
                  <button class="next-or-previous button large" data-current-id="#step5" data-next-id="#step6" data-direction="forward" type="button">Following</button>
               </div>
               <label for="payViaMail"><input name="radioPaymentMethod" type="radio" id="payViaMail" required="" value="mail"> Mail in Investment</label>
               <div id="slideOutPayViaMail" class="slide-out-panel left">
                  <p>
                    <b>Cashier's check or money order only</b><br/>
                     Punch TV Studios<br/>
                     11705 Willake Street<br/>
                     Santa Fe Springs, California 90670<br/>
                     323-489-8119<br/>
                  </p>
                  <button class="next-or-previous button large" data-current-id="#step5" data-next-id="#step6" data-direction="forward" type="button">Following</button>
               </div>
               <div class="form-errors" id="formErrorsStep5">
                  <p>Payment Method is required</p>
               </div>
               <form id="otherPaymentForm" novalidate="">
                  <input class="input-order-id" type="hidden" value="0" name="inputOrderId">
                  <input id="paymentMethodHidden" type="hidden" value="" name="paymentMethodHidden">
               </form>
            </div>
         </div>
      </div>
      <div id="step6" class="row" style="display:none;">
         <div class="columns large-6 large-offset-3 text-center">
            <div class="panel-material">
               <h2 class="text-center">THANK YOU!</h2>
               <p>Thank you for your investment in Punch TV Studios. With your support we can achieve important milestones in television broadcasting.</p>
               <div class="reference-number">Reference #: <b id="textOrderId"></b></div>
               <div id="notForCreditCard">
                  <p>Please include the reference number in the notes section of your check.</p>
                  <p>Your payment may take up to four days to process and your patience is appreciated.</p>
               </div>
               <p>You can download your signed subscription agreement below.</p>
               <a id="downloadAgreementLink" target="_blank" href="<?php echo home_url('/generate-pdf'); ?>" class="button large transparent on-white">Download subscription agreement</a>
               <p>To review your stock purchase go to <a href="<?php echo home_url('/account-my'); ?>">My account</a></p>
            </div>
            <br><br><br><br><br><br>
         </div>
      </div>
</section>

<?php get_footer();
echo $script; 
}?>    

<!-- <script>
      $(document).ready(function(){
        $("div#gallery a").click(function(){
          $("div#gallery img").remove();
        });
      });
</script> -->
<script> 
        // ************************ Drag and drop ***************** //

/*-----multiple image uploader---------*/
// $(document).on('change', '#fileElem', function(e){
     
//         e.preventDefault();
//         var fd = new FormData();
//         var files_data = $('#fileElem');
//         var file_data = files_data.get(0).files;
//         alert(file_data.length);
//            // console.log(file_data);
//         $.each( file_data, function( index, value ) {
//             fd.append( 'files', value );
//         });
//             // console.log(filelength)
//             // var fileSize = files_data.get(0).files[i].size;
//             // console.log(fileSize)
//             //  if(fileSize > maxSize){
//             //     alert('File size exceeds its limit');
//             //   }
//             //  else{
//             //     $.each($(files_data), function(i, obj) {
//             //     $.each(obj.files,function(j,file){
//             //             fd.append('files[' + j + ']', file);
//             //     })
//             //   });
//               var alttr = [];
//               $( "a.delt_butt" ).each(function() {                
//               var allid = $(this).attr("data-id");
//               console.log(allid)
//               alttr.push(allid);
//               });
      
//                 $('.sing_upd').val(alttr);
//                   fd.append('action', 'cvf_upload_files');  
//                   fd.append('post_id', <?php echo $post->ID; ?>);
//                   fd.append('alttr', alttr); 
//                               $.ajax({
//                                     type: 'POST',
//                                     url: '<?php echo admin_url( 'admin-ajax.php' ); ?>',
//                                     data: fd,
//                                     dataType: 'JSON',
//                                     contentType: false,
//                                     processData: false,
//                                   beforeSend: function() {
//                                       $( ".loader_s" ).slideDown();  
//                                     },
//                                   success: function(response){
//                                         $('.image_section').append(response.a); // Append Server 
//                                         $('.sing_upd').val(response.b);
//                                     },
//                                   complete: function() {
//                                       $( ".loader_s" ).slideUp();
//                                    }
//                               });
//   });


/*--------first image upload---------*/
let dropArea = document.getElementById('drop-area');

// Prevent default drag behaviors
;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false)   
  document.body.addEventListener(eventName, preventDefaults, false)
})

// Highlight drop area when item is dragged over it
;['dragenter', 'dragover'].forEach(eventName => {
  dropArea.addEventListener(eventName, highlight, false)
})

;['dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, unhighlight, false)
})

// Handle dropped files
dropArea.addEventListener('drop', handleDrop, false)

function preventDefaults (e) {
  e.preventDefault()
  e.stopPropagation()
}

function highlight(e) {
  dropArea.classList.add('highlight')
}

function unhighlight(e) {
  dropArea.classList.remove('active')
}

function handleDrop(e) {
  var dt = e.dataTransfer
  var files = dt.files
  handleFiles(files)
}

let uploadProgress = []
let progressBar = document.getElementById('progress-bar')

function initializeProgress(numFiles) {
  progressBar.value = 0
  uploadProgress = []

  for(let i = numFiles; i > 0; i--) {
    uploadProgress.push(0)
  }
}

function updateProgress(fileNumber, percent) {
  uploadProgress[fileNumber] = percent
  let total = uploadProgress.reduce((tot, curr) => tot + curr, 0) / uploadProgress.length
  console.debug('update', fileNumber, percent, total)
  progressBar.value = total
}

function handleFiles(files) {
  files = [...files]
  console.log(files)
  initializeProgress(files.length)
  files.forEach(uploadFile)
  files.forEach(previewFile)
}

function previewFile(file) {
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = function() {
    let img = document.createElement('img')
    img.src = reader.result
    document.getElementById('gallery').appendChild(img)
  }
}

function uploadFile(file, i) {
  $('#loader-info').slideDown();
  var formData = new FormData()
  formData.append('action', 'image_file_upload');
  formData.append('file', file);
  ajax_func(formData, 'a#img_remove', '#sing_upd', 'data-id');
}

/*---------second image upload------------*/
let dropArea2 = document.getElementById('drop-area-2');

// Prevent default drag behaviors
;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea2.addEventListener(eventName, preventDefaults2, false)   
  document.body.addEventListener(eventName, preventDefaults2, false)
})

// Highlight drop area when item is dragged over it
;['dragenter', 'dragover'].forEach(eventName => {
  dropArea2.addEventListener(eventName, highlight2, false)
})

;['dragleave', 'drop'].forEach(eventName => {
  dropArea2.addEventListener(eventName, unhighlight2, false)
})

// Handle dropped files
dropArea2.addEventListener('drop', handleDrop2, false)

function preventDefaults2(e) {
  e.preventDefault()
  e.stopPropagation()
}

function highlight2(e) {
  dropArea2.classList.add('highlight')
}

function unhighlight2(e) {
  dropArea2.classList.remove('active')
}

function handleDrop2(e) {
  var dt = e.dataTransfer
  var files = dt.files
  handleFiles2(files)
}

let uploadProgress2 = []
let progressBar2 = document.getElementById('progress-bar-2')

function initializeProgress2(numFiles) {
  progressBar2.value = 0
  uploadProgress2 = []

  for(let i = numFiles; i > 0; i--) {
    uploadProgress2.push(0)
  }
}

function updateProgress2(fileNumber, percent) {
  uploadProgress2[fileNumber] = percent
  let total = uploadProgress2.reduce((tot, curr) => tot + curr, 0) / uploadProgress2.length
  console.debug('update', fileNumber, percent, total)
  progressBar2.value = total
}

function handleFiles2(files) {
  files = [...files]
  console.log(files)
  initializeProgress2(files.length)
  files.forEach(uploadFile2)
  files.forEach(previewFile2)
}

// function PreviewImage() {
//     pdffile=document.getElementById("uploadPDF").files[0];
//     pdffile_url=URL.createObjectURL(pdffile);
//     $('#viewer').attr('src',pdffile_url);
// }
function previewFile2(file) {
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = function() {
    let img = document.createElement('img')
    img.src = reader.result
    document.getElementById('gallery_2').appendChild(img)
  }
}

function uploadFile2(file, i) {
  $('#loader-info').slideDown();
  var formData = new FormData();
  formData.append('action', 'image_file_upload');
  formData.append('file', file);
  ajax_func(formData, 'a#img_remove_2', '#sing_upd_2', 'data-idr');
}

/*---------third image upload------------*/

/*let dropArea3 = document.getElementById('drop-area-3');

// Prevent default drag behaviors
;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea3.addEventListener(eventName, preventDefaults3, false)   
  document.body.addEventListener(eventName, preventDefaults3, false)
})

// Highlight drop area when item is dragged over it
;['dragenter', 'dragover'].forEach(eventName => {
  dropArea3.addEventListener(eventName, highlight3, false)
})

;['dragleave', 'drop'].forEach(eventName => {
  dropArea3.addEventListener(eventName, unhighlight3, false)
})

// Handle dropped files
dropArea3.addEventListener('drop', handleDrop3, false)

function preventDefaults3(e) {
  e.preventDefault()
  e.stopPropagation()
}

function highlight3(e) {
  dropArea3.classList.add('highlight')
}

function unhighlight3(e) {
  dropArea3.classList.remove('active')
}

function handleDrop3(e) {
  var dt = e.dataTransfer
  var files = dt.files
  handleFiles3(files)
}

let uploadProgress3 = []
let progressBar3 = document.getElementById('progress-bar-3')

function initializeProgress2(numFiles) {
  progressBar3.value = 0
  uploadProgress3 = []

  for(let i = numFiles; i > 0; i--) {
    uploadProgress3.push(0)
  }
}

function updateProgress3(fileNumber, percent) {
  uploadProgress3[fileNumber] = percent
  let total = uploadProgress3.reduce((tot, curr) => tot + curr, 0) / uploadProgress3.length
  console.debug('update', fileNumber, percent, total)
  progressBar3.value = total
}

function handleFiles3(files) {
  files = [...files]
  console.log(files)
  initializeProgress2(files.length)
  files.forEach(uploadFile3)
  files.forEach(previewFile3)
}

function previewFile3(file) {
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = function() {
    let img = document.createElement('img')
    img.src = reader.result
    document.getElementById('gallery_3').appendChild(img)
  }
}

function uploadFile3(file, i) {
  $('#loader-info').slideDown();
  var formData = new FormData();
  formData.append('action', 'image_file_upload');
  formData.append('file', file);
  ajax_func(formData, 'a#img_remove_3', '#sing_upd_3', 'data-idf');

  var xhr = new XMLHttpRequest()
  var formData = new FormData()
  xhr.open('POST', url, true)
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')

  // Update progress (can be used to show progress indicator)
  xhr.upload.addEventListener("progress", function(e) {
    updateProgress(i, (e.loaded * 100.0 / e.total) || 100);  
  })

   xhr.addEventListener('load', function(event){ 
        $('#loader-info').slideDown();       
   })

  xhr.addEventListener('readystatechange', function(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
      updateProgress(i, 100); // <- Add this
       // $('#loader-info').html('');
       var data = JSON.parse(xhr.response);
       
            $('#loader-info').slideup();
    }
    else if (xhr.readyState == 4 && xhr.status != 200) {
      // Error. Inform the user
    }
  })
  
  formData.append('action', 'image_file_upload')
  formData.append('file', file)
  xhr.send(formData)
}*/

function ajax_func(formData, selector, hid_id, attr){
     $.ajax({
            type: "POST",
            url: '<?php echo admin_url('admin-ajax.php'); ?>',
            data:formData,
            contentType: false,
            processData: false,
           }).done(function(response) {
               var data = $.parseJSON(response);
               $('#loader-info').slideUp();
              if (1 == data.success) {
                  $(selector).attr(attr, data.img_id);
                  $(hid_id).val(data.img_id);
                  $("#formErrorsStep4a").slideUp();  
               }
               else {  
                    if (data.errors.length > 0) {
                       for (var list = "<ul>", i = 0; i < data.errors.length; i++) list += "<li>" + data.errors[i] + "</li>";
                       list += "</ul>", $("#formErrorsStep4a p").html(list)
                   } else $("#formErrorsStep4a p").html("Oops, Something went wrong.");
                   $("#formErrorsStep4a").slideDown()

               }
           }).fail(function() {
               $("#formErrorsStep4a p").html("Oops, Something went wrong."), $("#formErrorsStep4a").slideDown()
           })
      }

$(document).ready(function(){

   function image_delete(sel, pointer, attr, hid_id){
    $(document).on('click', sel, function(e){                                
            var dataid = $(this).attr(attr);        
            var del = new FormData();
            del.append('action', 'cvf_delete_files');  
            del.append('dataid', dataid); 
            $(pointer).remove();
        
                $.ajax({
                        type: 'POST',
                        url: '<?php echo admin_url( 'admin-ajax.php' ); ?>',
                        data: del,
                        dataType: 'JSON',
                        contentType: false,
                        processData: false,
                        beforeSend: function(){
                           $('#loader-info').slideDown();
                        },
                        success: function(response){
                           console.log(response)
                            $('#loader-info').slideUp();
                            $(hid_id).val('');
                            $(sel).attr(attr, '');
                        }
                });
          });
   }

   image_delete('a#img_remove', 'div#gallery img', 'data-id', '#sing_upd');
   image_delete('a#img_remove_2', 'div#gallery_2 img', 'data-idr', '#sing_upd_2');
 //  image_delete('a#img_remove_3', 'div#gallery_3 img', 'data-idf', '#sing_upd_3');
});


/*let dropArea = document.getElementById("drop-area")

// Prevent default drag behaviors
;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false)   
  document.body.addEventListener(eventName, preventDefaults, false)
})

// Highlight drop area when item is dragged over it
;['dragenter', 'dragover'].forEach(eventName => {
  dropArea.addEventListener(eventName, highlight, false)
})

;['dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, unhighlight, false)
})

// Handle dropped files
dropArea.addEventListener('drop', handleDrop, false)

function preventDefaults (e) {
  e.preventDefault()
  e.stopPropagation()
}

function highlight(e) {
  dropArea.classList.add('highlight')
}

function unhighlight(e) {
  dropArea.classList.remove('active')
}

function handleDrop(e) {
  var dt = e.dataTransfer
  var files = dt.files
  handleFiles(files)
}

let uploadProgress = []
let progressBar = document.getElementById('progress-bar')

function initializeProgress(numFiles) {
  progressBar.value = 0
  uploadProgress = []

  for(let i = numFiles; i > 0; i--) {
    uploadProgress.push(0)
  }
}

function updateProgress(fileNumber, percent) {
  uploadProgress[fileNumber] = percent
  let total = uploadProgress.reduce((tot, curr) => tot + curr, 0) / uploadProgress.length
  console.debug('update', fileNumber, percent, total)
  progressBar.value = total
}

function handleFiles(files) {
  files = [...files]
  console.log(files)
  initializeProgress(files.length)
  files.forEach(uploadFile)
  files.forEach(previewFile)
}

function previewFile(file) {
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = function() {
    let img = document.createElement('img')
    img.src = reader.result
    document.getElementById('gallery').appendChild(img)
  }
}

function uploadFile(file, i) {
  $('#loader-info').slideDown();
  var url = '<?php echo admin_url('admin-ajax.php'); ?>'
  var formData = new FormData()
  formData.append('action', 'image_file_upload')
  formData.append('file', file)

  $.ajax({
      type: "POST",
            url: url,
            data:formData,
            contentType: false,
            processData: false,
        }).done(function(response) {
            var data = $.parseJSON(response);
            $('#loader-info').slideUp();
           if (1 == data.success) {
               $('a#img_remove').attr('data-id', data.img_id);
               $('#sing_upd').val(data.img_id);
               $("#formErrorsStep4a").slideUp();  
            }
            else {  
                 if (data.errors.length > 0) {
                    for (var list = "<ul>", i = 0; i < data.errors.length; i++) list += "<li>" + data.errors[i] + "</li>";
                    list += "</ul>", $("#formErrorsStep4a p").html(list)
                } else $("#formErrorsStep4a p").html("Oops, Something went wrong.");
                $("#formErrorsStep4a").slideDown()

            }
        }).fail(function() {
            $("#formErrorsStep4a p").html("Oops, Something went wrong."), $("#formErrorsStep4a").slideDown()
        })
}

$(document).ready(function(){
    $(document).on('click', 'a#img_remove', function(e){                                
            var dataid = $(this).attr("data-id");
            var del = new FormData();
            del.append('action', 'cvf_delete_files');  
            del.append('dataid', dataid); 
        
            $("div#gallery img").remove();
           //  var alttr = [];
           //  $( "a#img_remove" ).each(function() {                
           //      var allid = $(this).attr("data-id");
           //      console.log(allid)
           //      alttr.push(allid);
           //      });
           // $('#sing_upd').val(alttr);
                $.ajax({
                        type: 'POST',
                        url: '<?php echo admin_url( 'admin-ajax.php' ); ?>',
                        data: del,
                        dataType: 'JSON',
                        contentType: false,
                        processData: false,
                        beforeSend: function(){
                           $('#loader-info').slideDown();
                        },
                        success: function(response){
                            $('#loader-info').slideUp();
                            $('a#img_remove').attr('data-id', '');
                            $('#sing_upd').val('');
                        }
                });
     });
});*/
</script>



