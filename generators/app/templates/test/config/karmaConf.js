module.exports = function () {
  var karmaConf = {
    basePath: '../../',
    frameworks: ['jasmine'],
    files: [
      '../../app/build/client/lib/angular/angular.js',
      '../../app/build/client/lib/angular-mocks/angular-mocks.js',
      '../../app/build/client/lib/angular-ui-router/release/angular-ui-router.js',
      '../../app/build/client/core/app.setup.js',
      '../../app/build/client/core/app.modules.js',
      '../../app/build/client/core/app.routes.js',
      '../../app/build/client/core/app.constants.js',
      '../../app/build/client/components/**/*Service.js',
      '../../app/build/client/components/**/*Component.js'
    ],
    exclude: [
    ],
    reporters: ['progress', 'nyan', 'coverage'],
    preprocessors: {
      '../app/build/client/components/**/*.js': 'coverage'
    },
    coverageReporter: {
      reporters: [
        {
          type: 'text-summary',
          dir: '../coverage/'
        },
        {
          type: 'html',
          dir: '../coverage/',
          subdir: 'report-html'
        }
      ]
    },
    port: 9876,
    colors: false,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  };
  return karmaConf;
};
