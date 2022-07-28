const path = require("path");
const fs = require("fs");

let memberships = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, "..", "database", "memberships.json")
  )
);

const mainController = {
  home: function (req, res) {
    res.render("index", { memberships });
  },
};

module.exports = mainController;
