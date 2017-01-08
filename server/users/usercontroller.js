
var config = require('../config/config');
var User = require('./usermodel.js');




module.exports = {
  getUserData: function (req, res, next) {
    var points = 0;
    var userid = req.body.id;
    var medals = req.body.medals;
    var level = req.body.level;
    //see if user already exist and send user's data
    User.findOne({userid:userid}, function(err, user) {
      if (err) throw (err);
      if (user) {
        res.json(user);
        return;
      }
      else {
        function makeUser() {
          User.findOne({userid: userid}, function(err, user) {
            if (err) next(err);
            var newUser = new User ({
              points: points,
              userid: userid,
              medals: medals,
              level: level,
              grade1: 'Penguin Troubles',
              grade2: 'Turtle Trouble',
              grade3: 'Hawks Hurting',
              grade4: 'Cows Coughing',
              grade5: 'Whales Whinning',
              grade6: 'Buffaloes Burping'
            });
            newUser.save(function(err) {
              if (err) throw (err);
              res.json(newUser);
            })
          })
        }
        makeUser();
      }
    });
  },

    addMedal: function(req, res, next) {
      var userid = req.body.userid;
      var medal = req.body.medal;
      User.findOneAndUpdate({userid: userid}, {$push:{medals : medal}}, function (err, user){
        if (err) throw err;
        res.json(user);
      })
    }

  }