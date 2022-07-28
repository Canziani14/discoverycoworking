const path = require("path");
const fs = require("fs");

const membershipsController = {
  dinamic: function (req, res) {
    let membershipsDelArchivoJson = JSON.parse(
      fs.readFileSync(
        path.resolve(__dirname, "../database/memberships.json")
      )
    );
    let nameMembership = req.params.nameMembership;
    console.log("Un usuario ingreso a " + nameMembership);
    const membershipIndex = membershipsDelArchivoJson.findIndex(
      (membership) => membership.name === nameMembership
    );

    res.render("./products/membershipdinamic"), {
      membership: membershipsDelArchivoJson[membershipIndex],
    };
  },
  getAllProducts: () => {
    return membershipsDelArchivoJson;
  },
  createMembership: (req, res) => {
    //devuelva la vista
    res.render("./products/create");
  },
  //   createMembership: ()=>{
  // //metodo post haga la membership y todo el despelote
  //   },
  home: function (req, res) {
    let membershipsDelArchivoJson = JSON.parse(
      fs.readFileSync(
        path.resolve(__dirname, "../database/memberships.json")
      ))
    res.render("./products/memberships", {
      memberships: membershipsDelArchivoJson,
    });
  },
  carrito: function (req, res) {
    res.render("./products/carrito");
  },
};

module.exports = membershipsController;
