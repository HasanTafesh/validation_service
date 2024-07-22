'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const currentDate = new Date();
    return queryInterface.bulkInsert('BadWords', [
      { word: 'badword', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { word: 'badwordssss', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('BadWords', null, {});
  }
};
