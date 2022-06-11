const path = require ("path")



const mainController = {
    home: function (req,res) {
        res.sendFile(path.join( __dirname,'../views/index.html'))
    },
    login: function (req, res) {
        res.sendFile(path.join( __dirname,'../views/login.html'));
    },
    signin: function (req, res) {
        res.sendFile(path.join( __dirname,'../views/signin.html'));
    },
    editaccount: function (req, res) { /*me tomaba error si ponia edit-account*/
        res.sendFile(path.join( __dirname,'../views/edit-account.html'));
    },
    changepassword: function (req, res) {/*me tomaba error si ponia change-password*/
        res.sendFile(path.join( __dirname,'../views/change-password.html'));
    },
    carrito: function(req,res){
        res.sendFile(path.join(__dirname, "../views/carrito.html" ))
    },
    membership: function(req,res){
        res.sendFile(path.join (__dirname, "../views/membership.html"))
    },    
    /*Definimos para las membresias*/ 
    lab: function(req,res){
        res.sendFile(path.join (__dirname, "../views/labs.html"))
    },
    flex: function(req,res){
        res.sendFile(path.join (__dirname, "../views/flex.html"))
    },
    desk: function(req,res){
        res.sendFile(path.join (__dirname, "../views/desk.html"))
    },
    office: function(req,res){
        res.sendFile(path.join (__dirname, "../views/office.html"))
    }
};

module.exports = mainController;