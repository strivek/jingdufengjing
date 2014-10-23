require(['jquery'], function ($) {
        $(function() {
            var sWidth = $("#crs").width(); //获取焦点图的宽度（显示面积）
            var len = $("#crs ul li").length; //获取焦点图个数
            var index = 0;
            var picTimer;

            //以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
            var btn = "<div class='tips'><div class='nums'>";
            for(var i=0; i < len; i++) {
                btn += "<span></span>";
            }
            btn += "</div></div>";
            $("#crs").append(btn);

            //为小按钮添加鼠标滑入事件，以显示相应的内容
            $("#crs .nums span").css("opacity",1).mouseover(function() {
                index = $("#crs .nums span").index(this);
                showPics(index);
            }).eq(0).trigger("mouseover");

            //上一页按钮
            $("#crs .toLeft").click(function() {
                index -= 1;
                if(index == -1) {index = len - 1;}
                showPics(index);
            });

            //下一页按钮
            $("#crs .toRight").click(function() {
                index += 1;
                if(index == len) {index = 0;}
                showPics(index);
            });

            //本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
            $("#crs ul").css("width",sWidth * (len));

            //鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
            $("#crs").hover(function() {
                clearInterval(picTimer);
            },function() {
                picTimer = setInterval(function() {
                    showPics(index);
                    index++;
                    if(index == len) {index = 0;}
                },4000); //此4000代表自动播放的间隔，单位：毫秒
            }).trigger("mouseleave");

            //显示图片函数，根据接收的index值显示相应的内容
            function showPics(index) { //普通切换
                var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
                $("#crs ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
               $("#crs .nums span").removeClass("on").eq(index).addClass("on"); //为当前的按钮切换到选中的效果
            }
        });

});


