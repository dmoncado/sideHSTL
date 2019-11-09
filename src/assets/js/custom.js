'use strict';

let pathname = window.location.pathname; // Gets URL path and stores in pathname

$(document).ready(function() {
	console.log('document ready!');
	//removeIf(production)
		// Be careful putting code here!
	//endRemoveIf(production)

	// For appending the 'active' class
	$('.navbar-nav > li > a[href="'+pathname+'"]').parent().addClass('active');
	$('.dropdown-menu > li > a[href="'+pathname+'"]').addClass('active');

	// Slick initiations
	$('.landing-page-carousel').slick({
		dots: true,
		mobileFirst: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.about-page-carousel').slick({
		dots: false,
		mobileFirst: true,
		infinite: true,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
			  breakpoint: 768,
			  settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
				}
			}
		]
	});
});
