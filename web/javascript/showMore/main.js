require(['jquery'], function ($) {
var $btn_dow=$(".up_show");
var $img_box=$(".g-bfcontent  .img_box");
var $item=$img_box.find(".item");
var $btn_dow_li=$(".up_show_list");
var $list_box=$(".m-linklist .list_box");
var $link=$list_box.find(".link");

    $btn_dow.css("display","none");
    $btn_dow_li.css("display","none");

    if($item.length<=4){
        $btn_dow.css("display","none");
     }
    else{ $btn_dow.css("display","block");}

    if($link.length<=5){
        $btn_dow_li.css("display","none");
    }
    else{ $btn_dow_li.css("display","block");}

$btn_dow.on("click",function(){
    if($img_box.height()==366){
        $img_box.css("height","auto");
        $(this).removeClass("up_hide").find("span").text("收起");
    }
    else{
        $(this).addClass("up_hide").find("span").text("展开");
        $img_box.css("height","366px");
    }
});
    $btn_dow_li.on("click",function(){
        if($list_box.height()==245){
            $list_box.css("height","auto");
            $(this).removeClass("up_hide").find("span").text("收起");
        }
        else{
            $list_box.css("height","245px");
            $(this).addClass("up_hide").find("span").text("展开");
        }
    });

});