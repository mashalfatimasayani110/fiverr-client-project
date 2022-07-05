(function($) {
    "use strict";


    jQuery(document).ready(function($) {




        //------------ Offcanvas menu -------------

        $('.menu_open').on('click', function() {
            $('body').addClass('active');
        })
        $('.menu_close, .overaly-main').on('click', function() {
            $('body').removeClass('active');
        })


        // li a active
        $('.main-menu ul .nav-item').on('click', 'a', function(event) {
            $('.main-menu ul .nav-item a.active').removeClass('active');
            $(this).addClass('active');
        });
        // li a active
        // Hamburger-menu
        $('.hamburger-menu, .main-menu li a').on('click', function() {
            $('.hamburger-menu .line-top').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
            $('.main-menu').toggleClass('open');
        });
        //------------ Hero slider -------------

        /*new AOS*/
        AOS.init();
        /* sticky-menu start*/
        function sticky_header() {
            var wind = $(window);
            var sticky = $('.top-header');
            wind.on('scroll', function() {
                var scroll = wind.scrollTop();
                if (scroll < 30) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();
        /* sticky-menu ends*/
        /*owl-curosel js code inds*/
        //07. mobile app screenshot
        $('.slider-area-active').owlCarousel({
            dots: true,
            loop: true,
            nav: false,
            autoplay: true,
            smartSpeed: 2000,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 1
                },
                375: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        });



        //---owl dots number-----

        var i = 1;

        $('.hero-slier-main.owl-carousel .owl-dot').each(function() {
            $(this).text(i);
            i++;
        });

        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '300', // Distance from top before showing element (px)
            topSpeed: 300, // Speed back to top (ms)
            animation: 'fade', // Fade, slide, none
            animationInSpeed: 200, // Animation in speed (ms)
            animationOutSpeed: 200, // Animation out speed (ms)
            scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });

        /*nice select start*/
        $('#seluser').niceSelect();


    }); //---document-ready-----





}(jQuery));