<?php
/*
 * Index default template file.
 */
get_header();
?>
<div class="container-fluid" id="perspectives">
    <div class="container">
        <div class="col-md-12 col-xs-12">
            <span class="fa-3xLeft" id="leftButton"></span>
            <div class="col-md-offset-5 col-md-2 col-xs-3 blogIcon act" id="2">
                <span class="col-md-12 col-xs-12" id="blogBG"></span>
                <span class="col-md-12 col-xs-12" id="blogCap">Blog</span>
                <span class="col-md-12 col-xs-12" id="blogCir"></span>
                <span class="col-md-12 col-xs-12" id="blogLn"></span>
            </div>
<?php
$white_paper_link=itexc_of_get_option('white_paper_link');
 ?>
            <div class="col-md-2 col-xs-3 whitepprIcon act" id="1">
<a href="<?php echo $white_paper_link; ?>">
                <span class="col-md-12 col-xs-12" id="whitepprBG"></span>
                <span class="col-md-12 col-xs-12" id="whitepprCap">White Papers</span>
                <span class="col-md-12 col-xs-12" id="whitepprCir"></span>
                <span class="col-md-12 col-xs-12" id="whitepprLn"></span>
               </a>
            </div>
            <span class="fa-3xRight" id="rightButton"></span>
            <hr class="line">
            <hr class="leftCir">
            <hr class="rightCir">
        </div>
    </div>

    <div class="container" id="blogBody">

        <?php
        //call the searchform.php file i.e wp search form.
        get_search_form();
     /*
      * One more featured
      * Below category post whome display here will not display in card view.
      */   
      $exclude_id=0;  
        
        
      //call the category id and show the one post.
       $catid = itexc_of_get_option("featured_category"); //as per discussion with shashikant sir,I have removed it :27mar2015
        
        $argsBlog = array(
            'category_name' => "featured",
            'posts_per_page' => 1
        );
        query_posts($argsBlog);

        if (have_posts()):
            //blog 1st post display here.   
            /*
             * This loop will display only one posts and below loop start from 2nd posts.
             */
            while (have_posts()) : the_post();

              $exclude_id = $post->ID;
               $imgACF  = itexc_get_image_html_from_acf_field(get_the_ID(),$w=1254,$h=559,$class = "img-responsive");
             //    $imgACF  = itexc_get_thumbimage_image(get_the_ID(), $w =1217, $h =575, $z = 1, $class = "img-responsive");
                ?>
                <div <?php post_class("col-md-12 col-xs-12"); ?> id="bigBlog">
                    <div class="col-md-4 col-xs-12" id="author">
                        <?php
                        //call the author name and post date .
                        get_template_part('author', 'postdate');
                        ?>
                    </div>
                    <a href="<?php echo get_permalink(); ?>"><div class="col-md-12 col-xs-12"  id="bigBlogImg">
                            <?php
                            if (!empty($imgACF)) {
                                echo $imgACF;
                                //call the social HTML
                                //Social HTML will be display when image will come.    
                                get_template_part('social', 'sharing_bigimage');
                            }
                            $curURL = get_permalink();
                            ?>
                        </div>
                        <p class="col-md-12 col-xs-12"><?php echo get_the_title(); ?></p>
                    </a>
                </div>

                <?php
 
            endwhile;
        endif;
 wp_reset_query();
//blog 1st post display here. END  
        ?>

        <div class="col-md-12 col-xs-12" id="smallblogbody">
            <div class="ajaxHTML">
                <!-- Blog loop start here -->
                <?php
            $argscardBlog = array(
                    'post_type'=>'post',
                    'post__not_in'=>array($exclude_id),
                    'posts_per_page'=>9
                    );    
            
              query_posts($argscardBlog);  
                if (have_posts()):
                    while (have_posts()) : the_post();

                        $imgHTML  = itexc_get_image_html_from_acf_field(get_the_ID(),$w=381,$h=180,$class = "img-responsive");
                        //$imgHTML = itexc_get_thumbimage_image($post->ID, $w = 381, $h = 180, $z = 1, $class = "img-responsive");//o

                        $userid = $post->post_author;
                        ?>
                        <div class="col-md-4 col-xs-12 post-<?php echo get_the_ID(); ?>" id="smallBlog">
                            <div class="col-md-12 col-xs-12" id="author">
                                <?php
                                //call the author name and post date .
                                get_template_part('author', 'postdate');
                                ?>
                            </div>
                            <a href="<?php echo get_permalink(); ?>">
                                <div class="col-md-12 col-xs-12"  id="smallBlogImg" <?php echo (empty($imgHTML)) ? "style='background-color:#f4f4f4;'" : ""; ?> >
                                    <?php
                                    if (!empty($imgHTML)) {
                                        echo $imgHTML;
                                        //call the social sharing HTML file. : col-md-12
                                        //Social HTML will be display when image will come    
                                        get_template_part('social', 'sharing');
                                    }
                                    $curURL = get_permalink();
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
                    <!-- Blog loop end here -->
                    <?php
                    global $wp_query;

                    $totalposts = $wp_query->found_posts;
                    //$total_pages=$wp_query->max_num_pages;
                    $perPage = get_option('posts_per_page');
                    ?>
                    <!-- AJAX container which is used for accepting the ajax data. -->
                </div>

                <div class="container">
                    <a style="display:none;" href="javascript:void(0);" date-query="<?php echo $exclude_id; ?>" data-perPage="<?php echo $perPage; ?>" data-displayed="<?php echo $perPage; ?>" data-ajaxtype="home" data-totalposts="<?php echo $totalposts; ?>"  class="loadmore btn btn-md">Load More</a>
                </div>
                <!-- loader ajax start -->
                <div class="col-md-12 col-xs-12 ajax-post-scroll wpajax-loader" id="waiting" style="display:none;">
                    <center>
                        <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/blogloadspinner.GIF" class="img-responsive"/>
                    </center>
                </div>
                <!-- loader ajax end -->
                <?php
            endif;
            ?>

        </div>


    </div>
</div>
<?php
//information above footer
get_template_part('itexc_info_above_footer');

get_footer();
?>
 
