const path = require("path");
const fs = require("fs");
// const bcrypt = require("bcrypt");

const { validationResult } = require("express-validator");
let memberships = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','memberships.json')))

const userController = {
  login: function (req, res) {
    res.render("./users/login");
  },
  processLogin: function (req, res) {
    let errors = validationResult(req);
    //si no hay errores
    if (errors.isEmpty()) {
      let archivoUsers = fs.readFileSync(path.resolve(__dirname, "../database/users.json"),{encoding: "utf-8",});

      let users;
      if (archivoUsers == "") {
        users = [];
      } else {
        users = JSON.parse(archivoUsers);
      }
      console.log("USUARIOS: ", users);
      
      let userLogged;
      for (let i = 0; users.length; i++) {
        if (users[i].email == req.body.email) {
          // if (bcrypt.compareSync(req.body.password, users[i].password))
          if(req.body.password == users[i].password)
           {
            userLogged = users[i];
            break;
          }
        }
      }
      if (userLogged == undefined) {
        return res.render("./users/login"), {
          errors: [{ msg: "Credenciales invalidas" }],
        };
      }
      console.log("USERLOGGED: ", userLogged);

      req.session.userLogged = userLogged;
      
      if(req.body.recordame =! undefined){
        res.cookie('recordame', userLogged.email, {
          maxAge: 600000
        })
      }
      console.log(req.cookies.recordame)

      res.redirect('/');
    } else {
      // si hay errores
      return res.render("./users/login"), {
        errors: errors.errors,
      };
    }
  },
  signin: function (req, res) {
    res.render("./users/signin");
  },
  create: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      let user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        work: req.body.work,
        role: 1,
      };
      let archivoUsers = fs.readFileSync(
        path.resolve(__dirname, "../database/users.json"),
        {
          encoding: "utf-8",
        }
      );
      let users;
      if (archivoUsers == "") {
        users = [];
      } else {
        users = JSON.parse(archivoUsers);
      }

      users.push(user);
      usersJSON = JSON.stringify(users, null, 2);
      fs.writeFileSync(
        path.resolve(__dirname, "../database/users.json"),
        usersJSON
      );
      res.redirect("/login");
    } else {
      return res.render("./users/signin"), {
        errors: errors.errors,
      };
    }
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
};

module.exports = userController;
