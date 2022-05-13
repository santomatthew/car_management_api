const { Account } = require("../../models");
const encryptFunc = require("../encrypt-decrypt/encrypt-pass");

async function memberRegister(req, res) {
  try {
    let emailInput = req.body.email;
    let passwordInput = await encryptFunc(req.body.password);
    let newAcc = await Account.create({
      email: emailInput,
      password: passwordInput,
      role: "member",
    });
    res.status(201).json({
      id: newAcc.id,
      email: newAcc.email,
      created_at: newAcc.createdAt,
      updated_at: newAcc.updatedAt,
    });
  } catch (error) {
    res.send(error);
  }
}

module.exports = memberRegister;
