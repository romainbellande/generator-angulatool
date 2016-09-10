const routes = function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      template: ('<home></home>')
    });
};

angular
  .module('app')
  .config(routes);
