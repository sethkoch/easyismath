var usersController = require('../users/usercontroller.js');

module.exports = function(app, express) {
  app.post('/api/data', usersController.getUserData);
};