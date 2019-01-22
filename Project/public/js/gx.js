$(function(){
    /******************** 侧边导航 ********************/
    $("#headnav").click(function(){
        $(".nav").css("right","0").children(":first")
        .click(function(){
            $(".nav").css("right","-340px")
        })
    })
})