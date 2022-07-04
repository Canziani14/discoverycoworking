const express = require ("express");
const router = express.Router()
const membershipsController = require ("../controller/membershipsController");

router.get('/memberships', membershipsController.home);

// Ruta dinamica
router.get('/memberships/:nameMembership', membershipsController.dinamic);





module.exports = router;
