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
    credentials:false
}))
//将post请求的数据转为对象
server.use(bodyParser.urlencoded({
   extended:false
}))

// 请求banner数据
server.get("/banner",(req,res)=>{
    var sql = "SELECT bid,sm,lg FROM cubi_banner"
    pool.query(sql,(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

//请求导航数据
server.get("/nav",(req,res)=>{
    var sql = "SELECT nid,name,url FROM cubi_nav"
    pool.query(sql,(err,result)=>{
        if(err) throw err
        res.send(result)
    })
}) 

//请求原创设计数据
server.get("/index_yc",(req,res)=>{
    var sql = "SELECT title,pic,plogo FROM cubi_index_yc"
    pool.query(sql,(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

//请求个性风潮数据
server.get("/index_gx",(req,res)=>{
    var sql = "SELECT title,pic,plogo FROM cubi_index_gx"
    pool.query(sql,(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})