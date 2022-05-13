const jwt = require("jsonwebtoken");
const { Account } = require("../../models");
const decryptPass = require("../encrypt-decrypt/decrypt-pass");
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
      let checkPassword = await decryptPass(
        validation.password,
        req.body.password
      );
      if (req.body.email === validation.email && checkPassword) {
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
