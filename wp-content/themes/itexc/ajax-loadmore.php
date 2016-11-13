<?php
/*
 * Ajax loadmore .
 */

$totalposts = $_POST['totalposts'];
$ajaxtype = $_POST['ajaxtype'];
$datadisplayed = $_POST['datadisplayed'];

$querystring = $_POST['querystr'];
//Generate the query psots.
$dbperpage = 9; //get_option('posts_per_page'); ////perPage: it will be static on page :wpcustom.js

$ajax_query = array();

//specially for homepage posting i.e index.php file
if ($ajaxtype == "home") {
    $ajax_query['post_type'] = "post";
}

$ajax_query['post_status'] = "publish";
/*
 * In homepage,we exclude the post whose shows above i.e top big post.
 * This post can't be shown on card view.
 */
if($ajaxtype == "home"){
  $ajax_query['post__not_in'] =array($querystring);
}

//for search.php file
if ($ajaxtype == "search") {
    $ajax_query['s'] = $querystring;
}
//category.php file
if ($ajaxtype == "category") {
    $ajax_query['cat'] = $querystring;
}
//archive.php file
if ($ajaxtype == "archive") {
    //convert string to array
    $i = 0;
    $archiveArr = explode('-', $querystring);
    $queryKey = array('year', 'monthnum', 'date');

    if (count($archiveArr) > 0) {
        foreach ($archiveArr as $arcValue) {
            $ajax_query[$queryKey[$i]] = $arcValue;
            ++$i;
        }
    }
}


//author default type:author.php
if ($ajaxtype == "author") {
    $ajax_query['author'] = $querystring;
}

//Tag default setting
if($ajaxtype == "tag"){
    $ajax_query['tag']=$querystring;
}



$ajax_query['offset'] = $datadisplayed;
$ajax_query['posts_per_page'] = $dbperpage;

query_posts($ajax_query);

ob_start();
?> 
<!-- Blog loop start here -->
<?php
while (have_posts()) : the_post();
       $imgHTML  = itexc_get_image_html_from_acf_field(get_the_ID(),$w=381,$h=180,$class = "img-responsive");
//    $imgHTML = itexc_get_thumbimage_image($post->ID, $w = 381, $h = 180, $z = 1, $class = "img-responsive"); //o
    
    $userid  = $post->post_author;
    ?>
    <div <?php post_class("col-md-4 col-xs-12"); ?> id="smallBlog">
        <div class="col-md-12 col-xs-12" id="author">
            <?php 
                   //call the author name and post date .
                    get_template_part('author','postdate');
                    ?>
        </div>
<a href="<?php echo get_permalink(); ?>">
        <div class="col-md-12 col-xs-12"  id="smallBlogImg">
            <?php
            if (!empty($imgHTML)) {
                echo $imgHTML;
            }
            $curURL = get_permalink();

            //call the social sharing HTML file. : col-md-12
            get_template_part('social', 'sharing');
            ?>

        </div>
        <?php
        //post title and excerpt content.
        get_template_part('itexc', 'posttitle');
        ?> 
   </a>
    </div>
    <?php
endwhile;
?>
<!-- New ajax container created. -->

<?php
$output = ob_get_contents();
ob_get_clean();

echo $output;
?>



