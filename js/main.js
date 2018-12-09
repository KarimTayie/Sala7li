/*global $*/

$(document).ready(function () {

    'use strict';
    
    // Navbar Fixed
    
    var navbar = $(".navbar"),
        header = $(".header"),
        scrollButton = $("#scroll-top"),
        intro = $("#introduction"),
        embed = $("#introduction > div > div.row.row-center > div > div > div > iframe"),
        arrow = $('.header .overlay .container .row div:nth-child(2) i'),
        
    // init Isotope
        
        $grid = $('.grid').isotope({
            itemSelector: '.mix',
            masonry: {
                isFitWidth: true
            }
        }),
    
    // store filter for each group
    
        filters = {};
    
    $(window).scroll(function () {

        if ($(window).scrollTop() >= header.height()) {

            if (!navbar.hasClass('scrolled navbar-fixed-top')) {

                navbar.addClass('scrolled navbar-fixed-top');

            }

        } else {

            navbar.removeClass('scrolled navbar-fixed-top');

        }

    });

    // Trigger Owl Carousel

    $(".owl-carousel").owlCarousel({
        autoplay: false,
        autoplayHoverPause: false,
        center: true,
        nav: true,
        rewind: true,
        autoWidth: false,
        items: 2
    });

    // Caching The Scroll Top Element

    $(window).scroll(function () {

        if ($(this).scrollTop() >= intro.offset().top) {

            scrollButton.show();

        } else {

            scrollButton.hide();
        }
    });

    // Youtube Embed Autoplay

    $(window).scroll(function () {

        if ($(this).scrollTop() >= intro.offset().top - 60) {

            if (embed.attr('src') !== 'https://www.youtube.com/embed/M30DeLPKmP8?autoplay=1&;rel=0&;showinfo=0') {

                embed.attr('src', 'https://www.youtube.com/embed/M30DeLPKmP8?autoplay=1&;rel=0&;showinfo=0');

            }

        }

    });

    // Click On Arrow

    arrow.click(function () {

        $('html,body').animate({
            scrollTop: $('#introduction').offset().top
        }, 800);

    });

    // Click On Button To Scroll Top

    scrollButton.click(function () {

        $("html,body").animate({
            scrollTop: 0
        }, 800);

    });

    // Trigger Lightgallery

    $('#lightgallery').lightGallery();

    // Smooth Scroll To Div

    $('#sala7li-nav > ul > li > a').click(function () {

        $('html,body').animate({

            scrollTop: $('#' + $(this).data('value')).offset().top

        }, 800);

    });

    // Hidden Light Gallery Overflow

    $(window).click(function () {

        if ($('body').hasClass('lg-on')) {

            $('body').css({

                'overflow': 'hidden'

            });

        } else {

            $('body').css({

                'overflow': 'auto'

            });

        }

    });
    
    // Adjust Header Height
    
    header.height($(window).height());
    
    $(window).resize(function () {
       
        header.height($(window).height());
        
    });

    // external js: isotope.pkgd.js
    
    $('.filters').on('click', '.button', function () {
        var $this = $(this),
        // get group key
            $buttonGroup = $this.parents('.button-group'),
            filterGroup = $buttonGroup.attr('data-filter-group'),
        // combine filters
            filterValue = concatValues(filters);
        // set filter for group
        filters[filterGroup] = $this.attr('data-filter');
        
        // set filter for Isotope
        $grid.isotope({
            filter: filterValue
        });
    });

    // change is-checked class on buttons
    $('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    // flatten object by concatting values
    function concatValues(obj) {
        var value = '',
            prop;
        
        for (prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                value += obj[prop];
            }
            
        }
        return value;
    }
    
    // Loading Screen
    
    // $(window).on("load", function () {

    //     // Loading Elements

    //     $(".loading-overlay .spinner").fadeOut(1000, function () {

    //         // Show The Scroll

    //         $("body").css("overflow", "auto");

    //         $(this).parent().fadeOut(1000, function () {

    //             $(this).remove();
                
    //         });
            
    //     });
        
    // });

});