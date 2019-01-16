(function(){
    /*打开右边导航栏*/ 
    var nav=document.getElementById("head_navbtn")
    nav.onclick=function(){
        var btn=document.getElementsByClassName("nav")[0]
        btn.style.right=`${0}px`;
    }
    /*关闭右边导航栏*/
    var navclose=document.querySelector(".nav>button")
    navclose.onclick=function(){
        var btn=document.getElementsByClassName("nav")[0]
        btn.style.right=`${-340}px`;
    }
    /* 图片悬停效果*/
    var yc_one=document.querySelector(".yc_middle1")
    yc_one.onmouseover=function(){
        var yc_middle1_js=document.querySelector(".yc_middle1_js")
        var yc_middle1_des=document.querySelector(".yc_middle1_des")
        var yc_middle1_logo=document.querySelector(".yc_middle1_logo")
        yc_middle1_js.style.top=0+"px";
        yc_middle1_des.style.bottom=`-100px`
        yc_middle1_logo.style.bottom=`-90px`
    }
    yc_one.onmouseout=function(){
        var yc_middle1_js=document.querySelector(".yc_middle1_js")
        var yc_middle1_des=document.querySelector(".yc_middle1_des")
        var yc_middle1_logo=document.querySelector(".yc_middle1_logo")
        yc_middle1_js.style.top=447+"px"
        yc_middle1_des.style.bottom=`0px`
        yc_middle1_logo.style.bottom=`70px`
    }
    /*青春流行图片切换效果*/
    //找到触发事件元素
    var qc=document.querySelectorAll(".qc_clothes1_img")
        for(var img of qc){//因为我有多个元素需要触发事件，这里我遍历了找到的元素
            /*鼠标进入事件*/
            img.onmouseover=function(e){//给遍历到的元素都绑上处理函数
                var img=this;   //以防万一，先把this给一个变量
                //获取元素的宽度
                var w=parseInt(window.getComputedStyle(img)
                        .getPropertyValue("width").replace("px",""))
                //获取元素的高度
                var h=parseInt(window.getComputedStyle(img)
                        .getPropertyValue("height").replace("px",""))
                //获取鼠标在元素X的位置
                var x=e.offsetX
                //获取鼠标在元素Y的位置
                var y=e.offsetY
                //获取两条斜线位置,以防出现小数点，我用API转为整数了
                var k=Math.floor(h/w)
                //查找修改元素
                var qc_js=img.children[1]
                //开始判断
                if ( (k*x)>=y && (h-k*x)>y ){
                    //如果鼠标从上方进入
                    //执行这两句代码改变样式
                    qc_js.style.left=0  
                    qc_js.style.top=0   
                }else if ( (k*x)<y && (h-k*x)<y ){
                    //如果鼠标不是从上面进入，再判断是不是下面进入
                    //如果是下面进入执行下面代码
                    qc_js.style.left=0
                    qc_js.style.top=0
                }else if ( (k*x)<y && (h-k*x)>y ){
                    //如果鼠标还不是从下面进入，再判断是不是左边进入
                    //如果是左边进入执行下面代码
                    qc_js.style.left=0
                    qc_js.style.top=0
                }else if ( (k*x)>y && (h-k*x)<y ){
                    //如果鼠标还不是从左边进入，再判断是不是右边进入
                    //如果是右边进入执行下面代码
                    qc_js.style.left=0
                    qc_js.style.top=0
                }
            }
            /*鼠标离开事件*/ 
            img.onmouseout=function(e){
                var img=this;
                //获取元素的宽高
                var w=parseInt(window.getComputedStyle(img)
                        .getPropertyValue("width").replace("px",""))
                var h=parseInt(window.getComputedStyle(img)
                        .getPropertyValue("height").replace("px",""))
                //获取鼠标在元素X的位置
                var x=e.offsetX
                //获取鼠标在元素Y的位置
                var y=e.offsetY
                //获取两条斜线位置
                var k=Math.floor(h/w)
                //查找修改元素
                var qc_js=img.children[1]
                if ( (k*x)>=y && (h-k*x)>y ){
                    qc_js.style.left=0
                    qc_js.style.top=`${-h}px`
                }else if ( (k*x)<y && (h-k*x)<y ){
                    qc_js.style.left=0
                    qc_js.style.top=`${h}px`
                }else if ( (k*x)<y && (h-k*x)>y ){
                    qc_js.style.left=`${-w}px`
                    qc_js.style.top=0
                }else if ( (k*x)>y && (h-k*x)<y ){
                    qc_js.style.left=`${w}px`
                    qc_js.style.top=0
                }
            }
        }
})()