<?php
/**
 * ER Theme - 9
 *
 * @package    WPAS_Editorial_Rating
 * @subpackage WPAS_Editorial_Rating/public
 */
// Enqueuing.
wp_enqueue_style( $this->plugin_name . '-theme-9' );
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

// Author Information.
$wpas_author_name        = isset( $wpas_meta_values['wpas-author-name'] ) ? $wpas_meta_values['wpas-author-name'] : '';
$wpas_author_designation = isset( $wpas_meta_values['wpas-author-designation'] ) ? $wpas_meta_values['wpas-author-designation'] : '';
$wpas_author_avatar      = isset( $wpas_meta_values['wpas-author-avatar'] ) ? $wpas_meta_values['wpas-author-avatar'] : '';
$wpas_author_overview    = isset( $wpas_meta_values['wpas-author-overview'] ) ? $wpas_meta_values['wpas-author-overview'] : '';
?>
<div id="wpas-er-<?php echo esc_attr( $wpas_post_id ); ?>" class="wpas--rating-wrap wpas-theme-9" data-id="<?php echo esc_attr( $wpas_post_id ); ?>" data-vote="<?php echo esc_attr( $frhd_total_vote ); ?>" data-star="<?php echo esc_attr( $frhd_total_star ); ?>" data-baranim="<?php echo esc_attr( $wpas_bar_animation_data ); ?>">
	
    <?php 
    if ( $wpas_product_name_linked ) {
      echo '<h2 class="er9-product-title"><a href="' . $wpas_product_btn_url . '" target="' . ( '1' !== $wpas_product_btn_target ? '_self"' : '_blank"' ) . ( '1' === $wpas_product_btn_nofollow ? ' rel="nofollow"' : '' ) . '>' . esc_html( $wpas_score_title ) . '</a></h2>';
    } else {
      echo '<h2 class="er9-product-title">' . esc_html( $wpas_score_title ) . '</h2>';
    } 
    ?>
    <?php 
        if ( $wpas_score_overview ) { 
            echo '<p class="er9-product-desc">' . $wpas_score_overview  . '</p>';
        }
    ?>
    <div class="er9-content-wrapper">
      <div class="er9-left-content">
        <?php if ( $wpas_user_rating_shows ) : ?>
          <div class="frhd--user-rating er9-product-rating">
            <strong><span><?php echo '' . ($wpas_total_rating_math_round ). ''; ?></span>/10</strong>
            <div class="er9-rate-area">
              <ul>
                  <?php
                  for ($i = 1; $i <= 10; $i++) {
                      echo "<li>$i</li>";
                  }?>
              </ul>
              <?php 
                $wpas_total_rating_math_round = $wpas_total_rating_math_round*10;
                  echo "<style>
                  .er9-rate-area ul::before {
                      width: {$wpas_total_rating_math_round}% !important;
                  }
                </style>";
              ?>
            </div>
          </div>
        <?php endif; ?>
        <div class="er9-product-rating-list-area">
          <p><strong>Rating Breakdown</strong> (Out Of 10) :</p>
          <ul class="er9-rating-list">
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
                        echo '<li><span >' . $wpas_editorial_rating_value['wpas-editorial-rating-category-name'] . '</span> <span style="color: ' . $color . '!important;">' . $rating . '.0</span></li>';
                  }
              }
            ?>
          </ul>
        </div>
      </div>
      <div class="er9-right-content">
        <?php 
          // Product Image.
          if ( $wpas_product_image_url ) {
            if ( $wpas_product_img_linked ) {
              echo '<figure class="er9-product-img">
                <a href="' . $wpas_product_btn_url . '" target="' . ( '1' !== $wpas_product_btn_target ? '_self"' : '_blank"' ) . ( '1' === $wpas_product_btn_nofollow ? ' rel="nofollow"' : '' ) . '>
                  <img width="100%" height="100%" src="' . esc_url( $wpas_product_image_url ) . '" alt="' . esc_attr( $wpas_product_image_alt ) . '">
                </a>
              </figure>';
            } else {
              echo '<figure class="er9-product-img">
                <img width="100%" height="100%" src="' . esc_url( $wpas_product_image_url ) . '" alt="' . esc_attr( $wpas_product_image_alt ) . '">
              </figure>';
            }
          }
        ?>
        <div class="er9-author-rating-area">
          <div class="er9-author-info">
          <?php 
                if ( !empty($wpas_author_avatar) ) {
                    echo '<figure class="er9-author-img">
                              <img src="' . esc_url( $wpas_author_avatar['url'] ) . '" width="' . $wpas_author_avatar['width'] . '" height="' . $wpas_author_avatar['height'] . '" alt="User Image">
                          </figure>';
                }
            ?>
            <div class="er9-author-content">
              <h5><?php echo ''.$wpas_author_name.''; ?></h5> 
              <p class="er9-author-designation"><?php echo ''. $wpas_author_designation .'' ?></p>
              <?php if ( $wpas_editorial_date_show ) : ?>
                  <div class="er-update-date">
                      <div class="wpas--rating-date">
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
          </div>
          <?php 
          echo '<p class="er9-author-words">'. $wpas_author_overview .'</p>';
          ?>
        </div>
      </div>
    </div>

    <?php
    // Star Ratings Start.
    if ( $wpas_user_rating_shows ) : ?>
    <div class="er9-author-rating-areas">
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
      </div>
      <div class="frhd--user-rating-math-wrap frhd--user-rating-duplicate">

          <?php if ( $wpas_user_rating_shows ) : ?>
          <div class="frhd--user-rating">
            <div class="frhd--rate-cover">
              <span class="frhd--rate-visual"></span>
            </div>
            <h5 class="wpas--total-category"><span>(<?php echo esc_html( $frhd_rate_math_round ); ?>/5 by <?php echo $frhd_total_vote; ?> Users)</span></h5>
          </div>
          <?php endif; ?>
      </div>
    </div>
    <?php endif; // Star Ratings End. ?>
</div>