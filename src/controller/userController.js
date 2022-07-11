const path = require("path");
const fs = require("fs");

const { validationResult } = require("express-validator");

const userController = {
  login: function (req, res) {
    res.render(path.join(__dirname, "../views/users/login"));
  },
  signin: function (req, res) {
    res.render(path.join(__dirname, "../views/users/signin"));
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
      let archivoUsers = fs.readFileSync(path.resolve(__dirname, '../database/users.json'), {
        encoding: 'utf-8'
      });
      let users;
      if (archivoUsers == "") {
        users = [];
      } else {
        users = JSON.parse(archivoUsers);
      };
      
      users.push(user);
      usersJSON = JSON.stringify(users, null, 2);
      fs.writeFileSync(path.resolve(__dirname, '../database/users.json'), usersJSON);
      res.redirect('/login');

    }
  },
  editaccount: function (req, res) {
    res.render(path.join(__dirname, "../views/users/editaccount"));
  },
  changepassword: function (req, res) {
    res.render(path.join(__dirname, "../views/users/changepassword"));
  },
  contactus: function (req, res) {
    res.render(path.join(__dirname, "../views/users/contactus"));
  },
};

module.exports = userController;
