const mongoose = require('mongoose');

const BiometricSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['weight','heart_rate','sleep_duration','blood_pressure','steps'], required: true },
  value: { type: Number, required: true },
  unit: { type: String },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('BiometricData', BiometricSchema);
