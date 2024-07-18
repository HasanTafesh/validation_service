const BaseRepository = require('./baseRepository');
const { AreaCode } = require('../models');
const redis = require('../redisClient');

class AreaCodeRepository extends BaseRepository {
  constructor() {
    super(AreaCode, 'areaCodes');
  }

  validateData(data) {
    if (!data.areaCode || data.areaCode.length !== 3) {
      throw new Error('Invalid area code. Must be 3 characters long.');
    }
  }

  async create(data) {
    this.validateData(data);
    const record = await this.model.create(data);
    await redis.sadd(this.cacheKey, record.areaCode);
    return record;
  }

  async update(id, data) {
    await this.validateId(id);
    this.validateData(data);
    await this.model.update(data, { where: { id } });
    const updatedRecord = await this.model.findByPk(id);
    await redis.sadd(this.cacheKey, updatedRecord.areaCode);
    return updatedRecord;
  }

  async delete(id) {
    await this.validateId(id);
    await this.model.update({ deletedAt: new Date() }, { where: { id } });
    const deletedRecord = await this.model.findByPk(id);
    await redis.srem(this.cacheKey, deletedRecord.areaCode);
    return deletedRecord;
  }

  async findById(id) {
    try {
      const record = await this.model.findByPk(id);
      return record;
    } catch (error) {
      console.error(`Error finding area code by id: ${id}`, error);
      throw error;
    }
  }

  async findAll() {
    try {
      const records = await this.model.findAll();
      return records;
    } catch (error) {
      console.error('Error finding all area codes', error);
      throw error;
    }
  }
}

module.exports = new AreaCodeRepository();
