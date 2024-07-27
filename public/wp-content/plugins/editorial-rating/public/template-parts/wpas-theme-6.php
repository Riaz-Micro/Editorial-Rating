<?php
/**
 * ER Theme - 6
 *
 * @package    WPAS_Editorial_Rating
 * @subpackage WPAS_Editorial_Rating/public
 */

// Get pros-cons label.
$wpas_pros_label    = empty( $wpas_meta_values['wpas-pros-label'] ) ? 'Pros' : $wpas_meta_values['wpas-pros-label'];
$wpas_cons_label    = empty( $wpas_meta_values['wpas-cons-label'] ) ? 'Cons' : $wpas_meta_values['wpas-cons-label'];
$wpas_feature_list  = isset( $wpas_meta_values['wpas-feature-list'] ) ? $wpas_meta_values['wpas-feature-list'] : '';
$wpas_product_price = isset( $wpas_meta_values['wpas-product-price'] ) ? $wpas_meta_values['wpas-product-price'] : '';
$wpas_tag_best_for  = isset( $wpas_meta_values['wpas-tag-best-for'] ) ? $wpas_meta_values['wpas-tag-best-for'] : '';

// Enqueuing.
wp_enqueue_style( $this->plugin_name . '-theme-6' );
wp_enqueue_script( $this->plugin_name . 'wpas-star-rating' );
wp_enqueue_script( $this->plugin_name . 'wpas-useful-script' );
$wpas_bar_animation_data = '';
if ( $wpas_bar_animation ) {

	$wpas_bar_animation_data = 'true';
} else {

	$wpas_bar_animation_data = 'false';
}

$wpas_user_id           = get_the_author_meta( 'ID' );
$wpas_trmr_percent      = str_replace( '.', '', $wpas_total_rating_math_round );

// Generating Rating Grate.
if ( $wpas_trmr_percent >= 75 ) {
	$wpas_trmr_grade = 'Excellent!';
} elseif ( $wpas_trmr_percent >= 50 ) {
	$wpas_trmr_grade = 'Good';
} elseif ( $wpas_trmr_percent >= 25 ) {
	$wpas_trmr_grade = 'Fair';
} else {
	$wpas_trmr_grade = 'Poor';
}

// Author Designation.
$wpas_author_designation = isset( $wpas_meta_values['wpas-author-designation'] ) ? $wpas_meta_values['wpas-author-designation'] : '';
?>
<div id="wpas-er-<?php echo esc_attr( $wpas_post_id ); ?>" class="wpas--rating-wrap wpas-theme-6" data-id="<?php echo esc_attr( $wpas_post_id ); ?>" data-vote="<?php echo esc_attr( $frhd_total_vote ); ?>" data-star="<?php echo esc_attr( $frhd_total_star ); ?>" data-baranim="<?php echo esc_attr( $wpas_bar_animation_data ); ?>">
	<!-- table area -->
	<div class="er6-table-area">
		<div class="er6-single-col">
			<h4 class="er6-table-title">Ratings</h4>
			<div class="er6-table-content">
				<div class="er6-top-content">
					<?php 
						if ($wpas_editorial_rating_show) { 
							// Function to determine the color based on the rating
							if (!function_exists('get_rating_color')) {
								function get_rating_color($rating) {
									if ($rating >= 8) {
										return '#4CAF50'; // Green
									} elseif ($rating >= 6) {
										return '#FFC107'; // Yellow
									} elseif ($rating >= 4) {
										return '#FF9800'; // Orange
									} else {
										return '#F44336'; // Red
									}
								}
							}
							echo '<div class="wpas--rating-categories">';
							foreach ($wpas_editorial_rating as $wpas_editorial_rating_key => $wpas_editorial_rating_value) { 
								$rating = $wpas_editorial_rating_value['wpas-editorial-rating-category-rate'];
								$color = get_rating_color($rating);
								echo '<div class="rating-wrap">
									<div class="wpas--rating-detail">
										<span class="wpas--rating-name">' . $wpas_editorial_rating_value['wpas-editorial-rating-category-name'] . '</span>
										<span class="wpas--rating-rate" style="color: ' . $color . '!important;"><strong>' . $rating . '</strong></span>
									</div>
									<div class="wpas--rating-meter">
										<span class="wpas--rating-bar" style="width: ' . round($rating) . '0%; background-color: ' . $color . ';"></span>
									</div>
								</div>';
							}
							echo '</div>';
						}
					?>
				</div>
				<div class="er6-bottom-content">
					<p class="er6-bottom-title">Overall Score :</p> 
					<?php echo ' <span class="er6-bottom-value">' . $wpas_total_rating_math_round . '</span>' ?>
				</div>
			</div>
		</div>
		<div class="er6-single-col er6-features-col">
			<h4 class="er6-table-title">Features & Pricing</h4>
			<div class="er6-table-content">
				<div class="er6-top-content ">
					<ul class="er6-features-list">
						<?php
						foreach ( $wpas_feature_list as $feature ) {
							
							echo '<li>' . $feature['wpas-feature'] . '</li>';
						}
						?>
					</ul>
				</div>
				<div class="er6-bottom-content">
					<p class="er6-bottom-title">Price starting at:</p> 
					<span class="er6-bottom-value"><?php echo $wpas_product_price; ?></span>
				</div>
			</div>
		</div>
		<div class="er6-single-col">
			<?php echo ' <h4 class="er6-table-title">' . $wpas_pros_label . ' & ' . $wpas_cons_label . '</h4>' ?>
			<div class="er6-table-content">
				<div class="er6-top-content">
					<ul class="er6-pros-cons-list">
						<?php 
							foreach ( $wpas_wpas_pros as $wpas_wpas_pros_key => $wpas_wpas_pros_value ) {
								echo '<li class="er6-pros">' . $wpas_wpas_pros_value['wpas-pros-list'] . '</li>';
							}
							foreach ( $wpas_wpas_cons as $wpas_wpas_cons_key => $wpas_wpas_cons_value ) {
								echo '<li class="er6-cons">' . $wpas_wpas_cons_value['wpas-cons-list'] . '</li>';
							}
						?>
					</ul>
				</div>
				<div class="er6-bottom-content er6-pros-cons-bottom">
					<p class="er6-bottom-title"><?php echo $wpas_tag_best_for; ?></p> 
				</div>
			</div>
		</div>
	</div>
	<!-- Bottom Area -->
	<div class="er6-bottom-area">
		<div class="er6-bottom-col">
			<div class="er6-bottom-left-side">
				<!-- Product image -->
				<?php
					if ( $wpas_product_image_url ) {

						if ( $wpas_product_img_linked ) {

							echo '<figure class="wpas--product-img">
								<a href="' . $wpas_product_btn_url . '" target="' . ( '1' !== $wpas_product_btn_target ? '_self"' : '_blank"' ) . ( '1' === $wpas_product_btn_nofollow ? ' rel="nofollow"' : '' ) . '>
									<img width="150px" height="50px" src="' . esc_url( $wpas_product_image_url ) . '" alt="' . esc_attr( $wpas_product_image_alt ) . '">
								</a>
							</figure>';
						} else {

							echo '<figure class="wpas--product-img">
								<img width="150px" height="50px" src="' . esc_url( $wpas_product_image_url ) . '" alt="' . esc_attr( $wpas_product_image_alt ) . '">
							</figure>';
						}
					}
				?>
			</div>
		</div>
		<div class="er6-bottom-col">
			<?php 
				if ( $wpas_score_overview ) { 
					$words = explode(" ", $wpas_score_overview);
					$shortContent = implode(" ", array_slice($words, 0, 40));
					if (count($words) > 40) {
						$shortContentWithEllipsis = $shortContent . '...';
					} else {
						$shortContentWithEllipsis = $shortContent;
					}
					echo '<p class="er6-description">' . $shortContentWithEllipsis  . '</p>';
				}
			?>
		</div>
		<div class="er6-bottom-col">
			<!-- User Rating -->
			<?php if ( $wpas_user_rating_shows ) : ?>
				<div class="frhd--user-rating">
					<div class="frhd--rate-cover">
						<span class="frhd--rate-visual"></span>
					</div>
					<h5 class="wpas--total-category"><span><?php echo esc_html( $frhd_rate_math_round ); ?>/5 by <?php echo $frhd_total_vote; ?> Users</span></h5>
				</div>
			<?php endif; ?>
			<div class="buttons">
				<a href="<?php echo esc_url( $wpas_product_btn_url ); ?>"target="<?php echo ( '1' !== $wpas_product_btn_target ? '_self"' : '_blank"' ) . ( '1' === $wpas_product_btn_nofollow ? ' rel="nofollow"' : '' ) . '>'; ?><?php echo esc_html( $wpas_product_btn_txt ); ?></a>
			</div>
		</div>
	</div>

	<?php if ( $wpas_user_rating_shows ) : ?>
	<!-- Star Ratings Start -->
	<div class="wpas-star-rating-wrap">
		<span class="frhd-user-notice"><?php echo esc_html( $wpas_user_rating_pre_txt ); ?></span>
		<div class="wpas-star-rating">
			<input id="star-5" type="radio" name="rating" value="5">
			<label for="star-5">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.82819 2.13275L10.1988 4.87082C10.3331 5.13962 10.5923 5.32601 10.893 5.36914L13.959 5.81046C14.7165 5.91983 15.018 6.83791 14.4697 7.36396L12.2526 9.49433C12.0348 9.70382 11.9356 10.005 11.9871 10.3007L12.5103 13.3084C12.6392 14.0524 11.8473 14.62 11.1702 14.268L8.42991 12.847C8.16127 12.7076 7.83952 12.7076 7.57009 12.847L4.82975 14.268C4.15267 14.62 3.3608 14.0524 3.49043 13.3084L4.01288 10.3007C4.06443 10.005 3.96525 9.70382 3.74736 9.49433L1.53026 7.36396C0.982036 6.83791 1.28348 5.91983 2.041 5.81046L5.10699 5.36914C5.40765 5.32601 5.66771 5.13962 5.80203 4.87082L7.17181 2.13275C7.51074 1.45575 8.48926 1.45575 8.82819 2.13275Z" stroke="#A7A9AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
			</label>

			<input id="star-4" type="radio" name="rating" value="4">
			<label for="star-4">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.82819 2.13275L10.1988 4.87082C10.3331 5.13962 10.5923 5.32601 10.893 5.36914L13.959 5.81046C14.7165 5.91983 15.018 6.83791 14.4697 7.36396L12.2526 9.49433C12.0348 9.70382 11.9356 10.005 11.9871 10.3007L12.5103 13.3084C12.6392 14.0524 11.8473 14.62 11.1702 14.268L8.42991 12.847C8.16127 12.7076 7.83952 12.7076 7.57009 12.847L4.82975 14.268C4.15267 14.62 3.3608 14.0524 3.49043 13.3084L4.01288 10.3007C4.06443 10.005 3.96525 9.70382 3.74736 9.49433L1.53026 7.36396C0.982036 6.83791 1.28348 5.91983 2.041 5.81046L5.10699 5.36914C5.40765 5.32601 5.66771 5.13962 5.80203 4.87082L7.17181 2.13275C7.51074 1.45575 8.48926 1.45575 8.82819 2.13275Z" stroke="#A7A9AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
			</label>

			<input id="star-3" type="radio" name="rating" value="3">
			<label for="star-3">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.82819 2.13275L10.1988 4.87082C10.3331 5.13962 10.5923 5.32601 10.893 5.36914L13.959 5.81046C14.7165 5.91983 15.018 6.83791 14.4697 7.36396L12.2526 9.49433C12.0348 9.70382 11.9356 10.005 11.9871 10.3007L12.5103 13.3084C12.6392 14.0524 11.8473 14.62 11.1702 14.268L8.42991 12.847C8.16127 12.7076 7.83952 12.7076 7.57009 12.847L4.82975 14.268C4.15267 14.62 3.3608 14.0524 3.49043 13.3084L4.01288 10.3007C4.06443 10.005 3.96525 9.70382 3.74736 9.49433L1.53026 7.36396C0.982036 6.83791 1.28348 5.91983 2.041 5.81046L5.10699 5.36914C5.40765 5.32601 5.66771 5.13962 5.80203 4.87082L7.17181 2.13275C7.51074 1.45575 8.48926 1.45575 8.82819 2.13275Z" stroke="#A7A9AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
			</label>

			<input id="star-2" type="radio" name="rating" value="2">
			<label for="star-2">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.82819 2.13275L10.1988 4.87082C10.3331 5.13962 10.5923 5.32601 10.893 5.36914L13.959 5.81046C14.7165 5.91983 15.018 6.83791 14.4697 7.36396L12.2526 9.49433C12.0348 9.70382 11.9356 10.005 11.9871 10.3007L12.5103 13.3084C12.6392 14.0524 11.8473 14.62 11.1702 14.268L8.42991 12.847C8.16127 12.7076 7.83952 12.7076 7.57009 12.847L4.82975 14.268C4.15267 14.62 3.3608 14.0524 3.49043 13.3084L4.01288 10.3007C4.06443 10.005 3.96525 9.70382 3.74736 9.49433L1.53026 7.36396C0.982036 6.83791 1.28348 5.91983 2.041 5.81046L5.10699 5.36914C5.40765 5.32601 5.66771 5.13962 5.80203 4.87082L7.17181 2.13275C7.51074 1.45575 8.48926 1.45575 8.82819 2.13275Z" stroke="#A7A9AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
			</label>

			<input id="star-1" type="radio" name="rating" value="1">
			<label for="star-1">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.82819 2.13275L10.1988 4.87082C10.3331 5.13962 10.5923 5.32601 10.893 5.36914L13.959 5.81046C14.7165 5.91983 15.018 6.83791 14.4697 7.36396L12.2526 9.49433C12.0348 9.70382 11.9356 10.005 11.9871 10.3007L12.5103 13.3084C12.6392 14.0524 11.8473 14.62 11.1702 14.268L8.42991 12.847C8.16127 12.7076 7.83952 12.7076 7.57009 12.847L4.82975 14.268C4.15267 14.62 3.3608 14.0524 3.49043 13.3084L4.01288 10.3007C4.06443 10.005 3.96525 9.70382 3.74736 9.49433L1.53026 7.36396C0.982036 6.83791 1.28348 5.91983 2.041 5.81046L5.10699 5.36914C5.40765 5.32601 5.66771 5.13962 5.80203 4.87082L7.17181 2.13275C7.51074 1.45575 8.48926 1.45575 8.82819 2.13275Z" stroke="#A7A9AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
			</label>
		</div>
		<div class="frhd--user-rating-math-wrap">
			<strong class="frhd-rate-math"><?php echo esc_html( round( (float) $frhd_rate_math, 1 ) ); ?></strong>
			<span>(</span><span class="frhd-rate-count"><?php echo esc_html( $frhd_total_vote ); ?></span><span>)</span>
		</div>
	</div>
	<?php endif; ?>
</div>
