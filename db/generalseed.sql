-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 20, 2017 at 08:57 PM
-- Server version: 5.6.12-log
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `generalseed`
--
CREATE DATABASE IF NOT EXISTS `generalseed` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `generalseed`;

-- --------------------------------------------------------

--
-- Table structure for table `gs_product`
--

CREATE TABLE IF NOT EXISTS `gs_product` (
  `int_glcode` int(11) NOT NULL AUTO_INCREMENT,
  `var_product_name` varchar(255) NOT NULL,
  `var_product_url` varchar(255) NOT NULL,
  `var_homepage_image` varchar(255) DEFAULT NULL,
  `dt_created_date` datetime NOT NULL,
  `dt_updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`int_glcode`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `gs_product`
--

INSERT INTO `gs_product` (`int_glcode`, `var_product_name`, `var_product_url`, `var_homepage_image`, `dt_created_date`, `dt_updated_date`) VALUES
(1, 'Test', 'Test', 'Home_1484936052.jpg', '2017-01-20 18:14:13', '2017-01-20 18:14:13');

-- --------------------------------------------------------

--
-- Table structure for table `gs_product_has_image`
--

CREATE TABLE IF NOT EXISTS `gs_product_has_image` (
  `int_glcode` int(11) NOT NULL AUTO_INCREMENT,
  `fk_product` int(11) NOT NULL,
  `var_image` varchar(255) DEFAULT NULL,
  `dt_created_date` datetime NOT NULL,
  `dt_updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`int_glcode`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=31 ;

--
-- Dumping data for table `gs_product_has_image`
--

INSERT INTO `gs_product_has_image` (`int_glcode`, `fk_product`, `var_image`, `dt_created_date`, `dt_updated_date`) VALUES
(26, 1, 'Chrysanthemum1484944215.jpg', '2017-01-20 20:30:15', '2017-01-20 20:30:15'),
(27, 1, 'Desert1484944216.jpg', '2017-01-20 20:30:16', '2017-01-20 20:30:16'),
(28, 1, 'Hydrangeas1484944216.jpg', '2017-01-20 20:30:16', '2017-01-20 20:30:16'),
(29, 1, 'Lighthouse1484944940.jpg', '2017-01-20 20:42:20', '2017-01-20 20:42:20'),
(30, 1, 'Tulips1484944976.jpg', '2017-01-20 20:42:56', '2017-01-20 20:42:56');

-- --------------------------------------------------------

--
-- Table structure for table `gs_user`
--

CREATE TABLE IF NOT EXISTS `gs_user` (
  `int_glcode` int(11) NOT NULL AUTO_INCREMENT,
  `var_username` varchar(255) NOT NULL,
  `var_email` varchar(255) NOT NULL,
  `var_password` varchar(255) NOT NULL,
  `var_fname` varchar(255) NOT NULL,
  `var_lname` varchar(255) NOT NULL,
  `bint_phone` bigint(20) DEFAULT NULL,
  `var_image` varchar(255) NOT NULL,
  `txt_address` text,
  `dt_dob` date DEFAULT NULL,
  `dt_created_date` datetime NOT NULL,
  `dt_updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`int_glcode`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `gs_user`
--

INSERT INTO `gs_user` (`int_glcode`, `var_username`, `var_email`, `var_password`, `var_fname`, `var_lname`, `bint_phone`, `var_image`, `txt_address`, `dt_dob`, `dt_created_date`, `dt_updated_date`) VALUES
(1, 'Admin', 'admin@admin.com', 'e6e061838856bf47e1de730719fb2609', 'Admin', 'admin', 9727190205, 'PROFILE_1473188941.jpg', 'Test Address', '1994-05-19', '2016-09-06 00:00:00', '2016-10-13 19:45:25');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
