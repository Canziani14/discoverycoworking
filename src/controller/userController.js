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

        if (!errors.isEmpty()) {
          return res.render("users/login", {
            errors: errors.mapped(),
            old: req.body,
            title: "Login",
            styles: "login.css",
          });
        }


        if (req.body.email != '' && req.body.password != '') {

          userLogged = users.filter(function (user) {
            return user.userEmail === req.body.email
          });

          if (userLogged.length > 0) {

            console.log('USUARIO LOGGEADO', userLogged[0].userName)
          }
          else {
            userLogged = null;
            console.log('No hay un email registrado con estos valores.');

           return res.render("users/login", {
            errors:  [{ msg: "No hay un email registrado con estos valores." }],
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
          return res.render("users/login", {
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
    console.log("los errores son", errors.errors)
    if (!errors.isEmpty()) {
      return res.render("users/signin", {
        errors: errors.mapped(),
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
      confirmPassword: req.body.confirmPassword = bcrypt.hashSync(req.body.password, 10),
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
  toDelete: function (req, res) {
    let deleteMembership = req.session.user.membership;
    console.log("probando el user", req.session.user)
    db.User.update(
      {
        membership: null
      },
      {
        where: { membership: deleteMembership }
      });


    res.redirect("/")


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

  notAcces: function (req, res) {
    res.render("users/notAcces", {
      title: "Not Access",
      styles: "notAccess.css",
      user: req.session.user,
    })
  },

  edditAccount: (req, res) => {
    let user = db.User.findByPk(req.params.id_users);

    Promise.all([user])

      .then((User) => {
        console.log(User)
        return res.render("./users/editaccount", {
          title: 'Edit membership',
          styles: "login.css",
          userEddit: User,
          user: req.session.user,
        })
      })
      .catch(error => res.send(error));
  },

  procesEdittAccount:
    function (req, res) {

      db.User.update({
        userName: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.newPassword = bcrypt.hashSync(req.body.newPassword, 10),
      }, {
        where: {
          id_users: req.params.id_users
        }
      })

        .then(user => {
          res.redirect("/")
        })


    },

};

module.exports = userController;
