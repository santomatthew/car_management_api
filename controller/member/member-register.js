const { Account } = require("../../models");

async function memberRegister(req, res) {
  try {
    await Account.create({
      email: req.body.email,
      password: req.body.password,
      role: "member",
    });
    res.send("Berhasil daftar member");
  } catch (error) {
    res.send(error);
  }
}

module.exports = memberRegister;
