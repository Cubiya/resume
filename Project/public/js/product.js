$(function(){
    /******************** 侧边导航 ********************/

    $("#headnav").click(function(){
        $(".nav").css("right","0").children(":first")
        .click(function(){
            $(".nav").css("right","-340px")
        })
    })

    /******************** 广告轮播 *******************/

    var bn_class=["bn1","bn2","bn3"] //#endregion
    function bn_right(){
        bn_class.push(bn_class[0])
        bn_class.shift()
        $("#banner>div").each(function(i,e){
            $(e).removeClass().addClass(bn_class[i])
        })
    }
    function bn_left(){
        bn_class.unshift(bn_class[2])
        bn_class.pop()
        $("#banner>div").each(function(i,e){
            $(e).removeClass().addClass(bn_class[i])
        })
    }
    // 自动播放、鼠标进入停止自动播放
    (function a(){
        var auto =setInterval(bn_right,3000)
        $("#banner>div,#banner>a").mouseenter(function(){
            clearInterval(auto)
        }).mouseleave(function(){
            a()
        })
    })()
    // banner左边按钮
    $("#banner>a:first").click(function(){
        bn_left();
    })
    // banner右边按钮
    $("#banner>a:nth-child(2)").click(function(){
        bn_right()
    })

})
