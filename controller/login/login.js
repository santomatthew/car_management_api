const jwt = require("jsonwebtoken");
const { Account } = require("../../models");

async function login(req, res) {
  try {
    let checkIfExist = await Account.findOne({
      where: { email: req.body.email },
    });

    if (checkIfExist) {
      let idGenerator = checkIfExist.id;
      let validation = await Account.findOne({
        where: { id: idGenerator },
      });
      if (
        req.body.email === validation.email &&
        req.body.password === validation.password
      ) {
        let user = {
          id: validation.id,
          email: validation.email,
          role: validation.role,
        };
        let token = jwt.sign(user, "s3cr3t");
        res.status(200).json({
          token: token,
        });
        return;
      } else {
        res.send("Email atau password salah");
      }
    } else {
      res.send("Email atau password salah");
    }
  } catch (error) {
    res.send(error);
  }
}

module.exports = login;
