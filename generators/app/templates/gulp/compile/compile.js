var compileBabel = require('./babel/compileBabel');
var compileJade = require('./jade/compileJade');

var compile = function () {
  compileBabel();
  compileJade();
};

module.exports = compile;
