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
-- Database: `company`
--

-- --------------------------------------------------------

--
-- Table structure for table `companyInfo`
--

CREATE TABLE `companyInfo` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `industry` varchar(255) DEFAULT NULL,
  `revenue` varchar(255) DEFAULT NULL
);

--
-- Dumping data for table `companyInfo`
--

INSERT INTO `companyInfo` (`id`, `name`, `address`, `type`, `industry`, `revenue`) VALUES
(1, 'Example Company', '123 Main Street, City, Country', 'Technology', 'Software', '10 million USD'),
(2, 'Agami Tech', 'Adajan Gam', 'Technology', 'Software', '10 million USD'),
(3, 'lynx softech', 'althan Gam', 'Technology', 'Software', '3 million USD'),
(4, 'casepoint', 'adajan', 'Technology', 'Software', '40 million USD'),
(5, 'casepoint', 'adajan', 'Technology', 'Software', '40 million USD'),
(8, 'casepoint', 'adajan', 'Technology', 'Software', '40 million USD'),
(9, 'casepoint', 'adajan', 'Technology', 'Software', '40 million USD'),
(10, 'amrat', 'surat', 'manager', 'jpdawer', '2million'),
(11, 'satish', 'ahmdabad', 'receptionist', 'jpdawer', '2million'),
(12, 'lynx', 'surat', 'Technology', 'hardware', '10 million USD'),
(13, 'lynx', 'surat', 'Technology', 'hardware', '10 million USD'),
(14, 'ibm', 'ahmdabad', 'Technology', 'hardware', '80 million USD'),
(15, 'aniket', 'bhimnagar', 'technology', 'soft', '90 crore'),
(16, 'aniket', 'bhimnagar', 'technology', 'soft', '90 crore');

-- --------------------------------------------------------

--
-- Table structure for table `company_data`
--

CREATE TABLE `company_data` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL
);

--
-- Dumping data for table `company_data`
--

INSERT INTO `company_data` (`id`, `name`) VALUES
(1, 'lynx');

-- --------------------------------------------------------

--
-- Table structure for table `EmployeeMaster`
--

CREATE TABLE `EmployeeMaster` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `Password` int DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL
);

--
-- Dumping data for table `EmployeeMaster`
--

INSERT INTO `EmployeeMaster` (`id`, `name`, `email`, `Password`, `Address`) VALUES
(2, 'amrt', 'amrat@gmail.com', 234, 'suratttt'),
(5, 'satish', 'satish@gmail.com', 123, 'surat'),
(10, 'sanjay', 'sanjay@gmail.com', 123, 'surat'),
(11, 'hitesh', 'hitesh@gmail.com', 456, 'surat'),
(12, 'aniket', 'aniket@gmail.com', 789, 'surat'),
(13, 'mukehs', 'mk@gmail.com', 789, 'surat'),
(14, 'khuhsi', 'k@gmail.com', 789, 'surat'),
(15, 'pravin', 'pr@gmail.com', 789, 'surat'),
(16, 'kunadn', 'k@gmail.com', 789, 'surat'),
(17, 'aniket', 'aniket@gmail.com', 789, 'surat');

-- --------------------------------------------------------

--
-- Table structure for table `user_mst`
--

CREATE TABLE `user_mst` (
  `id` int NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `file` varchar(255) DEFAULT NULL,
  `companyId` int NOT NULL
);

--
-- Dumping data for table `user_mst`
--

INSERT INTO `user_mst` (`id`, `email`, `password`, `file`, `companyId`) VALUES
(3, 'aniket@gmail.com', '123', 'uploads/1710580269092.c,uploads/1710580269096.o', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `companyInfo`
--
ALTER TABLE `companyInfo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `company_data`
--
ALTER TABLE `company_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `EmployeeMaster`
--
ALTER TABLE `EmployeeMaster`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_mst`
--
ALTER TABLE `user_mst`
  ADD PRIMARY KEY (`id`),
  ADD KEY `companyId` (`companyId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `companyInfo`
--
ALTER TABLE `companyInfo`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `company_data`
--
ALTER TABLE `company_data`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `EmployeeMaster`
--
ALTER TABLE `EmployeeMaster`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `user_mst`
--
ALTER TABLE `user_mst`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user_mst`
--
ALTER TABLE `user_mst`
  ADD CONSTRAINT `user_mst_ibfk_1` FOREIGN KEY (`companyId`) REFERENCES `company_data` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
