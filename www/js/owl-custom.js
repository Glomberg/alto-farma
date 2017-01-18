$(document).ready(function(){
	
	// Owl Carousels
	$('.owlslider').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		items:1
	});
	
	$('.index-right .slider').owlCarousel({
		items:1,
		margin: 15
	});
	
	$('.slick-slider').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		responsive:{
			0:{
				items:1
			},
			475: {
				items:2
			},
			670:{
				items:3
			},
			910:{
				items:4
			},
			1160:{
				items:5
			}
		}
	});

});