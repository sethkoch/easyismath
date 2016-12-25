var Q = require('q');
var config = require('../config/config');
var User = require('./usermodel.js');


var findUser = Q.nbind(User.findOne, User);
var createUser = Q.nbind(User.create, User);

module.exports = {
  getUserData: function (req, res, next) {
      var username = req.body.username;
      var password = req.body.password;
      var points = req.body.points;
      var userid = req.body.id;
      var medals = req.body.medals;
      var level = req.body.level;

      // check to see if user already exists
      findUser({userid: userid})
        .then(function (user) {
          if (user) {
            res.json(user);
          }
          else {
            createUser({
              username: username,
              password: password,
              points: points,
              userid: userid,
              medals: medals,
              level: level
            })
            console.log(user_id);
            res.json(user_id);
            next();
          }

        })
        .fail(function (error) {
        next(error);
      });

    }
  }