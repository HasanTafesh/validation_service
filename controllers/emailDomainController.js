const emailDomainRepository = require('../repositories/emailDomainRepository');

const createEmailDomain = async (req, res) => {
  try {
    const emailDomain = await emailDomainRepository.create(req.body);
    res.status(201).json(emailDomain);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateEmailDomain = async (req, res) => {
  try {
    const emailDomain = await emailDomainRepository.update(req.params.id, req.body);
    res.json(emailDomain);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteEmailDomain = async (req, res) => {
  try {
    const emailDomain = await emailDomainRepository.delete(req.params.id);
    res.json(emailDomain);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getEmailDomain = async (req, res) => {
  try {
    const emailDomain = await emailDomainRepository.findById(req.params.id);
    if (!emailDomain) {
      return res.status(404).json({ error: 'Email Domain not found' });
    }
    res.json(emailDomain);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllEmailDomains = async (req, res) => {
  try {
    const emailDomains = await emailDomainRepository.findAll();
    res.json(emailDomains);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createEmailDomain,
  updateEmailDomain,
  deleteEmailDomain,
  getEmailDomain,
  getAllEmailDomains,
};
