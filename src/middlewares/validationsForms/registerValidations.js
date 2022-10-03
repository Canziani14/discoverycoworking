const { body } = require("express-validator");

module.exports = [

  //validamos name
  body("userName")
    .notEmpty()
    .withMessage("El campo nombre no puede estar vacio")
    .bail()
    .isLength({ min: 3 })
    .withMessage("El nombre es muy corto")
    .bail(),
  //validamos apellido
  body("userLastName")
    .notEmpty()
    .withMessage("el campo apellido esta vacío")
    .bail()
    .isLength({ min: 3 })
    .withMessage("El apellido es muy corto")
    .bail(),
  //validamos email
  body("userEmail")
    .notEmpty()
    .withMessage("debe ingresar un email")
    .bail()
    .isEmail()
    .withMessage("debe ingresar un email valido"),
  //validamos contraseña
  body("password")
    .notEmpty()
    .withMessage("debe ingresar una contraseña")
    .bail()
    .isLength({ min: 6 })
    .withMessage("la contraseña debe tener 6 caracteres minimo")
    .bail(),
  //validamos confirmar contraseña
  body("confirmPassword")
    .notEmpty()
    .withMessage("debe ingresar una contraseña")
    .bail()
    .isLength({ min: 6 })
    .withMessage("la contraseña debe tener 6 caracteres minimo")
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
    .withMessage("Debe ingresar un avatar de perfil"),

];


