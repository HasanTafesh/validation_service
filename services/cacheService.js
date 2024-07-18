const { EmailDomain, BadWord, CelebrityName, AreaCode } = require('../models');
const redis = require('../redisClient');

const loadEmailDomainsToCache = async () => {
  const emailDomains = await EmailDomain.findAll({ where: { deletedAt: null } });
  const emailDomainKey = 'emailDomains';

  const pipeline = redis.pipeline();
  emailDomains.forEach(domain => {
    pipeline.sadd(emailDomainKey, domain.domain);
  });
  await pipeline.exec();
};

const loadBadWordsToCache = async () => {
  const badWords = await BadWord.findAll({ where: { deletedAt: null } });
  const badWordKey = 'badWords';

  const pipeline = redis.pipeline();
  badWords.forEach(word => {
    pipeline.sadd(badWordKey, word.word);
  });
  await pipeline.exec();
};

const loadCelebrityNamesToCache = async () => {
  const celebrities = await CelebrityName.findAll({ where: { deletedAt: null } });
  const celebKey = 'celebrityNames';

  const pipeline = redis.pipeline();
  celebrities.forEach(celeb => {
    pipeline.sadd(celebKey, `${celeb.firstName} ${celeb.lastName}`);
  });
  await pipeline.exec();
};

const loadAreaCodesToCache = async () => {
  const areaCodes = await AreaCode.findAll({ where: { deletedAt: null } });
  const areaCodeKey = 'areaCodes';

  const pipeline = redis.pipeline();
  areaCodes.forEach(code => {
    pipeline.sadd(areaCodeKey, code.areaCode);
  });
  await pipeline.exec();
};

const loadAllToCache = async () => {
  await Promise.all([
    loadEmailDomainsToCache(),
    loadBadWordsToCache(),
    loadCelebrityNamesToCache(),
    loadAreaCodesToCache(),
  ]);
};

module.exports = {
  loadEmailDomainsToCache,
  loadBadWordsToCache,
  loadCelebrityNamesToCache,
  loadAreaCodesToCache,
  loadAllToCache,
};
