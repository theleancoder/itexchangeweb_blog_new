<?php
/*
 * Archive default template file
 */
get_header();
?>
<div class="container-fluid wpsearch-container" id="perspectives">

    <div class="container wpsearch-blogbody" id="blogBody">
        <?php
        //call the searchform.php file i.e wp search form.
        get_search_form();
        ?>


        <div class="col-md-12 col-xs-12 wpheading">
            <div class="col-xs-12 wpheading-container">
                <?php
                $archiveString = "";
                if (is_day()) :
                    printf(__('Daily Archives: %s', 'itexc'), get_the_date());
                    $archiveString = get_the_date('Y-m-d');
                elseif (is_month()) :
                    printf(__('Monthly Archives: %s', 'itexc'), get_the_date(_x('F Y', 'monthly archives date format', 'itexc')));
                    $archiveString = get_the_date('Y-m');
                elseif (is_year()) :
                    printf(__('Yearly Archives: %s', 'itexc'), get_the_date(_x('Y', 'yearly archives date format', 'itexc')));
                    $archiveString = get_the_date('Y');
                else :
                    _e('Archives', 'itexc');
                endif;
                ?> 

            </div>
        </div>

        <?php
        if (have_posts()):
            //blog 1st post display here.   
            
            ?>

            <div class="col-md-12 col-xs-12" id="smallblogbody">
                <div class="ajaxHTML">
                    <!-- Blog loop start here -->
                    <?php
                    while (have_posts()) : the_post();

                        $imgHTML  = itexc_get_image_html_from_acf_field(get_the_ID(),$w=381,$h=180,$class = "img-responsive");
                      //$imgHTML = itexc_get_thumbimage_image($postid, $w = 381, $h = 180, $z = 1, $class = "img-responsive");
                        ?>

                  <div <?php post_class("col-md-4 col-xs-12"); ?> id="smallBlog">
                    <div class="col-md-12 col-xs-12" id="author">
                      <?php 
                      //author name and post date
                      get_template_part('author','postdate');
                        ?>
                            </div>
<a href="<?php echo get_permalink(); ?>">
                            <div class="col-md-12 col-xs-12"  id="smallBlogImg" <?php echo (empty($imgHTML)) ? "style='background-color:#f4f4f4;'" : ""; ?>>
                                <?php
                                if (!empty($imgHTML)) {
                                    echo $imgHTML;
                                    //call the social sharing HTML file. : col-md-12
                                    //Social HTML will be display when image will come.    
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
                else:
                    echo '<div class="col-md-12 col-xs-12 container search-notfound">'
                    . '<h2>Nothing Found</h2>'
                    . '<p>Sorry,Not found any posts related to this.</p>'
                    . '</div>';
                endif;
                ?>
            </div>
            <!-- Blog loop end here -->
            <?php
            global $wp_query;

            $totalposts = $wp_query->found_posts;
            //$total_pages=$wp_query->max_num_pages;
            $perPage = get_option('posts_per_page');

            //load more will start when at least posts more than per page
           ?>
            <div class="loadmore-container">
                <a style="display:none;" href="javascript:void(0);" date-query="<?php echo $archiveString; ?>" data-perPage="<?php echo $perPage; ?>" data-displayed="<?php echo $perPage; ?>" data-ajaxtype="archive" data-totalposts="<?php echo $totalposts; ?>"  class="loadmore btn btn-md">Load More</a>
            </div>
            <!-- loader ajax start -->
            <div class="col-md-12 col-xs-12 ajax-post-scroll wpajax-loader" id="waiting" style="display:none;">
                <center>
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/blogloadspinner.GIF" class="img-responsive"/>
                </center>
            </div>
       
        </div>


    </div>
</div>

<?php
//information above footer
get_template_part('itexc_info_above_footer');

get_footer();
?>
