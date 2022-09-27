const path = require("path");
const fs = require("fs");
const db = require('../database/models');

const membershipsFilePath = path.join(__dirname, '../database/memberships.json');
const memberships = JSON.parse(fs.readFileSync(membershipsFilePath, "utf-8"));

const mainController = {
  index:   function (req, res) {
    console.log('usuario en main: ',req.session.user);

    db.Membership.findAll ()
    .then(memberships => {
      res.render("index", {
        user: req.session.user,
        memberships: memberships,
        title: "Home",
        styles: "index.css",
      });
    })
  },
  

}



module.exports = mainController;
