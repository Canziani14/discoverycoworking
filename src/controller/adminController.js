const path = require("path");
const fs = require("fs");


let memberships = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','memberships.json')))


module.exports = {
    index: (req, res) =>{
      res.render (path.join(__dirname, "../views/admin/index"),{
        memberships: memberships
    })
    }
};
