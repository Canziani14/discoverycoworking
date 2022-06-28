const path = require ("path")



const mainController = {
    home: function (req,res) {
        res.render("index")
    },
    login: function (req, res) {
        res.render("login")
    },
    signin: function (req, res) {
        res.render("signin")
    },
    editaccount: function (req, res) { 
        res.render("edit-account")
    },
    changepassword: function (req, res) {
        res.render("change-password")
    },
    carrito: function(req,res){
        res.render("carrito")
    },

};


module.exports = mainController;
