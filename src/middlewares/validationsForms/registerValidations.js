const { body } = require("express-validator");

module.exports = [

  //validamos name
  body("userName")
    .notEmpty()
    .withMessage("The name field cannot be empty.")
    .bail()
    .isLength({ min: 3 })
    .withMessage("The name must be at least 3 characters long.")
    .bail(),
  //validamos apellido
  body("userLastName")
    .notEmpty()
    .withMessage("The lastName field cannot be empty.")
    .bail()
    .isLength({ min: 3 })
    .withMessage("The lasTname must be at least 3 characters long.")
    .bail(),
  //validamos email
  body("userEmail")
    .notEmpty()
    .withMessage("¡You must enter an email!")
    .bail()
    .isEmail()
    .withMessage("¡You must enter an email!"),
  //validamos contraseña
  body("password")
    .notEmpty()
    .withMessage("¡You must enter a password!")
    .bail()
    .isLength({ min: 6 })
    .withMessage("Password field must have at least 6 characters.")
    .bail(),
  //validamos confirmar contraseña
  body("confirmPassword")
    .notEmpty()
    .withMessage("¡You must enter a confirmPassword!")
    .bail()
    .isLength({ min: 6 })
    .withMessage("confirmPassword field must have at least 6 characters.")
    .bail(),
  // validacion de imagenes!
  body("avatar")
    .custom((value, { req }) => {
      if (req.file.length === 0) {
        return false;
      } else {
        return true;
      }
    })
    .withMessage("¡You must enter an avatar!"),

];


