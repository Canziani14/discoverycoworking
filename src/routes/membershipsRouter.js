const express = require ("express");
const router = express.Router()
const membershipsController = require ("../controller/membershipsController");

router.get('/', membershipsController.home);

// Ruta dinamica
router.get('/:nameMembership', membershipsController.dinamic);





module.exports = router;
