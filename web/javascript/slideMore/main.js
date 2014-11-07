require(['jquery','slideMore/slideMore'], function ($) {

    $('.j-loadNews').slideMore({
        container: $('.j-newsBox'),
        perLoad: 5,
        itemHeight: 49,
        initHeight: 245
    });

    $('.j-loadNews1').slideMore({
        container: $('.j-newsBox1'),
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

    $('.j-loadImages1').slideMore({
        container: $('.j-imagesBox1'),
        perLoad: 4,
        itemHeight: 366,
        initHeight: 366,
        isBlock: false
    });

});