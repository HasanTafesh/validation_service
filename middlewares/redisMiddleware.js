// redisMiddleware.js

const redis = require('./redisClient');

module.exports = async (req, res, next) => {
  try {
    if (!redis.status === 'ready') {
      await redis.connect();
    }
    req.redis = redis;
    next();
  } catch (error) {
    console.error('Error connecting to Redis:', error);
    next(error);
  }
};
