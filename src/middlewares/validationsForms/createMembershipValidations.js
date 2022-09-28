const { body } = require("express-validator");

const membershipsValidations = [
  //validamos name
  body("name")
    .notEmpty()
    .withMessage("el campo name esta vacío")
    .bail(),
//validamos price
  body("price").notEmpty().withMessage("El campo precio está vacio").bail(),
//validamos details
  body("details")
    .notEmpty()
    .withMessage("El campo details está vacio")
    .bail(),
//validamos services
  body("services").notEmpty().withMessage("El campo services está vacio").bail(),

  // validacion de imagenes!
     body("imgMembership")
     .custom((value, { req }) => {
       if (req.file.length === 0) {
         return false;
       } else {
         return true;
       }
     })
     .withMessage("Debe ingresar una imagen"),
];

module.exports = membershipsValidations;