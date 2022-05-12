const { Cars } = require("../../models");

async function carGetById(req, res) {
  try {
    let car = await Cars.findOne({
      where: { id: req.params.id, is_deleted: false },
    });
    if (car) {
      res.send(car);
    }
    res.send("Data Mobil tidak ada");
    return;
  } catch (error) {
    res.send(error);
    return;
  }
}

module.exports = carGetById;
