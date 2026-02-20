/*
	Prologue by HTML5 UP
*/

(function($) {

	var $window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
	breakpoints({
		wide:      [ '961px',  '1880px' ],
		normal:    [ '961px',  '1620px' ],
		narrow:    [ '961px',  '1320px' ],
		narrower:  [ '737px',  '960px'  ],
		mobile:    [ null,     '736px'  ]
	});

	// Remove preload
	$window.on('load', function() {
		window.setTimeout(function() {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Scrolly
	$('.scrolly').scrolly();


	// Contact Form - EmailJS
	(function () {

		// Initialize EmailJS (PUBLIC KEY)
		emailjs.init("P666zB8mT-Vr6UtaE");

		const form = document.getElementById("contact-form");
		const status = document.getElementById("form-status");

		if (!form) return;

		const button = form.querySelector("button");

		form.addEventListener("submit", function (e) {

			e.preventDefault();

			// Prevent double submit
			button.disabled = true;

			// Reset status state
			status.classList.remove("success", "error");
			status.style.opacity = 1;
			status.innerText = "Sending message...";

			emailjs.sendForm(
				"service_a4twy6d", // EmailJS Service ID
				"template_xdjk815", // EmailJS Template ID
				form
			)
			.then(function () {

				status.classList.remove("error");
				status.classList.add("success");

				status.style.opacity = 0;

				setTimeout(function () {
					status.innerText = "Message sent successfully! I will get back to you soon.";
					status.style.opacity = 1;
				}, 150);

				form.reset();
				button.disabled = false;

			})
			.catch(function (error) {

				console.error("EmailJS Error:", error);

				status.classList.remove("success");
				status.classList.add("error");

				status.style.opacity = 0;

				setTimeout(function () {
					status.innerText = "Failed to send message. Please try again later.";
					status.style.opacity = 1;
				}, 150);

				button.disabled = false;

			});

		});

	})();

})(jQuery);
