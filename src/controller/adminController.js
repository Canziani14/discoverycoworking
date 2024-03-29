const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid"); //genera ids automaticos
const { validationResult } = require("express-validator");
const db = require("../database/models");

module.exports = {
  index: (req, res) => {

    if (req.session.user.category !=null) {
      
    db.Membership.findAll()
      .then(
        memberships => {
          //console.log(memberships)
          res.render(path.join(__dirname, "../views/admin/admin"), {
            memberships: memberships,
            title: "Admin",
            styles: 'admin.css',
            user: req.session.user,
          });
        }
      )
    } else {
         res.redirect("/notAcces");
    }
  },
  create: (req, res) => {
    if (req.session.user.category !=null) {
    res.render('admin/create', {
      title:'Create membership',
      styles: "edit.css",
      user: req.session.user})
    } else {
      res.redirect("/notAcces");
 }
  },
  createProcess: (req, res) => {
    const errors = validationResult(req);
    console.log('ERRORES',errors)
    if (!errors.isEmpty()) {
      return res.render("admin/create", {
        errors: errors.mapped(),
        old: req.body,
        styles: "admin.css",
        title: "Crear Membership",
        user: req.session.user,
      });
    }
    else {
      db.Membership.create({
        name: req.body.name,
        details: req.body.details,
        services: req.body.services,
        price: req.body.price,
        img: req.file.filename
      })
        
        .then(()=> res.redirect('/admin'))

        }
    
  },
  show: (req, res) => {
    if (req.session.user.category !=null) {
    let membership = db.Membership.findByPk(req.params.idMembership);

   Promise.all([membership])
      .then((Membership) => {
        console.log('QUERES VERs:', Membership);

        return res.render('admin/detail.ejs', { 
        title:'Edit membership',
        styles: "admin.css",
        membership: Membership,
        user: req.session.user,})
      })
      .catch(error => res.send(error));
    } else {
      res.redirect("/notAcces");
 }
  },
  edit: (req, res) => {
    if (req.session.user.category !=null) {
    let membership = db.Membership.findByPk(req.params.idMembership);
    Promise.all([membership])
      .then((Membership) => {
        return res.render('admin/edit', {
        title:'Edit membership',
        styles: "edit.css",
        user: req.session.user,
        membershipAEditar: Membership, })
      })
      .catch(error => res.send(error));
    } else {
      res.redirect("/notAcces");
 }
  },
  update: (req, res) => {
    console.log("el id es",req.params.idMembership )
  db.Membership.update ({
    name:req.body.name,
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
    if (req.session.user.category !=null) {
    db.Membership.destroy({ where: { id_membership: req.params.idMembership } })
    .then(membership => {
      res.redirect('/admin')
    })
  } else {
    res.redirect("/notAcces");
}
    
  },
    
    list: function (req, res) {
      
      db.User.findAll ({
        include: [{association:"category",association:"memberships"}]
      })
      .then(users => {   
          res.render('./users/userList', {users: users,title: "User List",
          styles: "index.css",
          user: req.session.user})
      })
  
    },
};