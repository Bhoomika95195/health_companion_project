const jwt = require('jsonwebtoken');
const User = require('../models/User');
const jwtSecret = process.env.JWT_SECRET || 'dev_secret';

async function protect(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) return res.status(401).json({message:'No token'});
  const token = auth.split(' ')[1];
  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = await User.findById(decoded.id).select('-password');
    if (!req.user) return res.status(401).json({message:'Invalid token user'});
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({message:'Token error'});
  }
}

module.exports = { protect };
