<?php
/**
 * The Header template for our theme
 */
?>
<!DOCTYPE html>
<html lang="en" class="no-js">
    <head>
        <meta charset="<?php bloginfo('charset'); ?>">
        <link rel="profile" href="http://gmpg.org/xfn/11">
        <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<?php if(is_single()){ ?>
<meta property="og:title" content="<?php echo get_the_title(get_the_ID()); ?>"/>
<?php } ?>
        <title>
            <?php
            if (is_home() || is_front_page()) {
                echo get_option('blogname') . ' | ' . ' Outsourced IT Services';
            } else {
                $postType = ucfirst(get_post_type());
                wp_title(" | IT Exchange", true, 'right');
            }
            ?>
        </title>

        <link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/img/favicon.ico" type="image/x-icon">
        <link rel="apple-touch-icon" href="<?php echo get_stylesheet_directory_uri(); ?>/img/apple-touch-icon.png">
        <link rel="apple-touch-icon" sizes="114x114" href="<?php echo get_stylesheet_directory_uri(); ?>/img/apple-touch-icon-retina.png">

        <?php wp_head(); ?>
	<!-- Go to www.addthis.com/dashboard to customize your tools -->
	<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-513ed2045d431b84" async="async"></script>


        <script type="text/javascript">
            // Call this function once the rest of the document is loaded
            function loadAddThis() {
                addthis.init()
            }
        </script>
   <!-- Google analytics code start herer -->     
<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-38470926-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>
   <!-- Google analytics code end herer -->     


        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->

    </head>

    <?php
    //adding a single class for default file
    $defaultClass = "";
    if (is_search() || is_category() || is_archive() || is_page_template('template-blog.php')) {
        $defaultClass = "default-page";
    }
    ?>

    <body <?php body_class($defaultClass); ?> >
        <?php
        //   global $template;
        //   echo basename($template);
//      print_r(get_option('siteurl'));
        ?>

        <!-- Go to www.addthis.com/dashboard to customize your tools -->
        <div class="addthis_custom_sharing"></div>

        <nav class="navbar navbar-default " id="header">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar caret-style"></span>
                        <span class="icon-bar caret-style"></span>
                        <span class="icon-bar caret-style"></span>
                    </button>
                    <?php
                    $logoURL = itexc_of_get_option('website_logo');
                    if (empty($logoURL)) {
                        $logoURL = get_stylesheet_directory_uri() . '/img/ITXchg-logo.png';
                    }
                    //http://<?php echo $_SERVER['HTTP_HOST']; //echo site_url();
                    ?> 
                    <a class="navbar-brand" href="<?php echo 'http://'.$_SERVER['HTTP_HOST']; ?>" title="Go to HomePage">
                        <img src="<?php echo $logoURL; ?>" class="logo">
                    </a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                    <?php
                    /*
                     * Header menu display here.
                     */
                    wp_nav_menu(
                            array(
                                'menu_id' => '',
                                'menu_class' => 'nav navbar-nav navbar-right header_menu ',
                                'container' => '',
                                'theme_location' => 'header_menu',
                                'walker'=> new itexc_customize_menu_walker
                            )
                    );
                    ?>  

                </div><!-- /.navbar-collapse -->

            </div><!-- /.container-fluid -->
            <?php
            //call the two login and signup page
            $loginsignup = itexc_of_get_option('login_signuplink');
            echo $loginsignup;
            // $signupid= itexc_of_get_option('signup_page');
            ?>
            <!--            
                         <a href="#" class="logInMobile">LogIn</a> 
                         <a href="#" class="button-logInMobile btn btn-primary btn-sm">Sign up</a>            -->
        </nav>
