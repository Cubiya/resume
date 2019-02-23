$(function(){
    var pno = 1
    var pageSize = 15
    ajax({
        url:"http://127.0.0.1:3000/yc_products",
        type:"get",
        dataType:"json"
    }).then(function(data){
        var count = Math.ceil(data.length/pageSize)
        var html1 = ""
        var html2 = ""

        // 页数按钮
        for(var i=1;i<=count;i++){
            html1 = `<li><a href="javascript:;">${i}</a></li>`
            document.querySelector(".page>ul").innerHTML += html1
        }
        //页数总数
        html2 = `<span>共${count}页,到第</span>
            <input type="text" value=1>
            <span>页</span>
            <a href="javascript:;">确定</a>`
            document.querySelector(".page div:last-child").innerHTML = html2
        //跳转页数
        $(".page div:last-child>a").on("click",function(){
            pno = $(this).prev().prev()[0].value
            page()
        })

        // 页数按钮事件
        $(".page>ul>li>a").on("click",function(){
            pno = this.innerHTML
            page()
        })

        //上下一页切换
        $(".Uppage").on("click",function(){
            if(pno>1){
                pno--
                page()
            }
        })
        $(".Downpage").on("click",function(){
            if(pno<count){
                pno++
                page()
            }
        })
    })

    var page =function(){ 
        ajax({
        url:"http://127.0.0.1:3000/yc_product?pno="+pno+"&pageSize="+pageSize,
        type:"get",
        dataType:"json"
    }).then(function(data){
        var html = ""
        for(var item of data){
            html += `
            <div class="product1">
            <div class="pic"><a href="http://127.0.0.1:5500/public/details.html?pid=${item.pid}"><img src="${item.md}"></a></div>
            <div>
                <span>￥${item.price.toFixed(2)}</span>
                <span>100人付款</span>
            </div> 
            <div><a href="http://127.0.0.1:5500/public/details.html?pid=${item.pid}">${item.title}</a> </div>
            <div><span>${item.ship}</span></div>
            </div>
            `
        }
        document.querySelector(".yc_product").innerHTML = html
    })
   }
   page()
})