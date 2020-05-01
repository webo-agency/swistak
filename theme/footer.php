<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Swistak_Theme
 */

$footer_phone = get_field('footer_phone', 'option');
if( $footer_phone ): 
    $footer_phone_url = $footer_phone['url'];
    $footer_phone_title = $footer_phone['title'];
    $footer_phone_target = $footer_phone['target'] ? $footer_phone['target'] : '_self';
endif;
$footer_email = get_field('footer_e-mail', 'option');
if( $footer_email ): 
    $footer_email_url = $footer_email['url'];
    $footer_email_title = $footer_email['title'];
    $footer_email_target = $footer_email['target'] ? $footer_email['target'] : '_self';
endif;

?>

	</div>

	<footer id="colophon" class="site-footer ks-footer">
		<div class="ks-footer__bg">
			<div class="ks-container">
				<div class="ks-footer__content">
					<div>
						<p><?php echo get_field('footer_text', 'option'); ?></p>
					</div>
					<div>
						<h2 class="ks-util-color-primary"><?php echo get_field('footer_heading', 'option'); ?></h2>
					</div>
					<div class="ks-contact-label ks-contact-label--phone">
						<a href="<?php echo esc_url( $footer_phone_url ); ?>" target="<?php echo esc_attr( $footer_phone_target ); ?>"><?php echo esc_html( $footer_phone_title ); ?></a>
					</div>
					<div class="ks-contact-label ks-contact-label--email">
						<a href="<?php echo esc_url( $footer_email_url ); ?>" target="<?php echo esc_attr( $footer_email_target ); ?>"><?php echo esc_html( $footer_email_title ); ?></a>
					</div>
					<div class="ks-form">
						<?php 
							acfe_form('footer-contact-form'); 
						?>
					</div>
				</div>
			</div>
		</div>
		<div class="ks-container">
			<div class="site-info ks-copyright">
				<div class="ks-copyright__rights">
					<span>&copy; 2020 All Rights Reserved</span>
				</div>
				<div class="ks-copyright__social-media">
				<?php
					if( have_rows('social_images', 'option') ):
						while ( have_rows('social_images', 'option') ) : the_row();
							$image = get_sub_field('social_image');
							$link = get_sub_field('social_url');
							?>	
							<a href="<?php echo $link['url']; ?>" target="<?php echo $link['target']; ?>">
								<img class="ks-social-img" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" alt="<?php echo $image['title']; ?>" />
							</a>
							<?php
						endwhile;
					else :
					endif;
				?>
				</div>
			</div>
		</div>
	</footer>
</div>

<script src="https://unpkg.com/swiper/js/swiper.min.js"></script>
<script src="<?php echo get_template_directory_uri() . '/assets/js/anchor-scroll-master/scroll.min.js' ?>"></script>
<?php wp_footer(); ?>
</body>
</html>
