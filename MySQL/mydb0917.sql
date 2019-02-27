# Host: localhost  (Version: 5.5.53)
# Date: 2019-02-27 20:55:14
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "user"
#

CREATE TABLE `user` (
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "user"
#

INSERT INTO `user` VALUES ('青青','123');

#
# Structure for table "vip"
#

CREATE TABLE `vip` (
  `username` varchar(50) DEFAULT NULL,
  `userpass` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "vip"
#

INSERT INTO `vip` VALUES ('15122223333','w12345'),('18409492576','qw12345678'),('15294231051','w234566'),('18222905883','qw123456');
