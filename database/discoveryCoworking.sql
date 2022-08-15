CREATE SCHEMA `discoverycoworking`  DEFAULT CHARACTER SET utf8mb4 ;

CREATE TABLE `discoverycoworking`.`category` (
  `id_category` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id_category`));
  
  CREATE TABLE `discoverycoworking`.`users` (
  `id_users` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(45) NULL,
  `userEmail` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `avatar` VARCHAR(45) NULL,
  `category` VARCHAR(15) NULL,
  PRIMARY KEY (`id_users`));
  
  CREATE TABLE `discoverycoworking`.`user_membership` (
  `id_user_membership` INT NOT NULL AUTO_INCREMENT,
  `id_membership` INT NULL,
  `id_user` INT NULL,
  PRIMARY KEY (`id_user_membership`));
  
    CREATE TABLE `discoverycoworking`.`membership` (
  `id_membership` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `details` VARCHAR(45) NULL,
  `id_services` INT NULL,
  `price` INT NULL,
  `img` VARCHAR(15) NULL,
  `id_User` INT NULL,
  PRIMARY KEY (`id_membership`));

CREATE TABLE `discoverycoworking`.`services` (
  `id_services` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
   `id_membership` INT NULL,
  PRIMARY KEY (`id_services`));
  
  
  
  
  
  
