<?php
/**
* Cross Rating Template: 3
*/
wp_enqueue_style( $this->plugin_name . '-icomoon' );
if ( 'grid' === $wpas_cr_module_2 ) {
  $layoutClass = 'cr3-wrapper';
  $layoutClass2 = '';
} else {
  $layoutClass = 'splide cr3-slider';
  $layoutClass2 = 'splide__slide';
  echo '<link href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css" rel="stylesheet">';
}
?>
<style>
  .cr3-wrapper {
    max-width: 1200px !important;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    padding: 0 15px;
    font-family: system-ui;
  }
  .cr3-card {
    position: relative;
    margin-top: 30px;
    /* overflow: hidden; */
  }
  .cr3-card .edit-btn {
    font-size: 14px;
    position: absolute;
    right: 0;
    top: -25px;
  }
  .cr3-card .edit-btn svg {
    width: 12px;
  }
  .cr3-card:first-child {
    border: 2px solid <?php echo $wpas_cros_rating_brand_color; ?>;
  }
  .cr3-card:first-child::before {
    content: attr(data-badgesLabel);
    width: 135px;
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1;
    color: #ffffff;
    background-color: <?php echo $wpas_cros_rating_brand_color; ?>;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .5s ease-in-out;
    position: absolute;
    left: -2px;
    top: 0px;
    z-index: 99;
    transform: rotate(-45deg) translateX(-28%);
    clip-path: polygon(16% 0, 83% 0%, 100% 100%, 0% 100%);
  }
  .cr3-card .cr3-card-content {
    position: relative;
    overflow: hidden;
    min-height: 400px;
    background-color: #000000;
  }
  .cr3-card .cr3-card-content .cr3-rating-area {
    width: 80px;
    height: 80px;
    border-radius: 0;
    transition: 0.5s ease-in-out;
    background-color: <?php echo $wpas_cros_rating_brand_color; ?>;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .cr3-card .cr3-card-content .cr3-rating-area strong {
    font-size: 32px;
    line-height: 32px;
  }
  .cr3-card .cr3-card-content .cr3-image {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
    padding: 40px;
  }
  .cr3-card .cr3-card-content .cr3-content {
    width: 100%;
    padding: 0 0px 15px;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
    transition: 0.5s ease-in-out;
    background-color: rgba(0, 0, 0, 0.8);
  }
  .cr3-card .cr3-card-content .cr3-content h3 {
    margin: 0;
    padding: 0 20px;
  }
  .cr3-card .cr3-card-content .cr3-content h3 a {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-decoration: none;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
  }
  .cr3-card .cr3-card-content .cr3-content .cr3-details-content {
    z-index: 1;
    opacity: 0;
    height: 0;
    padding: 0 20px;
    overflow: hidden;
    position: relative;
    transition: 0.5s ease-in-out;
  }
  .cr3-card .cr3-card-content .cr3-content .cr3-details-content .cr3-sec-title {
    color: #ffffff;
    font-size: 20px;
    margin: 0px 0 10px;
    border-bottom: 1px solid #9f9f9f;
  }
  .cr3-card .cr3-card-content .cr3-content .cr3-details-content .cr3-features-list {
    padding: 0;
    margin: 0 0 20px;
    list-style: none;
  }
  .cr3-card .cr3-card-content .cr3-content .cr3-details-content .cr3-features-list li {
    color: #ffffff;
    line-height: 24px;
    position: relative;
    padding-left: 24px;
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 400;
  }
  .cr3-card .cr3-card-content .cr3-content .cr3-details-content .cr3-features-list li:last-child {
    margin-bottom: 0;
  }
  .cr3-card .cr3-card-content .cr3-content .cr3-details-content .cr3-features-list li::before {
    content: "";
    width: 14px;
    height: 14px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='%23ffffff'%3E%3Cpath d='M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1c-4.2-4.5-10.1-7.1-16.3-7.1C266 128 256 138 256 150.3V208H160c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h96v57.7c0 12.3 10 22.3 22.3 22.3c6.2 0 12.1-2.6 16.3-7.1l99.9-107.1c3.5-3.8 5.5-8.7 5.5-13.8s-2-10.1-5.5-13.8L294.6 135.1z'/%3E%3C/svg%3E");
    position: absolute;
    left: 0;
    top: 5px;
  }
  .cr3-card .cr3-card-content .cr3-content .cr3-details-content .cr3-pros-cons li.cr3-pros::before {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='%2300ff8c'%3E%3Cpath d='M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z'/%3E%3C/svg%3E");
  }
  .cr3-card .cr3-card-content .cr3-content .cr3-details-content .cr3-pros-cons li.cr3-cons::before {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='%23ff0000'%3E%3Cpath d='M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z'/%3E%3C/svg%3E");
  }
  .cr3-card .cr3-card-content .cr3-content .cr3-details-content p {
    line-height: 24px;
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
    margin: 0;
  }
  .cr3-card .cr3-card-content .cr3-content .cr3-details-content::-webkit-scrollbar {
    width: 5px;
  }
  .cr3-card .cr3-card-content .cr3-content .cr3-details-content::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  .cr3-card .cr3-card-content .cr3-content .cr3-details-content::-webkit-scrollbar-thumb {
    background: #eeeeee;
    border-radius: 10px;
  }
  .cr3-card .cr3-card-content .cr3-content .cr3-details-content::-webkit-scrollbar-thumb:hover {
    background: #c9c9c9;
  }
  .cr3-card .cr3-card-content:hover .cr3-rating-area {
    right: -100%;
  }
  .cr3-card:hover:first-child::before {
    opacity: 0;
    visibility: hidden;
  }
  .cr3-card .cr3-card-content:hover .cr3-content .cr3-details-content {
    opacity: 1;
    margin-top: 20px;
    height: 320px;
    overflow-y: auto;
  }
  /* Slider design */
  .cr3-slider .splide__arrow svg,
  .cr3-slider .splide__arrow {
    transition: .5s ease;
  }
  .cr3-slider .splide__track {
      padding: 0px 1px !important;
  }
  .cr3-slider .splide__arrow:hover {
    background-color: #E43917 !important;
  }
  .cr3-slider .splide__arrow:hover svg {
    fill: #fff !important;
  }
  .cr3-slider .splide__arrow--next {
    right: -20px !important;
  }
  .cr3-slider .splide__arrow--prev {
    left: -20px !important;
  }
  .cr3-slider .splide__pagination {
    bottom: 0 !important;
  }
  /* Responsive */
  @media (max-width: 767px) {
    .cr3-wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
    .cr3-slider {
      padding-bottom: 40px;
    }
    .cr3-slider .splide__pagination__page.is-active {
      background-color: <?php echo $wpas_cros_rating_brand_color; ?>;
    }
  }
  @media (max-width: 520px) {
    .cr3-wrapper {
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
    $post = get_post( $post_id );
    $er_edit_url = get_admin_url() . 'post.php?post=' . $post_id . '&action=edit';
    echo '<div class="cr3-card '.$layoutClass2.'"';
    echo $cardNo == 1 ? 'data-badgesLabel="'. $wpas_cr_hl_label .'">' : '>';
            if ( is_user_logged_in() ) { 
                echo ' <a href="' . $er_edit_url . '" class="edit-btn">
                    Edit
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                            d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                    </svg>
                </a>';
            }
        echo '<div class="cr3-card-content">';
            if($wpas_product_img_show) {
              echo '<img class="cr3-image" src="' . $data['product_img'] . '" alt="image">';
            }
            echo '<div class="cr3-rating-area"><strong>' . $data['score'] . '</strong> Excellent</div>
            <div class="cr3-content">';
            if ( ! empty( $post->post_title ) && $wpas_cr_section_title_show ) {
                echo '<h3><a href="' . $data['button_link'] . '">' . $post->post_title . '</a></h3>';
            }
            echo '<div class="cr3-details-content">';
            if ( $wpas_cr_category_list_show ) {
                echo '<h5 class="cr3-sec-title">Fetures list</h5>
                            <ul class="cr3-features-list">
                ';
                foreach ( $data['categories'] as $key => $value ) {
                    echo '<li><span>' . $key . '</span> : <strong>' . $value . '</strong></li>';
                }
                echo '</ul>';
            }
            if ( $wpas_cr_pros_cons_show ) {
                echo '<h5 class="cr3-sec-title">Pros & Cons</h5>
                        <ul class="cr3-features-list cr3-pros-cons">';
                        foreach ( $data['pros'] as $value ) {
                            echo '<li class="cr3-pros">' . $value . '</li>';
                        }
                        foreach ( $data['cons'] as $value ) {
                            echo '<li class="cr3-cons">' . $value . '</li>';
                        }
                echo '</ul>';
            }
            if ( $wpas_cr_desc_show ) {
                echo wpautop( $data['overview'] );
            }
            echo '</div> 
             </div>
        </div>
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
