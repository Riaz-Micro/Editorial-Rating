<?php if ( ! defined( 'ABSPATH' ) ) {
	die; } // Cannot access directly.

//
// Metabox of the POST
// Set a unique slug-like ID
//
$wpas_prefix_cross_opts = '_wpas_cross_rating_opt';

//
// Create a metabox
//
WPAS::createMetabox(
	$wpas_prefix_cross_opts,
	array(
		'title'        => __( 'Editorial Cross Rating Options', 'wpas_editorial_rating' ),
		'post_type'    => 'wpas_cross_rating',
		'show_restore' => false,
		'class'        => 'wpgper--metabox-wrap',
	)
);

$wpas_shortcode_field = isset( $_GET['post'] ) ? '<input id="wpasCTCinput" type="text" value=\'[cross-rating id="' . $_GET['post'] . '"]\' readonly>' : 'Shortcode will appear here after publishing:';

//
// Section : Appearance.
//
WPAS::createSection(
	$wpas_prefix_cross_opts,
	array(
		'fields' => array(

			/**
			 * Styling this page.
			 */
			array(
				'type'    => 'content',
				'content' => '<style>
				#_wpas_cross_rating_opt h2.hndle.ui-sortable-handle {pointer-events: none;}
				#_wpas_cross_rating_opt .handle-actions,
				#_wpas_cross_rating_opt .wpas-cross-rating-css,
				div#_wpas_cross_rating_opt .postbox-header {
					display: none !important;
				}
				input#wpasCTCinput {
					font-size: 19px;
					user-select: all;
				}
				.wpas-shortcode-input-wrap {
					display: flex;
					align-items: center;
					gap: 20px;
					justify-content: center;
					border-bottom: 2px dashed rgb(34 34 34 / 50%);
					padding-bottom: 30px;
				}
				.wpas-shortcode-input-wrap #clipboard {
					width: 20px;
					height: 20px;
				}
				.wpas-shortcode-btn {
					display: flex;
					justify-content: center;
					align-items: center;
					gap: 5px;
					font-size: 12px;
					font-weight: bold;
					padding: 6px 14px;
				}
				.wpas-shortcode-btn:hover {
					cursor: pointer;
					background: #fff;
					border-radius: 3px;
				}
				.wpas-field.wpas-cr-theme-set {
					padding-bottom: 0 !important;
					margin-bottom: -20px;
				}
				</style>',
				'class' => 'wpas-cross-rating-css',
			),

			/**
			 * Cross Rating Shortcode.
			 */
			array(
				'type'    => 'content',
				'content' => '<div class="wpas-shortcode-input-wrap">' . $wpas_shortcode_field . '<span class="wpas-shortcode-input-button">
				  <button class="wpas-shortcode-btn" type="button" onclick="wpasCTCfunc()">
				  	<svg id="clipboard" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M336 64h-53.88C268.9 26.8 233.7 0 192 0S115.1 26.8 101.9 64H48C21.5 64 0 85.48 0 112v352C0 490.5 21.5 512 48 512h288c26.5 0 48-21.48 48-48v-352C384 85.48 362.5 64 336 64zM192 64c17.67 0 32 14.33 32 32s-14.33 32-32 32S160 113.7 160 96S174.3 64 192 64zM282.9 262.8l-88 112c-4.047 5.156-10.02 8.438-16.53 9.062C177.6 383.1 176.8 384 176 384c-5.703 0-11.25-2.031-15.62-5.781l-56-48c-10.06-8.625-11.22-23.78-2.594-33.84c8.609-10.06 23.77-11.22 33.84-2.594l36.98 31.69l72.52-92.28c8.188-10.44 23.3-12.22 33.7-4.062C289.3 237.3 291.1 252.4 282.9 262.8z"/></svg>
				  	<span id="wpasCTCtip">Copy Shortcode</span>
				  </button>
				</span>
			  </div>
			  <script>
			  function copyToClipboard(text) {
				var wpasCTCtextarea = document.createElement("textarea");
				document.body.appendChild(wpasCTCtextarea);
				wpasCTCtextarea.value = text; //save main text in it
				wpasCTCtextarea.select(); //select textarea contenrs
				document.execCommand("copy");
				document.body.removeChild(wpasCTCtextarea);
			  }
			  function wpasCTCfunc() {
				var wpasCTCthing = document.getElementById("wpasCTCinput");
				copyToClipboard(wpasCTCthing.value);
				document.getElementById("wpasCTCtip").innerHTML = "Copyed!";
				document.getElementById("clipboard").style = "fill: #4caf50";
			  }
			  </script>',
			),

			/**
			 * Fields.
			 */
			array(
				'id'          => 'wpas_cros_rating_cat',
				'type'        => 'select',
				'title'       => 'Select Rating Category',
				'subtitle'    => 'Select your editorial rating category.',
				'placeholder' => 'Select a category',
				'options'     => 'categories',
				'query_args'  => array(
				  'taxonomy'  => 'er_cat',
				),
				'empty_message' => 'No category found.<br><a href="' . get_site_url() . '/wp-admin/edit-tags.php?taxonomy=er_cat&post_type=wpas_review" target="_blank">+ Add new category.</a>',
			),
			array(
				'type'       => 'content',
				'content'    => '<div style="margin-top: -50px;display: block;border-left: 5px solid #F44336;padding: 10px;box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;background-color: rgb(244 67 54 / 5%);max-width: max-content;">Please select a category first. Cross Rating will not be displayed without a category.</div>',
				'dependency' => array( 'wpas_cros_rating_cat', '==', '' ),
			),
			array(
				'id'         => 'wpas-cr-theme-set',
				'type'       => 'button_set',
				'title'      => 'Theme Set',
				'subtitle'   => 'Set a theme for Cross Rating<br><a href="https://demo.pluginic.com/editorial-rating/?ref=100#frhd_cr_demo" target="blank">See Demos →</a>',
				'options'    => array(
				  'set-1'  => '1',
				  'set-2'  => '2',
				  'set-3'  => '3',
				  'set-4'  => '4',
				  'set-5'  => '5',
				  'set-6'  => '6',
				  'set-7'  => '7',
				),
				'default'    => 'set-1',
				'class'      => 'wpas-cr-theme-set',
			),		  
			array(
				'type'       => 'content',
				'content'    => '<img src="' . WPASER_DIR_URL_FILE . 'admin/img/cr-template/cr-1.png">',
				'class'      => 'wpas-theme-prev-list',
				'dependency' => array( 'wpas-cr-theme-set', '==', 'set-1' ),
			),
			array(
				'type'       => 'content',
				'content'    => '<img src="' . WPASER_DIR_URL_FILE . 'admin/img/cr-template/cr-2.png">',
				'class'      => 'wpas-theme-prev-list',
				'dependency' => array( 'wpas-cr-theme-set', '==', 'set-2' ),
			),
			array(
				'type'       => 'content',
				'content'    => '<img src="' . WPASER_DIR_URL_FILE . 'admin/img/cr-template/cr-3.png">',
				'class'      => 'wpas-theme-prev-list',
				'dependency' => array( 'wpas-cr-theme-set', '==', 'set-3' ),
			),
			array(
				'type'       => 'content',
				'content'    => '<img src="' . WPASER_DIR_URL_FILE . 'admin/img/cr-template/cr-4.png">',
				'class'      => 'wpas-theme-prev-list',
				'dependency' => array( 'wpas-cr-theme-set', '==', 'set-4' ),
			),
			array(
				'type'       => 'content',
				'content'    => '<img src="' . WPASER_DIR_URL_FILE . 'admin/img/cr-template/cr-5.png">',
				'class'      => 'wpas-theme-prev-list',
				'dependency' => array( 'wpas-cr-theme-set', '==', 'set-5' ),
			),
			array(
				'type'       => 'content',
				'content'    => '<img src="' . WPASER_DIR_URL_FILE . 'admin/img/cr-template/cr-6.png">',
				'class'      => 'wpas-theme-prev-list',
				'dependency' => array( 'wpas-cr-theme-set', '==', 'set-6' ),
			),
			array(
				'type'       => 'content',
				'content'    => '<img src="' . WPASER_DIR_URL_FILE . 'admin/img/cr-template/cr-7.png">',
				'class'      => 'wpas-theme-prev-list',
				'dependency' => array( 'wpas-cr-theme-set', '==', 'set-7' ),
			),
			array(
				'id'        => 'wpas-cr-module-1',
				'type'      => 'image_select',
				'title'     => 'Module',
				'subtitle'  => 'Select a module for different components or functionalities of the theme\'s capabilities.',
				'options'   => array(
				  'horizontal' => WPASER_DIR_URL_FILE. 'admin/img/cr-template/horizontal.png',
				  'vertical'   => WPASER_DIR_URL_FILE. 'admin/img/cr-template/vertical.png',
				),
				'default'    => 'horizontal',
				'dependency' => array( 'wpas-cr-theme-set', '==', 'set-1' ),
			),
			array(
				'id'        => 'wpas-cr-module-2',
				'type'      => 'image_select',
				'title'     => 'Module',
				'subtitle'  => 'Select a module for different components or functionalities of the theme\'s capabilities.',
				'options'   => array(
				  'grid'     => WPASER_DIR_URL_FILE. 'admin/img/cr-template/grid.png',
				  'carousel' => WPASER_DIR_URL_FILE. 'admin/img/cr-template/carousel.png',
				),
				'default' => 'grid',
				'dependency' => array( 'wpas-cr-theme-set', 'any', 'set-2,set-3,set-4,set-5' ),
			),
			array(
				'id'       => 'wpas_cr_total_number_of_item',
				'type'     => 'spinner',
				'title'    => 'Show Total Rating',
				'subtitle' => 'Select the number of total rating items.',
				'default'  => 10,
			),
			array(
				'id'         => 'wpas_cr_hl_label',
				'type'       => 'text',
				'title'      => 'Highlighted Label',
				'subtitle'   => 'Set a label for highlighted item.',
				'default'    => 'EDITORS CHOICE',
				'dependency' => array( 'wpas-cr-theme-set', 'any', 'set-2,set-3,set-4,set-5' ),
				'class'      => 'wpas-field-40-percent',
			),			  
			array(
				'id'         => 'wpas_cr_section_title_show',
				'type'       => 'switcher',
				'title'      => __( 'Show/Hide Section Title', 'wpas_editorial_rating' ),
				'subtitle'   => __( 'SHow or hide section title.', 'wpas_editorial_rating' ),
				'text_on'    => 'Show',
				'text_off'   => 'Hide',
				'text_width' => 80,
				'default'    => true,
			),
			array(
				'id'         => 'wpas_product_img_show',
				'type'       => 'switcher',
				'title'      => __( 'Show/Hide Product Image', 'wpas_editorial_rating' ),
				'subtitle'   => __( 'SHow or hide product image.', 'wpas_editorial_rating' ),
				'text_on'    => 'Show',
				'text_off'   => 'Hide',
				'text_width' => 80,
				'default'    => true,
			),
			array(
				'id'         => 'wpas_cr_category_list_show',
				'type'       => 'switcher',
				'title'      => __( 'Show/Hide Category List', 'wpas_editorial_rating' ),
				'subtitle'   => __( 'SHow or hide category list.', 'wpas_editorial_rating' ),
				'text_on'    => 'Show',
				'text_off'   => 'Hide',
				'text_width' => 80,
				'default'    => false,
			),
			array(
				'id'         => 'wpas_cr_user_rating_star_show',
				'type'       => 'switcher',
				'title'      => __( 'Show/Hide User Rating Stars', 'wpas_editorial_rating' ),
				'subtitle'   => __( 'SHow or hide user rating stars.', 'wpas_editorial_rating' ),
				'text_on'    => 'Show',
				'text_off'   => 'Hide',
				'text_width' => 80,
				'default'    => true,
			),
			array(
				'id'         => 'wpas_cr_pros_cons_show',
				'type'       => 'switcher',
				'title'      => __( 'Show/Hide PROS CONS', 'wpas_editorial_rating' ),
				'subtitle'   => __( 'SHow or hide PROS CONS.', 'wpas_editorial_rating' ),
				'text_on'    => 'Show',
				'text_off'   => 'Hide',
				'text_width' => 80,
				'default'    => false,
			),
			array(
				'id'         => 'wpas_cr_desc_show',
				'type'       => 'switcher',
				'title'      => __( 'Show/Hide Description', 'wpas_editorial_rating' ),
				'subtitle'   => __( 'SHow or hide description.', 'wpas_editorial_rating' ),
				'text_on'    => 'Show',
				'text_off'   => 'Hide',
				'text_width' => 80,
				'default'    => true,
			),
			array(
				'id'         => 'wpas_cros_rating_brand_color',
				'type'       => 'color',
				'title'      => 'Brand Color',
				'subtitle'   => 'Set a brand color for whole layout.',
				'default'    => '#E43917',
			),
		),
	)
);
