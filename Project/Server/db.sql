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
);
INSERT INTO cubi_nav VALUES(null,"首页","http://127.0.0.1:5500/public/index.html");
INSERT INTO cubi_nav VALUES(null,"购物车","http://127.0.0.1:5500/public/shopping_cart.html");
INSERT INTO cubi_nav VALUES(null,"原创设计","http://127.0.0.1:5500/public/yc.html");
INSERT INTO cubi_nav VALUES(null,"个性风潮","http://127.0.0.1:5500/public/gx.html");
INSERT INTO cubi_nav VALUES(null,"青春流行","http://127.0.0.1:5500/public/qc.html");
INSERT INTO cubi_nav VALUES(null,"嘻哈潮流","http://127.0.0.1:5500/public/xh.html");
INSERT INTO cubi_nav VALUES(null,"联系我们","http://127.0.0.1:5500/public/lx.html");

-- 原创设计的数据表
CREATE TABLE cubi_index_yc(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(64),
    pic VARCHAR(128),
    plogo VARCHAR(128)
);

INSERT INTO cubi_index_yc VALUES(null,"生活气氛组先行意识生活形态","http://127.0.0.1:3000/yc/yc_05.jpg","http://127.0.0.1:3000/yc/yc_01.png");
INSERT INTO cubi_index_yc VALUES(null,"PSO新品首发","http://127.0.0.1:3000/yc/yc_06.jpg","http://127.0.0.1:3000/yc/yc_02.png");
INSERT INTO cubi_index_yc VALUES(null,"GAO暗黑设计","http://127.0.0.1:3000/yc/yc_07.jpg","http://127.0.0.1:3000/yc/yc_03.png");
INSERT INTO cubi_index_yc VALUES(null,"Unawares摩登剪裁","http://127.0.0.1:3000/yc/yc_08.jpg","http://127.0.0.1:3000/yc/yc_04.png");

-- 个性风格数据表
CREATE TABLE cubi_index_gx(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(64),
    pic VARCHAR(128),
    plogo VARCHAR(128)
);
INSERT INTO cubi_index_gx VALUES(null,"从一而终，暗黑至极","http://127.0.0.1:3000/gx/gx_02.jpg","http://127.0.0.1:3000/gx/gx_logo01.png");
INSERT INTO cubi_index_gx VALUES(null,"闪电潮牌敢潮你就来","http://127.0.0.1:3000/gx/gx_03.jpg","http://127.0.0.1:3000/gx/gx_logo02.png");
INSERT INTO cubi_index_gx VALUES(null,"本土原创潮牌","http://127.0.0.1:3000/gx/gx_04.jpg","http://127.0.0.1:3000/gx/gx_logo01.png");
INSERT INTO cubi_index_gx VALUES(null,"潮流街头品质第一","http://127.0.0.1:3000/gx/gx_05.jpg","http://127.0.0.1:3000/gx/gx_logo03.png");
INSERT INTO cubi_index_gx VALUES(null,"购买新品赠送挎包","http://127.0.0.1:3000/gx/gx_06.jpg","http://127.0.0.1:3000/gx/gx_logo04.png");

--青春流行数据表
CREATE TABLE cubi_index_qc(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(64),
    pic VARCHAR(128),
    plogo VARCHAR(128)
);
INSERT INTO cubi_index_qc VALUES(null,"弄潮为乐，青春不凡","http://127.0.0.1:3000/qc/qc_01.jpg","http://127.0.0.1:3000/qc/qc_logo01.png");
INSERT INTO cubi_index_qc VALUES(null,"日系潮流我做主","http://127.0.0.1:3000/qc/qc_02.jpg","http://127.0.0.1:3000/qc/qc_logo02.png");
INSERT INTO cubi_index_qc VALUES(null,"原创日韩风","http://127.0.0.1:3000/qc/qc_03.jpg","http://127.0.0.1:3000/qc/qc_logo03.png");
INSERT INTO cubi_index_qc VALUES(null,"你喜欢，你就买。","http://127.0.0.1:3000/qc/qc_04.jpg","http://127.0.0.1:3000/qc/qc_logo04.png");
INSERT INTO cubi_index_qc VALUES(null,"不断创新 跃进不止","http://127.0.0.1:3000/qc/qc_05.jpg","http://127.0.0.1:3000/qc/qc_logo05.png");
INSERT INTO cubi_index_qc VALUES(null,"傲娇小爷潮搭达人","http://127.0.0.1:3000/qc/qc_06.jpg","http://127.0.0.1:3000/qc/qc_logo06.png");

-- 嘻哈流行数据表
CREATE TABLE cubi_index_xh(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(64),
    pic VARCHAR(128),
    plogo VARCHAR(128)
);
INSERT INTO cubi_index_xh VALUES(null,"秋季欧美潮牌个性印花圆领卫衣男嘻哈宽松oversize国潮情侣外套女","http://127.0.0.1:3000/xh/xh_01.jpg","http://127.0.0.1:3000/xh/xh_logo01.png");
INSERT INTO cubi_index_xh VALUES(null,"美式街头简约字母连帽卫衣男女情侣加绒加大码宽松长袖套帽外套潮","http://127.0.0.1:3000/xh/xh_02.jpg","http://127.0.0.1:3000/xh/xh_logo02.png");
INSERT INTO cubi_index_xh VALUES(null,"欧美街头潮牌oversize宽松情侣卫衣男潮流外套","http://127.0.0.1:3000/xh/xh_03.jpg","http://127.0.0.1:3000/xh/xh_logo03.png");