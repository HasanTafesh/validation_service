'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const currentDate = new Date();
    return queryInterface.bulkInsert('AreaCodes', [
      { areaCode: '201',  createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { areaCode: '202',  createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { areaCode: '203',  createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { areaCode: '204',  createdAt: currentDate, updatedAt: currentDate, deletedAt: null },   
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AreaCodes', null, {});
  }
};
