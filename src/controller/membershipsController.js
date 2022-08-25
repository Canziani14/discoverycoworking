const path = require("path");
const fs = require("fs");
const db = require('../../database/models');
const { log } = require("console");




const membershipsController = {
 
 

  //BASE DE DATOS
  home: function (req, res) {
    db.Membership.findAll ({
      include: [{association:"service"}]
    })
    .then(memberships => {
      res.render("products/memberships", {
        memberships: memberships,
        title: "Memberships",
        styles: "membership.css",
        user: req.session.userLoged,
      });
    })
  },

  dinamic: function (req, res) {
    let id = req.params.id;
    db.Membership.findByPk (id, {
      include: [{association:"service"}]
    })
    .then (function (membership){
<<<<<<< HEAD
      console.log(membership)
=======
      
>>>>>>> 554b9086d040d5a7f64f976e35849d666926ec7f
      res.render ("products/membershipdinamic",{
        membership: membership,
        title: "Memberships",
        styles: "membership.css",
        user: req.session.userLoged,
      });
      
    })     

  },


};


module.exports = membershipsController;
