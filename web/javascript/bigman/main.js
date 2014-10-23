require(['jquery'], function ($) {
    $(function () {
            var btn = $('.m-bigman .btn li');
            var box = $('.m-bigman .box');
            var len = box.length;
            box.eq(0).show();
            btn.each(function (index) {
                $(this).on('click', function () {
                    btn.removeClass('on').eq(index).addClass('on');
                    box.hide().eq(index).fadeIn(500);
                })
            });
            if (len == 1){
                btn.css('display','none');
                box.css({'left':'50%','margin-left':'-410px','width':'820px'});
            }
            if (len > 4) {
                var list = $('.m-bigman .btn');
                $('<span class="up"></span><span class="down"></span>').insertAfter(list);
                var up = $('.up');
                var down = $('.down');
                up.hide();
                up.on('click', function () {
                    down.show();
                    if (list.is(':animated')) {
                        return;
                    }
                    if (parseInt(list.css('top')) > -2) {
                        up.hide();
                    }
                    list.animate({'top': '+=100px'}, 300, function () {
                        if (parseInt(list.css('top')) > -2) {
                            up.hide();
                        }
                    });
                });

                down.on('click', function () {
                    up.show();
                    if (list.is(':animated')) {
                        return;
                    }
                    list.animate({'top': '-=100px'}, 300, function () {
                        if (parseInt(list.css('top')) < -(len - 4) * 100) {
                            down.hide();
                        }
                    });
                });
            }

            //ajax load
            var newsLoadBtn = $('.j-loadnews');
            var imagesLoadBtn = $('.j-loadimages');
            var newsPageCount = 5;
            var newsPageLength = 3;

            var imagesPageCount = 6;
            var imagesPageLength = 3;

            var loadNewsHeight = (parseInt($('.j-newsbox .link').css('height')) + 1) * 5;
            var loadImagesHeight = (parseInt($('.j-imagesbox .item').css('height')) + 16) * 2;

            var scroll = {
                newsScrollTop : null,
                imagesScrollTop : null
            };

            $(".j-loadnews").on("click", loadnews);
            $(".j-loadimages").on("click", loadimages);

            function loadnews(event) {

                pageNum = $(".j-loadnews").data("pageNum");

                if (newsLoadBtn.data("pageNum") == 1){
                    scroll.newsScrollTop = $(window).scrollTop();
                }

                if (pageNum < newsPageLength) {

                    $(document.body).animate({'scrollTop':'+='+loadNewsHeight},500);
                    //加载数据

                    var request = $.ajax({
                        type: "POST",
                        url: "json/newsData.json",
                        data: { newsPageCount: newsPageCount, pageNum: pageNum }//让服务器端知晓，目前处于第一页，每页有多少条
                    });


                    request.done(function (msg) {
                        if (msg.status === "success") {
                            var dataNews = '';
                            $.each(msg.data, function (idx, news) {
                                dataNews += '<a class="link" target="_blank" href="' + news.link + '"><span>查看详情</span>' + news.title + '</a>';
                            });
                            $('.j-newsbox').append(dataNews);
                        } else {
                            pageInit();
                        }


                    });
                    request.fail(function (msg) {
                        window.reload();
                        console.log("debug:" + msg);
                    });
                    request.always(function (msg) {

                    });
                    newsLoadBtn.data("pageNum", pageNum + 1);
                    if (newsLoadBtn.data("pageNum") == 3){
                        newsLoadBtn.addClass('u-load-h').find('span').text('收起');
                    }
                }
                else {
                    //回收
                    //保留默认的前5条
                    //将页数重置为1
                    pageInit();
                }
            }

            function pageInit() {
                $(document.body).animate({'scrollTop':scroll.newsScrollTop},500);
                $(".j-newsbox .link:gt(4)").remove();
                newsLoadBtn.data("pageNum", 1).removeClass('u-load-h').find('span').text('展开');
            }

            function loadimages(event) {

                pageNum = $(".j-loadimages").data("pageNum");

                if (imagesLoadBtn.data("pageNum") == 1){
                    scroll.imagesScrollTop = $(window).scrollTop();
                }
                if (pageNum < imagesPageLength) {

                    $(document.body).animate({'scrollTop':'+='+loadImagesHeight},500);
                    //加载数据

                    var request = $.ajax({
                        type: "POST",
                        url: "json/imagesData.json",
                        data: { imagesPageCount: imagesPageCount, pageNum: pageNum }//让服务器端知晓，目前处于第一页，每页有多少条
                    });


                    request.done(function (msg) {
                        if (msg.status === "success") {
                            var dataImages = '';
                            $.each(msg.data, function (idx, images) {
                                dataImages += '<a class="item" target="_blank" href="' + images.link + '"><img src="' + images.src + '" alt="img"/><div class="text-bg"></div><div class="text">' + images.text + '</div></a>';
                            });
                            $('.j-imagesbox').append(dataImages);
                        } else {
                            imagesInit();
                        }


                    });
                    request.fail(function (msg) {
                        window.reload();
                        console.log("debug:" + msg);
                    });
                    request.always(function (msg) {

                    });
                    imagesLoadBtn.data("pageNum", pageNum + 1);
                    if (imagesLoadBtn.data("pageNum") == 3){
                        imagesLoadBtn.addClass('u-load-h').find('span').text('收起');
                    }
                }
                else {
                    //回收
                    //保留默认的前5条
                    //将页数重置为1
                    imagesInit();
                }
            }

            function imagesInit() {
                $(document.body).animate({'scrollTop':scroll.imagesScrollTop},500);
                $(".j-imagesbox .item:gt(5)").remove();
                imagesLoadBtn.data("pageNum", 1).removeClass('u-load-h').find('span').text('展开');
            }
        }
    )
});


