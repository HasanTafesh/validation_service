const areaCodeRepository = require('../repositories/areaCodeRepository');

const createAreaCode = async (req, res) => {
  try {
    const areaCode = await areaCodeRepository.create(req.body);
    res.status(201).json(areaCode);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateAreaCode = async (req, res) => {
  try {
    const areaCode = await areaCodeRepository.update(req.params.id, req.body);
    res.json(areaCode);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteAreaCode = async (req, res) => {
  try {
    const areaCode = await areaCodeRepository.delete(req.params.id);
    res.json(areaCode);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAreaCode = async (req, res) => {
  try {
    const areaCode = await areaCodeRepository.findById(req.params.id);
    if (!areaCode) {
      return res.status(404).json({ error: 'Area Code not found' });
    }
    res.json(areaCode);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllAreaCodes = async (req, res) => {
  try {
    const areaCodes = await areaCodeRepository.findAll();
    res.json(areaCodes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createAreaCode,
  updateAreaCode,
  deleteAreaCode,
  getAreaCode,
  getAllAreaCodes,
};
