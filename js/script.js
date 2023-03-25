$(document).ready(function () {
    new WOW().init();

    $('.search').click(function () {
        $('.header-form').toggleClass('show')
        return false
    });

});

// sticky nav bar 
$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $('.header-top-area').addClass('sticky-nav')
    } else {
        $('.header-top-area').removeClass('sticky-nav')
    }
});