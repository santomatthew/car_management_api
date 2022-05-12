const { Account } = require("../../models");

async function adminPost(req, res) {
  try {
    await Account.create({
      email: req.body.email,
      password: req.body.password,
      role: "admin",
    });
    res.json({
      message: "Admin berhasil di daftarkan",
    });
  } catch (error) {
    res.send(error);
  }
}

module.exports = adminPost;
