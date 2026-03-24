-- MySQL dump 10.13  Distrib 8.0.39, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: back_system
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `files` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `file_name` varchar(255) DEFAULT NULL,
  `file_url` varchar(255) DEFAULT NULL,
  `file_size` varchar(255) DEFAULT NULL,
  `upload_person` varchar(255) DEFAULT NULL,
  `upload_time` varchar(255) DEFAULT NULL,
  `download_number` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

/*!40000 ALTER TABLE `files` DISABLE KEYS */;
INSERT INTO `files` VALUES (3,'avatar.jpg','http://127.0.0.1:3007/upload/avatar.jpg','81.216796875','xds','2024-10-12 19:45:38.705',1);
/*!40000 ALTER TABLE `files` ENABLE KEYS */;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `image_url` varchar(255) DEFAULT NULL,
  `account` int DEFAULT NULL,
  `onlyId` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (1,'http://127.0.0.1:3007/upload/4�.png',654321,'1e3874cc-01db-4708-8b76-1957fa445495'),(2,'http://127.0.0.1:3007/upload/4�.png',NULL,'97072168-a485-4d02-ba13-4ad9979a3ba5'),(3,'http://127.0.0.1:3007/upload/4�.png',NULL,'eb3ef004-1d56-48b4-8a2e-91de2a66f82f'),(4,'http://127.0.0.1:3007/upload/4�.png',NULL,'4a1e86b3-7358-4130-8e3d-d78dfd489fb3'),(5,'http://127.0.0.1:3007/upload/4�.png',NULL,'51a826b3-b71a-49eb-853a-6b70a2dfb27f'),(6,'http://127.0.0.1:3007/upload/bc2b262d402947aa7a93798cfbb5683.jpg',NULL,'3642277c-1d2b-4d80-91e5-d6363ba0908c'),(7,'http://127.0.0.1:3007/upload/头像.jpg',NULL,'05ecbde3-80ec-44a1-a10d-0b20024b1275'),(8,'http://127.0.0.1:3007/upload/头像.jpg',NULL,'649769bb-addc-47e1-adbc-b2fe42dd08f3'),(9,'http://127.0.0.1:3007/upload/头像.jpg',NULL,'addd8831-45be-4c2c-ba6c-3eee32dbf1bc'),(10,'http://127.0.0.1:3007/upload/头像.jpg',NULL,'15ef7835-8629-46ef-b06b-8280e3a5fbd1'),(11,'http://127.0.0.1:3007/upload/头像.jpg',NULL,'74d6f8b4-f74d-4540-b057-aec9dc916b94'),(12,'http://127.0.0.1:3007/upload/头像.jpg',NULL,'60a18db3-c548-42da-8e99-c8d8216ca72d'),(13,'http://127.0.0.1:3007/upload/头像.jpg',NULL,'10763e6b-1194-4c4e-b49d-aa79ac5059df'),(14,'http://127.0.0.1:3007/upload/头像.jpg',NULL,'a29be502-50eb-4b0b-90d9-2d66bc1b5344'),(15,'http://127.0.0.1:3007/upload/头像.jpg',NULL,'e6ce8fe9-8245-44d4-9ff3-50bcde565bf4'),(16,'http://127.0.0.1:3007/upload/头像.jpg',NULL,'030e88e8-a318-4cce-bf63-787cefc342a3'),(17,'http://127.0.0.1:3007/upload/头像.jpg',NULL,'901fe894-d615-4e36-9503-3c1faa985f69'),(18,'http://127.0.0.1:3007/upload/头像.jpg',NULL,'3890ac1c-6408-4e23-bd6e-f3170faa12d0'),(19,'http://127.0.0.1:3007/upload/头像.jpg',NULL,'406c9e5e-e3b9-48aa-aa52-1f466e1d47ea'),(20,'http://127.0.0.1:3007/upload/头像.jpg',NULL,'0f2db1a2-5232-4458-8c2a-9392c08478c0'),(21,'http://127.0.0.1:3007/upload/avatar.jpg',NULL,'8ed1f414-fc3c-473c-adf1-60e1dd3ee540'),(22,'http://127.0.0.1:3007/upload/avatar.jpg',123456,'4c158b4f-9016-4d9c-acac-59267b5f9a01'),(23,'http://127.0.0.1:3007/upload/avatar.jpg',123456,'caf0659a-f368-45df-a46f-3d727861af20'),(24,'http://127.0.0.1:3007/upload/bc2b262d402947aa7a93798cfbb5683.jpg',123456,'39ab2dc8-9580-474d-add5-acbd60f38e10'),(25,'http://127.0.0.1:3007/upload/avatar.jpg',123456,'806b4d9c-48a6-4e04-a86f-a0b1a6f7ca8b'),(26,'http://127.0.0.1:3007/upload/bc2b262d402947aa7a93798cfbb5683.jpg',123456,'5401e9ff-ddab-41c9-b75d-9f919c2505b3'),(27,'http://127.0.0.1:3007/upload/bc2b262d402947aa7a93798cfbb5683.jpg',NULL,'213917dd-5b5c-491c-9249-543f61c430c6'),(28,'http://127.0.0.1:3007/upload/bc2b262d402947aa7a93798cfbb5683.jpg',NULL,'6dc19355-ac00-4e60-8e0a-33540565c80c'),(29,'http://127.0.0.1:3007/upload/bc2b262d402947aa7a93798cfbb5683.jpg',NULL,'2382ded4-2d69-4d34-8af0-bde1974041d4'),(30,'http://127.0.0.1:3007/upload/avatar1.jpg',123456,'a3ec0948-aebf-49cf-ba17-fae6fe5fc5f8'),(31,'http://127.0.0.1:3007/upload/avatar.jpg',123456,'c6cbdac7-a5a7-41d0-90b4-46b135b3fdd1'),(32,'http://127.0.0.1:3007/upload/avatar1.jpg',NULL,'f35f075e-9799-4004-9e08-231876be376a'),(33,'http://127.0.0.1:3007/upload/6.jpg',NULL,'6e42fe5a-6e8f-44b5-9ee3-18326766887a'),(34,'http://127.0.0.1:3007/upload/4.jpg',123456,'43f9dadd-052a-44d3-a9c5-0502e92d795e'),(35,'http://127.0.0.1:3007/upload/avatar1.jpg',NULL,'0a1c1f77-ce41-4de4-b73f-71a32b31b62d'),(36,'http://127.0.0.1:3007/upload/avatar1.jpg',NULL,'3d5fca5f-b1a3-4b73-80e1-4462c3abb804'),(37,'http://127.0.0.1:3007/upload/avatar1.jpg',123456,'61ece21c-59e2-4ae4-994d-01985001a4f7'),(38,'http://127.0.0.1:3007/upload/avatar.jpg',123456,'10a6f1a5-74b1-46fb-8d40-4843640d8990'),(39,'http://127.0.0.1:3007/upload/avatar1.jpg',123456,'78e12636-7f7a-4958-9d38-79d6a3420e90'),(40,'http://127.0.0.1:3007/upload/avatar.jpg',666666,'46120e19-653f-48f9-b857-b4d12be42036'),(41,'http://127.0.0.1:3007/upload/avatar.jpg',666666,'84d9d1f7-180c-4e75-9651-7c5be540755a'),(42,'http://127.0.0.1:3007/upload/avatar.jpg',666666,'d3da1028-45fd-4e48-9785-7d6d69437f00');
/*!40000 ALTER TABLE `image` ENABLE KEYS */;

--
-- Table structure for table `login_log`
--

DROP TABLE IF EXISTS `login_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login_log` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `account` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `login_time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_log`
--

/*!40000 ALTER TABLE `login_log` DISABLE KEYS */;
INSERT INTO `login_log` VALUES (1,123456,'xds',NULL,'2024-10-14 11:22:02.060'),(2,123456,'xds','123123@qq.com','2024-10-14 11:22:33.821'),(3,123456,'xds','123123@qq.com','2024-10-14 15:10:31.454'),(4,123456,'xds','123123@qq.com','2024-10-15 10:38:41.862'),(5,123456,'xds','123123@qq.com','2024-10-16 10:43:02.125'),(6,123456,'xds','123123@qq.com','2024-10-16 13:57:36.245'),(7,123456,'xds','123123@qq.com','2024-10-16 13:58:27.496'),(8,123456,'xds','123123@qq.com','2024-10-16 14:22:02.957'),(9,123456,'xds','123123@qq.com','2024-10-16 19:52:20.882'),(10,123456,'xds','123123@qq.com','2024-10-16 20:00:51.145'),(11,123456,'xds','123123@qq.com','2024-10-16 20:01:32.974'),(12,123456,'xds','123123@qq.com','2024-10-17 15:35:27.467'),(13,123456,'xds','123123@qq.com','2024-10-19 11:13:41.615'),(14,123456,'xds','123123@qq.com','2024-10-19 11:54:58.647'),(15,123456,'xds','123123@qq.com','2024-10-19 12:02:00.015'),(16,123456,'xds','123123@qq.com','2024-10-19 12:24:34.074'),(17,123456,'xds','123123@qq.com','2024-10-19 12:31:06.173'),(18,123456,'xds','123123@qq.com','2024-10-19 12:43:55.331'),(19,123456,'xds','123123@qq.com','2024-10-19 12:50:15.922'),(20,123456,'xds','123123@qq.com','2024-10-19 12:50:37.362'),(21,123456,'xds','123123@qq.com','2024-10-19 13:21:57.652'),(22,123456,'xds','123123@qq.com','2024-10-19 13:37:15.955'),(23,123456,'xds','123123@qq.com','2024-10-19 13:37:38.228'),(24,123456,'xds','123123@qq.com','2024-10-19 13:38:59.807'),(25,123456,'xds','123123@qq.com','2024-10-20 11:03:10.043'),(26,123456,'xds','123123@qq.com','2024-10-20 11:04:18.382'),(27,123456,'xds','123123@qq.com','2024-10-20 11:49:39.340'),(28,123456,'xds','123123@qq.com','2024-10-20 11:59:41.426'),(29,123456,'xds','123123@qq.com','2024-10-20 12:01:50.316'),(30,123456,'xds','123123@qq.com','2024-10-20 12:06:41.243'),(31,123456,'xds','123123@qq.com','2024-10-20 12:09:47.215'),(32,123456,'xds','123123@qq.com','2024-10-20 12:11:16.482'),(33,123456,'xds','123123@qq.com','2024-10-20 12:27:01.185'),(34,123456,'xds','123123@qq.com','2024-10-20 12:35:21.985'),(35,123456,'xds','123123@qq.com','2024-10-20 12:42:10.110'),(36,123456,'xds','123123@qq.com','2024-10-20 12:44:04.465'),(37,123456,'xds','123123@qq.com','2024-10-20 12:54:37.923'),(38,123456,'xds','123123@qq.com','2024-10-20 12:56:57.957'),(39,123456,'xds','123123@qq.com','2024-10-20 12:57:21.785'),(40,123456,'xds','123123@qq.com','2024-10-20 14:54:57.976'),(41,123456,'xds','123123@qq.com','2024-10-20 14:57:33.029'),(42,123456,'xds','123123@qq.com','2024-10-20 15:10:46.159'),(43,123456,'xds','123123@qq.com','2024-10-20 15:11:30.651'),(44,123456,'xds','123123@qq.com','2024-10-20 15:13:34.822'),(45,123456,'xds','123123@qq.com','2024-10-20 15:18:44.822'),(46,123456,'xds','123123@qq.com','2024-10-20 15:19:42.259'),(47,123456,'xds','123123@qq.com','2024-10-20 15:33:01.159'),(48,123456,'xds','123123@qq.com','2024-10-20 15:47:27.945'),(49,123456,'xds','123123@qq.com','2024-10-20 15:50:42.378'),(50,123456,'xds','123123@qq.com','2024-10-20 15:52:38.186'),(51,123456,'xds','123123@qq.com','2024-10-20 15:53:14.231'),(52,123456,'xds','123123@qq.com','2024-10-20 15:53:23.950'),(53,123456,'xds','123123@qq.com','2024-10-20 16:14:54.853'),(54,123456,'xds','123123@qq.com','2024-10-20 16:16:06.909'),(55,123456,'xds','123123@qq.com','2024-10-20 16:17:09.713'),(56,123456,'xds','123123@qq.com','2024-10-20 16:30:36.992'),(57,123456,'xds','123123@qq.com','2024-10-20 16:31:34.307'),(58,123456,'xds','123123@qq.com','2024-10-20 16:32:39.948'),(59,123456,'xds','123123@qq.com','2024-10-20 16:32:56.272'),(60,123456,'xds','123123@qq.com','2024-10-20 16:34:09.727'),(61,123456,'xds','123123@qq.com','2024-10-20 16:35:19.571'),(62,123456,'xds','123123@qq.com','2024-10-20 16:35:39.237'),(63,123456,'xds','123123@qq.com','2024-10-20 16:35:52.744'),(64,123456,'xds','123123@qq.com','2024-10-20 16:41:24.031'),(65,123456,'xds','123123@qq.com','2024-10-20 16:41:57.418'),(66,123456,'xds','123123@qq.com','2024-10-20 16:42:35.699'),(67,123456,'xds','123123@qq.com','2024-10-20 16:43:01.672'),(68,123456,'xds','123123@qq.com','2024-10-20 16:43:26.559'),(69,666666,NULL,NULL,'2024-10-20 16:53:27.804'),(70,123456,'xds','123123@qq.com','2024-10-20 17:34:56.374'),(71,666666,NULL,NULL,'2024-10-20 17:39:15.472'),(72,123456,'xds','123123@qq.com','2024-10-20 17:41:00.138'),(73,666666,NULL,NULL,'2024-10-20 17:41:12.161'),(74,123456,'xds','123123@qq.com','2024-10-20 17:41:28.136'),(75,123456,'xds','123123@qq.com','2024-10-20 17:41:52.771'),(76,666666,NULL,NULL,'2024-10-20 17:42:37.893'),(77,123456,'xds','123123@qq.com','2024-10-20 17:50:30.208'),(78,666666,NULL,NULL,'2024-10-20 17:53:00.164'),(79,666666,NULL,NULL,'2024-10-20 17:53:46.970'),(80,123456,'xds','123123@qq.com','2024-10-20 17:54:12.298'),(81,666666,NULL,NULL,'2024-10-20 17:54:31.530'),(82,123456,'xds','123123@qq.com','2024-10-20 17:54:50.301'),(83,666666,NULL,NULL,'2024-10-20 17:55:07.658'),(84,666666,NULL,NULL,'2024-10-20 17:57:25.061'),(85,666666,NULL,NULL,'2024-10-20 17:59:30.450'),(86,666666,NULL,NULL,'2024-10-20 18:00:16.871'),(87,666666,NULL,NULL,'2024-10-20 18:01:27.198'),(88,666666,NULL,NULL,'2024-10-20 18:09:27.046'),(89,123456,'xds','123123@qq.com','2024-10-20 18:09:47.551'),(90,666666,NULL,NULL,'2024-10-20 18:10:17.824'),(91,123456,'xds','123123@qq.com','2024-10-20 18:15:10.286'),(92,666666,'asdf','asfaasf','2024-10-20 18:19:45.371');
/*!40000 ALTER TABLE `login_log` ENABLE KEYS */;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `message` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `message_title` varchar(255) DEFAULT NULL,
  `message_category` varchar(255) DEFAULT NULL,
  `message_publish_department` varchar(255) DEFAULT NULL,
  `message_publish_name` varchar(255) DEFAULT NULL,
  `message_receipt_object` varchar(255) DEFAULT NULL,
  `message_click_number` int DEFAULT NULL,
  `message_content` varchar(255) DEFAULT NULL,
  `message_publish_time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `message_update_time` varchar(255) DEFAULT NULL,
  `message_level` varchar(255) DEFAULT NULL,
  `message_status` int DEFAULT NULL,
  `message_delete_time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

/*!40000 ALTER TABLE `message` DISABLE KEYS */;
INSERT INTO `message` VALUES (5,'下班后开会','公司公告','组织部','胥鼎盛123','组织部',0,'','2024-10-06 18:49:39.848','2024-10-12 10:04:26.057','一般',1,'2024-10-16 16:27:58.868'),(10,'阿斯蒂芬','公司公告','总裁办','xds','总裁办',13,'','2024-10-16 13:58:48.332','2024-10-16 20:29:04.541','必要',0,'2024-10-16 16:28:08.116'),(11,'请问','公司公告','总裁办','xds','总裁办',8,'','2024-10-16 14:14:37.412','2024-10-16 20:25:04.814','重要',0,'2024-10-16 16:28:09.288'),(14,'自行车v','公司公告','总裁办','xds','总裁办',4,'<p>东方国家的法规和</p>','2024-10-16 14:42:46.633','2024-10-16 20:24:12.727','必要',0,'2024-10-16 16:28:14.777'),(15,'自行车v','公司公告','总裁办','xds','总裁办',2,'<p><strong>啊手动阀手动阀宣布</strong></p>','2024-10-16 14:45:16.001',NULL,'必要',1,'2024-10-16 15:44:04.778'),(16,'发货尽快·','公司公告','总裁办','xds','总裁办',1,'<p><span style=\"font-size: 22px;\">支持v吧</span></p>','2024-10-16 14:46:06.393','2024-10-16 15:22:03.862','重要',1,'2024-10-16 15:44:03.067'),(21,'3234','公司公告','总裁办','xds','总裁办',2,'<p>234</p>','2024-10-16 14:52:34.218','2024-10-16 20:20:09.171','重要',0,'2024-10-16 16:31:25.013'),(22,'3234','公司公告','总裁办','xds','总裁办',3,'<p>234</p>','2024-10-16 14:53:41.348','2024-10-16 20:19:08.121','重要',0,'2024-10-16 16:31:26.288'),(23,'3234','公司公告','总裁办','xds','总裁办',5,'<p>234</p>','2024-10-16 14:55:24.762','2024-10-16 16:37:32.288','重要',0,'2024-10-16 16:31:27.581'),(24,'3234','公司公告','总裁办','xds','总裁办',4,'<p>234</p>','2024-10-16 14:56:22.658','2024-10-16 16:37:30.346','重要',0,'2024-10-16 16:31:28.749'),(28,'345','公司公告','总裁办','xds','总裁办',2,'<p>435</p>','2024-10-16 16:37:49.522',NULL,'必要',0,NULL),(29,'777','公司公告','总裁办','xds','总裁办',2,'<p>777</p>','2024-10-16 16:41:05.419',NULL,'重要',0,NULL),(30,'777','公司公告','总裁办','xds','总裁办',3,'<p>777</p>','2024-10-16 16:42:10.457',NULL,'重要',0,NULL),(31,'777','公司公告','总裁办','xds','总裁办',2,'<p>777</p>','2024-10-16 16:42:42.684',NULL,'重要',0,NULL),(32,'2345','公司公告','总裁办','xds','总裁办',5,'<p>2345</p>','2024-10-16 19:30:28.926',NULL,'一般',0,NULL),(33,'2345','公司公告','总裁办','xds','总裁办',2,'<p>2345</p>','2024-10-16 19:31:54.824',NULL,'一般',0,NULL),(34,'2345','公司公告','总裁办','xds','总裁办',3,'<p>2345</p>','2024-10-16 19:33:44.753',NULL,'一般',0,NULL),(35,'2345','公司公告','总裁办','xds','总裁办',2,'<p>2345</p>','2024-10-16 19:37:33.662',NULL,'一般',0,NULL),(36,'2345','公司公告','总裁办','xds','总裁办',3,'<p>2345</p>','2024-10-16 19:41:23.011',NULL,'一般',0,NULL),(37,'房管局','公司公告','总裁办','xds','总裁办',4,'<p>阿斯蒂芬</p>','2024-10-16 19:42:41.734',NULL,'必要',0,NULL),(38,'现场v吧','公司公告','总裁办','xds','总裁办',3,'<p>326</p>','2024-10-16 19:56:10.619',NULL,'重要',0,NULL),(39,'5678','公司公告','总裁办','xds','总裁办',2,'<p>5678</p>','2024-10-16 20:08:51.915',NULL,'必要',0,NULL),(40,'456','公司公告','总裁办','xds','总裁办',3,'<p>456465</p>','2024-10-16 20:10:56.220',NULL,'重要',0,NULL),(41,'2阿迪斯','系统消息','','xds','',0,'<p>阿斯蒂芬</p>','2024-10-17 16:06:07.890',NULL,'',0,NULL),(42,'a','系统消息','','xds','',0,'<p>123</p>','2024-10-19 12:51:50.589',NULL,'',0,NULL),(43,'a','公司公告','总裁办','xds','组织部',0,'<p>123</p>','2024-10-19 12:52:08.676',NULL,'重要',0,NULL);
/*!40000 ALTER TABLE `message` ENABLE KEYS */;

--
-- Table structure for table `operation_log`
--

DROP TABLE IF EXISTS `operation_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `operation_log` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `operation_person` varchar(255) DEFAULT NULL,
  `operation_content` varchar(255) DEFAULT NULL,
  `operation_level` varchar(255) DEFAULT NULL,
  `operation_time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `operation_log`
--

/*!40000 ALTER TABLE `operation_log` DISABLE KEYS */;
INSERT INTO `operation_log` VALUES (1,'胥鼎胜','123','高级','2024-10-13 20:38:57.758'),(2,'胥鼎胜','123','中级','2024-10-13 20:39:11.389'),(3,'胥鼎胜','123','低级','2024-10-13 20:39:16.009'),(4,'xds','对管理员\'null\'进行了删除操作','高级','2024-10-14 12:00:34.104'),(5,'xds','对管理员\'xdsds\'进行了删除操作','高级','2024-10-14 12:03:22.907'),(6,'xds','对产品\'香蕉\'进行了审核操作,审核结果为\'同意\'','高级','2024-10-14 12:28:03.694'),(7,'xds','对产品\'橘子\'进行了审核操作,审核结果为\'同意\'','高级','2024-10-14 12:37:53.884'),(8,'xds','对产品\'as\'进行了审核操作,审核结果为\'否决\'','高级','2024-10-14 15:10:48.932');
/*!40000 ALTER TABLE `operation_log` ENABLE KEYS */;

--
-- Table structure for table `outproduct`
--

DROP TABLE IF EXISTS `outproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `outproduct` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `product_out_apply_person` varchar(255) DEFAULT NULL,
  `product_audit_time` varchar(255) DEFAULT NULL,
  `product_out_audit_person` varchar(255) DEFAULT NULL,
  `audit_memo` varchar(255) DEFAULT NULL,
  `product_out_id` int(10) unsigned zerofill DEFAULT NULL,
  `product_out_number` int(10) unsigned zerofill DEFAULT NULL,
  `product_out_price` int(10) unsigned zerofill DEFAULT NULL,
  `product_apply_time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `outproduct`
--

/*!40000 ALTER TABLE `outproduct` DISABLE KEYS */;
INSERT INTO `outproduct` VALUES (2,'李四','2024-09-21 18:55:22.103','123asd','sasdf',0000123123,0000000012,0000000123,NULL),(3,'李四','2024-09-21 18:59:57.686','123asd','sasdf',0000123123,0000000012,0000000123,NULL),(4,'李四','2024-09-21 19:05:38.090','123asd','sasdf',0000123123,0000000012,0000000123,NULL),(5,'xds','2024-10-04 20:32:59.109','xds',NULL,0000001002,0000000100,0000000500,NULL),(6,'1','2024-10-14 12:28:03.671','xds','asdf',0000001001,0000000123,0000015129,NULL),(7,'fsddf','2024-10-14 12:37:53.851','xds','123',0000002344,0000000002,0000000024,'2024-10-14 12:25:24.825');
/*!40000 ALTER TABLE `outproduct` ENABLE KEYS */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `product_id` int DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `product_category` varchar(255) DEFAULT NULL,
  `product_unit` varchar(255) DEFAULT NULL,
  `product_inwarehouse_number` int DEFAULT NULL,
  `product_single_price` int DEFAULT NULL,
  `product_all_price` int DEFAULT NULL,
  `product_status` varchar(255) DEFAULT NULL,
  `product_create_person` varchar(255) DEFAULT NULL,
  `product_update_time` varchar(255) DEFAULT NULL,
  `in_memo` varchar(255) DEFAULT NULL,
  `product_out_id` int DEFAULT NULL,
  `product_out_number` int DEFAULT NULL,
  `product_out_price` int DEFAULT NULL,
  `product_out_apply_person` varchar(255) DEFAULT NULL,
  `product_apply_time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `apply_memo` varchar(255) DEFAULT NULL,
  `product_out_status` varchar(255) DEFAULT NULL,
  `product_audit_time` varchar(255) DEFAULT NULL,
  `product_out_audit_person` varchar(255) DEFAULT NULL,
  `product_create_time` varchar(255) DEFAULT NULL,
  `audit_memo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (4,1002,'香蕉','食品类','个',0,NULL,0,NULL,'阿斯顿','2024-10-05 18:52:52.271','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-10-05 14:40:39.138','xds','2024-10-04 12:35:24.260',NULL),(5,1003,'橘子','食品类','个',10,NULL,120,NULL,'xds',NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-10-04 20:34:38.213','xds','2024-10-04 12:40:29.164','123'),(6,1004,'as','食品类','个',123,123,15129,NULL,'123',NULL,'',NULL,1,123,'1','2024-10-05 14:49:24.600','','否决','2024-10-14 15:10:48.909','xds','2024-10-04 12:41:10.740',NULL),(7,123,'123','水果','个',123,123,15129,NULL,'123','2024-10-14 17:10:50.607','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-10-04 12:42:14.129',NULL),(8,3452,'zxccv','服装','个',2345,234,548730,NULL,'sdf','2024-10-14 17:10:55.058','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-10-14 12:24:38.770',NULL),(9,2341,'阿道夫','水果','个',123,123,15129,NULL,'123',NULL,'123',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-10-19 12:02:12.304',NULL),(10,2341,'阿道夫','水果','个',123,123,15129,NULL,'123',NULL,'123',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-10-19 12:11:37.880',NULL);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;

--
-- Table structure for table `setting`
--

DROP TABLE IF EXISTS `setting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `setting` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `set_name` varchar(255) DEFAULT NULL,
  `set_value` varchar(255) DEFAULT NULL,
  `set_text` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `setting`
--

/*!40000 ALTER TABLE `setting` DISABLE KEYS */;
INSERT INTO `setting` VALUES (1,'swiper1','http://127.0.0.1:3007/upload/58207aecc4882d72ddbd8a269953ec90.jpg',NULL),(2,'swiper2','http://127.0.0.1:3007/upload/bbsxEHXzWlQ.jpg',NULL),(3,'swiper3','http://127.0.0.1:3007/upload/avatar.jpg',NULL),(4,'swiper4','http://127.0.0.1:3007/upload/000B9CBD-E116-40A5-90CC-B693D501916D_1_105_c.jpeg',NULL),(5,'swiper5','http://127.0.0.1:3007/upload/蓝底.jpg',NULL),(6,'swiper6','http://127.0.0.1:3007/upload/000B9CBD-E116-40A5-90CC-B693D501916D_1_105_c.jpeg',NULL),(7,'公司名称','123123123','ds'),(8,'公司介绍','123123123','<p><span style=\"color: rgb(106, 57, 201); font-size: 22px;\"><em><strong>胥鼎盛最牛</strong></em></span></p><p><em>123123</em></p>'),(9,'公司架构',NULL,'架构架构'),(10,'公司战略',NULL,'战略战略'),(11,'公司高层',NULL,'介绍介绍'),(12,'部门设置','[\"总裁办\",\"组织部\",\"生活部\",\"纪检部\"]',NULL),(13,'产品设置','[\"水果\",\"服装\"]',NULL);
/*!40000 ALTER TABLE `setting` ENABLE KEYS */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `account` int DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `identity` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `create_time` varchar(255) DEFAULT NULL,
  `update_time` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `read_list` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `read_status` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,123123,'$2a$10$OvDnxi78G8dx54h892.TL.4CZ2NjNd2PtpeXYw/zZmiQtrxT9mQ/u','用户管理员','总裁办',NULL,'男',NULL,'2024-09-04 15:34:40.320','2024-10-16 12:51:16.699','0','123234','[\"36\",\"37\",\"38\",\"39\",\"40\",\"22\",\"21\",\"14\",\"11\",\"10\"]',1),(4,123123123,'$2a$10$LlAUQuj0FbxnNvhZ9P682.e7MaclHUoAqajWQk2/WMBOhTGB6Hs5m','用户管理员',NULL,'123',NULL,NULL,'2024-09-04 15:35:16.927','2024-10-14 11:51:11.656','0','123',NULL,NULL),(5,1231233,'$2a$10$DYGXUc/gr8.kwkBl11OIbOP40ztGJ0vVTi8FzX.SMiC0gQLvZIn8O','用户','总裁办','刘振兴','女',NULL,'2024-09-04 15:42:40.842','2024-09-21 13:59:42.038','0','123',NULL,0),(6,123457,'$2a$10$GCGZA7YfwWErSfVy29bWrOHRmHRuZvEL2Kt12aJg0FJzZZpUlivNS','用户',NULL,NULL,NULL,NULL,'2024-09-04 15:56:28.901',NULL,'0',NULL,NULL,NULL),(9,1234567,'$2a$10$ZDkV7UYdqWp3mg/uO.9v2euWPRsfObMnXcc6NQ/N0rM8gUvmnSysK','用户','总裁办','xds','男',NULL,'2024-09-11 16:49:26.198','2024-10-14 11:51:19.559','0','asd@qq.com',NULL,0),(10,12345678,'$2a$10$QF9S/TdnrMXsWtCdkX8WUOgOpIOplpF6fcMC0eMJMk/xMOlCj0D.S',NULL,'总裁办','asd','男',NULL,'2024-09-13 09:48:43.384',NULL,'0','asdasd@qq.com',NULL,0),(12,8123712,'$2a$10$0AbFHeF2qKwTlM42ZuVSXuRjB8aulEre1dmxD4N62RpyP1cC6mUjW','用户','项目部','asdf','女',NULL,'2024-09-13 10:37:20.475',NULL,'1','asfd@qq.com',NULL,NULL),(13,123456,'$2a$10$SNwe9g.122nq9Vvm56sKL.5IRkOZvmZJoLE9BqupJ1dV8ZTS3TZ3i','超级管理员','总裁办','xds','man','http://127.0.0.1:3007/upload/avatar1.jpg','2024-09-21 13:52:19.064',NULL,'0','123123@qq.com','[]',1),(14,1231231,'$2a$10$dj90mJpRCOYk9ibOlzcjxeyRXdkp/X6A221JyiyHqGAiPRFQJxNhW','用户','false','asd','男',NULL,'2024-10-06 12:14:20.861',NULL,'0','1123@qq.com',NULL,NULL),(15,981623,'$2a$10$/hnoa7hRMbUM.88AqMVEVO2apIX3D/5417DV/Hieo9J8z2S5jmSOa','用户','false','阿斯顿发','男',NULL,'2024-10-06 12:26:28.693',NULL,'0','1123@qq.com',NULL,NULL),(16,8713465,'$2a$10$csduNz5kjgNargnXZ6jrXeJhhEFSZSodEwfSfFITaXaApcf5yeCIy','用户','false','阿斯顿发','男',NULL,'2024-10-06 12:32:23.460',NULL,'0','1123@qq.com',NULL,NULL),(17,111222,'$2a$10$PVOM72zIcaisNX83Qh8fNeHkbRgNKLHlM5FjpYPyV61kPc5ukksIy','用户',NULL,NULL,NULL,NULL,'2024-10-06 19:00:33.910',NULL,'0',NULL,NULL,NULL),(18,123,'$2a$10$L5CHprjjnaATOHSFBz1/SOVrf7mJahM0kAqvNTM894e6eGQPJUuyW','用户','总裁办','123asdf','女',NULL,'2024-10-14 11:34:56.985','2024-10-14 11:43:19.654','0','123',NULL,0),(19,123987,'$2a$10$95yR.AxcG0KVUdxomcdv4.jct8HtObU8ZDFJQr/sIFrJmrFS4ECFC','用户','总裁办','qwe','男',NULL,'2024-10-14 11:43:12.446',NULL,'0','qwe',NULL,0),(20,78345,'$2a$10$v1hbUdZO/I75fx0jd2hxGenA66spZeh5CHLt1BseySNg9e0lJgSLO','用户','总裁办','asdf','男',NULL,'2024-10-14 11:43:37.928',NULL,'0','asdf',NULL,0),(21,43523,'$2a$10$PZXezsGJEemXcIAgz.bH4O2r6.DP05v4JYS/87BnGbIckED.RMuAu','用户','总裁办','asdf','男',NULL,'2024-10-14 11:45:26.160',NULL,'0','asdf',NULL,0),(22,5473456,'$2a$10$y.xeYG9Wvt05/kfNu13WaeV6WvLdIUF68Pgx6ZVglC.JzhwV2vXJa','用户','总裁办','12asdf','男',NULL,'2024-10-14 11:51:36.980','2024-10-14 11:53:06.564','0','123',NULL,0),(23,2342643,'$2a$10$WFBEx7kt8sJj7tPhyEuLq.Gx4e/EzupjB8qACwFCUGrCV/5Wfba.O','用户','总裁办','asdasdf','女',NULL,'2024-10-14 11:54:16.897','2024-10-14 11:57:32.718','0','asdfasdf',NULL,0),(24,1231223,'$2a$10$Wd2f.qaWmo3cuO187HwRo.d.7rdcQURLuq0USiC.EPk7iCruObhf6','用户','总裁办','sdf','男',NULL,'2024-10-14 12:06:09.204',NULL,'0','asdf',NULL,0),(25,345623,'$2a$10$4pB3jemQuaJb6kt86jkIiuKRxlRbdnSnzIf5eCjIBCJfbr1QXNixG','消息管理员','总裁办','asdf','女',NULL,'2024-10-14 12:10:31.283',NULL,'0','asdf',NULL,0),(26,4567345,'$2a$10$Y/8oy0lz6T2qKCa7yccIUuUGgH8cMR8atsEXi7ExkLEJj5soSxU7u','产品管理员','总裁办','as','男',NULL,'2024-10-14 12:12:35.669','2024-10-14 12:12:39.674','0','asdf',NULL,0),(30,666666,'$2a$10$vk.nGv9ijyJZwp7S4fRPf.SsNWPf4PYN9VcHEWKRM1yUeB8vHLF5e','用户管理员','纪检部','asdf','女','http://127.0.0.1:3007/upload/avatar.jpg','2024-10-20 18:09:21.459','2024-10-20 18:20:06.221','0','asfaasf','[]',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

--
-- Dumping routines for database 'back_system'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-20 19:52:04
