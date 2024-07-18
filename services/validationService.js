const validator = require('validator');
const redis = require('../redisClient');
const { EmailDomain, BadWord, CelebrityName } = require('../models');

// Fetch data from Redis
const fetchDataFromCache = async (key) => {
  const cachedValues = await redis.smembers(key);
  return cachedValues.length > 0 ? cachedValues : null;
};

// Validate email
const validateEmail = async (email) => {
  if (!validator.isEmail(email)) {
    return { email, valid: false, reason: 'Invalid format' };
  }

  const domain = email.split('@')[1];
  const emailDomains = await fetchDataFromCache('emailDomains');
  if (!emailDomains || !emailDomains.includes(domain)) {
    return { email, valid: false, reason: 'Domain does not exist' };
  }

  const badWords = await fetchDataFromCache('badWords');
  if (badWords) {
    for (const word of badWords) {
      if (email.includes(word)) {
        return { email, valid: false, reason: 'Contains inappropriate content' };
      }
    }
  }

  return { email, valid: true };
};

// Validate full name
const validateFullName = async (firstName, lastName) => {
  const validateName = async (name) => {
    if (!validator.isAlpha(name) || !validator.isLength(name, { min: 1, max: 50 })) {
      return { name, valid: false, reason: 'Invalid format' };
    }

    const badWords = await fetchDataFromCache('badWords');
    if (badWords) {
      for (const word of badWords) {
        if (name.includes(word)) {
          return { name, valid: false, reason: 'Contains inappropriate content' };
        }
      }
    }

    return { name, valid: true };
  };

  const firstNameValidation = await validateName(firstName);
  if (!firstNameValidation.valid) return firstNameValidation;

  const lastNameValidation = await validateName(lastName);
  if (!lastNameValidation.valid) return lastNameValidation;

  const celebrityNames = await fetchDataFromCache('celebrityNames');
  if (celebrityNames) {
    const isCelebrity = celebrityNames.includes(`${firstName} ${lastName}`);
    if (isCelebrity) {
      return { firstName, lastName, valid: false, reason: 'Matches a celebrity name' };
    }
  }

  return { firstName, lastName, valid: true };
};

// Validate phone number
const validatePhoneNumber = async (phone) => {
  const areaCodes = await fetchDataFromCache('areaCodes');
  if (!areaCodes) return { phone, valid: false };

  const phoneRegex = /^(\+1[-\s.]?)?\(?([2-9][0-9]{2})\)?[-\s.]?([2-9][0-9]{2})[-\s.]?([0-9]{4})$/;
  const match = phone.match(phoneRegex);
  if (!match) return { phone, valid: false };

  const areaCode = match[2];
  const isValid = areaCodes.includes(areaCode);

  return { phone, valid: isValid };
};

module.exports = {
  validateEmail,
  validateFullName,
  validatePhoneNumber,
};
