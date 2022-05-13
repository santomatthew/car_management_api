const { Cars } = require("../../models");
const jwt = require("jsonwebtoken");
async function carDelete(req, res) {
  try {
    if (!req.params.id) {
      res.send("Masukkan id yang benar");
    } else {
      let checkIfExist = await Cars.findOne({
        where: { id: req.params.id, is_deleted: false },
      });

      if (checkIfExist) {
        let header = req.headers.authorization.split("Bearer ")[1];
        let account = jwt.verify(header, "s3cr3t");
        await Cars.update(
          { is_deleted: true, deleted_by: account.id },
          { where: { id: req.params.id } }
        );
        res.send("Data car berhasil di hapus");
        return;
      } else {
        res.send("Data car tidak ada");
      }
    }
  } catch (error) {
    res.send(error);
  }
}

module.exports = carDelete;
