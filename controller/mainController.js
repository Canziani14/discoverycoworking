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
    editaccount: function (req, res) { /*me tomaba error si ponia edit-account*/
        res.render("edit-account")
    },
    changepassword: function (req, res) {/*me tomaba error si ponia change-password*/
        res.render("change-password")
    },
    carrito: function(req,res){
        res.render("carrito" )
    },
    membership: function(req,res){
        res.render("membership")
    },    
    membershipDinamic: function (req,res){
        let id = req.params.id;
        let name = req.params.name;
        let details = req.params.details;
        let price = req.params.price;
        let services = req.params.services;
        res.render ("membershipDinamic", {"productos": productos})
    },
    /*Definimos para las membresias*/ 
    lab: function(req,res){
        res.render("labs", {"productos": productos})
    },
    flex: function(req,res){
        res.render("flex")
    },
    desk: function(req,res){
        res.render("desk")
    },
    office: function(req,res){
        res.render("office")
    }
};

module.exports = mainController;