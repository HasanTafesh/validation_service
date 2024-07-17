const celebrityNameRepository = require('../repositories/celebrityNameRepository');

const createCelebrityName = async (req, res) => {
  try {
    const celebrityName = await celebrityNameRepository.create(req.body);
    res.status(201).json(celebrityName);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCelebrityName = async (req, res) => {
  try {
    const celebrityName = await celebrityNameRepository.update(req.params.id, req.body);
    res.json(celebrityName);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCelebrityName = async (req, res) => {
  try {
    const celebrityName = await celebrityNameRepository.delete(req.params.id);
    res.json(celebrityName);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCelebrityName = async (req, res) => {
  try {
    const celebrityName = await celebrityNameRepository.findById(req.params.id);
    if (!celebrityName) {
      return res.status(404).json({ error: 'Celebrity Name not found' });
    }
    res.json(celebrityName);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllCelebrityNames = async (req, res) => {
  try {
    const celebrityNames = await celebrityNameRepository.findAll();
    res.json(celebrityNames);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createCelebrityName,
  updateCelebrityName,
  deleteCelebrityName,
  getCelebrityName,
  getAllCelebrityNames,
};
