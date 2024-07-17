const badWordRepository = require('../repositories/badWordRepository');

const createBadWord = async (req, res) => {
  try {
    const badWord = await badWordRepository.create(req.body);
    res.status(201).json(badWord);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateBadWord = async (req, res) => {
  try {
    const badWord = await badWordRepository.update(req.params.id, req.body);
    res.json(badWord);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteBadWord = async (req, res) => {
  try {
    const badWord = await badWordRepository.delete(req.params.id);
    res.json(badWord);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getBadWord = async (req, res) => {
  try {
    const badWord = await badWordRepository.findById(req.params.id);
    if (!badWord) {
      return res.status(404).json({ error: 'Bad Word not found' });
    }
    res.json(badWord);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllBadWords = async (req, res) => {
  try {
    const badWords = await badWordRepository.findAll();
    res.json(badWords);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createBadWord,
  updateBadWord,
  deleteBadWord,
  getBadWord,
  getAllBadWords,
};
