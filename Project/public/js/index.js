$(function(){
    /******************** 侧边导航 ********************/
    $("#headnav").click(function(){
        $(".nav").css("right","0").children(":first")
        .click(function(){
            $(".nav").css("right","-340px")
        })
    })
    /******************** 广告轮播 *******************/
    var bn_class=["bn1","bn2","bn3"] //样式
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
        $("#banner,#banner>a").mouseenter(function(){
            clearInterval(auto)
        }).mouseleave(function(){ 
            a()
        })
    })()
    
    $("#banner").on('mouseover', function () {
        // banner左边按钮
        $("#banner>a:first-child").click(function() {
            bn_left()
        })
        // banner右边按钮
        $("#banner>a:nth-child(2)").click(function(){
            bn_right()
        })
    });

    /******************* 原创设计 ******************/

    $(".yc_middle1,.yc_middle2,.yc_right_1,.yc_right_2").mouseenter(function(){
        // 进入函数
        $(this).children(":last").children(":first").css("top","0")
        .prev().css("bottom","-100px")
        .prev().css("bottom","-90px")
    }).mouseleave(function(){
        // 离开函数
        $(this).children(":last").children(":first").css("top","-447px")
        .prev().css("bottom","0")
        .prev().css("bottom","70px")
    })

    /************** 个性风潮 and 青春流行 **************/

    $("#gx,#qc").on("mouseenter",function(){
    // 辅助找到动态添加的元素
    $(".gx_clothes_2_img,.qc_clothes1_img").on("mouseenter mouseleave",function(e) {
        var $gx=$(this)
        var w = $(this).width();
        var h = $(this).height();
            var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
            var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
            var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4; 
            var eventType = e.type;
            var dirName = new Array(1,2,3,4);
            if(e.type == 'mouseenter'){
                if(dirName[direction]==1){
                    $gx.children(":last").children(":first").css({left:0,top:0})
                }else if(dirName[direction]==2){
                    $gx.children(":last").children(":first").css({left:0,top:0})
                }else if(dirName[direction]==3){
                    $gx.children(":last").children(":first").css({left:0,top:0})
                }else if(dirName[direction]==4){
                    $gx.children(":last").children(":first").css({left:0,top:0})
                }
            }else{
                if(dirName[direction]==1){
                    $gx.children(":last").children(":first").css({left:0,top:`-${h}px`})
                }else if(dirName[direction]==2){
                    $gx.children(":last").children(":first").css({left:`${w}px`,top:0})
                }else if(dirName[direction]==3){
                    $gx.children(":last").children(":first").css({left:0,top:`${h}px`})
                }else if(dirName[direction]==4){
                    $gx.children(":last").children(":first").css({left:`-${w}px`,top:0})
                }
            }
      })
    })
})

