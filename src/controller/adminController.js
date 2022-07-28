const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid"); //genera ids automaticos



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

    const id = uuidv4()

    let nuevaMembership = {
      id: id,
      name: req.body.name,
      services: req.body.services,
      details: req.body.details,
      price: req.body.price,
      img: req.body.imgMembership,
    };
    console.log(id)
    memberships.push(nuevaMembership);
    let nuevaMembershipAGuardar = JSON.stringify(memberships, null, 2);
    fs.writeFileSync(
      path.resolve(__dirname, "../database/memberships.json"),
      nuevaMembershipAGuardar
    );
    res.redirect("/admin");
  },
  show: (req, res) => {
    let memberships = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "../database/memberships.json"))
    );
    let nameMembership = req.params.nameMembership;
    const membershipIndex = memberships.findIndex(membership=> membership.name === nameMembership)


    res.render(path.resolve(__dirname,'../views/admin/detail'), {
      membership: memberships[membershipIndex],
    })
  },
  edit: (req,res) =>{
    let memberships = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "../database/memberships.json"))
    );

    const membershipName = req.params.nameMembership;
    let membershipAEditar = memberships.find(membership=> membership.name == membershipName);

    res.render(path.resolve(__dirname,'../views/admin/edit'), {membershipAEditar})
  },
  update: (req,res)=>{
    let memberships = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "../database/memberships.json"))
    );
        req.body.img = req.file ? req.file.filename : req.body.oldImagen;
        let membershipAEditar = memberships.map(membership =>{
            if(membership.name == req.params.nameMembership){
                return membership = req.body;
            }
            return membership;
        })
        let membershipEdit = JSON.stringify(membershipAEditar,null,2);

        fs.writeFileSync(path.resolve(__dirname,'../database/memberships.json'),membershipEdit)

        res.redirect('/admin');
  }
};
