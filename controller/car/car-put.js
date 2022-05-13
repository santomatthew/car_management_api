const { Cars } = require("../../models");
const jwt = require("jsonwebtoken");

async function carPut(req, res) {
  try {
    let header = req.headers.authorization.split("Bearer ")[1];
    let account = jwt.verify(header, "s3cr3t");
    let carData = await Cars.findOne({
      where: { id: req.params.id, is_deleted: false },
    });

    if (carData) {
      await Cars.update(
        {
          name: req.body.name,
          photo: req.body.photo,
          price: req.body.price,
          size_id: req.body.size_id,
          updated_by: account.id,
        },
        { where: { id: req.params.id } }
      );
      res.send("Data mobil berhasil di update");
    } else {
      res.send("Data tidak ada");
    }
  } catch (error) {
    res.send(error);
  }
}

module.exports = carPut;
