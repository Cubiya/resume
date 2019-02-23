$(function(){
    var search=location.search
    if(search!==""){
        var pid=search.split("=")[1]
    }
    ajax({
        url:"http://127.0.0.1:3000/details?pid="+pid,
        type:"get",
        dataType:"json"
    }).then(function(data){
        var data = data[0]
        // md
        $(".p_left_md").css({"background":`url(${data.md}) no-repeat`,"background-size":"452px 452px"})

        // 标题与副标题
        $(".p_right_title")[0].innerHTML= `
        <h2>${data.title}</h2>
        <h4>${data.subtitle}</h4>
        `
        // 价格
        $(".p_right_price")[0].innerHTML+=`
        <div>￥${data.price.toFixed(2)}</div>`

        // 发货地
        $(".p_right_add")[0].innerHTML+=`
        <div>${data.ship}</div>
        `

        //数量
        $(".p_right_count>a:nth-child(2)").on("click",function(){
            if($(this).next()[0].value>1){
                $(this).next()[0].value--
            }
        })
        $(".p_right_count>a:last-child").on("click",function(){
            $(this).prev()[0].value++
        })
        
        // 加入购物车
        0
    })
})