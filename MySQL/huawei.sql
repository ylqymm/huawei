# Host: localhost  (Version: 5.5.53)
# Date: 2019-02-27 20:55:57
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "goodsinfo"
#

CREATE TABLE `goodsinfo` (
  `goodsId` varchar(10) NOT NULL,
  `goodsName` varchar(100) DEFAULT NULL,
  `goodsType` varchar(20) DEFAULT NULL,
  `goodsPrice` float DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `beiyong1` varchar(100) DEFAULT NULL,
  `beiyong2` varchar(100) DEFAULT NULL,
  `beiyong3` varchar(100) DEFAULT NULL,
  `beiyong4` varchar(100) DEFAULT NULL,
  `beiyong5` varchar(100) DEFAULT NULL,
  `beiyong6` varchar(100) DEFAULT NULL,
  `beiyong7` varchar(100) DEFAULT NULL,
  `beiyong8` varchar(100) DEFAULT NULL,
  `beiyong9` varchar(100) DEFAULT NULL,
  `beiyong10` varchar(100) DEFAULT NULL,
  `beiyong11` varchar(100) DEFAULT NULL,
  `beiyong12` varchar(100) DEFAULT NULL,
  `beiyong13` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodsinfo"
#

INSERT INTO `goodsinfo` VALUES ('001','','',0,0,'','','img/index/phone1.png','','','','','','','','','','','',''),('002','荣耀10','手机',2299,0,'最高优惠400赠377大礼包','img/index/rx2.jpg','','img/index/small1.png','','','','','','','','','','',''),('003','荣耀畅玩7C','',799,0,'降100 高配送耳机+自拍杆 ','img/index/rx3.png','',' ','','','','','','','','','','',''),('004','华为畅享 MAX','',1699,0,'赠配件好礼 ','img/index/rx4.jpg','','img/index/small6.png','','','','','','','','','','',''),('005','荣耀Play','',1699,0,'最高优惠400元  ','img/index/rx5.jpg','','img/index/small1.png','','','','','','','','','','',''),('006','HUAWEI nova 3i','',1999,0,'6+64GB版本领券立减200   ','img/index/rx6.png','','img/index/small3.png','','','','','','','','','','',''),('007','荣耀9青春版','',999,0,'尊享版降600 加赠手环+数据线 ','img/index/rx7.png','',' ','','','','','','','','','','',''),('008','荣耀9青春版HUAWEI Mate 10','',3399,0,'领券减300+赠好礼 ','img/index/rx8.png','',' ','','','','','','','','','','',''),('015','荣耀畅玩7C','手机',899,2,'6+64GB版本领券立减200   ','img/index/rx4.jpg','到货通知','11人评价','','img\\product\\20181118152704.png','','','','','','','','','');

#
# Structure for table "goodslis"
#

CREATE TABLE `goodslis` (
  `goodsId` varchar(10) NOT NULL,
  `goodsName` varchar(100) DEFAULT NULL,
  `goodsType` varchar(20) DEFAULT NULL,
  `goodsPrice` float DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `beiyong1` varchar(100) DEFAULT NULL,
  `beiyong2` varchar(100) DEFAULT NULL,
  `beiyong3` varchar(100) DEFAULT NULL,
  `beiyong4` varchar(100) DEFAULT NULL,
  `beiyong5` varchar(100) DEFAULT NULL,
  `beiyong6` varchar(100) DEFAULT NULL,
  `beiyong7` varchar(100) DEFAULT NULL,
  `beiyong8` varchar(100) DEFAULT NULL,
  `beiyong9` varchar(100) DEFAULT NULL,
  `beiyong10` varchar(100) DEFAULT NULL,
  `beiyong11` varchar(100) DEFAULT NULL,
  `beiyong12` varchar(100) DEFAULT NULL,
  `beiyong13` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

#
# Data for table "goodslis"
#

INSERT INTO `goodslis` VALUES ('001',NULL,'手机',NULL,NULL,NULL,'img/productList/p1.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

#
# Structure for table "goodslist"
#

CREATE TABLE `goodslist` (
  `goodsId` varchar(10) NOT NULL,
  `goodsName` varchar(100) DEFAULT NULL,
  `goodsType` varchar(20) DEFAULT NULL,
  `goodsPrice` float DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `beiyong1` varchar(100) DEFAULT NULL,
  `beiyong2` varchar(100) DEFAULT NULL,
  `beiyong3` varchar(100) DEFAULT NULL,
  `beiyong4` varchar(100) DEFAULT NULL,
  `beiyong5` varchar(100) DEFAULT NULL,
  `beiyong6` varchar(100) DEFAULT NULL,
  `beiyong7` varchar(100) DEFAULT NULL,
  `beiyong8` varchar(100) DEFAULT NULL,
  `beiyong9` varchar(100) DEFAULT NULL,
  `beiyong10` varchar(100) DEFAULT NULL,
  `beiyong11` varchar(100) DEFAULT NULL,
  `beiyong12` varchar(100) DEFAULT NULL,
  `beiyong13` varchar(100) DEFAULT NULL,
  `beiyong14` varchar(100) DEFAULT NULL,
  `beiyong15` varchar(100) DEFAULT NULL,
  `beiyong16` varchar(100) DEFAULT NULL,
  `beiyong17` varchar(100) DEFAULT NULL,
  `beiyong18` varchar(100) DEFAULT NULL,
  `beiyong19` varchar(100) DEFAULT NULL,
  `beiyong20` varchar(100) DEFAULT NULL,
  `beiyong21` varchar(100) DEFAULT NULL,
  `beiyong22` varchar(100) DEFAULT NULL,
  `beiyong23` varchar(100) DEFAULT NULL,
  `beiyong24` varchar(100) DEFAULT NULL,
  `beiyong25` varchar(100) DEFAULT NULL,
  `beiyong26` varchar(100) DEFAULT NULL,
  `beiyong27` varchar(100) DEFAULT NULL,
  `beiyong28` varchar(100) DEFAULT NULL,
  `beiyong29` varchar(100) DEFAULT NULL,
  `beiyong30` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodslist"
#

INSERT INTO `goodslist` VALUES ('001','华为畅享8','手机',1099,12,'华为畅享8 3GB+32GB 全网通标配版（粉色）','img/productList/p1.jpg','到货通知','43108人评价','img/index/small3.png','img/product/bg1.jpg','img/product/bg2.jpg','img/product/bg3.jpg','img/product/bg4.jpg','img/product/bg5.jpg','华为畅享8 3GB+32GB 全网通标配版（粉色）',' 5.99英寸全面屏，后置1300万高清双摄','1099.00',' ','img/product/l4.jpg','img/product/l1.jpg','img/product/l2.jpg','img/product/l3.jpg',' ','粉色','金色','蓝色','黑色',' ','全网通 3GB+32GB','全网通 4GB+64GB','','','','','',''),('002','华为畅享8荣耀V10 ','手机',1999,4,'全网通高配版 6GB+64GB（魅丽红）','img/productList/rx6.png','到货通知','3108人评价','img/index/small1.png','img/product/m1.png','img/product/m2.jpg','img/product/m3.jpg','img/product/m4.jpg','img/product/m5.jpg','限时优惠800，现仅售1999；现货速发，送双倍积分（积分可抵现','特有金属雕刻工艺|麒麟970AI芯片|全面屏|GPU Turbo','2799.00','600','img/product/color3.jpg','img/product/color1.jpg','img/product/color2.jpg','img/product/color4.jpg',' ','幻夜黑','沙滩金','极光蓝','魅丽红',' ','','6GB+64GB','','','','','',''),('003','荣耀Play','手机',1699,139,'128GB版送超值配件礼包 ','img/productList/p2.png','到货通知','3453',' ','img/productList/p2a.png','img/productList/p2a.png','img/productList/p2a.png','img/productList/p2a.png','img/productList/p2a.png','【春节不打烊！6GB+128GB版本限量赠送超值配件礼包】','GPU Turbo|麒麟970AI芯片|6.3英寸全面屏|4D游戏体验','2399',' ','img/productList/p2morrior.png','img/productList/p2morrior.png','img/productList/p2morrior.png',' ',' ','炫夜黑','极光蓝','星云紫',' ',' ','全网通 6GB+128GB','移动4G+版 6GB+64GB','','','','','','');

#
# Structure for table "shoppingcart"
#

CREATE TABLE `shoppingcart` (
  `vipName` varchar(50) DEFAULT NULL,
  `goodsId` varchar(50) DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "shoppingcart"
#

