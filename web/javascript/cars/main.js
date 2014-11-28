require(['jquery','cars/crs'], function ($) {
    $("#owl-demo").owlCarousel({
        navigationText: ["&lt;", "&gt;"],
        autoPlay: true,
        navigation: true, // Show next and prev buttons
        slideSpeed: 500,
        rewindSpeed: 0,
        paginationSpeed: 1000,
        singleItem: true,
        rewindNav:true
    });
})