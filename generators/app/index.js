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

      this.fs.copy(
        this.templatePath('bowerrc'),
        this.destinationPath('.bowerrc')
      );

      this.fs.copy(
        this.templatePath('_eslint.json'),
        this.destinationPath('eslint.json')
      );

      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
    },

    gulp: function () {
      this.fs.copy(
        this.templatePath('_gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );

      this.fs.copy(
        this.templatePath('_gulp/_lint/_lint.js'),
        this.destinationPath('gulp/lint/lint.js')
      );

      this.fs.copy(
        this.templatePath('_gulp/_compile/_babel/_compileBabel.js'),
        this.destinationPath('gulp/compile/babel/compileBabel.js')
      );

      this.fs.copy(
        this.templatePath('_gulp/_compile/_jade/_compileJade.js'),
        this.destinationPath('gulp/compile/jade/compileJade.js')
      );

      this.fs.copy(
        this.templatePath('_gulp/_compile/_stylus/_compileStylus.js'),
        this.destinationPath('gulp/compile/stylus/compileStylus.js')
      );

      this.fs.copy(
        this.templatePath('_gulp/_compile/_compile.js'),
        this.destinationPath('gulp/compile/compile.js')
      );

      this.fs.copy(
        this.templatePath('_gulp/_dogen/_dogen.js'),
        this.destinationPath('gulp/dogen/dogen.js')
      );
    },

    server: function () {
      this.fs.copy(
        this.templatePath('_app/_src/_server/_index.js'),
        this.destinationPath('app/src/server/index.js')
      );
    },

    client: function () {
      this.fs.copy(
        this.templatePath('_app/_src/_client/_index.jade'),
        this.destinationPath('app/src/client/index.jade')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
