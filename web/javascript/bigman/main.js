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
    })
});


