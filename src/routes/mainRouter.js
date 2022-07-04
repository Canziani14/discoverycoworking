const express = require("express");
const router = express.Router();
const multer = require("multer");
const mainController = require("../controller/mainController");

router.get("/", mainController.home);

module.exports = router;
