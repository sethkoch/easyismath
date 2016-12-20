var _ = require('lodash');

var config = {
  dev: 'development',
  prod: 'production',
  port: process.env.PORT || 8080,
  expiresIn: '24h',
  secrets: {
    jwt: process.env.JWT || 'silence'
  }
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.env = process.env.NODE_ENV;

envconfig = require('./' + config.env);

module.exports = _.merge(config, envconfig);