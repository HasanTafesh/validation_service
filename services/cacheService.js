const { EmailDomain, BadWord, CelebrityName, AreaCode } = require('../models');
const redis = require('../redisClient');

const clearAndLoadToCache = async (key, fetchFunction) => {
  await redis.del(key);
  const items = await fetchFunction();
  for (const item of items) {
    if (item.deletedAt === null) {
      await redis.hset(key, item.id.toString(), JSON.stringify(item));
    }
  }
};

const loadEmailDomainsToCache = async () => {
  const emailDomains = await EmailDomain.findAll();
  const emailDomainKey = 'emailDomains';
  await redis.del(emailDomainKey);
  
  for (const domain of emailDomains) {
    if (domain.deletedAt === null) {
      const emailDomainData = domain.domain;
      await redis.hset(emailDomainKey, domain.id.toString(), emailDomainData);
    }
  }
};

const loadBadWordsToCache = async () => {
  const badWords = await BadWord.findAll();
  const badWordKey = 'badWords';
  await redis.del(badWordKey);
  
  for (const word of badWords) {
    if (word.deletedAt === null) {
      const badWordData = word.word;
      await redis.hset(badWordKey, word.id.toString(), badWordData);
    }
  }
};

const loadCelebrityNamesToCache = async () => {
  const celebrities = await CelebrityName.findAll();
  const celebKey = 'celebrityNames';
  await redis.del(celebKey);
  
  for (const celeb of celebrities) {
    if (celeb.deletedAt === null) {
      const fullName = `${celeb.firstName} ${celeb.lastName}`;
      await redis.hset(celebKey, celeb.id.toString(), fullName);
    }
  }
};

const loadAreaCodesToCache = async () => {
  const areaCodes = await AreaCode.findAll();
  const areaCodeKey = 'areaCodes';
  await redis.del(areaCodeKey);
  
  for (const code of areaCodes) {
    if (code.deletedAt === null) {
      const areaCodeData = code.areaCode;
      await redis.hset(areaCodeKey, code.id.toString(), areaCodeData);
    }
  }
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
