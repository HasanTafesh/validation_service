const BaseRepository = require('./baseRepository');
const { EmailDomain } = require('../models');
const validator = require('validator');
const redis = require('../redisClient');

class EmailDomainRepository extends BaseRepository {
  constructor() {
    super(EmailDomain, 'emailDomains');
  }

  validateData(data) {
    if (!data.domain || !validator.isFQDN(data.domain)) {
      throw new Error('Invalid email domain format.');
    }
  }

  async create(data) {
    this.validateData(data);
    const record = await this.model.create(data);
    await redis.sadd(this.cacheKey, record.domain);
    return record;
  }

  async update(id, data) {
    await this.validateId(id);
    this.validateData(data);
    await this.model.update(data, { where: { id } });
    const updatedRecord = await this.model.findByPk(id);
    await redis.sadd(this.cacheKey, updatedRecord.domain);
    return updatedRecord;
  }

  async delete(id) {
    await this.validateId(id);
    const deletedRecord = await this.model.findByPk(id);
    if (deletedRecord) {
      await this.model.update({ deletedAt: new Date() }, { where: { id } });
      await redis.srem(this.cacheKey, deletedRecord.domain);
    }
    return { id, deletedAt: new Date() };
  }

  async findById(id) {
    try {
      const record = await this.model.findByPk(id);
      return record;
    } catch (error) {
      console.error(`Error finding email domain by id: ${id}`, error);
      throw error;
    }
  }

  async findAll() {
    try {
      const records = await this.model.findAll();
      return records;
    } catch (error) {
      console.error('Error finding all email domains', error);
      throw error;
    }
  }
}

module.exports = new EmailDomainRepository();
