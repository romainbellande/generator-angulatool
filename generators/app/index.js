'use strict';

var generators = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = generators.Base.extend({

  prompting: function () {
    var done = this.async();
    this.log(yosay(
      'Welcome to the perfect ' + chalk.red('generator-angulatool') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname
    }];

    this.prompt(prompts).then(function (props) {
      this.props = props;
      this.log(props.name);
      done();
    }.bind(this));
  },

  writing: {

    config: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'), {
          name: this.props.name
        }
      );

      this.fs.copyTpl(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('app/src/server/_config.js'),
        this.destinationPath('app/src/server/config.js'), {
          name: this.props.name
        }
      );

      this.fs.copy(
        this.templatePath('_bowerrc'),
        this.destinationPath('.bowerrc')
      );
    },

    all: function () {
      this.fs.copy(
        this.templatePath('**/*.*'),
        this.destinationPath('.'),
        {
          globOptions: {
            ignore: ['_*']
          }
        }
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
