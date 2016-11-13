
/* Forms Validation 
 * @author RohanJain
 */

jQuery(function() {
	
	// Show PopUp only for Check boxes checked event
	$("input[type='checkbox']").click(function() {
		// Get check box form Id
		var formId =$(this).closest("form").attr('id');
		
		var terms = 'termsOfUse'
		var policy= 'privacyPolicy'
		var partnerAgreeemnt = 'partnerAgreement'
		
		if(formId=='buyerContactForm'){
			terms=terms+ 'BuyerGetInTouch';
			policy=policy+'BuyerGetInTouch';
		}
		else if(formId =='spContactForm')
		{
			terms=terms+ 'SPGetInTouch'
			policy=policy+'SPGetInTouch'
		}
		else if(formId =='registerFormBuyer'){
			terms=terms
		}
		else if(formId =='partnerFormBuyer'){
			
			terms=terms+ 'PartnerRegister'
			policy=policy+'PartnerRegister'
			agreement = partnerAgreeemnt + 'PartnerRegister'
			// Show Pop Up only when checked
			if($(this).attr('id') == agreement  && $('#'+$(this).attr('id')).is(':checked') ){
				if($(this).attr('data-Agreement-Type') == 'Referral')
					$('#partnerAgreementReferralModal').modal("show")
				if($(this).attr('data-Agreement-Type') == 'Afiliate')
					$('#partnerAgreementAfiliateModal').modal("show")
			}
		}
		if($(this).attr('id') == terms  && $('#'+$(this).attr('id')).is(':checked') ){
			$('#termUseModal').modal("show")
		}
		 if($(this).attr('id') == policy && $('#'+$(this).attr('id')).is(':checked')){
			$('#privacyPolicyModal').modal("show")
		}
	})
	
	// Submit button enter key bind - all forms
    $('form').each(function() {
    	
    	// Disable submit for all forms 
    	$(this).submit(function(e){
            e.preventDefault();
    	})
    	
    	var $formFields = $(this).find('input[type="text"],textarea,input[type="hidden"],input[type="password"],input[type="checkbox"],select');
        // Bind each fields
        $.each($formFields, function(index, element) {
            $(element).keyup(function(event) {
                // If enter key is pressed
                if (event.keyCode == 13) {
                    var formId = '#' + $(element).closest('form').attr('id')
                    var button = $(formId).find(":button")
                        // Get button click function
                    var clickEvent = button["click"]
                    if (typeof(clickEvent) == "function") {
                        // Invoke function
                        clickEvent.call($('#' + button.attr('id')))
                    }
                }
            })
        })
    })

    /* Jquery Validation Plugin - Setup Validations */

    /* 	Custom validation methods */
    // Phone validation
    jQuery.validator.addMethod("validatePhone", function(value, element) {
       var regEx = /^[0-9-+ ]+$/;
   
        return regEx.test(value);
    }, "Please enter the valid phone no");

    // International phone validation
    jQuery.validator.addMethod("validateInternationalphone", function(value, element) {
        var regEx = /^([+])+([0-9])+$/;
        return regEx.test(value);
    }, "Please enter the valid international phone no");
    
    // Desk phone Validation - optional field
    jQuery.validator.addMethod("validateDeskPhone", function(value, element) {
		if(value){
			var regEx = /^[0-9-+ ]+$/;
			return regEx.test(value);
			}
		 else return true

    }, "Please enter the valid desk phone");
    
    // Landline Validation
    jQuery.validator.addMethod("isLandline", function(value, element) {
        var regEx = /^[0-9-+ ]+$/;
        return regEx.test(value);
    }, "Please enter the valid landline");
    
    // Email Validation
    jQuery.validator.addMethod("isEmail", function(value, element) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test(value);
    }, "Please enter the valid email");

    // Website Validation
    jQuery.validator.addMethod("isWebsite", function(value, element) {
        var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
        var regex = new RegExp(expression);
        return regex.test(value);
    }, "Please enter the valid website address");
    
    // Partner Agreement Validation
    jQuery.validator.addMethod("isPartnerAgreementAccepted", function(value, element) {
        	if($('#acceptedAgreement').val() === 'true')
				 return true
			else
			 	return false 

    }, "Please enter the valid website address");
    
    // Password  Validation
    jQuery.validator.addMethod("isStrongPassword", function(value, element) {
    	  var regEx = /^.*(?=.{8,})(?=.*\d)(?=.*[@#$%^&+=]).*$/;
    	   
          return regEx.test(value);

    }, "Minimum 8 chars, with 1 number and 1 special character");
    
    // Validate all forms
    $('form').each(function() {
    	$(this).validate({
            // Allow Validation of hidden fields
            ignore: [],
            // Error messages and error classes placement
            errorPlacement: function(error, element) {
                // Show errorMessage and hide remove noMessage class
                // Check for password Invalid credential
            	if ($(element).attr('id') == 'password') {
                    $('#errorLoginMsg').hide()
                }
            	// For adding check boxes error image
            	if($(element).attr('type') == 'checkbox'){
            		$('#' + element.attr('id') + 'Label').addClass('error-Checkbox-image')
            	}
                $('#' + element.attr('id') + '-error').addClass('errorMessage').removeClass('NoMessage').html(error.text())
                $(element).closest('form-control').addClass('error');
            },
            success: function(error) {
            	// Remove check boxes error images
            	if ($(error).attr('id').indexOf("-error") >= 0){ 
            		$('#'+$(error).attr('id').replace("-error","Label")).removeClass('error-Checkbox-image')
            	}
                // Done to prevent shifting of right error messages - bootstrap fix required
                $('#' + error.attr('id')).removeClass('errorMessage').addClass('NoMessage').html('.')
            },
            // Validation rules
            rules: {
                firstName: "required",
                lastName: "required",
                j_username: "required",
                j_password: "required",
                contactName: "required",
                technologyFocus: "required",
                industryFocus: "required",
                website: "required",
                company: "required",
                landline: "required",
                email: "required",
                forgotEmail: "required",
                resetPassword: "required",
                resetPasswordConfirm: "required", 
                signupPassword: "required",
                signupCPassword: "required",
                company: "required",
                designation: "required",
                countryCode: "required",
                phone: "required",
                contactPhone:"required",
                serviceProvided: "required",
                termsOfUsePartnerRegister: "required",
                privacyPolicyPartnerRegister: "required",
                partnerAgreementPartnerRegister: "required",
                termsOfUse: "required",
                termsOfUseBuyerGetInTouch: "required",
                termsOfUseSPGetInTouch: "required",
                privacyPolicyBuyerGetInTouch: "required", 
                privacyPolicy: "required",
                privacyPolicySPGetInTouch: "required",
                internationalphone: "required",
                natureOfService: "required",
                yearOfIncorporation: "required",
                partnerAddress: "required",
                partnerState: "required",
                partnerPostal: "required",
                partnerCity: "required",
                email: {
                    required: true,
                    isEmail: true
                },
                forgotEmail: {
                	  required: true,
                      isEmail: true
                },
                website: {
                	required: true,
                	isWebsite: true
                },
                partnerAgreementPartnerRegister: {
                	required: true,
                	isPartnerAgreementAccepted: true
                },
                landline:{
                	required :true,
                	isLandline: true
                },
                yearOfIncorporation: {
                	required: true,
                	range:[1500,2015]
                },
                j_username: {
                    required: true,
                    isEmail: true
                },
                j_password: {
                    required: true
                },
                signupPassword: {
                    required: true,
                    isStrongPassword:true,
                    minlength: 5
                },
                partnerPassword: {
                    required: true,
                    isStrongPassword:true,
                    minlength: 5
                },
                resetPassword: {
                    required: true,
                    isStrongPassword:true,
                    minlength: 5
                },
                signupCPassword: {
                    required: true,
                    equalTo: "#signupPassword"
                },
                partnerCPassword: {
                    required: true,
                    equalTo: "#partnerPassword"
                },
                resetPasswordConfirm: {
                    required: true,
                    equalTo: "#resetPassword"
                },
                phone: {
                    required: true,
                    validatePhone: true
                },
                contactPhone: {
                    required: true,
                    validatePhone: true
                },
                internationalphone: {
                    required: true,
                    validateInternationalphone: true
                },
                partnerDeskPhone:{
                	validateDeskPhone: true
                }
            },
            // Validation messages    
            messages: {
                firstName: "Enter your first name",
                lastName: "Enter your last name",
                j_password: "Enter your password",
                company: "Enter your company",
                designation: "Enter your designation",
                countryCode: "Select a country",
                phone: "Enter your phone number",
                contactPhone:"Enter your phone number",
                partnerAddress: "Enter your address",
                partnerState: "Enter your phone number",
                partnerPostal: "Enter your phone number",
                partnerCity: "Enter your city",
                internationalphone: {
                    required: "Enter your international phone number",
                    validateInternationalphone: "Enter a valid international phone no"
                },
                website: {
                	required: "Enter your website address",
                	isWebsite: "Enter a valid website address"
                },
                partnerDeskPhone:{
                	validateDeskPhone: "Enter a valid desk phone number"
                },
                j_username: {
                    required: "Enter a company email address",
                    isEmail: "Enter a valid company email address"
                },
                forgotEmail:{
                    required: "Enter a company email address",
                    isEmail: "Enter a valid company email address"
                },
                signupPassword: {
                    required: "Minimum 8 chars, with 1 number and 1 special character",
                    isStrongPassword: "Minimum 8 chars, with 1 number and 1 special character"
                },
                partnerPassword: {
                    required: "Minimum 8 chars, with 1 number and 1 special character",
                    isStrongPassword: "Minimum 8 chars, with 1 number and 1 special character"
                },
                resetPassword: {
                    required: "Minimum 8 chars, with 1 number and 1 special character",
                    isStrongPassword: "Minimum 8 chars, with 1 number and 1 special character"
                },
                signupCPassword: {
                    required: "Password does not match",
                    equalTo: "Password does not match"
                },
                partnerCPassword: {
                    required: "Password does not match",
                    equalTo: "Password does not match"
                },
                resetPasswordConfirm: {
                    required: "Password does not match",
                    equalTo: "Password does not match"
                },
                email: {
                    required: "Enter a company email address",
                    isEmail: "Enter a valid company email addres"
                },
                yearOfIncorporation: {
                	required: "Enter the year of incorporation",
                	range: "Enter a valid year of incorporation"
                },
                natureOfService: "Specify how can we help you ",
                serviceProvided: "Enter the services you provide",
                contactName: "Enter contact person's name",
                industryFocus: "Enter the industries you focus on",
                company: "Enter your company name",
                technologyFocus: "Enter the technologies you focus on",
                landline:{
                	required : "Enter your office phone number",
                	isLandline: "Enter a valid office phone number"
                },
                termsOfUse: "Accept the terms",
                termsOfUseBuyerGetInTouch: "Accept the terms",
                termsOfUseSPGetInTouch: "Accept the terms",
                privacyPolicyBuyerGetInTouch: "Accept the privacy policy",
                privacyPolicySPGetInTouch: "Accept the privacy policy",
                privacyPolicy: "Accept the privacy policy",
                termsOfUsePartnerRegister: "Accept the terms",
                privacyPolicyPartnerRegister: "Accept the privacy policy",
                partnerAgreementPartnerRegister:{
                	required: "Accept the partner agreement",
                	isPartnerAgreementAccepted :  "Accept/Decline partner agreement"
                } 
            }
        });
    });
});
