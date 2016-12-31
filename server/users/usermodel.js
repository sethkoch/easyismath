var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({

  points: Number,
  userid: {
    type: String,
    unique: true
  },
  medals: [],
  grade1: Number,
  grade2: Number,
  grade3: Number,
  grade4: Number,
  grade5: Number,
  grade6: Number
});

module.exports = mongoose.model('users', UserSchema);