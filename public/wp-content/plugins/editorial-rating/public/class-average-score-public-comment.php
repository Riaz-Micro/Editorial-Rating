<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://forhad.net/
 * @since      1.0.0
 *
 * @package    WPAS_Editorial_Rating
 * @subpackage WPAS_Editorial_Rating/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    WPAS_Editorial_Rating
 * @subpackage WPAS_Editorial_Rating/public
 * @author     Forhad Hossain <need@forhad.net>
 */
class WPAS_Editorial_Rating_Public_Comment {

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
	 * @param      string $plugin_name       The name of the plugin.
	 * @param      string $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version     = $version;

		/**
		 * A Custom function to get post meta with sanitization and validation.
		 *
		 * @param Number $post_id Current post ID.
		 * @param string $option Meta key.
		 * @param Mixed  $default Default meta value.
		 * @param string $option_two Nested meta key.
		 * @param Mixed  $default_two Nested meta value.
		 * @return mixed
		 */
		function wpas_get_post_meta( $post_id, $option = '', $default = null, $option_two = '', $default_two = null ) {

			// Get the ER byproduct data.
			$wpas_erbp_opt_values     = get_post_meta( $post_id, '_wpas_er_byproduct_options', true );
			$wpas_erbp_selected_er_id = isset( $wpas_erbp_opt_values['wpas-cpt-review-selected-for'] ) ? $wpas_erbp_opt_values['wpas-cpt-review-selected-for'] : '';
			$options                  = get_post_meta( $wpas_erbp_selected_er_id, '_wpas_er_options', true );

			// Get values.
			if ( ! empty( $option_two ) ) {

				return ( isset( $options[ $option ][ $option_two ] ) ) ? $options[ $option ][ $option_two ] : $default_two;
			} else {

				return ( isset( $options[ $option ] ) ) ? $options[ $option ] : $default;
			}
		}

	}

	/**
	 * Add fields to comment box.
	 *
	 * @return void
	 */
	public function wpas_comment_review_fields() {

		// Enqueuing.
		wp_enqueue_script( $this->plugin_name . 'wpas-star-comment' );

		// Get the ER byproduct data.
		$wpas_post_id                  = get_the_ID();
		$wpas_erbp_opt_values          = get_post_meta( $wpas_post_id, '_wpas_er_byproduct_options', true );
		$wpas_editorial_rating_comment = isset( $wpas_erbp_opt_values['wpas-cpt-review-comment-allowed'] ) ? $wpas_erbp_opt_values['wpas-cpt-review-comment-allowed'] : '';
		$wpas_erbp_selected_er_id      = isset( $wpas_erbp_opt_values['wpas-cpt-review-selected-for'] ) ? $wpas_erbp_opt_values['wpas-cpt-review-selected-for'] : '';

		// Shows if allowed review comment in this post.
		if ( $wpas_editorial_rating_comment && ! empty( $wpas_erbp_selected_er_id ) ) {
			?>
		<p class="wpas-comment-form-review">
			<span>Make a review?</span>
			<label class="wpas-review-switch"><input type="checkbox" name="wpas_comment_review_switch" id="wpas_comment_review_switch" /><span class="wpas-review-switch-slider wpas-round"></span></label>

			<div class="wpas-review-comment-box">

				<label for="wpas_comment_review_headline">Review Headline :</label>
				<input type="text" name="wpas_comment_review_headline" id="wpas_comment_review_headline" />
			<?php

			wp_enqueue_style( $this->plugin_name . '-comment' );

			$wpas_global_options           = get_option( '_wpas_global_options' );
			$wpas_product_rating_bar_color = isset( $wpas_global_options['wpas-tabbed']['wpas-rating-category-colors']['rating-bar'] ) ? $wpas_global_options['wpas-tabbed']['wpas-rating-category-colors']['rating-bar'] : '';

			$wpas_editorial_rating_show = wpas_get_post_meta( $wpas_post_id, 'wpas-editorial-rating-show' );
			$wpas_editorial_rating      = wpas_get_post_meta( $wpas_post_id, 'wpas-editorial-rating' );

			if ( $wpas_editorial_rating_show ) {

				echo '<style>.wpas-review-comment-box .wpas--rating-meter-comment input {accent-color:' . $wpas_product_rating_bar_color . ';}</style>';
				$wpas_i = 0;
				echo '<div class="wpas--rating-categories">';
				$wpas_total_rating = 0;
				foreach ( $wpas_editorial_rating as $wpas_editorial_rating_key => $wpas_editorial_rating_value ) {

					$wpas_root_key = 'wpas_comment_rating_' . $wpas_i;
					$wpas_cat_rate = round( $wpas_editorial_rating_value['wpas-editorial-rating-category-rate'] );

					echo '<div class="wpas--rating-wrap-com">
							<div class="wpas--rating-detail">
								<label for="wpas--rating-name">' . $wpas_editorial_rating_value['wpas-editorial-rating-category-name'] . '</label>
								<span class="wpas--rating-rate"><strong class="wpas-com-score">' . $wpas_cat_rate . '</strong></span>
							</div>
							<div class="wpas--rating-meter-comment">	
								<input type="range" id="wpas_comment_rating_' . $wpas_i . '" name="wpas_comment_rating_' . $wpas_i . '" class="wpas-range" min="0" max="10" step="1" value="' . $wpas_cat_rate . '">
							</div>
						</div>';
					$wpas_total_rating += $wpas_cat_rate;
					$wpas_i++;
				}
				$wpas_total_rating_math       = $wpas_total_rating / $wpas_i;
				$wpas_total_rating_math_round = number_format( $wpas_total_rating_math, 1 );
				echo '</div>'; // wpas--rating-categories.
				echo '<div class="wpas--rating-score-math" data-categories="' . esc_attr( $wpas_i ) . '">
					<span>Your Final Score: </span>
					<span class="wpas-final-user-rate">' . $wpas_total_rating_math_round . '</span>
				</div>';
				echo '</div>'; // wpas-review-comment-box.
				echo '</p>'; // wpas-comment-form-review.
			}
		}
	}

	/**
	 * Saving values.
	 *
	 * @param Number $comment_id
	 * @return void
	 */
	public function wpas_comment_review_insert( $comment_id ) {

		$wpas_comment_id            = get_comment( $comment_id );
		$wpas_comment_post_id       = $wpas_comment_id->comment_post_ID;
		$wpas_editorial_rating_show = wpas_get_post_meta( $wpas_comment_post_id, 'wpas-editorial-rating-show' );
		$wpas_editorial_rating      = wpas_get_post_meta( $wpas_comment_post_id, 'wpas-editorial-rating' );

		// Save Review Switch.
		if ( isset( $_POST['wpas_comment_review_switch'] ) ) {

			update_comment_meta( $comment_id, 'wpas_comment_review_switch', esc_attr( $_POST['wpas_comment_review_switch'] ) );
		}

		// Save Review Heading.
		if ( isset( $_POST['wpas_comment_review_headline'] ) ) {

			update_comment_meta( $comment_id, 'wpas_comment_review_headline', esc_attr( $_POST['wpas_comment_review_headline'] ) );
		}

		// Save all ratings.
		if ( $wpas_editorial_rating_show ) {

			$wpas_i = 0;
			foreach ( $wpas_editorial_rating as $wpas_editorial_rating_key => $wpas_editorial_rating_value ) {

				$wpas_root_key = 'wpas_comment_rating_' . $wpas_i;
				update_comment_meta( $comment_id, $wpas_root_key, esc_attr( $_POST[ $wpas_root_key ] ) );
				$wpas_i++;
			}
		}

	}

	/**
	 * Adding values to the comment.
	 * Hook in way late to avoid colliding with default
	 * WordPress comment text filters
	 */
	public function wpas_review_to_comment( $text, $comment ) {

		if ( is_admin() ) {

			return $text;
		}

		$wpas_post_id               = get_the_ID();
		$wpas_editorial_rating_show = wpas_get_post_meta( $wpas_post_id, 'wpas-editorial-rating-show' );
		$wpas_editorial_rating      = wpas_get_post_meta( $wpas_post_id, 'wpas-editorial-rating' );
		$wpas_has_review            = get_comment_meta( $comment->comment_ID, 'wpas_comment_review_switch', true );
		$wpas_review_heading        = get_comment_meta( $comment->comment_ID, 'wpas_comment_review_headline', true );

		ob_start(); // Turn on output buffering.

		echo $text;

		if ( $wpas_has_review ) {
			?>
			<h4 class="wpas-cc-rating-headline"><?php echo esc_html( $wpas_review_heading ); ?></h4>
			<div class="wpas-comment-content-rating">
				<ul>
					<?php
					if ( $wpas_editorial_rating_show ) {

						$wpas_i                    = 0;
						$wpas_total_rating_updated = 0;
						$wpas_total_rating_origin  = 0;
						foreach ( $wpas_editorial_rating as $wpas_editorial_rating_key => $wpas_editorial_rating_value ) {

							$wpas_root_key = 'wpas_comment_rating_' . $wpas_i;
							$wpas_cat_rate = round( $wpas_editorial_rating_value['wpas-editorial-rating-category-rate'] );
							echo '<li>
									<span class="wpas-cc-rating-category">' . $wpas_editorial_rating_value['wpas-editorial-rating-category-name'] . '</span>
									<div class="wpas-cc-rating-wrap">
										<span class="wpas-cc-rating-rate-origin" style="width: ' . $wpas_cat_rate . '0%;"><strong>' . $wpas_cat_rate . '</strong></span>
										<span class="wpas-cc-rating-rate-updated" style="width: ' . round( get_comment_meta( $comment->comment_ID, $wpas_root_key, true ) ) . '0%;"><strong>' . round( get_comment_meta( $comment->comment_ID, $wpas_root_key, true ) ) . '</strong></span>
									</div>
								</li>';
							$wpas_total_rating_updated += round( get_comment_meta( $comment->comment_ID, $wpas_root_key, true ) );
							$wpas_total_rating_origin  += $wpas_cat_rate;
							$wpas_i++;
						}
						$wpas_total_rating_origin_math        = $wpas_total_rating_origin / $wpas_i;
						$wpas_total_rating_updated_math       = $wpas_total_rating_updated / $wpas_i;
						$wpas_total_rating_math_round_origin  = number_format( $wpas_total_rating_origin_math, 1 );
						$wpas_total_rating_math_round_updated = number_format( $wpas_total_rating_updated_math, 1 );
					}
					?>
				</ul>

				<div class="wpas-cc-total-rate-wrap">
					<span class="wpas-cc-total-rate-origin">Author Rate: <?php echo esc_html( $wpas_total_rating_math_round_origin ); ?></span>
					<span class="wpas-cc-total-rate-updated">Commenter Rate: <?php echo esc_html( $wpas_total_rating_math_round_updated ); ?></span>
				</div>
			</div>
			<?php
		}
		return ob_get_clean(); // Turn off ouput buffer and print output.
	}

}
