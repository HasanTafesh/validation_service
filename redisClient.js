const Redis = require('ioredis');

// Use the Redis internal URL from Render, falling back to localhost for local development
const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';

const redis = new Redis(redisUrl);

module.exports = redis;
