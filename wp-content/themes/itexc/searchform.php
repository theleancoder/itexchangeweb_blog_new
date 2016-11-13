<?php
/*
 * Search form
 */
?>
<div class="col-md-offset-6 col-md-6 col-xs-12">
    <form method="GET" id="wpsearchform" class="searchform" action="<?php echo esc_url(get_bloginfo('url')); ?>"> 
        <div class="input-group" id="serchBox">
            <input type="text" id="s" name="s" value="<?php echo get_search_query(); ?>"  class="form-control" placeholder="Search for keywords or dates">
            <span class="search-button"></span>
        </div><!-- /input-group -->
    </form>
</div>

