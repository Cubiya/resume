const express = require('express');
const bodyParser = require('body-Parser');
var server = express();
const cors = require("cors")
const pool = require("./pool.js")
const session = require("express-session")
server.listen(3000);
//将静态资源托管在public目录在
server.use(express.static('public'))
// 配置跨域路径
server.use(cors({
    origin:["http://127.0.0.1:5500"],
    credentials:false
}))
server.use(session({
  secret:"128位随机字符",  //自定义安全字符串
  resave:false,            //每次请求是否都要更新数据
  saveUninitialized:true,  //初始化保存数据
  cookie:{
    maxAge:1000*60*60*8
  }
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
    var sql = "SELECT pid,price,md,ship,title FROM cubi_products WHERE fid=1"
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
//用户注册
server.get("/reg",(req,res)=>{
    var uname = req.query.uname
    var upwd = req.query.upwd
    var sql = "INSERT INTO cubi_login VALUES(null,?,md5(?))"
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) throw err
        if(result.affectedRows>0){
            res.send({code:1,msg:"插入成功"})
        }else{
            res.send({code:-1,msg:"插入失败"})
        }
    })
})

//用户登录
server.get("/login",(req,res)=>{
    var uname = req.query.uname
    var upwd = req.query.upwd
    var sql = "SELECT id FROM cubi_login WHERE uname=? AND upwd=md5(?)"
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) throw err
        if(result.length == 0){
            res.send({code:-1,msg:"用户名或密码错误"})
        }else{
            var id = result[0].id
            req.session.uid = id
            console.log(req.session.uid)
            res.send({code:1,msg:"登录成功"})
        }
    })
})

//购物车列表
server.get("/cartlist",(req,res)=>{
    var uid = req.session.uid
    console.log(uid)
    if(!uid){
        res.send({code:-1,msg:"请登录"})
        return;
    }
    var sql = "SELECT p.title,c.count,c.price,c.color,c.size FROM cubi_cart c,cubi_products p WHERE c.pid = p.pid AND c.uid=?"
    pool.query(sql,[uid],(err,result)=>{
        if(err) throw err
        res.send({code:1,data:result})
    })
})