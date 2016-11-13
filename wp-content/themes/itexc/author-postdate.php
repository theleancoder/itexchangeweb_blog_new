<?php
/*
 * Describe the post information i.e author Name and post date. 
 */
global $post;
$userid  =$post->post_author;

//author name
$authorName ="";

            $fusername = get_the_author_meta('first_name', $userid);
            if (!empty($fusername)) {
              $authorName = $fusername . '&nbsp;' . get_the_author_meta('last_name', $userid);
            } else {
              $authorName =   get_the_author();
            }

?>
<span>by</span> 
    <span>
        <a class="author-post wpauthor" title="View all posts of <?php echo $authorName; ?>" href="<?php echo get_author_posts_url($userid); ?>">
            <?php
            /*
             * Author first and last name, if not provided then show the username.
             */
             echo $authorName;
            ?>
        </a>
    </span>
    <span><?php echo get_the_time('d M Y'); ?></span>
