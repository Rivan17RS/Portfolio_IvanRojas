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
	emailjs.init("P666zB8mT-Vr6UtaE");

	const form = document.getElementById("contact-form");
	const status = document.getElementById("form-status");

	if (form) {
		form.addEventListener("submit", function (e) {
			e.preventDefault();

			status.innerHTML = "Sending...";
			status.style.color = "#888";

			emailjs.sendForm("service_a4twy6d", "template_xzyml26", this)
				.then(function () {
					status.innerHTML = "Message sent successfully!";
					status.style.color = "green";
					form.reset();
				})
				.catch(function (error) {
					console.error("EmailJS Error:", error);
					status.innerHTML = "Something went wrong. Please try again.";
					status.style.color = "red";
				});
		});
	}

})(jQuery);
