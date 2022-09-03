const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");


const upload = require("../middlewares/multer/multerUsers");
const registerValidations = require("../middlewares/validationsForms/registerValidations.js");
const loginValidations = require("../middlewares/validationsForms/loginValidations");
// const unAuthMiddleware = require("../middlewares/access/UnAuthorizedMd");
// const authMiddleware = require('../middlewares/access/AuthorizedMd')

// COLEARNING

//Requiero el paquete para comparar las contraseñas  que tengo hash (Pueden instalar el paquete bcrypt o bcryptjs)
const bcrypt = require('bcryptjs');
const db = require('../database/models/');

//Aquí creo hago la asociación al módelo correspondiente
const User = db.User;




router.get("/login", userController.login);

router.post('/login', loginValidations ,userController.processLogin);

router.get("/signin", userController.signin);

router.post(
  "/signin",
  upload.single("avatar"),
  registerValidations,
  userController.processRegister
);

router.get("/logout", userController.processLogout);

router.get("/editaccount", userController.editaccount);

router.get("/changepassword", userController.changepassword);

router.get("/contactus", userController.contactus);

//BASE DE DATOS

router.get("/users", userController.list)


module.exports = router;
