const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid"); //genera ids automaticos
const { validationResult } = require("express-validator");

const membershipsFilePath = path.join(__dirname,'../database/memberships.json');
const memberships = JSON.parse(fs.readFileSync(membershipsFilePath, "utf-8"));

module.exports = {
  index: (req, res) => {
    
    res.render(path.join(__dirname, "../views/admin/admin"), {
      memberships: memberships,
      title: "Admin",
      styles: 'admin.css',
      user: req.session.userLoged,
  });
  },
  create: (req, res) => {
    res.render(path.join(__dirname, "../views/admin/create"), {
      title: "Admin",
      styles: 'admin.css',
      user: req.session.userLoged,

  });
  },
  createProcess: (req, res) => {
  const errors = validationResult(req);

  if(!errors.isEmpty()){
    return res.render("admin/create", {
      errors: errors.mapped(),
      old: req.body,
      styles: "admin.css",
      title: "Crear Membership",
      user: req.session.userLoged,
    });
  }
  else{
    //generamos un id
    const id = uuidv4();
    //capturamos lo que llega del formulario
    const newMembership = req.body;
    //le asignamos el id al producto
    newMembership.id = id;
    // le asignamos el array de imagenes
    newMembership.img = req.files;

    memberships.push(newMembership);
   
    fs.writeFileSync(membershipsFilePath, JSON.stringify(memberships, null, " "));
    res.redirect('/admin')
  }
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
