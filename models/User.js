const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  hostel: {
    type: String,
    required: true,
  },
  roomNumber: {
    type: Number,
    required: true,
  },
  avatar: {
    type: Number,
    required: true,
  },
  commendsNumber: Number,
  reportsNumber: Number,
});

module.exports = mongoose.model('User', UserSchema);
