$(function(){
    /************************ 广告图请求 ************************/ 
    ajax({
        url:"http://127.0.0.1:3000/banner/",
        type:"get",
        dataType:"json"
    }).then(function(data){
        var b = data
        var html = `
        <div class="bn1"><img src="${b[0].lg}"></div>
        <div class="bn2"><img src="${b[1].lg}"></div>
        <div class="bn3"><img src="${b[2].lg}"></div>
        `
        var div = document.querySelector("#banner")
        div.innerHTML += html
    })
    
    /************************ 导航请求 ************************/
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

    /************************ 原创设计请求 ************************/
    ajax({
        url:"http://127.0.0.1:3000/index_yc",
        type:"get",
        dataType:"json"
    }).then(function(data){
        var yc = data
        var left_logo = `
            <img src="${yc[0].plogo}">
            <img src="${yc[1].plogo}">
            <img src="${yc[2].plogo}">
            <img src="${yc[3].plogo}">
        `
        var div1 = document.querySelector(".yc_left_img")
        div1.innerHTML = left_logo

        var yc_middle1 = `
            <img src="${yc[0].pic}">
            <div class="yc_middle1_logo">
                <img src="${yc[0].plogo}">
            </div>
            <div class="yc_middle1_des">
                <span>${yc[0].title}</span>
            </div>
            <div class="yc_middle1_js">
                <p>${yc[0].title}</p>
            </div>`
        var div2 = document.querySelector("#yc .yc_middle1")
        div2.innerHTML = yc_middle1

        var yc_middle2 = `
            <img src="${yc[1].pic}">
            <div class="yc_middle2_logo">
                <img src="${yc[1].plogo}">
            </div>
            <div class="yc_middle1_des">
                <span>${yc[1].title}</span>
            </div>
            <div class="yc_middle2_js">
                <p>${yc[1].title}</p>
            </div>`
        var div3 = document.querySelector("#yc .yc_middle2")
        div3.innerHTML = yc_middle2   

        var yc_right_1 = `
            <img src="${yc[2].pic}">
            <div class="yc_right_logo1">
                <img src="${yc[2].plogo}">
            </div>
            <div class="yc_right_des">
                <span>${yc[2].title}</span>
            </div>
            <div class="yc_right_js1">
                <p>${yc[2].title}</p>
            </div>`
        var div4 = document.querySelector("#yc .yc_right_1")
        div4.innerHTML = yc_right_1

        var yc_right_2 = `
            <img src="${yc[3].pic}">
            <div class="yc_right_logo1">
                <img src="${yc[3].plogo}">
            </div>
            <div class="yc_right_des">
                <span>${yc[3].title}</span>
            </div>
            <div class="yc_right_js1">
                <p>${yc[3].title}</p>
            </div>`
        var div5 = document.querySelector("#yc .yc_right_2")
        div5.innerHTML = yc_right_2
    })
    /************************ 个性风潮请求 ************************/
    ajax({
        url:"http://127.0.0.1:3000/index_gx",
        type:"get",
        dataType:"json"
    }).then(function(data){
        var gx = data
        for(var item of gx){
            console.log(item)
        }
    })
})