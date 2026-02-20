/*
	Prologue by HTML5 UP
*/

(function($) {

	var	$window = $(window),
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
	emailjs.init("P666zB8mT-Vr6UtaE"); // <-- EmailJS PUBLIC APIKEY

	const form = document.getElementById("contact-form");
	const status = document.getElementById("form-status");

	if (!form) return;

		form.addEventListener("submit", function (e) {
			e.preventDefault();

			status.innerText = "Sending message...";

			emailjs.sendForm(
			"service_a4twy6d",     // <-- service email linked in EmailJS
			"template_xdjk815",    // <-- template created in EmailJS (I used "Contact Us" template)
			this
			).then(
			function () { // Success callback
				status.innerText = "Message sent successfully! I will get back to you soon.";
				form.reset();
			},
			function (error) {
				console.error("EmailJS Error:", error);
				status.innerText = "Failed to send message. Please try again later.";
			}
			);
		});
	})();

})(jQuery);
