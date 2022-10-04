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
  `category` VARCHAR(15) NULL,
  `membership` VARCHAR(25) NULL,
  PRIMARY KEY (`id_users`));

  /*creamos usuario administrador y usuario comun de prueba*/

  INSERT INTO users (id_users,userName,lastName,userEmail,password,avatar,category,membership)
  VALUE (default, 'Matias ', 'Canziani', 'mcanziani12@gmail.com', '$2a$10$N0n7vECkmAnkKFLiKLBf6eHmtVxTcuFgCUacMUJX9/xj3r/.yS6Ti', 'avatar-1661947101571.jpg', 'admin', NULL );

   INSERT INTO users (id_users,userName,lastName,userEmail,password,avatar,category,membership)
  VALUE (default, 'Javier ', 'Amarilla', 'javi@javi.com', '$2a$10$N0n7vECkmAnkKFLiKLBf6eHmtVxTcuFgCUacMUJX9/xj3r/.yS6Ti', 'avatar-1661947101572.jpg', 'admin', NULL ); 
  
  INSERT INTO users (id_users,userName,lastName,userEmail,password,avatar,category,membership)
  VALUE (default, 'Tulio ', 'Castillo', 'tuliocastillo@gmail.com', '$2a$10$N0n7vECkmAnkKFLiKLBf6eHmtVxTcuFgCUacMUJX9/xj3r/.yS6Ti', 'avatar-1661947101572.jpg', 'admin', NULL );
  
  INSERT INTO users (id_users,userName,lastName,userEmail,password,avatar,category,membership)
  VALUE (default, 'Gabriel ', 'Garcia', 'gabrielgarcia@gmail.com', '$2a$10$N0n7vECkmAnkKFLiKLBf6eHmtVxTcuFgCUacMUJX9/xj3r/.yS6Ti', 'avatar-1661947101572.jpg', 'admin', NULL );

  /*creamos tabla de membership*/

     CREATE TABLE `discoverycoworking`.`memberships` (
  `id_membership` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `details` VARCHAR(100) NULL,
  `services` VARCHAR(600) NULL,
  `price` INT NULL,
  `img` VARCHAR(55) NULL,
  PRIMARY KEY (`id_membership`));

  /*creamos las 4 membresias*/

   INSERT INTO memberships (id_membership,name,details,services,price,img)
  VALUE (default, "LAB", "Focused 100% on entrepreneurs and technology startups.",
 "
  1- 24x7 access. \n
 2- Break with coffee, infusions, cookies and fruit free of charge.\n
 3- Use of all shared coworking spaces ,including living room, kitchen,ping pong and garden.\n
 4- Terrace and internal garden. \n ",
  150, "lab.jpg");
 
 
  

    INSERT INTO memberships (id_membership,name,details,services,price,img)
  VALUE (default, "FLEX", "Shared space for mobile professionals.",
  "
  1- Access business days, Monday to Friday from 8:30 a.m. to 7:30 p.m. \n
  2- Break with coffee, infusions, cookies and fruit free of charge.  \n
  3- Use of all shared coworking spaces, including living room, kitchen, ping pong and garden. \n 
  4- Access to innovative and inspiring events Free hours for use of meeting rooms. \n
  "
  ,300, "flex.jpg");

    INSERT INTO memberships (id_membership,name,details,services,price,img)
  VALUE (default, "DESKTOP", "You always have your fixed desk waiting for you.",
  "
  1- Use of all shared coworking spaces, including living room, kitchen, ping pong and garden. \n
  2- Dedicated desk with ergonomic Haworth chair and locked storage space. \n
  3- Break with coffee, infusions, cookies and fruit free of charge.  \n
  4- Terrace and internal garden available.  \n
  5- Free hours for use of meeting rooms.  \n
  6- Access to innovative and inspiring events.
  "
  , 500, "desktop.jpg");

    INSERT INTO memberships (id_membership,name,details,services,price,img)
  VALUE (default, "OFFICE", "Your private and equipped office for teams of 4 to 50 people.",
  "
  1- 24x7 access. \n
  2- Private and furnished offices with modern equipment including desks. \n
  3- Haworth ergonomic chair and storage space. \n
  4- Use of all shared coworking spaces, including living room, kitchen, ping pong and garden. \n
  5- Break with coffee, infusions, cookies and fruit free of charge. \n
  6- Terrace and internal garden available.  \n
  7- Free hours for use of meeting rooms. \n
  8- Access to innovative and inspiring events.
  "
  , 750, "office.jpg");

/*----------------------------------------------------------------------------------------------------------------------------------------------*/  

  /*creamos tabla contact us*/

  CREATE TABLE `discoverycoworking`.`contactus` (
  `id_contactus` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `comments` VARCHAR(255) NULL,
  PRIMARY KEY (`id_contactus`));

 INSERT INTO contactus (id_contactus,name,email,comments)
 VALUE (default, "Pedro Garcia", "pgarcia@gmail.com", "queria mas informacion sobre las membresias");
  INSERT INTO contactus (id_contactus,name,email,comments)
 VALUE (default, "Homero Simpson", "hsimpson@gmail.com", "queria mas informacion sobre la membresia office");
  INSERT INTO contactus (id_contactus,name,email,comments)
 VALUE (default, "Bart Simpson", "bsimpson@gmail.com", "queria mas informacion sobre la membresia lab")

/*----------------------------------------------------------------------------------------------------------------------------------------------*/  
 



