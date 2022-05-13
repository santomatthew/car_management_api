const { Account } = require("../../models");
const encryptFunc = require("../encrypt-decrypt/encrypt-pass");

async function adminPost(req, res) {
  try {
    let emailInput = req.body.email;
    let passwordInput = await encryptFunc(req.body.password);
    let newAcc = await Account.create({
      email: emailInput,
      password: passwordInput,
      role: "admin",
    });

    res.status(201).json({
      id: newAcc.id,
      email: newAcc.email,
      created_at: newAcc.created_at,
      updated_at: newAcc.updated_at,
    });
  } catch (error) {
    res.send(error);
  }
}

module.exports = adminPost;
