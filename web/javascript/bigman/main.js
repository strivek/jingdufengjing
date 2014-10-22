require(['jquery'], function ($) {
    $(function () {
        var btn = $('.m-bigman .btn li');
        var box = $('.m-bigman .box');
        var len = btn.length;
        btn.each(function(index){
            $(this).on('click',function(){
                btn.removeClass('on').eq(index).addClass('on');
                box.hide().eq(index).fadeIn(500);
            })
        });
        if(len > 4){
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
                if (parseInt(list.css('top')) > -2){
                    up.hide();
                }
                list.animate({'top':'+=100px'},300,function(){
                    if (parseInt(list.css('top')) > -2){
                        up.hide();
                    }
                });
            });

            down.on('click', function () {
                up.show();
                if (list.is(':animated')) {
                    return;
                }
                list.animate({'top':'-=100px'},300,function(){
                    if (parseInt(list.css('top')) < -(len-4)*100){
                        down.hide();
                    }
                });
            });
        }
    })
});


