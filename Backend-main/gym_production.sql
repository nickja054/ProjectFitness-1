-- เพิ่ม USE statement เพื่อความแน่ใจ
-- USE gym_management; 

-- Table structure for table `dailymembers`
DROP TABLE IF EXISTS `dailymembers`;
CREATE TABLE `dailymembers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `code` varchar(4) NOT NULL,
  `uses_remaining` int(11) DEFAULT 2,
  `date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Table structure for table `fingerprints`
DROP TABLE IF EXISTS `fingerprints`;
CREATE TABLE `fingerprints` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fingerprint_id` int(11) NOT NULL,
  `member_id` int(11) NOT NULL,
  `template` longblob,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Table structure for table `members`
DROP TABLE IF EXISTS `members`;
CREATE TABLE `members` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `email` varchar(255) NOT NULL,
  `duration` int(11) NOT NULL,
  `originalPrice` decimal(10,2) NOT NULL,
  `points` int(11) DEFAULT 0,
  `discount` decimal(5,2) DEFAULT 0.00,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `status` enum('Active','Inactive') DEFAULT 'Active',
  `hasFingerprint` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Table structure for table `payments`
DROP TABLE IF EXISTS `payments`;
CREATE TABLE `payments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `memberId` int(11) DEFAULT NULL,
  `amount` decimal(10,2) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Table structure for table `scan_logs`
DROP TABLE IF EXISTS `scan_logs`;
CREATE TABLE `scan_logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `member_id` int(11) NOT NULL,
  `scan_time` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Table structure for table `users`
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Email` (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Table structure for table `dailyreports`
DROP TABLE IF EXISTS `dailyreports`;
CREATE TABLE `dailyreports` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `total_members` int(11) DEFAULT 0,
  `total_scans` int(11) DEFAULT 0,
  `total_payments` decimal(10,2) DEFAULT 0.00,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Sample data
INSERT INTO `dailymembers` (`name`, `amount`, `code`, `uses_remaining`, `date`) VALUES
('เบน', 100.00, '2144', 2, '2025-02-04'),
('Narongrit', 100.00, '4047', 2, '2025-02-08');

INSERT INTO `members` (`id`, `firstName`, `lastName`, `age`, `phone`, `email`, `duration`, `originalPrice`, `points`, `discount`, `startDate`, `endDate`, `status`, `hasFingerprint`) VALUES
(1, 'John', 'Doe', 25, '0123456789', 'john@example.com', 30, 1500.00, 0, 0.00, '2025-01-01', '2025-01-31', 'Active', 0),
(2, 'Jane', 'Smith', 30, '0987654321', 'jane@example.com', 60, 2800.00, 0, 0.00, '2025-01-01', '2025-03-02', 'Active', 0);

-- Insert test users (password = 123456)
INSERT INTO `users` (`Email`, `Password`, `fname`, `lname`) VALUES
('test@gym.com', '$2b$10$hRw9PuRw2ZQWaE7jpjOl7OpwkFqZ3dYvZQlwXFRRHnvoxH.bcMrGy', 'Test', 'User'),
('admin@gym.com', '$2b$10$hRw9PuRw2ZQWaE7jpjOl7OpwkFqZ3dYvZQlwXFRRHnvoxH.bcMrGy', 'Admin', 'User');