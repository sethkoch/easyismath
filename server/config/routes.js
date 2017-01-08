var usersController = require('../users/usercontroller.js');
var gradeonemissionone = require('../harddata/gradeone/missionone.js');

module.exports = function(app, express) {
  app.post('/api/data', usersController.getUserData);
  app.post('/api/rewardmedal', usersController.addMedal);
  app.post('/api/gradeonemissionone', gradeonemissionone.sendData);
};