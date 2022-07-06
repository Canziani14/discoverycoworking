const express = require("express");
const router = express.Router();
const membershipsController = require("../controller/membershipsController");

router.get("/memberships", membershipsController.home);
router.get("/memberships/:nameMembership", membershipsController.dinamic);
router.get("/carrito", membershipsController.carrito);

module.exports = router;
