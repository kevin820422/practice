-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- 主機: 127.0.0.1
-- 產生時間： 2019 年 03 月 15 日 10:50
-- 伺服器版本: 10.1.37-MariaDB
-- PHP 版本： 7.1.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `pro_cherchef`
--

-- --------------------------------------------------------

--
-- 資料表結構 `act`
--

CREATE TABLE `act` (
  `sid` int(11) NOT NULL,
  `name` text NOT NULL,
  `member` varchar(255) NOT NULL,
  `area` text NOT NULL,
  `time` date NOT NULL,
  `price` int(11) NOT NULL,
  `content` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `act`
--

INSERT INTO `act` (`sid`, `name`, `member`, `area`, `time`, `price`, `content`) VALUES
(1, '富基漁港海鮮採買團', '', '', '0000-00-00', 0, ''),
(2, '海邊星空烤乳豬', '', '', '0000-00-00', 0, ''),
(3, '海邊星空烤乳豬', '', '', '0000-00-00', 0, '');

-- --------------------------------------------------------

--
-- 資料表結構 `add_utensils`
--

CREATE TABLE `add_utensils` (
  `sid` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `rent` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `add_utensils`
--

INSERT INTO `add_utensils` (`sid`, `name`, `rent`, `price`, `content`) VALUES
(11, '貴婦餐具組', 150, 1300, '包含餐墊. 麵包碟. 黃油刀. 沙拉叉子 .晚餐叉子 .晚餐盤 .餐巾 .甜點勺子 . 晚餐刀 .湯匙. 水杯的玻璃杯. 紅酒高腳杯 .白酒杯'),
(21, '雅緻和風餐具組', 99, 1200, '包含餐墊. 麵包碟. 黃油刀. 沙拉叉子 .晚餐叉子 .晚餐盤 .餐巾 .甜點勺子 . 晚餐刀 .湯匙. 水杯的玻璃杯. 紅酒高腳杯 .白酒杯'),
(31, '德國Weimar經典玫瑰K金盤', 160, 2000, '包含餐墊. 麵包碟. 黃油刀. 沙拉叉子 .晚餐叉子 .晚餐盤 .餐巾 .甜點勺子 . 晚餐刀 .湯匙. 水杯的玻璃杯. 紅酒高腳杯 .白酒杯'),
(41, '高雅皇家風情餐', 120, 1800, '包含餐墊. 麵包碟. 黃油刀. 沙拉叉子 .晚餐叉子 .晚餐盤 .餐巾 .甜點勺子 . 晚餐刀 .湯匙. 水杯的玻璃杯. 紅酒高腳杯 .白酒杯'),
(51, '英國鑲金邊餐具組', 180, 2200, '包含餐墊. 麵包碟. 黃油刀. 沙拉叉子 .晚餐叉子 .晚餐盤 .餐巾 .甜點勺子 . 晚餐刀 .湯匙. 水杯的玻璃杯. 紅酒高腳杯 .白酒杯'),
(61, '時尚美學餐具', 130, 1600, '包含餐墊. 麵包碟. 黃油刀. 沙拉叉子 .晚餐叉子 .晚餐盤 .餐巾 .甜點勺子 . 晚餐刀 .湯匙. 水杯的玻璃杯. 紅酒高腳杯 .白酒杯'),
(71, '北歐風餐具組', 90, 1200, '包含餐墊. 麵包碟. 黃油刀. 沙拉叉子 .晚餐叉子 .晚餐盤 .餐巾 .甜點勺子 . 晚餐刀 .湯匙. 水杯的玻璃杯. 紅酒高腳杯 .白酒杯'),
(81, '義國風情餐具組', 100, 1250, '包含餐墊. 麵包碟. 黃油刀. 沙拉叉子 .晚餐叉子 .晚餐盤 .餐巾 .甜點勺子 . 晚餐刀 .湯匙. 水杯的玻璃杯. 紅酒高腳杯 .白酒杯'),
(91, '法式復古餐具組', 110, 1350, '包含餐墊. 麵包碟. 黃油刀. 沙拉叉子 .晚餐叉子 .晚餐盤 .餐巾 .甜點勺子 . 晚餐刀 .湯匙. 水杯的玻璃杯. 紅酒高腳杯 .白酒杯');

-- --------------------------------------------------------

--
-- 資料表結構 `chef`
--

CREATE TABLE `chef` (
  `sid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `mobile` varchar(255) NOT NULL,
  `birthday` date NOT NULL,
  `pic` varchar(255) NOT NULL,
  `experience` varchar(255) NOT NULL,
  `food_style` varchar(255) NOT NULL,
  `area` varchar(255) NOT NULL,
  `restaurant` varchar(255) DEFAULT NULL,
  `own_kitchen` varchar(255) NOT NULL,
  `tool` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `chef`
--

INSERT INTO `chef` (`sid`, `name`, `email`, `password`, `mobile`, `birthday`, `pic`, `experience`, `food_style`, `area`, `restaurant`, `own_kitchen`, `tool`, `note`) VALUES
(1, 'Giuseppe', 'angelo@cherchef.com', '*43B5D28C4E561DC332E90E97FD8CEC2EC9C02D4C', '0919102103', '1985-06-21', '', '', '', '', NULL, 'yes', NULL, '如家中沒有家務助理幫忙收碟，煩請備註 MobiChef 要求侍應服務(HK$900/侍應生, 包括5小時內的服務, 將人有專人聯系)\r\n以上中文菜名翻譯如有歧異，概以英文為準\r\nBBQ 菜單包括5小時廚師服務\r\n我一般會在用餐前2小時到達\r\n如賓客人數為10位以上，我將帶一位廚房助手協助烹調\r\n我可以另行為部份賓客準備素食份量'),
(2, 'Theodore Chang', 'theodore@cherchef.com', '*4ACFE3202A5FF5CF467898FC58AAB1D615029441', '', '1987-05-04', '', '', '', '', NULL, '', NULL, NULL),
(3, 'Wai Chung Eric Tse', 'eric@cherchef.com', '*4ACFE3202A5FF5CF467898FC58AAB1D615029441', '0975842351', '1990-02-03', '', '台北上海鄉村餐廳麵點主廚', '', '', NULL, '', NULL, NULL);

-- --------------------------------------------------------

--
-- 資料表結構 `f_set`
--

CREATE TABLE `f_set` (
  `sid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `chef` int(11) NOT NULL,
  `f_style` int(11) NOT NULL,
  `f_set_price` int(11) NOT NULL,
  `f_set_meal` varchar(255) NOT NULL,
  `text` varchar(255) NOT NULL,
  `f_set_image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `f_set`
--

INSERT INTO `f_set` (`sid`, `name`, `chef`, `f_style`, `f_set_price`, `f_set_meal`, `text`, `f_set_image`) VALUES
(1, '心意情迷', 1, 1, 1500, '1, 2, 3, 4, 5', '這個菜單靈感來自我的妻子, 我以「廚師妻子」的她最喜歡的菜式整合成這個Amore Mio 菜單, 意指「我的愛」。我的菜單全選用優質食材及有機食品, 將最好的帶給每位客人!', '0'),
(2, 'Spanish Tapas & Paella', 2, 0, 0, '', '', '');

-- --------------------------------------------------------

--
-- 資料表結構 `f_set_image`
--

CREATE TABLE `f_set_image` (
  `sid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `f_set_meal`
--

CREATE TABLE `f_set_meal` (
  `sid` int(11) NOT NULL,
  `f_set` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `f_set_meal`
--

INSERT INTO `f_set_meal` (`sid`, `f_set`, `name`) VALUES
(1, 1, '甕仔雞'),
(2, 1, '鳳梨蝦球'),
(3, 1, '糖醋里肌'),
(4, 1, '清蒸鱈魚'),
(5, 1, '藥燉排骨湯'),
(6, 2, 'Orange Salad with Dried Fruit, Nuts, Olive & Manchego with Orange Dressing'),
(7, 2, 'Mushroom, Iberico Ham, Manchego & Black Truffle Toast');

-- --------------------------------------------------------

--
-- 資料表結構 `f_style`
--

CREATE TABLE `f_style` (
  `sid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `class` int(11) NOT NULL,
  `nickname` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `f_style`
--

INSERT INTO `f_style` (`sid`, `name`, `class`, `nickname`) VALUES
(1, '台式料理', 0, '台灣菜, 台菜, 台灣料理'),
(2, '中式料理', 0, '中餐, 中華料理, 中菜'),
(3, '西洋料理', 0, '西餐, 西式料理, 歐式料理, 西菜'),
(4, '日本料理', 0, '日式料理, 和風料理'),
(5, '異國料理', 0, '異國菜'),
(101, '客家料理\r\n', 1, '客家菜'),
(102, '原民料理', 1, '原民菜, 原住民料理, 原住民菜'),
(201, '港式料理', 2, ''),
(202, '川式料理', 2, '川菜, 四川料理'),
(301, '義式料理', 3, '義大利菜'),
(302, '法式料理', 3, '法國菜'),
(303, '英式料理', 3, '英國菜'),
(304, '美式料理', 3, '美國菜'),
(305, '西班牙料理', 3, '西班牙菜'),
(501, '韓式料理', 5, '韓國菜'),
(502, '泰式料理', 5, '泰國菜'),
(503, '越式料理', 5, '越南菜'),
(504, '南洋料理', 5, '新加坡菜, 馬來西亞菜, 印尼菜');

--
-- 已匯出資料表的索引
--

--
-- 資料表索引 `act`
--
ALTER TABLE `act`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `add_utensils`
--
ALTER TABLE `add_utensils`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `chef`
--
ALTER TABLE `chef`
  ADD PRIMARY KEY (`sid`),
  ADD UNIQUE KEY `email` (`email`);

--
-- 資料表索引 `f_set`
--
ALTER TABLE `f_set`
  ADD PRIMARY KEY (`sid`),
  ADD KEY `f_set_meal` (`f_set_meal`),
  ADD KEY `chef` (`chef`),
  ADD KEY `name` (`name`);

--
-- 資料表索引 `f_set_image`
--
ALTER TABLE `f_set_image`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `f_set_meal`
--
ALTER TABLE `f_set_meal`
  ADD PRIMARY KEY (`sid`),
  ADD KEY `f_set` (`f_set`);

--
-- 資料表索引 `f_style`
--
ALTER TABLE `f_style`
  ADD PRIMARY KEY (`sid`);

--
-- 在匯出的資料表使用 AUTO_INCREMENT
--

--
-- 使用資料表 AUTO_INCREMENT `act`
--
ALTER TABLE `act`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表 AUTO_INCREMENT `add_utensils`
--
ALTER TABLE `add_utensils`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- 使用資料表 AUTO_INCREMENT `chef`
--
ALTER TABLE `chef`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 使用資料表 AUTO_INCREMENT `f_set`
--
ALTER TABLE `f_set`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表 AUTO_INCREMENT `f_set_image`
--
ALTER TABLE `f_set_image`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表 AUTO_INCREMENT `f_set_meal`
--
ALTER TABLE `f_set_meal`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- 使用資料表 AUTO_INCREMENT `f_style`
--
ALTER TABLE `f_style`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=505;

--
-- 已匯出資料表的限制(Constraint)
--

--
-- 資料表的 Constraints `f_set_meal`
--
ALTER TABLE `f_set_meal`
  ADD CONSTRAINT `f_set` FOREIGN KEY (`f_set`) REFERENCES `f_set` (`sid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
