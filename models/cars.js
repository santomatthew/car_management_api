'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cars.init({
    name: DataTypes.STRING,
    photo: DataTypes.STRING,
    price: DataTypes.INTEGER,
    size_id: DataTypes.INTEGER,
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER,
    is_deleted: DataTypes.BOOLEAN,
    deleted_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cars',
    underscored: true,
  });
  return Cars;
};