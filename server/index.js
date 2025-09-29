require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const biometricRoutes = require('./routes/biometric');
const recommendationRoutes = require('./routes/recommendation');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/health_companion', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=> console.log('MongoDB connected'))
  .catch(err=> console.error('MongoDB connection error', err));

app.use('/api/auth', authRoutes);
app.use('/api/biometrics', biometricRoutes);
app.use('/api/recommendations', recommendationRoutes);

app.get('/', (req, res)=> res.json({status:'ok'}));

app.listen(PORT, ()=> console.log('Server running on port', PORT));
