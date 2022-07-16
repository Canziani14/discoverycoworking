const express = require("express");
const router = express.Router();
const multer = require("multer");
const mainController = require("../controller/mainController");

router.get("/", mainController.home);


//pruebas SESSION
router.get('/pruebaSession', function (req,res){

    if(req.session.nroVisitas == undefined){
        req.session.nroVisitas = 0;
    }
    req.session.nroVisitas++;
    res.send('Session tiene el nro: '+ req.session.nroVisitas)
})
module.exports = router;
