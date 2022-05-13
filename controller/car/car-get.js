const { Cars } = require("../../models");
const { Account } = require("../../models");

async function carGet(req, res) {
  try {
    let listCars = await Cars.findAll({ where: { is_deleted: false } });
    let listOfCars = [];
    for (let i in listCars) {
      let user = await Account.findOne({
        where: { id: listCars[i].created_by },
      });
      let user2 = await Account.findOne({
        where: { id: listCars[i].updated_by },
      });

      listOfCars.push({
        name: listCars[i].name,
        photo: listCars[i].photo,
        price: listCars[i].price,
        size: listCars[i].size_id,
        created_by: user.email,
        updated_by: user2.email,
      });
    }
    res.send(listOfCars);
  } catch (error) {
    res.send(error);
  }
}

module.exports = carGet;
