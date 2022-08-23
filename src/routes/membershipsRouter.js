const express = require("express");
const router = express.Router();

//CONTROLLER
const membershipsController = require("../controller/membershipsController");

//MIDDLEWARES
const upload = require("../middlewares/multer/multerMemberships");
const createMembershipValidations = require("../middlewares/validationsForms/createMembershipValidations");
const authMiddleware = require("../middlewares/access/AuthorizedMd");
const adminAcces = require("../middlewares/access/adminMd");


//BASE DE DATOS
//findall
router.get ("/memberships", membershipsController.home)

//findbypk
router.get ("/memberships/:id", membershipsController.dinamic)


module.exports = router;
