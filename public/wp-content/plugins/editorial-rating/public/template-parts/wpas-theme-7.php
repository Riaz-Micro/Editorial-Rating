<?php
/**
 * ER Theme - 7
 *
 * @package    WPAS_Editorial_Rating
 * @subpackage WPAS_Editorial_Rating/public
 */

// Get pros-cons label.
$wpas_pros_label          = empty( $wpas_meta_values['wpas-pros-label'] ) ? 'Pros' : $wpas_meta_values['wpas-pros-label'];
$wpas_cons_label          = empty( $wpas_meta_values['wpas-cons-label'] ) ? 'Cons' : $wpas_meta_values['wpas-cons-label'];
$wpas_product_gallery     = isset( $wpas_meta_values['wpas-product-image-gallery'] ) ? $wpas_meta_values['wpas-product-image-gallery'] : '';
$wpas_product_gallery_ids = explode( ',', $wpas_product_gallery );
$wpas_product_price       = isset( $wpas_meta_values['wpas-product-price'] ) ? $wpas_meta_values['wpas-product-price'] : '';
$wpas_tag_best_for        = isset( $wpas_meta_values['wpas-tag-best-for'] ) ? $wpas_meta_values['wpas-tag-best-for'] : '';
$wpas_feature_list  = isset( $wpas_meta_values['wpas-feature-list'] ) ? $wpas_meta_values['wpas-feature-list'] : '';

// Enqueuing.
wp_enqueue_style( $this->plugin_name . '-theme-7' );
wp_enqueue_script( $this->plugin_name . 'wpas-star-rating' );
wp_enqueue_script( $this->plugin_name . 'wpas-useful-script' );
$wpas_bar_animation_data = '';
if ( $wpas_bar_animation ) {

	$wpas_bar_animation_data = 'true';
} else {

	$wpas_bar_animation_data = 'false';
}

$wpas_user_id           = get_the_author_meta( 'ID' );
$wpas_get_author_link   = get_author_posts_url( $wpas_user_id );
$wpas_get_author_name   = get_the_author_meta( 'display_name' );
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
// Author rating
if ( $frhd_rate_math_round >= 3.7 ) {
	$er_rating_status2 = '#4CAF50';
} elseif ( $frhd_rate_math_round >= 2.5 ) {
	$er_rating_status2 = '#FFC107';
} elseif ( $frhd_rate_math_round >= 1.5 ) {
	$er_rating_status2 = '#FF9800';
} else {
	$er_rating_status2 = '#F44336';
}

// Author Designation.
$wpas_author_designation = isset( $wpas_meta_values['wpas-author-designation'] ) ? $wpas_meta_values['wpas-author-designation'] : '';
?>
<div id="wpas-er-<?php echo esc_attr( $wpas_post_id ); ?>" class="wpas--rating-wrap wpas-theme-7" data-id="<?php echo esc_attr( $wpas_post_id ); ?>" data-vote="<?php echo esc_attr( $frhd_total_vote ); ?>" data-star="<?php echo esc_attr( $frhd_total_star ); ?>" data-baranim="<?php echo esc_attr( $wpas_bar_animation_data ); ?>">
	
  <!-- Header Area -->
  <div class="er7-header-area er7-sections bg-colored">
    <!-- Header Top Area -->
    <div class="er7-header-area-top">
      <div class="er7-left-side">
    <?php 
      if ( $wpas_product_name_linked ) {
        echo '<h2 class="er7-title"><a href="' . $wpas_product_btn_url . '" target="' . ( '1' !== $wpas_product_btn_target ? '_self"' : '_blank"' ) . ( '1' === $wpas_product_btn_nofollow ? ' rel="nofollow"' : '' ) . '>' . esc_html( $wpas_score_title ) . '</a></h2>';
      } else {
        echo '<h2 class="er7-title">' . esc_html( $wpas_score_title ) . '</h2>';
      } 
      ?>
        <!-- User Rating -->
        <div class="frhd--user-rating">
          <div class="frhd--rate-cover">
            <span class="frhd--rate-visual"></span>
          </div>
          <p class="wpas--total-category"><span>(<?php echo esc_html( $frhd_total_vote ); ?> Users)</span></p>
        </div>
      </div>
      <div class="er7-right-side">
        <div class="er7-date">
          <?php if ( $wpas_editorial_date_show ) : ?>
            <div class="wpas--rating-date">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="12" height="12"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z"/></svg>
              <strong><?php echo esc_html( $wpas_editorial_date_label ); ?></strong>
              <?php
              if ( ! empty( $wpas_editorial_date_custom ) ) {

                echo '<time>' . $wpas_editorial_date_custom . '</time>';
              } else {

                echo '<time datetime="' . get_the_modified_date( 'c' ) . '">' . get_the_modified_date('d, M Y') . '</time>';
              }
              ?>
            </div>
          <?php endif; ?>
        </div>
      </div>
    </div>
    <div class="er7-header-top-card-area">
      <?php
        foreach ( $wpas_feature_list as $feature ) {
          echo '
            <div class="er7-card">
              <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><rect fill="none" /><path d="M239.2,97.4A16.4,16.4,0,0,0,224.6,86l-59-3.8a.5.5,0,0,1-.4-.3l-22-55.5a16.3,16.3,0,0,0-30.4,0l-22,55.5a.5.5,0,0,1-.4.3L31.4,86A16.4,16.4,0,0,0,16.8,97.4,16.8,16.8,0,0,0,22,115.5l45.2,37.6a.8.8,0,0,1,.2.8L53.9,207a18.6,18.6,0,0,0,7,19.6,18,18,0,0,0,20.1.6l46.9-29.7h.2l50.5,31.9a16.1,16.1,0,0,0,8.7,2.6,16.8,16.8,0,0,0,9.5-3.1,16.6,16.6,0,0,0,6.3-17.7l-14.5-57.3a.8.8,0,0,1,.2-.8L234,115.5A16.8,16.8,0,0,0,239.2,97.4Zm-15.4,5.8-45.3,37.6a16.8,16.8,0,0,0-5.4,17l14.5,57.3c.1.4.1.5,0,.6a.7.7,0,0,1-.3.3h-.2L136.7,184a16,16,0,0,0-8.7-2.5V32c.1,0,.2,0,.3.3l22.1,55.5a16.4,16.4,0,0,0,14.1,10.4l59.1,3.8c.1,0,.2,0,.3.4S223.9,103.1,223.8,103.2Z"/></svg>
              <span>' . $feature['wpas-feature'] . '</span>
            </div>
          ';
        }
      ?>
    </div>
  </div>

  <!-- Products Slider Area -->
  <div class="er7-product-slider-area er7-sections">
    <div class="slider">
      <div class="splide" id="image-carousel" role="group" aria-label="Splide Basic HTML Example">
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
      </div>
    </div>
  </div>

  <!-- Progress Bar Rating -->
  <div class="er7-progress-bar er7-sections bg-colored">		
  <?php 
    // Rating bars.
    if ($wpas_editorial_rating_show) {
      echo '<div class="wpas--rating-categories er7-wpas--rating-categories">';
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
        echo '<div class="er7-progress-card">
            <span class="wpas--rating-name">' . $wpas_editorial_rating_value['wpas-editorial-rating-category-name'] . '</span>
            <div class="wpas--rating-meter">
              <span class="wpas--rating-bar" style="width: ' . round($rating) . '0%; background-color: ' . $color . ';"></span>
            </div>
            <span class="wpas--rating-rate" style="color: ' . $color . '!important;"><strong>' . $rating . '.0%</strong></span>
          </div>';
      }
      echo '</div>'; // wpas--rating-categories.
    }
  ?>
  </div>

  <!-- Product pros, cons & overview -->
  <div class="er7-features-area er7-sections">
    <div class="er7-features-card er7-product-img">
        <?php 
          // Product Image.
          if ( $wpas_product_image_url ) {
            if ( $wpas_product_img_linked ) {
              echo '<figure class="wpas--product-img">
                <a href="' . $wpas_product_btn_url . '" target="' . ( '1' !== $wpas_product_btn_target ? '_self"' : '_blank"' ) . ( '1' === $wpas_product_btn_nofollow ? ' rel="nofollow"' : '' ) . '>
                  <img width="150" height="auto" src="' . esc_url( $wpas_product_image_url ) . '" alt="' . esc_attr( $wpas_product_image_alt ) . '">
                </a>
              </figure>';
            } else {
              echo '<figure class="wpas--product-img">
                <img width="150" height="auto" src="' . esc_url( $wpas_product_image_url ) . '" alt="' . esc_attr( $wpas_product_image_alt ) . '">
              </figure>';
            }
          }
        ?>
    </div>
    <div class="er7-features-card er7-pros">
      <?php echo '<h4 class="er7-features-card-title">' . $wpas_pros_label . '</h4>'; ?>
      <ul>
        <?php 
          foreach ( $wpas_wpas_pros as $wpas_wpas_pros_key => $wpas_wpas_pros_value ) {
            echo '<li>'.$wpas_wpas_pros_value['wpas-pros-list'].'</li>';
          }
        ?>
      </ul>
    </div>
    <div class="er7-features-card er7-cons">
    <?php echo '<h4 class="er7-features-card-title">' . $wpas_cons_label . '</h4>'; ?>
      <ul>
        <?php 
          foreach ( $wpas_wpas_cons as $wpas_wpas_cons_key => $wpas_wpas_cons_value ) {
            echo '<li>'.$wpas_wpas_cons_value['wpas-cons-list'].'</li>';
          }
        ?>
      </ul>
    </div>
  </div>

  <!-- Score Area Start -->
  <div class="er7-score er7-sections bg-colored">
    <div class="er7-score-card">
      <?php 
        echo '<h5 style="color: ' . $er_rating_status . '; ">' . $wpas_total_rating_math_round . ' <sub>/10</sub></h5>';
      ?>
      <p>Total Score</p>
    </div>
    <div class="er7-score-card">
      <?php 
        echo '<h5 style="color: ' . $er_rating_status2 . '; ">' . $frhd_rate_math_round . ' <sub>/5 </sub></h5></h5>';
      ?>
      <p>Total <?php echo esc_html( $frhd_total_vote ); ?> reviews</p>
    </div>
    <div class="er7-score-card">
    <?php 
        echo '<h5 >' . $wpas_product_price . '</h5>';
      ?>
      <p>Best Price</p>
    </div>
  </div>


  <!-- Product Description Area -->
  <div class="er7-description er7-sections bg-colored">
    <p id="er7-desc-text"><?php echo $wpas_score_overview; ?></p>
    <button class="er7-show-more-btn" id="er7_show_more_btn" style="display: none;">Show More</button>


      <div class="buttons">
        <a class="er7-button" href="<?php echo esc_url( $wpas_product_btn_url ); ?>" target="<?php echo ( '1' !== $wpas_product_btn_target ? '_self' : '_blank' ); ?>"<?php echo ( '1' === $wpas_product_btn_nofollow ? ' rel="nofollow"' : '' ); ?>><?php echo esc_html( $wpas_product_btn_txt ); ?></a>
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

<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script>

<script>
    // check if the description content Quantity
    document.addEventListener("DOMContentLoaded", function() {
        var descText = document.getElementById('er7-desc-text');
        var showMoreBtn = document.getElementById('er7_show_more_btn');
        var lineHeight = parseInt(window.getComputedStyle(descText).lineHeight);
        var maxLines = 3;
        var maxHeight = ((lineHeight * maxLines) + 1);
        console.log(descText.scrollHeight , maxHeight);
        if (descText.scrollHeight > maxHeight) {
            showMoreBtn.style.display = 'block';
        } else {
            showMoreBtn.style.display = 'none';
        }
    });


    // Toggle the description content visibility
    document.addEventListener("DOMContentLoaded", function () {
      let isExpanded = false;
      let mainText = document.getElementById('er7-desc-text');
      let togglebtn = document.getElementById('er7_show_more_btn');
      togglebtn.addEventListener("click", function () {
        if (!isExpanded) {
          mainText.style.webkitLineClamp = "initial";
          mainText.style.lineClamp = "initial";
          togglebtn.innerText = "Show Less";
          togglebtn.classList.toggle('rotated');
        } else {
          mainText.style.webkitLineClamp = "3";
          mainText.style.lineClamp = "3";
          togglebtn.innerText = "Show More";
          togglebtn.classList.toggle('rotated');
        }
        isExpanded = !isExpanded;
      });
    });

    // slider js
    document.addEventListener( 'DOMContentLoaded', function () {
      var splide = new Splide( '#image-carousel', {
        type: 'slide',
        rewind: true,
        drag: 'free',
        omitEnd: true,
        pagination: false,
        perPage: 4,
        autoWidth: true,
        autoHeight: true,
        omitEnd: true,
        mediaQuery: 'min',
        breakpoints: {
          450: {
            perPage: 1,
          },
          640: {
            perPage: 2,
          },
        }
      } );

      splide.mount();
    } );
</script> 