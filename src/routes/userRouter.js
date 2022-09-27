const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");


const upload = require("../middlewares/multer/multerUsers");
const registerValidations = require("../middlewares/validationsForms/registerValidations.js");
const loginValidations = require("../middlewares/validationsForms/loginValidations");
// const unAuthMiddleware = require("../middlewares/access/UnAuthorizedMd");
// const authMiddleware = require('../middlewares/access/AuthorizedMd')

// COLEARNING

//Requiero el paquete para comparar las contraseñas  que tengo hash (Pueden instalar el paquete bcrypt o bcryptjs)
const bcrypt = require('bcryptjs');
const db = require('../database/models/');

//Aquí creo hago la asociación al módelo correspondiente
const User = db.User;

const {
    check,
    validationResult,
    body
} = require('express-validator');

router.get("/login", userController.login);

router.post('/login',loginValidations,  userController.processLogin);

router.get("/signin", userController.signin);

User.findAll()
    .then((users) => {

        router.post('/signin', upload.single('avatar'),registerValidations,
        [ 
      
        //Aquí valido si las contraseñas son iguales o no
        //El ( value ) viene a ser el valor que viaje en el name del del input del campo 
        //El valor { req } corresponde a lo que viene desde el formulario
      
        body('confirmPassword').custom((value, { req }) => {
            if (req.body.password == value) {
                return true    // Si yo retorno un true  no se muestra el error     
            } else {
                return false   // Si retorno un false si se muestra el error
            }
        }).withMessage('Las contraseñas deben ser iguales'),
        
         //Aquí obligo a que el usuario seleccione su avatar
        body('avatar').custom(function (value, { req }) {
            let ext
            if (req.file != undefined) {
                return true
            } else {
                ext = "" + path.extname(req.files[0].filename).toLowerCase();
            }
            //console.log(ext);
            if (
                ext == ".jpg" ||
                ext == ".jpeg" ||
                ext == ".png" ||
                ext == ".gif") {
                return true;
            }
            return false;
        }).withMessage('Solo debe seleccionar archivos  con extensión JPG, JPEG, PNG o GIF')],
        userController.processRegister)
})



router.get("/logout", userController.processLogout);


router.get("/contactus", userController.contactus);
router.post("/contactus", userController.contact);

// router.get("/editaccount", userController.editaccount);

// router.get("/changepassword", userController.changepassword);

router.get ("/carrito", userController.shopp);
router.get("/carrito/delete", userController.toDelete)
router.get ("/toBuy/:idMembership", userController.toBuy);
//router.post('/toBuy/:idMembership', userController.buy);
router.get("/queries", userController.queries)
router.get("/notAcces", userController.notAcces)
router.get ("/edditAccount/:id_users", userController.edditAccount)
router.put("/edditAccount/:id_users", userController.procesEdittAccount)




module.exports = router;
