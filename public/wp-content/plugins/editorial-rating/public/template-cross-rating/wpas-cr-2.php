<?php
/**
 * Cross Rating Template: 2
 */
wp_enqueue_style( $this->plugin_name . '-icomoon' );
if ( 'grid' === $wpas_cr_module_2 ) {
    $toggleLayout = true; 
} else {
    $toggleLayout = false; 
}
$layoutClass = $toggleLayout ? 'cr2-wrapper' : 'splide cr2-slider';
$layoutClass2 = $toggleLayout ? '' : 'splide__slide';
if($toggleLayout == false) {
  echo '<link href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css" rel="stylesheet">';
}
?>
<style>
    .cr2-wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
        padding: 0 15px;
    }
    .cr2-card {
        padding: 20px; 
        text-align: center;
        box-shadow: 0 0 10px #eeeeee;
        border-radius: 10px;
        position: relative;
    }
    .cr2-card .edit-btn {
        font-size: 14px;
        position: absolute;
        left: 5px;
        top: 5px;
    }

    .cr2-card .edit-btn svg {
        width: 10px;
    }

    .cr2-card img {
        max-width: 100%;
        max-height: 100px;
        height: auto;
        margin: 0 auto 15px;
        display: block;
    }
    .cr2-card p {
        font-size: 14px;
        font-weight: 400;
        color: #7c7c7c;
        margin: 0 0 10px;
    }
    .cr2-card p:last-child {
        margin-bottom: 0;
    }
    .cr2-card a {
        text-decoration: none !important;
    }
    .cr2-button {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        margin: 10px 0;
        padding: 8px 30px;
        background-color: <?php echo $wpas_cros_rating_brand_color; ?>;
        color: white !important;
        border: none;
        cursor: pointer;
        font-size: 16px;
        font-weight: 600;
        text-decoration: none;
        border-radius: 5px;
    }
    .cr2-button svg {
        width: 16px;
        fill: #ffffff;
    }
    .cr2-button:hover {
        background-color: #0056b3;.
    }
    .cr2-text {
        margin: 10px 0;
    }
    .cr2-title {
        margin: 0px 0 5px !important;
        font-size: 20px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        
    }
    .cr2-title a {
        color: <?php echo $wpas_cros_rating_brand_color; ?>;
    }

    /* Rating Star */
    .wpas-score-summary {
        font-size: 14px;
        line-height: 25px;
        font-weight: bold;
        color: #87878b;
    }
    .wpas-score-summary .wpas-score-sum-data .reviewer-no {
        position: relative;
        margin-left: 3px;
        top: -2px;
    }
    .cr2-card .wpas-user-rating-wrapper {
        display: inline-block;
        width: 81px;
        height: 17px;
        overflow: hidden;
        position: relative;
        margin: auto;
    }
    .cr2-card .wpas-star-rating {
        position: relative;
        line-height: 1.618;
        font-size: 1em;
        z-index: 999;
    }
    .cr2-card .wpas-star-rating span {
        overflow: hidden;
        float: left;
        top: 0;
        left: 0;
        position: absolute;
        padding-top: 1.5em;
        color: #2c2d33;
    }
    .cr2-card .wpas-user-rating-wrapper:before,
    .cr2-card .wpas-star-rating:after {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        height: 16px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: left center;
    }
    .cr2-card .wpas-user-rating-wrapper:before {
        width: 100%;
        z-index: 1;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 304 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m181.9 23.2c0.4 1.2 0 2.6-0.9 3.4l-13.2 11.5 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3-1.1 0.8-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.5c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 7-16.2c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.3 0.1 2.4 0.9 2.7 2.3z' fill=' %23dfdfdf'/%3E%3Cpath d='m121 23.1c0.4 1.2 0 2.6-0.9 3.4l-13.1 11.5 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3-1.1 0.8-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.6c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 6.8-16c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.4 0 2.4 0.9 2.8 2.2z' fill=' %23dfdfdf'/%3E%3Cpath d='m303 26.4-13.2 11.6 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3-1.1 0.8-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.5c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 6.8-16.1c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.3 0.1 2.4 1 2.8 2.2s0.1 2.6-0.8 3.3z' fill=' %23dfdfdf'/%3E%3Cpath d='m242.9 23.2c0.4 1.2 0 2.6-0.9 3.4l-13.2 11.5 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3-1.1 0.8-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.5c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 6.8-16.2c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.5 0.1 2.5 0.9 2.9 2.3z' fill=' %23dfdfdf'/%3E%3Cpath d='m60.1 23.1c0.4 1.2 0 2.6-0.9 3.4l-13.1 11.5 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3s-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.6c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 6.8-16.1c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.4 0.1 2.5 1 2.8 2.3z' fill=' %23dfdfdf'/%3E%3C/svg%3E");
        filter: drop-shadow(0px 1px 0px gray);
    }
    .cr2-card .wpas-star-rating:after {
        width: 100%;
        z-index: 2;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 304 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m181.9 23.2c0.4 1.2 0 2.6-0.9 3.4l-13.2 11.5 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3-1.1 0.8-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.5c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 7-16.2c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.3 0.1 2.4 0.9 2.7 2.3z' fill=' %23FFC107'/%3E%3Cpath d='m121 23.1c0.4 1.2 0 2.6-0.9 3.4l-13.1 11.5 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3-1.1 0.8-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.6c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 6.8-16c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.4 0 2.4 0.9 2.8 2.2z' fill=' %23FFC107'/%3E%3Cpath d='m303 26.4-13.2 11.6 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3-1.1 0.8-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.5c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 6.8-16.1c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.3 0.1 2.4 1 2.8 2.2s0.1 2.6-0.8 3.3z' fill=' %23FFC107'/%3E%3Cpath d='m242.9 23.2c0.4 1.2 0 2.6-0.9 3.4l-13.2 11.5 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3-1.1 0.8-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.5c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 6.8-16.2c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.5 0.1 2.5 0.9 2.9 2.3z' fill=' %23FFC107'/%3E%3Cpath d='m60.1 23.1c0.4 1.2 0 2.6-0.9 3.4l-13.1 11.5 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3s-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.6c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 6.8-16.1c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.4 0.1 2.5 1 2.8 2.3z' fill=' %23FFC107'/%3E%3C/svg%3E");
    }
    span.wpas-vl {
        background: #a9a9b3;
        width: 1px;
        height: 14px;
        display: inline-block;
        margin: -1px 8px;
    }
    .wpas-score-overview {
        display: flex;
        align-items: center;
        gap: 20px;
        position: relative;
    }
    /* Style the cr2-ribbon */
    .cr2-ribbon {
        width: 150px;
        height: 150px;
        overflow: hidden;
        position: absolute;
        top: -10px;
        right: -10px;
        display: none;
    }
    .cr2-ribbon__content {
        left: -16px;
        top: 37px;
        transform: rotate(45deg);
        position: absolute;
        display: block;
        width: 215px;
        padding: 10px 0;
        font-size: 15px;
        line-height: 15px;
        background-color: <?php echo $wpas_cros_rating_brand_color; ?>;
        box-shadow: 0 0px 10px #000000;
        color: #fff;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
        text-transform: uppercase;
        text-align: center;
        border: 2px dotted #fff;
        outline: 5px solid #ffffff;
    }
    /* Pseudo-elements for cr2-ribbon corners */
    .cr2-ribbon::before,
    .cr2-ribbon::after {
        content: "";
        position: absolute;
        z-index: -1;
        border-style: solid;
        border-width: 5px;
    }
    .cr2-ribbon::before {
        top: 0;
        left: 0;
        border-top-color: transparent;
        border-right-color: transparent;
        border-color: #e3e3e3;
    }
    .cr2-ribbon::after {
        bottom: 0;
        right: 0;
        border-top-color: transparent;
        border-right-color: transparent;
        border-color: #e3e3e3;
    }
    .cr2-card:first-child .cr2-ribbon {
        display: block;
    }

    /* Slider design */
    .cr2-slider .cr2-card{
        margin: 10px 0;
    }
    .cr2-slider .splide__track {
        padding: 0px 1px !important;
    }
    .cr2-slider .splide__arrow svg,
    .cr2-slider .splide__arrow {
    transition: .5s ease;
    }
    .cr2-slider .splide__arrow:hover {
    background-color: #E43917 !important;
    }
    .cr2-slider .splide__arrow:hover svg {
    fill: #fff !important;
    }
    .cr2-slider .splide__arrow--next {
    right: -20px !important;
    }
    .cr2-slider .splide__arrow--prev {
    left: -20px !important;
    }
    .cr2-slider .splide__pagination {
    bottom: 0 !important;
    }
    /* Responsive */
    @media (max-width: 767px) {
        .cr2-wrapper {
            grid-template-columns: repeat(2, 1fr);
        }
        .cr2-slider {
            padding-bottom: 40px;
        }
        .cr2-slider .splide__pagination__page.is-active {
            background-color: <?php echo $wpas_cros_rating_brand_color; ?>;
        }
    }
    @media (max-width: 520px) {
        .cr2-wrapper {
            grid-template-columns: repeat(1, 1fr);
        }
    }
<?php
if ( $wpas_cr_category_list_show ) {

    echo '.wpas-product-cont {
        border-bottom: 1px solid #efefef;
        padding-bottom: 10px;
    }';
}
echo '</style>';
?>

<div class="<?php echo $layoutClass; ?>" id="myElement">
<?php 
    if($toggleLayout == false) {
      echo '<div class="splide__track">
    <div class="splide__list">';
    }
  ?>
<?php  foreach ( $score_array as $post_id => $data ) {
        $er_edit_url = get_admin_url() . 'post.php?post=' . $post_id . '&action=edit';
        $post = get_post( $post_id );
        echo '
        <div class="cr2-card '. $layoutClass2 .'">';
            if ( is_user_logged_in() ) { 
                echo ' <a href="' . $er_edit_url . '" class="edit-btn">
                    Edit
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="12">
                        <path
                            d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                    </svg>
                </a>';
            }
            echo ' <div class="cr2-ribbon"><span class="cr2-ribbon__content">'. $wpas_cr_hl_label .'</span></div>';
            if($wpas_product_img_show) {
                echo '<img src="' . $data['product_img'] . '" alt="product image">';
            }
            echo '<a href="' . $data['button_link'] . '" class="cr2-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="12"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
                ' . $data['button_text'] . '
            </a>';
            if ( ! empty( $post->post_title ) && $wpas_cr_section_title_show ) {
                echo '<h4 class="cr2-title"><strong><a href="' . $data['button_link'] . '">' . $post->post_title . '</a></strong></h4>';
            }
            echo '<div class="wpas-score-summary">';
                    if ( $wpas_cr_user_rating_star_show ) {
                        echo ' <div class="wpas-score-sum-data">
                                    <div class="wpas-user-rating-wrapper">
                                        <div class="wpas-star-rating" role="img" aria-label="Rated 3.75 out of 5" style="width:' . $data['rate_percent'] . '%">
                                            <span>Rated <strong class="rating">4.00</strong> out of 5</span>
                                        </div>
                                    </div>
                                    <span class="reviewer-no"> ('. $data['total_vote'] .') </span>
                                </div>';
                    }
                    echo '<span class="wpas-score-sum-data">TOTAL SCORE : ' . $data['score'] . '</span>
                </div>
        </div>';
    }
?>
<?php 
    if($toggleLayout == false) {
        echo ' </div>
    </div>';
    }
?>
</div>
<?php 
if($toggleLayout == false) {
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
