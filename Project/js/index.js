$(function(){
    /*侧边导航 */
    $("#headnav").click(function(){
        $(".nav").css("right","0").children(":first")
        .click(function(){
            $(".nav").css("right","-340px")
        })
    })
    /*原创设计 */
    // 第一个产品
    $(".yc_middle1").mouseover(function(){
        $(".yc_middle1_js").css("top","0")
        .prev().css("bottom","-100px")
        .prev().css("bottom","-90px")
    })
    .mouseout(function(){
        $(".yc_middle1_js").css("top","-447px")
        .prev().css("bottom","0")
        .prev().css("bottom","70px")
    })
    // 第二个产品
    $(".yc_middle2").mouseover(function(){
        $(".yc_middle2_js").css("top","0")
        .prev().css("bottom","-100px")
        .prev().css("bottom","-90px")
    })
    .mouseout(function(){
        $(".yc_middle2_js").css("top","-447px")
        .prev().css("bottom","0")
        .prev().css("bottom","70px")
    })
    // 第三个产品
    $(".yc_right_1").mouseover(function(){
        $(".yc_right_js1").css("top","0")
        .prev().css("bottom","-50px")
        .prev().css("top","220px")
    })
    .mouseout(function(){
        $(".yc_right_js1").css("top","-220px")
        .prev().css("bottom","0")
        .prev().css("top","100px")
    })
    // 第四个产品
    $(".yc_right_2").mouseover(function(){
        $(".yc_right_js2").css("top","0")
        .prev().css("bottom","-50px")
        .prev().css("top","220px")
    })
    .mouseout(function(){
        $(".yc_right_js2").css("top","-220px")
        .prev().css("bottom","0")
        .prev().css("top","100px")
    })
})

