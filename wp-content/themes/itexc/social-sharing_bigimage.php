<?php
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
?>
<div class="col-md-5 col-xs-12" id="socialDetails">

<span  class="col-md-4 col-xs-4" data-url="<?php echo get_permalink(get_the_ID()); ?>"><i class="fa fa-facebook col-md-1"></i><?php echo itexc_flq_facebook_count(get_permalink(get_the_ID())); ?></span>
<!-- <span  class="col-md-4 col-xs-4"><i class="fa fa-twitter col-md-1"></i><?php echo itexc_twitter_count(get_permalink(get_the_ID())); ?></span> -->
<span  class="col-md-4 col-xs-4"><i class="fa fa-linkedin col-md-1"></i><?php echo itexc_linkedin_count(get_permalink(get_the_ID())); ?>
</span>

   <!-- Go to www.addthis.com/dashboard to customize your tools 
<div class="addthis_sharing_toolbox"></div>-->

</div>


