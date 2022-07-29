const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

const upload = require("../middlewares/multer/multerUsers");
const registerValidations = require("../middlewares/validationsForms/registerValidations.js");
const loginValidations = require("../middlewares/validationsForms/loginValidations");
const unAuthMiddleware = require("../middlewares/access/UnAuthorizedMd");
const authMiddleware = require('../middlewares/access/AuthorizedMd')



router.get("/login", unAuthMiddleware, userController.login);

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

module.exports = router;
