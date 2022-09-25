const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");

const db = require('../database/models');
const User = db.User;

const userController = {
  login: function (req, res) {
    res.render("users/login", {
      title: "Login",
      styles: "login.css",
    });
  },
  processLogin: function (req, res) {
    User.findAll()
      .then((users) => {
        //Aquí guardo los errores que vienen desde la ruta, valiendome del validationResult
        let errors = validationResult(req);

        let userLogged = [];

        if (req.body.email != '' && req.body.password != '') {

          userLogged = users.filter(function (user) {
            return user.userEmail === req.body.email
          });
          console.log('USUARIO LOGGEADO', userLogged)

          if (userLogged.length > 0) {
            userLogged = users.filter(function (user) {
              return user.userEmail === req.body.email
            });
            console.log('USUARIO LOGGEADO', userLogged[0].userName)
          }
          else {
            console.log('No hay un email registrado con estos valores.');
            return res.render(path.resolve(__dirname, '../views/users/login'), {
              errors: [{ msg: "Este email no está registrado." }],
              title: "Login",
              styles: "login.css",
            })
          }

        }
        if (bcrypt.compareSync(req.body.password, userLogged[0].password) !== true) {
          console.log(req.body.password)
          userLogged = [];
        }

        if (userLogged.length === 0) {
          console.log('No hay usuario loggeado por credenciales invalidas, se vuelve a cargar el login')
          return res.render(path.resolve(__dirname, '../views/users/login'), {
            errors: [{ msg: "Credenciales invalidas" }],
            title: "Login",
            styles: "login.css",
          })
        } else {
          //Aquí guardo en SESSION al usuario logueado
          console.log('Se logeo el usuario!')
          console.log('USUARIO LOGGEADO', userLogged[0].userName)

          req.session.user = userLogged[0];
        }
        //Aquí verifico si el usuario le dio click en el check box para recordar al usuario 
        if (req.body.recordarme) {
          res.cookie('email', userLogged[0].email, { maxAge: 1000 * 60 * 60 * 24 })
        }
        return res.redirect('/');

      })
  },
  signin: function (req, res) {
    res.render("users/signin", {
      title: "Signin",
      styles: "login.css",
    });
  },
  processRegister: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("users/signin", {
        errors: errors.errors,
        old: req.body,
        title: "Signin",
        styles: "login.css",
      });
    }
    User.create({
      userName: req.body.userName,
      lastName: req.body.userLastName,
      userEmail: req.body.userEmail,
      password: req.body.password = bcrypt.hashSync(req.body.password, 10),
      avatar: req.file ? req.file.filename : '',
    })

      .then(function (result) {
        res.render("users/login", {
          title: "Home",
          styles: "login.css",
          user: req.session.userLogged,
        });
      })
      .catch(error => console.log(error));
  },
  processLogout: (req, res) => {
    let userLogged = req.session.userLogged;
    console.log('se deslogea el usuario: ', userLogged);
    res.clearCookie("recordame");
    req.session.destroy();
    res.redirect("/");
  },
  contactus: function (req, res) {
    res.render("./users/contactus");
  },
  contact: (req, res) => {
    db.ContactUs.create({
      name: req.body.name,
      email: req.body.email,
      comments: req.body.comments,
    })
      .then(function (result) {
        res.render("users/contactUsSend", {
          title: "Contact Us",
          styles: "carrito.css",
          user: req.session.userLogged,
        });
      })
      .catch(error => console.log(error));


  },


  shopp: function (req, res) {
    console.log(req.session.user)
    res.render("users/shopp", {
      title: "Carrito",
      styles: "carrito.css",
      user: req.session.user,
      memberships: req.session.user
    })
  },

  toBuy: function (req, res) {

    let id = db.Membership.findByPk(req.params.idMembership)
      .then(function (newMembership) {
        let userLogin = req.session.user.id_users;
        console.log("usuario conectado",)

        User.update(
          {
            membership: newMembership.name
          },
          {

            where: { id_users: userLogin }
          }
        )

        res.render("users/toBuy", {
          title: "successful purchase",
          styles: "carrito.css",
          user: req.session.user,
          newMembership
        });

      })

  },
  toDelete: function (req,res) {
    let deleteMembership = req.session.user.membership;
    console.log("probando el user",req.session.user)
    db.User.update (
      {
        membership: null
      },
      {
        where: {membership:deleteMembership}
      });
      console.log()

      res.render("index", {
        title: "Shopp",
        styles: "carrito.css",
        user: req.session.user,
        memberships: req.session.user
        })
      
    
  },


  queries: function (req, res) {
    db.ContactUs.findAll()
      .then((queries) => {
        res.render("users/queries", {
          title: "Queries List",
          styles: "carrito.css",
          user: req.session.user,
          queries
        });
      });
  },

  notAcces: function(req,res){
    res.render("users/notAcces", {
      title: "Not Acces",
      styles: "carrito.css",
      user: req.session.user,
  })
  },

   edditAccount:(req, res) => {
    let user = db.User.findByPk(req.params.id_users);

    Promise.all([user])
   
       .then((User) => {
         console.log('QUERES VER:', User);
 
         return  res.render("./users/editaccount", { 
         title:'Edit membership',
         styles: "admin.css",
         userEddit: User,
         user: req.session.user,})
       })
       .catch(error => res.send(error));
   },

   procesEdittAccount: 
   function (req, res) {
    let userEditt = db.User.findByPk(req.params.id_users)

    db.User.update ({
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      newPassword: req.body.newPassword,
    } , {
      where : {
        id_users: req.params.id_users
      }
    })

    .then (user => {
    console.log("aca el user",user)

      res.render("./users/editaccount", {
       
        });
    })
    
    
   },
  
};

module.exports = userController;
