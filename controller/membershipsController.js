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
const aa= "aaa"
const membershipsController = {
  home: function (req, res) {
    res.render("memberships");
  },
  lab: function (req, res) {
    res.render("lab",{
      membership: memberships[0]
    });
  },
  flex: function (req, res) {
    res.render("flex");
  },
  office: function (req, res) {
    res.render("office");
  },
  desk: function (req, res) {
    res.render("desk");
  },
};

module.exports = membershipsController;
