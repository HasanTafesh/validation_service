const redis = require('../redisClient');
const validator = require('validator');

class BaseRepository {
  constructor(model, cacheKey) {
    this.model = model;
    this.cacheKey = cacheKey;
  }

  async validateId(id) {
    if (!validator.isInt(id.toString())) {
      throw new Error('Invalid ID. ID must be an integer.');
    }
  }

  // Abstract methods
  async create(data) {
    throw new Error('Create method not implemented.');
  }

  async update(id, data) {
    throw new Error('Update method not implemented.');
  }

  async delete(id) {
    throw new Error('Delete method not implemented.');
  }

}

module.exports = BaseRepository;
