﻿(function ($) {
    $(function () {
        myfunload();
    });
})(jQuery);
function myfunload() {
    $(".box-slide").owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        dots: false,
        autoplay: true,
        autoplaytimeout: 5000
    });
    $(".product-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        navText: [
            '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>',
            '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>'
        ],
        autoplay: false,
        autoplaytimeout: 5000,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            992: {
                items: 5
            }
        }
    });
}
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scroll-to-top').fadeIn();
    } else {
        $('.scroll-to-top').fadeOut();
    }
});
$('.scroll-to-top').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
});
