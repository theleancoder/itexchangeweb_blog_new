<?php
/*
 * Post title.
 */
?>
    <?php
        $titlePost = trim(get_the_title(get_the_ID()));
        $charCount = strlen($titlePost);

     $title_filtered = itexc_substrwords($titlePost,65);
        ?> 
<p title="<?php echo $titlePost; ?>" class="col-md-12 col-xs-12 wp_title-container" id="heading">

<?php echo $title_filtered; ?>
</p>

<span class="col-md-12 col-xs-12" id="description">
<?php 
        echo itexc_substrwords(get_the_content(),88);

//echo get_the_excerpt(); ?>
</span>
