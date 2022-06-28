const path = require("path");
const memberships = [
  {
    id: 1,
    nombre: "Lab",
    precio: 150,
  },
  {
    id:2,
    nombre: "Flex",
    precio: 300
  },
  {
    id:3,
    nombre: "Office",
    precio: 750
  },
  {
    id:4,
    nombre: "Desk",
    precio: 450
  }
];
const membershipsController = {
  dinamic: function(req,res){
    let idMembership = req.params.idMembership;
    res.render("membershipDinamic",{
      membership: memberships[idMembership]
    })
  },
  home: function (req, res) {
    res.render (path.join(__dirname, "../views/products/memberships"));
  },
  lab: function (req, res) {
    res.render("lab",{
      membership: memberships[0]
    });
  },
  flex: function (req, res) {
    res.render (path.join(__dirname, "../views/products/flex"));
  },
  office: function (req, res) {
    res.render (path.join(__dirname, "../views/products/office"));
  },
  desk: function (req, res) {
    res.render (path.join(__dirname, "../views/products/desk"));
  },
};

module.exports = membershipsController;

