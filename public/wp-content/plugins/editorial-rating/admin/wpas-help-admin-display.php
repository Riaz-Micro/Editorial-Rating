<?php

/**
 * Provide a admin area view for the plugin
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link       https://pluginic.com/
 * @since      1.0.0
 *
 * @package    WPAS_Editorial_Rating
 * @subpackage WPAS_Editorial_Rating/admin/partials
 */

wp_enqueue_style( 'wpas-admin-main-page', esc_url( WPASER_DIR_URL_FILE . 'admin/css/wpas-main-page.css' ), array(), WPAS_Editorial_Rating_VERSION );
?>
	<div class="wpas-option-body">
		<div class="wpas-setting-header">
			<img src="<?php echo esc_url( WPASER_DIR_URL_FILE . 'admin/img/admin-head-bg-pattern.png' ); ?>" alt="Editorial Rating Header Background">
			<div class="wpas-setting-header-info">
				<img src="<?php echo esc_url( WPASER_DIR_URL_FILE . 'admin/img/icon-128x128.gif' ); ?>" alt="Editorial Rating Logo">
				<div class="wpas-plugin-about">
					<h1>Editorial Rating PRO<sup id="wpas-plugin-version"><?php echo esc_html( WPAS_Editorial_Rating_VERSION ); ?></sup></h1>
					<p>Thank you for installing.</p>
					<p>Most Powerful &amp; Advanced Plugin!</p>
				</div>
			</div>
		</div>

		<div class="wpas-container-wrap">
			<div class="wpas-container-overview">
				<div class="wpas-container-hero">
					<div class="wpas-hero-video">
						<iframe width="100%" height="400" src="https://www.youtube.com/embed/9x05j2nvemE" title="Editorial Rating" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						<div class="wpas-hero-buttons">
							<a href="<?php echo esc_url( get_admin_url() . 'post-new.php?post_type=wpas_review' ); ?>" target="_blank">Add New Review</a>
							<a href="https://pluginic.com/docs/editorial-product-rating-overview/?ref=100" target="_blank">Documentation</a>
							<a href="https://demo.pluginic.com/editorial-rating/?ref=100" target="_blank">Live Demo</a>
						</div>
					</div>
					<div class="wpas-container-ad">
						<a href="https://pluginic.com/services/?ref=100" target="_blank">
							<picture>
								<source media="(max-width:960px)" srcset="<?php echo esc_url( WPASER_DIR_URL_FILE . 'admin/img/banner-960x340.jpg' ); ?>">
								<img src="<?php echo esc_url( WPASER_DIR_URL_FILE . 'admin/img/banner-329x468.jpg' ); ?>">
							</picture>
						</a>
					</div>
				</div>
			</div>
			<div class="wpas-spacer" style="height: 20px;"></div>
			<div class="wpas-hero-upgrade">
				<div class="confetti-piece"></div>
				<div class="confetti-piece"></div>
				<div class="confetti-piece"></div>
				<div class="confetti-piece"></div>
				<div class="confetti-piece"></div>
				<div class="confetti-piece"></div>
				<div class="confetti-piece"></div>
				<div class="confetti-piece"></div>
				<div class="confetti-piece"></div>
				<div class="confetti-piece"></div>
				<div class="confetti-piece"></div>
				<div class="confetti-piece"></div>
				<div class="confetti-piece"></div>
				<h2><span class="dashicons dashicons-superhero-alt"></span>You are currently using PRO version!</h2>
			</div>
			<div class="wpas-spacer" style="height: 20px;"></div>
			<div class="wpas-testimonial">
				<div class="wpas-testimonial-columns">
					<div class="wpas-testimonial-column">
						<span class="wpas-testimonial-stars"></span>
						<p style="font-size:18px;line-height:1.3;margin-bottom:15px">“The plugin is not the most stylish or feature-packed, but it’s powerful, flexible, and quite simple.</p>
						<div class="wpas-testimonial-client">
							<img width="50" height="50" src="<?php echo esc_url( WPASER_DIR_URL_FILE . 'admin/img/client-1.jpg' ); ?>">
							<div class="wpas-testimonial-client-ghost">
								<h4>Chelsea Head</h4>
								<p>Serial Entrepreneur</p>
							</div>
						</div>
					</div>
					<div class="wpas-testimonial-column">
						<span class="wpas-testimonial-stars"></span>
						<p style="font-size:18px;line-height:1.3;margin-bottom:15px">“Suitable for all types of websites, large or small. Easy to set up and lots of documentation to help you.</p>
						<div class="wpas-testimonial-client">
							<img width="50" height="50" src="<?php echo esc_url( WPASER_DIR_URL_FILE . 'admin/img/client-2.jpg' ); ?>">
							<div class="wpas-testimonial-client-ghost">
								<h4>Bert Mora</h4>
								<p>UI Developer</p>
							</div>
						</div>
					</div>
					<div class="wpas-testimonial-column">
						<span class="wpas-testimonial-stars"></span>
						<p style="font-size:18px;line-height:1.3;margin-bottom:15px">“There’s no doubt it is a great plugin. I am using the free plan and am extremely happy with the results.</p>
						<div class="wpas-testimonial-client">
							<img width="50" height="50" src="<?php echo esc_url( WPASER_DIR_URL_FILE . 'admin/img/client-3.jpg' ); ?>">
							<div class="wpas-testimonial-client-ghost">
								<h4>Carol Stokes</h4>
								<p>IT Specialist</p>
							</div>
						</div>
					</div>
					<div class="wpas-testimonial-column">
						<span class="wpas-testimonial-stars"></span>
						<p style="font-size:18px;line-height:1.3;margin-bottom:15px">“The plugin met all my expectations! It’s easy to use and everything works as it should. I recommend it!</p>
						<div class="wpas-testimonial-client">
							<img width="50" height="50" src="<?php echo esc_url( WPASER_DIR_URL_FILE . 'admin/img/client-4.jpg' ); ?>">
							<div class="wpas-testimonial-client-ghost">
								<h4>Roman Rybakov</h4>
								<p>Frontend Engineer</p>
							</div>
						</div>
					</div>
					<a href="https://wordpress.org/support/plugin/editorial-rating/reviews/?filter=5" target="_blank" style="margin: 0 auto;">See reviews from free users →</a>
				</div>
			</div>
		</div>
	</div>

	<script type="module">
        import confetti from "https://cdn.skypack.dev/canvas-confetti@1.3.2";

        const $activityStatusEl = document.getElementById("activityStatus");
        let oldVisibility;

        const getWindowSize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            return { height, width };
        };

        const placeConfetti = (x, y, angle = 90, particleCount = 100) => {
            const { height, width } = getWindowSize();
            const origin = { x: x / width, y: y / height };
            confetti({ origin, angle, particleCount, spread: 360 });
        };

		// Set and get the coockie
        const setCookie = (name, value, days) => {
            let expires = "";
            if (days) {
                const date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "") + expires + "; path=/";
        };

        const getCookie = (name) => {
            const nameEQ = name + "=";
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        };

        const showConfettiForFirstTimeUser = () => {
            const isFirstVisit = getCookie('isFirstVisit') === null;

            if (isFirstVisit) {
                setCookie('isFirstVisit', 'false', 365);

                // Show confetti
                var duration = 10 * 1000; // set the timer in seconds
                var end = Date.now() + duration;

                (function frame() {
                    confetti({
                        particleCount: 7,
                        angle: 60,
                        spread: 55,
                        origin: { x: 0 }
                    });
                    confetti({
                        particleCount: 7,
                        angle: 120,
                        spread: 55,
                        origin: { x: 1 }
                    });

                    if (Date.now() < end) {
                        requestAnimationFrame(frame);
                    }
                })();
            }
        };

        const checkVisibilityState = async () => {
            const isActive = document.visibilityState === "visible";

            if (!oldVisibility) await new Promise((x) => setTimeout(x, 5000));

            $activityStatusEl.textContent = isActive ? "active" : "inactive";
            document.getElementsByClassName("info")[0].style.display = !isActive ? "block" : "none";

            if (!isActive) {
                confetti.reset();
            }

            oldVisibility = isActive;
        };

        document.addEventListener("visibilitychange", () => {
            checkVisibilityState();
        });

        showConfettiForFirstTimeUser();
        checkVisibilityState();
    </script>
	