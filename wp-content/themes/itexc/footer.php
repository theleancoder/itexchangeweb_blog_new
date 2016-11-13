<?php
/**
 * The template for displaying the footer
 */
?>
<div class="container-fluid" id="footer">
    <div class="container footerwidget">

        <?php
        if (is_active_sidebar('footer_widget')) {
            dynamic_sidebar('footer_widget');
        }
        ?>

    </div>
</div>
<?php
if (is_active_sidebar('below_footer_widget')) {
    dynamic_sidebar('below_footer_widget');
}
?>
<?php wp_footer(); ?>

<script>
    jQuery(document).ready(function($) {

        $('.header_menu').find('li a').eq(-2).addClass('logIn');
        //$('.header_menu').find('li a').last().addClass('btn btn-primary btn-sm signUp');
        $('.header_menu').find('li').last().html('<button id="signUpButton" data-target="#signupModal" data-toggle="modal" class="btn btn-primary btn-sm" type="button">SIGN UP</button>');
        //$('.header_menu').find('li a').last().addClass('btn btn-primary btn-sm signUp');

        $('#perspectivesHead a').addClass('activeBlue');
        $('#aboutHead a,#serviceLinesHead a,#successStoriesHead a,#howItWorksHead a,#contactHead a').removeClass("activeBlue");

        //in footer widget add class
        var inc = 0;
        var classArr = ["col-md-2 col-xs-4","col-md-3 col-xs-4","col-md-2 col-xs-4","col-md-4 col-xs-12"]; 
        $('.footerwidget ul').each(function() {
            var classval = classArr[inc];
            $(this).addClass(classval);
            ++inc;
            if(inc ==  4){inc=0;}
        });

      //get in touch module : it is an above footer .
       $('#getInTouch a').addClass('btn btn-md wp-blue-btn');
       //adding popup attribute in getintouch
       $("#getInTouch a").attr('data-toggle','modal');
       $("#getInTouch a").attr('data-target','#buyerGetInTouchModal');
       $("#getInTouch a").attr('id','getInTouchButton');
      //Blog single
      $('.wp-single-blog-content p').addClass("col-md-12 col-xs-12");

     //Popup integration 
     //adding attribute for login link.
     $('.logIn').attr('data-toggle','modal');
     $('.logIn').attr('data-target','#loginModal');
     $('.logIn').attr('id','logInButton');
     //adding attribute for the signUp link
     $('.signUp').attr('data-toggle','modal');
     $('.signUp').attr('data-target','#signupModal');
     $('.signUp').attr('id','signUpButton');
     
     // Service Providers popup 
     $('#footer .service-providers a').attr('data-toggle','modal');
     $('#footer .service-providers a').attr('data-target','#spGetInTouchModal');
    // $('#footer .service-providers a').attr('id','spGetInTouchModal');
    

     //adding the property for all the descriptions and heading for cut after two line.
    var $heading = $('#heading');
    while ($heading.outerHeight() > 56) {
        $heading.text(function (index, text) {
            return text.replace(/\W*\s(\S)*$/, '...');
        });
    }
    
    var $description = $('#description');
    while ($description.outerHeight() > 56) {
        $description.text(function (index, text) {
            return text.replace(/\W*\s(\S)*$/, '...');
        });
    }
//title cutting.


    });
</script>

<?php 
//call all the footer file.
get_template_part('popup');
?>

</body>
</html>
