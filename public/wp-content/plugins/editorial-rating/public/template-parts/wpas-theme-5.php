<?php
/**
 * ER Theme - 5
 *
 * @package    WPAS_Editorial_Rating
 * @subpackage WPAS_Editorial_Rating/public
 */

// Get meta for theme 5.
$wpas_pros_label          = empty( $wpas_meta_values['wpas-pros-label'] ) ? 'Pros' : $wpas_meta_values['wpas-pros-label'];
$wpas_cons_label          = empty( $wpas_meta_values['wpas-cons-label'] ) ? 'Cons' : $wpas_meta_values['wpas-cons-label'];
$wpas_banner_image_url    = isset( $wpas_meta_values['wpas-banner-image']['url'] ) ? $wpas_meta_values['wpas-banner-image']['url'] : '';
$wpas_banner_image_alt    = isset( $wpas_meta_values['wpas-banner-image']['alt'] ) ? $wpas_meta_values['wpas-banner-image']['alt'] : '';
$wpas_banner_image_width  = isset( $wpas_meta_values['wpas-banner-image']['width'] ) ? $wpas_meta_values['wpas-banner-image']['width'] : '';
$wpas_banner_image_height = isset( $wpas_meta_values['wpas-banner-image']['height'] ) ? $wpas_meta_values['wpas-banner-image']['height'] : '';

// Enqueuing.
wp_enqueue_style( $this->plugin_name . '-theme-5' );
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
	$er_rating_status = '#4CAF50';
} elseif ( $wpas_trmr_percent >= 50 ) {
	$wpas_trmr_grade = 'Good';
	$er_rating_status = '#FFC107';
} elseif ( $wpas_trmr_percent >= 25 ) {
	$wpas_trmr_grade = 'Fair';
	$er_rating_status = '#FF9800';
} else {
	$wpas_trmr_grade = 'Poor';
	$er_rating_status = '#F44336';
}

// Author Designation.
$wpas_author_designation = isset( $wpas_meta_values['wpas-author-designation'] ) ? $wpas_meta_values['wpas-author-designation'] : '';
?>
<div id="wpas-er-<?php echo esc_attr( $wpas_post_id ); ?>" class="wpas--rating-wrap wpas-theme-5" 
	data-id="<?php echo esc_attr( $wpas_post_id ); ?>" 
	data-vote="<?php echo esc_attr( $frhd_total_vote ); ?>" 
	data-star="<?php echo esc_attr( $frhd_total_star ); ?>" 
	data-baranim="<?php echo esc_attr( $wpas_bar_animation_data ); ?>">

	<!-- Banner Area -->
	<div class="er-banner-section er-container">
		<?php 
			if ( $wpas_banner_image_url ) {
				echo '<img class="er-banner-background-image" src="' . esc_url( $wpas_banner_image_url ) . '" width="' . $wpas_banner_image_width . '" height="' . $wpas_banner_image_height . '" alt="' . esc_attr( $wpas_banner_image_alt ) . '">';
			}
		?>
		<div class="er-banner-box ">
			<?php if ( $wpas_editorial_date_show ) : ?>
				<div class="er-update-date">
					<div class="wpas--rating-date">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="12"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z"/></svg>
						<strong><?php echo esc_html( $wpas_editorial_date_label ); ?></strong>
						<?php
							if ( ! empty( $wpas_editorial_date_custom ) ) {

								echo '<time>' . $wpas_editorial_date_custom . '</time>';
							} else {

								echo '<time datetime="' . get_the_modified_date( 'c' ) . '">' . get_the_modified_date('d, M Y') . '</time>';
							}
						?>
					</div>
				</div>
			<?php endif; ?>

			<div class="er-banner-content">
				<?php
					if ( $wpas_product_name_linked ) {

						echo '<h2 class="er-caption"><a href="' . $wpas_product_btn_url . '" target="' . ( '1' !== $wpas_product_btn_target ? '_self"' : '_blank"' ) . ( '1' === $wpas_product_btn_nofollow ? ' rel="nofollow"' : '' ) . '>' . esc_html( $wpas_score_title ) . '</a></h2>';
					} else {

						echo '<h2 class="er-caption">' . esc_html( $wpas_score_title ) . '</h2>';
					}
					echo '<h4 class="er-banner-badge" style="background-color: ' . $er_rating_status . '; "> ' . $wpas_total_rating_math_round . '<br><span> '. $wpas_trmr_grade .' </span></h4>'
				?>
			</div>
		</div>
	</div>
    <!-- Review Area -->
	<div class="er-review-section">
		<div class="er-container">
			<div class="er-review-content">
				<div class="er-section-title-area">
					<h4>Pomperaug Reveiw</h4>
					<?php 
						if ( $wpas_score_overview ) { 
							$words = explode(" ", $wpas_score_overview);
							$shortContent = implode(" ", array_slice($words, 0, 22));
							$shortContentWithEllipsis = $shortContent . '...';
							echo '' . wp_kses_post( wpautop( $shortContentWithEllipsis ) ) . '';
						}
					?>
				</div>
				<!-- Pros List -->
				<div class="er-list-section pros">
				<?php echo'<h4>' . $wpas_pros_label . '</h4>'  ?>
					<ul>
						<?php 
							foreach ( $wpas_wpas_pros as $wpas_wpas_pros_key => $wpas_wpas_pros_value ) {
								echo '<li>' . $wpas_wpas_pros_value['wpas-pros-list'] . '</li>';
							}
						?>
					</ul>
				</div>
				<!-- Cons List -->
				<div class="er-list-section cons">
				<?php echo'<h4>' . $wpas_cons_label . '</h4>'  ?>
					<ul>
						<?php 
							foreach ( $wpas_wpas_cons as $wpas_wpas_cons_key => $wpas_wpas_cons_value ) {
								echo '<li>' . $wpas_wpas_cons_value['wpas-cons-list'] . '</li>';
							}
						?>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<!-- Progress Bar Area -->
	<div class="er-container">
		<div class="er-progress-bar-section">
			<?php
			// Product Image.
			if ( $wpas_product_image_url ) {

				if ( $wpas_product_img_linked ) {

					echo '<figure class="wpas--product-img">
						<a href="' . $wpas_product_btn_url . '" target="' . ( '1' !== $wpas_product_btn_target ? '_self"' : '_blank"' ) . ( '1' === $wpas_product_btn_nofollow ? ' rel="nofollow"' : '' ) . '>
							<img height="120" src="' . esc_url( $wpas_product_image_url ) . '" alt="' . esc_attr( $wpas_product_image_alt ) . '">
						</a>
					</figure>';
				} else {

					echo '<figure class="wpas--product-img">
						<img height="120" src="' . esc_url( $wpas_product_image_url ) . '" alt="' . esc_attr( $wpas_product_image_alt ) . '">
					</figure>';
				}
			}

			// Rating bars.
			if ($wpas_editorial_rating_show) {
				echo '<div class="wpas--rating-categories">';
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
				foreach ($wpas_editorial_rating as $wpas_editorial_rating_key => $wpas_editorial_rating_value) {
					$rating = $wpas_editorial_rating_value['wpas-editorial-rating-category-rate'];
					$color = get_rating_color($rating);
					echo '<div class="er-card">
							<span class="wpas--rating-name">' . $wpas_editorial_rating_value['wpas-editorial-rating-category-name'] . '</span>
							<div class="wpas--rating-meter">
								<span class="wpas--rating-bar" style="width: ' . round($rating) . '0%; background-color: ' . $color . ';"></span>
							</div>
							<span class="wpas--rating-rate" style="color: ' . $color . '!important;"><strong>' . $rating . '</strong></span>
						</div>';
				}
				echo '</div>'; // wpas--rating-categories.
			}
			?>
		</div>
	</div>
</div>
