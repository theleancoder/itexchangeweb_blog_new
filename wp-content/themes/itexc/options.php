<?php
/**
 * A unique identifier is defined to store the options in the database and reference them from the theme.
 */
function optionsframework_option_name() {
	// Change this to use your theme slug
	return 'options-framework-theme';
}

/**
 * Defines an array of options that will be used to generate the settings page and be saved in the database.
 * When creating the 'id' fields, make sure to use all lowercase and no spaces.
 *
 * If you are making your theme translatable, you should replace 'theme-textdomain'
 * with the actual text domain for your theme.  Read more:
 * http://codex.wordpress.org/Function_Reference/load_theme_textdomain
 */

function optionsframework_options() {

	// Test data
	$test_array = array(
		'one' => __( 'One', 'theme-textdomain' ),
		'two' => __( 'Two', 'theme-textdomain' ),
		'three' => __( 'Three', 'theme-textdomain' ),
		'four' => __( 'Four', 'theme-textdomain' ),
		'five' => __( 'Five', 'theme-textdomain' )
	);

	// Multicheck Array
	$multicheck_array = array(
		'one' => __( 'French Toast', 'theme-textdomain' ),
		'two' => __( 'Pancake', 'theme-textdomain' ),
		'three' => __( 'Omelette', 'theme-textdomain' ),
		'four' => __( 'Crepe', 'theme-textdomain' ),
		'five' => __( 'Waffle', 'theme-textdomain' )
	);

	// Multicheck Defaults
	$multicheck_defaults = array(
		'one' => '1',
		'five' => '1'
	);

	// Background Defaults
	$background_defaults = array(
		'color' => '',
		'image' => '',
		'repeat' => 'repeat',
		'position' => 'top center',
		'attachment'=>'scroll' );

	// Typography Defaults
	$typography_defaults = array(
		'size' => '15px',
		'face' => 'georgia',
		'style' => 'bold',
		'color' => '#bada55' );

	// Typography Options
	$typography_options = array(
		'sizes' => array( '6','12','14','16','20' ),
		'faces' => array( 'Helvetica Neue' => 'Helvetica Neue','Arial' => 'Arial' ),
		'styles' => array( 'normal' => 'Normal','bold' => 'Bold' ),
		'color' => false
	);

	// Pull all the categories into an array
	$options_categories = array();
	$options_categories_obj = get_categories();
	foreach ($options_categories_obj as $category) {
		$options_categories[$category->cat_ID] = $category->cat_name;
	}

	// Pull all tags into an array
	$options_tags = array();
	$options_tags_obj = get_tags();
	foreach ( $options_tags_obj as $tag ) {
		$options_tags[$tag->term_id] = $tag->name;
	}


	// Pull all the pages into an array
	$options_pages = array();
	$options_pages_obj = get_pages( 'sort_column=post_parent,menu_order' );
	$options_pages[''] = 'Select a page:';
	foreach ($options_pages_obj as $page) {
		$options_pages[$page->ID] = $page->post_title;
	}

	// If using image radio buttons, define a directory path
	$imagepath =  get_template_directory_uri() . '/images/';

	$options = array();

	$options[] = array(
		'name' => __( 'Basic Settings', 'theme-textdomain' ),
		'type' => 'heading'
	);

	$options[] = array(
		'name' => __( 'Website Logo', 'theme-textdomain' ),
		'desc' => __( 'Upload the website logo here.', 'theme-textdomain' ),
		'id'   => 'website_logo',
                'std'  => get_stylesheet_directory_uri().'/img/ITXchg-logo.png',
		'type' => 'upload'
	);

    $options[] = array(
		'name' => __( 'Text above footer.', 'theme-textdomain' ),
		'desc' => __( 'This information( Link + text ) will be display above the footer.', 'theme-textdomain' ),
		'id'   => 'text_above_footer',
                'std'  =>  "<a href='#'>get in touch</a><p>We're here to help!</p>",
		'type' => 'textarea'
	        );
    
    $options[] = array(
		'name' => __( 'Select Privacy policy page', 'theme-textdomain' ),
		'desc' => __( 'This page is used for setting throughout the website.', 'theme-textdomain' ),
		'id' => 'privacypolicy',
		'type' => 'select',
		'options' => $options_pages
	);


    $options[] = array(
		'name' => __( 'Select Terms of use page', 'theme-textdomain' ),
		'desc' => __( 'This page is used for setting throughout the website.', 'theme-textdomain' ),
		'id' => 'termsofuse',
		'type' => 'select',
		'options' => $options_pages
	);
    $options[] = array(
		'name' => __( 'White paper link.', 'theme-textdomain' ),
		'desc' => __( 'Enter the white paper link.', 'theme-textdomain' ),
		'id'   => 'white_paper_link',
                'std'  =>  'http://'.$_SERVER['HTTP_HOST']."/whitepapers",
		'type' => 'text');    

    
    $options[] = array(
		'name' => __( 'Enter the login and signup link html.', 'theme-textdomain' ),
		'desc' => __( 'Enter the login and signup link html.We will use this link in website settings.', 'theme-textdomain' ),
		'id' => 'login_signuplink',
                'std'  => ' <a href="#" class="logInMobile">LOG IN</a> 
             <a href="#" class="button-logInMobile btn btn-primary btn-sm">SIGN UP</a>',
		'type' => 'textarea'
	);
   
    /*
     $options[] = array(
		'name' => __( 'Select featured category', 'theme-textdomain' ),
		'desc' => __( 'This category 1st post will be display on the top and remaining post will be display in card view.', 'theme-textdomain' ),
		'id' => 'featured_category',
		'type' => 'select',
		'options' => $options_categories
	);
    */
	/**
	 * For $settings options see:
	 * http://codex.wordpress.org/Function_Reference/wp_editor
	 *
	 * 'media_buttons' are not supported as there is no post to attach items to
	 * 'textarea_name' is set by the 'id' you choose
	 */

	$wp_editor_settings = array(
		'wpautop' => true, // Default
		'textarea_rows' => 5,
		'tinymce' => array( 'plugins' => 'wordpress' )
	);

	
	return $options;
}
