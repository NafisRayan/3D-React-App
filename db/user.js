//user.js

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String, 
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  threed: { 
    type: Map,
    of: String,
    default: {}
  }
});

UserSchema.pre('save', function(next) {
  if (!this.threed) {
    this.threed = {};
  }
  
  next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;