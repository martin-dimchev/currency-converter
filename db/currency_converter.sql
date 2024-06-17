-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 17, 2024 at 05:25 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `currency_converter`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(10) NOT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES
(1, 'test', 'testov', 'cisco'),
(11, 'stanislav', '123', 'velev@gmail.com'),
(12, 'martin', '123', 'martin@gmail.com'),
(13, 'iskren', '123', 'iskren@gmail.com'),
(14, 'gosho', '123', 'gosho@gmail.com'),
(16, 'petar', 'cisco', 'petar@abv.bg');

-- --------------------------------------------------------

--
-- Table structure for table `accounts_history`
--

CREATE TABLE `accounts_history` (
  `id` int(11) NOT NULL,
  `converted_from` char(3) NOT NULL,
  `from_amount` decimal(10,2) NOT NULL,
  `converted_to` char(3) NOT NULL,
  `to_amount` decimal(10,2) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `account_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `currencies`
--

CREATE TABLE `currencies` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `currency_code` char(3) NOT NULL,
  `currency_value` int(11) NOT NULL DEFAULT 1,
  `value_in_usd` double(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `currencies`
--

INSERT INTO `currencies` (`id`, `name`, `currency_code`, `currency_value`, `value_in_usd`) VALUES
(3, 'Bulgarian Lev', 'BGN', 1, 0.55),
(4, 'United States Dollar', 'USD', 1, 1.00),
(5, 'Euro', 'EUR', 1, 1.18),
(6, 'Japanese Yen', 'JPY', 1, 0.01),
(7, 'British Pound', 'GBP', 1, 1.38),
(8, 'Australian Dollar', 'AUD', 1, 0.75),
(9, 'Canadian Dollar', 'CAD', 1, 0.79),
(10, 'Swiss Franc', 'CHF', 1, 1.08),
(11, 'Chinese Yuan Renminbi', 'CNY', 1, 0.16),
(12, 'Swedish Krona', 'SEK', 1, 0.12),
(13, 'New Zealand Dollar', 'NZD', 1, 0.72),
(14, 'Mexican Peso', 'MXN', 1, 0.05),
(15, 'Singapore Dollar', 'SGD', 1, 0.74),
(16, 'Hong Kong Dollar', 'HKD', 1, 0.13),
(17, 'Norwegian Krone', 'NOK', 1, 0.11),
(19, 'Turkish Lira', 'TRY', 1, 0.12),
(20, 'Russian Ruble', 'RUB', 1, 0.01),
(21, 'Indian Rupee', 'INR', 1, 0.01),
(22, 'Brazilian Real', 'BRL', 1, 0.19),
(23, 'South African Rand', 'ZAR', 1, 0.07);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `accounts_history`
--
ALTER TABLE `accounts_history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_account_id` (`account_id`);

--
-- Indexes for table `currencies`
--
ALTER TABLE `currencies`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `accounts_history`
--
ALTER TABLE `accounts_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- AUTO_INCREMENT for table `currencies`
--
ALTER TABLE `currencies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `accounts_history`
--
ALTER TABLE `accounts_history`
  ADD CONSTRAINT `fk_account_id` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
