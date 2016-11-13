<?php

/*
 * Adding scripts and styles here,
 */

function itexc_add_enqueue_scripts() {

     wp_deregister_script('jquery');
    wp_enqueue_script('jquery', get_stylesheet_directory_uri() . '/js/jquery-1.11.2.min.js');
    //wp_enqueue_script('modernizrjsfile', get_stylesheet_directory_uri() . '/js/modernizr.js', array('jquery'), '', FALSE);
    
    wp_enqueue_style('bootstrap.min.css11', get_stylesheet_directory_uri() . '/css/bootstrap.min.css');
    wp_enqueue_style('understylecss12', get_stylesheet_directory_uri() . '/css/style.css');
    wp_enqueue_style('fontcss13', get_stylesheet_directory_uri() . '/css/font.css');
    wp_enqueue_style('font-awesome.min14', get_stylesheet_directory_uri() . '/css/font-awesome.min.css');
    wp_enqueue_style('mainstylecss15', get_stylesheet_uri());

   
    wp_enqueue_script('bootstrap.minjs', get_stylesheet_directory_uri() . '/js/bootstrap.min.js', array('jquery'), '', TRUE);
    wp_enqueue_script('customjs1', get_stylesheet_directory_uri() . '/js/custom.js', array('jquery'), '', TRUE);
    wp_enqueue_script('controllerjs1', get_stylesheet_directory_uri() . '/js/controller.js', array('jquery'), '', TRUE);

//added script :09apr
    wp_enqueue_script('custom.validation', get_stylesheet_directory_uri() . '/js/custom.validation.js', array('jquery'), '', TRUE);
    wp_enqueue_script('jquery.validate.js', get_stylesheet_directory_uri() . '/js/jquery.validate.js', array('jquery'), '', TRUE);
    wp_enqueue_script('modernizr.js', get_stylesheet_directory_uri() . '/js/modernizr.js', array('jquery'), '', TRUE);
   // wp_enqueue_script('npm.js', get_stylesheet_directory_uri() . '/js/npm.js', array('jquery'), '', TRUE);
    wp_enqueue_script('urlRewriting.js', get_stylesheet_directory_uri() . '/js/urlRewriting.js', array('jquery'), '', TRUE);
    $options_arr = array(
            'siteurl' => site_url(),
            );
    wp_localize_script( 'urlRewriting.js', 'obb',$options_arr);

    wp_enqueue_script('wpcustomjs', get_stylesheet_directory_uri() . '/inc/js/wpcustom.js', array('jquery'), '', TRUE);
    // Localize the script with new data
    $translation1 = array(
            'ajaxurl' => admin_url('admin-ajax.php'),
            'themeURL'=> get_stylesheet_directory_uri(),
    );
    wp_localize_script( 'wpcustomjs', 'myAjax',$translation1);

}

add_action('wp_enqueue_scripts', 'itexc_add_enqueue_scripts');
