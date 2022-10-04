const adminAccess = (req, res, next) => {

  console.log("desde el middleware", req.session.user)
    if ( req.session.user !=undefined ) {
        next();
    } else {
      res.redirect("/notAcces");
    }
  };
  
  module.exports = adminAccess;

 