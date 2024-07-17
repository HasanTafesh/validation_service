const BaseRepository = require('./baseRepository');
const { BadWord } = require('../models');
const validator = require('validator');
const redis = require('../redisClient');

class BadWordRepository extends BaseRepository {
  constructor() {
    super(BadWord, 'badWords');
  }

  validateData(data) {
    if (!data.word || typeof data.word !== 'string' || data.word.length < 1) {
      throw new Error('Invalid bad word format.');
    }
  }

  async create(data) {
    this.validateData(data);
    const record = await this.model.create(data);
    await redis.hset(this.cacheKey, record.id, record.word);
    return record;
  }

  async update(id, data) {
    await this.validateId(id);
    this.validateData(data);
    await this.model.update(data, { where: { id } });
    const updatedRecord = await this.model.findByPk(id);
    await redis.hset(this.cacheKey, id, record.word);
    return updatedRecord;
  }

  async delete(id) {
    await this.validateId(id);
    
    await this.model.update({ deletedAt: new Date() }, { where: { id } });
    
    await redis.hdel(this.cacheKey, id);
    
    const deletedRecord = await this.model.findByPk(id);
    return deletedRecord; 
  }

  

  async findById(id) {
    try{
      const record  = await this.model.findByPk(id);
      return record;
    }
    catch(error){
      console.error(`Error finding badword by id: ${id}`, error);
      throw error;
    }
  }


  async findAll() {
    try{
      const records = await this.model.findAll();
      return records;
    }
    catch (error){
      console.error('Error finding all badwords', error);
      throw error;
    }
}
}

module.exports = new BadWordRepository();
