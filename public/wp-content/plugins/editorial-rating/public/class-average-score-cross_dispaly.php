<?php
$wpas_cr_theme_set             = isset( $wpas_cross_meta_values['wpas-cr-theme-set'] ) ? $wpas_cross_meta_values['wpas-cr-theme-set'] : '';
$wpas_cr_module_1              = isset( $wpas_cross_meta_values['wpas-cr-module-1'] ) ? $wpas_cross_meta_values['wpas-cr-module-1'] : '';
$wpas_cr_module_2              = isset( $wpas_cross_meta_values['wpas-cr-module-2'] ) ? $wpas_cross_meta_values['wpas-cr-module-2'] : '';
$wpas_cr_total_number_of_item  = isset( $wpas_cross_meta_values['wpas_cr_total_number_of_item'] ) ? $wpas_cross_meta_values['wpas_cr_total_number_of_item'] : '';
$wpas_cr_hl_label              = isset( $wpas_cross_meta_values['wpas_cr_hl_label'] ) ? $wpas_cross_meta_values['wpas_cr_hl_label'] : '';
$wpas_cros_rating_cat          = isset( $wpas_cross_meta_values['wpas_cros_rating_cat'] ) ? $wpas_cross_meta_values['wpas_cros_rating_cat'] : '';
$wpas_cr_section_title_show    = isset( $wpas_cross_meta_values['wpas_cr_section_title_show'] ) ? $wpas_cross_meta_values['wpas_cr_section_title_show'] : '';
$wpas_product_img_show         = isset( $wpas_cross_meta_values['wpas_product_img_show'] ) ? $wpas_cross_meta_values['wpas_product_img_show'] : '';
$wpas_cr_category_list_show    = isset( $wpas_cross_meta_values['wpas_cr_category_list_show'] ) ? $wpas_cross_meta_values['wpas_cr_category_list_show'] : '';
$wpas_cr_user_rating_star_show = isset( $wpas_cross_meta_values['wpas_cr_user_rating_star_show'] ) ? $wpas_cross_meta_values['wpas_cr_user_rating_star_show'] : '';
$wpas_cr_pros_cons_show        = isset( $wpas_cross_meta_values['wpas_cr_pros_cons_show'] ) ? $wpas_cross_meta_values['wpas_cr_pros_cons_show'] : '';
$wpas_cr_desc_show             = isset( $wpas_cross_meta_values['wpas_cr_desc_show'] ) ? $wpas_cross_meta_values['wpas_cr_desc_show'] : '';
$wpas_cros_rating_brand_color  = isset( $wpas_cross_meta_values['wpas_cros_rating_brand_color'] ) ? $wpas_cross_meta_values['wpas_cros_rating_brand_color'] : '';

if ( ! empty( $wpas_cros_rating_cat ) ) {
	$args = array(
		'post_type'      => 'wpas_review',
		'posts_per_page' => $wpas_cr_total_number_of_item,
		'tax_query'      => array(
			array(
				'taxonomy' => 'er_cat',
				'field'    => 'term_id',
				'terms'    => $wpas_cros_rating_cat,
			),
		),
	);

	$query = new WP_Query( $args );

	if ( $query->have_posts() ) {
		$score_array = array();

		while ( $query->have_posts() ) {

			$query->the_post();
			$wpas_post_id               = get_the_ID();
			$wpas_meta_values           = get_post_meta( $wpas_post_id, '_wpas_er_options', true );
			$wpas_editorial_rating      = isset( $wpas_meta_values['wpas-editorial-rating'] ) ? $wpas_meta_values['wpas-editorial-rating'] : '';
			$wpas_editorial_rating_pros = isset( $wpas_meta_values['wpas-pros'] ) ? $wpas_meta_values['wpas-pros'] : '';
			$wpas_editorial_rating_cons = isset( $wpas_meta_values['wpas-cons'] ) ? $wpas_meta_values['wpas-cons'] : '';
			$wpas_editorial_rating_overview = isset( $wpas_meta_values['wpas-score-overview'] ) ? $wpas_meta_values['wpas-score-overview'] : '';
			$wpas_er_product_img        = isset( $wpas_meta_values['wpas-product-image']['thumbnail'] ) ? $wpas_meta_values['wpas-product-image']['thumbnail'] : '';
			$wpas_er_btn_txt            = isset( $wpas_meta_values['wpas-product-btn']['wpas-product-btn-text'] ) ? $wpas_meta_values['wpas-product-btn']['wpas-product-btn-text'] : '';
			$wpas_er_btn_link           = isset( $wpas_meta_values['wpas-product-btn']['wpas-product-btn-link'] ) ? $wpas_meta_values['wpas-product-btn']['wpas-product-btn-link'] : '';
			$wpas_er_btn_target         = isset( $wpas_meta_values['wpas-product-btn']['wpas-product-btn-target'] ) ? $wpas_meta_values['wpas-product-btn']['wpas-product-btn-target'] : '';
			$wpas_er_btn_nofollow       = isset( $wpas_meta_values['wpas-product-btn']['wpas-product-btn-nofollow'] ) ? $wpas_meta_values['wpas-product-btn']['wpas-product-btn-nofollow'] : '';
			$wpas_tag_best_for          = isset( $wpas_meta_values['wpas-tag-best-for'] ) ? $wpas_meta_values['wpas-tag-best-for'] : '';

			// Get the score.
			$wpas_i            = 0;
			$wpas_total_rating = 0;
			$frhd_total_star   = 0;
			$frhd_total_vote   = 0;
			$category_array    = array();
			$pros_array        = array();
			$cons_array        = array();
			foreach ( $wpas_editorial_rating as $wpas_editorial_rating_value ) {

				$category_array[ $wpas_editorial_rating_value['wpas-editorial-rating-category-name'] ] = $wpas_editorial_rating_value['wpas-editorial-rating-category-rate'];
				$wpas_total_rating += round( $wpas_editorial_rating_value['wpas-editorial-rating-category-rate'] );
				$wpas_i++;
			}
			foreach ( $wpas_editorial_rating_pros as $wpas_value ) {

				$pros_array[] = $wpas_value['wpas-pros-list'];
			}
			foreach ( $wpas_editorial_rating_cons as $wpas_value ) {

				$cons_array[] = $wpas_value['wpas-cons-list'];
			}

			if ( isset( $wpas_meta_values['wpas-total-vote'] ) ) {
				$frhd_total_vote = (int) $wpas_meta_values['wpas-total-vote'];
			}

			if ( isset( $wpas_meta_values['wpas-total-star'] ) ) {
				$frhd_total_star = (int) $wpas_meta_values['wpas-total-star'];
			}

			// Get star fill percent.
			$frhd_rate_math = '';
			if ( $frhd_total_vote > 0 ) {

				$frhd_rate_math = ( $frhd_total_star / $frhd_total_vote );
			}
			$frhd_rate_math_round   = round( (float) $frhd_rate_math, 1 );
			$frhd_rate_math_percent = ( 20 * $frhd_rate_math_round );

			// Get rating math round.
			$wpas_total_rating_math       = $wpas_total_rating / $wpas_i;
			$wpas_total_rating_math_round = number_format( $wpas_total_rating_math, 1 );

			/**
			 * Store the score and other metadata in the array.
			 * 'score' should be kept the first place. Otherwise the arsort() will not working.
			 */
			$score_array[ $wpas_post_id ] = array(
				'score'           => $wpas_total_rating_math_round,
				'total_rating'    => $wpas_total_rating,
				'total_star'      => $frhd_total_star,
				'total_vote'      => $frhd_total_vote,
				'rate_percent'    => $frhd_rate_math_percent,
				'product_img'     => $wpas_er_product_img,
				'button_text'     => $wpas_er_btn_txt,
				'button_link'     => $wpas_er_btn_link,
				'button_target'   => $wpas_er_btn_target,
				'button_nofollow' => $wpas_er_btn_nofollow,
				'categories'      => $category_array,
				'pros'            => $pros_array,
				'cons'            => $cons_array,
				'overview'        => $wpas_editorial_rating_overview,
				'best_for'        => $wpas_tag_best_for,
			);
		}

		// Sort the score array in descending order.
		arsort( $score_array );

		switch ( $wpas_cr_theme_set ) {
			case 'set-1':
				require plugin_dir_path( __FILE__ ) . 'template-cross-rating/wpas-cr-1.php';
				break;

			case 'set-2':
				require plugin_dir_path( __FILE__ ) . 'template-cross-rating/wpas-cr-2.php';
				break;

			case 'set-3':
				require plugin_dir_path( __FILE__ ) . 'template-cross-rating/wpas-cr-3.php';
				break;

			case 'set-4':
				require plugin_dir_path( __FILE__ ) . 'template-cross-rating/wpas-cr-4.php';
				break;

			case 'set-5':
				require plugin_dir_path( __FILE__ ) . 'template-cross-rating/wpas-cr-5.php';
				break;

			case 'set-6':
				require plugin_dir_path( __FILE__ ) . 'template-cross-rating/wpas-cr-6.php';
				break;

			case 'set-7':
				require plugin_dir_path( __FILE__ ) . 'template-cross-rating/wpas-cr-7.php';
				break;
			
			default:
				require plugin_dir_path( __FILE__ ) . 'template-cross-rating/wpas-cr-1.php';
				break;
		}

		wp_reset_postdata();

	} else {

		echo '<p>No group selected!</p>';
	}
} else {

	echo '<p>No Category Assigned</p>';
}
