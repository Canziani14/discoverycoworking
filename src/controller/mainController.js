const path = require("path");
const fs = require("fs");

const mainController = {
  home: function (req, res) {
    let memberships = JSON.parse(
      fs.readFileSync(
        path.resolve(__dirname, "..", "database", "memberships.json")
      )
    );

    res.render("index", { memberships });
  },
};

module.exports = mainController;
