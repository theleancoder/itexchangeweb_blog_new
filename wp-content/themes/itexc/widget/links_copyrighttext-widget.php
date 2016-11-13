<?php
/*
 * Describe the links and copyright text widget.
 */

// Creating the widget 
class itexc_links_copyright extends WP_Widget {

    function __construct() {
        parent::__construct(
// Base ID of your widget
                'itexc_links_copyrightid',
// Widget name will appear in UI
                __('ITEXC Links and copyright text Widget', 'itexcain'),
// Widget description
                array('description' => __('it has the links and copyright text information.', 'itexcain'),)
        );
    }

// Creating widget front-end
// This is where the action happens
    public function widget($args, $instance) {
        $title = apply_filters('widget_title', $instance['title']);
// before and after widget arguments are defined by themes
        echo $args['before_widget'];
        //Define the HTML

        $arrPages = array('Terms of use', 'Privacy policy');

        $copyright = $instance['copyright'];
        $sitemaplink= $instance['sitemap'];
        ?>
        <div class="container-fluid" id="footerBottom">
            <?php
            $title_termsofuse = $instance[sanitize_title("Terms of use")];
            $title_privacypol = $instance[sanitize_title("Privacy policy")];
            ?>
            <div class="col-md-2 col-xs-3"> <?php //echo get_permalink($title_termsofuse); ?>
                <a data-toggle="modal" data-target="#termUseModal" id="termOFUseButton" href="javascript:void(0);"><?php echo get_the_title($title_termsofuse); ?></a>
            </div>    

            <div class="col-md-2 col-xs-3"><?php //echo get_permalink($title_privacypol); ?>
                <a data-toggle="modal" data-target="#privacyPolicyModal" id="privacyPolicybutton" href="javascript:void(0);"><?php echo get_the_title($title_privacypol); ?></a>
            </div>

            <div class="col-md-2 col-xs-3">
                <a href="<?php echo $sitemaplink; ?>">Site Map</a>
            </div>

            <div class="col-md-3 col-xs-4">
                <i class="fa fa-copyright"></i> <?php echo $copyright; ?>
            </div>
        </div>

        <?php
        //Define the HTML : END


        echo $args['after_widget'];
    }

// Widget Backend 
    public function form($instance) {
        if (isset($instance['title'])) {
            $title = $instance['title'];
        } else {
            $title = __('New title', 'itexcain');
        }

        //getting the value
        $copyright = $instance['copyright'];
        $sitemap   = $instance['sitemap'];

// Widget admin form
        ?>
        <p>
            <label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title:'); ?></label> 
            <input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo esc_attr($title); ?>" />
        </p>

        <?php
        $arrPages = array('Terms of use', 'Privacy policy');
        foreach ($arrPages as $value) {
            ?> 
            <p>
                <label for="<?php echo $this->get_field_id(sanitize_title($value)); ?>"><?php _e($value); ?></label> 
                <select class="widefat" id="<?php echo $this->get_field_id(sanitize_title($value)); ?>" name="<?php echo $this->get_field_name(sanitize_title($value)); ?>"> 
                    <option value="">
                        <?php echo esc_attr(__('Select page')); ?></option> 
                    <?php
                    $pages = get_pages();

                    if (count($pages) > 0) {
                        foreach ($pages as $page) {

                            //selected text.
                            $idVal = $instance[sanitize_title($value)];

                            $selectTxt = ($idVal == $page->ID) ? "selected='selected'" : "";

                            $option = '<option value="' . $page->ID . '" ' . $selectTxt . '  >';
                            $option .= $page->post_title;
                            $option .= '</option>';
                            echo $option;
                        }
                    }
                    ?>
                </select>
            </p>  
        <?php } ?>
<!-- Sitempat link -->
<p>
            <label for="<?php echo $this->get_field_id('sitemap'); ?>"><?php _e('Enter the Site Map Link:'); ?></label> 
            <input type="text" class="widefat" id="<?php echo $this->get_field_id('sitemap'); ?>" name="<?php echo $this->get_field_name('sitemap'); ?>" value="<?php echo $sitemap; ?>" />
        </p>

<!-- Sitempat link -->

        <p>
            <label for="<?php echo $this->get_field_id('copyright'); ?>"><?php _e('Copyright:'); ?></label> 
            <textarea class="widefat" id="<?php echo $this->get_field_id('copyright'); ?>" name="<?php echo $this->get_field_name('copyright'); ?>" rows="5" cols="30"><?php echo $copyright; ?></textarea>
        </p>

        <!-- End Extra field -->

        <?php
    }

// Updating widget replacing old instances with new
    public function update($new_instance, $old_instance) {
        $instance = array();
        $instance['title'] = (!empty($new_instance['title']) ) ? $new_instance['title'] : '';

        //update the record.
        $arrPages = array('Terms of use', 'Privacy policy');
        if (count($arrPages) > 0) {
            foreach ($arrPages as $val) {
                $key = sanitize_title($val);
                $instance[$key] = (!empty($new_instance[$key]) ) ? $new_instance[$key] : '';
            }
        }
        $instance['sitemap'] = (!empty($new_instance['sitemap']) ) ? $new_instance['sitemap'] : '';
        $instance['copyright'] = (!empty($new_instance['copyright']) ) ? $new_instance['copyright'] : '';

        return $instance;
    }

}

// Class wpb_widget ends here
// Register and load the widget
function itexc_links_copyright_widget() {
    register_widget('itexc_links_copyright');
}

add_action('widgets_init', 'itexc_links_copyright_widget');
?>
