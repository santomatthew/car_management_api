const { Cars } = require("../../models");
const { Account } = require("../../models");
async function carGetById(req, res) {
  try {
    let car = await Cars.findOne({
      where: { id: req.params.id, is_deleted: false },
    });
    if (car) {
      let user = await Account.findOne({
        where: { id: car.created_by },
      });
      let user2 = await Account.findOne({
        where: { id: car.updated_by },
      });
      res.json({
        id: car.id,
        name: car.name,
        photo: car.photo,
        price: car.price,
        size: car.size_id,
        created_by: user.email,
        updated_by: user2.email,
      });
    }
    res.send("Data Mobil tidak ada");
    return;
  } catch (error) {
    res.send(error);
    return;
  }
}

module.exports = carGetById;
