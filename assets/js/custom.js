/*=========


Template Name: DashCode -  HTML Template

=========*/

/*=========
----- JS INDEX -----

=========*/

$(document).ready(function($) {

	// Whole Script Strict Mode Syntax
	"use strict";
    $("[data-background").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

	    // Sticky Header JS Start
		// $(window).on( 'scroll', function(){
		// 	if ($(window).scrollTop() >= 200) {
		// 		$('.header-area').addClass('sticky-header');
		// 	}
		// 	else {
		// 		$('.header-area').removeClass('sticky-header');
		// 	}
		// });
		// Sticky Navbar
		$(window).scroll(function () {
			if ($(this).scrollTop() > 300) {
				$('.sticky-top').css('top', '0px');
			} else {
				$('.sticky-top').css('top', '-100px');
			}
		});
		    
    // Initiate the wowjs
    new WOW().init();

		//testimonial-slider 
		var $testimonialSlider = $(".testimonial-carousel");
		$testimonialSlider.owlCarousel({
			loop: false,
			nav: true,
			navText: [
				'<i class="fas fa-chevron-left"></i>',
				'<i class="fas fa-chevron-right"></i>',
			],
			dots: false,
			autoplay: true,
			smartSpeed: 1000,
			center: true,
			margin: 30,
			responsive: {
				0: {
					items: 1,
				},
				768: {
					items: 1,
				},
				992: {
					items: 1,
				},
				1300: {
					items: 1,
				},
	
			}
		});
		$('.videos-icon').magnificPopup({
			type: 'iframe',
			iframe: {
			  patterns: {
				youtube: {
				  index: 'youtube.com/',
		  
				  id: 'v=',
				  src: 'http://www.youtube.com/embed/%id%?autoplay=1'
				}
		  
			  },
			  srcAction: 'iframe_src',
			}
		  });
			 // student carousel
    $(".student-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

});