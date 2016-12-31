
var config = require('../config/config');
var User = require('./usermodel.js');




module.exports = {
  getUserData: function (req, res, next) {
      var points = 0;
      var userid = req.body.id;
      var medals = req.body.medals;
      var level = req.body.level;
      // console.log(userid);

      // check to see if user already exists
      User.findOne({userid: userid}, function(err, user) {
        if (err) throw (err);
        if (user) res.json(user);
        if (!user) {
          var newUser = new User ({
            points: points,
            userid: userid,
            medals: medals,
            level: level,
            grade1: 0,
            grade2: 0,
            grade3: 0,
            grade4: 0,
            grade5: 0,
            grade6: 0
          });
          newUser.save(function(err) {
          if (err) throw (err)
        })
          res.json(user);
        }

      })
    }
  }