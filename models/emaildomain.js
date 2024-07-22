'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmailDomain extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EmailDomain.init({
    domain: {
      type: DataTypes.STRING,
      unique: true,
    },
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'EmailDomain',
  });
  return EmailDomain;
};