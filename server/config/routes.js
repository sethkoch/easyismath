(function() {

  var usersController = require('../users/usercontroller.js');
  var gradeonemissionone = require('../harddata/gradeone/missionone.js');
  var gradeonemissiontwo = require('../harddata/gradeone/missiontwo.js');
  var gradeonemissionthree = require('../harddata/gradeone/mission3.js');
  var gradeonemissionfour = require('../harddata/gradeone/mission4.js');

  module.exports = function(app, express) {
    app.post('/api/data', usersController.getUserData);
    app.post('/api/rewardmedal', usersController.addMedal);
    app.post('/api/gradeonemissionone', gradeonemissionone.sendData);
    app.post('/api/gradeonemissiontwo', gradeonemissiontwo.sendData);
    app.post('/api/gradeonemissionthree', gradeonemissionthree.sendData);
    app.post('/api/gradeonemissionfour', gradeonemissionfour.sendData);
  };

})();