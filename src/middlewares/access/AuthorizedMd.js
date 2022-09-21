const AuthMiddleware = (req, res, next) => {
    if (req.session.user) {
      // si estas logueado podes pasar
      next();
    } else {
      // si no estas logueado, vas al login...
      res.redirect("/login");
    }
  };
  
  module.exports = AuthMiddleware;