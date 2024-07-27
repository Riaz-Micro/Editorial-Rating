<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'k!xG(4So5LYHM@F=2un#YYv:>9+*i!_@(N)#jSKuMJ>|545OWVMJ}x0Isz/t0r4B' );
define( 'SECURE_AUTH_KEY',   '4d>b3c9F|z(qm.NJ!kTF=s` {Qh7]}ka0ID^o842z2Y;~yWNkHDuy&UH{ UFM$np' );
define( 'LOGGED_IN_KEY',     'Gj@EFEHU[*HrLs:Z99k?nKvC2(#vS$+#v_*d!{/W)fyom0^vj`L@;oP,Dz[+&|);' );
define( 'NONCE_KEY',         '5w$E_]]9e28J8{WqD;O+?0]7!p(Y8MKi>COclm +}ao9fj*+mD]dA6WuO]KTkp_y' );
define( 'AUTH_SALT',         '?BeeBtZ Um~:[k;(29-$`/+FgjDg)H8vr! m:0jssKT9D(4%Dfuph2bEp/XHm?v*' );
define( 'SECURE_AUTH_SALT',  'Dret1%G|#RA%,)$=~j 2g7T=$>;?fmE8QP%KhP cdX$;):1:TV.!)H.`@6V~ZnuZ' );
define( 'LOGGED_IN_SALT',    'H2E;m[:5,+Ov^%f(%R/ZBz#J%TC3Be*2&Z}?;<[MH,hx/r^dnM%ee$r~f6Ev%_x3' );
define( 'NONCE_SALT',        '2k[{CCE]x8fISqNGCW)08coGMtf:ZdglUO_HqtB(=kYfZ){Ox aIg(Ev$<V,9U-c' );
define( 'WP_CACHE_KEY_SALT', ']bTW2:d&tfw @l^T+NaQ9Xa(|H(Y4-byF_+%n^yx[j~d,Mf$J:u `pKGJj+!rRVy' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
