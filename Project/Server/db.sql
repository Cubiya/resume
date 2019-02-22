SET NAMES UTF8;
DROP DATABASE IF EXISTS cubi;
CREATE DATABASE cubi CHARSET=UTF8;
USE cubi
-- 广告图数据
CREATE TABLE cubi_banner(
    bid INT PRIMARY KEY AUTO_INCREMENT,
    sm VARCHAR(128),
    lg VARCHAR(128)
);ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO cubi_banner VALUES(null,"http://127.0.0.1:3000/banner/bansm1.png","http://127.0.0.1:3000/banner/banlg1.png");
INSERT INTO cubi_banner VALUES(null,"http://127.0.0.1:3000/banner/bansm2.png","http://127.0.0.1:3000/banner/banlg2.png");
INSERT INTO cubi_banner VALUES(null,"http://127.0.0.1:3000/banner/bansm3.png","http://127.0.0.1:3000/banner/banlg3.png");

-- 导航数据
CREATE TABLE cubi_nav(
    nid INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(12),
    url VARCHAR(128)
);ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO cubi_nav VALUES(null,"首页","http://127.0.0.1:5500/public/index.html");
INSERT INTO cubi_nav VALUES(null,"购物车","http://127.0.0.1:5500/public/shopping_cart.html");
INSERT INTO cubi_nav VALUES(null,"原创设计","http://127.0.0.1:5500/public/yc.html");
INSERT INTO cubi_nav VALUES(null,"个性风潮","http://127.0.0.1:5500/public/gx.html");
INSERT INTO cubi_nav VALUES(null,"青春流行","http://127.0.0.1:5500/public/qc.html");
INSERT INTO cubi_nav VALUES(null,"嘻哈潮流","http://127.0.0.1:5500/public/xh.html");
INSERT INTO cubi_nav VALUES(null,"联系我们","http://127.0.0.1:5500/public/lx.html");

-- 商品分类
CREATE TABLE cubi_products_family(
    fid INT PRIMARY KEY AUTO_INCREMENT,
    fname VARCHAR(24)
);ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO cubi_products_family VALUES(null,"原创设计");
INSERT INTO cubi_products_family VALUES(null,"个性风潮");
INSERT INTO cubi_products_family VALUES(null,"青春流行");
INSERT INTO cubi_products_family VALUES(null,"嘻哈流行");

-- 主页产品
CREATE TABLE cubi_index_products(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    fid INT,
    title VARCHAR(64),
    pic VARCHAR(128),
    plogo VARCHAR(128)
);ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO cubi_index_products VALUES(null,1,"生活气氛组先行意识生活形态","http://127.0.0.1:3000/yc/yc_05.jpg","http://127.0.0.1:3000/yc/yc_01.png");
INSERT INTO cubi_index_products VALUES(null,1,"PSO新品首发","http://127.0.0.1:3000/yc/yc_06.jpg","http://127.0.0.1:3000/yc/yc_02.png");
INSERT INTO cubi_index_products VALUES(null,1,"GAO暗黑设计","http://127.0.0.1:3000/yc/yc_07.jpg","http://127.0.0.1:3000/yc/yc_03.png");
INSERT INTO cubi_index_products VALUES(null,1,"Unawares摩登剪裁","http://127.0.0.1:3000/yc/yc_08.jpg","http://127.0.0.1:3000/yc/yc_04.png");
INSERT INTO cubi_index_products VALUES(null,2,"从一而终，暗黑至极","http://127.0.0.1:3000/gx/gx_02.jpg","http://127.0.0.1:3000/gx/gx_logo01.png");
INSERT INTO cubi_index_products VALUES(null,2,"闪电潮牌敢潮你就来","http://127.0.0.1:3000/gx/gx_03.jpg","http://127.0.0.1:3000/gx/gx_logo02.png");
INSERT INTO cubi_index_products VALUES(null,2,"本土原创潮牌","http://127.0.0.1:3000/gx/gx_04.jpg","http://127.0.0.1:3000/gx/gx_logo01.png");
INSERT INTO cubi_index_products VALUES(null,2,"潮流街头品质第一","http://127.0.0.1:3000/gx/gx_05.jpg","http://127.0.0.1:3000/gx/gx_logo03.png");
INSERT INTO cubi_index_products VALUES(null,2,"购买新品赠送挎包","http://127.0.0.1:3000/gx/gx_06.jpg","http://127.0.0.1:3000/gx/gx_logo04.png");
INSERT INTO cubi_index_products VALUES(null,3,"弄潮为乐，青春不凡","http://127.0.0.1:3000/qc/qc_01.jpg","http://127.0.0.1:3000/qc/qc_logo01.png");
INSERT INTO cubi_index_products VALUES(null,3,"日系潮流我做主","http://127.0.0.1:3000/qc/qc_02.jpg","http://127.0.0.1:3000/qc/qc_logo02.png");
INSERT INTO cubi_index_products VALUES(null,3,"原创日韩风","http://127.0.0.1:3000/qc/qc_03.jpg","http://127.0.0.1:3000/qc/qc_logo03.png");
INSERT INTO cubi_index_products VALUES(null,3,"你喜欢，你就买。","http://127.0.0.1:3000/qc/qc_04.jpg","http://127.0.0.1:3000/qc/qc_logo04.png");
INSERT INTO cubi_index_products VALUES(null,3,"不断创新 跃进不止","http://127.0.0.1:3000/qc/qc_05.jpg","http://127.0.0.1:3000/qc/qc_logo05.png");
INSERT INTO cubi_index_products VALUES(null,3,"傲娇小爷潮搭达人","http://127.0.0.1:3000/qc/qc_06.jpg","http://127.0.0.1:3000/qc/qc_logo06.png");
INSERT INTO cubi_index_products VALUES(null,4,"秋季欧美潮牌个性印花圆领卫衣男嘻哈宽松oversize国潮情侣外套女","http://127.0.0.1:3000/xh/xh_01.jpg","http://127.0.0.1:3000/xh/xh_logo01.png");
INSERT INTO cubi_index_products VALUES(null,4,"美式街头简约字母连帽卫衣男女情侣加绒加大码宽松长袖套帽外套潮","http://127.0.0.1:3000/xh/xh_02.jpg","http://127.0.0.1:3000/xh/xh_logo02.png");
INSERT INTO cubi_index_products VALUES(null,4,"欧美街头潮牌oversize宽松情侣卫衣男潮流外套","http://127.0.0.1:3000/xh/xh_03.jpg","http://127.0.0.1:3000/xh/xh_logo03.png");

CREATE TABLE cubi_products(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    fid INT,
    subtitle VARCHAR(128),
    price DECIMAL(10,2),
    sm VARCHAR(128),
    md VARCHAR(128),
    lg VARCHAR(128),
    ship VARCHAR(24),
    details VARCHAR(1024)
);ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO cubi_products VALUES(null,1,"【新年购买，享多重好礼】1、领券立减10元2、七天无理由退换",98,"http://127.0.0.1:3000/yc/yc_05_sm.jpg","http://127.0.0.1:3000/yc/yc_05.jpg","http://127.0.0.1:3000/yc/yc_05_lg.jpg","广东深圳","12345");
INSERT INTO cubi_products VALUES(null,1,"【新年购买，享多重好礼】1、领券立减10元2、七天无理由退换",98,"http://127.0.0.1:3000/yc/yc_05_sm.jpg","http://127.0.0.1:3000/yc/yc_05.jpg","http://127.0.0.1:3000/yc/yc_05_lg.jpg","广东惠州","123");
INSERT INTO cubi_products VALUES(null,2,"【新年购买，享多重好礼】1、领券立减10元2、七天无理由退换",98,"http://127.0.0.1:3000/yc/yc_05_sm.jpg","http://127.0.0.1:3000/yc/yc_05.jpg","http://127.0.0.1:3000/yc/yc_05_lg.jpg","广东惠州","12312");
