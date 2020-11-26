(function ($) {
    $(function () {
        myfunload();
    });
})(jQuery);
$(".quantity-button").click(function () {
    var input = $(this).parents(".quantity").find("input[type='number']");
    var value = input.val() !== "" ? input.val() : 0;
    if ($(this).hasClass("quantity-up")) {
        input.val(parseInt(value) + 1);
    }
    else {
        if (value > 1) {
            input.val(parseInt(value) - 1);
        }
    }
});
$(".method-head").click(function () {
    $accordion = $(this).next();
    if (!$(this).children("input[type='radio']").prop("checked")) {
        $(".method-content").slideUp();
        $accordion.slideDown();
        $(this).children("input[type='radio']").prop('checked', true);
    }
});
$("#hero__categories__all").click(function () {
    $(this).next().stop(true, false).slideToggle(300);
});
$("#contact-f").click(function () {
    $(this).children(".contact-list").toggleClass("active");
});
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
                items: 1
            },
            420: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 5
            }
        }
    });
    $(".more-image").owlCarousel({
        margin: 10,
        lazyLoad: true,
        loop: false,
        nav: false,
        dots: false,
        autoplay: false,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 3
            },
            480: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            },
            1200: {
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
