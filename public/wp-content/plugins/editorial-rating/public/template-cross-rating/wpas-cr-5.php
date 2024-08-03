<?php
/**
 * Cross Rating Template: 5
 */
wp_enqueue_style( $this->plugin_name . '-icomoon' );
if ( 'grid' === $wpas_cr_module_2 ) {
  $layoutClass = 'cr5-wrapper';
  $layoutClass2 = '';
} else {
  $layoutClass = 'splide cr5-slider';
  $layoutClass2 = 'splide__slide';
  echo '<link href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css" rel="stylesheet">';
}
?>
<style>
  .cr5-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    padding: 0 15px;
  }
  .cr5-card {
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 5px #e0ebf7;
    margin-bottom: 5px;
  }
  .cr5-card .edit-now {
    padding: 5px 10px;
    line-height: 1;
    font-size: 14px;
    font-weight: 600;
    color: #000000;
    border-radius: 50px;
    background-color: #ffffff;
    position: absolute;
    right: 10px;
    top: 20px;
    z-index: 9;
    text-decoration: none !important;
    outline: none !important;
  }
  .cr5-card .edit-now svg {
    width: 10px;
  }
  .cr5-card[data-badgesLabel]::before {
    content: attr(data-badgesLabel);
    position: absolute;
    left: 10px;
    top: 20px;
    z-index: 9;
    padding: 5px 10px;
    line-height: 1;
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
    border-radius: 50px;
    background-color: <?php echo $wpas_cros_rating_brand_color; ?>;
  }
  .cr5-card .cr5-card-img {
    position: relative;
    overflow: hidden;
    height: 150px;
    text-align: center;
    background-color: #eeeeee;
  }
  .cr5-card .cr5-card-img img {
    object-fit: contain;
    height: 150px;
    margin: 0 auto;
  }
  .cr5-card .cr5-content {
    position: relative;
    padding: 45px 20px 20px;
  }
  .cr5-card .cr5-content .cr5-rating {
    margin: 0;
    width: 80px;
    height: 80px;
    color: #ffffff;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: #ffffff;
    box-shadow: 0 0 6px #d1d1d1;
    position: absolute;
    top: -40px;
    right: 20px;
    z-index: 9;
    font-size: 14px;
  }
  .cr5-card .cr5-content .cr5-rating strong {
    font-size: 28px;
    font-weight: 700;
    margin: 0;
    line-height: 28px;
  }
  .cr5-card .cr5-content .cr5-title {
    margin: 0 0 5px;
  }
  .cr5-card .cr5-content .cr5-title a {
    color: #000;
    text-decoration: none;
    line-height: 24px;
    font-size: 20px;
    font-weight: 700;
    outline: none !important;
  }
  .cr5-card .cr5-content .cr5-title a:hover {
    text-decoration: underline;
  }
  .cr5-card .cr5-content .cr5-star-rating {
    margin: 0 0 15px;
    font-size: 16px;
    color: #313131;
  }
  .cr5-card .cr5-content .cr5-star-rating svg {
    width: 14px;
    height: 14px;
    position: relative;
    top: 1px;
  }
  .cr5-card .cr5-content .cr5-heading {
    font-size: 18px;
    line-height: 18px;
    margin: 0 0 10px;
  }
  .cr5-card .cr5-content .cr5-pros-cons-list,
  .cr5-card .cr5-content .cr5-fetures-list {
    margin: 0 0 15px;
    padding: 0;
    list-style: none;
  }
  .cr5-card .cr5-content .cr5-pros-cons-list li,
  .cr5-card .cr5-content .cr5-fetures-list li {
    margin-bottom: 5px;
    padding-left: 25px;
    position: relative;
    font-size: 16px;
    font-weight: 400;
  }
  .cr5-card .cr5-content .cr5-pros-cons-list li::before,
  .cr5-card .cr5-content .cr5-fetures-list li::before {
    content: "";
    width: 13px;
    height: 13px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='%23000000'%3E%3Cpath d='M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1c-4.2-4.5-10.1-7.1-16.3-7.1C266 128 256 138 256 150.3V208H160c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h96v57.7c0 12.3 10 22.3 22.3 22.3c6.2 0 12.1-2.6 16.3-7.1l99.9-107.1c3.5-3.8 5.5-8.7 5.5-13.8s-2-10.1-5.5-13.8L294.6 135.1z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    position: absolute;
    left: 5px;
    top: 6px;
  }
  .cr5-card .cr5-content .cr5-pros-cons-list li.pros::before,
  .cr5-card .cr5-content .cr5-fetures-list li.pros::before {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' fill='green'%3E%3Cpath d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z'/%3E%3C/svg%3E");
  }
  .cr5-card .cr5-content .cr5-pros-cons-list li.cons::before,
  .cr5-card .cr5-content .cr5-fetures-list li.cons::before {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512' fill='%23ff0000'%3E%3Cpath d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z'/%3E%3C/svg%3E");
  }
  .cr5-card .cr5-content .cr5-button {
    display: block;
    text-align: center;
    border: none;
    margin-top: 25px;
    font-size: 16px;
    font-weight: 500;
    padding: 10px 35px;
    border-radius: 5px;
    color: #ffffff;
    transition: 0.5s ease-in-out;
    background-color: <?php echo $wpas_cros_rating_brand_color; ?>;
    text-decoration: none;
  }
  .cr5-card .cr5-content .cr5-button:hover {
    background-color: #000000;
  }
  /* Slider design */
  .cr5-slider .splide__arrow svg,
  .cr5-slider .splide__arrow {
    transition: .5s ease;
  }
  .cr5-slider .splide__track {
      padding: 0px 1px !important;
  }
  .cr5-slider .splide__arrow:hover {
    background-color: #E43917 !important;
  }
  .cr5-slider .splide__arrow:hover svg {
    fill: #fff !important;
  }
  .cr5-slider .splide__arrow--next {
    right: -20px !important;
  }
  .cr5-slider .splide__arrow--prev {
    left: -20px !important;
  }
  .cr5-slider .splide__pagination {
    bottom: 0 !important;
  }
  /* Responsive */
  @media (width <=768px) {
      .cr5-wrapper {
          grid-template-columns: repeat(2, 1fr);
      }
      .cr5-slider {
        padding-bottom: 40px;
      }
      .cr5-slider .splide__pagination__page.is-active {
        background-color: <?php echo $wpas_cros_rating_brand_color; ?>;
      }
  }
  @media (width <=575px) {
      .cr5-wrapper {
          grid-template-columns: repeat(1, 1fr);
      }
  }
</style>
<div class="<?php echo $layoutClass; ?>" id="myElement">
  <?php 
    $cardNo = 0;
    if('grid' !== $wpas_cr_module_2) {
      echo '<div class="splide__track">
    <div class="splide__list">';
    }
  ?>
  <?php  foreach ( $score_array as $post_id => $data ) { 
      $cardNo++;
      $er_object   = get_post( $post_id );
      $er_edit_url = get_admin_url() . 'post.php?post=' . $post_id . '&action=edit';
      echo '<div class="cr5-card '.$layoutClass2.'"';
      echo $cardNo == 1 ? 'data-badgesLabel="'. $wpas_cr_hl_label .'">' : '>';
            if ( is_user_logged_in() ) {
               echo '<a href="' . $er_edit_url . '" class="edit-now" style="top: ' . ($wpas_product_img_show ? '20px' : '0px') . '; right: ' . ($wpas_product_img_show ? '10px' : '-10px') . ';">Edit <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/></svg></a>';
            } 
              if ( $wpas_product_img_show ) {
                  echo '
                      <div class="cr5-card-img">
                          <img src="' . $data['product_img'] . '" alt="image">
                      </div>
                  ';
              }
              echo '<div class="cr5-content">';
                  // color Based on Grade point
                  if ( $data['score'] >= 7.5 ) {
                      $wpas_trmr_grade = 'Excellent!';
                      $er_rating_status = '#4CAF50';
                  } elseif ( $data['score'] >= 5 ) {
                      $wpas_trmr_grade = 'Good';
                      $er_rating_status = '#FFC107';
                  } else {
                      $wpas_trmr_grade = 'Poor';
                      $er_rating_status = '#F44336';
                  }
                  echo '<h5 class="cr5-rating" style="background-color: ' . $er_rating_status . '; top: ' . ($wpas_product_img_show ? '-40px' : '15px') . '; "><strong>' . $data['score'] . '</strong>' . $wpas_trmr_grade . '</h5>';

                  if ( ! empty( $er_object->post_title ) && $wpas_cr_section_title_show) {
                      echo ' <h3 class="cr5-title" style= "padding-right: ' . ($wpas_product_img_show ? '0px' : '90px') . ';><a href="' . $data['button_link'] . '">' . $er_object->post_title . '</a></h3>';
                  }
                  if ($wpas_cr_user_rating_star_show) {
                    echo '
                    <p class="cr5-star-rating"><strong>' . $data['rate_percent'] /20 . '</strong>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="12"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                        based on <strong>' . $data['total_vote'] . '</strong> reviews</p>
                    ';
                  }

                  if ( $wpas_cr_pros_cons_show ) {
                      echo '<h4 class="cr5-heading">Pros & Cons</h4>
                              <ul class="cr5-pros-cons-list">';
                              foreach ( $data['pros'] as $value ) {
                                  echo '<li class="pros">' . $value . '</li>';
                              }
                              foreach ( $data['cons'] as $value ) {
                                  echo '<li class="cons">' . $value . '</li>';
                              }
                      echo '</ul>';
                  }
                  if ( $wpas_cr_category_list_show ) {
                      echo '<h4 class="cr5-heading">Features</h4>
                              <ul class="cr5-fetures-list">';
                              foreach ( $data['categories'] as $key => $value ) {
                                  echo '<li><span>' . $key . '</span> : <strong>' . $value . '</strong></li>';
                              }
                      echo '</ul>';
                  }
                  if ( $wpas_cr_desc_show ) {
                      echo '<div class="cr5-description">';
                        echo wpautop( $data['overview'] );
                      echo '</div>';
                    }
                  echo '<a href="' . $data['button_link'] . '" class="cr5-button">Buy Now</a>';
              echo '</div>
          </div>';     
  } ?>
  <?php 
      if('grid' !== $wpas_cr_module_2) {
          echo ' </div>
      </div>';
    }
  ?>
</div>

<?php 
if('grid' !== $wpas_cr_module_2) {
  echo  '<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script>
  <script>
    document.addEventListener( "DOMContentLoaded", function () {
      var splide = new Splide( ".splide", {
        perPage: 3,
        gap: 24,
        pagination: false,
        breakpoints: {
          640: {
            perPage: 1,
            pagination: true,
            arrows: false
          },
          991: {
            perPage: 2,
            pagination: true,
            arrows: false
          },
        }
      } );
      splide.mount();
    } );
  </script>
  ';}
?>

