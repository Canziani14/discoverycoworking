const path = require("path");
const fs = require("fs");
const { validationResult } = require("express-validator");

let users = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "..", "database", "users.json"))
);

const userController = {
  login: function (req, res) {
    res.render(path.join(__dirname, "../views/users/login"));
  },
  // loginPost: (req,res) =>{
  //     const errors = validationResult(req);
  //     //return res.send(errors.mapped());
  //     if(errors.isEmpty()){
  //       let usuarioLogueado = users.find(usuario => usuario.email == req.body.email)
  //       //return res.send(usuarioLogueado);
  //       //Como podemos modificar nuestros req.body
  //       delete usuarioLogueado.password;
  //       req.session.usuario = usuarioLogueado;  //Guardar del lado del servidor
  //       //Aquí voy a guardar las cookies del usuario que se loguea
  //       if(req.body.recordarme){
  //         res.cookie('email',usuarioLogueado.email,{maxAge: 1000 * 60 * 60 * 24})
  //       }
  //       return res.redirect('/');   //Aquí ustedes mandan al usuario para donde quieran (Perfil- home - a donde deseen)

  //     }else{
  //       //Devolver a la vista los errores
  //       //return res.send(errors.mapped());
  //       res.render(path.resolve(__dirname, '../views/usuarios/login'),{errors:errors.mapped(),old:req.body});
  //     }
  //   },
  signin: function (req, res) {
    res.render(path.join(__dirname, "../views/users/signin"));
  },
  editaccount: function (req, res) {
    res.render(path.join(__dirname, "../views/users/editaccount"));
  },
  changepassword: function (req, res) {
    res.render(path.join(__dirname, "../views/users/changepassword"));
  },
  carrito: function (req, res) {
    res.render(path.join(__dirname, "../views/users/carrito"));
  },
  contactus: function (req, res) {
    res.render(path.join(__dirname, "../views/users/contactus"));
  },
};

module.exports = userController;
