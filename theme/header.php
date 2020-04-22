<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Swistak_Theme
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"> 
	<link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css">
	
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<div class="ks-container ks-header">
		<header id="masthead" class="site-header">
			<div class="ks-header__bar">
				<div class="site-branding">
					<?php the_custom_logo(); ?>
				</div><!-- .site-branding -->

				<nav id="site-navigation" class="main-navigation">
				<button class="menu-toggle ks-menu-toggler" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Menu', 'swistak-theme' ); ?></button>
				<div class="ks-menu-items-container">
					<?php
					wp_nav_menu(
						array(
							'theme_location' => 'menu-1',
							'menu_id'        => 'primary-menu',
						)
					);
					?>
					<div class="ks-contact-info">
						<div class="ks-contact-info__social-media">
							<a href="#"><img src="<?php echo get_template_directory_uri() . '/assets/images/fb-icon.png' ?>" alt="<?php bloginfo( 'name' ); ?>" /></a>
							<a href="#"><img src="<?php echo get_template_directory_uri() . '/assets/images/fb-icon.png' ?>" alt="<?php bloginfo( 'name' ); ?>" /></a>
						</div>
						<button class="ks-button ks-button--primary">Skontaktuj się</button>
					</div>
				</div>
				</nav><!-- #site-navigation -->
			</div>
		</header><!-- #masthead -->
	</div>

	<div id="content" class="site-content">
