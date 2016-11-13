<?php
/*
 * Address widget is used to show the address.
 */

// Creating the widget 
class itexc_addr_widget extends WP_Widget {

    function __construct() {
        parent::__construct(
// Base ID of your widget
                'itexc_addr_widget',
// Widget name will appear in UI
                __('ITEXC Address Widget', 'itexcain'),
// Widget description
                array('description' => __('it has the address and social information.', 'itexcain'),)
        );
    }

// Creating widget front-end
// This is where the action happens
    public function widget($args, $instance) {
        $title = apply_filters('widget_title', $instance['title']);
// before and after widget arguments are defined by themes
        echo $args['before_widget'];
     // This is where you run the code and display the output

        $tbphone = $instance['tbphone'];
        $phone = $instance['phone'];
        $tbemail = $instance['tbemail'];
        $email = $instance['email'];
        $google = $instance['google'];
        $facebook = $instance['facebook'];
        $twitter = $instance['twitter'];
        $linkedin = $instance['linkedin'];

        //Define the HTML
        ?>
        <ul class="col-md-4 col-xs-12 footerAddr">
            <li><?php echo $title;?></li>
            <li><?php echo $tbphone; ?> <a href="tel:<?php echo stripcslashes(strip_tags($phone)); ?>"><?php echo $phone; ?></a> or</li>
            <li><?php echo $tbemail; ?> <a class="email" href="mailto:<?php echo $email; ?>"><?php echo $email; ?></a></li>
            <li>
  <!--              <a target="_blank" href="<?php echo $google; ?>"><i class="fa fa-3x fa-google-plus"></i></a>-->
                <a target="_blank" href="<?php echo $facebook; ?>"><i class="fa fa-2x fa-facebook"></i></a> 
                <a target="_blank" href="<?php echo $twitter; ?>"><i class="fa fa-2x fa-twitter"></i></a>
                <a target="_blank" href="<?php echo $linkedin; ?>"><i class="fa fa-2x fa-linkedin"></i></a>
            </li>
        </ul>    
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

        $tbphone = $instance['tbphone'];
        $phone = $instance['phone'];
        $tbemail = $instance['tbemail'];
        $email = $instance['email'];
        $google = $instance['google'];
        $facebook = $instance['facebook'];
        $twitter = $instance['twitter'];
        $linkedin = $instance['linkedin'];


// Widget admin form
        ?>
        <p>
            <label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title:'); ?></label> 
            <input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo esc_attr($title); ?>" />
        </p>
        <!-- Extra field -->
        <p>
            <label for="<?php echo $this->get_field_id('tbphone'); ?>"><?php _e('Text Befor Phone Number:'); ?></label> 
            <input class="widefat" id="<?php echo $this->get_field_id('tbphone'); ?>" name="<?php echo $this->get_field_name('tbphone'); ?>" type="text" value="<?php echo esc_attr($tbphone); ?>" />
        </p>
        
        <p>
            <label for="<?php echo $this->get_field_id('phone'); ?>"><?php _e('Phone Number:'); ?></label> 
            <input class="widefat" id="<?php echo $this->get_field_id('phone'); ?>" name="<?php echo $this->get_field_name('phone'); ?>" type="text" value="<?php echo esc_attr($phone); ?>" />
        </p>

         <p>
            <label for="<?php echo $this->get_field_id('tbemail'); ?>"><?php _e('Text Befor Email:'); ?></label> 
            <input class="widefat" id="<?php echo $this->get_field_id('tbemail'); ?>" name="<?php echo $this->get_field_name('tbemail'); ?>" type="text" value="<?php echo esc_attr($tbemail); ?>" />
        </p>

        <p>
            <label for="<?php echo $this->get_field_id('email'); ?>"><?php _e('Email:'); ?></label> 
            <input class="widefat" id="<?php echo $this->get_field_id('email'); ?>" name="<?php echo $this->get_field_name('email'); ?>" type="text" value="<?php echo esc_attr($email); ?>" />
        </p>

        
       <!-- <p>
            <label for="<?php echo $this->get_field_id('google'); ?>"><?php _e('Google plus Link:'); ?></label> 
            <input class="widefat" id="<?php echo $this->get_field_id('google'); ?>" name="<?php echo $this->get_field_name('google'); ?>" type="text" value="<?php echo esc_attr($google); ?>" />
        </p>
-->
        <p>
            <label for="<?php echo $this->get_field_id('facebook'); ?>"><?php _e('Facebook Link:'); ?></label> 
            <input class="widefat" id="<?php echo $this->get_field_id('facebook'); ?>" name="<?php echo $this->get_field_name('facebook'); ?>" type="text" value="<?php echo esc_attr($facebook); ?>" />
        </p>

        <p>
            <label for="<?php echo $this->get_field_id('twitter'); ?>"><?php _e('Twitter Link:'); ?></label> 
            <input class="widefat" id="<?php echo $this->get_field_id('twitter'); ?>" name="<?php echo $this->get_field_name('twitter'); ?>" type="text" value="<?php echo esc_attr($twitter); ?>" />
        </p>

        <p>
            <label for="<?php echo $this->get_field_id('linkedin'); ?>"><?php _e('Linkedin Link:'); ?></label> 
            <input class="widefat" id="<?php echo $this->get_field_id('linkedin'); ?>" name="<?php echo $this->get_field_name('linkedin'); ?>" type="text" value="<?php echo esc_attr($linkedin); ?>" />
        </p>

        <!-- End Extra field -->

        <?php
    }

// Updating widget replacing old instances with new
    public function update($new_instance, $old_instance) {
        $instance = array();
        $instance['title'] = (!empty($new_instance['title']) ) ? $new_instance['title'] : '';

        $instance['tbphone'] = (!empty($new_instance['tbphone']) ) ? strip_tags($new_instance['tbphone']) : '';
        $instance['phone'] = (!empty($new_instance['phone']) ) ? strip_tags($new_instance['phone']) : '';
        $instance['tbemail'] = (!empty($new_instance['tbemail']) ) ? strip_tags($new_instance['tbemail']) : '';
        $instance['email'] = (!empty($new_instance['email']) ) ? strip_tags($new_instance['email']) : '';
   //     $instance['google'] = (!empty($new_instance['google']) ) ? strip_tags($new_instance['google']) : '';
        $instance['twitter'] = (!empty($new_instance['twitter']) ) ? strip_tags($new_instance['twitter']) : '';
        $instance['facebook'] = (!empty($new_instance['facebook']) ) ? strip_tags($new_instance['facebook']) : '';
        $instance['linkedin'] = (!empty($new_instance['linkedin']) ) ? strip_tags($new_instance['linkedin']) : '';
        return $instance;
    }

}

// Class wpb_widget ends here
// Register and load the widget
function itexc_load_widget() {
    register_widget('itexc_addr_widget');
}

add_action('widgets_init', 'itexc_load_widget');
?>
