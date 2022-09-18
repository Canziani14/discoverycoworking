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

router.post('/login', loginValidations, userController.processLogin);

router.get("/signin", userController.signin);

User.findAll()
    .then((users) => {

        router.post('/signin', upload.single('avatar'),  [
            //Aquí incoporé otras validaciones, para que las tengan de guía para sus proyectos  
            check('userName').isLength({
                min: 1
            }).withMessage('El campo nombre no puede estar vacío'),
            check('userLastName').isLength({
                min: 1
            }).withMessage('El campo apellido no puede estar vacío'),
            check('userEmail').isEmail().withMessage('Agregar un email válido'),

            //Aquí valido el Password   
            check('password').isLength({ min: 6 }).withMessage('La contraseña debe tener un mínimo de 6 caractéres al menos una letra y un número'),

            //Aquí valido la confimación del password dispuesto por el usuario
            check('confirmPassword').isLength({ min: 6 }).withMessage('La confirmación de la contraseña debe tener un mínimo de 6 caractéres'),

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
            }).withMessage('Solo debe seleccionar archivos  con extensión JPG, JPEG, PNG o GIF')
        ], userController.processRegister)
    })
    .catch((errors) => {
        console.log(errors);
    })



router.get("/logout", userController.processLogout);


router.get("/contactus", userController.contactus);
router.post("/contactus", userController.contact);

// router.get("/editaccount", userController.editaccount);

// router.get("/changepassword", userController.changepassword);

router.get ("/carrito", userController.shopp);
// router.get('/carrito/:nameMembership', mainController.carrito);
router.get ("/toBuy/:idMembership", userController.toBuy);
//router.post('/toBuy/:idMembership', userController.buy);



module.exports = router;
