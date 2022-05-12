const { Account } = require("../../models");

async function adminGet(req, res) {
  let listadmin = await Account.findAll({
    where: { role: "admin", is_deleted: false },
  });

  res.send(listadmin);
}

module.exports = adminGet;
