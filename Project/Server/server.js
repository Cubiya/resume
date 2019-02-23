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

//首页产品数据
server.get("/index_products",(req,res)=>{
    var sql = "SELECT pid,title,fid,pic,plogo FROM cubi_index_products"
    pool.query(sql,(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

// 原创设计数据
server.get("/yc_products",(req,res)=>{
    // var pno = req.query.pno
    // var pageSize = req.query.pageSize
    // if(!pno){
    //     pno = 1;
    // }
    // if(!pageSize){
    //     pageSize = 16;
    // }
    var sql = "SELECT pid,price,md,ship,title FROM cubi_products WHERE fid=1"
    // var ps = parseInt(pageSize);
    // //(2-1)*7= 7
    // var offset = (pno-1)*pageSize;
    pool.query(sql,(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})
// 原创设计分页
server.get("/yc_product",(req,res)=>{
    var pno = req.query.pno
    var pageSize = req.query.pageSize
    if(!pno){
        pno = 1;
    }
    if(!pageSize){
        pageSize = 16;
    }
    var sql = "SELECT pid,price,md,ship,title FROM cubi_products WHERE fid=1 LIMIT ?,?"
    var ps = parseInt(pageSize);
    //(2-1)*7= 7
    var offset = (pno-1)*pageSize;
    pool.query(sql,[offset,ps],(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

//商品详情页
server.get("/details",(req,res)=>{
    var pid = req.query.pid
    var sql = "SELECT title,subtitle,price,sm,md,lg,ship FROM cubi_products WHERE pid=?"
    pool.query(sql,[pid],(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})
