const express = require("express");
const router = express.Router();
const multer = require("multer");
const mainController = require("../controller/mainController");

router.get("/", mainController.index);
router.get('/carrito', mainController.carrito)
module.exports = router;
