// fitnessProfile.js

const mongoose = require('mongoose');

const fitnessProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  targetWeight: {
    type: Number,
    required: true
  },
  fitnessGoals: {
    type: [String], // You can modify this to fit your specific goals structure
    required: true
  }
});

const FitnessProfile = mongoose.model('FitnessProfile', fitnessProfileSchema);

module.exports = FitnessProfile;
