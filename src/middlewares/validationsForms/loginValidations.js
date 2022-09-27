const { body } = require("express-validator");

const loginValidations= [
  body("email")
    .notEmpty()
    .withMessage("¡Debe ingresar un email!")
    .bail()
    .isEmail()
    .withMessage("debe ingresar un email valido")
    .bail(),
    
  body("password")
    .notEmpty()
    .withMessage("debe ingresar una contraseña")
    .bail()
    .isLength({ min: 6 })
    .withMessage("la contraseña debe tener 6 caracteres minimo")
    .bail(),

];

module.exports=loginValidations;
