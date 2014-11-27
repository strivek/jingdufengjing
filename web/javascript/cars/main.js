require(['jquery','cars/crs'], function ($) {
    $("#owl-demo").owlCarousel({
        navigationText: ["&lt;", "&gt;"],
        autoPlay: true,
        navigation: true, // Show next and prev buttons
        slideSpeed: 400,
        rewindSpeed: 500,
        paginationSpeed: 800,
        singleItem: true

    });
})