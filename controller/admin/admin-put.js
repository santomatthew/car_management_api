const { Account } = require("../../models");

async function adminPut(req, res) {
  try {
    let checkIfExist = await Account.findOne({
      where: { id: req.params.id, role: "admin" },
    });
    if (checkIfExist) {
      if (req.body.email == null) {
        await Account.update(
          {
            email: checkIfExist.email,
            password: req.body.password,
          },
          { where: { id: req.params.id } }
        );
      } else if (req.body.password == null) {
        await Account.update(
          {
            email: req.body.email,
            password: checkIfExist.password,
          },
          { where: { id: req.params.id } }
        );
      }
      res.send("Data Admin berhasil di update");
    } else {
      res.send("Data Admin yang mau di update tidak ada ");
    }
  } catch (error) {
    res.send(error);
  }
}

module.exports = adminPut;
