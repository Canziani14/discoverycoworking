const express = require("express");
const router = express.Router();
const multer = require("multer");
const mainController = require("../controller/mainController");

router.get("/", mainController.index);
router.get ("/carrito", mainController.shopp)
router.get('/carrito/:nameMembership', mainController.carrito)
router.get ("/toBuy",mainController.toBuy)

module.exports = router;
