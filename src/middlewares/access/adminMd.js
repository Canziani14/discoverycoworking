const adminAccess = (req, res, next) => {
  console.log("desde el middleware",req.session.userLoged)
    if ( req.session.user !=undefined &&req.session.user !=null) {
      next();
    } else {
      res.redirect("/");
    }
  };
  
  module.exports = adminAccess;