const path = require("path");
const fs = require("fs");

const membershipsFilePath = path.join(__dirname,'../database/memberships.json');
const memberships = JSON.parse(fs.readFileSync(membershipsFilePath, "utf-8"));

const mainController = {
  index:  (req, res) =>{
    if (req.session.userLoged) {
      res.render("index", {
        title: "Inicio",
        styles: "index.css",
        user: req.session.userLoged,
        memberships: memberships
      });
    } else {
      res.render("index", { title: "Inicio", styles: "index.css",memberships });
    }
  },
  carrito: (req, res) => {
    res.render("carrito", {
      title: "Carrito",
      styles: "carrito.css",
      user: req.session.userLoged,
      memberships: memberships
    } );
  }
};

module.exports = mainController;
