const jwt = require("jsonwebtoken");

async function userCurrent(req, res) {
  try {
    let header = req.headers.authorization.split("Bearer ")[1];
    let account = jwt.verify(header, "s3cr3t");
    if (account) {
      res.send(account.email);
    } else {
      res.send("Anda harus login dulu");
    }
  } catch (error) {
    res.send(error);
  }
}

module.exports = userCurrent;
