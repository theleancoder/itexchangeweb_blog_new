//var newURL = window.location.protocol + "//" + window.location.host ;
var currentUrl = window.location.href;
function sliderTrigger(id){
	if((!$('#'+id).hasClass('act')))
	{
		while(!($('#'+id).hasClass('act')))
		{
			$('.fa-3xLeft').trigger("click");
		}				
	}	
}
jQuery(window).load(function($) {
	//var newURL1 = window.location.protocol + "//" + window.location.host ;
	var homeURL=(currentUrl.substr(currentUrl.lastIndexOf('/')));
     //   var newURL  = obb.siteurl;

	if(homeURL=='/')
		 history.replaceState('', '', newURL);
	var categoryURL=(currentUrl.substr(currentUrl.lastIndexOf('/') + 1));
	switch (categoryURL) {
	
	case 'whitepapers': 
    	$('#perspectives .whitepprIcon').trigger("click");
	break;
	case 'monitoring': 
		  $('#howItworksIconLine .projectMonIcon').trigger("click");
	break;
	case 'pricing': 
		$('#howItworksIconLine .ourPrIcon').trigger("click");
	break;
	case 'evalution': 
		$('#howItworksIconLine .serviceProIcon').trigger("click");
	break;
	case 'web': 
		$('#serviceIcon .webIcon').trigger("click");
	break;
	case 'cloud': 
		$('#serviceIcon .cloudIcon').trigger("click");
	break;
	case 'bigData': 
		$('#serviceIcon .bigDataIcon').trigger("click");
	break;
	case 'gamification': 
		$('#serviceIcon .gameIcon').trigger("click");
	break;
	case 'healthcare': 
		$('#successStoriesIcon .healthcareIcon').trigger("click");
	break;
	case 'travel': 
		$('#successStoriesIcon .travelIcon').trigger("click");
	break;
	case 'internet': 
		$('#successStoriesIcon .internetItIcon').trigger("click");
	break;
	case 'media': 
		$('#successStoriesIcon .mediaIcon').trigger("click");
	break;
	case 'agriculture': 
		$('#successStoriesIcon .agricultureIcon').trigger("click");
	break;
	case 'infra': 
		$('#serviceIcon .infraIcon').trigger("click");
		sliderTrigger(8);
	break;
	case 'testingServices': 
		$('#serviceIcon .testIcon').trigger("click");
		sliderTrigger(7);
	break;
	case 'UX': 
		$('#serviceIcon .uiDesignIcon').trigger("click");
		sliderTrigger(6);
	break;
	case 'helpDesk': 
		$('#serviceIcon .helpIcon').trigger("click");
	    sliderTrigger(5);
	break;
	case 'BI': 
		$('#serviceIcon .biReportIcon').trigger("click");
		sliderTrigger(4);
	break;
	case 'apps': 
		$('#serviceIcon .enterpriseIcon').trigger("click");
		sliderTrigger(3);   
	break;
	case 'product': 
		$('#serviceIcon .productIcon').trigger("click");
		sliderTrigger(2);
	break;
	case 'marketing': 
		$('#serviceIcon .internetIcon').trigger("click");
		sliderTrigger(1);
	break;
	case 'design': 
		$('#successStoriesIcon .designIcon').trigger("click");
		sliderTrigger(1);  
	break;
	case 'hotel': 
		$('#successStoriesIcon .hotelIcon').trigger("click");
		sliderTrigger(2);  
	break;	
	case 'team': 				
    $("html, body").animate({ scrollTop: $("#greenCircleAbout5").offset().top }).focus;
   	$("#greenCircleAbout5").trigger("click");
   	break;	
	}
})


