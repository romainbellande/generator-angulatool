var sharedConfig = require('../../karmaConf');

module.exports = function (config) {
  var conf = sharedConfig();

  conf.files = conf.files.concat([
    '../app/client/**/*Spec.js'
  ]);

  config.set(conf);
};
