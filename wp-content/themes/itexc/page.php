<?php
/* 
 *default page template file
 */
get_header();
?>
<div class="container-fluid" id="perspectives" style="margin-top:0px;">
   
    <div class="container" id="blogBody" style="margin-top:0px;">
        
        <?php
        if (have_posts()):
            //blog 1st post display here.   
            /*
             * This loop will display only one posts and below loop start from 2nd posts.
             */
            while (have_posts()) : the_post();

                $imgHTML = itexc_get_thumbimage_image($postid, $w = 1217, $h = 304, $z = 1, $class = "img-responsive");
                ?>
                <div class="col-md-12 col-xs-12 <?php post_class(); ?>" id="bigBlog">
                    <div class="col-md-12 col-xs-12"  id="bigBlogImg">
                        <?php
                        if (!empty($imgHTML)) {
                            echo $imgHTML;
                        }
                    
                        ?>
                 
                    </div>
                    <p class="col-md-12 col-xs-12"><?php echo get_the_title(); ?></p>
                    
                </div>
                  <?php the_content(); ?>
                <?php
              
            endwhile;
            endif;
            //blog 1st post display here. END  
            ?>
    </div>
</div>

<?php
//information above footer
get_template_part('itexc_info_above_footer');

get_footer();
?>
 

