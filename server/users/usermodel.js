var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: {
    type: String
  },
  email: {
    type: String
  },
  points: {
    type: Number
  },
  userid: String,
  medals: [],
  level: {}
});

module.exports = mongoose.model('users', UserSchema);