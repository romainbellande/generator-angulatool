var sharedConfig = require('../../karmaConf');

module.exports = function (config) {
  var conf = sharedConfig();

  conf.files = conf.files.concat([
    '../app/server/**/*Spec.js'
  ]);

  config.set(conf);
};
