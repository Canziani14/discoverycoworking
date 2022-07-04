const express = require ("express");
const router = express.Router();
const userController = require ("../controller/userController")






router.get('/login', userController.login);

// router.post('/login', userController.loginPost);

router.get('/signin', userController.signin);

router.get ("/editaccount", userController.editaccount);

router.get ("/changepassword", userController.changepassword);

router.get ("/carrito", userController.carrito);




// multer Storage

module.exports = router;