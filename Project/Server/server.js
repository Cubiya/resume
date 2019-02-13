const express = require('express');
const bodyParser = require('body-Parser');
var server = express();
const cors = require("cors")
const pool = require("./pool.js")
server.listen(3000);
//将静态资源托管在public目录在
server.use(express.static('public'))
// 配置跨域路径
server.use(cors({
    origin:["http://127.0.0.1:5500"],
    credentials:true
}))
//将post请求的数据转为对象
server.use(bodyParser.urlencoded({
   extended:false
}))

// 
server.get("/banner",(req,res)=>{
    var sql = "SELECT bid,sm,lg FROM cubi_banner"
    pool.query(sql,(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})