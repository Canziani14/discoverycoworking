const path = require("path");
const fs = require('fs');


let membershipsDelArchivoJson = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','memberships.json')))


const membershipsController = {
  dinamic: function(req,res){
    let nameMembership = req.params.nameMembership;
    console.log("Un usuario ingreso a " + nameMembership)
    const membershipIndex = membershipsDelArchivoJson.findIndex(membership=>
      membership.name === nameMembership)

    res.render(path.join(__dirname, "../views/products/membershipdinamic"),{
      membership: membershipsDelArchivoJson[membershipIndex]
    })
  },
  home: function (req, res) {
    res.render(path.join(__dirname, "../views/products/memberships"),{
      memberships: membershipsDelArchivoJson
    });
  },
  carrito: function (req, res) {
    
    console.log("Un usuario ingreso a carrito para la membresia" + nameMembership)
    const membershipIndex = membershipsDelArchivoJson.findIndex(membership =>
        membership.name === nameMembership)

    res.render(path.join(__dirname, "../views/products/carrito"), {
        membership: membershipsDelArchivoJson[membershipIndex]
    })
},
};

module.exports = membershipsController;
