/*creamos base de datos*/
DROP DATABASE IF EXISTS discoverycoworking;
CREATE DATABASE discoverycoworking;
USE discoverycoworking;

  /*creamos tabla users*/
  CREATE TABLE `discoverycoworking`.`users` (
  `id_users` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(45) NULL,
  `lastName` VARCHAR(45) NULL,
  `userEmail` VARCHAR(45) NULL,
  `password` VARCHAR(255) NULL,
  `avatar` VARCHAR(255) NULL,
  `id_category` VARCHAR(15) NULL,
  `id_membership` INT NULL,
  PRIMARY KEY (`id_users`));

  /*creamos usuario administrador y usuario comun de prueba*/

  INSERT INTO users (id_users,userName,lastName,userEmail,password,avatar,id_category,id_membership)
  VALUE (default, 'Matias', 'Canziani', 'mcanziani12@gmail.com', '$2a$10$N0n7vECkmAnkKFLiKLBf6eHmtVxTcuFgCUacMUJX9/xj3r/.yS6Ti', 'avatar-1661947101571.jpg', '1', NULL );

   INSERT INTO users (id_users,userName,lastName,userEmail,password,avatar,id_category,id_membership)
  VALUE (default, 'Javier', 'Amarilla', 'javi@javi.com', '$2a$10$N0n7vECkmAnkKFLiKLBf6eHmtVxTcuFgCUacMUJX9/xj3r/.yS6Ti', 'avatar-1661947101572.jpg', '1', NULL );

/*----------------------------------------------------------------------------------------------------------------------------------------------*/  

  /*creamos tabla de membership*/

     CREATE TABLE `discoverycoworking`.`memberships` (
  `id_membership` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `details` VARCHAR(100) NULL,
  `id_services` INT NULL,
  `price` INT NULL,
  `img` VARCHAR(255) NULL,
  PRIMARY KEY (`id_membership`));

  /*creamos las 4 membresias*/

   INSERT INTO memberships (id_membership,name,details,id_services,price,img)
  VALUE (default, "LAB", "Focused 100% on entrepreneurs and technology startups.", 1, 150, "lab.jpg");

    INSERT INTO memberships (id_membership,name,details,id_services,price,img)
  VALUE (default, "FLEX", "Shared space for mobile professionals.", 2, 300, "flex.jpg");

    INSERT INTO memberships (id_membership,name,details,id_services,price,img)
  VALUE (default, "DESKTOP", "You always have your fixed desk waiting for you.", 3, 500, "desktop.jpg");

    INSERT INTO memberships (id_membership,name,details,id_services,price,img)
  VALUE (default, "OFFICE", "Your private and equipped office for teams of 4 to 50 people.", 4, 750, "office.jpg");

/*----------------------------------------------------------------------------------------------------------------------------------------------*/  

  /*creamos tabla pivot de user_membership*/

  CREATE TABLE `discoverycoworking`.`user_membership` (
  `id_user_membership` INT NOT NULL AUTO_INCREMENT,
  `id_membership` INT NULL,
  `id_user` INT NULL,
  PRIMARY KEY (`id_user_membership`));

  /*creamos tabla category*/

CREATE TABLE `discoverycoworking`.`category` (
  `id_category` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id_category`));

  INSERT INTO category (id_category,name)
  VALUE (default, "admin");
    INSERT INTO category (id_category,name)
  VALUE (default, "user");

/*----------------------------------------------------------------------------------------------------------------------------------------------*/  

    /*creamos tabla services*/

CREATE TABLE `discoverycoworking`.`services` (
  `id_services` INT NOT NULL AUTO_INCREMENT,
  `service` VARCHAR(45) NULL,
   `id_membership` INT NULL,
  PRIMARY KEY (`id_services`));

  /*services de LAB*/
  INSERT INTO services (id_services,service,id_membership)
  VALUE (default,"24x7 access",1);
   INSERT INTO services (id_services,service,id_membership)
  VALUE (default,"Break with coffee, infusions, cookies and fruit free of charge",1);
   INSERT INTO services (id_services,service,id_membership)
  VALUE (default,"Use of all shared coworking spaces",1);
   INSERT INTO services (id_services,service,id_membership)
  VALUE (default,"including living room, kitchen,ping pong and garden.",1);
   INSERT INTO services (id_services,service,id_membership)
  VALUE (default,"Access to innovative and inspiring events.",1);
   INSERT INTO services (id_services,service,id_membership)
  VALUE (default, "Terrace and internal garden.",1);

  /*services de FLEX*/
   INSERT INTO services (id_services,service,id_membership)
  VALUE (default,"Access business days, Monday to Friday from 8:30 a.m. to 7:30 p.m.",2);
   INSERT INTO services (id_services,service,id_membership)
  VALUE (default,"Break with coffee, infusions, cookies and fruit free of charge.",2);
   INSERT INTO services (id_services,service,id_membership)
  VALUE (default,"Use of all shared coworking spaces, including living room, kitchen, ping pong and garden.",2);
   INSERT INTO services (id_services,service,id_membership)
  VALUE (default,"Access to innovative and inspiring events.",2);
   INSERT INTO services (id_services,service,id_membership)
  VALUE (default,"Terrace and internal garden available.",2);
    INSERT INTO services (id_services,service,id_membership)
  VALUE (default,"Free hours for use of meeting rooms.",2);

  /*services de DESKTOP*/
    INSERT INTO services (id_services,service,id_membership)
  VALUE (default,"Use of all shared coworking spaces, including living room, kitchen, ping pong and garden.",3);
   INSERT INTO services (id_services,service,id_membership)
  VALUE (default,"Dedicated desk with ergonomic Haworth chair and locked storage space.",3);
   INSERT INTO services (id_services,service,id_membership)
  VALUE (default,"Break with coffee, infusions, cookies and fruit free of charge.",3);
   INSERT INTO services (id_services,service,id_membership)
  VALUE (default,"Terrace and internal garden available.",3);
   INSERT INTO services (id_services,service,id_membership)
  VALUE (default,"Free hours for use of meeting rooms.",3);
    INSERT INTO services (id_services,service,id_membership)
  VALUE (default,"Access to innovative and inspiring events.",3);

  /*services de office*/
   INSERT INTO services (id_services,service,id_membership)
  VALUE (default,"24x7 access.",4);
   INSERT INTO services (id_services,service,id_membership)
  VALUE (default,"Private and furnished offices with modern equipment including desks",4);
   INSERT INTO services (id_services,service,id_membership)
  VALUE (default,"Haworth ergonomic chair and storage space.",4);
   INSERT INTO services (id_services,service,id_membership)
  VALUE (default,"Use of all shared coworking spaces, including living room, kitchen, ping pong and garden.",4);
   INSERT INTO services (id_services,service,id_membership)
  VALUE (default,"Break with coffee, infusions, cookies and fruit free of charge.",4);
    INSERT INTO services (id_services,service,id_membership)
  VALUE (default,"Terrace and internal garden available.",4);
      INSERT INTO services (id_services,service,id_membership)
  VALUE (default,"Free hours for use of meeting rooms.",4);
      INSERT INTO services (id_services,service,id_membership)
  VALUE (default,"Access to innovative and inspiring events.",4);

/*----------------------------------------------------------------------------------------------------------------------------------------------*/  



