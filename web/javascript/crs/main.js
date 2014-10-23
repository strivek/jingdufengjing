require(['jquery','crs/crs'], function ($) {
    $(function () {
        var crs = $('#crs');
        if(crs.length){
            crs.slideBox(
                {
                    duration: 0.3,//滚动持续时间，单位：秒
                    easing: 'linear',//swing,linear//滚动特效
                    delay: 6,//滚动延迟时间，单位：秒
                    hideClickBar: false,//不自动隐藏点选按键
                    clickBarRadius: 10
                }
            );
        }
    })
});


