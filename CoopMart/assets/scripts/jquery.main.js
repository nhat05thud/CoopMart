(function ($) {
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
