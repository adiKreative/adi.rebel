<?php
/* Template Name: Subscription_agr */
get_header();
?>
<?php 
$my_postid = 4178;
$url = wp_get_attachment_url( get_post_thumbnail_id($my_postid), 'thumbnail' ); 
$fist_cont_1 = get_field('content_1', $my_postid);
$fist_cont_2 = get_field('content_2', $my_postid);
$fist_cont_3 = get_field('content_3', $my_postid);
$fist_cont_4 = get_field('second_page_content1', $my_postid);
$fist_cont_5 = get_field('second_page_content3', $my_postid);

$sec_cont_1 = get_field('second_page_content_5a', $my_postid);
?>
 
<div class="container">
  <div class="row">
    <div class="col-md-offset-1 col-md-10">
     <div class="text-center">
      <img src="<?=$url; ?>" alt="" style="max-width:100px;margin:0 0 30px 0;" />
    </div>
    <?php echo $fist_cont_1; ?>
   <!--  <h2 class="text-center">
    Subscription Agreement<br/>
    &<br/>
    Investor Questionnaire<br/></h2>
    <h3 class="text-center">Private Equity Shares</h3> -->
    
    <hr/>
    <p class="text-right"><?php echo $fist_cont_2; ?></p>
    <p class="text-right"><?php echo date("F").'_____'.date("Y"); ?></p>
    <br/><br/>
    <p class="text-right">
      <?php echo $fist_cont_3; ?>
      <!-- <b>Presented by:</b>
      <br/><br/>
      <b>Punch TV Studios, Inc.</b><br/>
      11705 Willake Street<br/>
      Santa Fe Springs, California<br/>
      Telephone: 323.489.8119<br/>
      <br/><br/>
      PunchTVStudios.com -->
    </p>
    <div class="text-center">
      <?php echo $fist_cont_4; ?>
      <!-- <h3>SUBSCRIPTION AGREEMENT</h3>
      <h3>PUNCH TV STUDIOS, INC.</h3>
      <p class="text-center">A Delaware Corporation</p> -->
    </div>
    <p style="text-indent: 50px;">This Subscription Agreement (“Agreement”) executed this <span class="unerline"></span> day of <span class="unerline"></span> <?php echo date("Y") ?> by and between Punch TV Studios, Inc. (“Punch” or “Company”), located at 11705 Willake Street, Santa Fe Springs, California 90670, and “Investor”:</p>
    <div class="">
      <div class="columns small-1 large-offset-1">
        <p>Name: <span class="unerline" style="width: 92%;float: right;height: 20px;"></span></p>
        <p>Address: <span class="unerline" style="width: 92%;float: right;height: 20px;"></span></p>
      </div>
      <div class="columns small-10">
        <p>Eamil</span> <span class="unerline" style="width: 92%;float: right;height: 20px;"></span></p>
      </div>
    </div>
    <br/>
    <p><?php echo $fist_cont_5; ?></p>
    <?php
     // check if the repeater field has rows of data
      if( get_field('second_page_content4', $my_postid) ) {
              while( the_repeater_field('second_page_content4', $my_postid) ) { ?>
                  <p style="text-indent: 50px;"><?php echo get_sub_field('text1'); ?></p>
            <?php  }
          }
    ?>
<!--     <p style="text-indent: 50px;"><b>WHEREAS</b> Punch is a Delaware corporation seeking private investors in the Company; </p>
    <p style="text-indent: 50px;"><b>WHEREAS</b> Investor is an accredited investor as defined by the provisions of Rule 501 of Regulation D, and desires to purchase shares in the Company;</p>
    <p style="text-indent: 50px;"><b>WHEREAS</b> Punch and Investor desire to enter into an agreement where Investor will purchase from Punch, and Punch will issue to Investor certain shares of Company under the terms and conditions set forth in this Agreement;</p>
    <p style="text-indent: 50px;"><b>NOW, THEREFORE</b>, the Parties do agree and establish as follows:</p> -->
    <ol>
      <li>
        <p><?php echo $sec_cont_1; ?></p>
        <p><b>Number of Shares:</b><span class="underline" id="ag-shares-count"></span> shares</p>
        <p><b>Total Investment:</b> $<span class="underline" id="ag-shares-price"></span> U.S.</p>
        <p>
          <b>Total Investment via Credit Card:</b> $<span class="underline" id="ag-shares-price-cc"></span> U.S.<br/>
          <span style="font-size:0.8em;">(There is a 3.9% processing fee on the investment amount for Credit Card payments)</span></p>
        </li>
         <?php
           // check if the repeater field has rows of data
            if( get_field('second_page_content5', $my_postid) ) {
                    while( the_repeater_field('second_page_content5', $my_postid) ) { ?>
                         <li>
                            <p><?php echo get_sub_field('title'); ?></p>
                            <?php $ord_text = get_sub_field('content'); ?>
                              <ol>
                                <?php
                                  foreach ($ord_text as $ord_value) { ?>
                                       <li><p><?php echo $ord_value['ordered_text']; ?></p></li>
                                <?php } ?>
                              </ol>    
                         </li>
                  <?php  }
                }
          ?>
<!-- 
        <li>
          <p><b>Acceptance.</b> Before this subscription for Shares is considered, Investor must complete, execute and deliver to the authorized agent for the Company the completed and signed Investor Questionnaire. With respect to the acceptance of the subscription, Investor acknowledges that:</p>
          <ol>
            <li><p>This Subscription is irrevocable, and, upon acceptance by the Company, shall be binding on the heirs, executors, administrators, successors and assigns of Investor;</p></li>
            <li><p>This subscription may be rejected in whole or in part by the Company in its sole discretion. Should the Company reject this Subscription, for any reason, all funds and documents tendered by Investor shall be returned;</p></li>
            <li><p>This Subscription shall be deemed accepted by the Company only when this Subscription Agreement is signed by the Company and/or its authorized agents;</p></li>
            <li><p>Subscriptions need not be accepted by the Company in the order in which subscriptions were received;</p></li>
            <li><p>The Subscription is not transferable or assignable by Investor.</p></li>
            <li><p>If Investor is more than one person, the obligations of Investor shall be joint and several and the representations and warranties shall be deemed to be made by and be binding on each such person and their heirs, executors, administrators, successors and assigns.</p></li>
          </ol>
        </li>
        <li>
          <p><b>Acknowledgements by Investor.</b> Investor understands and acknowledges that:</p>
          <ol>
            <li><p>Investor has been advised to consult Investor’s own attorney concerning the Company and to consult with independent tax counsel regarding the tax considerations of participating in the Company.</p></li>
            <li><p>The books and records of the Company will be reasonably available for inspection by Investor and/or Investor’s representatives, if any, at the Company’s place of business.</p></li>
            <li><p>The offering is exempt, and has not been registered under the Act.</p></li>
            <li><p>Neither the SEC nor any other federal or state agency has passed upon the Shares or made any finding or determination concerning the fairness of this investment and no such agency has recommended or endorsed the Shares.</p></li>
            <li><p>Since the Shares have not been registered under the Act or registered or qualified under any state law, a purchaser of Shares must bear the economic risk of investment for an indefinite period of time because the Shares will bear a restrictive legend and may not be sold, pledged, or otherwise transferred in the absence of an effective registration or qualification under federal and applicable state law or an opinion by counsel to the Company that such registration or qualification is not required.</p></li>
            <li><p>Except as stated herein, the Company is under no obligation and has not undertaken to register or qualify the sale, transfer, or other disposition of Shares by it or on its behalf, to take any other action necessary to make compliance with an exemption from registration or qualification available or to register or qualify the Shares at any time in the future.</p></li>
            <li><p>The Investor will not make any sale, transfer, or other disposition of Shares except in compliance with the Act and its Rules and Regulations and applicable state law.</p></li>
          </ol>
        </li>
        <li><p><b>Registration of Shares</b></p>          
          <ol>
            <li><p><b>Registration.</b> Investor understands and acknowledges that the Shares are currently not registered with the Securities and Exchange Commission (the “SEC”) in accordance with the Securities Act of 1933, as amended (the “Act”). Punch agrees, and as a condition to the investment in accordance with this Agreement, to register the Shares with the SEC no later than 24 (twenty-four) months following the execution of this Agreement. </p></li>
            <li><p><b>Completion of Registration.</b> Punch estimates that registration should take no longer than 90-180 calendar days from the date of filing with the SEC; however, Punch can make no guarantees regarding the time to complete the registration, as this is dependent on numerous factors solely under the control of the SEC. </p></li>
            <li><p><b>Disclosure.</b> Upon filing with the SEC, Punch shall provide to Investor a digital copy (in PDF or HTML format) of the prospectus contained in Form S-1 filed with the SEC or a link to the filing on the SEC website. Investor is encouraged to read the prospectus or offering circular thoroughly and consult with Investor’s attorney, investment advisor and/or accountant before making any investment in Punch.</p></li>
            <li><p><b>Limitation on Transfer of Offered Shares.</b> Investor acknowledges and agrees that Investor is aware that there are substantial restrictions on the transferability of the Shares. Because the Shares are not presently registered pursuant to the provisions of the Act, Investor agrees not to sell, transfer, assign, pledge, hypothecate or otherwise dispose of any Shares until the Shares have been registered, or unless such sale is exempt from such registration pursuant to the provisions of the Act. Investor further acknowledges and agrees that the Company has no obligation to assist Investor in obtaining any exemption from any registration requirements imposed by applicable law. Investor acknowledges and agrees that Investor shall be responsible for compliance with all conditions on transfer imposed by a Securities Administrator of any state, province or territory and for any expenses incurred by the Company for legal and accounting services in connection with reviewing such a proposed transfer and issuing opinions in connection therewith.</p></li>
          </ol>
        </li>
        <li><p><b>Waiver of Disclosure Documents.</b></p>
          <p> Investor acknowledges that Investor is an accredited investor in accordance with Section 501 of Regulation D, and further acknowledges that Investor has not requested from Punch, nor has Investor received from Punch, any disclosure documents (i.e. private placement memorandum) indicating the business plan, risk factors, financial projections, etc. involved in a private equity investment in Punch, and is making this investment based on Investor’s own due diligence and experience as an investor in private equity.</p>
        </li>
        <li><p>Confidentiality</p>          
          <ol>
            <li><p><b>Confidential Information.</b> The parties acknowledge that the terms and conditions set forth in this Agreement are deemed “Confidential Information.” Further, either Party, on its own accord, may deem other information as Confidential Information, and that Party does not require approval or authorization from the other Party for the information to be deemed Confidential Information.</p></li>
            <li><p><b>Non-Disclosure of Confidential Information. </b> Except as may be required by law, and except as provided in this Article, the Parties shall not disclose any Confidential Information to any third party without the express, written consent of the other Party.</p></li>
            <li><p><b>Limitations</b> The Parties agree that the confidentiality and non-disclosure requirements of this Agreement are limited to Confidential Information; and that the existence of this Agreement and Investor’s investment in Punch are not deemed Confidential Information, and may be disclosed, made public and promoted at the discretion of the Parties.</p></li>
            <li><p><b>Exceptions to Disclosure. </b> Investor may disclose any Confidential Information to Investor’s outside attorney, accountant, auditor or investment advisor only to the extent necessary to permit evaluation of the investment, and the performance of the necessary or required tax, accounting, financial, legal, or administrative tasks and services. Investor shall hold such attorneys, accountants, auditors and investment advisors to the same level of confidentiality as provided in this Agreement, and Investor shall be liable for all damages, monetary or otherwise, due to any unauthorized disclosure of Confidential Information by Investor’s attorney, accountant, auditor and investment advisor.</p></li>
            <li><p><b>Remedies. </b> Other than disclosure in accordance with paragraphs 6.3 and 6.4, should any Party make any unauthorized disclosure of any Confidential Information, the other Party shall be entitled to injunctive relief preventing further disclosure of the Confidential Information, in addition to any other remedies, monetary or otherwise, available hereunder, whether at law or in equity. Any Party who sustains any damages, monetary or otherwise, as the result of the other Party’s unauthorized disclosure of Confidential Information shall be entitled to recover its costs and fees, including reasonable attorneys’ fees incurred in obtaining any such relief; and, in the event of litigation as a result of damages resulting from the unauthorized disclosure of any Confidential Information, the prevailing party shall be entitled to recover its court costs, expert witness fees, reasonable attorney’s fees and expenses.</p></li>
          </ol>
        </li> 
         <li>
          <p><b>Representations, Warranties, and Covenants of Investor. </b> Investor represents and warrants as follows:</p>
          <ol>
            <li><p>Investor and Investor’s representatives, if any, have been furnished all materials relating to the Company and its proposed activities, the offering of Shares or anything that they have requested, and have been afforded the opportunity to obtain any additional information and ask all questions concerning the Company and the Shares necessary to verify the accuracy of any representations or information provided by the Company and to understand any additional matters Investor believes are necessary to evaluate the investment and associated risks.</p></li>
            <li><p>Neither Investor nor Investor’s representatives, if any, have been furnished any offering literature other than that provided by the Company, and Investor and representatives, if any, have relied only on the information furnished or made available to them by the Company or its authorized agent.</p></li>
            <li><p>Investor has not disclosed any information furnished or made available to Investor by the Company or its authorized agent to anyone other than Investor’s lawyer, accountant, or other financial advisors; no one except such advisors have used this information and Investor has not made any copies of it.</p></li>
            <li><p>Investor has carefully reviewed and understands the risks of, and other considerations relating to, a purchase of Shares.</p></li>
            <li><p>The Company and its authorized agents have answered all inquiries that Investor and Investor’s representatives, if any, have put to it concerning the Company and its proposed activities, and all other matters relating to the Company, the offering and sale of the Shares.</p></li>
            <li><p>Investor is aware that Investor's proposed investment in the Company is speculative and involves significant risks, which may result in the loss of all or a portion of the investment. </p></li>
            <li><p>Investor has received no representation or warranties in making his investment decision.</p></li>
            <li><p>Investor is at least twenty-one (21) years of age.</p></li>
            <li><p>Investor hereby represents and warrants that Investor is an accredited investor as defined by the provisions of Rule 501 of Regulation D.</p></li>
            <li><p>Investor has adequate means of providing for Investor’s current needs and possible personal contingencies, and has no need in the foreseeable future for liquidity in this investment. Investor is able to accommodate the economic risks of the purchase of the Shares, has sufficient net worth to sustain a loss of this investment in the Company, or portion thereof, in event such loss should occur.</p></li>
            <li><p>Investor’s commitment to all tax-sheltered investments is reasonable in relation to Investor’s net worth.</p></li>
            <li><p>Investor is obtaining the Shares for Investor’s own account (or a trust account if Investor is a trustee) for investment purposes in a manner which would not require registration or qualification pursuant to the provisions of the Act, or any state Blue Sky Law. Investor is not obtaining these Shares with a view or intention to resell or distribute the same, and has no present intention, agreement, or arrangement to divide Investor’s participation with others or to resell, assign, transfer, or otherwise dispose of all or any part of the Shares for which the Investor has subscribed.</p></li>
            <li><p>Investor understands that the offer and sale of the Shares in the individual states in transactions which satisfy the requirements of Rule 506 of Regulation D promulgated pursuant to Section 4(2) of the Act are not required to be registered or qualified in the individual states because of adoption of the National Securities Markets Improvement Act of 1996 ("NSMIA"). NSMIA preempts state registration and similar qualification provisions for transactions exempt pursuant to that Rule 506.</p></li>
            <li><p>Investor understands that neither the SEC nor any Securities Administrator or similar person of any state or province has made any finding or determination relating to the fairness of any purchase of the Shares and that neither the SEC nor any Securities Administrator or similar person of any state or province has or will recommend or endorse a purchase of the Shares.</p></li>
            <li><p>Investor understands that Shares must be held indefinitely unless distribution of Shares is subsequently registered for resale under the Act; or in the opinion of counsel acceptable to the Company, some other exemption from registration under the Act is available.</p></li>
            <li><p>If Investor is a corporation, partnership, trust, or other business entity, it is authorized and otherwise duly qualified to purchase and hold Shares in the Company. If Investor is one of the aforementioned entities, it hereby agrees to supply any additional written information that may be required.</p></li>
            <li><p>Except as set forth below, all the information concerning Investor’s financial position and business experience that Investor has provided to the Company in the Investor Questionnaire completed by Investor, is correct and complete as of this date, and if there should be any material change in such information prior to the acceptance of this subscription by the Company, Investor will immediately furnish the revised or corrected information to the Company.</p></li>
            <li><p>The Investor: (i) has such knowledge and experience in business and financial matters that Investor is capable of evaluating the Company and its proposed activities, the risks and merits of investment in the Shares and of protecting Investor’s interest and making an informed investment decision, and has not consulted with others in connection with evaluating such risks and merits; or (ii) has been advised by others (who are unaffiliated with and who are not compensated by the Company or any of its affiliates or selling agents, directly or indirectly) and now has such knowledge and experience in business and financial matters that Investor is capable of evaluating the Company and its proposed activities, the risks and merits of investment in the Shares and of making and informed decision; or (iii) and his investor Representatives (who are unaffiliated with and who are not compensated by the Company or any of its affiliates or selling agents, directly or indirectly) together have such knowledge and experience in business and financial matters that Investor and the Investor Representatives together are capable of evaluating the Company and its proposed activities, and the risks and merits of investment in the Shares and of making and informed investment decision.</p></li>
            <li><p>Investor is not relying on the Company nor any of its officers, managers, directors, controlling persons, agents, attorneys, accountants, employees or shareholders for independent legal, accounting, financial, or tax advice in connection with Investor’s evaluation of the risks and merits of investment in the Company and the consequences to Investor of such an investment.</p></li>
          </ol>
        </li>
        <li>
          <p><b>Indemnification.</b>Investor acknowledges and understands the meaning and legal consequences of the representations, warranties, and covenants specified in Article 7 of this Agreement and that the Company has relied on such representations, warranties, and covenants, and Investor hereby agrees to indemnify and hold the Company, its officers, managers, directors, controlling persons, agents, attorneys, accountants and employees harmless from and against any and all loss, damage, liability, cost, or expense incurred on account of or arising out of a breach of such representation, warranty or covenant.</p>
          <p>Investor consents to the indemnification of the Company, its officers, managers, directors, controlling persons, agents, attorneys, accountants and employees to the extent such indemnification is lawful, and in accordance with the terms and conditions of the by-laws.</p>
        </li>
        <li>
          <p><b>Compliance with Act.</b> Investor understands and agrees that the following restrictions and limitations are applicable to Investor’s purchase and any sale, transfer, assignment, pledge, hypothecation or other disposition of Offered Shares pursuant to Section 4(2) of the Act and Rule 506 of Regulation D promulgated pursuant thereto:</p>
          <ol>
            <li><p>Investor agrees that the Shares shall not be sold, pledged, hypothecated or otherwise disposed of unless the Shares are registered pursuant to the Act and applicable state or other applicable securities laws or are exempt therefrom.</p></li>
            <li>
              <p>A legend in substantially the following form has been or will be placed on any certificate(s) or other documents evidencing the Shares:</p>
              <p><b>THE SECURITIES REPRESENTED BY THIS INSTRUMENT OR DOCUMENT HAVE BEEN ACQUIRED FOR INVESTMENT ONLY AND HAVE NOT BEEN REGISTERED PURSUANT TO THE PROVISIONS OF THE SECURITIES ACT OF 1933 AS AMENDED ("ACT"), AND HAVE BEEN OFFERED AND SOLD IN RELIANCE UPON THE EXEMPTIONS SPECIFIED IN SECTION 4(2) OF THE ACT AND RULE 505 OF REGULATION D PROMULGATED PURSUANT THERETO. WITHOUT SUCH REGISTRATION, SUCH SECURITIES MAY NOT BE SOLD, TRANSFERRED, ASSIGNED, PLEDGED, HYPOTHECATED OR OTHERWISE DISPOSED OF, EXCEPT UPON DELIVERY TO THE COMPANY OR ITS TRANSFER AGENT OF AN OPINION OF COUNSEL SATISFACTORY TO THE COMPANY OR ITS TRANSFER AGENT THAT REGISTRATION IS NOT REQUIRED FOR SUCH TRANSFER OR THE SUBMISSION TO THE COMPANY OR ITS TRANSFER AGENT OF SUCH OTHER EVIDENCE AS MAY BE SATISFACTORY TO THE COMPANY OR ITS TRANSFER AGENT TO THE EFFECT THAT ANY SUCH TRANSFER SHALL NOT BE IN VIOLATION OF THE ACT, APPLICABLE STATE SECURITIES LAWS OR ANY RULE OR REGULATION PROMULGATED PURSUANT THERETO.</b></p>
            </li>
            <li><p>Stop transfer instructions to the transfer agent of the Company have been or will be placed with respect to the Shares to restrict the sale, transfer, pledge, hypothecation or other disposition thereof, subject to the further terms hereof, including the provisions of the legend set forth in subparagraph (b) above.</p></li>
            <li><p>The legend and stop transfer instructions described in subparagraphs (b) and (c) above will be placed on any new certificate(s) or other documents for transfer.</p></li>
          </ol>
        </li>
        <li><p><b>Financial Information. </b> Investor has previously been furnished an Investor Questionnaire (Exhibit “A”), which has been completed and executed by Investor and the information contained therein remains true and correct in all material aspects.</p></li>
        <li><p><b>Choice of Law. </b>This Agreement shall be construed in accordance with and governed by the laws of the State of California except as to the manner in which Investor elects to take title to Shares, which shall be construed in accordance with the Laws of the state of Investor’s principal residence.</p></li> -->
      </ol>
      <br/>
      <p>IN WITNESS, the parties have executed this Agreement on <span class="underline"><?php echo date("F j, Y") ?></span></p>
      <p><b>Agreed to and accepted</b></p>
    </div>
    
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-offset-1 col-md-10">
        <div class="row">
           <div style="width: 50%; position: relative; float: left;" >
            <p><b>On behalf of Punch TV Studios, Inc. </b></p>
            <!-- <div style="width: 400px;height: 200px;outline: 1px solid #e4e4e4;background: #f5f5f5;margin:59px 0 46px 0;"></div> -->
            <span class="unerline" style="width:100%;"></span>
            <p>By: Joseph Collins</p>
          </div>
          <div style="width: 50%; position: relative; float: left;" >
            <p><b>Investor</b></p>
            <!--       <p style="color:#ec2028;"><i class="fa fa-level-down fa-flip-horizontal" aria-hidden="true"></i> Sign here <i class="fa fa-level-down" aria-hidden="true"></i></p> -->
            <!-- <div class="signature-wrapper">
              <canvas id="signature-pad" class="signature-pad" width=400 height=200></canvas>
            </div> -->
            <span class="unerline" style="width:100%;"></span>
            <p>By: </p>
          </div>
           <div style="width: 50%; position: relative; float: left;" >
            <p><b>On behalf of Punch TV Studios, Inc. </b></p>
            <!-- <div style="width: 400px;height: 200px;outline: 1px solid #e4e4e4;background: #f5f5f5;margin:59px 0 46px 0;"></div> -->
            <img src="" alt="" style="width: 48%;">
            <span class="unerline" style="width:100%;"></span>
            <p>By: Joseph Collins</p>
          </div>
          <div style="width: 50%;position:relative; float: left;">
            <p><b>Investor</b></p>
            <!--       <p style="color:#ec2028;"><i class="fa fa-level-down fa-flip-horizontal" aria-hidden="true"></i> Sign here <i class="fa fa-level-down" aria-hidden="true"></i></p> -->
            <!-- <div class="signature-wrapper">
              <canvas id="signature-pad" class="signature-pad" width=400 height=200></canvas>
            </div> -->
            <span class="unerline" style="width:100%;"></span>
            <p>By: </p>
          </div>
        </div>
       
      </div>
      
    </div>
  </div>

<?php get_footer(); ?>