const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

const { body } = require("express-validator")

const validateRegister = [
  //Aquí incoporé otras validaciones, para que las tengan de guía para sus proyectos
  body("name")
    .notEmpty()
    .withMessage("El campo nombre no puede estar vacío"),

  body("email")
    .notEmpty()
    .withMessage("El campo nombre no puede estar vacío").bail()
    .isEmail()
    .withMessage("Agregar un email válido"),

  //Aquí valido el Password
  body("password")
    .notEmpty()
    .withMessage("La contraseña debe tener un mínimo de 6 caractéres"),

  //Aquí valido la confimación del password dispuesto por el usuario
  body("confirm_password")
    .notEmpty()
    .withMessage(
      "La confirmación de la contraseña debe tener un mínimo de 6 caractéres"),

  //Aquí valido si las contraseñas son iguales o no
  //El ( value ) viene a ser el valor que viaje en el name del del input del campo
  //El valor { req } corresponde a lo que viene desde el formulario

  body("confirm_password")
    .custom((value, { req }) => {
      if (req.body.password == value) {
        return true; // Si yo retorno un true  no se muestra el error
      } else {
        return false; // Si retorno un false si se muestra el error
      }
    })
    .withMessage("Las contraseñas deben ser iguales"),

  //Aquí obligo a que el usuario seleccione su avatar
//   validator("avatar")
//     .custom((value, { req }) => {
//       console.log(req.file);
//       if (req.file != undefined) {
//         return true;
//       }
//       return false;
//     })
//     .withMessage(
//       "Debe elegir su avatar y debe ser un archivo con formato: .JPG ó JPEG ó PNG"
//     ),
];

router.get("/login", userController.login);

// router.post('/login', userController.loginPost);

router.get("/signin", userController.signin);

router.post('/signin', validateRegister, userController.create);

router.get("/editaccount", userController.editaccount);

router.get("/changepassword", userController.changepassword);

router.get("/contactus", userController.contactus);

module.exports = router;
