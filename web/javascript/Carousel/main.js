require(['jquery','Carousel/Carousel'], function ($) {
        $('.clist').flexslider({
            animation: "slide",
            animationLoop: true,
            itemWidth: 244,
            itemMargin: 16,
            start: function(slider){
                $('body').removeClass('loading');
            }
        });
})