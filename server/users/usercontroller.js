var Q = require('q');
var config = require('../config/config');
var User = require('./usermodel.js');


var findUser = Q.nbind(User.findOne, User);
var createUser = Q.nbind(User.create, User);

module.exports = {
  getUserData: function (req, res, next) {
      var points = 0;
      var userid = req.body.id;
      var medals = req.body.medals;
      var level = req.body.level;
      // console.log(userid);

      // check to see if user already exists
      findUser({userid: userid})
        .then(function (user) {
          if (!user) {
            return createUser ({
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
            })
          }
          if (user) {
            res.json(user);
          }
        })
        .fail(function (error) {
        next(error);
      });

    }
  }