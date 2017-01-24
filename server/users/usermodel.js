(function() {

  var mongoose = require('mongoose');

  var UserSchema = new mongoose.Schema({
    points: Number,
    userid: {
      type: String,
      unique: true
    },
    medals: [String],
    grade1: String,
    grade2: String,
    grade3: String,
    grade4: String,
    grade5: String,
    grade6: String
  });

  module.exports = mongoose.model('users', UserSchema);

})();