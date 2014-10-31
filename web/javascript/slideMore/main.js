require(['jquery','slideMore/slideMore'], function ($) {

    $('.j-loadNews').slideMore({
        container: $('.j-newsBox'),
        perLoad: 5,
        itemHeight: 49,
        initHeight: 245
    });

    $('.j-loadImages').slideMore({
        container: $('.j-imagesBox'),
        perLoad: 3,
        itemHeight: 224,
        initHeight: 448,
        isBlock: false,
        initRow: 2
    });

});