const path = require("path");
const fs = require("fs");

module.exports = {
  index: (req, res) => {
    let memberships = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "../database/memberships.json"))
    );

    res.render(path.join(__dirname, "../views/admin/admin"), {
      memberships: memberships,
    });
  },
  create: (req, res) => {
    res.render(path.resolve(__dirname, "../views/admin/create"));
  },
  save: (req, res) => {
    let memberships = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "../database/memberships.json"))
    );
    let ultimaMembership = memberships.pop();
    memberships.push(ultimaMembership);
    let nuevaMembership = {
      id: ultimaMembership.id + 1,
      name: req.body.name,
      services: req.body.services,
      details: req.body.details,
      price: req.body.price,
      img: req.body.imgMembership,
    };
    memberships.push(nuevaMembership);
    let nuevaMembershipAGuardar = JSON.stringify(memberships, null, 2);
    fs.writeFileSync(
      path.resolve(__dirname, "../database/memberships.json"),
      nuevaMembershipAGuardar
    );
    res.redirect("/admin");
  },
};
