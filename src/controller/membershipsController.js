const path = require("path");
const fs = require("fs");
const db = require('../database/models');
const { log } = require("console");




const membershipsController = {
 
  //BASE DE DATOS
  home: function (req, res) {
    db.Membership.findAll ()
    .then(memberships => {
      res.render("products/memberships", {
        user: req.session.user,
        memberships: memberships,
        title: "Memberships",
        styles: "membership.css",
      });
    })
  },

  dinamic: function (req, res) {
    let id = req.params.id;
    db.Membership.findByPk (id)
    .then (function (membership){

      res.render ("products/membershipdinamic",{
        membership: membership,
        title: "Memberships",
        styles: "membershipDinamic.css",
        user: req.session.user,
      });
      
    })     

  },


};


module.exports = membershipsController;
