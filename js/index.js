$('.beer_carousel').slick({
    autoplay: true,
    autoplaySpeed: 5000,
});

$('.responce_carousel').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true
});

$('.our_brewery_carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.our_brewery_carousel_nav'
});
$('.our_brewery_carousel_nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.our_brewery_carousel',
    dots: true,
    centerMode: true,
    focusOnSelect: true
});

$(document).ready(function () {
    $('.header_burger').click(function (event) {
        $('.burger_nav').toggleClass('active');
    })
})