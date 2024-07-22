'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const currentDate = new Date();
    return queryInterface.bulkInsert('EmailDomains', [
      { domain: 'example.com', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { domain: 'test.com', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { domain: 'gmail.com', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { domain: 'yahoo.com', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { domain: 'hotmail.com', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { domain: 'outlook.com', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('EmailDomains', null, {});
  }
};
