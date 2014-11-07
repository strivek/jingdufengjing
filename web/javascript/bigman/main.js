require(['jquery'], function ($) {
    $(function () {
            var btn = $('.m-bigman .btn li');
            var box = $('.m-bigman .box');
            var len = box.length;
            box.eq(0).css('visibility','visible');
            btn.each(function (index) {
                $(this).on('click', function () {
                    var $this = $(this);
                    var who = $this.data("who");
                    btn.removeClass('on').eq(index).addClass('on');
                    box.hide().eq(index).css('visibility','visible').fadeIn(500);
                    /*var result = $.ajax({
                        type: "GET",
                        url: "json/data.json",
                        data: { who: who }
                    });
                    result.done(function(data){
                        var dataNews = '';
                        $.each(data.news, function (idx, news) {
                            dataNews += '<a class="link" target="_blank" href="' + news.link + '"><span>查看详情</span>' + news.title + '</a>';
                        });
                        //console.log(dataNews);
                        $('.j-newsBox').html(dataNews);
                        var dataImages = '';
                        $.each(data.images, function (idx, images) {
                            dataImages += '<a class="item" target="_blank" href="' + images.link + '"><img src="' + images.src + '" alt="img"/><div class="text-bg"></div><div class="text">' + images.text + '</div></a>';
                        });
                        //console.log(dataImages);
                        $('.j-imagesBox').html(dataImages);
                    })*/
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

        }
    );

});


