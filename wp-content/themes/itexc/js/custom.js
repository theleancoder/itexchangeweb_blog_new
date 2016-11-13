var isClicked;
var width = $(window).width();
$(function(){
	$('body').bind('copy paste',function(e) {
	    e.preventDefault(); return false; 
	});
})
$(window).load(function() {
	if (width > 550) {
        $('#serviceLines .mobileIcon .mobile').addClass('activeGreen');
        $('#serviceLines .mobileIcon .mobileCircle').addClass('activeDetails');
        $('#serviceLines .mobileIcon .mobileDetails').addClass('activeFont');
        $('#serviceLines .mobileIcon .mobileLine').addClass('activeDetails');
        $('#perspectives #whitepprBody').hide();
        $('#serviceIcon .mobileIcon .mobile').addClass('activeGreen');
        $('#serviceIcon .mobileIcon .mobileCircle').addClass('activeDetails');
        $('#serviceIcon .mobileIcon .mobileDetails').addClass('activeFont');
        $('#serviceIcon .mobileIcon .mobileLine').addClass('activeDetails');

        $('#howItworksIconLine .processIcon #processBG').addClass('activeGreenProcess');
        $('#howItworksIconLine .processIcon #processCap').addClass('activeFont');
        $('#howItworksIconLine .processIcon #processCir').addClass('activeDetails');
        $('#howItworksIconLine .processIcon #processLn').addClass('activeDetails');


        $('#perspectives .blogIcon #blogBG').addClass('activeGreenBlog');
        $('#perspectives .blogIcon #blogCap').addClass('activeFont');
        $('#perspectives .blogIcon #blogCir').addClass('activeDetails');
        $('#perspectives .blogIcon #blogLn').addClass('activeDetails');


        $('#successStoriesIcon .healthcareIcon .healthcare').addClass('activeGreenHealthcare');
        $('#successStoriesIcon .healthcareIcon .healthcareDetails').addClass('activeFont');
        $('#successStoriesIcon .healthcareIcon .healthcareCircle').addClass('activeDetails');
        $('#successStoriesIcon .healthcareIcon .healthcareLine').addClass('activeDetails');

    }

    if (width < 550) {
        $('#serviceLines .mobileIcon .mobile').removeClass('activeGreen');
        $('#serviceLines .mobileIcon .mobileCircle').removeClass('activeDetails');
        $('#serviceLines .mobileIcon .mobileLine').removeClass('activeDetails');
        $('#serviceLines .mobileIcon .mobileDetails').removeClass('activeFont');

        $('#serviceIcon #12, #serviceIcon #11, #serviceIcon #10, #serviceIcon #9').removeClass('act');
        $('#perspectives #whitepprBody').hide();
        $('#howItworksIconLine #1, #howItworksIconLine #2, #howItworksIconLine #3').removeClass('act');
        $('#perspectives #1').removeClass('act');
        $('#successStoriesIcon #6, #successStoriesIcon #5, #successStoriesIcon #4, #successStoriesIcon #3, #successStoriesIcon #2, #successStoriesIcon #1').removeClass('act');
    }

});

var id = 5;
$('#serviceLines #leftButton').click(function() {
    $('#' + id).hide().removeClass('act');
    id = id - 1;
    if (id == 0) {
        id = 5;
    }
    $('#' + id).fadeIn(1000).addClass("act");
});
$('#serviceLines #rightButton').click(function() {

    $('#' + id).hide().removeClass('act');
    id = id + 1;
    if (id == 6) {
        id = 1;
    }
    $('#' + id).fadeIn(1000).addClass("act");
});

$('#serviceLines .mobileIcon').click(function() {
    $('#serviceLines .webIcon .web').removeClass('activeGreenWeb');
    $('#serviceLines .cloudIcon .cloud').removeClass('activeGreenCloud');
    $('#serviceLines .bigDataIcon .bigData').removeClass('activeGreenBigdata');
    $('#serviceLines .gameIcon .game').removeClass('activeGreenGame');
    $('#serviceLines .mobileIcon .mobile').addClass('activeGreen');
    $('#serviceLines .mobileIcon .mobileCircle').addClass('activeDetails');
    $('#serviceLines .mobileIcon .mobileDetails').addClass('activeFont');
    $('#serviceLines .mobileIcon .mobileLine').addClass('activeDetails');
    $('#serviceLines .webIcon .webCircle, #serviceLines .cloudIcon .cloudCircle, #serviceLines .bigDataIcon .bigdataCircle, #serviceLines .gameIcon .gameCircle').removeClass('activeDetails');
    $('#serviceLines .webIcon .webLine, #serviceLines .cloudIcon .cloudLine, #serviceLines .bigDataIcon .bigdataLine, #serviceLines .gameIcon .gameLine').removeClass('activeDetails');
    $('#serviceLines .webIcon .webDetails, #serviceLines .cloudIcon .cloudLine, #serviceLines .bigDataIcon .bigdataDetails, #serviceLines .gameIcon .gamification').removeClass('activeFont');
    $('#provideinformation #numberProvider').hide().text("25+").fadeIn(500);
    $('#provideinformation #totalResource').hide().text("2900+").fadeIn(500);
    $('#provideinformation #blogTitle').hide().text("Android vs iOS: Which platform to choose for emerging businesses").fadeIn(500);
    $('#provideinformation #blogData').hide().text("Leap into electronic typesetting, remaining dummy text is here").fadeIn(500);
});

$('#serviceLines .webIcon').click(function() {
    $('#serviceLines .mobileIcon .mobile').removeClass('activeGreen');
    $('#serviceLines .cloudIcon .cloud').removeClass('activeGreenCloud');
    $('#serviceLines .bigDataIcon .bigData').removeClass('activeGreenBigdata');
    $('#serviceLines .gameIcon .game').removeClass('activeGreenGame');

    $('#serviceLines .webIcon .web').addClass('activeGreenWeb');
    $('#serviceLines .webIcon .webCircle').addClass('activeDetails');
    $('#serviceLines .webIcon .webDetails').addClass('activeFont');
    $('#serviceLines .webIcon .webLine').addClass('activeDetails');

    $('#serviceLines .mobileIcon .mobileCircle, #serviceLines .cloudIcon .cloudCircle, #serviceLines .bigDataIcon .bigdataCircle, #serviceLines .gameIcon .gameCircle').removeClass('activeDetails');
    $('#serviceLines .mobileIcon .mobileLine, #serviceLines .cloudIcon .cloudLine, #serviceLines .bigDataIcon .bigdataLine, #serviceLines .gameIcon .gameLine').removeClass('activeDetails');
    $('#serviceLines .mobileIcon .mobileDetails, #serviceLines .cloudIcon .cloudLine, #serviceLines .bigDataIcon .bigdataDetails, #serviceLines .gameIcon .gamification').removeClass('activeFont');
    $('#provideinformation #totalResource').hide().text("4000+").fadeIn(500);
    $('#provideinformation #numberProvider').hide().text("35+").fadeIn(500);

    $('#provideinformation #blogTitle').hide().text(" How web applications are helping small businesses compete with larger players").fadeIn(500);
    $('#provideinformation #blogData').hide().text("Leap into electronic typesetting, remaining dummy text is here").fadeIn(500);
});

$('#serviceLines .cloudIcon').click(function() {
    $('#serviceLines .mobileIcon .mobile').removeClass('activeGreen');
    $('#serviceLines .webIcon .web').removeClass('activeGreenWeb');
    $('#serviceLines .bigDataIcon .bigData').removeClass('activeGreenBigdata');
    $('#serviceLines .gameIcon .game').removeClass('activeGreenGame');
    $('#serviceLines .cloudIcon .cloud').addClass('activeGreenCloud');
    $('#serviceLines .cloudIcon .cloudCircle').addClass('activeDetails');
    $('#serviceLines .cloudIcon .cloudDetails').addClass('activeFont');
    $('#serviceLines .cloudIcon .cloudLine').addClass('activeDetails');


    $('#serviceLines .mobileIcon .mobileCircle, #serviceLines .webIcon .webCircle, #serviceLines .bigDataIcon .bigdataCircle, #serviceLines .gameIcon .gameCircle').removeClass('activeDetails');
    $('#serviceLines .mobileIcon .mobileLine, #serviceLines .webIcon .webLine, #serviceLines .bigDataIcon .bigdataLine, #serviceLines .gameIcon .gameLine').removeClass('activeDetails');
    $('#serviceLines .mobileIcon .mobileDetails, #serviceLines .webIcon .webLine, #serviceLines .bigDataIcon .bigdataDetails, #serviceLines .gameIcon .gamification').removeClass('activeFont');

    $('#provideinformation #totalResource').hide().text("1500+").fadeIn(500);
    $('#provideinformation #numberProvider').hide().text("20+").fadeIn(500);

    $('#provideinformation #blogTitle').hide().text("How SaaS is changing traditional delivery models of businesses").fadeIn(500);
    $('#provideinformation #blogData').hide().text("Leap into electronic typesetting, remaining dummy text is here").fadeIn(500);

});
$('#serviceLines .bigDataIcon').click(function() {
    $('#serviceLines .mobileIcon .mobile').removeClass('activeGreen');
    $('#serviceLines .webIcon .web').removeClass('activeGreenWeb');
    $('#serviceLines .cloudIcon .cloud').removeClass('activeGreenCloud');
    $('#serviceLines .gameIcon .game').removeClass('activeGreenGame');

    $('#serviceLines .bigDataIcon .bigData').addClass('activeGreenBigdata');
    $('#serviceLines .bigDataIcon .bigdataCircle').addClass('activeDetails');
    $('#serviceLines .bigDataIcon .bigdataDetails').addClass('activeFont');
    $('#serviceLines .bigDataIcon .bigdataLine').addClass('activeDetails');


    $('#serviceLines .mobileIcon .mobileCircle, #serviceLines .webIcon .webCircle, #serviceLines .cloudIcon .cloudCircle, #serviceLines .gameIcon .gameCircle').removeClass('activeDetails');
    $('#serviceLines .mobileIcon .mobileLine, #serviceLines .webIcon .webLine, #serviceLines .cloudIcon .cloudLine, #serviceLines .gameIcon .gameLine').removeClass('activeDetails');
    $('#serviceLines .mobileIcon .mobileDetails, #serviceLines .webIcon .webLine, #serviceLines .cloudIcon .cloudDetails, #serviceLines .gameIcon .gamification').removeClass('activeFont');

    $('#provideinformation #totalResource').hide().text("1500+").fadeIn(500);
    $('#provideinformation #numberProvider').hide().text("20+").fadeIn(500);

    $('#provideinformation #blogTitle').hide().text("Using Big data analytics & intelligence to target the right audience").fadeIn(500);
    $('#provideinformation #blogData').hide().text("Leap into electronic typesetting, remaining dummy text is here").fadeIn(500);
});


$('#serviceLines .gameIcon').click(function() {

    $('#serviceLines .mobileIcon .mobile').removeClass('activeGreen');
    $('#serviceLines .webIcon .web').removeClass('activeGreenWeb');
    $('#serviceLines .cloudIcon .cloud').removeClass('activeGreenCloud');
    $('#serviceLines .bigDataIcon .bigData').removeClass('activeGreenBigdata');
    $('#serviceLines .gameIcon .game').addClass('activeGreenGame');
    $('#serviceLines .gameIcon .gameCircle').addClass('activeDetails');
    $('#serviceLines .gameIcon .gamification').addClass('activeFont');
    $('#serviceLines .gameIcon .gameLine').addClass('activeDetails');

    $('#serviceLines .mobileIcon .mobileCircle, #serviceLines .webIcon .webCircle, #serviceLines .cloudIcon .cloudCircle, #serviceLines .bigDataIcon .bigdataCircle').removeClass('activeDetails');
    $('#serviceLines .mobileIcon .mobileLine, #serviceLines .webIcon .webLine, #serviceLines .cloudIcon .cloudLine, #serviceLines .bigDataIcon .bigdataLine').removeClass('activeDetails');
    $('#serviceLines .mobileIcon .mobileDetails, #serviceLines .webIcon .webLine, #serviceLines .cloudIcon .cloudDetails, #serviceLines .bigDataIcon .bigdataDetails').removeClass('activeFont');

    $('#provideinformation #totalResource').hide().text("500+").fadeIn(500);
    $('#provideinformation #numberProvider').hide().text("5+").fadeIn(500);
    $('#provideinformation #blogTitle').hide().text("How Businesses are using gamification to drive customer engagement").fadeIn(500);
    $('#provideinformation #blogData').hide().text("Leap into electronic typesetting, remaining dummy text is here").fadeIn(500);
});



var leftid = 13;
var rightid = 9;
if (width > 550) {

    $('#serviceIcon #leftButton').click(function(e) {
        if (leftid == 6 && rightid == 2) {
            $('#serviceIcon #leftButton').attr("disabled", "disabled").css({
                cursor: "disabled"
            }).fadeTo(500, 0.1);
            e.preventDefault();

        }
        if (leftid == 5 && rightid == 1) {
            leftid = 5;
            rightid = 1;
            e.preventDefault();
            return;
        } else {
            $('#serviceIcon #rightButton').attr("enabled", "enabled").css({
                cursor: "pointer"
            }).fadeTo(500, 1);
            e.preventDefault();

            rightid = rightid - 1;
            $('#' + rightid).show(450).addClass('act');


            $('#' + leftid).hide(0).removeClass('act').show(0).addClass('act').removeClass('act').hide(200);

            leftid = leftid - 1;


        }

    });
    $(window).load(function(e) {
        $('#serviceIcon #leftButton').css({
            cursor: "pointer"
        });
        e.preventDefault();
        if (leftid == 13 && rightid == 9) {
            $('#serviceIcon #rightButton').attr("disabled", "disabled").css({
                cursor: "disabled"
            }).fadeTo(500, 0.1);
            $('#serviceIcon #leftButton').css({
                cursor: "pointer"
            });
            e.preventDefault();
        }
    });



    $('#serviceIcon #rightButton').click(function(e) {
        if (leftid == 12 && rightid == 8) {
            $('#serviceIcon #rightButton').attr("disabled", "disabled").css({
                cursor: "disabled"
            }).fadeTo(500, 0.1);
            $('#serviceIcon #leftButton').attr("enabled", "enabled").css({
                cursor: "pointer"
            }).fadeTo(500, 1);
            e.preventDefault();
        }

        if (leftid == 13 && rightid == 9) {
            leftid = 13;
            rightid = 9;
            e.preventDefault();
            return;
        } else {
            $('#serviceIcon #leftButton').attr("enabled", "enabled").css({
                cursor: "pointer"
            }).fadeTo(500, 1);
            e.preventDefault();
            leftid = leftid + 1;
            $('#' + leftid).show(300).addClass('act');


            $('#' + rightid).hide(0).removeClass('act');
            rightid = rightid + 1;
        }
    });

} else {

    $('#serviceIcon #leftButton').click(function() {
        $('#' + leftid).hide().removeClass('act');
        leftid = leftid - 1;
        if (leftid == 0) {
            leftid = 13;
        }
        $('#' + leftid).fadeIn(1000).addClass("act");


    });
    $('#serviceIcon #rightButton').click(function() {

        $('#' + leftid).hide().removeClass('act');

        leftid = leftid + 1;
        if (leftid == 14) {
            leftid = 1;
        }
        $('#' + leftid).fadeIn(1000).addClass("act");

    });


}


$('#serviceIcon .mobileIcon').click(function()  {
		history.replaceState('','',newURL+'/mobile');
        $('#serviceIcon .webIcon .web').removeClass('activeGreenWeb');
        $('#serviceIcon .cloudIcon .cloud').removeClass('activeGreenCloud');
        $('#serviceIcon .bigDataIcon .bigData').removeClass('activeGreenBigdata');
        $('#serviceIcon .gameIcon .game').removeClass('activeGreenGame');

        $('#serviceIcon .infraIcon .infra').removeClass('activeGreenInfra');
        $('#serviceIcon .testIcon .test').removeClass('activeGreenTest');
        $('#serviceIcon .uiDesignIcon .uiDesign').removeClass('activeGreenUiDesign');
        $('#serviceIcon .helpIcon .help').removeClass('activeGreenHelp');
        $('#serviceIcon .biReportIcon .biReport').removeClass('activeGreenBiReport');
        $('#serviceIcon .enterpriseIcon .enterprise').removeClass('activeGreenEnterprise');

        $('#serviceIcon .productIcon .product').removeClass('activeGreenProduct');
        $('#serviceIcon .internetIcon .internet').removeClass('activeGreenInternet');



        $('#serviceIcon .mobileIcon .mobile').addClass('activeGreen');
        $('#serviceIcon .mobileIcon .mobileCircle').addClass('activeDetails');
        $('#serviceIcon .mobileIcon .mobileDetails').addClass('activeFont');
        $('#serviceIcon .mobileIcon .mobileLine').addClass('activeDetails');

        $('#serviceIcon .productIcon .productCircle, #serviceIcon .internetIcon .internetCircle, #serviceIcon .webIcon .webCircle, #serviceIcon .cloudIcon .cloudCircle, #serviceIcon .bigDataIcon .bigdataCircle, #serviceIcon .gameIcon .gameCircle, #serviceIcon .infraIcon .infraCircle, #serviceIcon .testIcon .testCircle, #serviceIcon .uiDesignIcon .uiDesignCircle, #serviceIcon .helpIcon .helpCircle, #serviceIcon .biReportIcon .biReportCircle,#serviceIcon .enterpriseIcon .enterpriseCircle').removeClass('activeDetails');
        $('#serviceIcon .productIcon .productLine, #serviceIcon .internetIcon .internetLine, #serviceIcon .webIcon .webLine, #serviceIcon .cloudIcon .cloudLine, #serviceIcon .bigDataIcon .bigdataLine, #serviceIcon .gameIcon .gameLine, #serviceIcon .infraIcon .infraLine, #serviceIcon .testIcon .testLine, #serviceIcon .uiDesignIcon .uiDesignLine, #serviceIcon .helpIcon .helpLine, #serviceIcon .biReportIcon .biReportLine,#serviceIcon .enterpriseIcon .enterpriseLine').removeClass('activeDetails');
        $('#serviceIcon .productIcon .productDetails, #serviceIcon .internetIcon .internetDetails, #serviceIcon .webIcon .webDetails, #serviceIcon .cloudIcon .cloudDetails, #serviceIcon .bigDataIcon .bigdataDetails, #serviceIcon .gameIcon .gamification, #serviceIcon .infraIcon .infraDetails, #serviceIcon .testIcon .testDetails, #serviceIcon .uiDesignIcon .uiDesignDetails, #serviceIcon .helpIcon .helpDetails, #serviceIcon .biReportIcon .biReportDetails,#serviceIcon .enterpriseIcon .enterpriseDetails').removeClass('activeFont');


        $('#provideinformation #provideP').hide().html('Leverage a wide range of mobile solutions across all the major platforms:<br/>iOS, Android and Windows.').fadeIn(500);
        $('#provideinformation #numberProvider').hide().html('30+').fadeIn(500);
        $('#provideinformation #totalResource').hide().html('700').fadeIn(500);


        $('#overView #overViewData').hide().html('Get your mobility services up and running with our certified developers:').fadeIn(500);
        $('#overView').css("padding-bottom", "55px");
        $('#features').css("padding-bottom", "0px");
        $('#features #servicepNumber').hide().html('itx-sp:8888').fadeIn(500);
        $('#overView #ul1 #item1').hide().html('Development of Mobile Apps across iOS, Android and Windows platforms').fadeIn(500);
        $('#overView #ul1 #item2').hide().html('Mobile web development on the HTML5 platforms').fadeIn(500);
        $('#overView #ul1 #item3').hide().html('Enterprise Mobility Solutions').fadeIn(500);
        $('#overView #ul1 #item4').hide().html('Development of large scale ecommerce solutions').fadeIn(500);
        $('#overView #ul1 #item5').hide().html('Development and integration of social media apps').fadeIn(500);

        $('#overView #research a').hide().html('&#60;Links to articles, websites, blogs from the Content Hub section&#62;').fadeIn(500);

        $('#overView #ul2 #item1').hide().html('&#60;X&#62; service providers specialized in mobile solutions').fadeIn(500);
        $('#overView #ul2 #item2').hide().html('Over &#60;y&#62; resources with specialized skills in mobile').fadeIn(500);
        $('#overView #ul2 #item3').hide().html('One integrated network for all mobile platform skills').fadeIn(500);
        $('#overView #ul2 #item4').hide().html('Experience in building complex Enterprise Mobility solutions').fadeIn(500);
        $('#overView #ul2 #item5').hide();

        $('#overView #success a').hide().html('&#60;Links to relevant case study from the Case Studies section&#62;').fadeIn(500);


        $('#features #featuresP').hide().html('Our certified service providers<br>help you consolidate your digital footprints<br>by supporting a wide range of web<br>solutions your digital footprints by supporting<br>a wide range of web solutions').fadeIn(500);

        $('#features #keyInd').hide().html('Key Industry &nbsp; <span>:</span>').fadeIn(500);
        $('#features #keyInddata').hide().html(' Technology').fadeIn(500);

        $('#features #empStgth').hide().html('Employee Strength &nbsp; <span>:</span>').fadeIn(500);
        $('#features #empStgthdata').hide().html(' Lorem Ipsum').fadeIn(500);

        $('#features #keyskl').hide().html('Key Skills &nbsp; <span>:</span>').fadeIn(500);
        $('#features #keyskldata').hide().html(' 3 skills').fadeIn(500);

        $('#features #awards').hide().html('Awards &nbsp; <span>:</span>').fadeIn(500);
        $('#features #awardsdata').hide().html(' 2nd June 1988').fadeIn(500);

        $('#features #found').hide().html('Founded &nbsp; <span>:</span>').fadeIn(500);
        $('#features #founddata').hide().html(' Lorem ipsum').fadeIn(500);

        $('#features #keysrs').hide().html('Key Services &nbsp; <span>:</span>').fadeIn(500);
        $('#features #keysrsdata').hide().html(' Lorem ipsum  ').fadeIn(500);

    });



$('#serviceIcon .webIcon').click(function() {
    history.replaceState('', '', newURL + '/web');
    $('#serviceIcon .mobileIcon .mobile').removeClass('activeGreen');
    $('#serviceIcon .cloudIcon .cloud').removeClass('activeGreenCloud');
    $('#serviceIcon .bigDataIcon .bigData').removeClass('activeGreenBigdata');
    $('#serviceIcon .gameIcon .game').removeClass('activeGreenGame');
    $('#serviceIcon .infraIcon .infra').removeClass('activeGreenInfra');
    $('#serviceIcon .testIcon .test').removeClass('activeGreenTest');
    $('#serviceIcon .uiDesignIcon .uiDesign').removeClass('activeGreenUiDesign');
    $('#serviceIcon .helpIcon .help').removeClass('activeGreenHelp');
    $('#serviceIcon .biReportIcon .biReport').removeClass('activeGreenBiReport');
    $('#serviceIcon .enterpriseIcon .enterprise').removeClass('activeGreenEnterprise');
    $('#serviceIcon .productIcon .product').removeClass('activeGreenProduct');
    $('#serviceIcon .internetIcon .internet').removeClass('activeGreenInternet');

    $('#serviceIcon .webIcon .web').addClass('activeGreenWeb');
    $('#serviceIcon .webIcon .webCircle').addClass('activeDetails');
    $('#serviceIcon .webIcon .webDetails').addClass('activeFont');
    $('#serviceIcon .webIcon .webLine').addClass('activeDetails');

    $('#serviceIcon .productIcon .productCircle, #serviceIcon .internetIcon .internetCircle, #serviceIcon .mobileIcon .mobileCircle, #serviceIcon .cloudIcon .cloudCircle, #serviceIcon .bigDataIcon .bigdataCircle, #serviceIcon .gameIcon .gameCircle, #serviceIcon .infraIcon .infraCircle, #serviceIcon .testIcon .testCircle, #serviceIcon .uiDesignIcon .uiDesignCircle, #serviceIcon .helpIcon .helpCircle, #serviceIcon .biReportIcon .biReportCircle,#serviceIcon .enterpriseIcon .enterpriseCircle').removeClass('activeDetails');
    $('#serviceIcon .productIcon .productLine, #serviceIcon .internetIcon .internetLine, #serviceIcon .mobileIcon .mobileLine, #serviceIcon .cloudIcon .cloudLine, #serviceIcon .bigDataIcon .bigdataLine, #serviceIcon .gameIcon .gameLine, #serviceIcon .infraIcon .infraLine, #serviceIcon .testIcon .testLine, #serviceIcon .uiDesignIcon .uiDesignLine, #serviceIcon .helpIcon .helpLine, #serviceIcon .biReportIcon .biReportLine,#serviceIcon .enterpriseIcon .enterpriseLine').removeClass('activeDetails');
    $('#serviceIcon .productIcon .productDetails, #serviceIcon .internetIcon .internetDetails, #serviceIcon .mobileIcon .mobileDetails, #serviceIcon .cloudIcon .cloudDetails, #serviceIcon .bigDataIcon .bigdataDetails, #serviceIcon .gameIcon .gamification, #serviceIcon .infraIcon .infraDetails, #serviceIcon .testIcon .testDetails, #serviceIcon .uiDesignIcon .uiDesignDetails, #serviceIcon .helpIcon .helpDetails, #serviceIcon .biReportIcon .biReportDetails,#serviceIcon .enterpriseIcon .enterpriseDetails').removeClass('activeFont');


    $('#provideinformation #provideP').hide().html('Leverage a wide range of mobile solutions across all the major platforms:<br/>iOS, Android and Windows.').fadeIn(500);
    $('#provideinformation #numberProvider').hide().html('30+').fadeIn(500);
    $('#provideinformation #totalResource').hide().html('700').fadeIn(500);
    $('#features #servicepNumber').hide().html('itx-sp:8888').fadeIn(500);

    $('#overView #overViewData').hide().html('Our certified service providers help you consolidate your digital footprint by supporting a wide range of web solutions:').fadeIn(500);
    $('#features').css("padding-bottom", "100px");
    $('#overView').css("padding-bottom", "55px");
    $('#overView #ul1 #item1').hide().html('Sophisticated front-end development using capabilities such as Ajax, Jquery').fadeIn(500);
    $('#overView #ul1 #item2').hide().html('Multiple web development platforms - Java, .Net, PHP, Ruby on Rails').fadeIn(500);
    $('#overView #ul1 #item3').hide().html('Integration on  CMS systems – Drupal, Joomla, Umbraco and others').fadeIn(500);
    $('#overView #ul1 #item4').hide().html('Development of large scale ecommerce solutions').fadeIn(500);
    $('#overView #ul1 #item5').hide().html('Development and integration of social media apps').fadeIn(500);

    $('#overView #research a').hide().html('&#60;Links to articles, websites, blogs from the Content Hub section&#62;').fadeIn(500);

    $('#overView #ul2 #item1').hide().html('&#60;X&#62; service providers specialized in web solutions').fadeIn(500);
    $('#overView #ul2 #item2').hide().html('Over &#60;y&#62; projects delivered for global clients').fadeIn(500);
    $('#overView #ul2 #item3').hide().html('Support for integrated, end to end web development – UX, development, CMS configuration and support').fadeIn(500);
    $('#overView #ul2 #item4').hide().html('One stop shop for a wide breadth of web skills ').fadeIn(500);
    $('#overView #ul2 #item5').hide().html('Expertise in delivering secure, scalable ecommerce solutions').fadeIn(500);

    $('#overView #success a').hide().html('&#60;Links to relevant case study from the Case Studies section&#62;').fadeIn(500);


    $('#features #featuresP').hide().html('Our certified service providers<br>help you consolidate your digital footprints<br>by supporting a wide range of web<br>solutions your digital footprints by supporting<br>a wide range of web solutions').fadeIn(500);

    $('#features #keyInd').hide().html('Key Industry &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keyInddata').hide().html(' Technology').fadeIn(500);

    $('#features #empStgth').hide().html('Employee Strength &nbsp; <span>:</span>').fadeIn(500);
    $('#features #empStgthdata').hide().html(' Lorem Ipsum').fadeIn(500);

    $('#features #keyskl').hide().html('Key Skills &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keyskldata').hide().html(' 3 skills').fadeIn(500);

    $('#features #awards').hide().html('Awards &nbsp; <span>:</span>').fadeIn(500);
    $('#features #awardsdata').hide().html(' 2nd June 1988').fadeIn(500);

    $('#features #found').hide().html('Founded &nbsp; <span>:</span>').fadeIn(500);
    $('#features #founddata').hide().html(' Lorem ipsum').fadeIn(500);

    $('#features #keysrs').hide().html('Key Services &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keysrsdata').hide().html(' Lorem ipsum  ').fadeIn(500);


});

$('#serviceIcon .cloudIcon').click(function() {
    history.replaceState('', '', newURL + '/cloud');
    $('#serviceIcon .mobileIcon .mobile').removeClass('activeGreen');
    $('#serviceIcon .webIcon .web').removeClass('activeGreenWeb');
    $('#serviceIcon .bigDataIcon .bigData').removeClass('activeGreenBigdata');
    $('#serviceIcon .gameIcon .game').removeClass('activeGreenGame');
    $('#serviceIcon .productIcon .product').removeClass('activeGreenProduct');
    $('#serviceIcon .internetIcon .internet').removeClass('activeGreenInternet');

    $('#serviceIcon .infraIcon .infra').removeClass('activeGreenInfra');
    $('#serviceIcon .testIcon .test').removeClass('activeGreenTest');
    $('#serviceIcon .uiDesignIcon .uiDesign').removeClass('activeGreenUiDesign');
    $('#serviceIcon .helpIcon .help').removeClass('activeGreenHelp');
    $('#serviceIcon .biReportIcon .biReport').removeClass('activeGreenBiReport');
    $('#serviceIcon .enterpriseIcon .enterprise').removeClass('activeGreenEnterprise');

    $('#serviceIcon .cloudIcon .cloud').addClass('activeGreenCloud');
    $('#serviceIcon .cloudIcon .cloudCircle').addClass('activeDetails');
    $('#serviceIcon .cloudIcon .cloudDetails').addClass('activeFont');
    $('#serviceIcon .cloudIcon .cloudLine').addClass('activeDetails');


    $('#serviceIcon .productIcon .productCircle, #serviceIcon .internetIcon .internetCircle, #serviceIcon .mobileIcon .mobileCircle, #serviceIcon .webIcon .webCircle, #serviceIcon .bigDataIcon .bigdataCircle, #serviceIcon .gameIcon .gameCircle, #serviceIcon .infraIcon .infraCircle, #serviceIcon .testIcon .testCircle, #serviceIcon .uiDesignIcon .uiDesignCircle, #serviceIcon .helpIcon .helpCircle, #serviceIcon .biReportIcon .biReportCircle,#serviceIcon .enterpriseIcon .enterpriseCircle').removeClass('activeDetails');
    $('#serviceIcon .productIcon .productLine, #serviceIcon .internetIcon .internetLine, #serviceIcon .mobileIcon .mobileLine, #serviceIcon .webIcon .webLine, #serviceIcon .bigDataIcon .bigdataLine, #serviceIcon .gameIcon .gameLine, #serviceIcon .infraIcon .infraLine, #serviceIcon .testIcon .testLine, #serviceIcon .uiDesignIcon .uiDesignLine, #serviceIcon .helpIcon .helpLine, #serviceIcon .biReportIcon .biReportLine,#serviceIcon .enterpriseIcon .enterpriseLine').removeClass('activeDetails');
    $('#serviceIcon .productIcon .productDetails, #serviceIcon .internetIcon .internetDetails, #serviceIcon .mobileIcon .mobileDetails, #serviceIcon .webIcon .webDetails, #serviceIcon .bigDataIcon .bigdataDetails, #serviceIcon .gameIcon .gamification, #serviceIcon .infraIcon .infraDetails, #serviceIcon .testIcon .testDetails, #serviceIcon .uiDesignIcon .uiDesignDetails, #serviceIcon .helpIcon .helpDetails, #serviceIcon .biReportIcon .biReportDetails,#serviceIcon .enterpriseIcon .enterpriseDetails').removeClass('activeFont');


    $('#provideinformation #provideP').hide().html('Leverage a wide range of mobile solutions across all the major platforms:<br/>iOS, Android and Windows.').fadeIn(500);
    $('#provideinformation #numberProvider').hide().html('30+').fadeIn(500);
    $('#provideinformation #totalResource').hide().html('700').fadeIn(500);

    $('#features').css("padding-bottom", "0px");
    $('#overView').css("padding-bottom", "90px");
    $('#overView #overViewData').hide().html('Develop and deploy sophisticated cloud solutions leveraging our suppliers’skills:').fadeIn(500);
    $('#features #servicepNumber').hide().html('itx-sp:8888').fadeIn(500);

    $('#overView #ul1 #item1').hide().html('Customization and integration of Salesforce and other SaaS services').fadeIn(500);
    $('#overView #ul1 #item2').hide().html('Expertise across most popular cloud services: Azure, AWS, IBM, Rackspace').fadeIn(500);
    $('#overView #ul1 #item3').hide().html('Cloud deployment and hosting').fadeIn(500);
    $('#overView #ul1 #item4').hide().html('Private cloud and virtualization').fadeIn(500);
    $('#overView #ul1 #item5').hide();

    $('#overView #research a').hide().html('&#60;Links to articles, websites, blogs from the Content Hub section&#62;').fadeIn(500);

    $('#overView #ul2 #item1').hide().html('&#60;X&#62; service providers specialized in cloud solutions').fadeIn(500);
    $('#overView #ul2 #item2').hide().html('Over &#60;y&#62; resources experienced in latest cloud technologies').fadeIn(500);
    $('#overView #ul2 #item3').hide().html('End to end cloud solutions – SaaS, PaaS and IaaS').fadeIn(500);
    $('#overView #ul2 #item4').hide().html('Expertise in building complex, virtualized infrastructure').fadeIn(500);
    $('#overView #ul2 #item5').hide();

    $('#overView #success a').hide().html('&#60;Links to relevant case study from the Case Studies section&#62;').fadeIn(500);


    $('#features #featuresP').hide().html('Our certified service providers<br>help you consolidate your digital footprints<br>by supporting a wide range of web<br>solutions your digital footprints by supporting<br>a wide range of web solutions').fadeIn(500);

    $('#features #keyInd').hide().html('Key Industry &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keyInddata').hide().html(' Technology').fadeIn(500);

    $('#features #empStgth').hide().html('Employee Strength &nbsp; <span>:</span>').fadeIn(500);
    $('#features #empStgthdata').hide().html(' Lorem Ipsum').fadeIn(500);

    $('#features #keyskl').hide().html('Key Skills &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keyskldata').hide().html(' 3 skills').fadeIn(500);

    $('#features #awards').hide().html('Awards &nbsp; <span>:</span>').fadeIn(500);
    $('#features #awardsdata').hide().html(' 2nd June 1988').fadeIn(500);

    $('#features #found').hide().html('Founded &nbsp; <span>:</span>').fadeIn(500);
    $('#features #founddata').hide().html(' Lorem ipsum').fadeIn(500);

    $('#features #keysrs').hide().html('Key Services &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keysrsdata').hide().html(' Lorem ipsum  ').fadeIn(500);


});




$('#serviceIcon .bigDataIcon').click(function() {
    history.replaceState('', '', newURL + '/bigData');
    $('#serviceIcon .mobileIcon .mobile').removeClass('activeGreen');
    $('#serviceIcon .webIcon .web').removeClass('activeGreenWeb');
    $('#serviceIcon .cloudIcon .cloud').removeClass('activeGreenCloud');
    $('#serviceIcon .gameIcon .game').removeClass('activeGreenGame');
    $('#serviceIcon .productIcon .product').removeClass('activeGreenProduct');
    $('#serviceIcon .internetIcon .internet').removeClass('activeGreenInternet');

    $('#serviceIcon .infraIcon .infra').removeClass('activeGreenInfra');
    $('#serviceIcon .testIcon .test').removeClass('activeGreenTest');
    $('#serviceIcon .uiDesignIcon .uiDesign').removeClass('activeGreenUiDesign');
    $('#serviceIcon .helpIcon .help').removeClass('activeGreenHelp');
    $('#serviceIcon .biReportIcon .biReport').removeClass('activeGreenBiReport');
    $('#serviceIcon .enterpriseIcon .enterprise').removeClass('activeGreenEnterprise');

    $('#serviceIcon .bigDataIcon .bigData').addClass('activeGreenBigdata');
    $('#serviceIcon .bigDataIcon .bigdataCircle').addClass('activeDetails');
    $('#serviceIcon .bigDataIcon .bigdataDetails').addClass('activeFont');
    $('#serviceIcon .bigDataIcon .bigdataLine').addClass('activeDetails');


    $('#serviceIcon .productIcon .productCircle, #serviceIcon .internetIcon .internetCircle, #serviceIcon .mobileIcon .mobileCircle, #serviceIcon .webIcon .webCircle, #serviceIcon .cloudIcon .cloudCircle, #serviceIcon .gameIcon .gameCircle, #serviceIcon .infraIcon .infraCircle, #serviceIcon .testIcon .testCircle, #serviceIcon .uiDesignIcon .uiDesignCircle, #serviceIcon .helpIcon .helpCircle, #serviceIcon .biReportIcon .biReportCircle,#serviceIcon .enterpriseIcon .enterpriseCircle').removeClass('activeDetails');
    $('#serviceIcon .productIcon .productLine, #serviceIcon .internetIcon .internetLine, #serviceIcon .mobileIcon .mobileLine, #serviceIcon .webIcon .webLine, #serviceIcon .cloudIcon .cloudLine, #serviceIcon .gameIcon .gameLine, #serviceIcon .infraIcon .infraLine, #serviceIcon .testIcon .testLine, #serviceIcon .uiDesignIcon .uiDesignLine, #serviceIcon .helpIcon .helpLine, #serviceIcon .biReportIcon .biReportLine,#serviceIcon .enterpriseIcon .enterpriseLine').removeClass('activeDetails');
    $('#serviceIcon .productIcon .productDetails, #serviceIcon .internetIcon .internetDetails, #serviceIcon .mobileIcon .mobileDetails, #serviceIcon .webIcon .webDetails, #serviceIcon .cloudIcon .cloudDetails, #serviceIcon .gameIcon .gamification, #serviceIcon .infraIcon .infraDetails, #serviceIcon .testIcon .testDetails, #serviceIcon .uiDesignIcon .uiDesignDetails, #serviceIcon .helpIcon .helpDetails, #serviceIcon .biReportIcon .biReportDetails,#serviceIcon .enterpriseIcon .enterpriseDetails').removeClass('activeFont');



    $('#provideinformation #provideP').hide().html('Leverage a wide range of mobile solutions across all the major platforms:<br/>iOS, Android and Windows.').fadeIn(500);
    $('#provideinformation #numberProvider').hide().html('30+').fadeIn(500);
    $('#provideinformation #totalResource').hide().html('700').fadeIn(500);

    $('#features').css("padding-bottom", "0px");
    $('#overView').css("padding-bottom", "160px");
    $('#overView #overViewData').hide().html('Our Service Providers are equipped with the latest Big Data skills:').fadeIn(500);
    $('#features #servicepNumber').hide().html('itx-sp:8888').fadeIn(500);

    $('#overView #ul1 #item1').hide().html('Expertise in the NoSQL query language').fadeIn(500);
    $('#overView #ul1 #item2').hide().html('Experience in latest Big data platforms: Hadoop, Python, SAP HANA').fadeIn(500);
    $('#overView #ul1 #item3').hide().html('Advanced analytics and reporting skills').fadeIn(500);
    $('#overView #ul1 #item4').hide();
    $('#overView #ul1 #item5').hide();

    $('#overView #research a').hide().html('&#60;Links to articles, websites, blogs from the Content Hub section&#62;').fadeIn(500);

    $('#overView #ul2 #item1').hide().html('&#60;X&#62; service providers specialized in Big Data ').fadeIn(500);
    $('#overView #ul2 #item2').hide().html('Over &#60;y&#62; resources experienced in latest big data techniques').fadeIn(500);
    $('#overView #ul2 #item3').hide().html('Expertise in state-of-the-art Big Data platforms').fadeIn(500);
    $('#overView #ul2 #item4').hide();
    $('#overView #ul2 #item5').hide();

    $('#overView #success a').hide().html('&#60;Links to relevant case study from the Case Studies section&#62;').fadeIn(500);


    $('#features #featuresP').hide().html('Our certified service providers<br>help you consolidate your digital footprints<br>by supporting a wide range of web<br>solutions your digital footprints by supporting<br>a wide range of web solutions').fadeIn(500);

    $('#features #keyInd').hide().html('Key Industry &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keyInddata').hide().html(' Technology').fadeIn(500);

    $('#features #empStgth').hide().html('Employee Strength &nbsp; <span>:</span>').fadeIn(500);
    $('#features #empStgthdata').hide().html(' Lorem Ipsum').fadeIn(500);

    $('#features #keyskl').hide().html('Key Skills &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keyskldata').hide().html(' 3 skills').fadeIn(500);

    $('#features #awards').hide().html('Awards &nbsp; <span>:</span>').fadeIn(500);
    $('#features #awardsdata').hide().html(' 2nd June 1988').fadeIn(500);

    $('#features #found').hide().html('Founded &nbsp; <span>:</span>').fadeIn(500);
    $('#features #founddata').hide().html(' Lorem ipsum').fadeIn(500);

    $('#features #keysrs').hide().html('Key Services &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keysrsdata').hide().html(' Lorem ipsum  ').fadeIn(500);


});


$('#serviceIcon .gameIcon').click(function() {
    history.replaceState('', '', newURL + '/gamification');
    $('#serviceIcon .mobileIcon .mobile').removeClass('activeGreen');
    $('#serviceIcon .webIcon .web').removeClass('activeGreenWeb');
    $('#serviceIcon .cloudIcon .cloud').removeClass('activeGreenCloud');
    $('#serviceIcon .bigDataIcon .bigData').removeClass('activeGreenBigdata');
    $('#serviceIcon .productIcon .product').removeClass('activeGreenProduct');
    $('#serviceIcon .internetIcon .internet').removeClass('activeGreenInternet');

    $('#serviceIcon .infraIcon .infra').removeClass('activeGreenInfra');
    $('#serviceIcon .testIcon .test').removeClass('activeGreenTest');
    $('#serviceIcon .uiDesignIcon .uiDesign').removeClass('activeGreenUiDesign');
    $('#serviceIcon .helpIcon .help').removeClass('activeGreenHelp');
    $('#serviceIcon .biReportIcon .biReport').removeClass('activeGreenBiReport');
    $('#serviceIcon .enterpriseIcon .enterprise').removeClass('activeGreenEnterprise');

    $('#serviceIcon .gameIcon .game').addClass('activeGreenGame');
    $('#serviceIcon .gameIcon .gameCircle').addClass('activeDetails');
    $('#serviceIcon .gameIcon .gamification').addClass('activeFont');
    $('#serviceIcon .gameIcon .gameLine').addClass('activeDetails');



    $('#serviceIcon .productIcon .productCircle, #serviceIcon .internetIcon .internetCircle, #serviceIcon .mobileIcon .mobileCircle, #serviceIcon .webIcon .webCircle, #serviceIcon .cloudIcon .cloudCircle, #serviceIcon .bigDataIcon .bigdataCircle, #serviceIcon .infraIcon .infraCircle, #serviceIcon .testIcon .testCircle, #serviceIcon .uiDesignIcon .uiDesignCircle, #serviceIcon .helpIcon .helpCircle, #serviceIcon .biReportIcon .biReportCircle,#serviceIcon .enterpriseIcon .enterpriseCircle').removeClass('activeDetails');
    $('#serviceIcon .productIcon .productLine, #serviceIcon .internetIcon .internetLine, #serviceIcon .mobileIcon .mobileLine, #serviceIcon .webIcon .webLine, #serviceIcon .cloudIcon .cloudLine, #serviceIcon .bigDataIcon .bigdataLine, #serviceIcon .infraIcon .infraLine, #serviceIcon .testIcon .testLine, #serviceIcon .uiDesignIcon .uiDesignLine, #serviceIcon .helpIcon .helpLine, #serviceIcon .biReportIcon .biReportLine,#serviceIcon .enterpriseIcon .enterpriseLine').removeClass('activeDetails');
    $('#serviceIcon .productIcon .productDetails, #serviceIcon .internetIcon .internetDetails, #serviceIcon .mobileIcon .mobileDetails, #serviceIcon .webIcon .webDetails, #serviceIcon .cloudIcon .cloudDetails, #serviceIcon .bigDataIcon .bigdataDetails, #serviceIcon .infraIcon .infraDetails, #serviceIcon .testIcon .testDetails, #serviceIcon .uiDesignIcon .uiDesignDetails, #serviceIcon .helpIcon .helpDetails, #serviceIcon .biReportIcon .biReportDetails,#serviceIcon .enterpriseIcon .enterpriseDetails').removeClass('activeFont');



    $('#provideinformation #provideP').hide().html('Leverage a wide range of mobile solutions across all the major platforms:<br/>iOS, Android and Windows.').fadeIn(500);
    $('#provideinformation #numberProvider').hide().html('30+').fadeIn(500);
    $('#provideinformation #totalResource').hide().html('700').fadeIn(500);

    $('#features').css("padding-bottom", "0px");
    $('#overView').css("padding-bottom", "160px");
    $('#overView #overViewData').hide().html('Build cutting-edge games with the help of our global service providers:').fadeIn(500);
    $('#features #servicepNumber').hide().html('itx-sp:8888').fadeIn(500);

    $('#overView #ul1 #item1').hide().html('Expertise in game design and conceptualization').fadeIn(500);
    $('#overView #ul1 #item2').hide().html('Experience in building sophisticated games using 2-D and 3-D animation').fadeIn(500);
    $('#overView #ul1 #item3').hide().html('Expertise in developing mobile and social gaming apps').fadeIn(500);
    $('#overView #ul1 #item4').hide();
    $('#overView #ul1 #item5').hide();

    $('#overView #research a').hide().html('&#60;Links to articles, websites, blogs from the Content Hub section&#62;').fadeIn(500);

    $('#overView #ul2 #item1').hide().html('&#60;X&#62; service providers specialized in Gamification ').fadeIn(500);
    $('#overView #ul2 #item2').hide().html('Over &#60;y&#62; resources experienced in latest gaming techniques').fadeIn(500);
    $('#overView #ul2 #item3').hide().html('One-stop shop for a network of game designers and developers').fadeIn(500);
    $('#overView #ul2 #item4').hide();
    $('#overView #ul2 #item5').hide();

    $('#overView #success a').hide().html('&#60;Links to relevant case study from the Case Studies section&#62;').fadeIn(500);


    $('#features #featuresP').hide().html('Our certified service providers<br>help you consolidate your digital footprints<br>by supporting a wide range of web<br>solutions your digital footprints by supporting<br>a wide range of web solutions').fadeIn(500);

    $('#features #keyInd').hide().html('Key Industry &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keyInddata').hide().html(' Technology').fadeIn(500);

    $('#features #empStgth').hide().html('Employee Strength &nbsp; <span>:</span>').fadeIn(500);
    $('#features #empStgthdata').hide().html(' Lorem Ipsum').fadeIn(500);

    $('#features #keyskl').hide().html('Key Skills &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keyskldata').hide().html(' 3 skills').fadeIn(500);

    $('#features #awards').hide().html('Awards &nbsp; <span>:</span>').fadeIn(500);
    $('#features #awardsdata').hide().html(' 2nd June 1988').fadeIn(500);

    $('#features #found').hide().html('Founded &nbsp; <span>:</span>').fadeIn(500);
    $('#features #founddata').hide().html(' Lorem ipsum').fadeIn(500);

    $('#features #keysrs').hide().html('Key Services &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keysrsdata').hide().html(' Lorem ipsum  ').fadeIn(500);


});



$('#serviceIcon .infraIcon').click(function() {
	history.replaceState('', '', newURL + '/infra');
    $('#serviceIcon .mobileIcon .mobile').removeClass('activeGreen');
    $('#serviceIcon .webIcon .web').removeClass('activeGreenWeb');
    $('#serviceIcon .cloudIcon .cloud').removeClass('activeGreenCloud');
    $('#serviceIcon .bigDataIcon .bigData').removeClass('activeGreenBigdata');
    $('#serviceIcon .gameIcon .game').removeClass('activeGreenGame');
    $('#serviceIcon .productIcon .product').removeClass('activeGreenProduct');
    $('#serviceIcon .internetIcon .internet').removeClass('activeGreenInternet');

    $('#serviceIcon .testIcon .test').removeClass('activeGreenTest');
    $('#serviceIcon .uiDesignIcon .uiDesign').removeClass('activeGreenUiDesign');
    $('#serviceIcon .helpIcon .help').removeClass('activeGreenHelp');
    $('#serviceIcon .biReportIcon .biReport').removeClass('activeGreenBiReport');
    $('#serviceIcon .enterpriseIcon .enterprise').removeClass('activeGreenEnterprise');

    $('#serviceIcon .infraIcon .infra').addClass('activeGreenInfra');
    $('#serviceIcon .infraIcon .infraCircle').addClass('activeDetails');
    $('#serviceIcon .infraIcon .infraDetails').addClass('activeFont');
    $('#serviceIcon .infraIcon .infraLine').addClass('activeDetails');

    $('#serviceIcon .productIcon .productCircle, #serviceIcon .internetIcon .internetCircle, #serviceIcon .mobileIcon .mobileCircle, #serviceIcon .webIcon .webCircle, #serviceIcon .cloudIcon .cloudCircle, #serviceIcon .bigDataIcon .bigdataCircle, #serviceIcon .gameIcon .gameCircle, #serviceIcon .testIcon .testCircle, #serviceIcon .uiDesignIcon .uiDesignCircle, #serviceIcon .helpIcon .helpCircle, #serviceIcon .biReportIcon .biReportCircle,#serviceIcon .enterpriseIcon .enterpriseCircle').removeClass('activeDetails');
    $('#serviceIcon .productIcon .productLine, #serviceIcon .internetIcon .internetLine, #serviceIcon .mobileIcon .mobileLine, #serviceIcon .webIcon .webLine, #serviceIcon .cloudIcon .cloudLine, #serviceIcon .bigDataIcon .bigdataLine, #serviceIcon .gameIcon .gameLine, #serviceIcon .testIcon .testLine, #serviceIcon .uiDesignIcon .uiDesignLine, #serviceIcon .helpIcon .helpLine, #serviceIcon .biReportIcon .biReportLine,#serviceIcon .enterpriseIcon .enterpriseLine').removeClass('activeDetails');
    $('#serviceIcon .productIcon .productDetails, #serviceIcon .internetIcon .internetDetails, #serviceIcon .mobileIcon .mobileDetails, #serviceIcon .webIcon .webDetails, #serviceIcon .cloudIcon .cloudDetails, #serviceIcon .bigDataIcon .bigdataDetails, #serviceIcon .gameIcon .gamification, #serviceIcon .testIcon .testDetails, #serviceIcon .uiDesignIcon .uiDesignDetails, #serviceIcon .helpIcon .helpDetails, #serviceIcon .biReportIcon .biReportDetails,#serviceIcon .enterpriseIcon .enterpriseDetails').removeClass('activeFont');




    $('#provideinformation #provideP').hide().html('Leverage a wide range of mobile solutions across all the major platforms:<br/>iOS, Android and Windows.').fadeIn(500);
    $('#provideinformation #numberProvider').hide().html('30+').fadeIn(500);
    $('#provideinformation #totalResource').hide().html('700').fadeIn(500);

    $('#features').css("padding-bottom", "0px");
    $('#overView').css("padding-bottom", "130px");
    $('#overView #overViewData').hide().html('Our service providers support a wide range of infrastructure solutions:').fadeIn(500);
    $('#features #servicepNumber').hide().html('itx-sp:8888').fadeIn(500);

    $('#overView #ul1 #item1').hide().html('Data Centre Management Services').fadeIn(500);
    $('#overView #ul1 #item2').hide().html('Managed Security Services including end to end Security solutions').fadeIn(500);
    $('#overView #ul1 #item3').hide().html('Expertise in Cloud and Virtualized infrastructure').fadeIn(500);
    $('#overView #ul1 #item4').hide().html('Converged Network and Unified Communication services').fadeIn(500);
    $('#overView #ul1 #item5').hide();

    $('#overView #research a').hide().html('&#60;Links to articles, websites, blogs from the Content Hub section&#62;').fadeIn(500);

    $('#overView #ul2 #item1').hide().html('&#60;X&#62; specialized providers of Infrastructure Solutions').fadeIn(500);
    $('#overView #ul2 #item2').hide().html('Over &#60;y&#62; Infrastructure professionals').fadeIn(500);
    $('#overView #ul2 #item3').hide().html('Experience in latest Cloud and Virtualized solutions').fadeIn(500);
    $('#overView #ul2 #item4').hide();
    $('#overView #ul2 #item5').hide();

    $('#overView #success a').hide().html('&#60;Links to relevant case study from the Case Studies section&#62;').fadeIn(500);


    $('#features #featuresP').hide().html('Our certified service providers<br>help you consolidate your digital footprints<br>by supporting a wide range of web<br>solutions your digital footprints by supporting<br>a wide range of web solutions').fadeIn(500);

    $('#features #keyInd').hide().html('Key Industry &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keyInddata').hide().html(' Technology').fadeIn(500);

    $('#features #empStgth').hide().html('Employee Strength &nbsp; <span>:</span>').fadeIn(500);
    $('#features #empStgthdata').hide().html(' Lorem Ipsum').fadeIn(500);

    $('#features #keyskl').hide().html('Key Skills &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keyskldata').hide().html(' 3 skills').fadeIn(500);

    $('#features #awards').hide().html('Awards &nbsp; <span>:</span>').fadeIn(500);
    $('#features #awardsdata').hide().html(' 2nd June 1988').fadeIn(500);

    $('#features #found').hide().html('Founded &nbsp; <span>:</span>').fadeIn(500);
    $('#features #founddata').hide().html(' Lorem ipsum').fadeIn(500);

    $('#features #keysrs').hide().html('Key Services &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keysrsdata').hide().html(' Lorem ipsum  ').fadeIn(500);



});

$('#serviceIcon .testIcon').click(function() {
	history.replaceState('', '', newURL + '/testingServices');
    $('#serviceIcon .mobileIcon .mobile').removeClass('activeGreen');
    $('#serviceIcon .webIcon .web').removeClass('activeGreenWeb');
    $('#serviceIcon .cloudIcon .cloud').removeClass('activeGreenCloud');
    $('#serviceIcon .bigDataIcon .bigData').removeClass('activeGreenBigdata');
    $('#serviceIcon .productIcon .product').removeClass('activeGreenProduct');
    $('#serviceIcon .internetIcon .internet').removeClass('activeGreenInternet');

    $('#serviceIcon .infraIcon .infra').removeClass('activeGreenInfra');
    $('#serviceIcon .gameIcon .game').removeClass('activeGreenGame');
    $('#serviceIcon .uiDesignIcon .uiDesign').removeClass('activeGreenUiDesign');
    $('#serviceIcon .helpIcon .help').removeClass('activeGreenHelp');
    $('#serviceIcon .biReportIcon .biReport').removeClass('activeGreenBiReport');
    $('#serviceIcon .enterpriseIcon .enterprise').removeClass('activeGreenEnterprise');

    $('#serviceIcon .testIcon .test').addClass('activeGreenTest');
    $('#serviceIcon .testIcon .testCircle').addClass('activeDetails');
    $('#serviceIcon .testIcon .testDetails').addClass('activeFont');
    $('#serviceIcon .testIcon .testLine').addClass('activeDetails');

    $('#serviceIcon .productIcon .productCircle, #serviceIcon .internetIcon .internetCircle, #serviceIcon .mobileIcon .mobileCircle, #serviceIcon .webIcon .webCircle, #serviceIcon .cloudIcon .cloudCircle, #serviceIcon .bigDataIcon .bigdataCircle, #serviceIcon .infraIcon .infraCircle, #serviceIcon .gameIcon .gameCircle, #serviceIcon .uiDesignIcon .uiDesignCircle, #serviceIcon .helpIcon .helpCircle, #serviceIcon .biReportIcon .biReportCircle,#serviceIcon .enterpriseIcon .enterpriseCircle').removeClass('activeDetails');
    $('#serviceIcon .productIcon .productLine, #serviceIcon .internetIcon .internetLine, #serviceIcon .mobileIcon .mobileLine, #serviceIcon .webIcon .webLine, #serviceIcon .cloudIcon .cloudLine, #serviceIcon .bigDataIcon .bigdataLine, #serviceIcon .infraIcon .infraLine, #serviceIcon .gameIcon .gameLine, #serviceIcon .uiDesignIcon .uiDesignLine, #serviceIcon .helpIcon .helpLine, #serviceIcon .biReportIcon .biReportLine,#serviceIcon .enterpriseIcon .enterpriseLine').removeClass('activeDetails');
    $('#serviceIcon .productIcon .productDetails, #serviceIcon .internetIcon .internetDetails, #serviceIcon .mobileIcon .mobileDetails, #serviceIcon .webIcon .webDetails, #serviceIcon .cloudIcon .cloudDetails, #serviceIcon .bigDataIcon .bigdataDetails, #serviceIcon .infraIcon .infraDetails, #serviceIcon .gameIcon .gamification, #serviceIcon .uiDesignIcon .uiDesignDetails, #serviceIcon .helpIcon .helpDetails, #serviceIcon .biReportIcon .biReportDetails,#serviceIcon .enterpriseIcon .enterpriseDetails').removeClass('activeFont');




    $('#provideinformation #provideP').hide().html('Leverage a wide range of mobile solutions across all the major platforms:<br/>iOS, Android and Windows.').fadeIn(500);
    $('#provideinformation #numberProvider').hide().html('30+').fadeIn(500);
    $('#provideinformation #totalResource').hide().html('700').fadeIn(500);

    $('#features').css("padding-bottom", "0px");
    $('#overView').css("padding-bottom", "100px");
    $('#overView #overViewData').hide().html('We work with a large set of service providers who create innovative assurance strategies and solutions for you:').fadeIn(500);
    $('#features #servicepNumber').hide().html('itx-sp:8888').fadeIn(500);

    $('#overView #ul1 #item1').hide().html('Test Strategy and Consulting Services').fadeIn(500);
    $('#overView #ul1 #item2').hide().html('Expertise in Automated Testing Solutions').fadeIn(500);
    $('#overView #ul1 #item3').hide().html('Expertise in Performance, Security, Localization, Usability and Accessibility Testing').fadeIn(500);
    $('#overView #ul1 #item4').hide();
    $('#overView #ul1 #item5').hide();

    $('#overView #research a').hide().html('&#60;Links to articles, websites, blogs from the Content Hub section&#62;').fadeIn(500);

    $('#overView #ul2 #item1').hide().html('&#60;X&#62; specialized providers of Assurance solutions').fadeIn(500);
    $('#overView #ul2 #item2').hide().html('Over &#60;y&#62; Assurance professionals').fadeIn(500);
    $('#overView #ul2 #item3').hide().html('Experience in Automated Testing and Niche Test Environments').fadeIn(500);
    $('#overView #ul2 #item4').hide();
    $('#overView #ul2 #item5').hide();

    $('#overView #success a').hide().html('&#60;Links to relevant case study from the Case Studies section&#62;').fadeIn(500);


    $('#features #featuresP').hide().html('Our certified service providers<br>help you consolidate your digital footprints<br>by supporting a wide range of web<br>solutions your digital footprints by supporting<br>a wide range of web solutions').fadeIn(500);

    $('#features #keyInd').hide().html('Key Industry &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keyInddata').hide().html(' Technology').fadeIn(500);

    $('#features #empStgth').hide().html('Employee Strength &nbsp; <span>:</span>').fadeIn(500);
    $('#features #empStgthdata').hide().html(' Lorem Ipsum').fadeIn(500);

    $('#features #keyskl').hide().html('Key Skills &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keyskldata').hide().html(' 3 skills').fadeIn(500);

    $('#features #awards').hide().html('Awards &nbsp; <span>:</span>').fadeIn(500);
    $('#features #awardsdata').hide().html(' 2nd June 1988').fadeIn(500);

    $('#features #found').hide().html('Founded &nbsp; <span>:</span>').fadeIn(500);
    $('#features #founddata').hide().html(' Lorem ipsum').fadeIn(500);

    $('#features #keysrs').hide().html('Key Services &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keysrsdata').hide().html(' Lorem ipsum  ').fadeIn(500);




});




$('#serviceIcon .uiDesignIcon').click(function() {
	history.replaceState('', '', newURL + '/UX');
    $('#serviceIcon .mobileIcon .mobile').removeClass('activeGreen');
    $('#serviceIcon .webIcon .web').removeClass('activeGreenWeb');
    $('#serviceIcon .cloudIcon .cloud').removeClass('activeGreenCloud');
    $('#serviceIcon .bigDataIcon .bigData').removeClass('activeGreenBigdata');
    $('#serviceIcon .productIcon .product').removeClass('activeGreenProduct');
    $('#serviceIcon .internetIcon .internet').removeClass('activeGreenInternet');

    $('#serviceIcon .infraIcon .infra').removeClass('activeGreenInfra');
    $('#serviceIcon .testIcon .test').removeClass('activeGreenTest');
    $('#serviceIcon .gameIcon .game').removeClass('activeGreenGame');
    $('#serviceIcon .helpIcon .help').removeClass('activeGreenHelp');
    $('#serviceIcon .biReportIcon .biReport').removeClass('activeGreenBiReport');
    $('#serviceIcon .enterpriseIcon .enterprise').removeClass('activeGreenEnterprise');

    $('#serviceIcon .uiDesignIcon .uiDesign').addClass('activeGreenUiDesign');
    $('#serviceIcon .uiDesignIcon .uiDesignCircle').addClass('activeDetails');
    $('#serviceIcon .uiDesignIcon .uiDesignDetails').addClass('activeFont');
    $('#serviceIcon .uiDesignIcon .uiDesignLine').addClass('activeDetails');

    $('#serviceIcon .productIcon .productCircle, #serviceIcon .internetIcon .internetCircle, #serviceIcon .mobileIcon .mobileCircle, #serviceIcon .webIcon .webCircle, #serviceIcon .cloudIcon .cloudCircle, #serviceIcon .bigDataIcon .bigdataCircle, #serviceIcon .infraIcon .infraCircle, #serviceIcon .testIcon .testCircle, #serviceIcon .gameIcon .gameCircle, #serviceIcon .helpIcon .helpCircle, #serviceIcon .biReportIcon .biReportCircle,#serviceIcon .enterpriseIcon .enterpriseCircle').removeClass('activeDetails');
    $('#serviceIcon .productIcon .productLine, #serviceIcon .internetIcon .internetLine, #serviceIcon .mobileIcon .mobileLine, #serviceIcon .webIcon .webLine, #serviceIcon .cloudIcon .cloudLine, #serviceIcon .bigDataIcon .bigdataLine, #serviceIcon .infraIcon .infraLine, #serviceIcon .testIcon .testLine, #serviceIcon .gameIcon .gameLine, #serviceIcon .helpIcon .helpLine, #serviceIcon .biReportIcon .biReportLine,#serviceIcon .enterpriseIcon .enterpriseLine').removeClass('activeDetails');
    $('#serviceIcon .productIcon .productDetails, #serviceIcon .internetIcon .internetDetails, #serviceIcon .mobileIcon .mobileDetails, #serviceIcon .webIcon .webDetails, #serviceIcon .cloudIcon .cloudDetails, #serviceIcon .bigDataIcon .bigdataDetails, #serviceIcon .infraIcon .infraDetails, #serviceIcon .testIcon .testDetails, #serviceIcon .gameIcon .gamification, #serviceIcon .helpIcon .helpDetails, #serviceIcon .biReportIcon .biReportDetails,#serviceIcon .enterpriseIcon .enterpriseDetails').removeClass('activeFont');




    $('#provideinformation #provideP').hide().html('Leverage a wide range of mobile solutions across all the major platforms:<br/>iOS, Android and Windows.').fadeIn(500);
    $('#provideinformation #numberProvider').hide().html('30+').fadeIn(500);
    $('#provideinformation #totalResource').hide().html('700').fadeIn(500);

    $('#features').css("padding-bottom", "0px");
    $('#overView').css("padding-bottom", "130px");
    $('#overView #overViewData').hide().html('Our network of service providers provide you with a sophisticated range of UI/ UX solutions:').fadeIn(500);
    $('#features #servicepNumber').hide().html('itx-sp:8888').fadeIn(500);

    $('#overView #ul1 #item1').hide().html('Expertise in latest trends in Web 3.0 design').fadeIn(500);
    $('#overView #ul1 #item2').hide().html('Expertise in design for mobile devices: Responsive designs, Mobile App Design, HTML5 based design').fadeIn(500);
    $('#overView #ul1 #item3').hide();
    $('#overView #ul1 #item4').hide();
    $('#overView #ul1 #item5').hide();

    $('#overView #research a').hide().html('&#60;Links to articles, websites, blogs from the Content Hub section&#62;').fadeIn(500);

    $('#overView #ul2 #item1').hide().html('&#60;X&#62; specialized providers of UI/ UX Design solutions').fadeIn(500);
    $('#overView #ul2 #item2').hide().html('Over &#60;y&#62; resources experienced in latest UI/ UX techniques').fadeIn(500);
    $('#overView #ul2 #item3').hide().html('Experience in latest design trends: animation, flat designs, mobile web designs').fadeIn(500);
    $('#overView #ul2 #item4').hide();
    $('#overView #ul2 #item5').hide();

    $('#overView #success a').hide().html('&#60;Links to relevant case study from the Case Studies section&#62;').fadeIn(500);


    $('#features #featuresP').hide().html('Our certified service providers<br>help you consolidate your digital footprints<br>by supporting a wide range of web<br>solutions your digital footprints by supporting<br>a wide range of web solutions').fadeIn(500);

    $('#features #keyInd').hide().html('Key Industry &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keyInddata').hide().html(' Technology').fadeIn(500);

    $('#features #empStgth').hide().html('Employee Strength &nbsp; <span>:</span>').fadeIn(500);
    $('#features #empStgthdata').hide().html(' Lorem Ipsum').fadeIn(500);

    $('#features #keyskl').hide().html('Key Skills &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keyskldata').hide().html(' 3 skills').fadeIn(500);

    $('#features #awards').hide().html('Awards &nbsp; <span>:</span>').fadeIn(500);
    $('#features #awardsdata').hide().html(' 2nd June 1988').fadeIn(500);

    $('#features #found').hide().html('Founded &nbsp; <span>:</span>').fadeIn(500);
    $('#features #founddata').hide().html(' Lorem ipsum').fadeIn(500);

    $('#features #keysrs').hide().html('Key Services &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keysrsdata').hide().html(' Lorem ipsum  ').fadeIn(500);




});
$('#serviceIcon .helpIcon').click(function() {
	history.replaceState('', '', newURL + '/helpDesk');
    $('#serviceIcon .mobileIcon .mobile').removeClass('activeGreen');
    $('#serviceIcon .webIcon .web').removeClass('activeGreenWeb');
    $('#serviceIcon .cloudIcon .cloud').removeClass('activeGreenCloud');
    $('#serviceIcon .bigDataIcon .bigData').removeClass('activeGreenBigdata');
    $('#serviceIcon .productIcon .product').removeClass('activeGreenProduct');
    $('#serviceIcon .internetIcon .internet').removeClass('activeGreenInternet');

    $('#serviceIcon .infraIcon .infra').removeClass('activeGreenInfra');
    $('#serviceIcon .testIcon .test').removeClass('activeGreenTest');
    $('#serviceIcon .uiDesignIcon .uiDesign').removeClass('activeGreenUiDesign');
    $('#serviceIcon .gameIcon .game').removeClass('activeGreenGame');
    $('#serviceIcon .biReportIcon .biReport').removeClass('activeGreenBiReport');
    $('#serviceIcon .enterpriseIcon .enterprise').removeClass('activeGreenEnterprise');

    $('#serviceIcon .helpIcon .help').addClass('activeGreenHelp');
    $('#serviceIcon .helpIcon .helpCircle').addClass('activeDetails');
    $('#serviceIcon .helpIcon .helpDetails').addClass('activeFont');
    $('#serviceIcon .helpIcon .helpLine').addClass('activeDetails');

    $('#serviceIcon .productIcon .productCircle, #serviceIcon .internetIcon .internetCircle, #serviceIcon .mobileIcon .mobileCircle, #serviceIcon .webIcon .webCircle, #serviceIcon .cloudIcon .cloudCircle, #serviceIcon .bigDataIcon .bigdataCircle, #serviceIcon .infraIcon .infraCircle, #serviceIcon .testIcon .testCircle, #serviceIcon .uiDesignIcon .uiDesignCircle, #serviceIcon .gameIcon .gameCircle, #serviceIcon .biReportIcon .biReportCircle,#serviceIcon .enterpriseIcon .enterpriseCircle').removeClass('activeDetails');
    $('#serviceIcon .productIcon .productLine, #serviceIcon .internetIcon .internetLine, #serviceIcon .mobileIcon .mobileLine, #serviceIcon .webIcon .webLine, #serviceIcon .cloudIcon .cloudLine, #serviceIcon .bigDataIcon .bigdataLine, #serviceIcon .infraIcon .infraLine, #serviceIcon .testIcon .testLine, #serviceIcon .uiDesignIcon .uiDesignLine, #serviceIcon .gameIcon .gameLine, #serviceIcon .biReportIcon .biReportLine,#serviceIcon .enterpriseIcon .enterpriseLine').removeClass('activeDetails');
    $('#serviceIcon .productIcon .productDetails, #serviceIcon .internetIcon .internetDetails, #serviceIcon .mobileIcon .mobileDetails, #serviceIcon .webIcon .webDetails, #serviceIcon .cloudIcon .cloudDetails, #serviceIcon .bigDataIcon .bigdataDetails, #serviceIcon .infraIcon .infraDetails, #serviceIcon .testIcon .testDetails, #serviceIcon .uiDesignIcon .uiDesignDetails, #serviceIcon .gameIcon .gamification, #serviceIcon .biReportIcon .biReportDetails,#serviceIcon .enterpriseIcon .enterpriseDetails').removeClass('activeFont');



    $('#provideinformation #provideP').hide().html('Leverage a wide range of mobile solutions across all the major platforms:<br/>iOS, Android and Windows.').fadeIn(500);
    $('#provideinformation #numberProvider').hide().html('30+').fadeIn(500);
    $('#provideinformation #totalResource').hide().html('700').fadeIn(500);

    $('#features').css("padding-bottom", "0px");
    $('#overView').css("padding-bottom", "62px");
    $('#overView #overViewData').hide().html('Our global network of service-providers delivers 24/7 support to enterprises around the world:').fadeIn(500);
    $('#features #servicepNumber').hide().html('itx-sp:8888').fadeIn(500);

    $('#overView #ul1 #item1').hide().html('Expertise in scalable helpdesk solutions addressing the needs of high-growth businesses').fadeIn(500);
    $('#overView #ul1 #item2').hide().html('Service Management in line with ISO and ITIL v3 standards').fadeIn(500);
    $('#overView #ul1 #item3').hide();
    $('#overView #ul1 #item4').hide();
    $('#overView #ul1 #item5').hide();

    $('#overView #research a').hide().html('&#60;Links to articles, websites, blogs from the Content Hub section&#62;').fadeIn(500);

    $('#overView #ul2 #item1').hide().html('&#60;X&#62; service providers offering IT support services').fadeIn(500);
    $('#overView #ul2 #item2').hide().html('Over &#60;y&#62; resources trained in ISO and ITIL v3').fadeIn(500);
    $('#overView #ul2 #item3').hide().html('Network of IT skills ensure support for a comprehensive range of technical environments').fadeIn(500);
    $('#overView #ul2 #item4').hide().html('Global network ensuring follow-the-sun support').fadeIn(500);
    $('#overView #ul2 #item5').hide();

    $('#overView #success a').hide().html('&#60;Links to relevant case study from the Case Studies section&#62;').fadeIn(500);


    $('#features #featuresP').hide().html('Our certified service providers<br>help you consolidate your digital footprints<br>by supporting a wide range of web<br>solutions your digital footprints by supporting<br>a wide range of web solutions').fadeIn(500);

    $('#features #keyInd').hide().html('Key Industry &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keyInddata').hide().html(' Technology').fadeIn(500);

    $('#features #empStgth').hide().html('Employee Strength &nbsp; <span>:</span>').fadeIn(500);
    $('#features #empStgthdata').hide().html(' Lorem Ipsum').fadeIn(500);

    $('#features #keyskl').hide().html('Key Skills &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keyskldata').hide().html(' 3 skills').fadeIn(500);

    $('#features #awards').hide().html('Awards &nbsp; <span>:</span>').fadeIn(500);
    $('#features #awardsdata').hide().html(' 2nd June 1988').fadeIn(500);

    $('#features #found').hide().html('Founded &nbsp; <span>:</span>').fadeIn(500);
    $('#features #founddata').hide().html(' Lorem ipsum').fadeIn(500);

    $('#features #keysrs').hide().html('Key Services &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keysrsdata').hide().html(' Lorem ipsum  ').fadeIn(500);



});




$('#serviceIcon .biReportIcon').click(function() {
	history.replaceState('', '', newURL + '/BI');
    $('#serviceIcon .mobileIcon .mobile').removeClass('activeGreen');
    $('#serviceIcon .webIcon .web').removeClass('activeGreenWeb');
    $('#serviceIcon .cloudIcon .cloud').removeClass('activeGreenCloud');
    $('#serviceIcon .bigDataIcon .bigData').removeClass('activeGreenBigdata');
    $('#serviceIcon .productIcon .product').removeClass('activeGreenProduct');
    $('#serviceIcon .internetIcon .internet').removeClass('activeGreenInternet');

    $('#serviceIcon .infraIcon .infra').removeClass('activeGreenInfra');
    $('#serviceIcon .testIcon .test').removeClass('activeGreenTest');
    $('#serviceIcon .uiDesignIcon .uiDesign').removeClass('activeGreenUiDesign');
    $('#serviceIcon .helpIcon .help').removeClass('activeGreenHelp');
    $('#serviceIcon .gameIcon .game').removeClass('activeGreenGame');
    $('#serviceIcon .enterpriseIcon .enterprise').removeClass('activeGreenEnterprise');

    $('#serviceIcon .biReportIcon .biReport').addClass('activeGreenBiReport');
    $('#serviceIcon .biReportIcon .biReportCircle').addClass('activeDetails');
    $('#serviceIcon .biReportIcon .biReportDetails').addClass('activeFont');
    $('#serviceIcon .biReportIcon .biReportLine').addClass('activeDetails');

    $('#serviceIcon .productIcon .productCircle, #serviceIcon .internetIcon .internetCircle, #serviceIcon .mobileIcon .mobileCircle, #serviceIcon .webIcon .webCircle, #serviceIcon .cloudIcon .cloudCircle, #serviceIcon .bigDataIcon .bigdataCircle, #serviceIcon .infraIcon .infraCircle, #serviceIcon .testIcon .testCircle, #serviceIcon .uiDesignIcon .uiDesignCircle, #serviceIcon .helpIcon .helpCircle, #serviceIcon .gameIcon .gameCircle,#serviceIcon .enterpriseIcon .enterpriseCircle').removeClass('activeDetails');
    $('#serviceIcon .productIcon .productLine, #serviceIcon .internetIcon .internetLine, #serviceIcon .mobileIcon .mobileLine, #serviceIcon .webIcon .webLine, #serviceIcon .cloudIcon .cloudLine, #serviceIcon .bigDataIcon .bigdataLine, #serviceIcon .infraIcon .infraLine, #serviceIcon .testIcon .testLine, #serviceIcon .uiDesignIcon .uiDesignLine, #serviceIcon .helpIcon .helpLine, #serviceIcon .gameIcon .gameLine,#serviceIcon .enterpriseIcon .enterpriseLine').removeClass('activeDetails');
    $('#serviceIcon .productIcon .productDetails, #serviceIcon .internetIcon .internetDetails, #serviceIcon .mobileIcon .mobileDetails, #serviceIcon .webIcon .webDetails, #serviceIcon .cloudIcon .cloudDetails, #serviceIcon .bigDataIcon .bigdataDetails, #serviceIcon .infraIcon .infraDetails, #serviceIcon .testIcon .testDetails, #serviceIcon .uiDesignIcon .uiDesignDetails, #serviceIcon .helpIcon .helpDetails, #serviceIcon .gameIcon .gamification,#serviceIcon .enterpriseIcon .enterpriseDetails').removeClass('activeFont');


    $('#provideinformation #provideP').hide().html('Leverage a wide range of mobile solutions across all the major platforms:<br/>iOS, Android and Windows.').fadeIn(500);
    $('#provideinformation #numberProvider').hide().html('30+').fadeIn(500);
    $('#provideinformation #totalResource').hide().html('700').fadeIn(500);

    $('#features').css("padding-bottom", "0px");
    $('#overView').css("padding-bottom", "98px");
    $('#overView #overViewData').hide().html('Power your business with insights served by our network of Business Intelligence (BI) experts:').fadeIn(500);
    $('#features #servicepNumber').hide().html('itx-sp:8888').fadeIn(500);

    $('#overView #ul1 #item1').hide().html('Strategic consulting in Data Blueprinting and Master Data Management').fadeIn(500);
    $('#overView #ul1 #item2').hide().html('Expertise in a wide range of BI solutions: Oracle, TIBCO, IBM Cognos').fadeIn(500);
    $('#overView #ul1 #item3').hide().html('Experience in creating MIS and Reporting solutions').fadeIn(500);
    $('#overView #ul1 #item4').hide();
    $('#overView #ul1 #item5').hide();

    $('#overView #research a').hide().html('&#60;Links to articles, websites, blogs from the Content Hub section&#62;').fadeIn(500);

    $('#overView #ul2 #item1').hide().html('&#60;X&#62; service providers offering BI and Reporting').fadeIn(500);
    $('#overView #ul2 #item2').hide().html('Over &#60;y&#62; resources trained in latest BI techniques').fadeIn(500);
    $('#overView #ul2 #item3').hide().html('Strategic consulting skills in Business Process and Data Management ').fadeIn(500);
    $('#overView #ul2 #item4').hide().html('Global network ensuring follow-the-sun support').fadeIn(500);
    $('#overView #ul2 #item5').hide();

    $('#overView #success a').hide().html('&#60;Links to relevant case study from the Case Studies section&#62;').fadeIn(500);


    $('#features #featuresP').hide().html('Our certified service providers<br>help you consolidate your digital footprints<br>by supporting a wide range of web<br>solutions your digital footprints by supporting<br>a wide range of web solutions').fadeIn(500);

    $('#features #keyInd').hide().html('Key Industry &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keyInddata').hide().html(' Technology').fadeIn(500);

    $('#features #empStgth').hide().html('Employee Strength &nbsp; <span>:</span>').fadeIn(500);
    $('#features #empStgthdata').hide().html(' Lorem Ipsum').fadeIn(500);

    $('#features #keyskl').hide().html('Key Skills &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keyskldata').hide().html(' 3 skills').fadeIn(500);

    $('#features #awards').hide().html('Awards &nbsp; <span>:</span>').fadeIn(500);
    $('#features #awardsdata').hide().html(' 2nd June 1988').fadeIn(500);

    $('#features #found').hide().html('Founded &nbsp; <span>:</span>').fadeIn(500);
    $('#features #founddata').hide().html(' Lorem ipsum').fadeIn(500);

    $('#features #keysrs').hide().html('Key Services &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keysrsdata').hide().html(' Lorem ipsum  ').fadeIn(500);



});




$('#serviceIcon .enterpriseIcon').click(function() {
	history.replaceState('', '', newURL + '/apps');
    $('#serviceIcon .mobileIcon .mobile').removeClass('activeGreen');
    $('#serviceIcon .webIcon .web').removeClass('activeGreenWeb');
    $('#serviceIcon .cloudIcon .cloud').removeClass('activeGreenCloud');
    $('#serviceIcon .bigDataIcon .bigData').removeClass('activeGreenBigdata');
    $('#serviceIcon .productIcon .product').removeClass('activeGreenProduct');
    $('#serviceIcon .internetIcon .internet').removeClass('activeGreenInternet');

    $('#serviceIcon .infraIcon .infra').removeClass('activeGreenInfra');
    $('#serviceIcon .testIcon .test').removeClass('activeGreenTest');
    $('#serviceIcon .uiDesignIcon .uiDesign').removeClass('activeGreenUiDesign');
    $('#serviceIcon .helpIcon .help').removeClass('activeGreenHelp');
    $('#serviceIcon .biReportIcon .biReport').removeClass('activeGreenBiReport');
    $('#serviceIcon .gameIcon .game').removeClass('activeGreenGame');

    $('#serviceIcon .enterpriseIcon .enterprise').addClass('activeGreenEnterprise');
    $('#serviceIcon .enterpriseIcon .enterpriseCircle').addClass('activeDetails');
    $('#serviceIcon .enterpriseIcon .enterpriseDetails').addClass('activeFont');
    $('#serviceIcon .enterpriseIcon .enterpriseLine').addClass('activeDetails');

    $('#serviceIcon .productIcon .productCircle, #serviceIcon .internetIcon .internetCircle, #serviceIcon .mobileIcon .mobileCircle, #serviceIcon .webIcon .webCircle, #serviceIcon .cloudIcon .cloudCircle, #serviceIcon .bigDataIcon .bigdataCircle, #serviceIcon .infraIcon .infraCircle, #serviceIcon .testIcon .testCircle, #serviceIcon .uiDesignIcon .uiDesignCircle, #serviceIcon .helpIcon .helpCircle, #serviceIcon .biReportIcon .biReportCircle,#serviceIcon .gameIcon .gameCircle').removeClass('activeDetails');
    $('#serviceIcon .productIcon .productLine, #serviceIcon .internetIcon .internetLine, #serviceIcon .mobileIcon .mobileLine, #serviceIcon .webIcon .webLine, #serviceIcon .cloudIcon .cloudLine, #serviceIcon .bigDataIcon .bigdataLine, #serviceIcon .infraIcon .infraLine, #serviceIcon .testIcon .testLine, #serviceIcon .uiDesignIcon .uiDesignLine, #serviceIcon .helpIcon .helpLine, #serviceIcon .biReportIcon .biReportLine,#serviceIcon .gameIcon .gameLine').removeClass('activeDetails');
    $('#serviceIcon .productIcon .productDetails, #serviceIcon .internetIcon .internetDetails, #serviceIcon .mobileIcon .mobileDetails, #serviceIcon .webIcon .webDetails, #serviceIcon .cloudIcon .cloudDetails, #serviceIcon .bigDataIcon .bigdataDetails, #serviceIcon .infraIcon .infraDetails, #serviceIcon .testIcon .testDetails, #serviceIcon .uiDesignIcon .uiDesignDetails, #serviceIcon .helpIcon .helpDetails, #serviceIcon .biReportIcon .biReportDetails,#serviceIcon .gameIcon .gamification').removeClass('activeFont');


    $('#provideinformation #provideP').hide().html('Leverage a wide range of mobile solutions across all the major platforms:<br/>iOS, Android and Windows.').fadeIn(500);
    $('#provideinformation #numberProvider').hide().html('30+').fadeIn(500);
    $('#provideinformation #totalResource').hide().html('700').fadeIn(500);

    $('#features').css("padding-bottom", "0px");
    $('#overView').css("padding-bottom", "128px");
    $('#overView #overViewData').hide().html('Power your organization with a comprehensive range of Enterprise solutions:').fadeIn(500);
    $('#features #servicepNumber').hide().html('itx-sp:8888').fadeIn(500);

    $('#overView #ul1 #item1').hide().html('Experience in Enterprise 3.0 architecture').fadeIn(500);
    $('#overView #ul1 #item2').hide().html('In-depth expertise in Enterprise App solutions: SAP, Oracle, Siebel').fadeIn(500);
    $('#overView #ul1 #item3').hide().html('Experience in SaaS based enterprise and CRM solution: Salesforce').fadeIn(500);
    $('#overView #ul1 #item4').hide().html('Strong Experience in System and Cross-Platform Integration ').fadeIn(500);
    $('#overView #ul1 #item5').hide();

    $('#overView #research a').hide().html('&#60;Links to articles, websites, blogs from the Content Hub section&#62;').fadeIn(500);

    $('#overView #ul2 #item1').hide().html('&#60;X&#62; specialized providers of Enterprise solutions').fadeIn(500);
    $('#overView #ul2 #item2').hide().html('Over &#60;y&#62; resources across SAP, Oracle, Salesforce').fadeIn(500);
    $('#overView #ul2 #item3').hide().html('Cross-platform expertise including Mobile and Cloud based enterprise solutions').fadeIn(500);
    $('#overView #ul2 #item4').hide();
    $('#overView #ul2 #item5').hide();

    $('#overView #success a').hide().html('&#60;Links to relevant case study from the Case Studies section&#62;').fadeIn(500);


    $('#features #featuresP').hide().html('Our certified service providers<br>help you consolidate your digital footprints<br>by supporting a wide range of web<br>solutions your digital footprints by supporting<br>a wide range of web solutions').fadeIn(500);

    $('#features #keyInd').hide().html('Key Industry &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keyInddata').hide().html(' Technology').fadeIn(500);

    $('#features #empStgth').hide().html('Employee Strength &nbsp; <span>:</span>').fadeIn(500);
    $('#features #empStgthdata').hide().html(' Lorem Ipsum').fadeIn(500);

    $('#features #keyskl').hide().html('Key Skills &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keyskldata').hide().html(' 3 skills').fadeIn(500);

    $('#features #awards').hide().html('Awards &nbsp; <span>:</span>').fadeIn(500);
    $('#features #awardsdata').hide().html(' 2nd June 1988').fadeIn(500);

    $('#features #found').hide().html('Founded &nbsp; <span>:</span>').fadeIn(500);
    $('#features #founddata').hide().html(' Lorem ipsum').fadeIn(500);

    $('#features #keysrs').hide().html('Key Services &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keysrsdata').hide().html(' Lorem ipsum  ').fadeIn(500);



});




$('#serviceIcon .productIcon').click(function() {
	history.replaceState('', '', newURL + '/product');
    $('#serviceIcon .mobileIcon .mobile').removeClass('activeGreen');
    $('#serviceIcon .webIcon .web').removeClass('activeGreenWeb');
    $('#serviceIcon .cloudIcon .cloud').removeClass('activeGreenCloud');
    $('#serviceIcon .bigDataIcon .bigData').removeClass('activeGreenBigdata');
    $('#serviceIcon .enterpriseIcon .enterprise').removeClass('activeGreenEnterprise');
    $('#serviceIcon .internetIcon .internet').removeClass('activeGreenInternet');

    $('#serviceIcon .infraIcon .infra').removeClass('activeGreenInfra');
    $('#serviceIcon .testIcon .test').removeClass('activeGreenTest');
    $('#serviceIcon .uiDesignIcon .uiDesign').removeClass('activeGreenUiDesign');
    $('#serviceIcon .helpIcon .help').removeClass('activeGreenHelp');
    $('#serviceIcon .biReportIcon .biReport').removeClass('activeGreenBiReport');
    $('#serviceIcon .gameIcon .game').removeClass('activeGreenGame');

    $('#serviceIcon .productIcon .product').addClass('activeGreenProduct');
    $('#serviceIcon .productIcon .productCircle').addClass('activeDetails');
    $('#serviceIcon .productIcon .productDetails').addClass('activeFont');
    $('#serviceIcon .productIcon .productLine').addClass('activeDetails');

    $('#serviceIcon .enterpriseIcon .enterpriseCircle, #serviceIcon .internetIcon .internetCircle, #serviceIcon .mobileIcon .mobileCircle, #serviceIcon .webIcon .webCircle, #serviceIcon .cloudIcon .cloudCircle, #serviceIcon .bigDataIcon .bigdataCircle, #serviceIcon .infraIcon .infraCircle, #serviceIcon .testIcon .testCircle, #serviceIcon .uiDesignIcon .uiDesignCircle, #serviceIcon .helpIcon .helpCircle, #serviceIcon .biReportIcon .biReportCircle,#serviceIcon .gameIcon .gameCircle').removeClass('activeDetails');
    $('#serviceIcon .enterpriseIcon .enterpriseLine, #serviceIcon .internetIcon .internetLine, #serviceIcon .mobileIcon .mobileLine, #serviceIcon .webIcon .webLine, #serviceIcon .cloudIcon .cloudLine, #serviceIcon .bigDataIcon .bigdataLine, #serviceIcon .infraIcon .infraLine, #serviceIcon .testIcon .testLine, #serviceIcon .uiDesignIcon .uiDesignLine, #serviceIcon .helpIcon .helpLine, #serviceIcon .biReportIcon .biReportLine,#serviceIcon .gameIcon .gameLine').removeClass('activeDetails');
    $('#serviceIcon .enterpriseIcon .enterpriseDetails, #serviceIcon .internetIcon .internetDetails, #serviceIcon .mobileIcon .mobileDetails, #serviceIcon .webIcon .webDetails, #serviceIcon .cloudIcon .cloudDetails, #serviceIcon .bigDataIcon .bigdataDetails, #serviceIcon .infraIcon .infraDetails, #serviceIcon .testIcon .testDetails, #serviceIcon .uiDesignIcon .uiDesignDetails, #serviceIcon .helpIcon .helpDetails, #serviceIcon .biReportIcon .biReportDetails,#serviceIcon .gameIcon .gamification').removeClass('activeFont');


    $('#provideinformation #provideP').hide().html('Leverage a wide range of mobile solutions across all the major platforms:<br/>iOS, Android and Windows.').fadeIn(500);
    $('#provideinformation #numberProvider').hide().html('30+').fadeIn(500);
    $('#provideinformation #totalResource').hide().html('700').fadeIn(500);

    $('#features').css("padding-bottom", "0px");
    $('#overView').css("padding-bottom", "128px");
    $('#overView #overViewData').hide().html('Power your organization with a comprehensive range of Enterprise solutions:').fadeIn(500);
    $('#features #servicepNumber').hide().html('itx-sp:8888').fadeIn(500);

    $('#overView #ul1 #item1').hide().html('Experience in Enterprise 3.0 architecture').fadeIn(500);
    $('#overView #ul1 #item2').hide().html('In-depth expertise in Enterprise App solutions: SAP, Oracle, Siebel').fadeIn(500);
    $('#overView #ul1 #item3').hide().html('Experience in SaaS based enterprise and CRM solution: Salesforce').fadeIn(500);
    $('#overView #ul1 #item4').hide().html('Strong Experience in System and Cross-Platform Integration ').fadeIn(500);
    $('#overView #ul1 #item5').hide();

    $('#overView #research a').hide().html('&#60;Links to articles, websites, blogs from the Content Hub section&#62;').fadeIn(500);

    $('#overView #ul2 #item1').hide().html('&#60;X&#62; specialized providers of Enterprise solutions').fadeIn(500);
    $('#overView #ul2 #item2').hide().html('Over &#60;y&#62; resources across SAP, Oracle, Salesforce').fadeIn(500);
    $('#overView #ul2 #item3').hide().html('Cross-platform expertise including Mobile and Cloud based enterprise solutions').fadeIn(500);
    $('#overView #ul2 #item4').hide();
    $('#overView #ul2 #item5').hide();

    $('#overView #success a').hide().html('&#60;Links to relevant case study from the Case Studies section&#62;').fadeIn(500);


    $('#features #featuresP').hide().html('Our certified service providers<br>help you consolidate your digital footprints<br>by supporting a wide range of web<br>solutions your digital footprints by supporting<br>a wide range of web solutions').fadeIn(500);

    $('#features #keyInd').hide().html('Key Industry &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keyInddata').hide().html(' Technology').fadeIn(500);

    $('#features #empStgth').hide().html('Employee Strength &nbsp; <span>:</span>').fadeIn(500);
    $('#features #empStgthdata').hide().html(' Lorem Ipsum').fadeIn(500);

    $('#features #keyskl').hide().html('Key Skills &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keyskldata').hide().html(' 3 skills').fadeIn(500);

    $('#features #awards').hide().html('Awards &nbsp; <span>:</span>').fadeIn(500);
    $('#features #awardsdata').hide().html(' 2nd June 1988').fadeIn(500);

    $('#features #found').hide().html('Founded &nbsp; <span>:</span>').fadeIn(500);
    $('#features #founddata').hide().html(' Lorem ipsum').fadeIn(500);

    $('#features #keysrs').hide().html('Key Services &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keysrsdata').hide().html(' Lorem ipsum  ').fadeIn(500);



});


$('#serviceIcon .internetIcon').click(function() {
	history.replaceState('', '', newURL + '/marketing');
    $('#serviceIcon .mobileIcon .mobile').removeClass('activeGreen');
    $('#serviceIcon .webIcon .web').removeClass('activeGreenWeb');
    $('#serviceIcon .cloudIcon .cloud').removeClass('activeGreenCloud');
    $('#serviceIcon .bigDataIcon .bigData').removeClass('activeGreenBigdata');
    $('#serviceIcon .productIcon .product').removeClass('activeGreenProduct');
    $('#serviceIcon .enterpriseIcon .enterprise').removeClass('activeGreenEnterprise');


    $('#serviceIcon .infraIcon .infra').removeClass('activeGreenInfra');
    $('#serviceIcon .testIcon .test').removeClass('activeGreenTest');
    $('#serviceIcon .uiDesignIcon .uiDesign').removeClass('activeGreenUiDesign');
    $('#serviceIcon .helpIcon .help').removeClass('activeGreenHelp');
    $('#serviceIcon .biReportIcon .biReport').removeClass('activeGreenBiReport');
    $('#serviceIcon .gameIcon .game').removeClass('activeGreenGame');

    $('#serviceIcon .internetIcon .internet').addClass('activeGreenInternet');
    $('#serviceIcon .internetIcon .internetCircle').addClass('activeDetails');
    $('#serviceIcon .internetIcon .internetDetails').addClass('activeFont');
    $('#serviceIcon .internetIcon .internetLine').addClass('activeDetails');

    $('#serviceIcon .productIcon .productCircle, #serviceIcon .enterpriseIcon .enterpriseCircle, #serviceIcon .mobileIcon .mobileCircle, #serviceIcon .webIcon .webCircle, #serviceIcon .cloudIcon .cloudCircle, #serviceIcon .bigDataIcon .bigdataCircle, #serviceIcon .infraIcon .infraCircle, #serviceIcon .testIcon .testCircle, #serviceIcon .uiDesignIcon .uiDesignCircle, #serviceIcon .helpIcon .helpCircle, #serviceIcon .biReportIcon .biReportCircle,#serviceIcon .gameIcon .gameCircle').removeClass('activeDetails');
    $('#serviceIcon .productIcon .productLine, #serviceIcon .enterpriseIcon .enterpriseLine, #serviceIcon .mobileIcon .mobileLine, #serviceIcon .webIcon .webLine, #serviceIcon .cloudIcon .cloudLine, #serviceIcon .bigDataIcon .bigdataLine, #serviceIcon .infraIcon .infraLine, #serviceIcon .testIcon .testLine, #serviceIcon .uiDesignIcon .uiDesignLine, #serviceIcon .helpIcon .helpLine, #serviceIcon .biReportIcon .biReportLine,#serviceIcon .gameIcon .gameLine').removeClass('activeDetails');
    $('#serviceIcon .productIcon .productDetails, #serviceIcon .enterpriseIcon .enterpriseDetails, #serviceIcon .mobileIcon .mobileDetails, #serviceIcon .webIcon .webDetails, #serviceIcon .cloudIcon .cloudDetails, #serviceIcon .bigDataIcon .bigdataDetails, #serviceIcon .infraIcon .infraDetails, #serviceIcon .testIcon .testDetails, #serviceIcon .uiDesignIcon .uiDesignDetails, #serviceIcon .helpIcon .helpDetails, #serviceIcon .biReportIcon .biReportDetails,#serviceIcon .gameIcon .gamification').removeClass('activeFont');


    $('#provideinformation #provideP').hide().html('Leverage a wide range of mobile solutions across all the major platforms:<br/>iOS, Android and Windows.').fadeIn(500);
    $('#provideinformation #numberProvider').hide().html('30+').fadeIn(500);
    $('#provideinformation #totalResource').hide().html('700').fadeIn(500);

    $('#features').css("padding-bottom", "0px");
    $('#overView').css("padding-bottom", "128px");
    $('#overView #overViewData').hide().html('Power your organization with a comprehensive range of Enterprise solutions:').fadeIn(500);
    $('#features #servicepNumber').hide().html('itx-sp:8888').fadeIn(500);

    $('#overView #ul1 #item1').hide().html('Experience in Enterprise 3.0 architecture').fadeIn(500);
    $('#overView #ul1 #item2').hide().html('In-depth expertise in Enterprise App solutions: SAP, Oracle, Siebel').fadeIn(500);
    $('#overView #ul1 #item3').hide().html('Experience in SaaS based enterprise and CRM solution: Salesforce').fadeIn(500);
    $('#overView #ul1 #item4').hide().html('Strong Experience in System and Cross-Platform Integration ').fadeIn(500);
    $('#overView #ul1 #item5').hide();

    $('#overView #research a').hide().html('&#60;Links to articles, websites, blogs from the Content Hub section&#62;').fadeIn(500);

    $('#overView #ul2 #item1').hide().html('&#60;X&#62; specialized providers of Enterprise solutions').fadeIn(500);
    $('#overView #ul2 #item2').hide().html('Over &#60;y&#62; resources across SAP, Oracle, Salesforce').fadeIn(500);
    $('#overView #ul2 #item3').hide().html('Cross-platform expertise including Mobile and Cloud based enterprise solutions').fadeIn(500);
    $('#overView #ul2 #item4').hide();
    $('#overView #ul2 #item5').hide();

    $('#overView #success a').hide().html('&#60;Links to relevant case study from the Case Studies section&#62;').fadeIn(500);


    $('#features #featuresP').hide().html('Our certified service providers<br>help you consolidate your digital footprints<br>by supporting a wide range of web<br>solutions your digital footprints by supporting<br>a wide range of web solutions').fadeIn(500);

    $('#features #keyInd').hide().html('Key Industry &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keyInddata').hide().html(' Technology').fadeIn(500);

    $('#features #empStgth').hide().html('Employee Strength &nbsp; <span>:</span>').fadeIn(500);
    $('#features #empStgthdata').hide().html(' Lorem Ipsum').fadeIn(500);

    $('#features #keyskl').hide().html('Key Skills &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keyskldata').hide().html(' 3 skills').fadeIn(500);

    $('#features #awards').hide().html('Awards &nbsp; <span>:</span>').fadeIn(500);
    $('#features #awardsdata').hide().html(' 2nd June 1988').fadeIn(500);

    $('#features #found').hide().html('Founded &nbsp; <span>:</span>').fadeIn(500);
    $('#features #founddata').hide().html(' Lorem ipsum').fadeIn(500);

    $('#features #keysrs').hide().html('Key Services &nbsp; <span>:</span>').fadeIn(500);
    $('#features #keysrsdata').hide().html(' Lorem ipsum  ').fadeIn(500);



});

/*how it works section*/

$('#howItworksIconLine .processIcon').click(function() {
    history.replaceState('', '', newURL + '/process');
	$('#howItworksIconLine .projectMonIcon #projectMonBG').removeClass('activeGreenProjectMon');
    $('#howItworksIconLine .ourPrIcon #ourPrBG').removeClass('activeGreenOurPr');
    $('#howItworksIconLine .serviceProIcon #serviceProBG').removeClass('activeGreenServicePro');

    $('#howItworksIconLine .processIcon #processBG').addClass('activeGreenProcess');
    $('#howItworksIconLine .processIcon #processCap').addClass('activeFont');
    $('#howItworksIconLine .processIcon #processCir').addClass('activeDetails');
    $('#howItworksIconLine .processIcon #processLn').addClass('activeDetails');

    $('#howItworksIconLine .projectMonIcon #projectMonCir, #howItworksIconLine .ourPrIcon #ourPrCir, #howItworksIconLine .serviceProIcon #serviceProCir').removeClass('activeDetails');
    $('#howItworksIconLine .projectMonIcon #projectMonLn, #howItworksIconLine .ourPrIcon #ourPrLn, #howItworksIconLine .serviceProIcon #serviceProLn').removeClass('activeDetails');
    $('#howItworksIconLine .projectMonIcon #projectMonCap, #howItworksIconLine .ourPrIcon #ourPrCap, #howItworksIconLine .serviceProIcon #serviceProCap').removeClass('activeFont');

    $('#howItworksIconLine #pricing').hide();
    $('#howItworksIconLine #projectMonitoring').hide();
    $('#howItworksIconLine #compareTable').hide();
    $('#howItworksIconLine #serviceProviderP').hide();
    $('#howItworksIconLine #serviceProvider').hide();
    $('#howItworksIconLine #ourProcessData').hide().fadeIn(500);
    $('#howItworksIconLine .linelong').hide();
});

$('#howItworksIconLine .projectMonIcon').click(function() {
	history.replaceState('', '', newURL + '/monitoring');
	$('#howItworksIconLine .processIcon #processBG').removeClass('activeGreenProcess');
    $('#howItworksIconLine .ourPrIcon #ourPrBG').removeClass('activeGreenOurPr');
    $('#howItworksIconLine .serviceProIcon #serviceProBG').removeClass('activeGreenServicePro');
    $('#howItworksIconLine .projectMonIcon #projectMonBG').addClass('activeGreenProjectMon');
    $('#howItworksIconLine .projectMonIcon #projectMonCap').addClass('activeFont');
    $('#howItworksIconLine .projectMonIcon #projectMonCir').addClass('activeDetails');
    $('#howItworksIconLine .projectMonIcon #projectMonLn').addClass('activeDetails');
    $('#howItworksIconLine .processIcon #processCir, #howItworksIconLine .ourPrIcon #ourPrCir, #howItworksIconLine .serviceProIcon #serviceProCir').removeClass('activeDetails');
    $('#howItworksIconLine .processIcon #processLn, #howItworksIconLine .ourPrIcon #ourPrLn, #howItworksIconLine .serviceProIcon #serviceProLn').removeClass('activeDetails');
    $('#howItworksIconLine .processIcon #processCap, #howItworksIconLine .ourPrIcon #ourPrCap, #howItworksIconLine .serviceProIcon #serviceProCap').removeClass('activeFont');
    $('#howItworksIconLine #pricing').hide();
    $('#howItworksIconLine #projectMonitoring').hide().fadeIn(500);
    $('#howItworksIconLine #compareTable').hide().fadeIn(500);
    $('#howItworksIconLine #serviceProviderP').hide();
    $('#howItworksIconLine #serviceProvider').hide();
    $('#howItworksIconLine #ourProcessData').hide();
    $('#howItworksIconLine .linelong').hide();
});


$('#howItworksIconLine .ourPrIcon').click(function() {
	history.replaceState('', '', newURL + '/pricing');
	$('#howItworksIconLine .processIcon #processBG').removeClass('activeGreenProcess');
    $('#howItworksIconLine .projectMonIcon #projectMonBG').removeClass('activeGreenProjectMon');
    $('#howItworksIconLine .serviceProIcon #serviceProBG').removeClass('activeGreenServicePro');
    $('#howItworksIconLine .ourPrIcon #ourPrBG').addClass('activeGreenOurPr');
    $('#howItworksIconLine .ourPrIcon #ourPrCap').addClass('activeFont');
    $('#howItworksIconLine .ourPrIcon #ourPrCir').addClass('activeDetails');
    $('#howItworksIconLine .ourPrIcon #ourPrLn').addClass('activeDetails');

    $('#howItworksIconLine .processIcon #processCir, #howItworksIconLine .projectMonIcon #projectMonCir, #howItworksIconLine .serviceProIcon #serviceProCir').removeClass('activeDetails');
    $('#howItworksIconLine .processIcon #processLn, #howItworksIconLine .projectMonIcon #projectMonLn, #howItworksIconLine .serviceProIcon #serviceProLn').removeClass('activeDetails');
    $('#howItworksIconLine .processIcon #processCap, #howItworksIconLine .projectMonIcon #projectMonCap, #howItworksIconLine .serviceProIcon #serviceProCap').removeClass('activeFont');

    $('#howItworksIconLine #pricing').hide().fadeIn(500);
    $('#howItworksIconLine #projectMonitoring').hide();
    $('#howItworksIconLine #compareTable').hide();
    $('#howItworksIconLine #serviceProviderP').hide();
    $('#howItworksIconLine #serviceProvider').hide();
    $('#howItworksIconLine #ourProcessData').hide();
    $('#howItworksIconLine .linelong').hide().fadeIn(500);
});


$('#howItworksIconLine .serviceProIcon').click(function() {
    history.replaceState('', '', newURL + '/evalution');
	$('#howItworksIconLine .processIcon #processBG').removeClass('activeGreenProcess');
    $('#howItworksIconLine .projectMonIcon #projectMonBG').removeClass('activeGreenProjectMon');
    $('#howItworksIconLine .ourPrIcon #ourPrBG').removeClass('activeGreenOurPr');

    $('#howItworksIconLine .serviceProIcon #serviceProBG').addClass('activeGreenServicePro');
    $('#howItworksIconLine .serviceProIcon #serviceProCap').addClass('activeFont');
    $('#howItworksIconLine .serviceProIcon #serviceProCir').addClass('activeDetails');
    $('#howItworksIconLine .serviceProIcon #serviceProLn').addClass('activeDetails');

    $('#howItworksIconLine .processIcon #processCir, #howItworksIconLine .projectMonIcon #projectMonCir, #howItworksIconLine .ourPrIcon #ourPrCir').removeClass('activeDetails');
    $('#howItworksIconLine .processIcon #processLn, #howItworksIconLine .projectMonIcon #projectMonLn, #howItworksIconLine .ourPrIcon #ourPrLn').removeClass('activeDetails');
    $('#howItworksIconLine .processIcon #processCap, #howItworksIconLine .projectMonIcon #projectMonCap, #howItworksIconLine .ourPrIcon #ourPrCap').removeClass('activeFont');

    $('#howItworksIconLine #pricing').hide();
    $('#howItworksIconLine #projectMonitoring').hide();
    $('#howItworksIconLine #compareTable').hide();
    $('#howItworksIconLine #serviceProviderP').hide().fadeIn(500);
    $('#howItworksIconLine #serviceProvider').hide().fadeIn(500);
    $('#howItworksIconLine #ourProcessData').hide();
    $('#howItworksIconLine .linelong').hide();
});


$(window).load(function() {
    $('#howItworksIconLine #pricing').hide();
    $('#howItworksIconLine .linelong').hide();
    $('#howItworksIconLine #projectMonitoring').hide();
    $('#howItworksIconLine #compareTable').hide();
    $('#howItworksIconLine #serviceProviderP').hide();
    $('#howItworksIconLine #serviceProvider').hide();
});

if (width < 551) {
    var sid = 4;
    $('#howItworksIconLine #leftButton').click(function() {
        $('#' + sid).hide().removeClass('act');
        sid = sid - 1;
        if (sid == 0) {
            sid = 4;
        }
        $('#' + sid).fadeIn(1000).addClass("act");
    });
    $('#howItworksIconLine #rightButton').click(function() {
        $('#' + sid).hide().removeClass('act');
        sid = sid + 1;
        if (sid == 5) {
            sid = 1;
        }
        $('#' + sid).fadeIn(1000).addClass("act");
    });
}




$('#perspectives .blogIcon').click(function() {
    history.replaceState('', '', newURL + '/blog');
    $('#perspectives .blogIcon #blogBG').addClass('activeGreenBlog');
    $('#perspectives .blogIcon #blogCap').addClass('activeFont');
    $('#perspectives .blogIcon #blogCir').addClass('activeDetails');
    $('#perspectives .blogIcon #blogLn').addClass('activeDetails');

    $('#perspectives .whitepprIcon #whitepprBG').removeClass('activeGreenWhitePaper');
    $('#perspectives .whitepprIcon #whitepprCap').removeClass('activeFont');
    $('#perspectives .whitepprIcon #whitepprCir').removeClass('activeDetails');
    $('#perspectives .whitepprIcon #whitepprLn').removeClass('activeDetails');

    $('#perspectives #blogBody').hide().fadeIn(0);
    $('#perspectives #whitepprBody').hide();
});


$('#perspectives .whitepprIcon').click(function() {
    history.replaceState('', '', newURL + '/whitepapers');
    $('#perspectives .blogIcon #blogBG').removeClass('activeGreenBlog');
    $('#perspectives .blogIcon #blogCap').removeClass('activeFont');
    $('#perspectives .blogIcon #blogCir').removeClass('activeDetails');
    $('#perspectives .blogIcon #blogLn').removeClass('activeDetails');
    $('#perspectives .whitepprIcon #whitepprBG').addClass('activeGreenWhitePaper');
    $('#perspectives .whitepprIcon #whitepprCap').addClass('activeFont');
    $('#perspectives .whitepprIcon #whitepprCir').addClass('activeDetails');
    $('#perspectives .whitepprIcon #whitepprLn').addClass('activeDetails');

    $('#perspectives #blogBody').hide()
    $('#perspectives #whitepprBody').hide().fadeIn(0);
    
});

var perspectivesid = 2;
$('#perspectives #leftButton').click(function() {
    $('#' + perspectivesid).hide().removeClass('act');
    perspectivesid = perspectivesid - 1;
    if (perspectivesid == 0) {
        perspectivesid = 2;
    }
    $('#' + perspectivesid).fadeIn(1000).addClass("act");
});

$('#perspectives #rightButton').click(function() {
    $('#' + perspectivesid).hide().removeClass('act');
    perspectivesid = perspectivesid + 1;
    if (perspectivesid == 3) {
        perspectivesid = 1;
    }
    $('#' + perspectivesid).fadeIn(1000).addClass("act");
});

/* --------------------------------------------success stories section js-----------------------------------------------------*/


var leftssid = 7;
var rightssid = 3;
if (width > 550) {
    /*var lowestId=1;
		var iconsList = new Array();
		$(function() {
			$(".iconList").each( function() {
				iconsList.push(this)
			});
		});*/
    $('#successStoriesIcon #leftButton').click(function(e) {
        /*var firstElement =  iconsList[0]
			 var secondElement= iconsList[1]
			 $('#'+$(firstElement).attr('id')).removeClass('act');
			 $('#'+$(secondElement).attr('id')).css("margin-left","0%");
			 var  topFiveIconList = iconsList.slice(0,6)
			 $('#'+$(topFiveIconList[topFiveIconList.length-1]).attr('id')).addClass('act')
			 iconsList.push(iconsList.shift())
			 console.log(iconsList)*/
        if (leftssid == 6 && rightssid == 2) {
            $('#successStoriesIcon #leftButton').attr("disabled", "disabled").css({
                cursor: "disabled"
            }).fadeTo(500, 0.1);
            e.preventDefault();

        }
        if (leftssid == 5 && rightssid == 1) {
            l
            eftssid = 5;
            rightssid = 1;
            return;
        } else {
            $('#successStoriesIcon #rightButton').attr("enabled", "enabled").css({
                cursor: "pointer"
            }).fadeTo(500, 1);
            e.preventDefault();

            rightssid = rightssid - 1;
            $('#' + rightssid).show(450).addClass('act');

            $('#' + leftssid).hide(0).removeClass('act').show(0).addClass('act').removeClass('act').hide(200);
            leftssid = leftssid - 1;



        }

    });

    $(window).load(function(e) {
        $('#successStoriesIcon #leftButton').css({
            cursor: "pointer"
        });
        e.preventDefault();
        if (leftssid == 7 && rightssid == 3) {
            $('#successStoriesIcon #rightButton').attr("disabled", "disabled").css({
                cursor: "disabled"
            }).fadeTo(500, 0.1);
            $('#successStoriesIcon #leftButton').css({
                cursor: "pointer"
            });
            e.preventDefault();
        }
    });

    $('#successStoriesIcon #rightButton').click(function(e) {
        if (leftssid == 6 && rightssid == 2) {
            $('#successStoriesIcon #rightButton').attr("disabled", "disabled").css({
                cursor: "disabled"
            }).fadeTo(500, 0.1);
            $('#successStoriesIcon #leftButton').attr("enabled", "enabled").css({
                cursor: "pointer"
            }).fadeTo(500, 1);
            e.preventDefault();
        }

        if (leftssid == 7 && rightssid == 3) {
            leftssid = 7;
            rightssid = 3;
            e.preventDefault();
            return;
        } else {
            $('#successStoriesIcon #leftButton').attr("enabled", "enabled").css({
                cursor: "pointer"
            }).fadeTo(500, 1);
            e.preventDefault();
            leftssid = leftssid + 1;
            $('#' + leftssid).show(350).addClass('act');


            $('#' + rightssid).hide(0).removeClass('act');
            rightssid = rightssid + 1;
        }
    });
} else {
    $('#successStoriesIcon #leftButton').click(function() {
        $('#' + leftssid).hide().removeClass('act');
        leftssid = leftssid - 1;
        if (leftssid == 0) {
            leftssid = 7;
        }
        $('#' + leftssid).fadeIn(1000).addClass("act");


    });
    $('#successStoriesIcon #rightButton').click(function() {

        $('#' + leftssid).hide().removeClass('act');

        leftssid = leftssid + 1;
        if (leftssid == 8) {
            leftssid = 1;
        }
        $('#' + leftssid).fadeIn(1000).addClass("act");

    });


}


$('#successStoriesIcon .healthcareIcon').click(function() {
		history.replaceState('', '', newURL + '/healthcare');
        $('#successStoriesIcon .travelIcon .travel').removeClass('activeGreenTravel');
        $('#successStoriesIcon .internetItIcon .internetIt').removeClass('activeGreenInternetIt');
        $('#successStoriesIcon .mediaIcon .media').removeClass('activeGreenMedia');
        $('#successStoriesIcon .agricultureIcon .agriculture').removeClass('activeGreenAgriculture');
        $('#successStoriesIcon .hotelIcon .hotel').removeClass('activeGreenHotel');
        $('#successStoriesIcon .designIcon .design').removeClass('activeGreenDesign');

        $('#successStoriesIcon .healthcareIcon .healthcare').addClass('activeGreenHealthcare');
        $('#successStoriesIcon .healthcareIcon .healthcareCircle').addClass('activeDetails');
        $('#successStoriesIcon .healthcareIcon .healthcareDetails').addClass('activeFont');
        $('#successStoriesIcon .healthcareIcon .healthcareLine').addClass('activeDetails');


        $('#successStoriesIcon .travelIcon .travelDetails, #successStoriesIcon .internetItIcon .internetItDetails, #successStoriesIcon .mediaIcon .mediaDetails, #successStoriesIcon .agricultureIcon .agricultureDetails, #successStoriesIcon .hotelIcon .hotelDetails, #successStoriesIcon .designIcon .designDetails').removeClass('activeFont');
        $('#successStoriesIcon .travelIcon .travelLine, #successStoriesIcon .internetItIcon .internetItLine, #successStoriesIcon .mediaIcon .mediaLine, #successStoriesIcon .agricultureIcon .agricultureLine, #successStoriesIcon .hotelIcon .hotelLine, #successStoriesIcon .designIcon .designLine ').removeClass('activeDetails');
        $('#successStoriesIcon .travelIcon .travelCircle, #successStoriesIcon .internetItIcon .internetItCircle, #successStoriesIcon .mediaIcon .mediaCircle, #successStoriesIcon .agricultureIcon .agricultureCircle, #successStoriesIcon .hotelIcon .hotelCircle, #successStoriesIcon .designIcon .designCircle ').removeClass('activeDetails');

        $('#testimonial #data #clientImg').hide().attr('src', imageURL+"clientImg.jpg").fadeIn(500);
        $('#testimonial #data #byertstmnl').hide().html('In the past, I have outsourced work to many offshorelocations. Of late, I was facing<br>challenges in terms of quality and my latest experience, with an East European provider,<br>was less than positive. A friend recommended IT Exchange to me.<i></i><p class="col-md-12 col-xs-12"> Nishka, CEO, XYZ Company</p>').fadeIn(500);
        $('#aboutBuyer #about').hide().html('Captain Marketing, based out of the California region,<br>is a midsized internet marketing company that caters to<br>SOHO / Local businesses in the US').fadeIn(500);
        $('#aboutBuyer #businessScenario').hide().html('Captain Marketing required an agile IT partner<br>which can seamlessly collaborate with its internal<br>IT team. It already had a less than favorable<br>outsourcing experience and was grappling with a huge<br>IT stack with no documentation. Its key challenge was<br>finding the right partner who would support its IT<br>requirements and provide a professionally managed<br>outsourcing ecosystem.').fadeIn(500);
        $('#aboutBuyer #howHelped').hide().html('We helped Captain Marketing connect with the right<br>service provider through an intensively managed<br>bidding process We provided full support in the<br>outsourcing cycle including the contract process, vendor<br>on-boarding, project kickoff and ongoing engagement<br>management').fadeIn(500);
        $('#aboutBuyer #ul #item1').hide().html('Seamless transition from existing vendors ensuring<br>no impact to production.').fadeIn(500);
        $('#aboutBuyer #ul #item2').hide().html('Cost optimization by over 20%.').fadeIn(500);
        $('#aboutBuyer #ul #item3').hide().html('Accelerated delivery ensuring high impact results being<br>delivered within 3 months.').fadeIn(500);
        $('#aboutBuyer #ul #item4').hide().html("Access to an integrated ecosystem of suppliers which could<br>support Captain Marketing's digital marketing initiatives.").fadeIn(500);
        $('.storiesVerticalLine').hide().fadeIn(700);
    });

$('#successStoriesIcon .travelIcon').click(function() {
    history.replaceState('', '', newURL + '/travel');
    $('#successStoriesIcon .healthcareIcon .healthcare').removeClass('activeGreenHealthcare');
    $('#successStoriesIcon .internetItIcon .internetIt').removeClass('activeGreenInternetIt');
    $('#successStoriesIcon .mediaIcon .media').removeClass('activeGreenMedia');
    $('#successStoriesIcon .agricultureIcon .agriculture').removeClass('activeGreenAgriculture');
    $('#successStoriesIcon .hotelIcon .hotel').removeClass('activeGreenHotel');
    $('#successStoriesIcon .designIcon .design').removeClass('activeGreenDesign');

    $('#successStoriesIcon .travelIcon .travel').addClass('activeGreenTravel');
    $('#successStoriesIcon .travelIcon .travelCircle').addClass('activeDetails');
    $('#successStoriesIcon .travelIcon .travelDetails').addClass('activeFont');
    $('#successStoriesIcon .travelIcon .travelLine').addClass('activeDetails');


    $('#successStoriesIcon .healthcareIcon .healthcareDetails, #successStoriesIcon .internetItIcon .internetItDetails, #successStoriesIcon .mediaIcon .mediaDetails, #successStoriesIcon .agricultureIcon .agricultureDetails, #successStoriesIcon .hotelIcon .hotelDetails, #successStoriesIcon .designIcon .designDetails').removeClass('activeFont');
    $('#successStoriesIcon .healthcareIcon .healthcareLine, #successStoriesIcon .internetItIcon .internetItLine, #successStoriesIcon .mediaIcon .mediaLine, #successStoriesIcon .agricultureIcon .agricultureLine, #successStoriesIcon .hotelIcon .hotelLine, #successStoriesIcon .designIcon .designLine ').removeClass('activeDetails');
    $('#successStoriesIcon .healthcareIcon .healthcareCircle, #successStoriesIcon .internetItIcon .internetItCircle, #successStoriesIcon .mediaIcon .mediaCircle, #successStoriesIcon .agricultureIcon .agricultureCircle, #successStoriesIcon .hotelIcon .hotelCircle, #successStoriesIcon .designIcon .designCircle ').removeClass('activeDetails');


    $('#testimonial #data #clientImg').hide().attr('src', imageURL+"clientImg.jpg").fadeIn(500);
    $('#testimonial #data #byertstmnl').hide().html('In the past, I have outsourced work to many offshorelocations. Of late, I was facing<br>challenges in terms of quality and my latest experience, with an East European provider,<br>was less than positive. A friend recommended IT Exchange to me.<i></i><p class="col-md-12 col-xs-12"> Nishka, CEO, XYZ Company</p>').fadeIn(500);
    $('#aboutBuyer #about').hide().html('Captain Marketing, based out of the California region,<br>is a midsized internet marketing company that caters to<br>SOHO / Local businesses in the US').fadeIn(500);
    $('#aboutBuyer #businessScenario').hide().html('Captain Marketing required an agile IT partner<br>which can seamlessly collaborate with its internal<br>IT team. It already had a less than favorable<br>outsourcing experience and was grappling with a huge<br>IT stack with no documentation. Its key challenge was<br>finding the right partner who would support its IT<br>requirements and provide a professionally managed<br>outsourcing ecosystem.').fadeIn(500);
    $('#aboutBuyer #howHelped').hide().html('We helped Captain Marketing connect with the right<br>service provider through an intensively managed<br>bidding process We provided full support in the<br>outsourcing cycle including the contract process, vendor<br>on-boarding, project kickoff and ongoing engagement<br>management').fadeIn(500);
    $('#aboutBuyer #ul #item1').hide().html('Seamless transition from existing vendors ensuring<br>no impact to production.').fadeIn(500);
    $('#aboutBuyer #ul #item2').hide().html('Cost optimization by over 20%.').fadeIn(500);
    $('#aboutBuyer #ul #item3').hide().html('Accelerated delivery ensuring high impact results being<br>delivered within 3 months.').fadeIn(500);
    $('#aboutBuyer #ul #item4').hide().html("Access to an integrated ecosystem of suppliers which could<br>support Captain Marketing's digital marketing initiatives.").fadeIn(500);
    $('.storiesVerticalLine').hide().fadeIn(700);
});


$('#successStoriesIcon .internetItIcon').click(function() {
    history.replaceState('', '', newURL + '/internet');
    $('#successStoriesIcon .healthcareIcon .healthcare').removeClass('activeGreenHealthcare');
    $('#successStoriesIcon .travelIcon .travel').removeClass('activeGreenTravel');
    $('#successStoriesIcon .mediaIcon .media').removeClass('activeGreenMedia');
    $('#successStoriesIcon .agricultureIcon .agriculture').removeClass('activeGreenAgriculture');
    $('#successStoriesIcon .hotelIcon .hotel').removeClass('activeGreenHotel');
    $('#successStoriesIcon .designIcon .design').removeClass('activeGreenDesign');

    $('#successStoriesIcon .internetItIcon .internetIt').addClass('activeGreenInternetIt');
    $('#successStoriesIcon .internetItIcon .internetItCircle').addClass('activeDetails');
    $('#successStoriesIcon .internetItIcon .internetItDetails').addClass('activeFont');
    $('#successStoriesIcon .internetItIcon .internetItLine').addClass('activeDetails');


    $('#successStoriesIcon .healthcareIcon .healthcareDetails, #successStoriesIcon .travelIcon .travelDetails, #successStoriesIcon .mediaIcon .mediaDetails, #successStoriesIcon .agricultureIcon .agricultureDetails, #successStoriesIcon .hotelIcon .hotelDetails, #successStoriesIcon .designIcon .designDetails').removeClass('activeFont');
    $('#successStoriesIcon .healthcareIcon .healthcareLine, #successStoriesIcon .travelIcon .travelLine, #successStoriesIcon .mediaIcon .mediaLine, #successStoriesIcon .agricultureIcon .agricultureLine, #successStoriesIcon .hotelIcon .hotelLine, #successStoriesIcon .designIcon .designLine ').removeClass('activeDetails');
    $('#successStoriesIcon .healthcareIcon .healthcareCircle, #successStoriesIcon .travelIcon .travelCircle, #successStoriesIcon .mediaIcon .mediaCircle, #successStoriesIcon .agricultureIcon .agricultureCircle, #successStoriesIcon .hotelIcon .hotelCircle, #successStoriesIcon .designIcon .designCircle ').removeClass('activeDetails');


    $('#testimonial #data #clientImg').hide().attr('src', imageURL+"clientImg.jpg").fadeIn(500);
    $('#testimonial #data #byertstmnl').hide().html('In the past, I have outsourced work to many offshorelocations. Of late, I was facing<br>challenges in terms of quality and my latest experience, with an East European provider,<br>was less than positive. A friend recommended IT Exchange to me.<i></i><p class="col-md-12 col-xs-12"> Nishka, CEO, XYZ Company</p>').fadeIn(500);
    $('#aboutBuyer #about').hide().html('Captain Marketing, based out of the California region,<br>is a midsized internet marketing company that caters to<br>SOHO / Local businesses in the US').fadeIn(500);
    $('#aboutBuyer #businessScenario').hide().html('Captain Marketing required an agile IT partner<br>which can seamlessly collaborate with its internal<br>IT team. It already had a less than favorable<br>outsourcing experience and was grappling with a huge<br>IT stack with no documentation. Its key challenge was<br>finding the right partner who would support its IT<br>requirements and provide a professionally managed<br>outsourcing ecosystem.').fadeIn(500);
    $('#aboutBuyer #howHelped').hide().html('We helped Captain Marketing connect with the right<br>service provider through an intensively managed<br>bidding process We provided full support in the<br>outsourcing cycle including the contract process, vendor<br>on-boarding, project kickoff and ongoing engagement<br>management').fadeIn(500);
    $('#aboutBuyer #ul #item1').hide().html('Seamless transition from existing vendors ensuring<br>no impact to production.').fadeIn(500);
    $('#aboutBuyer #ul #item2').hide().html('Cost optimization by over 20%.').fadeIn(500);
    $('#aboutBuyer #ul #item3').hide().html('Accelerated delivery ensuring high impact results being<br>delivered within 3 months.').fadeIn(500);
    $('#aboutBuyer #ul #item4').hide().html("Access to an integrated ecosystem of suppliers which could<br>support Captain Marketing's digital marketing initiatives.").fadeIn(500);
    $('.storiesVerticalLine').hide().fadeIn(700);
});


$('#successStoriesIcon .mediaIcon').click(function() {
    history.replaceState('', '', newURL + '/media');
    $('#successStoriesIcon .healthcareIcon .healthcare').removeClass('activeGreenHealthcare');
    $('#successStoriesIcon .travelIcon .travel').removeClass('activeGreenTravel');
    $('#successStoriesIcon .internetItIcon .internetIt').removeClass('activeGreenInternetIt');
    $('#successStoriesIcon .agricultureIcon .agriculture').removeClass('activeGreenAgriculture');
    $('#successStoriesIcon .hotelIcon .hotel').removeClass('activeGreenHotel');
    $('#successStoriesIcon .designIcon .design').removeClass('activeGreenDesign');

    $('#successStoriesIcon .mediaIcon .media').addClass('activeGreenMedia');
    $('#successStoriesIcon .mediaIcon .mediaCircle').addClass('activeDetails');
    $('#successStoriesIcon .mediaIcon .mediaDetails').addClass('activeFont');
    $('#successStoriesIcon .mediaIcon .mediaLine').addClass('activeDetails');


    $('#successStoriesIcon .healthcareIcon .healthcareDetails, #successStoriesIcon .travelIcon .travelDetails, #successStoriesIcon .internetItIcon .internetItDetails, #successStoriesIcon .agricultureIcon .agricultureDetails, #successStoriesIcon .hotelIcon .hotelDetails, #successStoriesIcon .designIcon .designDetails').removeClass('activeFont');
    $('#successStoriesIcon .healthcareIcon .healthcareLine, #successStoriesIcon .travelIcon .travelLine, #successStoriesIcon .internetItIcon .internetItLine, #successStoriesIcon .agricultureIcon .agricultureLine, #successStoriesIcon .hotelIcon .hotelLine, #successStoriesIcon .designIcon .designLine ').removeClass('activeDetails');
    $('#successStoriesIcon .healthcareIcon .healthcareCircle, #successStoriesIcon .travelIcon .travelCircle, #successStoriesIcon .internetItIcon .internetItCircle, #successStoriesIcon .agricultureIcon .agricultureCircle, #successStoriesIcon .hotelIcon .hotelCircle, #successStoriesIcon .designIcon .designCircle ').removeClass('activeDetails');


    $('#testimonial #data #clientImg').hide().attr('src', imageURL+"clientImg.jpg").fadeIn(500);
    $('#testimonial #data #byertstmnl').hide().html('In the past, I have outsourced work to many offshorelocations. Of late, I was facing<br>challenges in terms of quality and my latest experience, with an East European provider,<br>was less than positive. A friend recommended IT Exchange to me.<i></i><p class="col-md-12 col-xs-12"> Nishka, CEO, XYZ Company</p>').fadeIn(500);
    $('#aboutBuyer #about').hide().html('Captain Marketing, based out of the California region,<br>is a midsized internet marketing company that caters to<br>SOHO / Local businesses in the US').fadeIn(500);
    $('#aboutBuyer #businessScenario').hide().html('Captain Marketing required an agile IT partner<br>which can seamlessly collaborate with its internal<br>IT team. It already had a less than favorable<br>outsourcing experience and was grappling with a huge<br>IT stack with no documentation. Its key challenge was<br>finding the right partner who would support its IT<br>requirements and provide a professionally managed<br>outsourcing ecosystem.').fadeIn(500);
    $('#aboutBuyer #howHelped').hide().html('We helped Captain Marketing connect with the right<br>service provider through an intensively managed<br>bidding process We provided full support in the<br>outsourcing cycle including the contract process, vendor<br>on-boarding, project kickoff and ongoing engagement<br>management').fadeIn(500);
    $('#aboutBuyer #ul #item1').hide().html('Seamless transition from existing vendors ensuring<br>no impact to production.').fadeIn(500);
    $('#aboutBuyer #ul #item2').hide().html('Cost optimization by over 20%.').fadeIn(500);
    $('#aboutBuyer #ul #item3').hide().html('Accelerated delivery ensuring high impact results being<br>delivered within 3 months.').fadeIn(500);
    $('#aboutBuyer #ul #item4').hide().html("Access to an integrated ecosystem of suppliers which could<br>support Captain Marketing's digital marketing initiatives.").fadeIn(500);
    $('.storiesVerticalLine').hide().fadeIn(700);
});

$('#successStoriesIcon .agricultureIcon').click(function() {
    history.replaceState('', '', newURL + '/agriculture');
    $('#successStoriesIcon .healthcareIcon .healthcare').removeClass('activeGreenHealthcare');
    $('#successStoriesIcon .travelIcon .travel').removeClass('activeGreenTravel');
    $('#successStoriesIcon .internetItIcon .internetIt').removeClass('activeGreenInternetIt');
    $('#successStoriesIcon .mediaIcon .media').removeClass('activeGreenMedia');
    $('#successStoriesIcon .hotelIcon .hotel').removeClass('activeGreenHotel');
    $('#successStoriesIcon .designIcon .design').removeClass('activeGreenDesign');

    $('#successStoriesIcon .agricultureIcon .agriculture').addClass('activeGreenAgriculture');
    $('#successStoriesIcon .agricultureIcon .agricultureCircle').addClass('activeDetails');
    $('#successStoriesIcon .agricultureIcon .agricultureDetails').addClass('activeFont');
    $('#successStoriesIcon .agricultureIcon .agricultureLine').addClass('activeDetails');


    $('#successStoriesIcon .healthcareIcon .healthcareDetails, #successStoriesIcon .travelIcon .travelDetails, #successStoriesIcon .internetItIcon .internetItDetails, #successStoriesIcon .mediaIcon .mediaDetails, #successStoriesIcon .hotelIcon .hotelDetails, #successStoriesIcon .designIcon .designDetails').removeClass('activeFont');
    $('#successStoriesIcon .healthcareIcon .healthcareLine, #successStoriesIcon .travelIcon .travelLine, #successStoriesIcon .internetItIcon .internetItLine, #successStoriesIcon .mediaIcon .mediaLine, #successStoriesIcon .hotelIcon .hotelLine, #successStoriesIcon .designIcon .designLine ').removeClass('activeDetails');
    $('#successStoriesIcon .healthcareIcon .healthcareCircle, #successStoriesIcon .travelIcon .travelCircle, #successStoriesIcon .internetItIcon .internetItCircle, #successStoriesIcon .mediaIcon .mediaCircle, #successStoriesIcon .hotelIcon .hotelCircle, #successStoriesIcon .designIcon .designCircle ').removeClass('activeDetails');


    $('#testimonial #data #clientImg').hide().attr('src', imageURL+"clientImg.jpg").fadeIn(500);
    $('#testimonial #data #byertstmnl').hide().html('In the past, I have outsourced work to many offshorelocations. Of late, I was facing<br>challenges in terms of quality and my latest experience, with an East European provider,<br>was less than positive. A friend recommended IT Exchange to me.<i></i><p class="col-md-12 col-xs-12"> Nishka, CEO, XYZ Company</p>').fadeIn(500);
    $('#aboutBuyer #about').hide().html('Captain Marketing, based out of the California region,<br>is a midsized internet marketing company that caters to<br>SOHO / Local businesses in the US').fadeIn(500);
    $('#aboutBuyer #businessScenario').hide().html('Captain Marketing required an agile IT partner<br>which can seamlessly collaborate with its internal<br>IT team. It already had a less than favorable<br>outsourcing experience and was grappling with a huge<br>IT stack with no documentation. Its key challenge was<br>finding the right partner who would support its IT<br>requirements and provide a professionally managed<br>outsourcing ecosystem.').fadeIn(500);
    $('#aboutBuyer #howHelped').hide().html('We helped Captain Marketing connect with the right<br>service provider through an intensively managed<br>bidding process We provided full support in the<br>outsourcing cycle including the contract process, vendor<br>on-boarding, project kickoff and ongoing engagement<br>management').fadeIn(500);
    $('#aboutBuyer #ul #item1').hide().html('Seamless transition from existing vendors ensuring<br>no impact to production.').fadeIn(500);
    $('#aboutBuyer #ul #item2').hide().html('Cost optimization by over 20%.').fadeIn(500);
    $('#aboutBuyer #ul #item3').hide().html('Accelerated delivery ensuring high impact results being<br>delivered within 3 months.').fadeIn(500);
    $('#aboutBuyer #ul #item4').hide().html("Access to an integrated ecosystem of suppliers which could<br>support Captain Marketing's digital marketing initiatives.").fadeIn(500);
    $('.storiesVerticalLine').hide().fadeIn(700);
});

$('#successStoriesIcon .hotelIcon').click(function() {
	history.replaceState('', '', newURL + '/hotel');
    $('#successStoriesIcon .healthcareIcon .healthcare').removeClass('activeGreenHealthcare');
    $('#successStoriesIcon .travelIcon .travel').removeClass('activeGreenTravel');
    $('#successStoriesIcon .internetItIcon .internetIt').removeClass('activeGreenInternetIt');
    $('#successStoriesIcon .mediaIcon .media').removeClass('activeGreenMedia');
    $('#successStoriesIcon .agricultureIcon .agriculture').removeClass('activeGreenAgriculture');
    $('#successStoriesIcon .designIcon .design').removeClass('activeGreenDesign');

    $('#successStoriesIcon .hotelIcon .hotel').addClass('activeGreenHotel');
    $('#successStoriesIcon .hotelIcon .hotelCircle').addClass('activeDetails');
    $('#successStoriesIcon .hotelIcon .hotelDetails').addClass('activeFont');
    $('#successStoriesIcon .hotelIcon .hotelLine').addClass('activeDetails');


    $('#successStoriesIcon .healthcareIcon .healthcareDetails, #successStoriesIcon .travelIcon .travelDetails, #successStoriesIcon .internetItIcon .internetItDetails, #successStoriesIcon .mediaIcon .mediaDetails, #successStoriesIcon .agricultureIcon .agricultureDetails, #successStoriesIcon .designIcon .designDetails').removeClass('activeFont');
    $('#successStoriesIcon .healthcareIcon .healthcareLine, #successStoriesIcon .travelIcon .travelLine, #successStoriesIcon .internetItIcon .internetItLine, #successStoriesIcon .mediaIcon .mediaLine, #successStoriesIcon .agricultureIcon .agricultureLine, #successStoriesIcon .designIcon .designLine ').removeClass('activeDetails');
    $('#successStoriesIcon .healthcareIcon .healthcareCircle, #successStoriesIcon .travelIcon .travelCircle, #successStoriesIcon .internetItIcon .internetItCircle, #successStoriesIcon .mediaIcon .mediaCircle, #successStoriesIcon .agricultureIcon .agricultureCircle, #successStoriesIcon .designIcon .designCircle ').removeClass('activeDetails');


    $('#testimonial #data #clientImg').hide().attr('src', imageURL+"clientImg.jpg").fadeIn(500);
    $('#testimonial #data #byertstmnl').hide().html('In the past, I have outsourced work to many offshorelocations. Of late, I was facing<br>challenges in terms of quality and my latest experience, with an East European provider,<br>was less than positive. A friend recommended IT Exchange to me.<i></i><p class="col-md-12 col-xs-12"> Nishka, CEO, XYZ Company</p>').fadeIn(500);
    $('#aboutBuyer #about').hide().html('Captain Marketing, based out of the California region,<br>is a midsized internet marketing company that caters to<br>SOHO / Local businesses in the US').fadeIn(500);
    $('#aboutBuyer #businessScenario').hide().html('Captain Marketing required an agile IT partner<br>which can seamlessly collaborate with its internal<br>IT team. It already had a less than favorable<br>outsourcing experience and was grappling with a huge<br>IT stack with no documentation. Its key challenge was<br>finding the right partner who would support its IT<br>requirements and provide a professionally managed<br>outsourcing ecosystem.').fadeIn(500);
    $('#aboutBuyer #howHelped').hide().html('We helped Captain Marketing connect with the right<br>service provider through an intensively managed<br>bidding process We provided full support in the<br>outsourcing cycle including the contract process, vendor<br>on-boarding, project kickoff and ongoing engagement<br>management').fadeIn(500);
    $('#aboutBuyer #ul #item1').hide().html('Seamless transition from existing vendors ensuring<br>no impact to production.').fadeIn(500);
    $('#aboutBuyer #ul #item2').hide().html('Cost optimization by over 20%.').fadeIn(500);
    $('#aboutBuyer #ul #item3').hide().html('Accelerated delivery ensuring high impact results being<br>delivered within 3 months.').fadeIn(500);
    $('#aboutBuyer #ul #item4').hide().html("Access to an integrated ecosystem of suppliers which could<br>support Captain Marketing's digital marketing initiatives.").fadeIn(500);
    $('.storiesVerticalLine').hide().fadeIn(700);
});

$('#successStoriesIcon .designIcon').click(function() {
	history.replaceState('', '', newURL + '/design');
    $('#successStoriesIcon .healthcareIcon .healthcare').removeClass('activeGreenHealthcare');
    $('#successStoriesIcon .travelIcon .travel').removeClass('activeGreenTravel');
    $('#successStoriesIcon .internetItIcon .internetIt').removeClass('activeGreenInternetIt');
    $('#successStoriesIcon .mediaIcon .media').removeClass('activeGreenMedia');
    $('#successStoriesIcon .agricultureIcon .agriculture').removeClass('activeGreenAgriculture');
    $('#successStoriesIcon .hotelIcon .hotel').removeClass('activeGreenHotel');


    $('#successStoriesIcon .designIcon .design').addClass('activeGreenDesign');
    $('#successStoriesIcon .designIcon .designCircle').addClass('activeDetails');
    $('#successStoriesIcon .designIcon .designDetails').addClass('activeFont');
    $('#successStoriesIcon .designIcon .designLine').addClass('activeDetails');


    $('#successStoriesIcon .healthcareIcon .healthcareDetails, #successStoriesIcon .travelIcon .travelDetails, #successStoriesIcon .internetItIcon .internetItDetails, #successStoriesIcon .mediaIcon .mediaDetails, #successStoriesIcon .agricultureIcon .agricultureDetails, #successStoriesIcon .hotelIcon .hotelDetails').removeClass('activeFont');
    $('#successStoriesIcon .healthcareIcon .healthcareLine, #successStoriesIcon .travelIcon .travelLine, #successStoriesIcon .internetItIcon .internetItLine, #successStoriesIcon .mediaIcon .mediaLine, #successStoriesIcon .agricultureIcon .agricultureLine, #successStoriesIcon .hotelIcon .hotelLine ').removeClass('activeDetails');
    $('#successStoriesIcon .healthcareIcon .healthcareCircle, #successStoriesIcon .travelIcon .travelCircle, #successStoriesIcon .internetItIcon .internetItCircle, #successStoriesIcon .mediaIcon .mediaCircle, #successStoriesIcon .agricultureIcon .agricultureCircle, #successStoriesIcon .hotelIcon .hotelCircle ').removeClass('activeDetails');

    $('#testimonial #data #clientImg').hide().attr('src', imageURL+"clientImg.jpg").fadeIn(500);
    $('#testimonial #data #byertstmnl').hide().html('In the past, I have outsourced work to many offshorelocations. Of late, I was facing<br>challenges in terms of quality and my latest experience, with an East European provider,<br>was less than positive. A friend recommended IT Exchange to me.<i></i><p class="col-md-12 col-xs-12"> Nishka, CEO, XYZ Company</p>').fadeIn(500);
    $('#aboutBuyer #about').hide().html('Captain Marketing, based out of the California region,<br>is a midsized internet marketing company that caters to<br>SOHO / Local businesses in the US').fadeIn(500);
    $('#aboutBuyer #businessScenario').hide().html('Captain Marketing required an agile IT partner<br>which can seamlessly collaborate with its internal<br>IT team. It already had a less than favorable<br>outsourcing experience and was grappling with a huge<br>IT stack with no documentation. Its key challenge was<br>finding the right partner who would support its IT<br>requirements and provide a professionally managed<br>outsourcing ecosystem.').fadeIn(500);
    $('#aboutBuyer #howHelped').hide().html('We helped Captain Marketing connect with the right<br>service provider through an intensively managed<br>bidding process We provided full support in the<br>outsourcing cycle including the contract process, vendor<br>on-boarding, project kickoff and ongoing engagement<br>management').fadeIn(500);
    $('#aboutBuyer #ul #item1').hide().html('Seamless transition from existing vendors ensuring<br>no impact to production.').fadeIn(500);
    $('#aboutBuyer #ul #item2').hide().html('Cost optimization by over 20%.').fadeIn(500);
    $('#aboutBuyer #ul #item3').hide().html('Accelerated delivery ensuring high impact results being<br>delivered within 3 months.').fadeIn(500);
    $('#aboutBuyer #ul #item4').hide().html("Access to an integrated ecosystem of suppliers which could<br>support Captain Marketing's digital marketing initiatives.").fadeIn(500);
    $('.myCustom').hide().fadeIn(700);
});


/*-------------------------------------for blog expend----------------------------------------------*/

var widthBlog = $(document).width();
if (widthBlog < 1200) {
    $('#blogExpend  #details p').find('br').replaceWith(" ");
}




/*-------------------------------------for about page----------------------------------------------*/
if (widthBlog < 1200) {
    $('#aboutPage .heading').find('br').replaceWith(" ");
    $('.spGetInTouchModalBody').find('br').replaceWith(" ");
    $('.signupModalHeader').find('br').replaceWith(" ");
}


var widthabout = $(document).width();

if (widthabout < 991) {
    $('#aboutPage #second').find('br').replaceWith(" ");
    $('#aboutPage #first').find('br').replaceWith(" ");
    $('#teamPage #first').find('br').replaceWith(" ");
    $('#teamPage #second').find('br').replaceWith(" ");

    var first1 = $('#aboutPage #two .first1').html();
    var second1 = $('#aboutPage #two .second1').html();
    $('#aboutPage #two .first1').html(second1);
    $('#aboutPage #two .second1').html(first1);

    var first2 = $('#aboutPage #two .first2').html();
    var second2 = $('#aboutPage #two .second2').html();
    $('#aboutPage #two .first2').html(second2);
    $('#aboutPage #two .second2').html(first2);

    var firstTeam1 = $('#teamPage #first #one1').html();
    var secondTeam1 = $('#teamPage #first #two1').html();

    $('#teamPage #first #one1').html(secondTeam1);
    $('#teamPage #first #two1').html(firstTeam1);

    var firstTeam2 = $('#teamPage #first #one2').html();
    var secondTeam2 = $('#teamPage #first #two2').html();

    $('#teamPage #first #one2').html(secondTeam2);
    $('#teamPage #first #two2').html(firstTeam2);



}



$("#greenCircleAbout5").click(function() {
	
    $('#teamPage').addClass("act").animate({
        'opacity': '1'
    }, {
        queue: false,
        duration: 300
    });
    $("#greenCircleAbout5").addClass("greenback");
});

$("#teamTitle").click(function() {
    $('#teamPage').addClass("act").animate({
        'opacity': '1'
    }, {
        queue: false,
        duration: 300
    });
    $("#teamTitle").addClass("greenback");
});

