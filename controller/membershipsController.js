const path = require("path");

const membershipsController = {
  home: function (req, res) {
    res.render("memberships");
  },
  lab: function (req, res) {
    res.render("lab");
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
