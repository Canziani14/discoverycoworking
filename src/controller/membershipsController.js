const path = require("path");
const fs = require("fs");

let membershipsDelArchivoJson = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "..", "database", "memberships.json"))
);



const membershipsController = {
  dinamic: function (req, res) {
    let nameMembership = req.params.nameMembership;
    console.log("Un usuario ingreso a " + nameMembership);
    const membershipIndex = membershipsDelArchivoJson.findIndex(
      (membership) => membership.name === nameMembership
    );

    res.render(path.join(__dirname, "../views/products/membershipdinamic"), {
      membership: membershipsDelArchivoJson[membershipIndex],
    });
  },
  getAllProducts: () => {
    return membershipsDelArchivoJson;
  },
  createMembership: (req,res) => {
//devuelva la vista
    res.render(path.join(__dirname, "../views/products/create"))
  },
//   createMembership: ()=>{
// //metodo post haga la membership y todo el despelote
//   },
  home: function (req, res) {
    res.render("products/memberships", {memberships: membershipsDelArchivoJson});
  },
  carrito: function (req, res) {
    res.render(path.join(__dirname, "../views/products/carrito"));
  },
};

module.exports = membershipsController;
