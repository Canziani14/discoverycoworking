const express = require('express');
const router = express.Router();
const apiMembershipsController = require('../controller/apiMembershipsController');

router.get('/apiMemberships/list', apiMembershipsController.list);
router.get('/apiMemberships/detail/:id', apiMembershipsController.detail )
router.get('/apiMemberships/search', apiMembershipsController.search);
//router.get('/categories', apiMembershipsController.categories);
router.get('/apiMemberships/index', apiMembershipsController.index);
// router.get('/index/:id', apiProductsController.index);

router.patch('/apiMemberships/edit/:id', apiMembershipsController.edit);

module.exports = router;