/* 
 *wpcustom js file : 
 */
jQuery(document).ready(function($) {

    var myVar=1;
    var stoploader = 0;

    $(window).scroll(function() {

     var height_ajax       =590;

      var width_window = jQuery(window).width();
      if(width_window < 768){
         height_ajax        = 1100; 
      } 
      
        if ($(window).scrollTop() >= (($(document).height() - $(window).height() - height_ajax))) {
            //  console.log('div reached');

            /*
             * Ajax will call when posts are remaining to show.
             * if stoploader=1 then we understand that it is loaded all the posts
             */
            if (stoploader == 0) {
                jQuery('.wpajax-loader').css('display', 'inline-block');


                var queryStr = $('.loadmore').attr('date-query');
                var totalposts = $('.loadmore').attr('data-totalposts');
                var ajaxtype = $('.loadmore').attr('data-ajaxtype');
                var datadisplayed = $('.loadmore').attr('data-displayed');

             //    alert(myVar);

                if (myVar ==1) {
                  setTimeout(function() {
                    itexc_loadposts_ajax(totalposts, ajaxtype, datadisplayed, queryStr);
                },1000);
                      myVar =0;
                }


            }
        }



    });


    function itexc_loadposts_ajax(totalposts, ajaxtype, datadisplayed, queryStr)
    {
        $.ajax({
            type: "POST",
            async: true,
            url: myAjax.ajaxurl,
            data: 'action=load_more_posts&totalposts=' + totalposts + "&ajaxtype=" + ajaxtype + "&datadisplayed=" + datadisplayed + "&querystr=" + queryStr,
            beforeSend: function() {
                jQuery('.wpajax-loader').css('display', 'inline-block');
            },
            success: function(response) {
                // alert(response);
                      myVar =1
;
                jQuery('.wpajax-loader').css('display', 'none');
               
               //response will added when it have some value :escape for appending functionality when blank.
               if(response != ""){
                $('.ajaxHTML').append(response);
                } 
                //calculate ajax value .
                var datadisplayed = parseInt($('.loadmore').attr('data-displayed'));
                var perPage = parseInt($('.loadmore').attr('data-perPage'));
                var totalposts = parseInt($('.loadmore').attr('data-totalposts'));

                if (datadisplayed >= totalposts) {
                    $('.loadmore').css('display', 'none');
                    stoploader = 1;
                }

                datadisplayed = datadisplayed + 9;  //perPage: it will be static on page :ajax-loadmore.php
                $('.loadmore').attr('data-displayed', datadisplayed);
             
            }
        });
        
    }
    
   //When click on the search button then form submit:
   $('.search-button').click(function(){
      
      var search_value = $("#s").val();
        if(search_value !=""){
           $('.searchform').submit();
        }


      }); 
   //login form submit
  $('.wploginbtn').click(function(){
    $('.loginform').submit();
  });

  //signup form submit
  $('.wpsignupButton').click(function(){
    $('.loginform').submit();
  });


});
