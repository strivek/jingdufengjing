require(["jquery"], function () {
    $(document).ready(function () {
        $(".nav  li .link").on("mouseenter", function () {
            $(this).siblings().stop(true,true).fadeIn(400);

        })
        $(".nav > li").on("mouseleave", function () {
            $(this).find(".list").stop(true,true).fadeOut(200);
        })
    });
})
