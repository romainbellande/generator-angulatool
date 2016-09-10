angular
  .module('app', [
    'app.controllers',
    'app.directives',
    'app.components',
    'app.services',
    'app.resources',
    'app.constants',
    'ui.router',
  ])
  .config(function ($httpProvider) {
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
})
.run();
