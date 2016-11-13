<?php
/*
 * 404 default template file.
 */

get_header();
?>
<div class="container-fluid" id="perspectives" style="margin-top:0px;">

    <div class="container" id="blogBody" style="margin-top:0px;">
        <?php 
         //call the searchform.php file i.e wp search form.
        get_search_form();
        ?>


        <div class="col-md-12 col-xs-12" id="bigBlog">
            <div class="col-md-12 col-xs-12"  id="bigBlogImg">

            </div>
            <p class="col-md-12 col-xs-12">404 Error</p>
            <?php
            $adminEmail = get_option('admin_email');
            ?>
        </div>
        <strong>Page Not Found</strong>
        <p>The page you are trying to reach does not exist, or has been moved. Please use the menus or the search box to find what you are looking for.</p>
        <p>If you followed a link on this site to get here, please contact the <a href="mailto: <?php echo $adminEmail; ?>">administrator </a>so it can be corrected. </p>
    </div>
</div>

<?php
get_footer();
?>
