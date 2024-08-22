-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 26, 2023 at 08:52 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `amandb`
--

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `course_id` int(11) NOT NULL,
  `course_title` varchar(30) NOT NULL,
  `course_details` varchar(30) NOT NULL,
  `age_group` varchar(10) NOT NULL,
  `duration_period` varchar(20) NOT NULL,
  `introduction` varchar(30) NOT NULL,
  `keywords` varchar(30) NOT NULL,
  `course_effective_price` varchar(20) NOT NULL,
  `about_course_details` varchar(50) NOT NULL,
  `course_description` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`course_id`, `course_title`, `course_details`, `age_group`, `duration_period`, `introduction`, `keywords`, `course_effective_price`, `about_course_details`, `course_description`) VALUES
(1, 'Reactjs', '', '20', '', 'ASDFGHJK', 'dtftgyhuji', '2000', 'sdfghjkjhgfdertyuikdfghj', 'drtfyghjkvj');

-- --------------------------------------------------------

--
-- Table structure for table `material`
--

CREATE TABLE `material` (
  `material_id` int(11) NOT NULL,
  `course_title` varchar(30) NOT NULL,
  `module_title` varchar(30) NOT NULL,
  `material_title` varchar(30) NOT NULL,
  `material_details` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `material`
--

INSERT INTO `material` (`material_id`, `course_title`, `module_title`, `material_title`, `material_details`) VALUES
(1, 'php', 'gvjhgu', 'ghjggj', 'vfedgrt'),
(2, 'java', 'dsgksjhgfus', 'dfjsdjgyu', 'asdfghjk'),
(3, 'java', 'dsgksjhgfus', 'dfjsdjgyu', 'asdfghjk'),
(4, 'reactsj', 'frameowrk', 'javafile', 'frtydju');

-- --------------------------------------------------------

--
-- Table structure for table `module`
--

CREATE TABLE `module` (
  `module_id` int(11) NOT NULL,
  `module_title` varchar(30) NOT NULL,
  `course_title` varchar(30) NOT NULL,
  `details` varchar(30) NOT NULL,
  `number_of_questions` tinyint(4) NOT NULL,
  `number_of_chapters` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `module`
--

INSERT INTO `module` (`module_id`, `module_title`, `course_title`, `details`, `number_of_questions`, `number_of_chapters`) VALUES
(1, 'dfhggkj', 'gjyfh', 'kuguyftdfyu', 5, 5),
(2, 'framwokr', 'reatcjs', 'eyqgwethued', 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(50) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `middle_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `contact` int(100) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `address1` varchar(100) NOT NULL,
  `address2` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `pincode` int(50) NOT NULL,
  `profile_icon` varchar(100) NOT NULL,
  `role` varchar(50) NOT NULL,
  `info` varchar(100) NOT NULL,
  `status` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `first_name`, `middle_name`, `last_name`, `email`, `password`, `contact`, `gender`, `country`, `address1`, `address2`, `state`, `city`, `pincode`, `profile_icon`, `role`, `info`, `status`) VALUES
(1, 'aman', 'aman', 'jaiswal', 'aj27757@gmail.com', 'aj_27757@', 987654321, 'male', 'india', 'indore', 'kgn', 'mp', 'indore', 1001, 'aman icon', 'user', 'Fri Jun 23 2023 18:44:00 GMT+0530 (India Standard Time)', 1),
(6, 'aman', 'aman', 'jaiswal', 'aman@gmail.com', 'aj_27757@', 987654321, 'male', 'india', 'indore', 'kgn', 'mp', 'indore', 1001, 'aman icon', 'user', 'Fri Jun 23 2023 18:54:27 GMT+0530 (India Standard Time)', 1),
(9, 'aman', 'aman', 'jaiswal', 'ajay@gmail.com', 'aj_27757@', 987654321, 'male', 'india', 'indore', 'kgn', 'mp', 'indore', 1001, 'aman icon', 'user', 'Fri Jun 23 2023 19:12:32 GMT+0530 (India Standard Time)', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
