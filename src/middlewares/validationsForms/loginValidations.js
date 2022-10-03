const { body } = require("express-validator");

const loginValidations= [
  body("email")
    .notEmpty()
    .withMessage("¡You must enter an email!")
    .bail()
    .isEmail()
    .withMessage("¡You must enter an email!")
    .bail(),
    
  body("password")
    .notEmpty()
    .withMessage("¡You must enter a passwor!")
    .bail()
    .isLength({ min: 6 })
    .withMessage("Password field must have at least 6 characters.")
    .bail(),

];

module.exports=loginValidations;
