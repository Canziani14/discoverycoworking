const express = require('express');
const router = express.Router();
const apiUsersController = require('../controller/apiUsersController');


// API RUTA COMPLETA>  /api/users
router.get('/apiUsers/list', apiUsersController.list)
router.get('/apiUsers/detail/:id', apiUsersController.detail)
router.post('/apiUsers/create', apiUsersController.create)
router.get('/apiUsers/delete/:id', apiUsersController.destroy)

module.exports = router;