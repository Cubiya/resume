SET NAMES UTF8;
DROP DATABASE IF EXISTS cubi;
CREATE DATABASE cubi CHARSET=UTF8;
USE cubi
-- 广告图数据
CREATE TABLE cubi_banner(
    bid INT PRIMARY KEY AUTO_INCREMENT,
    sm VARCHAR(128),
    lg VARCHAR(128)
);
INSERT INTO cubi_banner VALUES(null,"http://127.0.0.1:3000/banner/bansm1.png","http://127.0.0.1:3000/banner/banlg1.png");
INSERT INTO cubi_banner VALUES(null,"http://127.0.0.1:3000/banner/bansm2.png","http://127.0.0.1:3000/banner/banlg2.png");
INSERT INTO cubi_banner VALUES(null,"http://127.0.0.1:3000/banner/bansm3.png","http://127.0.0.1:3000/banner/banlg3.png");

-- 导航数据
CREATE TABLE cubi_nav(
    nid INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(12),
    url VARCHAR(128)
)
INSERT INTO cubi_nav VALUES(null,"首页","http://127.0.0.1:3000/index.html");
INSERT INTO cubi_nav VALUES(null,"购物车","http://127.0.0.1:3000/shopping_cart.html");
INSERT INTO cubi_nav VALUES(null,"原创设计","http://127.0.0.1:3000/yc.html");
INSERT INTO cubi_nav VALUES(null,"个性风潮","http://127.0.0.1:3000/gx.html");
INSERT INTO cubi_nav VALUES(null,"青春流行","http://127.0.0.1:3000/qc.html");
INSERT INTO cubi_nav VALUES(null,"嘻哈潮流","http://127.0.0.1:3000/xh.html");
INSERT INTO cubi_nav VALUES(null,"联系我们","http://127.0.0.1:3000/lx.html");