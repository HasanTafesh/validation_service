'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AreaCode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AreaCode.init({
    areaCode: {
      type: DataTypes.STRING,
      unique: true,
    },
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'AreaCode',
  });
  return AreaCode;
};