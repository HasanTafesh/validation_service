const validator = require('validator');
const redis = require('../redisClient');
const { validate } = require('deep-email-validator');

const isMemberOfSet = async (key, value) => {
  return await redis.sismember(key, value);
};

const validateEmail = async (email) => {
  try {
    const validationResult = await validate({
      email: email,
      validateRegex: true,
      validateMx: true,
      validateTypo: true,
      validateDisposable: true,
      validateSMTP: false
    });

    const firstPart = email.split('@')[0];
    const badWordKey = 'badWords';
    const badWordExists = await isMemberOfSet(badWordKey, firstPart);
    if (badWordExists) {
      return { email, valid: false, reason: 'Contains inappropriate content' };
    }

    if (!validationResult.valid) {
      return { email, valid: false, reason: validationResult.reason || 'Validation failed' };
    }

    return { email, valid: true };
  } catch (error) {
    console.error('Error during email validation:', error.message);
    return {
      email,
      valid: false,
      reason: `Validation error: ${error.message || 'Unknown error'}`
    };
  }
};

const validateFullName = async (firstName, lastName) => {
  const validateName = async (name) => {
    if (!validator.isAlpha(name) || !validator.isLength(name, { min: 1, max: 50 })) {
      return { name, valid: false, reason: 'Invalid format' };
    }

    const badWordKey = 'badWords';
    const badWordExists = await isMemberOfSet(badWordKey, name);
    if (badWordExists) {
      return { name, valid: false, reason: 'Contains inappropriate content' };
    }

    return { name, valid: true };
  };

  const firstNameValidation = await validateName(firstName);
  if (!firstNameValidation.valid) return firstNameValidation;

  const lastNameValidation = await validateName(lastName);
  if (!lastNameValidation.valid) return lastNameValidation;

  const fullName = `${firstName} ${lastName}`;
  const celebKey = 'celebrityNames';
  const isCelebrity = await isMemberOfSet(celebKey, fullName);
  if (isCelebrity) {
    return { firstName, lastName, valid: false, reason: 'Matches a celebrity name' };
  }

  return { firstName, lastName, valid: true };
};

const validatePhoneNumber = async (phone) => {
  const phoneRegex = /^(\+1[-\s.]?)?\(?([2-9][0-9]{2})\)?[-\s.]?([2-9][0-9]{2})[-\s.]?([0-9]{4})$/;
  const match = phone.match(phoneRegex);
  if (!match) return { phone, valid: false };

  const areaCode = match[2];
  const areaCodeKey = 'areaCodes';
  const isValid = await isMemberOfSet(areaCodeKey, areaCode);

  return { phone, valid: isValid === 1 };
};

// Password validation function
const validatePassword = (password) => {
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length < minLength) {
    return { valid: false, reason: `Password must be at least ${minLength} characters long` };
  }

  if (!hasUppercase) {
    return { valid: false, reason: 'Password must contain at least one uppercase letter' };
  }

  if (!hasLowercase) {
    return { valid: false, reason: 'Password must contain at least one lowercase letter' };
  }

  if (!hasNumber) {
    return { valid: false, reason: 'Password must contain at least one number' };
  }

  if (!hasSpecialChar) {
    return { valid: false, reason: 'Password must contain at least one special character' };
  }

  return { valid: true };
};

module.exports = {
  validateEmail,
  validateFullName,
  validatePhoneNumber,
  validatePassword
};
