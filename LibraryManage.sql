-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 18, 2024 at 11:43 AM
-- Server version: 8.0.36-0ubuntu0.22.04.1
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `LibraryManage`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `bid` int NOT NULL,
  `bookname` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL
) ;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`bid`, `bookname`, `description`) VALUES
(3, 'QA', 'testing work'),
(6, 'golang', 'good'),
(14, 'cpp', 'okk'),
(32, 'php', 'good'),
(33, 'node', 'good'),
(34, '.net', 'good'),
(35, 'Java', 'pnp1'),
(36, 'Data In', 'amrat'),
(37, 'go', 'good'),
(38, 'html', 'khushi'),
(39, 'css', 'good'),
(42, 'JS', 'sds');

-- --------------------------------------------------------

--
-- Table structure for table `otp`
--

CREATE TABLE `otp` (
  `id` int NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `otp` varchar(255) DEFAULT NULL
) ;

--
-- Dumping data for table `otp`
--

INSERT INTO `otp` (`id`, `email`, `otp`) VALUES
(2, 'amratprajapati.mscict2022@vnsgu.ac.in', '797615');

-- --------------------------------------------------------

--
-- Table structure for table `req_of_books`
--

CREATE TABLE `req_of_books` (
  `rid` int NOT NULL,
  `note` varchar(255) DEFAULT NULL,
  `enddate` date DEFAULT NULL,
  `startdate` date DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `bookid` int DEFAULT NULL,
  `userid` int DEFAULT NULL
) ;

--
-- Dumping data for table `req_of_books`
--

INSERT INTO `req_of_books` (`rid`, `note`, `enddate`, `startdate`, `status`, `bookid`, `userid`) VALUES
(3, 'good book', '2024-04-17', '2024-04-17', 'Approved', 32, 5),
(5, 'nice book', '2024-04-18', '2024-04-18', 'Approved', 33, 5),
(7, 'twt sdds', '2024-04-20', '2024-04-20', 'Approved', 34, 3),
(8, 'qwqeqwe', '2024-04-21', '2024-04-21', 'Approved', 36, 3),
(9, 'nice book', '2024-04-18', '2024-04-17', 'Approved', 38, 3),
(10, 'good book', '2024-04-18', '2024-04-17', 'Approved', 3, 5),
(17, 'good book', '2024-04-26', '2024-04-18', 'Approved', 37, 3),
(18, 'qwqeqwe', '2024-04-18', '2024-04-17', 'Approved', 37, 3);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `roleid` int NOT NULL,
  `role` varchar(255) DEFAULT NULL
) ;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`roleid`, `role`) VALUES
(1, 'Admin'),
(2, 'User');

-- --------------------------------------------------------

--
-- Table structure for table `user_master`
--

CREATE TABLE `user_master` (
  `uid` int NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `age` int NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `roleid` int DEFAULT NULL
) ;

--
-- Dumping data for table `user_master`
--

INSERT INTO `user_master` (`uid`, `address`, `age`, `email`, `password`, `subject`, `username`, `roleid`) VALUES
(3, 'surat', 12, 'amratprajapati.mscict2022@vnsgu.ac.in', '123', 'java', 'amrat', 2),
(4, 'surat', 12, 'root@gmail.com', '123', 'java', 'Admin', 1),
(5, 'surat', 12, 'punit11@gmail.com', '222', 'java', 'punit', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`bid`);

--
-- Indexes for table `otp`
--
ALTER TABLE `otp`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `req_of_books`
--
ALTER TABLE `req_of_books`
  ADD PRIMARY KEY (`rid`),
  ADD KEY `FKnd6ivm5e3pex8wsbts19n3i93` (`bookid`),
  ADD KEY `FKotnkwjktmq0mbfp5q84cavq85` (`userid`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`roleid`);

--
-- Indexes for table `user_master`
--
ALTER TABLE `user_master`
  ADD PRIMARY KEY (`uid`),
  ADD KEY `FK33cemmiwsu4rxnbu8ybatpqt8` (`roleid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `bid` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `otp`
--
ALTER TABLE `otp`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `req_of_books`
--
ALTER TABLE `req_of_books`
  MODIFY `rid` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `roleid` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user_master`
--
ALTER TABLE `user_master`
  MODIFY `uid` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `req_of_books`
--
ALTER TABLE `req_of_books`
  ADD CONSTRAINT `FKnd6ivm5e3pex8wsbts19n3i93` FOREIGN KEY (`bookid`) REFERENCES `books` (`bid`),
  ADD CONSTRAINT `FKotnkwjktmq0mbfp5q84cavq85` FOREIGN KEY (`userid`) REFERENCES `user_master` (`uid`);

--
-- Constraints for table `user_master`
--
ALTER TABLE `user_master`
  ADD CONSTRAINT `FK33cemmiwsu4rxnbu8ybatpqt8` FOREIGN KEY (`roleid`) REFERENCES `role` (`roleid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
