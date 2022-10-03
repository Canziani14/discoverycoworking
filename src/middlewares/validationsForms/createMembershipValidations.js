const { body } = require("express-validator");

const membershipsValidations = [
  //validamos name
  body("name")
    .notEmpty()
    .withMessage("The name field cannot be empty")
    .bail(),
//validamos price
  body("price").notEmpty().withMessage("The price field cannot be empty").bail(),
//validamos details
  body("details")
    .notEmpty()
    .withMessage("The details field cannot be empty")
    .bail(),
//validamos services
  body("services").notEmpty().withMessage("The services field cannot be empty").bail(),

  // validacion de imagenes!
     body("imgMembership")
     .custom((value, { req }) => {
       if (req.file.length === 0) {
         return false;
       } else {
         return true;
       }
     })
     .withMessage("You must enter an image!"),
];

module.exports = membershipsValidations;