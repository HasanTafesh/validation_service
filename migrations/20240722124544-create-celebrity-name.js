'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CelebrityNames', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false // Optionally, you can set this to false if you want to enforce non-null values
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false // Optionally, you can set this to false if you want to enforce non-null values
      },
      deletedAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    // Adding a composite unique index for firstName and lastName
    await queryInterface.addIndex('CelebrityNames', ['firstName', 'lastName'], {
      unique: true,
      name: 'unique_first_last_name'
    });
  },
  
  async down(queryInterface, Sequelize) {
    // Remove the composite unique index before dropping the table
    await queryInterface.removeIndex('CelebrityNames', 'unique_first_last_name');

    await queryInterface.dropTable('CelebrityNames');
  }
};
