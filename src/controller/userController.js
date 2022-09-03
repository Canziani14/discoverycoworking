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
    db.User.findAll()
    .then((users) => {		
      //Aquí guardo los errores que vienen desde la ruta, valiendome del validationResult
      let errors = validationResult(req);
      
      let userLogged = [];
      
      if(req.body.email != '' && req.body.password != ''){
        userLogged = users.filter(function (user) {
          return user.userEmail === req.body.email  
        });
        console.log('USUARIO:',userLogged);
        //Aquí verifico si la clave que está colocando es la misma que está hasheada en la Base de datos - El compareSync retorna un true ó un false

        //
        if(bcrypt.compareSync(req.body.password,userLogged[0].password) !== true){
          console.log(req.body.password)
          console.log('USUARIO LOGGEADO',userLogged[0].password)
          userLogged = [];
        }
      }
      //console.log(userLogged);
      //return res.send(userLogged);
      //Aquí determino si el usuario fue encontrado ó no en la Base de Datos
      if (userLogged.length === 0) {
        return res.render(path.resolve(__dirname, '../views/users/login'),{ errors: [{ msg: "Credenciales invalidas" }],
          title: "Login",
          styles: "login.css",
        })
      } else {
        //Aquí guardo en SESSION al usuario logueado
        console.log('HOLA', userLogged[0].password)

        req.session.user = userLogged[0];
      }
      //Aquí verifico si el usuario le dio click en el check box para recordar al usuario 
      if(req.body.recordarme){
        res.cookie('email',userLogged[0].email,{maxAge: 1000 * 60 * 60 * 24})
      }
      return res.redirect('/');   //Aquí ustedes mandan al usuario para donde quieran (Perfil- home)

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
          memberships: result,
          title: "Home",
          styles: "login.css",
          user: req.session.userLogged,
          
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
        user: req.session.userLogged})
    })
  },
};

module.exports = userController;
