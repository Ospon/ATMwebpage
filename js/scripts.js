'use strict';

// Owl carousel settings

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 1,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },

            700: {
                items: 1
            },
            1000: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })
})

// End of Owl carousel settings

// Anchor points and scroll down

function scrollToAnchor(aid) {
    var aTag = $("a[name='" + aid + "']");
    $('html,body').animate({
        scrollTop: aTag.offset().top
    }, 'slow');
}

$("#aboutClick").click(function () {
    scrollToAnchor('aboutAnchor');
});
$("#serviceClick").click(function () {
    scrollToAnchor('serviceAnchor');
});
$("#productsClick").click(function () {
    scrollToAnchor('productsAnchor');
});
$("#showMoreClick").click(function () {
    scrollToAnchor('productsAnchor');
});
$("#clientsClick").click(function () {
    scrollToAnchor('clientsAnchor');
});
$("#partnersClick").click(function () {
    scrollToAnchor('partnersAnchor');
});
$("#contactsClick").click(function () {
    scrollToAnchor('contactsAnchor');
});

// End anchor points and scroll down

// Burger menu navigation

jQuery(document).ready(function () {
    jQuery('.toggle-nav').click(function (e) {
        jQuery(this).toggleClass('active');
        jQuery('.page-header__nav ul').toggleClass('active');
        e.preventDefault();
    });
});

jQuery(document).ready(function () {
    jQuery('.page-header__nav ul li').click(function (e) {
        jQuery(this).toggleClass('active');
        jQuery('.page-header__nav ul').addClass('active');
        e.preventDefault();
    });
});

// End Burger menu navigation