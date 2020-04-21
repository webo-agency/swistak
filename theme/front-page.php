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

$about_img = get_field('about_image');
if( $about_img ): 
    $about_img_url = $about_img['url'];
    $about_img_alt = $about_img['alt'];
    $about_img_title = $about_img['title'];
endif;

$help_img_1 = get_field('help_image_1');
if( $help_img_1 ): 
    $help_img_1_url = $help_img_1['url'];
    $help_img_1_alt = $help_img_1['alt'];
    $help_img_1_title = $help_img_1['title'];
endif;

$help_img_2 = get_field('help_image_2');
if( $help_img_2 ): 
    $help_img_2_url = $help_img_2['url'];
    $help_img_2_alt = $help_img_2['alt'];
    $help_img_2_title = $help_img_2['title'];
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

			<section id="ks-about" class="ks-background-shape ks-background-shape__square ks-about">
				<div class="ks-container">
					<div class="ks-about__inner">
						<div class="ks-image ks-image--big">
							<img  src="<?php echo $about_img['url']; ?>" alt="<?php echo $about_img['alt']; ?>" alt="<?php echo $about_img['title']; ?>" />
						</div>
						<div class="ks-about__content">
							<div><?php echo the_field('about_heading'); ?></div>

							<div class="ks-about__facilities">
							<?php
								if( have_rows('about_facilities') ):
									while ( have_rows('about_facilities') ) : the_row();
										$image = get_sub_field('about_facility_image');
										$content = get_sub_field('about_facility_info');
										?>	
											<div class="ks-facility">
												<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" alt="<?php echo $image['title']; ?>" />
												<span class="ks-facility__title"><?php echo $content; ?></span>
											</div>
										<?php
									endwhile;
								else :
								endif;
							?>
							</div>

							<div class="ks-about__text"><?php echo the_field('about_content'); ?></div>
						</div>
					</div>	
				</div>
			</section>
			
			<section id="ks-how-do-i-help" class="ks-help ks-background-shape ks-background-shape__rectangle">
				<div class="ks-container">
					<div class="ks-help__info">
						<div class="ks-help__content">
							<?php echo the_field('help_heading'); ?>
							<?php echo the_field('help_content'); ?>
						</div>
						<div class="ks-help__images">
							<div class="ks-image ks-image--normal">
								<img src="<?php echo $help_img_1['url']; ?>" alt="<?php echo $help_img_1['alt']; ?>" alt="<?php echo $help_img_1['title']; ?>" />
							</div>
							<div class="ks-image ks-image--normal">
								<img src="<?php echo $help_img_2['url']; ?>" alt="<?php echo $help_img_2['alt']; ?>" alt="<?php echo $help_img_2['title']; ?>" />
							</div>
						</div>
					</div>
					<div class="ks-help__facilities">
						<?php
							if( have_rows('help_facilities') ):
								while ( have_rows('help_facilities') ) : the_row();
									$icon = get_sub_field('help_facility_icon');
									$title = get_sub_field('help_facility_title');
									$description = get_sub_field('help_facility_description');
									?>	
										<div class="ks-facility ks-facility--extended">
											<div>
												<img src="<?php echo $icon['url']; ?>" alt="<?php echo $icon['alt']; ?>" alt="<?php echo $icon['title']; ?>" />
												<span class="ks-facility__title ks-facility__title--with-line"><?php echo $title; ?></span>
											</div>
											<?php echo $description; ?>
										</div>
									<?php
								endwhile;
							else :
							endif;
						?>
					</div>
				</div>
			</section>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
