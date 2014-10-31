define(['jquery'], function ($) {

    $.fn.slideMore = function(options){
        var opts = $.extend({}, $.fn.slideMore.defaults, options),
            $this = $(this),
            container = opts.container,
            itemLength = container.children().length,
            perLoad = opts.perLoad,
            initRow = opts.initRow,
            times = (itemLength / perLoad) - initRow + 1,
            remainder = itemLength % perLoad,
            itemHeight = opts.itemHeight,
            loadHeight = opts.itemHeight * perLoad,
            remHeight = opts.itemHeight * remainder,
            initHeight = opts.initHeight,
            scrollTop,
            backTop = 0;

        function init(){
            if(itemLength < perLoad * initRow){
                container.css('padding-bottom','32px');
            }else{
                $this.css('display','block');
                container.css({'overflow':'hidden','height':initHeight});
            }
        }

        function main(){
            if(remainder){
                if(times>2){
                    slideDown();
                    --times;
                    if(times<1){
                        $this.addClass('u-load-h').find('span').text('收起');
                    }
                }else if(times<2 && times>1){
                    slideRem();
                    --times;
                    if(times<1){
                        $this.addClass('u-load-h').find('span').text('收起');
                    }
                }else{
                    slideUp();
                }
            }else{
                if(times>1){
                    slideDown();
                    --times;
                    if(times==1){
                        $this.addClass('u-load-h').find('span').text('收起');
                    }
                }else{
                    slideUp();
                }
            }
        }

        function slideDown(){
            if(opts.isBlock){
                container.css({'overflow':'hidden','height':'+='+loadHeight});
                $(document.body).animate({'scrollTop':'+='+loadHeight},500);
            }else{
                container.css({'overflow':'hidden','height':'+='+itemHeight});
                $(document.body).animate({'scrollTop':'+='+itemHeight},500);
            }
        }

        function slideUp(){
            container.css({'overflow':'hidden','height':initHeight});
            $(document.body).animate({'scrollTop':scrollTop},500);
            $this.removeClass('u-load-h').find('span').text('展开');
            times = itemLength / perLoad;
            backTop = 0;
        }

        function slideRem(){
            if(opts.isBlock){
                container.css({'overflow':'hidden','height':'+='+remHeight});
                $(document.body).animate({'scrollTop':'+='+remHeight},500);
            }else{
                container.css({'overflow':'hidden','height':'+='+itemHeight});
                $(document.body).animate({'scrollTop':'+='+itemHeight},500);
            }
        }

        init();

        return this.each(function(){
            $this.on('click', function(){
                main();
                backTop++;
                if (backTop==1){
                    scrollTop = $(window).scrollTop()
                }
            })
        });



    };

    $.fn.slideMore.defaults = {

        container: null,
        perLoad: 5,
        initRow: 1,
        itemHeight: null,
        initHeight: null,
        isBlock: true

    }

});