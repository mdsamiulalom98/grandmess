(function($) {
	"use strict";

	/* preloader */
	$(window).on('load', function(){
		var preloaderFadeOutTime = 500;
		function hidePreloader(){
			var preloader = $('.spinner-wrapper');
			setTimeout(function(){
				preloader.fadeOut(preloaderFadeOutTime);
			}, 500);
		}
		hidePreloader();
	});

	    // Header slider
    $('.header-slider').slick({
        autoplay: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // Testimonial Slider
    $('.testimonial-slider').slick({
        infinite: true,
        autoplay: false,
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonial-slider-nav'
    });
    $('.testimonial-slider-nav').slick({
        arrows: false,
        infinite: true,
        dots: false,
        focusOnSelect: true,
        slidesToShow: 1,
        asNavFor: '.testimonial-slider'
    });
    $('.testimonial .slider-nav').css({"position": "relative", "height": "auto"});


  // Product Slider 4 Column
    $('.pro-slider').slick({
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

// service slider
    $('.service-slider').slick({
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
// $(".nav li").on("click", function(){
// 	$(".nav li").removeClass("active");
// 	$(this).addClass("active");
// });

})(jQuery);