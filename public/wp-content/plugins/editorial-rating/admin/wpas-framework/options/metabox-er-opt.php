<?php if ( ! defined( 'ABSPATH' ) ) {
	die; } // Cannot access directly.

//
// Metabox of the POST
// Set a unique slug-like ID
//
$wpas_prefix_erbp_opts = '_wpas_er_byproduct_options';

/**
 * Get Selected Post Types.
 */
$wpas_admin_options       = get_option( '_wpas_global_options' );
$wpas_selected_post_types = isset( $wpas_admin_options['wpas_selected_er_post_types'] ) ? $wpas_admin_options['wpas_selected_er_post_types'] : '';

//
// Create a metabox
//
WPAS::createMetabox(
	$wpas_prefix_erbp_opts,
	array(
		'title'        => __( '<img src="' . WPASER_DIR_URL_FILE . 'admin/img/icon-128x128.gif" style="max-width: 40px;filter: drop-shadow(1px 1px 1px black);outline: 2px solid #fff;border-radius: 5px;"><span>Editorial Rating Options</span>', 'wpas_editorial_rating' ),
		'post_type'    => empty( $wpas_selected_post_types ) ? array( 'post' ) : $wpas_selected_post_types,
		'show_restore' => false,
		'context'      => 'side',
		'class'        => 'wpgper--metabox-erbp-wrap',
	)
);

//
// Section : Appearance.
//
WPAS::createSection(
	$wpas_prefix_erbp_opts,
	array(
		'fields' => array(

			array(
				'id'          => 'wpas-cpt-review-selected-for',
				'type'        => 'select',
				'title'       => 'Select a review for schema & user review comment data :',
				'subtitle'    => 'If you don\'t select a review, schema will not get the rating values, & user review comment options not working.',
				'after'       => '<a href="' . esc_url( get_admin_url() . 'post-new.php?post_type=wpas_review' ) . '" target="_blank">+ Add New Review</a>',
				'placeholder' => 'Select a review',
				'chosen'      => true,
				'ajax'        => true,
				'options'     => 'posts',
				'query_args'  => array(
					'post_type' => 'wpas_review',
				),
				'class'       => 'wpas--db-tar',
			),
			array(
				'id'         => 'wpas-cpt-schema-shows',
				'type'       => 'switcher',
				'title'      => __( 'Show/Hide Schema', 'wpas_editorial_rating' ),
				'subtitle'   => __( 'Show or hide schema for this post.', 'wpas_editorial_rating' ),
				'text_on'    => 'Show',
				'text_off'   => 'Hide',
				'text_width' => 80,
				'default'    => false,
			),
			array(
				'id'         => 'wpas-cpt-schema-auth-name',
				'type'       => 'text',
				'title'      => 'Schema Author Name',
				'subtitle'   => 'Leave this blank, to get author name from post author in Schema data.',
				'dependency' => array( 'wpas-cpt-schema-shows', '==', 'true' ),
			),
			array(
				'id'         => 'wpas-cpt-review-comment-allowed',
				'type'       => 'switcher',
				'title'      => __( 'Allowed review in user comment. ', 'wpas_editorial_rating' ),
				'subtitle'   => __( 'Allowed/Disallowed review in user comment section on this post.', 'wpas_editorial_rating' ),
				'text_on'    => 'Allowed',
				'text_off'   => 'Disallowed',
				'text_width' => 110,
				'default'    => false,
			),
		),
	)
);
