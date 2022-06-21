const express = require ("express");
const router = express.Router()
const mainController = require ("../controller/mainController")


router.get ("/", mainController.home);

router.get ("/login", mainController.login);

router.get ("/signin", mainController.signin);

router.get ("/editaccount", mainController.editaccount);

router.get ("/changepassword", mainController.changepassword);

router.get ("/carrito", mainController.carrito);



module.exports = router;


