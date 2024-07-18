const BaseRepository = require('./baseRepository');
const { BadWord } = require('../models');
const redis = require('../redisClient');

class BadWordRepository extends BaseRepository {
  constructor() {
    super(BadWord, 'badWords');
  }

  validateData(data) {
    if (!data.word || typeof data.word !== 'string' || data.word.trim().length === 0) {
      throw new Error('Invalid bad word format.');
    }
  }

  async create(data) {
    this.validateData(data);
    const record = await this.model.create(data);
    await redis.sadd(this.cacheKey, record.word.toLowerCase());
    return record;
  }

  async update(id, data) {
    await this.validateId(id);
    this.validateData(data);
    await this.model.update(data, { where: { id } });
    const updatedRecord = await this.model.findByPk(id);
    await redis.sadd(this.cacheKey, updatedRecord.word.toLowerCase());
    return updatedRecord;
  }

  async delete(id) {
    await this.validateId(id);
    const deletedRecord = await this.model.findByPk(id);
    if (deletedRecord) {
      await this.model.update({ deletedAt: new Date() }, { where: { id } });
      await redis.srem(this.cacheKey, deletedRecord.word.toLowerCase());
    }
    return deletedRecord;
  }

  async findById(id) {
    try {
      const record = await this.model.findByPk(id);
      return record;
    } catch (error) {
      console.error(`Error finding bad word by id: ${id}`, error);
      throw error;
    }
  }

  async findAll() {
    try {
      const records = await this.model.findAll();
      return records;
    } catch (error) {
      console.error('Error finding all bad words', error);
      throw error;
    }
  }
}

module.exports = new BadWordRepository();
