const express = require('express');
const router = express.Router();
const BiometricData = require('../models/BiometricData');
const { protect } = require('../middleware/auth');

// Add biometric data
router.post('/', protect, async (req, res) => {
  try {
    const { type, value, unit, date } = req.body;
    if (!type || value === undefined) return res.status(400).json({message:'Missing fields'});
    const record = new BiometricData({ userId: req.user._id, type, value, unit, date });
    await record.save();
    res.status(201).json(record);
  } catch (err) {
    console.error(err);
    res.status(500).json({message:'Server error'});
  }
});

// Get biometric history by type
router.get('/:type', protect, async (req, res) => {
  try {
    const type = req.params.type;
    const data = await BiometricData.find({ userId: req.user._id, type }).sort({ date: 1 });
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({message:'Server error'});
  }
});

module.exports = router;
