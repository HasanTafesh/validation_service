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
      return { field: email, status: 400, valid: false, reason: 'Contains inappropriate content' };
    }

    if (!validationResult.valid) {
      return { field: email, status: 400, valid: false, reason: validationResult.reason || 'Validation failed' };
    }

    return { field: email, status: 200, valid: true };
  } catch (error) {
    console.error('Error during email validation:', error.message);
    return { field: email, status: 500, valid: false, reason: `Validation error: ${error.message || 'Unknown error'}` };
  }
};

const validateFullName = async (firstName, lastName) => {
  const validateName = async (name) => {
    if (!validator.isAlpha(name) || !validator.isLength(name, { min: 1, max: 50 })) {
      return { field: name, status: 400, valid: false, reason: 'Invalid format' };
    }

    const badWordKey = 'badWords';
    const badWordExists = await isMemberOfSet(badWordKey, name);
    if (badWordExists) {
      return { field: name, status: 400, valid: false, reason: 'Contains inappropriate content' };
    }

    return { field: name, status: 200, valid: true };
  };

  const firstNameValidation = await validateName(firstName);
  if (!firstNameValidation.valid) return { ...firstNameValidation, field: firstName };

  const lastNameValidation = await validateName(lastName);
  if (!lastNameValidation.valid) return { ...lastNameValidation, field: lastName };

  const fullName = `${firstName} ${lastName}`;
  const celebKey = 'celebrityNames';
  const isCelebrity = await isMemberOfSet(celebKey, fullName);
  if (isCelebrity) {
    return { field: fullName, status: 400, valid: false, reason: 'Matches a celebrity name' };
  }

  return { field: fullName, status: 200, valid: true };
};

const validatePhoneNumber = async (phone) => {
  const phoneRegex = /^(\+1[-\s.]?)?\(?([2-9][0-9]{2})\)?[-\s.]?([2-9][0-9]{2})[-\s.]?([0-9]{4})$/;
  const match = phone.match(phoneRegex);
  if (!match) return { field: phone, status: 400, valid: false, reason: 'Invalid phone format' };

  const areaCode = match[2];
  const areaCodeKey = 'areaCodes';
  const isValid = await isMemberOfSet(areaCodeKey, areaCode);

  if (isValid === 1) {
    return { field: phone, status: 200, valid: true };
  } else {
    return { field: phone, status: 400, valid: false, reason: 'Invalid area code' };
  }
};

const validatePassword = (password) => {
  const minLength = 5;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasSpaces = /\s/.test(password);

  if (password.length < minLength) {
    return { field: password, status: 400, valid: false, reason: `Password must be at least ${minLength} characters long` };
  }

  if (hasSpaces) {
    return { field: password, status: 400, valid: false, reason: 'Password must not contain spaces' };
  }

  if (!hasUppercase) {
    return { field: password, status: 400, valid: false, reason: 'Password must contain at least one uppercase letter' };
  }

  if (!hasLowercase) {
    return { field: password, status: 400, valid: false, reason: 'Password must contain at least one lowercase letter' };
  }

  if (!hasNumber) {
    return { field: password, status: 400, valid: false, reason: 'Password must contain at least one number' };
  }

  if (!hasSpecialChar) {
    return { field: password, status: 400, valid: false, reason: 'Password must contain at least one special character' };
  }

  return { field: password, status: 200, valid: true };
};

module.exports = {
  validateEmail,
  validateFullName,
  validatePhoneNumber,
  validatePassword
};
