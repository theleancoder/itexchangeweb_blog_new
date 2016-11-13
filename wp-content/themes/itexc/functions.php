<?php
/*
 * Loads the Options Panel
 * 
 * WP Author: Shankaranand Maurya
 *
 * If you're loading from a child theme use stylesheet_directory
 * instead of template_directory
 */

define('OPTIONS_FRAMEWORK_DIRECTORY', get_template_directory_uri() . '/inc/');
require_once dirname(__FILE__) . '/inc/options-framework.php';

// Loads options.php from child or parent theme
$optionsfile = locate_template('options.php');
load_template($optionsfile);


function itexc_substrwords($text, $maxchar, $end='...') {
    if (strlen($text) > $maxchar || $text == '') {
        $words = preg_split('/\s/', $text);      
        $output = '';
        $i      = 0;
        while (1) {
            $length = strlen($output)+strlen($words[$i]);
            if ($length > $maxchar) {
                break;
            } 
            else {
                $output .= " " . $words[$i];
                ++$i;
            }
        }
        $output .= $end;
    } 
    else {
        $output = $text;
    }
    return $output;
}

//limit the excerpt content 
//function itexc_excerpt_length( $length ) {
//	return 11;
//}
//add_filter( 'excerpt_length', 'itexc_excerpt_length', 999 );

/*
 * Key functions
 */
add_theme_support('post-thumbnails');

register_nav_menus(array(
    'header_menu' => 'Main Menu',
    'footermenu1' => 'Footer Menu 1',
    'footermenu2' => 'Footer Menu 2',
    'footermenu3' => 'Footer Menu 3',
        )
);

add_filter('wp_nav_menu_args', 'prefix_nav_menu_args');

function prefix_nav_menu_args($args = '') {
    $args['container'] = false;
    return $args;
}

//widget section.
$argsFooter = array(
    'name' => __('Footer Section', 'theme_text_domain'),
    'id' => 'footer_widget',
    'description' => 'This widget content will display above the copyright.',
    'class' => 'footerwidget',
    'before_widget' => '', //'<ul class="col-xs-4 footerwidget"><li id="%1$s" class="widget %2$s">',
    'after_widget' => '', //'</li></ul>',
    'before_title' => '<h2 class="widgettitle footerwgt_title">',
    'after_title' => '</h2>');
register_sidebar($argsFooter);

$argsFooter2 = array(
    'name' => __('Below Footer Section', 'theme_text_domain'),
    'id' => 'below_footer_widget',
    'description' => 'This widget have the links and copyright text.',
    'class' => 'footerwidget',
    'before_widget' => '', //'<ul class="col-xs-4 footerwidget"><li id="%1$s" class="widget %2$s">',
    'after_widget' => '', //'</li></ul>',
    'before_title' => '<h2 class="widgettitle footerwgt_title">',
    'after_title' => '</h2>');
register_sidebar($argsFooter2);


/*
 * enqueue scripts file included here
 * adding scripts and styles
 */
require_once dirname(__FILE__) . '/inc/itexc_enqueue_scripts.php';

/*
 * functions file
 */
require_once dirname(__FILE__) . '/inc/itexc_functions.php';

/*
 * address widget
 */
require_once dirname(__FILE__) . '/widget/address-widget.php';

/*
 * links and copyright widget
 */
require_once dirname(__FILE__) . '/widget/links_copyrighttext-widget.php';

/*
 * Ajax calling.
 * 
 */
add_action('wp_ajax_load_more_posts','load_more_posts');
add_action('wp_ajax_nopriv_load_more_posts','load_more_posts');
function load_more_posts(){
    get_template_part('ajax','loadmore');
    die(0);
}


/*
 * Social sharing class
 * Follow Facebook share count : Ref : http://ctrlq.org/code/19633-facebook-like-api-php
 *
 * Ref: http://99webtools.com/blog/php-script-to-get-social-share-count/ : changed
 * NewRef : http://www.aljtmedia.com/blog/getting-your-social-share-counts-with-php/
 */

function itexc_flq_facebook_count($url){

    // Query in FQL
  //  $fql  = "SELECT share_count, like_count, comment_count ";
  //  $fql .= " FROM link_stat WHERE url = '$url'";
 
//    $fqlURL = "https://api.facebook.com/method/fql.query?format=json&query=" . urlencode($fql);
 
    // Facebook Response is in JSON
   // $response   = json_decode(file_get_contents($fqlURL));
    $sharecount = 0;
    //print_r($response);
	// facebook share count
  // if($response){
//   $sharecount=$response[0]->share_count;
 //  $sharecount= ($sharecount==0||$sharecount=="")?0:$sharecount;	 
//    }
	// facebook like count
//	echo $response->like_count.'<br/>';
	// facebook comment count
//	echo $response->comment_count.'<br/>';
//    return json_decode($response);

    // updated function : 05sepc2016
    $url_share = "http://graph.facebook.com/?id=".$url;
    // Facebook Response is in JSON
    $response   = json_decode(@file_get_contents($url_share));
//   return print_r($response);
  // return json_encode($response);
      if($response){
  	//if share count is available
  	//@sometime when post new then this share count: attr: is not present.
  	if($response->share->share_count){
  	$sharecount = $response->share->share_count;
  	}
  }

 return $sharecount;
}


//Twitter share count
function itexc_twitter_count($url){

    $shareHTML ="https://cdn.api.twitter.com/1/urls/count.json?url=$url";
    $outputjson= itexc_file_get_content($shareHTML);
    $outputArr =json_decode($outputjson);
    $sharecount= $outputArr->count;
    return $sharecount;
}

//Twitter share count
function itexc_twitter_count_tmp($url){
   getTweetCount($url);
    //$shareHTML ="https://cdn.api.twitter.com/1/urls/count.json?url=$url";
    //$outputjson= itexc_file_get_content($shareHTML);//echo $shareHTML;
    //$outputArr =json_decode($outputjson);print_r($outputArr);
    //$sharecount= $outputArr->count;
    //return $sharecount;
}

function getTweetCount($url)
{
    $url = urlencode($url);
    $twitterEndpoint = "http://urls.api.twitter.com/1/urls/count.json?url=%s";
    $fileData = file_get_contents(sprintf($twitterEndpoint, $url));
    $json = json_decode($fileData, true);
    unset($fileData); // free memory
    //print_r($json);
    echo  $json['count'];
}

//linedin share count 
function itexc_linkedin_count($url){


    $shareHTML ="https://www.linkedin.com/countserv/count/share?url=$url&format=json";
    $outputjson= itexc_file_get_content($shareHTML);
    $outputArr =json_decode($outputjson);
    $sharecount= $outputArr->count;
    return $sharecount;
}
//facebook share count.
function itexc_facebook_count($url){
  $sharecount =0;  
  $shareURL = "http://graph.facebook.com/?id=$url";  
  $outputjson= itexc_file_get_content($shareURL);
  $outputArr =json_decode($outputjson);
  if(count($outputArr)>0){
  $sharecount= @$outputArr->count;
  }
  return $sharecount;
  
}

//call the content via URL
function itexc_file_get_content($url){
    return @file_get_contents($url,TRUE);
}

/*
 * Adding the walker class
 * 
 */
class itexc_customize_menu_walker extends Walker_Nav_Menu
{
      function start_el(&$output, $item, $depth, $args)
      {
           global $wp_query;
           $indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';

           $class_names = $value = '';

          // $dbclasses=$item->classes;
           $classes = empty( $item->classes ) ? array() : (array) $item->classes;

           $dbclasses=$class_names = join( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item ) );
           $class_names = ' class="'. esc_attr( $class_names ) . '"';

           
           //specially for two menu
           //convert string to array
           $dbclassesArr = explode(" ",$dbclasses);
           if(in_array("login", $dbclassesArr)){
               $output .= $indent . '<li id="logInHead"' . $value . $class_names .'>';
           }else{
               $output .= $indent . '<li id="menu-item-'.$item->ID . '"' . $value . $class_names .'>';
           }
           
           $attributes  = ! empty( $item->attr_title ) ? ' title="'  . esc_attr( $item->attr_title ) .'"' : '';
           $attributes .= ! empty( $item->target )     ? ' target="' . esc_attr( $item->target     ) .'"' : '';
           $attributes .= ! empty( $item->xfn )        ? ' rel="'    . esc_attr( $item->xfn        ) .'"' : '';
           $attributes .= ! empty( $item->url )        ? ' href="'   . esc_attr( $item->url        ) .'"' : '';

           $prepend = '';
           $append = '';
           $description  = ! empty( $item->description ) ? '<span>'.esc_attr( $item->description ).'</span>' : '';

           if($depth != 0)
           {
	           $description = $append = $prepend = "";
           }

            $item_output = $args->before;
            
             //specially for two menu
           
           if(in_array("login", $dbclassesArr)){
                  $item_output .= '<a id="logInButton" class="logIn">';
           }else{
               $item_output .= '<a'. $attributes .'>';
           }
           
           
            
            $item_output .= $args->link_before .$prepend.apply_filters( 'the_title', $item->title, $item->ID ).$append;
            $item_output .= $description.$args->link_after;
            $item_output .= ' '.$item->subtitle.'</a>';
            $item_output .= $args->after;

            $output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
            }
}
?>
