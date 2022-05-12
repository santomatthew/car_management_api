const { Account } = require("../../models");

async function adminGetById(req, res) {
  try {
    let admin = await Account.findOne({
      where: { id: req.params.id, role: "admin" },
    });

    if (admin == null || admin == undefined || admin == "") {
      res.send("Data Admin tidak ada");
      return;
    } else {
      res.send(admin);
      return;
    }
  } catch (error) {
    res.send(error);
  }
}

module.exports = adminGetById;
