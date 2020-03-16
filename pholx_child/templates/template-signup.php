<?php 
/*Template Name: Template Register*/
if(is_user_logged_in()){
      wp_redirect( get_site_url().'/invest-question' );
}else{

get_header();


?>
<section class="theme-login-part">
   <div class="container">
      <div class="row">
         <div class="col-md-6">
            <div class="login-side signup-page">
               <h1>Register to  account</h1>
               <h6>Enter your account details.</h6>
               <form action="#" method="post" id="signupform">
                  <div class="form-group">      
                     <input type="text" class="form-control" name="first_name" id="first_name" placeholder="First Name" autocomplete="off" required>
                     <span class="form-error">This field is Required</span>
                  </div>
                  <div class="form-group">      
                     <input type="text" class="form-control" name="last_name" id="last_name" placeholder="Last Name" autocomplete="off" required>
                     <span class="form-error">This field is Required</span>
                  </div>
              <!--     <div class="form-group">      
                     <input type="text" class="form-control" name="user_name" id="user_name" placeholder="User Name">
                  </div> -->
                  <div class="form-group">      
                     <input type="email" class="form-control" name="user_email" id="user_email" placeholder="Enter E-mail-Id" autocomplete="off" required>
                     <span class="form-error">Must be a valid email address</span>
                  </div>
                  <div class="form-group">      
                     <input type="password" class="form-control" name="user_pass" id="user_password" placeholder="Enter password" autocomplete="off" required>
                     <span class="form-error">This field is Required</span>
                  </div>
                  <div class="form-group">      
                     <input type="password" class="form-control" name="conuser_pass" id="conuser_pass" placeholder="Enter Confirm password" autocomplete="off" required>
                     <span class="form-error">This field is Required</span>
                  </div>
                  <div class="form-group">                
                      <input type="tel" name="user_phone" value="" id="user_phone" placeholder="Enter Phone number(e.g- 091-9869123456)" autocomplete="off" required />
                      <span class="form-error">Not a valid number</span>
                  </div>
            <div class="form-group">            
               <select id="country" required name="user_country">
                  <option disabled selected value>Please Select Country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="AF">Afghanistan</option>
                  <option value="AX">Åland Islands</option>
                  <option value="AL">Albania</option>
                  <option value="DZ">Algeria</option>
                  <option value="AS">American Samoa</option>
                  <option value="AD">Andorra</option>
                  <option value="AO">Angola</option>
                  <option value="AI">Anguilla</option>
                  <option value="AQ">Antarctica</option>
                  <option value="AG">Antigua and Barbuda</option>
                  <option value="AR">Argentina</option>
                  <option value="AM">Armenia</option>
                  <option value="AW">Aruba</option>
                  <option value="AU">Australia</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BS">Bahamas</option>
                  <option value="BH">Bahrain</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BB">Barbados</option>
                  <option value="BY">Belarus</option>
                  <option value="BE">Belgium</option>
                  <option value="BZ">Belize</option>
                  <option value="BJ">Benin</option>
                  <option value="BM">Bermuda</option>
                  <option value="BT">Bhutan</option>
                  <option value="BO">Bolivia, Plurinational State of</option>
                  <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                  <option value="BA">Bosnia and Herzegovina</option>
                  <option value="BW">Botswana</option>
                  <option value="BV">Bouvet Island</option>
                  <option value="BR">Brazil</option>
                  <option value="IO">British Indian Ocean Territory</option>
                  <option value="BN">Brunei Darussalam</option>
                  <option value="BG">Bulgaria</option>
                  <option value="BF">Burkina Faso</option>
                  <option value="BI">Burundi</option>
                  <option value="KH">Cambodia</option>
                  <option value="CM">Cameroon</option>
                  <option value="CA">Canada</option>
                  <option value="CV">Cape Verde</option>
                  <option value="KY">Cayman Islands</option>
                  <option value="CF">Central African Republic</option>
                  <option value="TD">Chad</option>
                  <option value="CL">Chile</option>
                  <option value="CN">China</option>
                  <option value="CX">Christmas Island</option>
                  <option value="CC">Cocos (Keeling) Islands</option>
                  <option value="CO">Colombia</option>
                  <option value="KM">Comoros</option>
                  <option value="CG">Congo</option>
                  <option value="CD">Congo, the Democratic Republic of the</option>
                  <option value="CK">Cook Islands</option>
                  <option value="CR">Costa Rica</option>
                  <option value="CI">Côte d'Ivoire</option>
                  <option value="HR">Croatia</option>
                  <option value="CU">Cuba</option>
                  <option value="CW">Curaçao</option>
                  <option value="CY">Cyprus</option>
                  <option value="CZ">Czech Republic</option>
                  <option value="DK">Denmark</option>
                  <option value="DJ">Djibouti</option>
                  <option value="DM">Dominica</option>
                  <option value="DO">Dominican Republic</option>
                  <option value="EC">Ecuador</option>
                  <option value="EG">Egypt</option>
                  <option value="SV">El Salvador</option>
                  <option value="GQ">Equatorial Guinea</option>
                  <option value="ER">Eritrea</option>
                  <option value="EE">Estonia</option>
                  <option value="ET">Ethiopia</option>
                  <option value="FK">Falkland Islands (Malvinas)</option>
                  <option value="FO">Faroe Islands</option>
                  <option value="FJ">Fiji</option>
                  <option value="FI">Finland</option>
                  <option value="FR">France</option>
                  <option value="GF">French Guiana</option>
                  <option value="PF">French Polynesia</option>
                  <option value="TF">French Southern Territories</option>
                  <option value="GA">Gabon</option>
                  <option value="GM">Gambia</option>
                  <option value="GE">Georgia</option>
                  <option value="DE">Germany</option>
                  <option value="GH">Ghana</option>
                  <option value="GI">Gibraltar</option>
                  <option value="GR">Greece</option>
                  <option value="GL">Greenland</option>
                  <option value="GD">Grenada</option>
                  <option value="GP">Guadeloupe</option>
                  <option value="GU">Guam</option>
                  <option value="GT">Guatemala</option>
                  <option value="GG">Guernsey</option>
                  <option value="GN">Guinea</option>
                  <option value="GW">Guinea-Bissau</option>
                  <option value="GY">Guyana</option>
                  <option value="HT">Haiti</option>
                  <option value="HM">Heard Island and McDonald Islands</option>
                  <option value="VA">Holy See (Vatican City State)</option>
                  <option value="HN">Honduras</option>
                  <option value="HK">Hong Kong</option>
                  <option value="HU">Hungary</option>
                  <option value="IS">Iceland</option>
                  <option value="IN">India</option>
                  <option value="ID">Indonesia</option>
                  <option value="IR">Iran, Islamic Republic of</option>
                  <option value="IQ">Iraq</option>
                  <option value="IE">Ireland</option>
                  <option value="IM">Isle of Man</option>
                  <option value="IL">Israel</option>
                  <option value="IT">Italy</option>
                  <option value="JM">Jamaica</option>
                  <option value="JP">Japan</option>
                  <option value="JE">Jersey</option>
                  <option value="JO">Jordan</option>
                  <option value="KZ">Kazakhstan</option>
                  <option value="KE">Kenya</option>
                  <option value="KI">Kiribati</option>
                  <option value="KP">Korea, Democratic People's Republic of</option>
                  <option value="KR">Korea, Republic of</option>
                  <option value="KW">Kuwait</option>
                  <option value="KG">Kyrgyzstan</option>
                  <option value="LA">Lao People's Democratic Republic</option>
                  <option value="LV">Latvia</option>
                  <option value="LB">Lebanon</option>
                  <option value="LS">Lesotho</option>
                  <option value="LR">Liberia</option>
                  <option value="LY">Libya</option>
                  <option value="LI">Liechtenstein</option>
                  <option value="LT">Lithuania</option>
                  <option value="LU">Luxembourg</option>
                  <option value="MO">Macao</option>
                  <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                  <option value="MG">Madagascar</option>
                  <option value="MW">Malawi</option>
                  <option value="MY">Malaysia</option>
                  <option value="MV">Maldives</option>
                  <option value="ML">Mali</option>
                  <option value="MT">Malta</option>
                  <option value="MH">Marshall Islands</option>
                  <option value="MQ">Martinique</option>
                  <option value="MR">Mauritania</option>
                  <option value="MU">Mauritius</option>
                  <option value="YT">Mayotte</option>
                  <option value="MX">Mexico</option>
                  <option value="FM">Micronesia, Federated States of</option>
                  <option value="MD">Moldova, Republic of</option>
                  <option value="MC">Monaco</option>
                  <option value="MN">Mongolia</option>
                  <option value="ME">Montenegro</option>
                  <option value="MS">Montserrat</option>
                  <option value="MA">Morocco</option>
                  <option value="MZ">Mozambique</option>
                  <option value="MM">Myanmar</option>
                  <option value="NA">Namibia</option>
                  <option value="NR">Nauru</option>
                  <option value="NP">Nepal</option>
                  <option value="NL">Netherlands</option>
                  <option value="NC">New Caledonia</option>
                  <option value="NZ">New Zealand</option>
                  <option value="NI">Nicaragua</option>
                  <option value="NE">Niger</option>
                  <option value="NG">Nigeria</option>
                  <option value="NU">Niue</option>
                  <option value="NF">Norfolk Island</option>
                  <option value="MP">Northern Mariana Islands</option>
                  <option value="NO">Norway</option>
                  <option value="OM">Oman</option>
                  <option value="PK">Pakistan</option>
                  <option value="PW">Palau</option>
                  <option value="PS">Palestinian Territory, Occupied</option>
                  <option value="PA">Panama</option>
                  <option value="PG">Papua New Guinea</option>
                  <option value="PY">Paraguay</option>
                  <option value="PE">Peru</option>
                  <option value="PH">Philippines</option>
                  <option value="PN">Pitcairn</option>
                  <option value="PL">Poland</option>
                  <option value="PT">Portugal</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="QA">Qatar</option>
                  <option value="RE">Réunion</option>
                  <option value="RO">Romania</option>
                  <option value="RU">Russian Federation</option>
                  <option value="RW">Rwanda</option>
                  <option value="BL">Saint Barthélemy</option>
                  <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                  <option value="KN">Saint Kitts and Nevis</option>
                  <option value="LC">Saint Lucia</option>
                  <option value="MF">Saint Martin (French part)</option>
                  <option value="PM">Saint Pierre and Miquelon</option>
                  <option value="VC">Saint Vincent and the Grenadines</option>
                  <option value="WS">Samoa</option>
                  <option value="SM">San Marino</option>
                  <option value="ST">Sao Tome and Principe</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="SN">Senegal</option>
                  <option value="RS">Serbia</option>
                  <option value="SC">Seychelles</option>
                  <option value="SL">Sierra Leone</option>
                  <option value="SG">Singapore</option>
                  <option value="SX">Sint Maarten (Dutch part)</option>
                  <option value="SK">Slovakia</option>
                  <option value="SI">Slovenia</option>
                  <option value="SB">Solomon Islands</option>
                  <option value="SO">Somalia</option>
                  <option value="ZA">South Africa</option>
                  <option value="GS">South Georgia and the South Sandwich Islands</option>
                  <option value="SS">South Sudan</option>
                  <option value="ES">Spain</option>
                  <option value="LK">Sri Lanka</option>
                  <option value="SD">Sudan</option>
                  <option value="SR">Suriname</option>
                  <option value="SJ">Svalbard and Jan Mayen</option>
                  <option value="SZ">Swaziland</option>
                  <option value="SE">Sweden</option>
                  <option value="CH">Switzerland</option>
                  <option value="SY">Syrian Arab Republic</option>
                  <option value="TW">Taiwan, Province of China</option>
                  <option value="TJ">Tajikistan</option>
                  <option value="TZ">Tanzania, United Republic of</option>
                  <option value="TH">Thailand</option>
                  <option value="TL">Timor-Leste</option>
                  <option value="TG">Togo</option>
                  <option value="TK">Tokelau</option>
                  <option value="TO">Tonga</option>
                  <option value="TT">Trinidad and Tobago</option>
                  <option value="TN">Tunisia</option>
                  <option value="TR">Turkey</option>
                  <option value="TM">Turkmenistan</option>
                  <option value="TC">Turks and Caicos Islands</option>
                  <option value="TV">Tuvalu</option>
                  <option value="UG">Uganda</option>
                  <option value="UA">Ukraine</option>
                  <option value="US">United States</option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="GB">United Kingdom</option>
                  <option value="UM">United States Minor Outlying Islands</option>
                  <option value="UY">Uruguay</option>
                  <option value="UZ">Uzbekistan</option>
                  <option value="VU">Vanuatu</option>
                  <option value="VE">Venezuela, Bolivarian Republic of</option>
                  <option value="VN">Viet Nam</option>
                  <option value="VG">Virgin Islands, British</option>
                  <option value="VI">Virgin Islands, U.S.</option>
                  <option value="WF">Wallis and Futuna</option>
                  <option value="EH">Western Sahara</option>
                  <option value="YE">Yemen</option>
                  <option value="ZM">Zambia</option>
                  <option value="ZW">Zimbabwe</option>
                </select>
                <span class="form-error">This field is Required</span>
            </div>
                  <p class="notification_var"></p>
                  <!-- <p class="sussfull_bar"></p> -->
                  <div class="submit-butt"> 
                     <input type="submit" class="btn sbmt-btn" id="register_butt" value="Sign Up" name="wpregister">
                   <!--   <a href="#" class="forgot-passwd"><i class="fa fa-unlock-alt" aria-hidden="true"></i>Forgot Password</a> -->
                  </div>     
                  <p class="validation" style="display: none">User id or password invalid.</p>
                  <div class="bottom-link">
                     <p>Already registered then click here to <a href="<?php echo esc_url(home_url('/account-my'));?>">Log In</a></p>
                  </div>
               <!--    <input type="hidden" value="<?php echo esc_url(home_url('/account-my')); ?>" name="redirect_to">
                  <input type="hidden" value="<?=uniqid();?>" name="cookie">
                  <input type="hidden" name="log" id="user_id" placeholder="User Name">
                  <input type="hidden" name="pwd" id="pwd" placeholder="Enter password"> -->
               </form>
                <div id="success" style="display:none;"></div>
                  <div class="form-errors" id="formErrors_s">
                     <p>Error Messages</p>
                  </div>
             
               <div class="loder_class_reg" style="display: none">
                   <img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/loader.gif" alt="Loader">
               </div>
            </div>
         </div>
      </div>
   </div>
</section>

<?php get_footer();
} ?>
<!-- <script type="text/javascript" src=" <?php echo get_stylesheet_directory_uri();?>/assets/js/3rdparty/intlTelInput-utils.js"></script> -->

<script>
      
jQuery(document).ready(function(){
      jQuery('#register_butt').keypress(function(event){
       var keycode = (event.keyCode ? event.keyCode : event.which);
          if(keycode == '13'){
              window.location = "<?php echo esc_url(home_url('/account-my')); ?>";
          }
      });
      
      jQuery(document).on('click','#register_butt',function(e){
         e.preventDefault();  
         jQuery('body').addClass('temporary-class');
         var fname   = jQuery('#first_name').val();
         var lname   = jQuery('#last_name').val();    
         var user_phone  = jQuery('#user_phone').val();
         var country     = jQuery('#country').val();
         var user_email  = jQuery('#user_email').val();
         var password    = jQuery('#user_password').val();
         var conuserpass = jQuery('#conuser_pass').val();

            // var phoneNum = user_phone.replace(/[^\d]/g, '');
            // if((phoneNum.length > 6 && phoneNum.length < 11) || preg_match("/^[0-9]{3}-[0-9]{10}$/", user_phone) ) { 
            //        return true; 
            //  }else{
            //       jQuery('.notification_var').slideDown();
            //        jQuery('.notification_var').text('Please enter a valid phone number');
            //        jQuery('.loder_class_reg').slideUp();
            //        jQuery('body').removeClass('temporary-class');
            //        return false;
            //  }
 
         // if ( user_email == '' ){
         //    jQuery('.notification_var').slideDown();
         //    jQuery('.notification_var').text('Please enter your valid E-mail Id');
         //    jQuery('.loder_class_reg').slideUp();
         //    jQuery('body').removeClass('temporary-class');
         //    return false;
         // } else {
         //    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
         //    var email_test = regex.test(user_email);
         //    if(email_test === true){
         //       jQuery('.notification_var').slideUp();
         //       jQuery('.loder_class_reg').slideUp();
         //    } else {
         //       jQuery('.loder_class_reg').slideUp();
         //       jQuery('.notification_var').text('Invalid email address');
         //       jQuery('body').removeClass('temporary-class');
         //       return false;
         //    }     
         // }

         // if( (password != '') && (conuserpass != '') ){
         //    if ( password != conuserpass ){
         //       jQuery('.notification_var').text('Password not match');
         //       jQuery('.loder_class_reg').slideUp();
         //       jQuery('.notification_var').slideDown();
         //       jQuery('body').removeClass('temporary-class');
         //       return false;
         //    }
         //    if( password.length < 5 || conuserpass.length < 5 ){
         //       jQuery('.notification_var').text('Password length must be greather than 5');
         //       jQuery('.loder_class_reg').slideUp();
         //       jQuery('.notification_var').slideDown();
         //       jQuery('body').removeClass('temporary-class');
         //       return false;
         //    }
         // }else{
         //    jQuery('.notification_var').text('Password Fields are required.');
         //    jQuery('.loder_class_reg').slideUp();
         //    jQuery('body').removeClass('temporary-class');
         //    return false;
         // }
         // jQuery('#user_id').val(user_email);
         // jQuery('#pwd').val(password);
         var form_data = new FormData();
            form_data.append('action', 'RegisterAjax');
            form_data.append('first_name', fname);
            form_data.append('last_name', lname);
            form_data.append('country', country);
            form_data.append('user_phone', user_phone);
            form_data.append('user_email', user_email);
            form_data.append('user_password', password);
            form_data.append('conuser_pass', conuserpass);
            jQuery.ajax({
               type: 'POST', 
               url: "<?php echo admin_url('admin-ajax.php'); ?>",
               dataType: 'JSON',
               contentType: false,
               processData: false,
               data: form_data,
                  beforeSend: function(){
                     jQuery('.loder_class_reg').slideDown();
                  }, 
                  success: function(result){
                     jQuery('body').removeClass('temporary-class');
                     if (result.success == 1){
                      jQuery("#success").html("Signup Success. Redirecting to the Member's area. To login verify your account from your mail.");
                       jQuery('#signupform').fadeOut(function() {
                        jQuery("#success").fadeIn(function() {
                            setTimeout(function() {
                              //jQuery( "#signupform" ).submit();
                              window.location =  "<?php echo home_url('/account-my'); ?>";
                            }, 2500)
                        });
                    });
                       jQuery('.loder_class_reg').slideUp();
                   }
                    else {
                       if (result.errors.length) {
                           var list = '<ul>';
                           jQuery.each(result.errors, function(item,value){
                             list += "<li>"+value+"</li>";
                           });
                             list+= "</ul>";
                           jQuery('#formErrors_s p').html(list);
                           jQuery('#formErrors_s').fadeIn();
                           setTimeout(function() {
                               jQuery('#formErrors_s').fadeOut("slow");
                           }, 6000); 
                           jQuery('.loder_class_reg').slideUp();
                             return false;    
                        } 
                    }
                     // if(result == 'S'){
                     //    jQuery( "#loginform" ).submit();
                     //    jQuery('.notification_var').slideUp();
                     //    jQuery('.sussfull_bar').slideUp();
                     // }else if(result == 'Y'){
                     //    jQuery('.sussfull_bar').text('E-Mail id already registered');
                     // }         
                  }
            });

      });
});
</script>