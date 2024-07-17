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
      { firstName: 'Jennifer', lastName: 'Lawrence', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Will', lastName: 'Smith', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Denzel', lastName: 'Washington', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Emma', lastName: 'Stone', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Ryan', lastName: 'Gosling', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Chris', lastName: 'Hemsworth', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Natalie', lastName: 'Portman', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Matthew', lastName: 'McConaughey', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Julia', lastName: 'Roberts', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Christian', lastName: 'Bale', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Charlize', lastName: 'Theron', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Hugh', lastName: 'Jackman', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Kate', lastName: 'Winslet', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Morgan', lastName: 'Freeman', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Anne', lastName: 'Hathaway', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Chris', lastName: 'Evans', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Amy', lastName: 'Adams', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Liam', lastName: 'Neeson', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Mila', lastName: 'Kunis', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Mark', lastName: 'Wahlberg', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Sandra', lastName: 'Bullock', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Keanu', lastName: 'Reeves', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Nicole', lastName: 'Kidman', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Tom', lastName: 'Hanks', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Cate', lastName: 'Blanchett', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Harrison', lastName: 'Ford', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Emma', lastName: 'Watson', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Chris', lastName: 'Pratt', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Jessica', lastName: 'Chastain', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Jake', lastName: 'Gyllenhaal', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Emily', lastName: 'Blunt', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Jason', lastName: 'Statham', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Jennifer', lastName: 'Aniston', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Daniel', lastName: 'Craig', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Gal', lastName: 'Gadot', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Bruce', lastName: 'Willis', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Kristen', lastName: 'Stewart', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Vin', lastName: 'Diesel', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Zoe', lastName: 'Saldana', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Matt', lastName: 'Damon', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Reese', lastName: 'Witherspoon', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Ryan', lastName: 'Reynolds', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Megan', lastName: 'Fox', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Sylvester', lastName: 'Stallone', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { firstName: 'Channing', lastName: 'Tatum', createdAt: currentDate, updatedAt: currentDate, deletedAt: null }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CelebrityNames', null, {});
  }
};
