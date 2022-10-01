const express = require('express');
const router = express.Router();
const apiQueriesController = require('../controller/apiQueriesController');

router.get('/apiQueries/list', apiQueriesController.list);
router.get('/apiQueries/detail/:id', apiQueriesController.detail )
router.get('/apiQueries/search', apiQueriesController.search);
//router.get('/categories', apiMembershipsController.categories);
router.get('/apiQueries/index', apiQueriesController.index);
// router.get('/index/:id', apiProductsController.index);

router.patch('/apiQueries/edit/:id', apiQueriesController.edit);

module.exports = router;