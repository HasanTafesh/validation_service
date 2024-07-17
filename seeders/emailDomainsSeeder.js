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
      { domain: 'aol.com', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { domain: 'icloud.com', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { domain: 'protonmail.com', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { domain: 'yandex.com', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { domain: 'mail.com', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { domain: 'live.com', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { domain: 'edu.com', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { domain: 'org.com', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { domain: 'gov.com', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { domain: 'co.uk', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { domain: 'me.com', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { domain: 'apple.com', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { domain: 'amazon.com', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { domain: 'netflix.com', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { domain: 'facebook.com', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { domain: 'twitter.com', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { domain: 'instagram.com', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { domain: 'linkedin.com', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { domain: 'reddit.com', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { domain: 'pinterest.com', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { domain: 'tumblr.com', createdAt: currentDate, updatedAt: currentDate, deletedAt: null },
      { domain: 'snapchat.com', createdAt: currentDate, updatedAt: currentDate, deletedAt: null }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('EmailDomains', null, {});
  }
};
