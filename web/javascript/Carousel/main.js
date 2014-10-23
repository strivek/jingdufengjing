require(['jquery','Carousel/Carousel'], function ($) {
    var $num_pList=$(".peopleList .items li").length;
    if($num_pList==1)
    {$(".peopleList").addClass("clist_1");}
    else if($num_pList==2){
        $(".peopleList").addClass("clist");
    }
    else {
        $(".peopleList").addClass("clist");
        $('.clist').flexslider({
            animation: "slide",
            animationLoop: true,
            itemWidth: 244,
            itemMargin: 16,
            start: function(slider){
                $('body').removeClass('loading');
            }
        });
    }


})