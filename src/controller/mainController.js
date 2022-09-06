const path = require("path");
const fs = require("fs");
const db = require('../database/models');

const membershipsFilePath = path.join(__dirname, '../database/memberships.json');
const memberships = JSON.parse(fs.readFileSync(membershipsFilePath, "utf-8"));

const mainController = {
  index:   function (req, res) {
    console.log('usuario en main: ',req.session.user);
    db.Membership.findAll ({
      include: [{association:"service"}]
    })
    .then(memberships => {
      res.render("index", {
        user: req.session.user,
        memberships: memberships,
        title: "Home",
        styles: "index.css",
      });
    })
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
        user: req.session.user,
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
      user: req.session.user,
      memberships: null
    })
  },
  toBuy:function (req, res) {
    res.render("users/toBuy", {
      title: "successful purchase",
      styles: "carrito.css",
      user: req.session.user,
      memberships: null
    })
  },
  
}



module.exports = mainController;
