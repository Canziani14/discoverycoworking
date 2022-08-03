const express = require("express");
const router = express.Router();

//CONTROLLER
const membershipsController = require("../controller/membershipsController");

//MIDDLEWARES
const upload = require("../middlewares/multer/multerMemberships");
const createMembershipValidations = require("../middlewares/validationsForms/createMembershipValidations");
const authMiddleware = require("../middlewares/access/AuthorizedMd");
const adminAcces = require("../middlewares/access/adminMd");


//RUTAS
router.get("/memberships", membershipsController.home);
router.get("/memberships/:nameMembership", membershipsController.dinamic);

//BASE DE DATOS
//router.get ("/memberships/list", membershipsController.list)

module.exports = router;
