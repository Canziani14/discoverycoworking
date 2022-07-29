const { body } = require("express-validator");

const membershipsValidations = [
  body("name")
    .notEmpty()
    .withMessage("el campo name esta vacío")
    .bail(),

  body("price").notEmpty().withMessage("El campo precio está vacio").bail(),

  body("details")
    .notEmpty()
    .withMessage("El campo details está vacio")
    .bail(),

  body("services").notEmpty().withMessage("El campo services está vacio").bail(),

  // validacion de imagenes!
  body("imgMembership")
    .custom((value, { req }) => {
      if (req.files.length === 0) {
        return false;
      } else {
        return true;
      }
    })
    .withMessage("Debe ingresar una imagen"),
];

module.exports = membershipsValidations;