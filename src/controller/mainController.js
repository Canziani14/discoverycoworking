const path = require("path");
const fs = require("fs");


const membershipsFilePath = path.join(__dirname, '../database/memberships.json');
const memberships = JSON.parse(fs.readFileSync(membershipsFilePath, "utf-8"));

const mainController = {
  index: (req, res) => {
    if (req.session.userLoged) {
      res.render("index", {
        title: "Inicio",
        styles: "index.css",
        user: req.session.userLoged,
        memberships: memberships
      });
    } else {
      res.render("index", { title: "Inicio", styles: "index.css", memberships });
    }
  },
  carrito: function (req, res) {

    //let idMembership = req.baseUrl

    let nameMembership = req.params.nameMembership;

    const filteredMembership = memberships.find((membership) => {
      return membership.name == nameMembership;
    })

    if (req.session.userLoged) {
      res.render("carrito", {
        title: filteredMembership.name,
        styles: "carrito.css",
        membership: filteredMembership,
        user: req.session.userLoged,
      });
    } else {
      res.render("carrito", {
        title: filteredMembership.title,
        styles: "carrito.css",
        membership: filteredMembership,
      });
    }
  },
  shopp: function (req, res) {
    res.render("users/shopp", {
      title: "Carrito",
      styles: "carrito.css",
      user: req.session.userLoged,
      memberships: null
    })
  },
  toBuy:function (req, res) {
    res.render("users/toBuy", {
      title: "successful purchase",
      styles: "carrito.css",
      user: req.session.userLoged,
      memberships: null
    })
  },
  
}



module.exports = mainController;
