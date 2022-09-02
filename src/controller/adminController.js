const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid"); //genera ids automaticos
const { validationResult } = require("express-validator");
const db = require("../database/models");

// const membershipsFilePath = path.join(__dirname, '../database/memberships.json');
// const memberships = JSON.parse(fs.readFileSync(membershipsFilePath, "utf-8"));

module.exports = {
  index: (req, res) => {
    db.Membership.findAll()
    .then(
      memberships =>{
        res.render(path.join(__dirname, "../views/admin/admin"), {
          memberships: memberships,
          title: "Admin",
          styles: 'admin.css',
          user: req.session.userLoged,
        });
      }
    )

   
  },
  create: (req, res) => {  

      res.render("admin/create"), {
        title: "Admin create",
        styles: "admin.css",
        user: req.session.userLoged,
      };
  },
  createProcess: (req, res) => {
    const errors = validationResult(req);
    
    if (errors.isEmpty()) {
      return res.render("admin/create", {
        errors: errors.mapped(),
        old: req.body,
        styles: "admin.css",
        title: "Crear Membership",
        user: req.session.userLoged,
        
      });
    }
    else {
      console.log(req.body)
      db.Membership.create({
        name: req.body.name,
        details: req.body.details,
        services: req.body.services,
        price: req.body.price,
      img:req.file.filename})

      .then ( function(result) {
        res.render("products/memberships", {
          memberships: memberships,
          title: "memberships",
          styles: "membership.css",
          user: req.session.userLoged,
          
        });
      })
    }
  },
  show: (req, res) => {
    let membership = db.Membership.findByPk(req.params.idMembership, {include: [{association: 'service'}]});
    let service = db.Service.findAll();
    // console.log('membership:', JSON.stringify(membership))
    Promise.all([membership, service])
        .then(([Membership, Service]) => {
          // console.log('membershipPost:', Membership)
            return res.render('admin/detail.ejs', {membership: Membership, service:Service})
        })
        .catch(error => res.send(error));
  },
  edit: (req, res) => {
    let membership = db.Membership.findByPk(req.params.idMembership, {include: [{association: 'service'}]});
        let service = db.Service.findAll();
        Promise.all([membership, service])
            .then(([Membership, Service]) => {
                return res.render('admin/edit.ejs', {membershipAEditar: Membership, service:Service})
            })
            .catch(error => res.send(error));

        
    },

  //falta modicificar con el html para que traiga los values 
  update: (req, res) => {
    let updateMembership = {
      name: req.body.name,
      details: req.body.details,
      services: req.body.services,
      prince: req.body.price,
      img: req.body.imagen
  }
  
  db.Membership.update(updateMembership, {where:{id: req.params.id}})
  res.redirect('/memberships')
  },

  destroy: (req, res) => {
    db.Membership.destroy({where:{id: req.params.id}})
    res.redirect('/memberships')
  },
   
};
