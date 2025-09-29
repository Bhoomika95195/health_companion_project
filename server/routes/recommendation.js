const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const User = require('../models/User');
const BiometricData = require('../models/BiometricData');

// Simple rule-based recommendations
router.get('/workout', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({message:'User not found'});
    // basic rules
    let intensity = 'moderate';
    if (user.activityLevel === 'low') intensity = 'light';
    if (user.activityLevel === 'high') intensity = 'intense';

    const plan = generateWorkoutPlan(intensity);
    res.json({ plan });
  } catch (err) {
    console.error(err);
    res.status(500).json({message:'Server error'});
  }
});

router.get('/meal', protect, async (req, res) => {
  try {
    // Very basic sample meal suggestion
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({message:'User not found'});
    const calories = estimateCalories(user);
    res.json({ meals: generateMealPlan(calories) });
  } catch (err) {
    console.error(err);
    res.status(500).json({message:'Server error'});
  }
});

function generateWorkoutPlan(intensity) {
  if (intensity==='light') {
    return [
      { day: 'Mon', activity: '30 min brisk walk + 10 min stretching' },
      { day: 'Tue', activity: 'Bodyweight circuit: 2 rounds (10 squats, 8 push-ups, 10 lunges)' },
      { day: 'Wed', activity: '30 min cycling or brisk walk' },
      { day: 'Thu', activity: 'Yoga/mobileility 20-30 min' },
      { day: 'Fri', activity: 'Bodyweight circuit: 2 rounds' },
      { day: 'Sat', activity: 'Active rest: light hike or walk' },
      { day: 'Sun', activity: 'Rest/Recovery' }
    ];
  } else if (intensity==='intense') {
    return [
      { day: 'Mon', activity: 'Strength: 4 sets (squats, bench press, rows) 8-10 reps' },
      { day: 'Tue', activity: 'HIIT: 20 min (30s on / 30s off)' },
      { day: 'Wed', activity: 'Cardio 30-40 min' },
      { day: 'Thu', activity: 'Strength: upper body focus 4 sets' },
      { day: 'Fri', activity: 'HIIT or sprint intervals 20 min' },
      { day: 'Sat', activity: 'Active recovery: light cardio + mobility' },
      { day: 'Sun', activity: 'Rest' }
    ];
  } else {
    return [
      { day: 'Mon', activity: 'Strength: full body 3 sets of 8-12' },
      { day: 'Tue', activity: 'Cardio 30 min' },
      { day: 'Wed', activity: 'Yoga / Mobility 20 min' },
      { day: 'Thu', activity: 'Full body strength 3 sets' },
      { day: 'Fri', activity: 'Interval cardio 20-25 min' },
      { day: 'Sat', activity: 'Mix: light strength + walk' },
      { day: 'Sun', activity: 'Rest' }
    ];
  }
}

function estimateCalories(user) {
  // very rough estimate using Mifflin-St Jeor simplified (not medical)
  const weight = user.weight || 70; const height = user.height || 170; const age = user.age || 30;
  let bmr = 10*weight + 6.25*height - 5*age + (user.gender==='male' ? 5 : -161);
  let factor = 1.3;
  if (user.activityLevel === 'low') factor = 1.2;
  if (user.activityLevel === 'high') factor = 1.55;
  return Math.round(bmr * factor);
}

function generateMealPlan(calories) {
  return [
    { day: 'Mon', breakfast: 'Oats with banana + milk', lunch: 'Grilled chicken/Tofu salad', dinner: 'Rice + veg + lentils', calories: Math.round(calories*0.25) },
    { day: 'Tue', breakfast: 'Smoothie with oats and fruit', lunch: 'Quinoa salad', dinner: 'Fish/Paneer with veggies', calories: Math.round(calories*0.25) },
    { day: 'Wed', breakfast: 'Eggs/tofu scramble', lunch: 'Chicken wrap', dinner: 'Stir-fry with rice', calories: Math.round(calories*0.25) }
  ];
}

module.exports = router;
