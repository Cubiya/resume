$(function(){
    /************************ 导航请求 *****************/
    ajax({
        url:"http://127.0.0.1:3000/nav",
        type:"get",
        dataType:"json"
    }).then(function(data){
        var html = ""
        for(var item of data){
            html += `<li><a href="${item.url}">${item.name}</a></li>`
        }
        var div1 = document.querySelector(".head_nav>ul")
        var div2 = document.querySelector(".right_nav>ul")
        div1.innerHTML = html
        div2.innerHTML = html
    })
    /******************** 侧边导航 ********************/
    $("#headnav").click(function(){
        $(".nav").css("right","0").children(":first")
        .click(function(){
            $(".nav").css("right","-340px")
        })
    })
})