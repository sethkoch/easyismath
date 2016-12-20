var express = require('express');
var app = express();
var config = require('./config/config');


require('mongoose').connect(config.db.url);

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

module.exports = app;