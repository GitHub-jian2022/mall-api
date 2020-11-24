/*
Navicat MySQL Data Transfer

Source Server         : remote
Source Server Version : 50729
Source Host           : localhost:3306
Source Database       : mall

Target Server Type    : MYSQL
Target Server Version : 50729
File Encoding         : 65001

Date: 2020-11-24 10:18:49
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `address`
-- ----------------------------
DROP TABLE IF EXISTS `address`;
CREATE TABLE `address` (
  `id` int(64) NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `userId` varchar(255) DEFAULT NULL,
  `defaultFlag` int(11) DEFAULT NULL,
  `city_name` varchar(255) DEFAULT NULL,
  `detail_address` varchar(255) DEFAULT NULL,
  `province_name` varchar(255) DEFAULT NULL,
  `region_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of address
-- ----------------------------
INSERT INTO `address` VALUES ('4', '15602940001', 'lisi', '3', '1', '广州市', '东圃', '广东省', '天河区');
INSERT INTO `address` VALUES ('5', '15602940000', '张三', '2', '0', '上海市', '浦东', '上海', '浦东新区');

-- ----------------------------
-- Table structure for `banner`
-- ----------------------------
DROP TABLE IF EXISTS `banner`;
CREATE TABLE `banner` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `carouselUrl` varchar(255) DEFAULT NULL,
  `redirectUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of banner
-- ----------------------------
INSERT INTO `banner` VALUES ('1', '/images/banner/banner1.jpg', 'https://juejin.im');
INSERT INTO `banner` VALUES ('2', '/images/banner/banner2.jpg.webp', 'https://segmentfault.com');
INSERT INTO `banner` VALUES ('3', '/images/banner/banner3.jpg.webp', 'https://github.com');

-- ----------------------------
-- Table structure for `cart`
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` int(64) NOT NULL AUTO_INCREMENT,
  `goodsId` varchar(255) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `quanity` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES ('3', '56', '2', '1');
INSERT INTO `cart` VALUES ('2', '48', '2', '1');
INSERT INTO `cart` VALUES ('7', '48', '3', '1');
INSERT INTO `cart` VALUES ('8', '48', '3', '1');
INSERT INTO `cart` VALUES ('9', '48', '3', '1');
INSERT INTO `cart` VALUES ('10', '48', '3', '1');

-- ----------------------------
-- Table structure for `cate`
-- ----------------------------
DROP TABLE IF EXISTS `cate`;
CREATE TABLE `cate` (
  `id` int(64) NOT NULL AUTO_INCREMENT,
  `level` int(255) DEFAULT NULL,
  `category_name` varchar(255) DEFAULT NULL,
  `parentId` int(64) DEFAULT NULL,
  `create_time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cate
-- ----------------------------
INSERT INTO `cate` VALUES ('1', '1', '女装/内衣', '0', '1606035014948');
INSERT INTO `cate` VALUES ('2', '1', '男装/运动户外', '0', '1606035036746');
INSERT INTO `cate` VALUES ('3', '1', '女鞋/男鞋/箱包', '0', '1606035046231');
INSERT INTO `cate` VALUES ('4', '2', '女装', '1', '1606035066505');
INSERT INTO `cate` VALUES ('5', '2', '内衣', '1', '1606035078433');
INSERT INTO `cate` VALUES ('6', '2', '男装', '2', '1606035089352');
INSERT INTO `cate` VALUES ('7', '2', '运动户外', '2', '1606035095143');
INSERT INTO `cate` VALUES ('8', '3', '上衣', '4', '1606035119810');
INSERT INTO `cate` VALUES ('9', '3', '下装', '4', '1606035131585');
INSERT INTO `cate` VALUES ('10', '3', '上衣', '6', '1606035138376');
INSERT INTO `cate` VALUES ('11', '3', '下装', '6', '1606035142664');
INSERT INTO `cate` VALUES ('12', '1', '手机/数码/电脑办公', '0', '1606036355795');
INSERT INTO `cate` VALUES ('13', '2', '手机', '12', '1606036374579');
INSERT INTO `cate` VALUES ('14', '2', '数码', '12', '1606036388556');
INSERT INTO `cate` VALUES ('15', '2', '电脑办公', '12', '1606036399547');
INSERT INTO `cate` VALUES ('16', '3', 'iphone', '13', '1606036444923');
INSERT INTO `cate` VALUES ('17', '3', '三星', '13', '1606036449593');
INSERT INTO `cate` VALUES ('18', '3', '华为', '13', '1606036453962');
INSERT INTO `cate` VALUES ('19', '3', '小米', '13', '1606036458723');
INSERT INTO `cate` VALUES ('20', '3', '华硕', '15', '1606038095339');

-- ----------------------------
-- Table structure for `collection`
-- ----------------------------
DROP TABLE IF EXISTS `collection`;
CREATE TABLE `collection` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goodsId` int(11) NOT NULL,
  `userId` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of collection
-- ----------------------------
INSERT INTO `collection` VALUES ('19', '55', '2');
INSERT INTO `collection` VALUES ('20', '52', '2');
INSERT INTO `collection` VALUES ('21', '59', '2');

-- ----------------------------
-- Table structure for `goods`
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `goodsId` int(255) NOT NULL AUTO_INCREMENT,
  `categoryId` int(11) DEFAULT NULL,
  `goodsName` varchar(255) DEFAULT NULL,
  `good_sku_list` varchar(255) DEFAULT NULL,
  `good_img_banner` varchar(255) DEFAULT NULL,
  `good_activity` varchar(255) DEFAULT NULL,
  `good_status` varchar(255) DEFAULT NULL,
  `goodsIntro` varchar(255) DEFAULT NULL,
  `goodsCoverImg` varchar(255) DEFAULT NULL,
  `sellingPrice` decimal(10,2) DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `create_time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('48', '20', '华硕a豆笔记本电脑adolbook14 2020增强版i5官方正品全面屏金属 轻薄便携 学生女生款超薄独显商务爱豆办公本', null, null, null, null, '华硕a豆笔记本电脑adolbook14 2020增强版i5官方正品全面屏金属 轻薄便携 学生女生款超薄独显商务爱豆办公本', '/images/goods/1606020950534computer1.jpg', '4999.00', '华硕', '1', '1606020950548');
INSERT INTO `goods` VALUES ('49', '20', '华硕a豆笔记本电脑adolbook14 2020增强版i5官方正品全面屏金属 轻薄便携 学生女生款超薄独显商务爱豆办公本', null, null, null, null, '华硕a豆笔记本电脑adolbook14 2020增强版i5官方正品全面屏金属 轻薄便携 学生女生款超薄独显商务爱豆办公本', '/images/goods/16060210164611606020950534computer1.jpg', '4499.00', '华硕', '1', '1606021016503');
INSERT INTO `goods` VALUES ('50', '20', '华硕a豆笔记本电脑adolbook14 2020增强版i5官方正品全面屏金属 轻薄便携 学生女生款超薄独显商务爱豆办公本', null, null, null, null, '华硕a豆笔记本电脑adolbook14 2020增强版i5官方正品全面屏金属 轻薄便携 学生女生款超薄独显商务爱豆办公本', '/images/goods/16060210400991606020950534computer1.jpg', '5499.00', '华硕', '1', '1606021040110');
INSERT INTO `goods` VALUES ('51', '20', '华硕a豆笔记本电脑adolbook14 2020增强版i5官方正品全面屏金属 轻薄便携 学生女生款超薄独显商务爱豆办公本', null, null, null, null, '华硕a豆笔记本电脑adolbook14 2020增强版i5官方正品全面屏金属 轻薄便携 学生女生款超薄独显商务爱豆办公本', '/images/goods/16060210520221606020950534computer1.jpg', '4099.00', '华硕', '1', '1606021052037');
INSERT INTO `goods` VALUES ('52', '20', '华硕a豆笔记本电脑adolbook14 2020增强版i5官方正品全面屏金属 轻薄便携 学生女生款超薄独显商务爱豆办公本', null, null, null, null, '华硕a豆笔记本电脑adolbook14 2020增强版i5官方正品全面屏金属 轻薄便携 学生女生款超薄独显商务爱豆办公本', '/images/goods/16060210875151606020950534computer1.jpg', '4099.00', '华硕', '2', '1606021087526');
INSERT INTO `goods` VALUES ('53', '20', '华硕a豆笔记本电脑adolbook14 2020增强版i5官方正品全面屏金属 轻薄便携 学生女生款超薄独显商务爱豆办公本', null, null, null, null, '华硕a豆笔记本电脑adolbook14 2020增强版i5官方正品全面屏金属 轻薄便携 学生女生款超薄独显商务爱豆办公本', '/images/goods/16060210905611606020950534computer1.jpg', '4099.00', '华硕', '2', '1606021090622');
INSERT INTO `goods` VALUES ('54', '20', '华硕a豆笔记本电脑adolbook14 2020增强版i5官方正品全面屏金属 轻薄便携 学生女生款超薄独显商务爱豆办公本', null, null, null, null, '华硕a豆笔记本电脑adolbook14 2020增强版i5官方正品全面屏金属 轻薄便携 学生女生款超薄独显商务爱豆办公本', '/images/goods/16060210926701606020950534computer1.jpg', '4099.00', '华硕', '2', '1606021092683');
INSERT INTO `goods` VALUES ('55', '20', '华硕a豆笔记本电脑adolbook14 2020增强版i5官方正品全面屏金属 轻薄便携 学生女生款超薄独显商务爱豆办公本', null, null, null, null, '华硕a豆笔记本电脑adolbook14 2020增强版i5官方正品全面屏金属 轻薄便携 学生女生款超薄独显商务爱豆办公本', '/images/goods/16060210956171606020950534computer1.jpg', '4099.00', '华硕', '2', '1606021095633');
INSERT INTO `goods` VALUES ('56', '18', '【限时优惠400元+12期免息】华为旗下荣耀9X PRO手机麒麟810芯片4800万超清三摄升降式摄像头官方', null, null, null, null, '【限时优惠400元+12期免息】华为旗下荣耀9X PRO手机麒麟810芯片4800万超清三摄升降式摄像头官方', '/images/goods/16060211703961.jpg', '4099.00', '华为荣耀9X PRO', '3', '1606021170412');
INSERT INTO `goods` VALUES ('57', '18', '【限时优惠400元+12期免息】华为旗下荣耀9X PRO手机麒麟810芯片4800万超清三摄升降式摄像头官方', null, null, null, null, '【限时优惠400元+12期免息】华为旗下荣耀9X PRO手机麒麟810芯片4800万超清三摄升降式摄像头官方', '/images/goods/16060211857721.jpg', '1799.00', '华为荣耀9X PRO', '3', '1606021185814');
INSERT INTO `goods` VALUES ('58', '18', '【限时优惠400元+12期免息】华为旗下荣耀9X PRO手机麒麟810芯片4800万超清三摄升降式摄像头官方', null, null, null, null, '【限时优惠400元+12期免息】华为旗下荣耀9X PRO手机麒麟810芯片4800万超清三摄升降式摄像头官方', '/images/goods/16060211907051.jpg', '1499.00', '华为荣耀9X PRO', '3', '1606021190718');
INSERT INTO `goods` VALUES ('59', '18', '【限时优惠400元+12期免息】华为旗下荣耀9X PRO手机麒麟810芯片4800万超清三摄升降式摄像头官方', null, null, null, null, '【限时优惠400元+12期免息】华为旗下荣耀9X PRO手机麒麟810芯片4800万超清三摄升降式摄像头官方', '/images/goods/16060211957451.jpg', '1999.00', '华为荣耀9X PRO', '3', '1606021195759');

-- ----------------------------
-- Table structure for `goods_specs`
-- ----------------------------
DROP TABLE IF EXISTS `goods_specs`;
CREATE TABLE `goods_specs` (
  `id` int(64) NOT NULL AUTO_INCREMENT,
  `good_id` int(255) DEFAULT NULL,
  `good_price` decimal(10,2) DEFAULT NULL,
  `good_stock` int(64) DEFAULT NULL,
  `good_weight` decimal(10,0) DEFAULT NULL,
  `status` int(64) DEFAULT NULL,
  `create_time` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods_specs
-- ----------------------------
INSERT INTO `goods_specs` VALUES ('1', '1', '7988.00', '10000', null, null, null);
INSERT INTO `goods_specs` VALUES ('2', '2', '7988.00', '20000', null, null, null);

-- ----------------------------
-- Table structure for `order`
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `orderId` varchar(255) NOT NULL,
  `address_name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `status` int(64) NOT NULL,
  `price` int(64) NOT NULL,
  `create_time` timestamp NULL DEFAULT NULL,
  `update_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`orderId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES ('1', 'A', '123456', '1', '1', '1', null, null);

-- ----------------------------
-- Table structure for `order_link_goods`
-- ----------------------------
DROP TABLE IF EXISTS `order_link_goods`;
CREATE TABLE `order_link_goods` (
  `id` int(64) NOT NULL AUTO_INCREMENT,
  `orderId` varchar(255) NOT NULL,
  `goodsId` int(64) NOT NULL,
  `quanity` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_link_goods
-- ----------------------------
INSERT INTO `order_link_goods` VALUES ('1', '1', '15', '1');

-- ----------------------------
-- Table structure for `roles`
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `id` int(64) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `type_en` varchar(255) DEFAULT NULL,
  `type_cn` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO `roles` VALUES ('1', '1', 'admin', '管理员');
INSERT INTO `roles` VALUES ('2', '10', 'ordinary', '普通用户');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `user_type` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `sign` varchar(255) DEFAULT NULL,
  `total_score` varchar(255) DEFAULT NULL,
  `used_score` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '1', '15602941146', 'ianj', 'e10adc3949ba59abbe56e057f20f883e', 'ianj', '/images/avatar/16059494776561.jpg', '1', '广东省', '', '', '0', '0', '2020-11-19 11:43:58', '2020-11-19 11:43:58');
INSERT INTO `user` VALUES ('2', '10', '15602940000', '张三', 'e10adc3949ba59abbe56e057f20f883e', 'zhangsan', '/images/avatar/1.jpg', '1', '北京市', '北京市', '', '0', '0', '2020-11-20 12:49:24', '2020-11-20 12:49:24');
INSERT INTO `user` VALUES ('3', '10', '15602940001', 'lisi', 'e10adc3949ba59abbe56e057f20f883e', 'lisi', null, null, null, null, 'helloworld', null, null, null, null);
