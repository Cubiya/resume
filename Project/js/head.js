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
})()