<?php
/**
 * Cross Rating Template: 4
 */
wp_enqueue_style( $this->plugin_name . '-icomoon' );
if ( 'grid' === $wpas_cr_module_2 ) {
  $layoutClass = 'cr4-wrapper';
  $layoutClass2 = '';
} else {
  $layoutClass = 'splide cr4-slider';
  $layoutClass2 = 'splide__slide';
  echo '<link href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css" rel="stylesheet">';
}
?>

<style>
  .cr4-wrapper {
    max-width: 1200px !important;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    padding: 0 15px;
  }
  .cr4-card {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    position: relative;
    box-shadow: 0px 1px 10px -7px #000000
  }
  .cr4-card .edit-btn {
    font-size: 14px;
    position: absolute;
    right: 5px;
    top: 0px;
  }
  .cr4-card[data-badgesLabel]::before {
    content: attr(data-badgeslabel);
    padding: 3px 10px;
    font-size: 14px;
    font-weight: 600;
    color: white;
    background-color: <?php echo $wpas_cros_rating_brand_color; ?>;
    position: absolute;
    left: -10px;
    top: 6.5px;
    z-index: 1;
    border-radius: 5px 0 0 0;
    box-shadow: 2px 2px 6px -1px #41494c;
  }
  .cr4-card[data-badgesLabel]::after {
    content: '';
    width: 10px;
    height: 40px;
    position: absolute;
    left: -10px;
    top: 10px;
    background-color: <?php echo $wpas_cros_rating_brand_color; ?>;
    border-radius: 5px 0 0 0;
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 64%);
  }
  .cr4-card .cr4-card-img {
    margin-bottom: 10px;
    height: 200px;
    overflow: hidden;
    border-radius: 10px;
    background-color: #d1d1d1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cr4-card .cr4-card-img a img {
    width: 100%;
    max-height: 200px;
    -o-object-fit: contain;
    object-fit: contain;
  }
  .cr4-card .cr4-card-title {
    margin: 0 0 10px;
  }
  .cr4-card .cr4-card-title:last-child {
    margin-bottom: 0;
  }
  .cr4-card .cr4-card-title a {
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;
    text-decoration: none;
    color: #000000;
  }
  .cr4-card .cr4-card-stars {
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 10px;
    position: relative;
    display: flex;
    align-items: center;
    gap: 5px;
    line-height: 1;
  }
  .cr4-card .cr4-card-stars .star-icon {
    width: 16px;
  }
  .cr4-card .cr4-card-stars .question-icon {
    width: 14px;
    position: relative;
  }
  .cr4-card .cr4-card-stars .cr4-tooltipArea {
    position: relative;
    top: 2px;
    cursor: pointer;
  }
  .cr4-card .cr4-card-stars .cr4-tooltipArea .cr4-tooltipText {
    max-width: 200px;
    text-align: center;
    width: 200px;
    position: absolute;
    left: -28px;
    bottom: 24px;
    transform: translateY(-10px);
    font-size: 13px;
    line-height: 15px;
    font-weight: 400;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #000000;
    color: #ffffff;
    transition: 0.5s ease-in-out;
    opacity: 0;
    visibility: hidden;
    display: inline-block;
  }
  .cr4-card .cr4-card-stars .cr4-tooltipArea .cr4-tooltipText::after {
    content: "";
    top: 100%;
    left: 15%;
    position: absolute;
    border-style: solid;
    border-width: 6px;
    border-color: #000000 transparent transparent;
  }
  .cr4-card .cr4-card-stars .cr4-tooltipArea:hover .cr4-tooltipText {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  .cr4-card .cr4-card-text p {
    font-size: 16px;
    line-height: 1.23;
    font-weight: 400;
    margin: 0;
    display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  }

  /* Slider design */
  .cr4-slider .splide__arrow svg,
  .cr4-slider .splide__arrow {
    transition: .5s ease;
  }
  .cr4-slider .splide__track {
    padding: 0 15px !important;
  }
  .cr4-slider .splide__arrow:hover {
    background-color: #E43917 !important;
  }
  .cr4-slider .splide__arrow:hover svg {
    fill: #fff !important;
  }
  .cr4-slider .splide__arrow--next {
    right: -20px !important;
  }
  .cr4-slider .splide__arrow--prev {
    left: -20px !important;
  }
  .cr4-slider .splide__pagination {
    bottom: 0 !important;
  }

  /* Responsive */
  @media (width <=768px) {
    .cr4-wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
    .cr4-slider {
      padding-bottom: 40px;
    }
    .cr4-slider .splide__pagination__page.is-active {
      background-color: <?php echo $wpas_cros_rating_brand_color; ?>;
    }
  }

  @media (width <=575px) {
    .cr4-wrapper {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>

<div class="<?php echo $layoutClass; ?>" id="myElement" >
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
  echo '<div class="cr4-card '.$layoutClass2.' " '; 
  echo $cardNo == 1 ? 'data-badgesLabel="'. $wpas_cr_hl_label .'">' : '>';
  if ( is_user_logged_in() ) { 
    echo ' <a href="' . $er_edit_url . '" class="edit-btn">
        Edit
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="12px">
            <path
                d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
        </svg>
    </a>';
}
  if ( $wpas_product_img_show ) {
    echo '
        <div class="cr4-card-img">
            <a href="' . $data['button_link'] . '"><img src="' . $data['product_img'] . '" alt=""></a>
        </div>
    ';
  }      
  if ( ! empty( $er_object->post_title ) && $wpas_cr_section_title_show ) {
    echo '<h3 class="cr4-card-title"><a href="' . $data['button_link'] . '">' . $er_object->post_title . '</a></h3>';
  }
  if ($wpas_cr_user_rating_star_show) {
    echo '<p class="cr4-card-stars">
        ' . $data['rate_percent'] /20 . '
        <svg class="star-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
        </svg>
        (' . $data['total_vote'] . ' reviews)
        <span class="cr4-tooltipArea">
            <svg class="question-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                    d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
            </svg>
            <span class="cr4-tooltipText">' . $data['best_for'] . '</span>
        </span>
    </p>';
  }


        if ( $wpas_cr_desc_show ) {
          echo '<div class="cr4-card-text">';
            echo wpautop( $data['overview'] );
          echo '</div>';
        }
    echo '</div> ';
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
