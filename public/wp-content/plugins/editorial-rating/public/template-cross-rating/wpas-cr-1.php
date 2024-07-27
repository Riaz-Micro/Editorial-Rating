<?php
/**
 * Cross Rating Template: 1
 */
wp_enqueue_style( $this->plugin_name . '-icomoon' );
$layoutClass = '';
    if ( 'vertical' === $wpas_cr_module_1 ) {
        $layoutClass = 'cr1-vertical-layout';
    }
?>
<style>
    .wpas-cross-rating {
        background-color: rgb(228 57 23 / 1%);
        max-width: 1200px !important;
    }
    .wpas-cross-rating ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    h2.wpas-cross-rating-title {
        font-size: 30px;
        line-height: 34px;
        margin-bottom: 20px;
        background: <?php echo $wpas_cros_rating_brand_color; ?>;
        padding: 10px 15px;
        color: #fff;
    }
    .wpas-cross-rating h4 {
        margin-bottom: 5px;
    }
    .wpas-cross-rating h4 a {
        color: #52525c;
        font-size: 24px;
        line-height: 30px;
        text-decoration: none !important;
        transition: .3s;
    }
    .wpas-cross-rating h4 a:hover {
        text-decoration: underline !important;
    }
    .wpas-cross-rating ol {
        counter-reset: wpas_counter;
        margin-left: 0;
        padding-left: 5px;
        list-style: none;
    }
    .wpas-cross-rating ol > li {
        position: relative;
        list-style: none;
        -webkit-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
        margin-left: 50px;
        box-shadow: 0 5px 15px rgba(0,0,0,.08);
        padding: 20px;
        border-radius: 5px;
        background: #fff;
    }
    .wpas-cross-rating ol > li:first-child {
        border: 1px solid #21dbaa;
        background-color: rgb(33 219 170 / 5%);
    }
    .wpas-cross-rating ol > li:before {
        content: counter(wpas_counter);
        counter-increment: wpas_counter;
        position: absolute;
        top: 10px;
        left: -50px;
        width: 60px;
        height: 60px;
        font-size: 28px;
        line-height: 28px;
        padding: 0px;
        font-weight: bold;
        text-align: center;
        border-radius: 50px;
        box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.3);
        z-index: 1;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
        background: <?php echo $wpas_cros_rating_brand_color; ?>;
        color: #fff;
    }
    .wpas-cross-rating ol > li:after {
        position: absolute;
        top: 60px;
        left: -23px;
        height: calc(100% - 10px);
        content: "";
        z-index: 0;
        border-left: 4px dashed <?php echo $wpas_cros_rating_brand_color; ?>;
        opacity: .3;
    }
    .wpas-cross-rating ol > li:last-child:after {
        height: 0
    }
    .wpas-score-summary {
        font-size: 14px;
        line-height: 25px;
        font-weight: bold;
        color: #87878b;
    }
    .wpas-score-summary span.wpas-score-sum-data {
        display: inline-flex;
        align-items: center;
        gap: 7px;
    }
    .wpas-cross-rating .wpas-user-rating-wrapper {
        display: inline-block;
        width: 81px;
        height: 17px;
        overflow: hidden;
        position: relative;
        margin: auto;
    }
    .wpas-cross-rating .wpas-star-rating {
        position: relative;
        line-height: 1.618;
        font-size: 1em;
        z-index: 999;
    }
    .wpas-cross-rating .wpas-star-rating span {
        overflow: hidden;
        float: left;
        top: 0;
        left: 0;
        position: absolute;
        padding-top: 1.5em;
        color: #2c2d33;
    }
    .wpas-cross-rating .wpas-user-rating-wrapper:before,
    .wpas-cross-rating .wpas-star-rating:after {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        height: 16px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: left center;
    }
    .wpas-cross-rating .wpas-user-rating-wrapper:before {
        width: 100%;
        z-index: 1;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 304 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m181.9 23.2c0.4 1.2 0 2.6-0.9 3.4l-13.2 11.5 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3-1.1 0.8-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.5c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 7-16.2c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.3 0.1 2.4 0.9 2.7 2.3z' fill=' %23dfdfdf'/%3E%3Cpath d='m121 23.1c0.4 1.2 0 2.6-0.9 3.4l-13.1 11.5 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3-1.1 0.8-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.6c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 6.8-16c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.4 0 2.4 0.9 2.8 2.2z' fill=' %23dfdfdf'/%3E%3Cpath d='m303 26.4-13.2 11.6 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3-1.1 0.8-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.5c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 6.8-16.1c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.3 0.1 2.4 1 2.8 2.2s0.1 2.6-0.8 3.3z' fill=' %23dfdfdf'/%3E%3Cpath d='m242.9 23.2c0.4 1.2 0 2.6-0.9 3.4l-13.2 11.5 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3-1.1 0.8-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.5c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 6.8-16.2c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.5 0.1 2.5 0.9 2.9 2.3z' fill=' %23dfdfdf'/%3E%3Cpath d='m60.1 23.1c0.4 1.2 0 2.6-0.9 3.4l-13.1 11.5 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3s-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.6c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 6.8-16.1c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.4 0.1 2.5 1 2.8 2.3z' fill=' %23dfdfdf'/%3E%3C/svg%3E");
        filter: drop-shadow(0px 1px 0px gray);
    }
    .wpas-cross-rating .wpas-star-rating:after {
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
    .wpas-cross-rating ol > li .wpas-score-overview:before {
        position: absolute;
        right: 0;
        top: 0;
        width: 144px;
        height: 63px;
        background: url(<?php echo WPASER_DIR_URL_FILE . 'public/img/editors-choice-v1.png'; ?>);
        background-repeat: no-repeat;
        content: "";
    }
    .wpas-cross-rating ol > li:not(:first-child) .wpas-score-overview:before {
        background: url(<?php echo WPASER_DIR_URL_FILE . 'public/img/common-shape.png'; ?>);
        background-repeat: no-repeat;
        background-size: contain;
        width: 80px;
        opacity: .3;
    }
    .wpas-product-img {
        padding: 10px;
        background: #f6f6f6;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        border-radius: 3px;
    }
    .wpas-product-img img {
        max-width: 70px;
        height: auto;
    }
    .wpas-cross-rating li:not(:last-child) {
        margin-bottom: 40px;
    }
    .wpas-cross-rating ul > li {
        margin: 10px 0 0 !important;
        padding: 0;
        line-height: 1.23;
    }
    .wpas-cr-raw-list {
        display: flex;
        padding: 20px 40px;
        gap: 20px;
    }
    ul.wpas-cr-pros-cons-list li:not(:last-child) {
        font-size: 17px;
        line-height: 17px;
    }
    ul.wpas-cr-pros-cons-list li {
        font-family: system-ui !important;
        font-size: 17px;
    }
    ul.wpas-cr-pros-cons-list .icon-checkmark:before,
    ul.wpas-cr-pros-cons-list .icon-cross:before {
        font-size: 12px;
        margin-right: 8px;
        color: #58c649;
        font-family: 'icomoon' !important;
    }
    ul.wpas-cr-pros-cons-list .icon-cross:before {
        color: #f24f4f;
    }
    ul.wpas-cr-cat-list li {
        position: relative;
        margin-bottom: 5px;
    }
    ul.wpas-cr-cat-list li:before {
        position: absolute;
        left: -22px;
        top: 6px;
        width: 15px;
        height: 15px;
        content: "";
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='16' width='16' fill='%2387878b' viewBox='0 0 512 512'%3E%3Cpath d='M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-size: contain;
    }
    ul.wpas-cr-cat-list {
        flex-basis: 25%;
    }
    ul.wpas-cr-pros-cons-list {
        flex-basis: 30%;
    }
    .wpas-cr-overview {
        flex-basis: 40%;
    }
    a.wpas-cr-button {
        display: inline-block;
        text-align: center;
        line-height: 1;
        background-color: <?php echo $wpas_cros_rating_brand_color; ?>;
        padding: 10px 15px;
        color: #fff;
        font-weight: bold;
        border-radius: 3px;
        text-decoration: none !important;
        transition: .3s ease-in-out;
        margin-top: 15px;
    }
    a.wpas-cr-button:hover {
        box-shadow: 0px 3px 13px -3px <?php echo $wpas_cros_rating_brand_color; ?> !important;
    }
    .wpas-cr-overview p {
        margin-bottom: 14px !important;
    }


    /* Grid Layout Style */
    .cr1-vertical-layout .wpas-product-img {
        padding: 10px;
        background: #f6f6f6;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        border-radius: 3px;
        display: block;
        text-align: center;
        max-width: 90px;
        margin: 0 auto 15px;
    }
    .cr1-vertical-layout ol {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    .cr1-vertical-layout.wpas-cross-rating ol > li::after {
        display: none;
    } 
    .cr1-vertical-layout.wpas-cross-rating ol > li::before {
        left: -20px;
    } 
    .cr1-vertical-layout.wpas-cross-rating ol > li .wpas-score-overview:before {
        right: -22px;
        top: -20px;
    }
    .cr1-vertical-layout .wpas-score-overview {
        display: block;
    }
    .cr1-vertical-layout .wpas-cr-raw-list {
        display: block;
        padding: 20px 0px 0px 20px;
    }

    .cr1-vertical-layout .wpas-cr-raw-list .wpas-cr-cat-list,
    .cr1-vertical-layout .wpas-cr-raw-list .wpas-cr-pros-cons-list {
        margin-bottom: 20px !important;
    }

    .cr1-vertical-layout .wpas-cr-pros-cons-list li,
    .cr1-vertical-layout .wpas-cr-raw-list .wpas-cr-overview {
        position: relative;
        left: -20px;
    }

    .cr1-vertical-layout ul.wpas-cr-pros-cons-list li:not(:last-child) {
        margin-bottom: 10px !important;
    }

    .cr1-vertical-layout.wpas-cross-rating li {
        margin-bottom: 40px;
    }
    
    .cr1-vertical-layout.wpas-cross-rating ol > li {
        margin-left: 30px;
    }

    /* Responsive */
    @media (max-width: 920px) {
        .wpas-cr-raw-list {
            flex-direction: column;
        }
        ul.wpas-cr-pros-cons-list,
        .wpas-cr-overview {
            margin-left: -20px;
        }
        .wpas-cross-rating ol > li .wpas-score-overview:before {
            top: auto;
        }

        .cr1-vertical-layout ol {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            margin-top: 40px;
        }
        .cr1-vertical-layout .wpas-cr-pros-cons-list li,
        .cr1-vertical-layout .wpas-cr-raw-list .wpas-cr-overview {
            position: relative;
            left: 0px;
        }
    }
    @media (max-width: 767px) {
        .wpas-cross-rating ol > li .wpas-score-overview:before {
            display: none;
        }

        .cr1-vertical-layout.wpas-cross-rating ol > li {
            margin-left: 15px;
        }
        .cr1-vertical-layout ol {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            margin-top: 40px;
        }
        .cr1-vertical-layout .wpas-cr-pros-cons-list li,
        .cr1-vertical-layout .wpas-cr-raw-list .wpas-cr-overview {
            position: relative;
            left: 0px;
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



echo '<div class="wpas-cross-rating '. $layoutClass .'">';
if ( ! empty( get_the_title( $wpas_cross_rating_id ) ) && $wpas_cr_section_title_show ) {

    echo '<h2 class="wpas-cross-rating-title">' . get_the_title( $wpas_cross_rating_id ) . '</h2>';
}
echo '<ol>';
foreach ( $score_array as $post_id => $data ) {

    $er_object   = get_post( $post_id );
    $er_edit_url = get_admin_url() . 'post.php?post=' . $post_id . '&action=edit';

    echo '<li>';
    if ( is_user_logged_in() ) {

        echo '<a href="' . $er_edit_url . '" target="_blank" style="font-size: 14px;line-height: 14px;position: absolute;top: -23px;right: 7px;"><svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg> Edit</a>';
    }
    echo '<div class="wpas-score-overview">';
        if ( $wpas_product_img_show ) {

            echo '<div class="wpas-product-img">
                <img src="' . $data['product_img'] . '">
            </div>';
        }
        echo '<div class="wpas-product-cont">';
        if ( ! empty( $er_object->post_title ) && $wpas_cr_section_title_show ) {

            echo '<h4><strong><a href="' . $data['button_link'] . '">' . $er_object->post_title . '</a></strong></h4>';
        }
            echo '<div class="wpas-score-summary">
                <span class="wpas-score-sum-data">TOTAL SCORE : ' . $data['score'] . '</span>';
                if ( $wpas_cr_user_rating_star_show ) {

                    echo '<span class="wpas-vl"></span>
                    <span class="wpas-score-sum-data">
                        <div class="wpas-user-rating-wrapper">
                            <div class="wpas-star-rating" role="img" aria-label="Rated 3.75 out of 5" style="width:' . $data['rate_percent'] . '%">
                                <span>Rated <strong class="rating">4.00</strong> out of 5</span>
                            </div>
                        </div>
                        <span class="reviewer-no"> ('. $data['total_vote'] .') </span>
                    </span> ';
                }
                echo '<span class="wpas-vl"></span>
                <span class="wpas-score-sum-data">TOTAL RATING : ' . $data['total_rating'] . '</span>
            </div>
        </div>
    </div>';
    echo '<div class="wpas-cr-raw-list">';
    if ( $wpas_cr_category_list_show ) {

        echo '<ul class="wpas-cr-cat-list">';
        foreach ( $data['categories'] as $key => $value ) {

            echo '<li><span>' . $key . '</span> : <strong>' . $value . '</strong></li>';
        }
        echo '</ul>';
    }
    if ( $wpas_cr_pros_cons_show ) {

        echo '<ul class="wpas-cr-pros-cons-list">';
        foreach ( $data['pros'] as $value ) {
            
            echo '<li class="wpas-cr-pros icon-checkmark">' . $value . '</li>';
        }
        foreach ( $data['cons'] as $value ) {
            
            echo '<li class="wpas-cr-cons icon-cross">' . $value . '</li>';
        }
        echo '</ul>';
    }
    echo '<div class="wpas-cr-overview">';
    if ( $wpas_cr_desc_show ) {

        echo wpautop( $data['overview'] );
    }

    echo '<a class="wpas-cr-button" href="' . $data['button_link'] . '" target="' . ( $data['button_target'] ? '_self"' : '_blank"' ) . ( $data['button_nofollow'] ? ' rel="nofollow"' : '' ) . '>' . $data['button_text'] . '</a></div>';
    echo '</div>';
    echo '</li>';
}
echo '</ol></div>';
