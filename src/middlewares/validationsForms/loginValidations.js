const { body } = require("express-validator");

const loginValidations= [
  body("email")
    .notEmpty()
    .withMessage("¡Debe ingresar un email!")
    .bail()
    .isEmail()
    .withMessage("¡Debe ingresar un email!")
    .bail(),
    
  body("password")
    .notEmpty()
    .withMessage("¡Debe ingresar una contraseña!")
    .bail()
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener 6 caracteres como mínimo.")
    .bail(),

];

module.exports=loginValidations;
