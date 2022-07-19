const path = require("path");
const fs = require("fs");

function rememberMiddleware(req, res, next) {
  if (
    req.cookies.recordame != undefined &&
    req.session.userLogged == undefined
  ) {
    let archivoUsers = fs.readFileSync(
      path.resolve(__dirname, "../database/users.json"),
      { encoding: "utf-8" }
    );

    let users;
    if (archivoUsers == "") {
      users = [];
    } else {
      users = JSON.parse(archivoUsers);
    }

    let userLogged;
    for (let i = 0; users.length; i++) {
      if (users[i].email == req.cookies.recordame) {
          userLogged = users[i];
          break;
        
      }
    }

    req.session.userLogged = userLogged;
  }
  next();
}
module.exports = rememberMiddleware;
