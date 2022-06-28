const path = require ("path")



const mainController = {
    home: function (req,res) {
        res.render (path.join(__dirname, "../views/users/index"))
    },
    login: function (req, res) {
        res.render (path.join(__dirname, "../views/users/login"))
    },
    signin: function (req, res) {
        res.render (path.join(__dirname, "../views/users/signin"))
    },
    editaccount: function (req, res) { 
        res.render (path.join(__dirname, "../views/users/edit-account"))
    },
    changepassword: function (req, res) {
        res.render (path.join(__dirname, "../views/users/change-password"))
    },
    carrito: function(req,res){
        res.render (path.join(__dirname, "../views/users/carrito"))
    },

};


module.exports = mainController;
