const { Account } = require("../../models");

async function adminGet(req, res) {
  let listadmin = await Account.findAll({
    where: { role: "admin", is_deleted: false },
  });

  let list = [];
  for (let i in listadmin) {
    list.push({
      id: listadmin[i].id,
      email: listadmin[i].email,
      createdAt: listadmin[i].createdAt,
      updatedAt: listadmin[i].updatedAt,
    });
  }
  res.send(list);
}

module.exports = adminGet;
