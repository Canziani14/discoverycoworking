const path = require("path");
const fs = require("fs");


const membershipsFilePath = path.join(__dirname,'../database/memberships.json');
const memberships = JSON.parse(fs.readFileSync(membershipsFilePath, "utf-8"));


const membershipsController = {

  
  home: function (req, res) {
    if (req.session.userLoged) {
      res.render("products/memberships", {
        memberships: memberships,
        title: "Memberships",
        styles: "membership.css",
        user: req.session.userLoged,
      });
    } else {
      res.render("products/memberships", {
        memberships: memberships,
        title: "Memberships",
        styles: "membership.css",
      });
    }
  },
  dinamic: function (req, res) {
    
    let nameMembership = req.params.nameMembership;

    const filteredMembership = memberships.find((membership)=>{
      return membership.name == nameMembership;
    })

    if (req.session.userLoged) {
      res.render("products/membershipdinamic", {
        title: filteredMembership.name,
        styles: "membership.css",
        membership: filteredMembership,
        user: req.session.userLoged,
      });
    } else {
      res.render("products/membershipdinamic", {
        title: filteredMembership.title,
        styles: "membership.css",
        membership: filteredMembership,
      });
    }
  },
  getAllProducts: () => {
    return membershipsDelArchivoJson;
  },

  /*list: function (req, res) {
    db.Membership.findAll ()
    .then(memberships => {
        res.render('./users/userList', {memberships: memberships})
    })
  }*/
};

module.exports = membershipsController;
