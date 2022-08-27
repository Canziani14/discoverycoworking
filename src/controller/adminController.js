const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid"); //genera ids automaticos
const { validationResult } = require("express-validator");
const db = require("../database/models");

const membershipsFilePath = path.join(__dirname, '../database/memberships.json');
const memberships = JSON.parse(fs.readFileSync(membershipsFilePath, "utf-8"));

module.exports = {
  index: (req, res) => {

    res.render(path.join(__dirname, "../views/admin/admin"), {
      memberships: memberships,
      title: "Admin",
      styles: 'admin.css',
      user: req.session.userLoged,
    });
  },
  create: (req, res) => {  

    db.Membership.create({
      name: req.body.name,
      details: req.body.details,
      services: req.body.services,
      price: req.body.price,
      imgMembership: req.body.imgMembership})
   

    .then ( function(result) {
      console.log(result)
      res.render("admin/create"), {
        title: "Admin",
        styles: "admin.css",
        user: req.session.userLoged,
        
      };
    })
    
    
  },
  createProcess: (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("admin/create", {
        errors: errors.mapped(),
        old: req.body,
        styles: "admin.css",
        title: "Crear Membership",
        user: req.session.userLoged,
      });
    }
    else {
      //generamos un id
      const id = uuidv4();
      //capturamos lo que llega del formulario
      const newMembership = req.body;
      //le asignamos el id al producto
      newMembership.id = id;
      // le asignamos el array de imagenes
      newMembership.img = req.file;

      memberships.push(newMembership);

      fs.writeFileSync(membershipsFilePath, JSON.stringify(memberships, null, " "));
      res.redirect('/admin')
    }
  },
  show: (req, res) => {
    let memberships = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "../database/memberships.json"))
    );
    let nameMembership = req.params.nameMembership;
    const membershipIndex = memberships.findIndex(membership => membership.name === nameMembership)


    res.render(path.resolve(__dirname, '../views/admin/detail'), {
      membership: memberships[membershipIndex],
    })
  },
  edit: (req, res) => {
    let memberships = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "../database/memberships.json"))
    );

    const membershipName = req.params.nameMembership;
    let membershipAEditar = memberships.find(membership => membership.name == membershipName);

    res.render(path.resolve(__dirname, '../views/admin/edit'), { membershipAEditar })
  },

  //falta modicificar con el html para que traiga los values 
  update: (req, res) => {
    let updateMembership = {
      name: req.body.name,
      details: req.body.details,
      services: req.body.services,
      prince: req.body.price,
      imgMembership: req.body.imgMembership
  }
  
  db.Movie.update(updateMembership, {where:{id: req.params.id}})
  res.redirect('/memberships')
  },

  destroy: (req, res) => {
    db.Membership.destroy({where:{id: req.params.id}})
    res.redirect('/memberships')
  },
   
};
