const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");

const membershipsFilePath = path.join(__dirname, '../database/memberships.json');
const memberships = JSON.parse(fs.readFileSync(membershipsFilePath, "utf-8"));

const usersFilePath = path.join(__dirname, "../database/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const db = require('../../database/models');


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
      newUser = req.body;
      newUser.password = bcrypt.hashSync(newUser.password, 10);
      newUser.id = uuidv4();
      newUser.avatar = req.file;
      newUser.isAdmin = false;

      users.push(newUser);
      fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
      res.redirect("/login");
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
      
      console.log(users)
        res.render('./users/userList', {users: users})
    })
  },

  create: function (req, res) {

  },

  details: function (req, res) {

  },




};

module.exports = userController;
