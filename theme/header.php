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

 function getPageClassName() {
	$classname;
	if ( is_front_page() ) {
		$classname = 'ks-front-page';
	}
	else {
		$classname = 'ks-page';
	}
	return $classname;
 }

?>
<!doctype html>
<html class="no-js" <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"> 
	<link rel="stylesheet" href="<?php echo get_template_directory_uri() . '/assets/css/swiper.min.css' ?>">
	
	<?php wp_head(); ?>
	<script>
		var acf = {};
		acf.data = {};
		var lazySizes = {};
		lazySizes.cfg = {}; 
		lazySizes.cfg.nativeLoading = {};
		</script>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="<?php echo getPageClassName(); ?> site">
	<div class="ks-header" id="header">
		<header id="masthead" class="ks-container site-header">
			<div class="ks-header__bar">
				<div class="site-branding">
					<?php the_custom_logo(); ?>
				</div><!-- .site-branding -->

				<nav id="site-navigation" class="main-navigation">
				<button class="menu-toggle ks-menu-toggler" aria-controls="primary-menu" aria-expanded="false">
					<span class="ks-sr-only">Menu</span>
					<div class="ks-menu-toggler__line"></div>
					<div class="ks-menu-toggler__line"></div>
					<div class="ks-menu-toggler__line"></div>
				</button>
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
						<?php
							if( have_rows('social_images', 'option') ):
								while ( have_rows('social_images', 'option') ) : the_row();
									$image = get_sub_field('social_image');
									$link = get_sub_field('social_url');
									?>	
									<a href="<?php echo $link['url']; ?>" target="<?php echo $link['target']; ?>">
										<img width="23" height="23" class="ks-social-img" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" alt="<?php echo $image['title']; ?>" />
									</a>
									<?php
								endwhile;
							else :
							endif;
						?>
						</div>
						<button class="ks-button ks-button--primary">
							<a class="scroll" href="#kontakt">Skontaktuj się</a>
						</button>
					</div>
				</div>
				</nav><!-- #site-navigation -->
			</div>
		</header><!-- #masthead -->
	</div>

	<div id="content" class="site-content">
