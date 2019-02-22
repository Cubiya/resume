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

    /************************ 主页产品数据 ************************/
    ajax({
        url:"http://127.0.0.1:3000/index_products",
        type:"get",
        dataType:"json"
    }).then(function(data){
        var yc = []
        var gx = []
        var qc = []
        var xh = []
        for(var item of data){
            if(item.fid == 1){
                yc.push(item)
            }else if(item.fid == 2){
                gx.push(item)
            }else if(item.fid == 3){
                qc.push(item)
            }else{
                xh.push(item)
            }
        }
        console.log(yc)
        var left_logo = `
            <a href="http://127.0.0.1:5500/public/details.html?pid=${yc[0].pid}"><img src="${yc[0].plogo}"></a>
            <a href="http://127.0.0.1:5500/public/details.html?pid=${yc[1].pid}"><img src="${yc[1].plogo}"></a>
            <a href="http://127.0.0.1:5500/public/details.html?pid=${yc[2].pid}"><img src="${yc[2].plogo}"></a>
            <a href="http://127.0.0.1:5500/public/details.html?pid=${yc[3].pid}"><img src="${yc[3].plogo}"></a>
        `
        document.querySelector(".yc_left_img").innerHTML = left_logo

        var yc_middle1 = `
            <img src="${yc[0].pic}">
            <div class="yc_middle1_logo">
                <img src="${yc[0].plogo}">
            </div>
            <div class="yc_middle1_des">
                <span>${yc[0].title}</span>
            </div>
            <a href="http://127.0.0.1:5500/public/details.html?pid=${yc[0].pid}">
            <div class="yc_middle1_js">
                <p>${yc[0].title}</p>
            </div></a>`
        document.querySelector("#yc .yc_middle1").innerHTML = yc_middle1

        var yc_middle2 = `
            <img src="${yc[1].pic}">
            <div class="yc_middle2_logo">
                <img src="${yc[1].plogo}">
            </div>
            <div class="yc_middle1_des">
                <span>${yc[1].title}</span>
            </div>
            <a href="http://127.0.0.1:5500/public/details.html?pid=${yc[1].pid}">
            <div class="yc_middle2_js">
                <p>${yc[1].title}</p>
            </div></a>`
        document.querySelector("#yc .yc_middle2").innerHTML = yc_middle2 

        var yc_right_1 = `
            <img src="${yc[2].pic}">
            <div class="yc_right_logo1">
                <img src="${yc[2].plogo}">
            </div>
            <div class="yc_right_des">
                <span>${yc[2].title}</span>
            </div>
            <a href="http://127.0.0.1:5500/public/details.html?pid=${yc[2].pid}">
            <div class="yc_right_js1">
                <p>${yc[2].title}</p>
            </div></a>`
        document.querySelector("#yc .yc_right_1").innerHTML = yc_right_1

        var yc_right_2 = `
            <img src="${yc[3].pic}">
            <div class="yc_right_logo1">
                <img src="${yc[3].plogo}">
            </div>
            <div class="yc_right_des">
                <span>${yc[3].title}</span>
            </div>
            <a href="http://127.0.0.1:5500/public/details.html?pid=${yc[3].pid}">
            <div class="yc_right_js1">
                <p>${yc[3].title}</p>
            </div></a>`
        document.querySelector("#yc .yc_right_2").innerHTML = yc_right_2

        /************************ 个性风潮数据 ************************/

        // 产品1
        var html1 = `
        <div class="gx_clothes_2_img">
        <img src="${gx[0].pic}">
        <a href="http://127.0.0.1:5500/public/details.html?pid=${gx[0].pid}"><div><p>${gx[0].title}</p></div></a>
        </div>
        <div class="gx_logo01">
        <img src="${gx[0].plogo}" >
        </div>
        <p>${gx[0].title}</p>
        `
        document.querySelector("#gx>.gx_body>.gx_clothes_1").innerHTML = html1

        // 产品2
        var html2 = `
        <div class="gx_clothes_2_img">
        <img src="${gx[1].pic}">
        <a href="http://127.0.0.1:5500/public/details.html?pid=${gx[1].pid}"><div><p>${gx[1].title}</p></div></a>
        </div>
        <div class="gx_logo01">
        <img src="${gx[1].plogo}" >
        </div>
        <p>${gx[1].title}</p>
        `
        document.querySelector("#gx>.gx_body>.gx_clothes_2").innerHTML = html2

        // 产品3
        var html3 = `
        <div class="gx_clothes_2_img">
        <img src="${gx[2].pic}">
        <a href="http://127.0.0.1:5500/public/details.html?pid=${gx[2].pid}"><div><p>${gx[2].title}</p></div></a>
        </div>
        <div class="gx_logo01">
        <img src="${gx[2].plogo}" >
        </div>
        <p>${gx[2].title}</p>
        `
        document.querySelector("#gx>.gx_body>.gx_clothes_3").innerHTML = html3

        // 产品4
        var html4 = `
        <div class="gx_clothes_2_img">
        <img src="${gx[3].pic}">
        <a href="http://127.0.0.1:5500/public/details.html?pid=${gx[3].pid}"><div><p>${gx[3].title}</p></div></a>
        </div>
        <div class="gx_logo01">
        <img src="${gx[3].plogo}" >
        </div>
        <p>${gx[3].title}</p>
        `
        document.querySelector("#gx>.gx_body>.gx_clothes_4").innerHTML = html4

        // 产品5
        var html5 = `
        <div class="gx_clothes_2_img">
        <img src="${gx[4].pic}">
        <a href="http://127.0.0.1:5500/public/details.html?pid=${gx[4].pid}"><div><p>${gx[4].title}</p></div></a>
        </div>
        <div class="gx_logo01">
        <img src="${gx[4].plogo}" >
        </div>
        <p>${gx[4].title}</p>
        `
        document.querySelector("#gx>.gx_body>.gx_clothes_5").innerHTML = html5

         /******************** 青春流行数据 *********************/
         var html6 = ""
         for(var item of qc){
             
             html6 = `
             <div class="qc_clothes_1">
             <div class="qc_clothes1_img">
                 <img src="${item.pic}">
                 <a href="http://127.0.0.1:5500/public/details.html?pid=${item.pid}"><div>${item.title}</div></a>
             </div>
             <div class="qc_clothes1_logo">
                 <img src="${item.plogo}" >
             </div>
             <p>${item.title}</p>
             </div>
             `
             document.getElementById("qc_clothes").innerHTML+=html6
         }

         /******************** 嘻哈潮流数据 *********************/

         // 产品1
        var html7 = `
        <a href="http://127.0.0.1:5500/public/details.html?pid=${xh[0].pid}"><img src="${xh[0].pic}"></a>
		<div class="xh_clothes_1_text">
		    <a href="http://127.0.0.1:5500/public/details.html?pid=${xh[0].pid}">${xh[0].title}</a>
		</div>
        `
        document.querySelector("#xh>.xh_body>.xh_clothes_1").innerHTML = html7

        // 产品2
        var html8 = `
        <a href="http://127.0.0.1:5500/public/details.html?pid=${xh[1].pid}"><img src="${xh[1].pic}"></a>
		<div class="xh_clothes_1_text">
		    <a href="http://127.0.0.1:5500/public/details.html?pid=${xh[1].pid}">${xh[1].title}</a>
		</div>
        `
        document.querySelector("#xh>.xh_body>.xh_clothes_2").innerHTML = html8

         // 产品3
        var html9 = `
        <a href="http://127.0.0.1:5500/public/details.html?pid=${xh[2].pid}"><img src="${xh[2].pic}"></a>
		<div class="xh_clothes_1_text">
            <a href="http://127.0.0.1:5500/public/details.html?pid=${xh[2].pid}">${xh[2].title}</a>
		</div>
        `
        document.querySelector("#xh>.xh_body>.xh_clothes_3").innerHTML = html9

        // logo
        var html10 = `
        <a href="http://127.0.0.1:5500/public/details.html?pid=${xh[0].pid}"><img src="${xh[0].plogo}"></a>
        <a href="http://127.0.0.1:5500/public/details.html?pid=${xh[1].pid}"><img src="${xh[1].plogo}"></a>
        <a href="http://127.0.0.1:5500/public/details.html?pid=${xh[2].pid}"><img src="${xh[2].plogo}"></a>
        `
        document.querySelector("#xh .xh_right_img").innerHTML = html10
    })
})