'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const currentDate = new Date();
    return queryInterface.bulkInsert('CelebrityNames', [
      { firstName: 'Tom', lastName: 'Cruise', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Brad', lastName: 'Pitt', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Leonardo', lastName: 'DiCaprio', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Johnny', lastName: 'Depp', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Scarlett', lastName: 'Johansson', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Meryl', lastName: 'Streep', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Robert', lastName: 'Downey Jr.', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Angelina', lastName: 'Jolie', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'George', lastName: 'Clooney', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CelebrityNames', null, {});
  }
};
