<?php
/*
 * Popup file displaying here.
 */
?>
<!-- -----------------------------------------------buyer get in touch--------------------------------------------------------------- -->
<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="buyerGetInTouchModal" class="modal fade in">

 <div class="loadingSpinner"></div> 

  <div class="modal-dialog modal-lg">
    <div class="modal-content signupModalDesign">
      <div id="buyerContactFormHeader" class="modal-header signupModalHeader">
        <button data-form-id="buyerContactForm" onclick="signUpClose(this)" aria-label="Close" data-dismiss="modal" class="close signupClose" type="button">x</button>
        <div id="buyerGetInTouchModalHeader">
        <h4 class="signupHeading">IT Exchange helps you find the right Service Provider at the right price.</h4>
        <p class="signupDetails">Please fill the form and someone from our team will get in touch.</p>
      </div>
      </div>
      <div class="modal-body buyerGetInTouchModalBody">
      <div id="buyerGetInTouchModalBodyLeft" class="col-md-6 col-xs-6 left">
      <div class="icon">
       <span class="one"></span>
       <span class="text">We Understand<br>
			Your Requirements</span>
       </div>
       <div class="icon">
      <span class="two"></span>
        <span class="text">We Shortlist<br>
		Service Providers </span>
     </div>
     <div class="icon">
      <span class="three"></span>
        <span class="text">You Compare<br>
		Proposals</span>
		</div>
     <div class="icon">
      <span class="four"></span>
        <span class="text">You Select Provider<br>
		To Work With </span>
     </div>
      <span class="verticalLine"></span>
      
      </div>
      <div id="buyerContactFormSuccess"></div>
          	<form id="buyerContactForm" class="cf error-hidden" data-url="/register/buyerContactRequest" name="buyerContactForm" method="post" action="/?id=buyerContactForm" novalidate="novalidate">
    
        
        <div class="col-md-6 col-xs-6 right">
        <input type="text" placeholder="Name" name="firstName" id="buyerName" class="form-control buyerName">
        <p id="buyerName-error" class="col-md-6 col-xs-12 errorMessage buyerFormErrors"></p>
        
        <input type="text" placeholder="Company" name="company" id="buyerCompany" class="form-control buyerCompany">
        <p id="buyerCompany-error" class="col-md-6 col-xs-12 errorMessage buyerFormErrors"></p>
        <input type="text" placeholder="Email" name="email" id="buyerEmail" class="form-control buyerEmail">
        <p id="buyerEmail-error" class="col-md-6 col-xs-12 errorMessage buyerFormErrors"></p>
        
       <select name="countryCode" class="buyerSelect" id="buyerSelect">
<option value="">Select Country</option>
<option value="afg">Afghanistan</option>
<option value="alb">Albania</option>
<option value="dza">Algeria</option>
<option value="asm">American Samoa</option>
<option value="and">Andorra</option>
<option value="ago">Angola</option>
<option value="aia">Anguilla</option>
<option value="ata">Antarctica</option>
<option value="atg">Antigua and Barbuda</option>
<option value="arg">Argentina</option>
<option value="arm">Armenia</option>
<option value="abw">Aruba</option>
<option value="aus">Australia</option>
<option value="aut">Austria</option>
<option value="aze">Azerbaijan</option>
<option value="bhs">Bahamas</option>
<option value="bhr">Bahrain</option>
<option value="bgd">Bangladesh</option>
<option value="brb">Barbados</option>
<option value="blr">Belarus</option>
<option value="bel">Belgium</option>
<option value="blz">Belize</option>
<option value="ben">Benin</option>
<option value="bmu">Bermuda</option>
<option value="btn">Bhutan</option>
<option value="bol">Bolivia</option>
<option value="bes">Bonaire, Sint Eustatius and Saba</option>
<option value="bih">Bosnia and Herzegovina</option>
<option value="bwa">Botswana</option>
<option value="bvt">Bouvet Island</option>
<option value="bra">Brazil</option>
<option value="iot">British Indian Ocean Territory</option>
<option value="vgb">British Virgin Islands</option>
<option value="brn">Brunei Darussalam</option>
<option value="bgr">Bulgaria</option>
<option value="bfa">Burkina Faso</option>
<option value="bdi">Burundi</option>
<option value="khm">Cambodia</option>
<option value="cmr">Cameroon</option>
<option value="can">Canada</option>
<option value="cpv">Cape Verde</option>
<option value="cym">Cayman Islands</option>
<option value="caf">Central African</option>
<option value="tcd">Chad</option>
<option value="chl">Chile</option>
<option value="chn">China</option>
<option value="cxr">Christmas Island</option>
<option value="cck">Cocos (Keeling) Islands</option>
<option value="col">Colombia</option>
<option value="com">Comoros</option>
<option value="cok">Cook Islands</option>
<option value="cri">Costa Rica</option>
<option value="hrv">Croatia</option>
<option value="cub">Cuba</option>
<option value="cuw">Curaçao</option>
<option value="cyp">Cyprus</option>
<option value="cze">Czech Republic</option>
<option value="civ">Côte d'Ivoire</option>
<option value="prk">Democratic People's Republic of Korea</option>
<option value="dnk">Denmark</option>
<option value="dji">Djibouti</option>
<option value="dma">Dominica</option>
<option value="dom">Dominican Republic</option>
<option value="ecu">Ecuador</option>
<option value="egy">Egypt</option>
<option value="slv">El Salvador</option>
<option value="gnq">Equatorial Guinea</option>
<option value="eri">Eritrea</option>
<option value="est">Estonia</option>
<option value="eth">Ethiopia</option>
<option value="flk">Falkland Islands</option>
<option value="fro">Faroe Islands</option>
<option value="fsm">Federated States of Micronesia</option>
<option value="fji">Fiji</option>
<option value="fin">Finland</option>
<option value="fra">France</option>
<option value="guf">French Guiana</option>
<option value="pyf">French Polynesia</option>
<option value="atf">French Southern Territories</option>
<option value="gab">Gabon</option>
<option value="gmb">Gambia</option>
<option value="geo">Georgia</option>
<option value="deu">Germany</option>
<option value="gha">Ghana</option>
<option value="gib">Gibraltar</option>
<option value="grc">Greece</option>
<option value="grl">Greenland</option>
<option value="grd">Grenada</option>
<option value="glp">Guadeloupe</option>
<option value="gum">Guam</option>
<option value="gtm">Guatemala</option>
<option value="gin">Guinea</option>
<option value="gnb">Guinea-Bissau</option>
<option value="guy">Guyana</option>
<option value="hti">Haiti</option>
<option value="hmd">Heard Island and McDonald Islands</option>
<option value="hnd">Honduras</option>
<option value="hkg">Hong Kong</option>
<option value="hun">Hungary</option>
<option value="isl">Iceland</option>
<option value="ind">India</option>
<option value="idn">Indonesia</option>
<option value="irq">Iraq</option>
<option value="irl">Ireland</option>
<option value="irn">Islamic Republic of Iran</option>
<option value="imn">Isle of Man</option>
<option value="isr">Israel</option>
<option value="ita">Italy</option>
<option value="jam">Jamaica</option>
<option value="jpn">Japan</option>
<option value="jor">Jordan</option>
<option value="kaz">Kazakhstan</option>
<option value="ken">Kenya</option>
<option value="kir">Kiribati</option>
<option value="kwt">Kuwait</option>
<option value="kgz">Kyrgyzstan</option>
<option value="lao">Lao People's Democratic Republic</option>
<option value="lva">Latvia</option>
<option value="lbn">Lebanon</option>
<option value="lso">Lesotho</option>
<option value="lbr">Liberia</option>
<option value="lby">Libyan Arab Jamahiriya</option>
<option value="lie">Liechtenstein</option>
<option value="ltu">Lithuania</option>
<option value="lux">Luxembourg</option>
<option value="mac">Macao</option>
<option value="mdg">Madagascar</option>
<option value="mwi">Malawi</option>
<option value="mys">Malaysia</option>
<option value="mdv">Maldives</option>
<option value="mli">Mali</option>
<option value="mlt">Malta</option>
<option value="mhl">Marshall Islands</option>
<option value="mtq">Martinique</option>
<option value="mrt">Mauritania</option>
<option value="mus">Mauritius</option>
<option value="myt">Mayotte</option>
<option value="mex">Mexico</option>
<option value="mco">Monaco</option>
<option value="mng">Mongolia</option>
<option value="mne">Montenegro</option>
<option value="msr">Montserrat</option>
<option value="mar">Morocco</option>
<option value="moz">Mozambique</option>
<option value="mmr">Myanmar</option>
<option value="nam">Namibia</option>
<option value="nru">Nauru</option>
<option value="npl">Nepal</option>
<option value="nld">Netherlands</option>
<option value="ncl">New Caledonia</option>
<option value="nzl">New Zealand</option>
<option value="nic">Nicaragua</option>
<option value="ner">Niger</option>
<option value="nga">Nigeria</option>
<option value="niu">Niue</option>
<option value="nfk">Norfolk Island</option>
<option value="mnp">Northern Mariana Islands</option>
<option value="nor">Norway</option>
<option value="pse">Occupied Palestinian Territory</option>
<option value="omn">Oman</option>
<option value="pak">Pakistan</option>
<option value="plw">Palau</option>
<option value="pan">Panama</option>
<option value="png">Papua New Guinea</option>
<option value="pry">Paraguay</option>
<option value="per">Peru</option>
<option value="phl">Philippines</option>
<option value="pcn">Pitcairn</option>
<option value="pol">Poland</option>
<option value="prt">Portugal</option>
<option value="pri">Puerto Rico</option>
<option value="qat">Qatar</option>
<option value="kor">Republic of Korea</option>
<option value="mda">Republic of Moldova</option>
<option value="cog">Republic of the Congo</option>
<option value="rou">Romania</option>
<option value="rus">Russian Federation</option>
<option value="rwa">Rwanda</option>
<option value="reu">Réunion</option>
<option value="shn">Saint Helena</option>
<option value="kna">Saint Kitts and Nevis</option>
<option value="lca">Saint Lucia</option>
<option value="vct">Saint Vincent and the Grenadines</option>
<option value="spm">Saint-Pierre and Miquelon</option>
<option value="wsm">Samoa</option>
<option value="smr">San Marino</option>
<option value="stp">Sao Tome and Principe</option>
<option value="sau">Saudi Arabia</option>
<option value="sen">Senegal</option>
<option value="srb">Serbia</option>
<option value="syc">Seychelles</option>
<option value="sle">Sierra Leone</option>
<option value="sgp">Singapore</option>
<option value="sxm">Sint Maarten (Dutch part)</option>
<option value="svk">Slovakia</option>
<option value="svn">Slovenia</option>
<option value="slb">Solomon Islands</option>
<option value="som">Somalia</option>
<option value="zaf">South Africa</option>
<option value="sgs">South Georgia and the South Sandwich Islands</option>
<option value="esp">Spain</option>
<option value="lka">Sri Lanka</option>
<option value="sdn">Sudan</option>
<option value="sur">Suriname</option>
<option value="sjm">Svalbard and Jan Mayen</option>
<option value="swz">Swaziland</option>
<option value="swe">Sweden</option>
<option value="che">Switzerland</option>
<option value="syr">Syrian Arab Republic</option>
<option value="twn">Taiwan</option>
<option value="tjk">Tajikistan</option>
<option value="tha">Thailand</option>
<option value="cod">The Democratic Republic Of The Congo</option>
<option value="mkd">The Former Yugoslav Republic of Macedonia</option>
<option value="tls">Timor-Leste</option>
<option value="tgo">Togo</option>
<option value="tkl">Tokelau</option>
<option value="ton">Tonga</option>
<option value="tto">Trinidad and Tobago</option>
<option value="tun">Tunisia</option>
<option value="tur">Turkey</option>
<option value="tkm">Turkmenistan</option>
<option value="tca">Turks and Caicos Islands</option>
<option value="tuv">Tuvalu</option>
<option value="vir">U.S. Virgin Islands</option>
<option value="uga">Uganda</option>
<option value="ukr">Ukraine</option>
<option value="are">United Arab Emirates</option>
<option value="gbr">United Kingdom</option>
<option value="tza">United Republic Of Tanzania</option>
<option value="usa">United States</option>
<option value="umi">United States Minor Outlying Islands</option>
<option value="ury">Uruguay</option>
<option value="uzb">Uzbekistan</option>
<option value="vut">Vanuatu</option>
<option value="vat">Vatican City State</option>
<option value="ven">Venezuela</option>
<option value="vnm">Vietnam</option>
<option value="wlf">Wallis and Futuna</option>
<option value="esh">Western Sahara</option>
<option value="yem">Yemen</option>
<option value="zmb">Zambia</option>
<option value="zwe">Zimbabwe</option>
<option value="ala">Åland Islands</option>
</select>
        <p id="buyerSelect-error" class="col-md-6 col-xs-12 errorMessage buyerFormErrors"></p>
       

		<input type="text" placeholder="Contact Number" name="phone" id="buyerContact" class="form-control buyerContact">
		<p id="buyerContact-error" class="col-md-6 col-xs-12 errorMessage "></p>
        <textarea placeholder="How Can We Help You?" name="natureOfService" id="buyerHelp" class="form-control buyerHelp"></textarea>
        <p id="buyerHelp-error" class="col-md-6 col-xs-12 errorMessage width-100 buyerFormErrors"></p>
        
         <div class="checkBuyer">
         <input type="checkbox" class="css-checkbox2" id="termsOfUseBuyerGetInTouch" name="termsOfUseBuyerGetInTouch">
         <label data-toggle="modal" class="css-label2" id="termsOfUseBuyerGetInTouchLabel" for="termsOfUseBuyerGetInTouch">Terms of Use</label>
         
         <input type="checkbox" class="css-checkbox3" id="privacyPolicyBuyerGetInTouch" name="privacyPolicyBuyerGetInTouch">
         <label data-toggle="modal" class="css-label3" id="privacyPolicyBuyerGetInTouchLabel" for="privacyPolicyBuyerGetInTouch">Privacy Policy</label>
         </div>
       
       	 <div class="col-md-12 col-xs-12">
         <p id="termsOfUseBuyerGetInTouch-error" class="col-md-4 col-xs-12  errorMessage checkboxBuyerGetInTouch-error"></p>
         <p id="privacyPolicyBuyerGetInTouch-error" class="col-md-4 col-xs-12  errorMessage checkboxBuyerGetInTouch-error"></p>
         </div>
       	 
        </div>
    <div class="modal-footer buyerFooter">
        <button onclick="submitForm(this)" id="buyerButton" class="btn btn-primary enterButton buyerButton" type="button">submit</button>
      </div>
      </form>
      </div>
      </div>
  </div>
</div>
<!-- -----------------------------------------------buyer get in touch ends here--------------------------------------------------------------- --> 
<!------------------------------------------------------- Login Modal -------------------------------------------------------------->
<div class="modal fade in modalspace" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
 <div class="loadingSpinner"></div> 

  <div class="modal-dialog">
  
    <div class="modal-content loginModalDesign">
      <div class="modal-header loginModalHeader">
        <button type="button" class="close loginClose" data-dismiss="modal" aria-label="Close">x</button>        
      </div>
    <div class="modal-body loginModalBody">
      <form action="/?id=loginForm" method="post" name="loginForm" id="loginForm" >
        <input type="text" class="form-control loginEmail" name='j_username' id='username' placeholder="E-mail">
        <p class="col-md-6 col-xs-12 userError errorMessage loginFormErrors" id="username-error"></p>
        
        <input type="password" class="form-control loginPassword" name='j_password' id='password' placeholder="Password">
        <p class="col-md-6 col-xs-12 passwordError errorMessage loginFormErrors" id="password-error"></p>
        
         <div class="clear"></div>
		 <p id='errorLoginMsg'  class="login-error"></p>
		 <input type="checkbox" name="checkboxG1" name='_spring_security_remember_me' id="checkboxG1" class="css-checkbox"  />
         <label for="checkboxG1" class="css-label">Remember Me</label>
        
           <div class="modal-footer loginModalFooter">
      	   <span data-toggle="modal" id="forgotpassword" data-target="#forgotpasswordModal"> Forgot Password</span>
     
        <button type="button" class="btn btn-primary loginButton" id="loginBtn" onClick="loginAjax()" >Log In</button>
      </div>
          </form>
   	</div>
    </div>
     
  </div>
    
</div>
<script>

//Login ajax method
function loginAjax() {
    $('#errorLoginMsg').hide()
    if ($('#loginForm').valid()) {
        jQuery.ajax({
            type: 'POST',
            url:'/j_spring_security_check',
            data: $("#loginForm").serialize(),
            beforeSend: function(){
            	$('.loadingSpinner').show()
			},
			complete: function(){
            	$('form').each(function() {
                    var $formFields = $(this).find('input[type="text"],textarea,input[type="hidden"],input[type="password"],input[type="checkbox"],select');
                    $.each($formFields, function(index, element) {
                    	$(element).removeClass('valid')    
                    	})
                	})
                },    
            success: function(response, textStatus) {
            	$('.loadingSpinner').hide()
    			$('#errorLoginMsg').hide()
                if (response.success) {
                    window.location.assign("/dashboard/index");
                } else {
                    if (response.error) {
                        $('#errorLoginMsg').html(response.error).show();
                        $('#password').removeClass('valid').addClass('error')
                        $('#username').removeClass('valid').addClass('error')
                        
                        return false;
                    }
                }
            }
        })
   }
}

</script> 
<!-------------------------------------------------- Login Modal ends here--------------------------------------------------------------> 

<!------------------------------------------------------- signUp Modal -------------------------------------------------------------->

<div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">

 <div class="loadingSpinner"></div> 
  <div class="modal-dialog modal-lg">
    <div class="modal-content signupModalDesign">
      <div class="modal-header signupModalHeader" id="registerFormBuyerModalHeader">
        <button type="button" class="close signupClose" onClick="signUpClose(this)" data-form-Id="registerFormBuyer" data-dismiss="modal" aria-label="Close">x</button>
        <h4 class="signupHeading">IT Buyers, register to get the IT Exchange advantage. </h4>
        <p class="signupDetails">Outsource with Confidence to high quality Service Providers.</p>
      </div>
      <div id="registerFormBuyerSuccess"></div>
        
      <form action="/?id=registerFormBuyer" method="post" name="registerFormBuyer" data-url="/register/register" class="form-boxes" id="registerFormBuyer" >
      <div class="modal-body signupModalBody">
      <div class="col-md-12 col-xs-12">
        <input type="text" class="form-control signupFName" id="signupFName" name="firstName" placeholder="First Name">
        <input type="text" class="form-control signupLName" id="signupLName" name="lastName" placeholder="Last Name">
        <p class="col-md-6 col-xs-12 errorMessage" id="signupFName-error"></p>
        <p class="col-md-6 col-xs-12 errorMessage" id="signupLName-error"></p>
        </div>
         <div class="col-md-12 col-xs-12">
        <input type="text" class="form-control signupEmail" id="signupCompany" name="company" placeholder="Company">
        <input type="text" class="form-control signupPassword" id="signupJobTitle" name="designation" placeholder="Job Title">
        <p class="col-md-6 col-xs-12 errorMessage" id="signupCompany-error"></p>
        <p class="col-md-6 col-xs-12 errorMessage" id="signupJobTitle-error"></p>
        </div>
         <div class="col-md-12 col-xs-12">
         <input type="text" class="form-control signupCompany" id="signupEmail" name="email" placeholder="Email">
      	 <input type="password" class="form-control signupJobTitle" id="signupPassword" name="signupPassword" placeholder="Password ">
      	 <p class="col-md-6 col-xs-12 errorMessage" id="signupEmail-error"></p>
         <p class="col-md-6 col-xs-12 errorMessage" id="signupPassword-error"></p>
        </div>
          <div class="col-md-12 col-xs-12">
          <input type="password" class="form-control signupCPassword" id="signupCPassword" name="signupCPassword" placeholder="Confirm Password">
          <select id="signUpSelect" class="signUpSelect" name="countryCode" >
<option value="">Select Country</option>
<option value="afg" >Afghanistan</option>
<option value="alb" >Albania</option>
<option value="dza" >Algeria</option>
<option value="asm" >American Samoa</option>
<option value="and" >Andorra</option>
<option value="ago" >Angola</option>
<option value="aia" >Anguilla</option>
<option value="ata" >Antarctica</option>
<option value="atg" >Antigua and Barbuda</option>
<option value="arg" >Argentina</option>
<option value="arm" >Armenia</option>
<option value="abw" >Aruba</option>
<option value="aus" >Australia</option>
<option value="aut" >Austria</option>
<option value="aze" >Azerbaijan</option>
<option value="bhs" >Bahamas</option>
<option value="bhr" >Bahrain</option>
<option value="bgd" >Bangladesh</option>
<option value="brb" >Barbados</option>
<option value="blr" >Belarus</option>
<option value="bel" >Belgium</option>
<option value="blz" >Belize</option>
<option value="ben" >Benin</option>
<option value="bmu" >Bermuda</option>
<option value="btn" >Bhutan</option>
<option value="bol" >Bolivia</option>
<option value="bes" >Bonaire, Sint Eustatius and Saba</option>
<option value="bih" >Bosnia and Herzegovina</option>
<option value="bwa" >Botswana</option>
<option value="bvt" >Bouvet Island</option>
<option value="bra" >Brazil</option>
<option value="iot" >British Indian Ocean Territory</option>
<option value="vgb" >British Virgin Islands</option>
<option value="brn" >Brunei Darussalam</option>
<option value="bgr" >Bulgaria</option>
<option value="bfa" >Burkina Faso</option>
<option value="bdi" >Burundi</option>
<option value="khm" >Cambodia</option>
<option value="cmr" >Cameroon</option>
<option value="can" >Canada</option>
<option value="cpv" >Cape Verde</option>
<option value="cym" >Cayman Islands</option>
<option value="caf" >Central African</option>
<option value="tcd" >Chad</option>
<option value="chl" >Chile</option>
<option value="chn" >China</option>
<option value="cxr" >Christmas Island</option>
<option value="cck" >Cocos (Keeling) Islands</option>
<option value="col" >Colombia</option>
<option value="com" >Comoros</option>
<option value="cok" >Cook Islands</option>
<option value="cri" >Costa Rica</option>
<option value="hrv" >Croatia</option>
<option value="cub" >Cuba</option>
<option value="cuw" >Cura&ccedil;ao</option>
<option value="cyp" >Cyprus</option>
<option value="cze" >Czech Republic</option>
<option value="civ" >C&ocirc;te d&#39;Ivoire</option>
<option value="prk" >Democratic People&#39;s Republic of Korea</option>
<option value="dnk" >Denmark</option>
<option value="dji" >Djibouti</option>
<option value="dma" >Dominica</option>
<option value="dom" >Dominican Republic</option>
<option value="ecu" >Ecuador</option>
<option value="egy" >Egypt</option>
<option value="slv" >El Salvador</option>
<option value="gnq" >Equatorial Guinea</option>
<option value="eri" >Eritrea</option>
<option value="est" >Estonia</option>
<option value="eth" >Ethiopia</option>
<option value="flk" >Falkland Islands</option>
<option value="fro" >Faroe Islands</option>
<option value="fsm" >Federated States of Micronesia</option>
<option value="fji" >Fiji</option>
<option value="fin" >Finland</option>
<option value="fra" >France</option>
<option value="guf" >French Guiana</option>
<option value="pyf" >French Polynesia</option>
<option value="atf" >French Southern Territories</option>
<option value="gab" >Gabon</option>
<option value="gmb" >Gambia</option>
<option value="geo" >Georgia</option>
<option value="deu" >Germany</option>
<option value="gha" >Ghana</option>
<option value="gib" >Gibraltar</option>
<option value="grc" >Greece</option>
<option value="grl" >Greenland</option>
<option value="grd" >Grenada</option>
<option value="glp" >Guadeloupe</option>
<option value="gum" >Guam</option>
<option value="gtm" >Guatemala</option>
<option value="gin" >Guinea</option>
<option value="gnb" >Guinea-Bissau</option>
<option value="guy" >Guyana</option>
<option value="hti" >Haiti</option>
<option value="hmd" >Heard Island and McDonald Islands</option>
<option value="hnd" >Honduras</option>
<option value="hkg" >Hong Kong</option>
<option value="hun" >Hungary</option>
<option value="isl" >Iceland</option>
<option value="ind" >India</option>
<option value="idn" >Indonesia</option>
<option value="irq" >Iraq</option>
<option value="irl" >Ireland</option>
<option value="irn" >Islamic Republic of Iran</option>
<option value="imn" >Isle of Man</option>
<option value="isr" >Israel</option>
<option value="ita" >Italy</option>
<option value="jam" >Jamaica</option>
<option value="jpn" >Japan</option>
<option value="jor" >Jordan</option>
<option value="kaz" >Kazakhstan</option>
<option value="ken" >Kenya</option>
<option value="kir" >Kiribati</option>
<option value="kwt" >Kuwait</option>
<option value="kgz" >Kyrgyzstan</option>
<option value="lao" >Lao People&#39;s Democratic Republic</option>
<option value="lva" >Latvia</option>
<option value="lbn" >Lebanon</option>
<option value="lso" >Lesotho</option>
<option value="lbr" >Liberia</option>
<option value="lby" >Libyan Arab Jamahiriya</option>
<option value="lie" >Liechtenstein</option>
<option value="ltu" >Lithuania</option>
<option value="lux" >Luxembourg</option>
<option value="mac" >Macao</option>
<option value="mdg" >Madagascar</option>
<option value="mwi" >Malawi</option>
<option value="mys" >Malaysia</option>
<option value="mdv" >Maldives</option>
<option value="mli" >Mali</option>
<option value="mlt" >Malta</option>
<option value="mhl" >Marshall Islands</option>
<option value="mtq" >Martinique</option>
<option value="mrt" >Mauritania</option>
<option value="mus" >Mauritius</option>
<option value="myt" >Mayotte</option>
<option value="mex" >Mexico</option>
<option value="mco" >Monaco</option>
<option value="mng" >Mongolia</option>
<option value="mne" >Montenegro</option>
<option value="msr" >Montserrat</option>
<option value="mar" >Morocco</option>
<option value="moz" >Mozambique</option>
<option value="mmr" >Myanmar</option>
<option value="nam" >Namibia</option>
<option value="nru" >Nauru</option>
<option value="npl" >Nepal</option>
<option value="nld" >Netherlands</option>
<option value="ncl" >New Caledonia</option>
<option value="nzl" >New Zealand</option>
<option value="nic" >Nicaragua</option>
<option value="ner" >Niger</option>
<option value="nga" >Nigeria</option>
<option value="niu" >Niue</option>
<option value="nfk" >Norfolk Island</option>
<option value="mnp" >Northern Mariana Islands</option>
<option value="nor" >Norway</option>
<option value="pse" >Occupied Palestinian Territory</option>
<option value="omn" >Oman</option>
<option value="pak" >Pakistan</option>
<option value="plw" >Palau</option>
<option value="pan" >Panama</option>
<option value="png" >Papua New Guinea</option>
<option value="pry" >Paraguay</option>
<option value="per" >Peru</option>
<option value="phl" >Philippines</option>
<option value="pcn" >Pitcairn</option>
<option value="pol" >Poland</option>
<option value="prt" >Portugal</option>
<option value="pri" >Puerto Rico</option>
<option value="qat" >Qatar</option>
<option value="kor" >Republic of Korea</option>
<option value="mda" >Republic of Moldova</option>
<option value="cog" >Republic of the Congo</option>
<option value="rou" >Romania</option>
<option value="rus" >Russian Federation</option>
<option value="rwa" >Rwanda</option>
<option value="reu" >R&eacute;union</option>
<option value="shn" >Saint Helena</option>
<option value="kna" >Saint Kitts and Nevis</option>
<option value="lca" >Saint Lucia</option>
<option value="vct" >Saint Vincent and the Grenadines</option>
<option value="spm" >Saint-Pierre and Miquelon</option>
<option value="wsm" >Samoa</option>
<option value="smr" >San Marino</option>
<option value="stp" >Sao Tome and Principe</option>
<option value="sau" >Saudi Arabia</option>
<option value="sen" >Senegal</option>
<option value="srb" >Serbia</option>
<option value="syc" >Seychelles</option>
<option value="sle" >Sierra Leone</option>
<option value="sgp" >Singapore</option>
<option value="sxm" >Sint Maarten (Dutch part)</option>
<option value="svk" >Slovakia</option>
<option value="svn" >Slovenia</option>
<option value="slb" >Solomon Islands</option>
<option value="som" >Somalia</option>
<option value="zaf" >South Africa</option>
<option value="sgs" >South Georgia and the South Sandwich Islands</option>
<option value="esp" >Spain</option>
<option value="lka" >Sri Lanka</option>
<option value="sdn" >Sudan</option>
<option value="sur" >Suriname</option>
<option value="sjm" >Svalbard and Jan Mayen</option>
<option value="swz" >Swaziland</option>
<option value="swe" >Sweden</option>
<option value="che" >Switzerland</option>
<option value="syr" >Syrian Arab Republic</option>
<option value="twn" >Taiwan</option>
<option value="tjk" >Tajikistan</option>
<option value="tha" >Thailand</option>
<option value="cod" >The Democratic Republic Of The Congo</option>
<option value="mkd" >The Former Yugoslav Republic of Macedonia</option>
<option value="tls" >Timor-Leste</option>
<option value="tgo" >Togo</option>
<option value="tkl" >Tokelau</option>
<option value="ton" >Tonga</option>
<option value="tto" >Trinidad and Tobago</option>
<option value="tun" >Tunisia</option>
<option value="tur" >Turkey</option>
<option value="tkm" >Turkmenistan</option>
<option value="tca" >Turks and Caicos Islands</option>
<option value="tuv" >Tuvalu</option>
<option value="vir" >U.S. Virgin Islands</option>
<option value="uga" >Uganda</option>
<option value="ukr" >Ukraine</option>
<option value="are" >United Arab Emirates</option>
<option value="gbr" >United Kingdom</option>
<option value="tza" >United Republic Of Tanzania</option>
<option value="usa" >United States</option>
<option value="umi" >United States Minor Outlying Islands</option>
<option value="ury" >Uruguay</option>
<option value="uzb" >Uzbekistan</option>
<option value="vut" >Vanuatu</option>
<option value="vat" >Vatican City State</option>
<option value="ven" >Venezuela</option>
<option value="vnm" >Vietnam</option>
<option value="wlf" >Wallis and Futuna</option>
<option value="esh" >Western Sahara</option>
<option value="yem" >Yemen</option>
<option value="zmb" >Zambia</option>
<option value="zwe" >Zimbabwe</option>
<option value="ala" >&Aring;land Islands</option>
</select>
          <input type="text" class="form-control signupContact" id="signupContact" placeholder="Contact Number" name="phone">
          <p class="col-md-4 col-xs-12 errorMessage" id="signupCPassword-error"></p>
          <p class="col-md-4 col-xs-12 errorMessage smallErrorBox" id="signUpSelect-error"></p>
          <p class="col-md-4 col-xs-12 errorMessage smallErrorBox" id="signupContact-error"></p>
        
         </div>
         <div class="check">
          <input type="checkbox" name="termsOfUse" id="termsOfUse" class="css-checkbox2" value="1" />
          <label for="termsOfUse" id="termsOfUseLabel" class="form-checkBox css-label2" data-toggle="modal" >Terms of Use</label>
          
         <input type="checkbox" name="privacyPolicy" id="privacyPolicy" class="css-checkbox3" />
         <label for="privacyPolicy" id="privacyPolicyLabel" class="form-checkBox css-label3" data-toggle="modal" >Privacy Policy</label>
         
         <div class="col-md-12 col-xs-12">
         
         <p class="col-md-4 col-xs-12  errorMessage checkbox-error" id="privacyPolicy-error"></p>
         <p class="col-md-4 col-xs-12  errorMessage checkbox-error" id="termsOfUse-error"></p>
          </div>
         </div>
      </div>
      <div class="modal-footer loginModalFooter">
        <button type="button" class="btn btn-primary signupButton" id="signupButton" onClick="submitForm(this)">submit</button>
      </div></form>
    </div>
  </div>
</div>
 
<script>

// Used to submit SignUp, buyerContactRequest, spContactRequest forms.
function submitForm(submitButton) {
    var element = $(submitButton)
    var form = element.closest('form')

    // Check if form is valid
	if ($('#' + form.attr('id')).valid()) {
        // TODO: Password and password2 are not working as name attributes - check and remove extra params
        $.ajax({
            type: 'POST',
            url: $(form).attr('data-url'),
            data: $(form).serialize() + '&password=' + $('#signupPassword').val() + '&password2=' + $('#signupCPassword').val(),
            beforeSend: function(){
                	$('.loadingSpinner').show()
				},
            complete: function(){
            	$('form').each(function() {
                    var $formFields = $(this).find('input[type="text"],textarea,input[type="hidden"],input[type="password"],input[type="checkbox"],select');
                    $.each($formFields, function(index, element) {
                    	$(element).removeClass('valid')    
                    	})
                	})
                },    
            success: function(response, textStatus) {
            	$('.loadingSpinner').hide()
				if (response.success) {
                    // Hide form
                    $(form).hide();
                    // Show success message
                    $('#' + form.attr('id') + 'Success').show()
                        // Hide modal body
                    if ($(form).attr('id') == 'buyerContactForm'){
                         $('#buyerGetInTouchModalBodyLeft').hide()
                         $('#buyerGetInTouchModalHeader').hide()
                    }
                    else if ($(form).attr('id') == 'spContactForm') {
                        $('#spGetInTouchModalBodyLeft').hide()
                        $('#spGetInTouchModalBodyHeader').hide()
                    }
                    else if($(form).attr('id') == 'registerFormBuyer') {
                        $('#registerFormBuyerModalHeader').hide()
                    }

                    var notifactionMessage = '<div id="successMessagePosition" class="successMessagePosition frm-res-cnt success">' +
                        '<div class="frm-res-img success sucessImage"></div>' +
                        '<div class="frm-res-txt success">' +
                        '<p class="signupDetails">' + response.message + '</p>' +
                        '</div>' +
                        '</div>';
                    // Add Success Message 
                    $('#' + form.attr('id') + 'Success').html(notifactionMessage)
                } else{
                    for(var i=0;i<response.serverErrors.length;i++){
                    var fieldName = response.serverErrors[i].field 
            		var message = response.serverErrors[i].message
            		}
            		var res = message.split(".")
            		var actualMessage = res[res.length-2]+res[res.length-1]
            		if(fieldName == 'email' && actualMessage == 'usernameunique' ){
            			$('#signupEmail').addClass('error')
            			$('#signupEmail-error').removeClass('NoMessage').addClass('errorMessage').html('Email already registered')
            		}
            		if(fieldName == 'email' && actualMessage == 'emailbusiness' ){
            			$('#signupEmail').addClass('error')
            			$('#signupEmail-error').removeClass('NoMessage').addClass('errorMessage').html('Use a business email address to sign up')
            		}
            	}
            }
        });
    }
}

// On Close, Show form, Reset form, hide Success message 
function signUpClose(closeForm) {
    var form = $(closeForm).attr('data-form-Id')
    if (form == 'buyerContactForm') $('#buyerGetInTouchModalBodyLeft').show()
    else if (form == 'spContactForm') $('#spGetInTouchModalBodyLeft').show()
    $('#' + form).show()
    $('#' + form)[0].reset();
    $('#' + form + 'Success').hide()
}

</script>         

<!-------------------------------------------------- SignUp Modal ends here-------------------------------------------------------------->
<!------------------------------------------------------- forgotpassword Modal -------------------------------------------------------------->
       
              
<div class="modal fade" id="forgotpasswordModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
 <div class="loadingSpinner"></div> 

 	 <div class="modal-dialog modal-lg">
    <div class="modal-content forgotpasswordModalDesign">
      <div class="modal-header signupModalHeader">
        <button type="button" class="close signupClose" onClick="signUpClose(this)" data-form-Id="registerFormBuyer" data-dismiss="modal" aria-label="Close">x</button>
        <h4 class="signupHeading">Forgot Password</h4>
        <p class="signupDetails">Enter your email id and we'll send a link to reset your password to the address we have for your account. </p>
      </div>
      <div id="registerFormBuyerSuccess"></div>
 <div class="loadingSpinner"></div> 
        
      <form action="/?id=forgotPasswordForm" method="post" name="forgotPasswordForm" data-url="/register/forgotPassword" class="cf error-hidden" id="forgotPasswordForm" >
      <div class="modal-body signupModalBody">
     
        <input type="text" class="form-control signupFName" id="forgotEmail" name="forgotEmail" placeholder="Your Email">
         <button type="button" class="btn btn-primary signupButton" id="forgotPassword" onClick="submitForgotPassword(this)" >submit</button>
    
                
                 </div>
      <div class="modal-footer loginModalFooter">
              <p class="col-md-6 col-xs-12 width-50 errorMessage" id="forgotEmail-error"></p>
 
         </div>
      
         
      </form>
      
    </div>
  </div>
</div>


<script>
//forgot password
function submitForgotPassword(submitButton){
  var element = $(submitButton)
  var form = element.closest('form')

  if ($('#' + form.attr('id')).valid()) {
  jQuery.ajax({
         type: 'POST',
          url: $(form).attr('data-url'),
          data: $(form).serialize(),
          beforeSend: function(){
			$('.loadingSpinner').hide()
			},
      	  complete: function(){
			 $('.loadingSpinner').hide()
		   },    
      	  success: function(response, textStatus) {
          	if (response.status) {
          		$('#forgotEmail').removeClass('error')
              	$('#forgotEmail-error').html('')
              	$('#forgotEmail-error').removeClass('errorMessage').addClass('successMessage').html(response.message)	
              } else {
                $('#forgotEmail').addClass('error')
              	$('#forgotEmail-error').html('')
              	$('#forgotEmail-error').addClass('errorMessage').removeClass('NoMessage').html(response.message)	
              }
          }
      })
  }
}
</script> 
       
<!-------------------------------------------------- forgot password Modal ends here-------------------------------------------------------------->

<!-- -----------------------------------------------Privacy Policy--------------------------------------------------------------- -->

<?php
$idprivacyPolicy = itexc_of_get_option("privacypolicy");
query_posts("post_type=page&page_id=$idprivacyPolicy");
if (have_posts()):
    while (have_posts()): the_post();
        ?>
        <div class="modal fade " id="privacyPolicyModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content footerBottonModal">
                    <div class="modal-header signupModalHeader">
                        <button type="button" class="close signupClose" data-dismiss="modal" aria-label="Close">x</button>
                        <h4 class="ppHeading"><?php the_title(); ?></h4>
                    </div>
                    <div class="modal-body privacyPolicyModalBody">
                        <?php
                        //content of the privacy policy page.
                        the_content();
                        ?>
                    </div>
                    <div class="modal-footer ppModalFooter">
                        <button type="button" data-dismiss="modal" class="btn btn-primary signupButton" id="okprivacy">OK</button>
                    </div>
                </div>
            </div>
        </div>
        <?php


    endwhile;
endif;
wp_reset_query();
?>   
<!-- -----------------------------------------------privacy policy ends here--------------------------------------------------------------- -->
<!-- ----------------------------------------------term of use --------------------------------------------------------------- -->
<?php
$idtermsofuse = itexc_of_get_option("termsofuse");
query_posts("post_type=page&page_id=$idtermsofuse");
if (have_posts()):
    while (have_posts()): the_post();
        ?>
        <div class="modal fade" id="termUseModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content footerBottonModal">
                    <div class="modal-header signupModalHeader">
                        <button type="button" class="close signupClose" data-dismiss="modal" aria-label="Close">x</button>
                        <h4 class="ppHeading"><?php the_title(); ?></h4>
                    </div>
                    <div class="modal-body privacyPolicyModalBody">
                        <?php
                        //content of the privacy policy page.
                        the_content();
                        ?>
                    </div>
                    <div class="modal-footer ppModalFooter">
                        <button type="button" data-dismiss="modal" class="btn btn-primary signupButton" id="okprivacy">OK</button>
                    </div>
                </div>
            </div>
        </div>
        <?php
    endwhile;
endif;
wp_reset_query();
?> 
<!-- -----------------------------------------------term of use ends here--------------------------------------------------------------- -->
<!-- **************************************Service provider popup ***************************************** -->
<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="spGetInTouchModal" class="modal fade in">

 <div class="loadingSpinner"></div> 

  <div class="modal-dialog modal-lg">
    <div class="modal-content signupModalDesign">
      <div id="spGetInTouchModalBodyHeader" class="modal-header signupModalHeader">
        <button aria-label="Close" data-form-id="spContactForm" onclick="signUpClose(this)" data-dismiss="modal" class="close signupClose" type="button">x</button>
        <h4 class="signupHeading">Service Providers Information Request</h4>
        <p class="signupDetails">The IT Exchange service provider network is exclusive and by-invite. There is no cost to get on-board;<br>
if you are competent in your areas of focus, then you are welcome. As a part of this exclusive network you:
</p>
      </div>
      <div class="modal-body spGetInTouchModalBody">
      <ul id="spGetInTouchModalBodyLeft" class="col-md-12 col-xs-12">
      <li class="col-md-6 col-xs-6">Get Access to clients from around the world,<br>
			we are your Zero Cost sales channel.</li>
			
	 <li class="col-md-6 col-xs-6">If you are an IT Service Provider interested in<br>
			registering with us, please fill out the form so<br>
			our Alliance team can get in touch with you<br>
			and take you through the registration process.</li>
     		
			
      <li class="col-md-6 col-xs-6">Use our comprehensive project governance<br>
				tools, for FREE, that enable you to deliver<br>
				with global standards.        
				 </li>
     
      
      </ul>
        
    
    </div>
     <div id="spContactFormSuccess"></div>
    <form id="spContactForm" class="cf error-hidden" data-url="/register/saveServiceProviderDetails" name="spContactForm" method="post" action="/?id=spContactForm" novalidate="novalidate">				
    <div class="col-md-12 col-xs-12">
    	
        <input type="text" placeholder="Company Name" name="company" id="spCompanyName" class="form-control spCompanyName">
        <input type="text" name="website" placeholder="Website Name" id="spwebName" class="form-control spwebName">
        <p id="spCompanyName-error" class="col-md-6 col-xs-12 errorMessage sPFormErrors"></p>
        <p id="spwebName-error" class="col-md-6 col-xs-12 errorMessage width37"></p>
        
        </div>
         
        <div class="col-md-12 col-xs-12">
        <input type="text" name="landline" placeholder="Telephone Number" id="sptelephone" class="form-control sptelephone">
        <input type="text" name="yearOfIncorporation" placeholder="Year of Incorporation" id="spyear" class="form-control spyear">
        <p id="sptelephone-error" class="col-md-6 col-xs-12 errorMessage sPFormErrors"></p>
        <p id="spyear-error" class="col-md-6 col-xs-12 errorMessage"></p>
        </div>
        <div class="col-md-12 col-xs-12">
        <input type="text" name="technologyFocus" placeholder="Technology Foucs" id="spTechnology" class="form-control sptelephone">
        <input type="text" name="industryFocus" placeholder="Industry Focus" id="spIndustry" class="form-control spyear">
        <p id="spTechnology-error" class="col-md-6 col-xs-12 errorMessage sPFormErrors"></p>
        <p id="spIndustry-error" class="col-md-6 col-xs-12 errorMessage"></p>
        </div>
         <div class="col-md-12 col-xs-12">
        <input type="text" name="serviceProvided" placeholder="Service Provided" id="spServiceProvided" class="form-control spServiceProvided">
        <input type="text" name="contactName" placeholder="Contact Name" id="spContactName" class="form-control spContactName">
        <p id="spServiceProvided-error" class="col-md-6 col-xs-12 errorMessage sPFormErrors"></p>
        <p id="spContactName-error" class="col-md-6 col-xs-12 errorMessage"></p>
        </div>
          <div class="col-md-12 col-xs-12">
        
        <input type="text" name="email" placeholder="Contact Email" id="spContactMail" class="form-control spContactMail">
        <select name="countryCode" class="signUpSelect" id="spSelect">
<option value="">Select Country</option>
<option value="afg">Afghanistan</option>
<option value="alb">Albania</option>
<option value="dza">Algeria</option>
<option value="asm">American Samoa</option>
<option value="and">Andorra</option>
<option value="ago">Angola</option>
<option value="aia">Anguilla</option>
<option value="ata">Antarctica</option>
<option value="atg">Antigua and Barbuda</option>
<option value="arg">Argentina</option>
<option value="arm">Armenia</option>
<option value="abw">Aruba</option>
<option value="aus">Australia</option>
<option value="aut">Austria</option>
<option value="aze">Azerbaijan</option>
<option value="bhs">Bahamas</option>
<option value="bhr">Bahrain</option>
<option value="bgd">Bangladesh</option>
<option value="brb">Barbados</option>
<option value="blr">Belarus</option>
<option value="bel">Belgium</option>
<option value="blz">Belize</option>
<option value="ben">Benin</option>
<option value="bmu">Bermuda</option>
<option value="btn">Bhutan</option>
<option value="bol">Bolivia</option>
<option value="bes">Bonaire, Sint Eustatius and Saba</option>
<option value="bih">Bosnia and Herzegovina</option>
<option value="bwa">Botswana</option>
<option value="bvt">Bouvet Island</option>
<option value="bra">Brazil</option>
<option value="iot">British Indian Ocean Territory</option>
<option value="vgb">British Virgin Islands</option>
<option value="brn">Brunei Darussalam</option>
<option value="bgr">Bulgaria</option>
<option value="bfa">Burkina Faso</option>
<option value="bdi">Burundi</option>
<option value="khm">Cambodia</option>
<option value="cmr">Cameroon</option>
<option value="can">Canada</option>
<option value="cpv">Cape Verde</option>
<option value="cym">Cayman Islands</option>
<option value="caf">Central African</option>
<option value="tcd">Chad</option>
<option value="chl">Chile</option>
<option value="chn">China</option>
<option value="cxr">Christmas Island</option>
<option value="cck">Cocos (Keeling) Islands</option>
<option value="col">Colombia</option>
<option value="com">Comoros</option>
<option value="cok">Cook Islands</option>
<option value="cri">Costa Rica</option>
<option value="hrv">Croatia</option>
<option value="cub">Cuba</option>
<option value="cuw">Curaçao</option>
<option value="cyp">Cyprus</option>
<option value="cze">Czech Republic</option>
<option value="civ">Côte d'Ivoire</option>
<option value="prk">Democratic People's Republic of Korea</option>
<option value="dnk">Denmark</option>
<option value="dji">Djibouti</option>
<option value="dma">Dominica</option>
<option value="dom">Dominican Republic</option>
<option value="ecu">Ecuador</option>
<option value="egy">Egypt</option>
<option value="slv">El Salvador</option>
<option value="gnq">Equatorial Guinea</option>
<option value="eri">Eritrea</option>
<option value="est">Estonia</option>
<option value="eth">Ethiopia</option>
<option value="flk">Falkland Islands</option>
<option value="fro">Faroe Islands</option>
<option value="fsm">Federated States of Micronesia</option>
<option value="fji">Fiji</option>
<option value="fin">Finland</option>
<option value="fra">France</option>
<option value="guf">French Guiana</option>
<option value="pyf">French Polynesia</option>
<option value="atf">French Southern Territories</option>
<option value="gab">Gabon</option>
<option value="gmb">Gambia</option>
<option value="geo">Georgia</option>
<option value="deu">Germany</option>
<option value="gha">Ghana</option>
<option value="gib">Gibraltar</option>
<option value="grc">Greece</option>
<option value="grl">Greenland</option>
<option value="grd">Grenada</option>
<option value="glp">Guadeloupe</option>
<option value="gum">Guam</option>
<option value="gtm">Guatemala</option>
<option value="gin">Guinea</option>
<option value="gnb">Guinea-Bissau</option>
<option value="guy">Guyana</option>
<option value="hti">Haiti</option>
<option value="hmd">Heard Island and McDonald Islands</option>
<option value="hnd">Honduras</option>
<option value="hkg">Hong Kong</option>
<option value="hun">Hungary</option>
<option value="isl">Iceland</option>
<option value="ind">India</option>
<option value="idn">Indonesia</option>
<option value="irq">Iraq</option>
<option value="irl">Ireland</option>
<option value="irn">Islamic Republic of Iran</option>
<option value="imn">Isle of Man</option>
<option value="isr">Israel</option>
<option value="ita">Italy</option>
<option value="jam">Jamaica</option>
<option value="jpn">Japan</option>
<option value="jor">Jordan</option>
<option value="kaz">Kazakhstan</option>
<option value="ken">Kenya</option>
<option value="kir">Kiribati</option>
<option value="kwt">Kuwait</option>
<option value="kgz">Kyrgyzstan</option>
<option value="lao">Lao People's Democratic Republic</option>
<option value="lva">Latvia</option>
<option value="lbn">Lebanon</option>
<option value="lso">Lesotho</option>
<option value="lbr">Liberia</option>
<option value="lby">Libyan Arab Jamahiriya</option>
<option value="lie">Liechtenstein</option>
<option value="ltu">Lithuania</option>
<option value="lux">Luxembourg</option>
<option value="mac">Macao</option>
<option value="mdg">Madagascar</option>
<option value="mwi">Malawi</option>
<option value="mys">Malaysia</option>
<option value="mdv">Maldives</option>
<option value="mli">Mali</option>
<option value="mlt">Malta</option>
<option value="mhl">Marshall Islands</option>
<option value="mtq">Martinique</option>
<option value="mrt">Mauritania</option>
<option value="mus">Mauritius</option>
<option value="myt">Mayotte</option>
<option value="mex">Mexico</option>
<option value="mco">Monaco</option>
<option value="mng">Mongolia</option>
<option value="mne">Montenegro</option>
<option value="msr">Montserrat</option>
<option value="mar">Morocco</option>
<option value="moz">Mozambique</option>
<option value="mmr">Myanmar</option>
<option value="nam">Namibia</option>
<option value="nru">Nauru</option>
<option value="npl">Nepal</option>
<option value="nld">Netherlands</option>
<option value="ncl">New Caledonia</option>
<option value="nzl">New Zealand</option>
<option value="nic">Nicaragua</option>
<option value="ner">Niger</option>
<option value="nga">Nigeria</option>
<option value="niu">Niue</option>
<option value="nfk">Norfolk Island</option>
<option value="mnp">Northern Mariana Islands</option>
<option value="nor">Norway</option>
<option value="pse">Occupied Palestinian Territory</option>
<option value="omn">Oman</option>
<option value="pak">Pakistan</option>
<option value="plw">Palau</option>
<option value="pan">Panama</option>
<option value="png">Papua New Guinea</option>
<option value="pry">Paraguay</option>
<option value="per">Peru</option>
<option value="phl">Philippines</option>
<option value="pcn">Pitcairn</option>
<option value="pol">Poland</option>
<option value="prt">Portugal</option>
<option value="pri">Puerto Rico</option>
<option value="qat">Qatar</option>
<option value="kor">Republic of Korea</option>
<option value="mda">Republic of Moldova</option>
<option value="cog">Republic of the Congo</option>
<option value="rou">Romania</option>
<option value="rus">Russian Federation</option>
<option value="rwa">Rwanda</option>
<option value="reu">Réunion</option>
<option value="shn">Saint Helena</option>
<option value="kna">Saint Kitts and Nevis</option>
<option value="lca">Saint Lucia</option>
<option value="vct">Saint Vincent and the Grenadines</option>
<option value="spm">Saint-Pierre and Miquelon</option>
<option value="wsm">Samoa</option>
<option value="smr">San Marino</option>
<option value="stp">Sao Tome and Principe</option>
<option value="sau">Saudi Arabia</option>
<option value="sen">Senegal</option>
<option value="srb">Serbia</option>
<option value="syc">Seychelles</option>
<option value="sle">Sierra Leone</option>
<option value="sgp">Singapore</option>
<option value="sxm">Sint Maarten (Dutch part)</option>
<option value="svk">Slovakia</option>
<option value="svn">Slovenia</option>
<option value="slb">Solomon Islands</option>
<option value="som">Somalia</option>
<option value="zaf">South Africa</option>
<option value="sgs">South Georgia and the South Sandwich Islands</option>
<option value="esp">Spain</option>
<option value="lka">Sri Lanka</option>
<option value="sdn">Sudan</option>
<option value="sur">Suriname</option>
<option value="sjm">Svalbard and Jan Mayen</option>
<option value="swz">Swaziland</option>
<option value="swe">Sweden</option>
<option value="che">Switzerland</option>
<option value="syr">Syrian Arab Republic</option>
<option value="twn">Taiwan</option>
<option value="tjk">Tajikistan</option>
<option value="tha">Thailand</option>
<option value="cod">The Democratic Republic Of The Congo</option>
<option value="mkd">The Former Yugoslav Republic of Macedonia</option>
<option value="tls">Timor-Leste</option>
<option value="tgo">Togo</option>
<option value="tkl">Tokelau</option>
<option value="ton">Tonga</option>
<option value="tto">Trinidad and Tobago</option>
<option value="tun">Tunisia</option>
<option value="tur">Turkey</option>
<option value="tkm">Turkmenistan</option>
<option value="tca">Turks and Caicos Islands</option>
<option value="tuv">Tuvalu</option>
<option value="vir">U.S. Virgin Islands</option>
<option value="uga">Uganda</option>
<option value="ukr">Ukraine</option>
<option value="are">United Arab Emirates</option>
<option value="gbr">United Kingdom</option>
<option value="tza">United Republic Of Tanzania</option>
<option value="usa">United States</option>
<option value="umi">United States Minor Outlying Islands</option>
<option value="ury">Uruguay</option>
<option value="uzb">Uzbekistan</option>
<option value="vut">Vanuatu</option>
<option value="vat">Vatican City State</option>
<option value="ven">Venezuela</option>
<option value="vnm">Vietnam</option>
<option value="wlf">Wallis and Futuna</option>
<option value="esh">Western Sahara</option>
<option value="yem">Yemen</option>
<option value="zmb">Zambia</option>
<option value="zwe">Zimbabwe</option>
<option value="ala">Åland Islands</option>
</select>
		<input type="text" name="contactPhone" placeholder="Contact Number" id="spContactNumber" class="form-control spContactNumber">
		<p id="spContactMail-error" class="col-md-6 col-xs-12 errorMessage sPFormErrors width37"></p>
        <p id="spSelect-error" class="col-md-6 col-xs-12 errorMessage smallErrorBox"></p>
        <p id="spContactNumber-error" class="col-md-6 col-xs-12 errorMessage smallErrorBox"></p>
        
         </div>
         <div class="check">
         <input type="checkbox" class="css-checkbox2" id="termsOfUseSPGetInTouch" name="termsOfUseSPGetInTouch">
         <label data-toggle="modal" class="css-label2" id="termsOfUseSPGetInTouchLabel" for="termsOfUseSPGetInTouch">Terms of Use</label>
         
         <input type="checkbox" class="css-checkbox3" id="privacyPolicySPGetInTouch" name="privacyPolicySPGetInTouch">
         <label data-toggle="modal" class="css-label3" id="privacyPolicySPGetInTouchLabel" for="privacyPolicySPGetInTouch">Privacy Policy</label>
         </div>
         
         <div class="col-md-12 col-xs-12">
         <p id="privacyPolicySPGetInTouch-error" class="col-md-4 col-xs-12  errorMessage checkbox-error"></p>
         <p id="termsOfUseSPGetInTouch-error" class="col-md-4 col-xs-12  errorMessage checkbox-error"></p>
         </div>
       
    <div class="modal-footer loginModalFooter">
        <button onclick="submitForm(this)" id="submitsp" class="btn btn-primary signupButton" type="button">submit</button>
      </div>
      </form>
  </div>
</div>
</div>
<!-- **************************************Service provider popup END ************************************* -->
