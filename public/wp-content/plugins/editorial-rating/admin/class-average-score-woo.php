<?php

/**
 * The WooCommerce functionality of the plugin.
 *
 * @link       https://forhad.net/
 * @since      1.0.0
 *
 * @package    WPAS_Editorial_Rating
 * @subpackage WPAS_Editorial_Rating/admin
 */

/**
 * The WooCommerce functionality of the plugin.
 *
 * Defines the plugin name, version.
 *
 * @package    WPAS_Editorial_Rating
 * @subpackage WPAS_Editorial_Rating/admin
 * @author     Forhad Hossain <need@forhad.net>
 */
class WPAS_Editorial_Rating_WOO {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version     = $version;

	}

    /**
     * Showing ER.
     */
    public function wpas_show_woo_er() {
		
        // Getting values.
        $wpas_woo_meta_values = get_post_meta( get_the_ID(), '_wpas_er_woo_options', true );
        $wpas_woo_show_er = isset( $wpas_woo_meta_values['wpas-woo-editorial-rating-show'] ) ? $wpas_woo_meta_values['wpas-woo-editorial-rating-show'] : '';
        $wpas_woo_er_repeater = isset( $wpas_woo_meta_values['wpas-woo-editorial-rating'] ) ? $wpas_woo_meta_values['wpas-woo-editorial-rating'] : '';
        $wpas_woo_show_anim = isset( $wpas_woo_meta_values['wpas-woo-bar-animation'] ) ? $wpas_woo_meta_values['wpas-woo-bar-animation'] : '';
        $wpas_woo_show_pros_cons = isset( $wpas_woo_meta_values['wpas-woo-pros-cons-shows'] ) ? $wpas_woo_meta_values['wpas-woo-pros-cons-shows'] : '';
        $wpas_woo_pros_label = isset( $wpas_woo_meta_values['wpas-woo-pros-label'] ) ? $wpas_woo_meta_values['wpas-woo-pros-label'] : '';
        $wpas_woo_pros_repeater = isset( $wpas_woo_meta_values['wpas-woo-pros'] ) ? $wpas_woo_meta_values['wpas-woo-pros'] : '';
        $wpas_woo_cons_label = isset( $wpas_woo_meta_values['wpas-woo-cons-label'] ) ? $wpas_woo_meta_values['wpas-woo-cons-label'] : '';
        $wpas_woo_cons_repeater = isset( $wpas_woo_meta_values['wpas-woo-cons'] ) ? $wpas_woo_meta_values['wpas-woo-cons'] : '';

        // Enqueuing.
        wp_enqueue_style( $this->plugin_name . '-icomoon' );

        if ( ! empty( $wpas_woo_er_repeater ) ) {

            // Get the score.
			$wpas_woo_i            = 0;
			$wpas_woo_total_rating = 0;
			foreach ( $wpas_woo_er_repeater as $wpas_woo_er_repeater_key => $wpas_woo_er_repeater_value ) {
				$wpas_woo_total_rating += round( $wpas_woo_er_repeater_value['wpas-woo-editorial-rating-category-rate'] );
				$wpas_woo_i++;
			}
			$wpas_woo_total_rating_math       = $wpas_woo_total_rating / $wpas_woo_i;
			$wpas_woo_total_rating_math_round = number_format( $wpas_woo_total_rating_math, 1 );
        }
        ?>
        <style>
        .wpas-woo-rating-score {
            display: flex;
            gap: 20px;
        }
        .wpas-woo-rating-score-card {
            display: inline-flex;
            flex-direction: column;
            text-align: center;
            max-width: 125px;
            flex-basis: 30%;
            margin-top: 6px;
        }
        .wpas-woo-rating-categories {
            flex-basis: 70%;
        }
        .wpas-woo-rating-score-point {
            background: #E43917;
            color: #fff;
            font-size: 52px;
            padding: 0px 20px;
            line-height: 80px;
            font-weight: bold;
        }
        .wpas-woo-rating-score-text {
            background-color: #000;
            color: #fff;
            font-size: 12px;
            font-weight: bold;
            padding: 6px 0;
        }
        .wpas-woo-rating-details {
            display: flex;
            justify-content: space-between;
            gap: 10px;
            padding: 0 3px;
            margin-bottom: 3px;
        }
        .wpas-woo-rating-name {
            font-size: 16px;
            line-height: 20px;
            letter-spacing: 0px;
            font-weight: 700;
            color: #000;
        }
        .wpas-woo-rating-rate {
            font-size: 16px;
            line-height: 20px;
            letter-spacing: 0px;
            font-weight: bold;
            color: #E43917;
        }
        .wpas-woo-rating-meter {
            background: #dddddd;
            border-radius: 7px;
        }
        span.wpas-woo-rating-bar {
            background: #E43917;
            padding: 4px;
            border-radius: 7px;
            display: block;
        }
        .wpas-woo-rating-categories .wpas-woo-rating-meter:not(:last-child) {
            margin-bottom: 8px;
        }
        .wpas-woo-wrapper {
            margin-top: 20px;
            box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
            padding: 20px;
        }
        .wpas-woo-pros-cons {
            margin-top: 20px;
        }
        .wpas-woo-pros-title,
        .wpas-woo-cons-title {
            color: #58c649;
            font-size: 20px;
            line-height: 20px;
            letter-spacing: 0px;
            font-weight: 700;
            margin-bottom: 10px;
        }
        .wpas-woo-cons-title {
            color: #f24f4f;
        }
        ul.wpas-woo-pros-list,
        ul.wpas-woo-cons-list {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        ul.wpas-woo-pros-list li,
        ul.wpas-woo-cons-list li {
            color: #333333;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0px;
            font-weight: 400;
        }

        ul.wpas-woo-pros-list li span.icon-checkmark:before,
        ul.wpas-woo-cons-list li span.icon-cross:before {
            background-color: #58c649;
            font-size: 12px;
            padding: 4px;
            border-radius: 50%;
            color: #fff;
            margin-right: 8px;
        }
        ul.wpas-woo-cons-list li span.icon-cross:before {
            color: #f24f4f;
            background: transparent;
            font-size: 14px;
        }
        .wpas-woo-pros-wrap {
            margin-bottom: 15px;
        }
        </style>
        <div class="wpas-woo-wrapper">
            <?php if ( $wpas_woo_show_er ) : ?>
            <div class="wpas-woo-rating-score">
                <div class="wpas-woo-rating-score-card">
                    <div class="wpas-woo-rating-score-point"><?php echo $wpas_woo_total_rating_math_round; ?></div>
                    <div class="wpas-woo-rating-score-text">Total Score</div>
                </div>
                <div class="wpas-woo-rating-categories">
                <?php
                foreach ( $wpas_woo_er_repeater as $wpas_woo_er_repeater_key => $wpas_woo_er_repeater_value ) {

                    echo '<div class="wpas-woo-rating-details">
                        <div class="wpas-woo-rating-name">' . $wpas_woo_er_repeater_value['wpas-woo-editorial-rating-category-name'] . '</div>
                        <div class="wpas-woo-rating-rate">' . $wpas_woo_er_repeater_value['wpas-woo-editorial-rating-category-rate'] . '</div>
                    </div>
                    <div class="wpas-woo-rating-meter">
                        <span class="wpas-woo-rating-bar" style="width: ' . round( $wpas_woo_er_repeater_value['wpas-woo-editorial-rating-category-rate'] ) . '0%;"></span>
                    </div>';
                    
                }
                ?>
                </div>
            </div>
            <?php endif; ?>
            <?php if ( $wpas_woo_show_pros_cons ) : ?>
            <div class="wpas-woo-pros-cons">
                <div class="wpas-woo-pros-wrap">
                    <div class="wpas-woo-pros-title"><?php echo $wpas_woo_pros_label; ?></div>
                    <ul class="wpas-woo-pros-list">
                    <?php
                    foreach ( $wpas_woo_pros_repeater as $pros ) {
                        
                        echo '<li><span class="icon-checkmark"></span>' . $pros['wpas-woo-pros-list'] . '</li>';
                    }
                    ?>
                    </ul>
                </div>
                <div class="wpas-woo-cons-wrap">
                    <div class="wpas-woo-cons-title"><?php echo $wpas_woo_cons_label; ?></div>
                    <ul class="wpas-woo-cons-list">
                    <?php
                    foreach ( $wpas_woo_cons_repeater as $cons ) {
                        
                        echo '<li><span class="icon-cross"></span>' . $cons['wpas-woo-cons-list'] . '</li>';
                    }
                    ?>
                    </ul>
                </div>
            </div>
            <?php endif; ?>
        </div>
        <?php
    }

}
