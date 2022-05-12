const { Account } = require("../../models");

async function adminDelete(req, res) {
  try {
    if (!req.params.id) {
      res.send("Masukkan id yang benar");
    } else {
      let checkIfExist = await Account.findOne({
        where: { id: req.params.id, role: "admin" },
      });

      if (checkIfExist) {
        await Account.update(
          { is_deleted: true },
          { where: { id: req.params.id } }
        );
        res.send("Data admin berhasil di hapus");
        return;
      }
      res.send("Data admin  tidak ada");
    }
  } catch (error) {
    res.send(error);
  }
}

module.exports = adminDelete;
