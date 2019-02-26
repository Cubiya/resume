$(function(){
    // 引入头部文件
    $("#header").load("header.html")
     
    ajax({
        url:"http://127.0.0.1:3000/cartlist",
        type:"get",
        dataType:"json",
    }).then(function(data){
        console.log(data)
    })

    // 数量
    $(".cart_count>button:first-child").on("click",function(){
        if($(this).next()[0].value>1){
            $(this).next()[0].value--    
            var count = $(this).next()[0].value
            var price = parseInt($(".cart_price>p>span")[0].innerHTML)
            $(".cart_total>p>span")[0].innerHTML = (count*price).toFixed(2)
        }
    })
    $(".cart_count>button:last-child").on("click",function(){
        $(this).prev()[0].value++
        var count = $(this).prev()[0].value
        var price = parseInt($(".cart_price>p>span")[0].innerHTML)
        $(".cart_total>p>span")[0].innerHTML = (count*price).toFixed(2)
    })

    // 
})