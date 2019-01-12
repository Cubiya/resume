(function(){
    /*打开右边导航栏*/ 
    var nav=document.getElementById("head_navbtn")
    nav.onclick=function(){
        var nav=this;
        var btn=document.getElementsByClassName("nav")[0]
        btn.style.display="block";
    }
    /*关闭右边导航栏*/
    var navclose=document.querySelector(".nav>button")
    navclose.onclick=function(){
        var navclose=this;
        var btn=document.getElementsByClassName("nav")[0]
        btn.style.display="none";
    }
    /* 图片悬停效果*/
    var middle=document.querySelector(".yc_middle1")
    middle.onmouseover=function(){
        var yc_middle1_js=document.querySelector(".yc_middle1_js")
        yc_middle1_js.style.top=0+"px";
        // yc_middle1_js.style.transition=`all 1s`
        var yc_middle1_des=document.querySelector(".yc_middle1_des")
        var yc_middle1_logo=document.querySelector(".yc_middle1_logo")
        yc_middle1_des.style.bottom=`-100px`
        yc_middle1_logo.style.bottom=`-90px`
        //获取鼠标位置
        
    }
    middle.onmouseout=function(){
        var yc_middle1_js=document.querySelector(".yc_middle1_js")
        yc_middle1_js.style.top=447+"px"
        var yc_middle1_des=document.querySelector(".yc_middle1_des")
        var yc_middle1_logo=document.querySelector(".yc_middle1_logo")
        yc_middle1_des.style.bottom=`0px`
        yc_middle1_logo.style.bottom=`70px`
    }
})()