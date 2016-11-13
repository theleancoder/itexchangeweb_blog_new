/*--------------------------------------------------------scrolling navigation-----------------------------------------------------------*/
jQuery(window).load(function(){
			  $(window).bind('scroll', function() {
			    var navHeight = $('#index').height()+90; // custom nav height
			    ($(window).scrollTop() > navHeight) ? $('#rollOverheader').animate({'top':'0px','opacity': '1'}, {queue: false, duration: 200}): $('#rollOverheader').animate({'top':'-90px','opacity': '0'}, {queue: false ,duration: 200});
			    ($(window).scrollTop() > navHeight) ? $('#whatIsItexg').addClass('m-t110') : $('#whatIsItexg').removeClass('m-t110');
			  });
			});
/*-----------------------------------------------scrolling navigation ends here-----------------------------------------------*/

/*--------------------------------------------------popup shifting issue--------------------------------------------------*/
var count=0;
var oldSSB = $.fn.modal.Constructor.prototype.setScrollbar;
    $.fn.modal.Constructor.prototype.setScrollbar = function () {
        oldSSB.apply(this);
        count=count+1;
        if (this.scrollbarWidth) 
        	{
        	$('body,html').css({'overflow-x': 'auto','overflow-y': 'hidden'});
    	    $('#rollOverheader').css('padding-right', "17px");
    	    $('body').addClass('modal-open');
    	    }
        }
    
    var oldRSB = $.fn.modal.Constructor.prototype.resetScrollbar;
    $.fn.modal.Constructor.prototype.resetScrollbar = function () {
        oldRSB.apply(this);
        count=count-1;
        if(count >0)
        	{
        	$('body,html').css({'overflow-x': 'auto','overflow-y': 'hidden'});
    	    $('#rollOverheader').css('padding-right', '0');
    	    $('body').css('padding-right','17px');
    	    $('body').addClass('modal-open');
    	    }
        else
        	{
        	$('body,html').css({'overflow-x': 'hidden', 'overflow-y': 'auto'});
             $('#rollOverheader').css('padding-right', '0');
             $('body').addClass('modal-open');
             $('body').css('padding-right',' ');
        	}    }
    
 /*----------------------------------------------------- ends here-----------------------------------------------------*/  
   
 /*------------------------------------------responsive view reload fix-----------------------------------------------------------*/   
  
    jQuery(window).resize(function(){
    	var width=$(window).width();
    	if(width < 1201 )
    		{
    		   //location.reload();
    		}
    });
    
    
/*--------------------------------------------------- ENDS HERE---------------------------------------------------------------*/

    /*-------------------------------------------------------key binding-----------------------------------------------*/
    
    jQuery(document).keydown(function(e) {
        	jQuery('.privacyPolicyModalBody,.privacyPolicyModalBody,.partnerModalBody').focus();
        	jQuery('#termUseModal,#privacyPolicyModal,#partnerModal').blur(); 
    });
    
    
    
    /*--------------------------------------------------ends here-------------------------------------------------*/
