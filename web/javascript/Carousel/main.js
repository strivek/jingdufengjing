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
            directionNav: true,
            itemWidth: 244,
            itemMargin: 16,
             slideshowSpeed: 4000
        });
    }

 $("#crs").flexslider({
     animation: "slide",
     controlNav: true,
     slideshowSpeed: 4000,
     animationLoop: true,
     asNavFor: '#slider'
 });
})