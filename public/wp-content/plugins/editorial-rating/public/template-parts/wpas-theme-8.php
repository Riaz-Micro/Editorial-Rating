<?php
/**
 * ER Theme - 6
 *
 * @package    WPAS_Editorial_Rating
 * @subpackage WPAS_Editorial_Rating/public
 */

// Get pros-cons label.
$wpas_pros_label    		= empty( $wpas_meta_values['wpas-pros-label'] ) ? 'Pros' : $wpas_meta_values['wpas-pros-label'];
$wpas_cons_label    		= empty( $wpas_meta_values['wpas-cons-label'] ) ? 'Cons' : $wpas_meta_values['wpas-cons-label'];
$wpas_product_price 		= isset( $wpas_meta_values['wpas-product-price'] ) ? $wpas_meta_values['wpas-product-price'] : '';
$wpas_tag_best_for  		= isset( $wpas_meta_values['wpas-tag-best-for'] ) ? $wpas_meta_values['wpas-tag-best-for'] : '';
$wpas_product_gallery     	= isset( $wpas_meta_values['wpas-product-image-gallery'] ) ? $wpas_meta_values['wpas-product-image-gallery'] : '';
$wpas_product_gallery_ids 	= explode( ',', $wpas_product_gallery );

// Enqueuing.
wp_enqueue_style( $this->plugin_name . '-theme-8' );
wp_enqueue_script( $this->plugin_name . 'wpas-star-rating' );
wp_enqueue_script( $this->plugin_name . 'wpas-useful-script' );
$wpas_bar_animation_data = '';
if ( $wpas_bar_animation ) {
	$wpas_bar_animation_data = 'true';
} else {
	$wpas_bar_animation_data = 'false';
}

$wpas_rating_percentage = str_replace( '.', '', $wpas_total_rating_math_round );
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

// Dynamic Styles.
echo '<style>.frhd--er-meta-container,.frhd-er-progress .frhd-er-progress-value{background-color: ' . esc_attr( $wpas_heder_bg_color ) . ';}.wpas--rating-desc .wpas--rating-title + p {color: ' . esc_attr( $wpas_product_overview_color ) . ';}</style>';
?>
<div id="wpas-er-<?php echo esc_attr( $wpas_post_id ); ?>" class="wpas--rating-wrap wpas-theme-8" data-id="<?php echo esc_attr( $wpas_post_id ); ?>" data-vote="<?php echo esc_attr( $frhd_total_vote ); ?>" data-star="<?php echo esc_attr( $frhd_total_star ); ?>" data-baranim="<?php echo esc_attr( $wpas_bar_animation_data ); ?>">
<div class="er8-main-container">
	<!-- Image gallery Area -->
	<div class="er8-gallery-area">
	<!-- Large image slider -->
	<section class="splide" id="main-carousel" aria-label="Basic Structure Example">
		<div class="splide__track">
		<ul class="splide__list">
			<?php
				if ( ! empty( $wpas_product_gallery ) ) {
				foreach ( $wpas_product_gallery_ids as $item_id ) {
					echo '<li class="splide__slide"><a class="popup-img" data-gall="gallery01" href="' . wp_get_attachment_url( $item_id ) . '"><img src="' . wp_get_attachment_url( $item_id ) . '" alt="image"></a></li>';
				}
				} else {
					echo '<li class="splide__slide"><a class="popup-img" data-gall="gallery01" href="' . WPASER_DIR_URL_FILE . 'admin/img/t-shirt/tshirt-1.jpg"><img src="' . WPASER_DIR_URL_FILE . 'admin/img/t-shirt/tshirt-1.jpg" alt="image"></a></li>';
					echo '<li class="splide__slide"><a class="popup-img" data-gall="gallery01" href="' . WPASER_DIR_URL_FILE . 'admin/img/t-shirt/tshirt-2.jpg"><img src="' . WPASER_DIR_URL_FILE . 'admin/img/t-shirt/tshirt-2.jpg" alt="image"></a></li>';
					echo '<li class="splide__slide"><a class="popup-img" data-gall="gallery01" href="' . WPASER_DIR_URL_FILE . 'admin/img/t-shirt/tshirt-3.jpg"><img src="' . WPASER_DIR_URL_FILE . 'admin/img/t-shirt/tshirt-3.jpg" alt="image"></a></li>';
					echo '<li class="splide__slide"><a class="popup-img" data-gall="gallery01" href="' . WPASER_DIR_URL_FILE . 'admin/img/t-shirt/tshirt-4.jpg"><img src="' . WPASER_DIR_URL_FILE . 'admin/img/t-shirt/tshirt-4.jpg" alt="image"></a></li>';
				}
			?>
		</ul>
		</div>
	</section>
	<!-- Slider thumbnail -->
	<section id="thumbnail-carousel" class="splide"
		aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel.">
		<div class="splide__track">
		<ul class="splide__list">
			<?php
				if ( ! empty( $wpas_product_gallery ) ) {
				foreach ( $wpas_product_gallery_ids as $item_id ) {
					echo '<li class="splide__slide"><img src="' . wp_get_attachment_url( $item_id ) . '"></li>';
				}
				} else {
				echo '<li class="splide__slide"><img src="' . WPASER_DIR_URL_FILE . 'admin/img/t-shirt/tshirt-1.jpg"></li>';
				echo '<li class="splide__slide"><img src="' . WPASER_DIR_URL_FILE . 'admin/img/t-shirt/tshirt-2.jpg"></li>';
				echo '<li class="splide__slide"><img src="' . WPASER_DIR_URL_FILE . 'admin/img/t-shirt/tshirt-3.jpg"></li>';
				echo '<li class="splide__slide"><img src="' . WPASER_DIR_URL_FILE . 'admin/img/t-shirt/tshirt-4.jpg"></li>';
				}
			?>
		</ul>
		</div>
	</section>

	</div>
	<!-- Right Side content -->
	<div class="er8-content-area">
	<!-- Header Area -->
	<div class="er8-header er8-sections">
		<?php if ( $wpas_user_rating_shows ) : ?>
			<div class="frhd--user-rating">
				<div class="frhd--rate-cover">
				<span class="frhd--rate-visual"></span>
				</div>
				<span class="user-count">(<?php echo esc_html( $frhd_total_vote ); ?> Reviews)</span>
			</div>
		<?php endif; ?>
		<?php if ( $wpas_editorial_date_show ) : ?>
			<div class="er-update-date">
				<div class="wpas--rating-date">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z"/></svg>
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
	</div>
	<!-- Pricing And Other Info Area -->
	<div class="er8-pricing-area er8-sections">
		<div class="er8-progressbar">
		<div class="frhd-er-progress" data-percentage="<?php echo esc_attr( $wpas_rating_percentage ); ?>">
			<span class="frhd-er-progress-left">
				<?php echo '<span class="frhd-er-progress-bar" style="border-color: ' . $er_rating_status . '; "></span>' ?>
			</span>
			<span class="frhd-er-progress-right">
				<?php echo '<span class="frhd-er-progress-bar" style="border-color: ' . $er_rating_status . '; "></span>' ?>
			</span>
			<div class="frhd-er-progress-value">
				<div class="progress-inner-area">
					<strong><?php echo esc_html( $wpas_total_rating_math_round ); ?>/10</strong>
					<p>Based on</p>
					<p><?php echo esc_html( $wpas_i ); ?> categories</p>
				</div>
			</div>
		</div>
		</div>
		<div class="er8-price-area">
		<h4 class="er8-price"><?php echo $wpas_product_price ?></h4>
		<p class="er8-tags"><?php echo $wpas_tag_best_for ?></p>
		<!-- <a href="#" class="er8-default-button">BUY FOR BEST PRICE</a> -->
		<?php if ( $wpas_product_btn_show ) : ?>
		<div class="frhd--product-btn">
			<a href="<?php echo esc_url( $wpas_product_btn_url ); ?>" class="er8-default-button" target="<?php echo ( '1' !== $wpas_product_btn_target ? '_self' : '_blank' ); ?>"<?php echo ( '1' === $wpas_product_btn_nofollow ? ' rel="nofollow"' : '' ); ?>><?php echo esc_html( $wpas_product_btn_txt ); ?></a>
		</div>
		<?php endif; ?>
		</div>
	</div>
	<!-- Product Rating And Description Area -->
	<div class="er8-rating-desc er8-sections">
		<div class="er8-rating">
		<ul>
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
					foreach ($wpas_editorial_rating as $wpas_editorial_rating_key => $wpas_editorial_rating_value) {  
						$rating = $wpas_editorial_rating_value['wpas-editorial-rating-category-rate'];
						$color = get_rating_color($rating);
						echo '<li><span>' . $wpas_editorial_rating_value['wpas-editorial-rating-category-name'] . '</span> <span style="color: ' . $color . '!important;">' . $rating . '.0</span></li>';
					}
				}
			?>
		</ul>
		</div>
		<div class="er8-desc">
		<?php
			if ( $wpas_product_name_linked ) {

				echo '<h2 class="er8-title"><a href="' . $wpas_product_btn_url . '" target="' . ( '1' !== $wpas_product_btn_target ? '_self"' : '_blank"' ) . ( '1' === $wpas_product_btn_nofollow ? ' rel="nofollow"' : '' ) . '>' . esc_html( $wpas_score_title ) . '</a></h2>';
			} else {

				echo '<h2 class="er8-title">' . esc_html( $wpas_score_title ) . '</h2>';
			}

			if ( $wpas_score_overview ) { 
				echo '' . wp_kses_post( wpautop( $wpas_score_overview ) ) . '';
			}
		?>
		</div>
	</div>
	</div>
    </div>
    <div class="er8-pros-cons">
      <div class="er8-pros-cons-col er8-product-img">
		<?php 
          // Product Image.
          if ( $wpas_product_image_url ) {
            if ( $wpas_product_img_linked ) {
              echo '<figure>
                <a href="' . $wpas_product_btn_url . '" target="' . ( '1' !== $wpas_product_btn_target ? '_self"' : '_blank"' ) . ( '1' === $wpas_product_btn_nofollow ? ' rel="nofollow"' : '' ) . '>
                  <img width="150" height="auto" src="' . esc_url( $wpas_product_image_url ) . '" alt="' . esc_attr( $wpas_product_image_alt ) . '">
                </a>
              </figure>';
            } else {
              echo '<figure>
                <img width="150" height="auto" src="' . esc_url( $wpas_product_image_url ) . '" alt="' . esc_attr( $wpas_product_image_alt ) . '">
              </figure>';
            }
          }
        ?>
      </div>
      <div class="er8-pros-cons-col er8-pros">
	  <?php echo'<h4>' . $wpas_pros_label . '</h4>'  ?>
        <ul class="feat-list">
			<?php 
				foreach ( $wpas_wpas_pros as $wpas_wpas_pros_key => $wpas_wpas_pros_value ) {
					echo '<li>' . $wpas_wpas_pros_value['wpas-pros-list'] . '</li>';
				}
			?>
        </ul>
      </div>
      <div class="er8-pros-cons-col er8-cons">
	  <?php echo'<h4>' . $wpas_cons_label . '</h4>'  ?>
        <ul class="feat-list">
			<?php 
				foreach ( $wpas_wpas_cons as $wpas_wpas_cons_key => $wpas_wpas_cons_value ) {
					echo '<li>' . $wpas_wpas_cons_value['wpas-cons-list'] . '</li>';
				}
			?>
        </ul>
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

  <!-- Links Of JS -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/venobox/2.1.8/venobox.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script>

  <script>
    // Slider JS
    document.addEventListener('DOMContentLoaded', function () {
      var main = new Splide('#main-carousel', {
        type: 'fade',
        rewind: true,
        pagination: false,
        arrows: false,
        lazyLoad: true,
      });

      var thumbnails = new Splide('#thumbnail-carousel', {
        fixedHeight: 60,
        gap: 10,
        rewind: true,
        lazyLoad: true,
        pagination: false,
        isNavigation: true,
        arrows: false,
        perPage: 3,
        breakpoints: {
          600: {
            fixedHeight: 44,
          },
        },
      });

      main.sync(thumbnails);
      main.mount();
      thumbnails.mount();
    });

    // Popup Image
    document.addEventListener('DOMContentLoaded', function () {
      new VenoBox({
        selector: '.popup-img',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane'
      });
    });

  </script>