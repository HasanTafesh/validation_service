'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CelebrityName extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CelebrityName.init({
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'CelebrityName',
    indexes: [
      {
        unique: true,
        fields: ['firstName', 'lastName']
      }
    ]
  });
  return CelebrityName;
};
