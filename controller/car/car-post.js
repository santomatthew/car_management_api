const { Cars } = require("../../models");
const jwt = require("jsonwebtoken");

async function carPost(req, res) {
  try {
    let header = req.headers.authorization.split("Bearer ")[1];
    let account = jwt.verify(header, "s3cr3t");
    await Cars.create({
      name: req.body.name,
      photo: req.body.photo,
      price: req.body.price,
      size_id: req.body.size_id,
      created_by: account.id,
      updated_by: account.id,
    });
    res.status(201).json({
      name: req.body.name,
      photo: req.body.photo,
      price: req.body.price,
      size_id: req.body.size_id,
    });
  } catch (error) {
    res.send(error);
  }
}

module.exports = carPost;
