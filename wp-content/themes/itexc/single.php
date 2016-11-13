<?php
/*
 * single default template file.
 */
get_header();

?>
<div class="container-fluid" id="blogExpend">
    
    <a href="<?php echo site_url(); ?>" title="BACK to Blog List" class="fa-3xLeft outline-none" id="leftButton">&nbsp;</a>

    <?php
    if (have_posts()) :

        while (have_posts()): the_post();
            ?>
            <div class="container" id="blogBody">
                <?php
                //call the search form
                get_search_form();

               $imgACF  = itexc_get_image_html_from_acf_field(get_the_ID(),$w=1254,$h=559,$class = "img-responsive");
              //   $imgACF  = itexc_get_thumbimage_image(get_the_ID(), $w =1217, $h =575, $z = 1, $class = "img-responsive");
                ?>
                <div class="col-md-12 col-xs-12" id="bigBlog">
                    <div class="col-md-4 col-xs-12" id="author">
                               <?php
                                //author name and post date
                                get_template_part('author', 'postdate');
                                ?>
                    </div>
                    <div class="col-md-12 col-xs-12"  id="bigBlogImg">
     <?php
                        if (!empty($imgACF)) {
                             echo $imgACF;

                            //call the social details.
                            ?>

                        <div id="socialDetails" class="col-md-4 col-xs-12">
				<span class="col-md-5">share on</span>
				<a title="Facebook" class="shareon facolor" target="_blank" href="http://www.facebook.com/sharer.php?u=<?php echo get_permalink(get_the_ID()); ?>&t=<?php echo get_the_title(); ?> | IT Exchange"><i class="fa fa-facebook col-md-1"></i></a>


				<a title="Twitter" class="shareon twcolor" target="_blank" href="http://twitter.com/home?status=<?php echo get_permalink(get_the_ID()); ?>"><i class="fa fa-twitter col-md-1"></i></a>
				<a title="LinkedIn" class="shareon licolor" target="_blank" href="http://www.linkedin.com/shareArticle?mini=true&url=<?php echo get_permalink(get_the_ID()); ?>&title=<?php echo get_the_title(); ?> | IT Exchange &summary=<?php the_excerpt(); ?>"><i class="fa fa-linkedin col-md-1"></i></a> 
                              
			</div>
                            <?php
                        }
                        ?>
                    </div>
                    <p class="col-md-12 col-xs-12"> <?php echo get_the_title(); ?></p>

                </div>
            </div>

            <div class="container tm-40 wp-single-blog-content" id="details">
                <?php
                //call the content
                the_content();
                ?>
            </div>
            <?php
        endwhile;
    endif;
    ?>



</div>


</div>
</div>
<?php
//call the get in touch information i.e information above the footer.
get_template_part('itexc_info_above_footer');
//footer files.
get_footer();
?>
