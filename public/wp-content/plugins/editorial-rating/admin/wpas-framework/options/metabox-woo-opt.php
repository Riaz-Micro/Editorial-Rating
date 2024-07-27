<?php if ( ! defined( 'ABSPATH' ) ) {
	die; } // Cannot access directly.

//
// Metabox of the POST
// Set a unique slug-like ID
//
$wpas_prefix_post_opts = '_wpas_er_woo_options';

/**
 * Getting WOO.
 */
$wpas_admin_options = get_option( '_wpas_global_options' );
$wpas_woo_enable    = isset( $wpas_admin_options['wpas-metabox-woo-show'] ) ? $wpas_admin_options['wpas-metabox-woo-show'] : '';

//
// Create a metabox.
//
if ( $wpas_woo_enable ) {

	WPAS::createMetabox(
		$wpas_prefix_post_opts,
		array(
			'title'        => __( '<img src="' . WPASER_DIR_URL_FILE . 'admin/img/icon-128x128.gif" style="max-width: 60px;filter: drop-shadow(1px 1px 1px black);outline: 2px solid #fff;border-radius: 5px;"><span>Editorial Rating Options for WooCommerce</span>', 'wpas_editorial_rating' ),
			'post_type'    => 'product',
			'show_restore' => true,
			'class'        => 'wpgper--metabox-wrap',
		)
	);
}

//
// Section : Appearance.
//
WPAS::createSection(
	$wpas_prefix_post_opts,
	array(
		'fields' => array(

			array(
				'type'    => 'content',
				'content' => '<style>
				#_wpas_er_woo_options .wpas-field.wpas-woo-root-style {
					padding: 0 !important;
				}
				#_wpas_er_woo_options h2.hndle.ui-sortable-handle {
					pointer-events: none;
					gap: 20px;
				}
				#_wpas_er_woo_options button.handlediv {
					display: none;
				}
				#_wpas_er_woo_options .handle-actions {
					margin-right: 20px;
				}
				</style>',
				'class'   => 'wpas-woo-root-style',
			),

			array(
				'id'         => 'wpas-woo-editorial-rating-show',
				'type'       => 'switcher',
				'title'      => __( 'Show/Hide Editorial Rating Bar', 'wpas_editorial_rating' ),
				'subtitle'   => __( 'SHow or hide editorial rating bar.', 'wpas_editorial_rating' ),
				'text_on'    => 'Show',
				'text_off'   => 'Hide',
				'text_width' => 80,
				'default'    => true,
			),

			array(
				'id'           => 'wpas-woo-editorial-rating',
				'type'         => 'repeater',
				'title'        => __( 'Editorial Rating', 'wpas_editorial_rating' ),
				'subtitle'     => __( 'Set your product rating category & rate for this post. Use \'Add More\' button to create more.<br><br>Score Calculation: Total sum of each point / total rating category.', 'wpas_editorial_rating' ),
				'button_title' => 'Add More',
				'fields'       => array(

					array(
						'id'    => 'wpas-woo-editorial-rating-category-name',
						'title' => __( 'Category Name', 'wpas_editorial_rating' ),
						'type'  => 'text',
					),
					array(
						'id'    => 'wpas-woo-editorial-rating-category-rate',
						'title' => __( 'Category Rate', 'wpas_editorial_rating' ),
						'type'  => 'spinner',
						'min'   => 0,
						'max'   => 10,
					),

				),
				'default'      => array(
					array(
						'wpas-woo-editorial-rating-category-name' => 'Features Rate (1)',
						'wpas-woo-editorial-rating-category-rate' => 7,
					),
					array(
						'wpas-woo-editorial-rating-category-name' => 'Features Rate (2)',
						'wpas-woo-editorial-rating-category-rate' => 9,
					),
					array(
						'wpas-woo-editorial-rating-category-name' => 'Features Rate (3)',
						'wpas-woo-editorial-rating-category-rate' => 8,
					),
				),
				'dependency'   => array( 'wpas-woo-editorial-rating-show', '==', 'true' ),
			),

			array(
				'id'         => 'wpas-woo-bar-animation',
				'type'       => 'switcher',
				'title'      => __( 'Progress Bar Animation', 'wpas_editorial_rating' ),
				'subtitle'   => __( 'Off/On progress bar animation.', 'wpas_editorial_rating' ),
				'default'    => true,
				'dependency' => array( 'wpas-woo-editorial-rating-show', '==', 'true' ),
			),

			array(
				'type'    => 'heading',
				'content' => __( '— PROS CONS —', 'wpas_editorial_rating' ),
			),

			array(
				'id'       => 'wpas-woo-pros-cons-shows',
				'type'     => 'switcher',
				'title'    => __( 'Show/Hide Pros-Cons.', 'wpas_editorial_rating' ),
				'subtitle' => __( 'Show or hide Pros-Cons.', 'wpas_editorial_rating' ),
				'default'  => true,
			),

			array(
				'id'          => 'wpas-woo-pros-label',
				'type'        => 'text',
				'title'       => __( 'Custom Pros Label', 'wpas_editorial_rating' ),
				'subtitle'    => __( 'Type your custom Pros label.', 'wpas_editorial_rating' ),
				'placeholder' => 'Advantages',
				'dependency'  => array( 'wpas-woo-pros-cons-shows', '==', 'true' ),
				'class'       => 'wpas-field-40-percent',
			),

			array(
				'id'           => 'wpas-woo-pros',
				'type'         => 'repeater',
				'title'        => __( 'Advantages List (Pros)', 'wpas_editorial_rating' ),
				'subtitle'     => __( 'Set advantage list for this post. Use \'Add More\' button to create more.', 'wpas_editorial_rating' ),
				'button_title' => 'Add More',
				'fields'       => array(

					array(
						'id'   => 'wpas-woo-pros-list',
						'type' => 'text',
					),

				),
				'default'      => array(
					array(
						'wpas-woo-pros-list' => 'Advantage Sample 1',
					),
					array(
						'wpas-woo-pros-list' => 'Advantage Sample 2',
					),
					array(
						'wpas-woo-pros-list' => 'Advantage Sample 3',
					),
				),
				'dependency'   => array( 'wpas-woo-pros-cons-shows', '==', 'true' ),
			),

			array(
				'id'          => 'wpas-woo-cons-label',
				'type'        => 'text',
				'title'       => __( 'Custom Cons Label', 'wpas_editorial_rating' ),
				'subtitle'    => __( 'Type your custom Cons label.', 'wpas_editorial_rating' ),
				'placeholder' => 'Disadvantages',
				'dependency'  => array( 'wpas-woo-pros-cons-shows', '==', 'true' ),
				'class'       => 'wpas-field-40-percent',
			),

			array(
				'id'           => 'wpas-woo-cons',
				'type'         => 'repeater',
				'title'        => __( 'Disadvantages List (Cons)', 'wpas_editorial_rating' ),
				'subtitle'     => __( 'Set disadvantages list for this post. Use \'Add More\' button to create more.', 'wpas_editorial_rating' ),
				'button_title' => 'Add More',
				'fields'       => array(

					array(
						'id'   => 'wpas-woo-cons-list',
						'type' => 'text',
					),

				),
				'default'      => array(
					array(
						'wpas-woo-cons-list' => 'Disadvantage (1)',
					),
					array(
						'wpas-woo-cons-list' => 'Disadvantage (2)',
					),
				),
				'dependency'   => array( 'wpas-woo-pros-cons-shows', '==', 'true' ),
			),
		),
	)
);
