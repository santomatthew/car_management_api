const jwt = require("jsonwebtoken");

async function adminAuthenticator(req, res, next) {
  try {
    let header = req.headers.authorization.split("Bearer ")[1];
    let account = jwt.verify(header, "s3cr3t");
    if (account.role === "superadmin") {
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
module.exports = adminAuthenticator;
