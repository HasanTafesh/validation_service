'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const currentDate = new Date();
    return queryInterface.bulkInsert('AreaCodes', [
      { areaCode: '203',  createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { areaCode: '204',  createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { areaCode: '205',  createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { areaCode: '206',  createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { areaCode: '207',  createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { areaCode: '208',  createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { areaCode: '209',  createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { areaCode: '210',  createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { areaCode: '212',  createdAt: currentDate, updatedAt: currentDate, deletedAt: null },      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AreaCodes', null, {});
  }
};
