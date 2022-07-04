const fs = require("fs");

function consolelogMiddleware(req, res, next) {
  fs.appendFileSync(
    "log.txt",
    " Se ingresó en la ruta: " + req.url + "." + "\n"
  );
  next();
}

module.exports = consolelogMiddleware;
