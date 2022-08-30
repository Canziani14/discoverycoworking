const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");

const membershipsFilePath = path.join(__dirname, '../database/memberships.json');
const memberships = JSON.parse(fs.readFileSync(membershipsFilePath, "utf-8"));

const usersFilePath = path.join(__dirname, "../database/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const db = require('../database/models');


const userController = {
  login: function (req, res) {
    res.render("users/login", {
      title: "Login",
      styles: "login.css",
    });
  },
  processLogin: function (req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("users/login", {
        errors: errors.mapped(),
        title: "Login",
        styles: "login.css",
      });
    } else {
      const userFound = users.find((user) => {
        if (bcrypt.compareSync(req.body.password, user.password))
          return user.userEmail === req.body.email;
      });

      if (userFound == undefined) {
        res.render("users/login", {
          error: "credenciales invalidas",
          title: "Login",
          styles: "login.css",
        });
      }

      req.session.userLoged = userFound;

      if (req.body.remember_me != undefined) {
        //chequear el timepo de la cookie
        res.cookie(
          "recordame",
          userFound.id
          // { maxAge: 60000 }
        );
      }
      res.redirect("/");
    }
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
        errors: errors.mapped(),
        old: req.body,
        title: "Signin",
        styles: "login.css",
      });
    } else {
      db.User.create({
      userName: req.body.userName,
      lastName: req.body.userLastName,
      userEmail: req.body.userEmail,
      password: req.body.password =  bcrypt.hashSync(req.body.password, 10),
      id_category: req.body.category,
      avatar:req.file.filename})

      .then ( function(result) {
        res.render("users/login", {
          memberships: memberships,
          title: "Home",
          styles: "login.css",
          user: req.session.userLoged,
          
        });
      })


    }
  },
  processLogout: (req, res) => {
    res.clearCookie("recordame");
    req.session.destroy();
    res.redirect("/");
  },
  editaccount: function (req, res) {
    res.render("./users/editaccount");
  },
  changepassword: function (req, res) {
    res.render("./users/changepassword");
  },
  contactus: function (req, res) {
    res.render("./users/contactus");
  },
  //BASE DE DATOS
  list: function (req, res) {
    db.User.findAll ({
      include: [{association:"category",association:"memberships"}]
    })
    .then(users => {   
        res.render('./users/userList', {users: users,title: "User List",
        styles: "index.css",
        user: req.session.userLoged})
    })
    


  },

  create: function (req, res) {

  },

  details: function (req, res) {

  },




};

module.exports = userController;
