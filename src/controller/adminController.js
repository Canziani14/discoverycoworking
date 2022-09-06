const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid"); //genera ids automaticos
const { validationResult } = require("express-validator");
const db = require("../database/models");

module.exports = {
  index: (req, res) => {
    db.Membership.findAll()
      .then(
        memberships => {
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
        img: req.file.filename
      })

        .then(function (memberships) {
          res.render("admin/admin.ejs", {
            memberships: memberships,
            title: "Memberships",
            styles: "membership.css",
            user: req.session.userLoged,
          });
        })
    }
  },
  show: (req, res) => {
    let membership = db.Membership.findByPk(req.params.idMembership, { include: [{ association: 'service' }] });
    let service = db.Service.findAll();
    Promise.all([membership, service])
      .then(([Membership, Service]) => {
        return res.render('admin/detail.ejs', { membership: Membership, service: Service })
      })
      .catch(error => res.send(error));
  },
  edit: (req, res) => {
    let membership = db.Membership.findByPk(req.params.idMembership, { include: [{ association: 'service' }] });
    let service = db.Service.findAll();
    Promise.all([membership, service])
      .then(([Membership, Service]) => {
        return res.render('admin/edit.ejs', { membershipAEditar: Membership, service: Service })
      })
      .catch(error => res.send(error));
  },
  update: (req, res) => {
  db.Membership.update ({
    name:req.body.nombre,
    details: req.body.details,
    services : req.body.services,
    price: req.body.price,
    img: req.file ? req.file.filename : req.body.oldImagen,
}, {
    where: {
        id_membership:req.params.idMembership
    }
})
.then(()=> res.redirect('/admin'))
.catch(error =>res.send(error))
},


  destroy: (req, res) => {
    db.Membership.destroy({ where: { id_membership: req.params.idMembership } })
    res.redirect('/memberships')
  },

};