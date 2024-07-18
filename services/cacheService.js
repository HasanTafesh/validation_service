// redisCacheLoader.js

const redis = require('../redisClient');
const { EmailDomain, BadWord, CelebrityName, AreaCode } = require('../models');

const loadEmailDomainsToCache = async () => {
  const emailDomains = await EmailDomain.findAll({ where: { deletedAt: null } });
  const emailDomainKey = 'emailDomains';

  await redis.del(emailDomainKey);

  const multi = redis.pipeline();
  emailDomains.forEach(domain => {
    multi.sadd(emailDomainKey, domain.domain);
  });
  await multi.exec();
};

const loadBadWordsToCache = async () => {
  const badWords = await BadWord.findAll({ where: { deletedAt: null } });
  const badWordKey = 'badWords';

  await redis.del(badWordKey);

  const multi = redis.pipeline();
  badWords.forEach(word => {
    multi.sadd(badWordKey, word.word);
  });
  await multi.exec();
};

const loadCelebrityNamesToCache = async () => {
  const celebrities = await CelebrityName.findAll({ where: { deletedAt: null } });
  const celebKey = 'celebrityNames';

  await redis.del(celebKey);

  const multi = redis.pipeline();
  celebrities.forEach(celeb => {
    const fullName = `${celeb.firstName} ${celeb.lastName}`;
    multi.sadd(celebKey, fullName);
  });
  await multi.exec();
};

const loadAreaCodesToCache = async () => {
  const areaCodes = await AreaCode.findAll({ where: { deletedAt: null } });
  const areaCodeKey = 'areaCodes';

  await redis.del(areaCodeKey);

  const multi = redis.pipeline();
  areaCodes.forEach(code => {
    multi.sadd(areaCodeKey, code.areaCode);
  });
  await multi.exec();
};

const loadAllToCache = async () => {
  await Promise.all([
    loadEmailDomainsToCache(),
    loadBadWordsToCache(),
    loadCelebrityNamesToCache(),
    loadAreaCodesToCache()
  ]);
};

module.exports = {
  loadEmailDomainsToCache,
  loadBadWordsToCache,
  loadCelebrityNamesToCache,
  loadAreaCodesToCache,
  loadAllToCache
};
