const jwt = require("jsonwebtoken");
function carAuthenticator(req, res, next) {
  try {
    let header = req.headers.authorization.split("Bearer ")[1];
    let account = jwt.verify(header, "s3cr3t");
    if (account.role === "admin" || account.role === "superadmin") {
      next();
    } else {
      res.status(403).json({
        message: "Forbidden",
      });
    }
  } catch (error) {
    res.send(error);
  }
}
module.exports = carAuthenticator;
