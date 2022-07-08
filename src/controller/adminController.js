const path = require("path");
const fs = require("fs");



let users = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "..", "database", "users.json"))
);


module.exports = {
    
};
