const express = require ("express");
const router = express.Router()
const membershipsController = require ("../controller/membershipsController");

router.get('/', membershipsController.home);

// Ruta dinamica
//router.get('/:idMembership', membershipsController.dinamic);

router.get('/lab', membershipsController.lab);

router.get('/flex', membershipsController.flex);

router.get('/office', membershipsController.office);

router.get('/desk', membershipsController.desk);




module.exports = router;