<?php
/**
 * The homepage template file
 *
 * @package Swistak_Theme
 */

get_header();
$hero_button_1 = get_field('hero_button_1');
if( $hero_button_1 ): 
    $hero_button_1_url = $hero_button_1['url'];
    $hero_button_1_title = $hero_button_1['title'];
    $hero_button_1_target = $hero_button_1['target'] ? $hero_button_1['target'] : '_self';
endif;

$hero_button_2 = get_field('hero_button_2');
if( $hero_button_2 ): 
    $hero_button_2_url = $hero_button_2['url'];
    $hero_button_2_title = $hero_button_2['title'];
    $hero_button_2_target = $hero_button_2['target'] ? $hero_button_2['target'] : '_self';
endif;
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">
			<section class="ks-hero">
				<div class="ks-hero__container">
					<div class="ks-container">
						<div class="ks-hero__content">
							<h1 class="ks-text-with-wave"><?php echo the_field('hero_title'); ?></h1>
							<p><?php echo the_field('hero_description'); ?></p>
							<div class="ks-hero__buttons">
								<button class="ks-button ks-button--primary">
									<a href="<?php echo esc_url( $hero_button_1_url ); ?>" target="<?php echo esc_attr( $hero_button_1_target ); ?>"><?php echo esc_html( $hero_button_1_title ); ?></a>
								</button>
								<button class="ks-button ks-button__video ks-button__video--primary">
									<a href="<?php echo esc_url( $hero_button_2_url ); ?>" target="<?php echo esc_attr( $hero_button_2_target ); ?>"><?php echo esc_html( $hero_button_2_title ); ?></a>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

		<?php
		if ( have_posts() ) :

			if ( is_home() && ! is_front_page() ) :
				?>
				<header>
					<h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
				</header>
				<?php
			endif;

			/* Start the Loop */
			while ( have_posts() ) :
				the_post();

				/*
				 * Include the Post-Type-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
				 */
				get_template_part( 'template-parts/content', get_post_type() );

			endwhile;

			the_posts_navigation();

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif;
		?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
