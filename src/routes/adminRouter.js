const express = require("express");
const router = express.Router();

const adminController = require('../controller/adminController');


router.get('/administrar', controllersAdmin.index);