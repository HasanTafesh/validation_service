const { validateEmail, validateFullName, validatePhoneNumber, validatePassword } = require('../services/validationService'); // Make sure to import validatePassword

const validate = async (req, res) => {
  const results = [];
  const data = Array.isArray(req.body) ? req.body : [req.body];

  for (const item of data) {
    const result = {};
    for (const [key, value] of Object.entries(item)) {
      if (key.toLowerCase() === 'email') {
        result[key] = await validateEmail(value);
      } else if (key.toLowerCase() === 'phone') {
        result[key] = await validatePhoneNumber(value);
      } else if (key.toLowerCase() === 'firstname' || key.toLowerCase() === 'lastname') {
        const { firstname, lastname } = item;
        result['fullname'] = await validateFullName(firstname, lastname);
      } else if (key.toLowerCase() === 'password') {
        result[key] = await validatePassword(value);
      }
    }
    results.push(result);
  }

  res.json(results);
};

module.exports = {
  validate
};
