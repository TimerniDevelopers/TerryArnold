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

	$('.member-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		navText: [
		'<i class="fa fa-angle-left"></i>',
		'<i class="fa fa-angle-right"></i>',
		],

		dots: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});

     // Magnific popup
     $('.popup-youtube').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'https://www.youtube.com/',

                    id: 'v=',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                }

            },
            srcAction: 'iframe_src',
        }
	 });

	 $('.partner-list').owlCarousel({
          loop: true,
          margin: 10,
          nav: false,
          dots: false,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 3
            },
            1000: {
              items: 5
            }
          }
        });


});
