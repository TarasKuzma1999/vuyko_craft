$('.beer_carousel').slick({
    autoplay: true,
    autoplaySpeed: 5000,
});

$('.choose_tour').slick({
    dots: true,
    infinite: false,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1160,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
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