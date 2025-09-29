const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number },
  gender: { type: String },
  height: { type: Number },
  weight: { type: Number },
  activityLevel: { type: String, enum: ['low','moderate','high'], default: 'moderate' },
  goals: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now }
});

module.exports = require('mongoose').model('User', UserSchema);
