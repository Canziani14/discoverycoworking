const adminAccess = (req, res, next) => {
  console.log(req.session.userLoged)
    if (req.session.userLoged.id_category == 1) {
      next();
    } else {
      res.redirect("/");
    }
  };
  
  module.exports = adminAccess;