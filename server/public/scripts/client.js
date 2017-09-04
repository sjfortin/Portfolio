var PortfolioApp = angular.module('PortfolioApp', ['ngRoute']);

/// Routes ///
PortfolioApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'UserController as uc',
    })
    .when('/repos', {
      templateUrl: '/views/templates/repos.html',
      controller: 'RepoController as rc'
    })
    .when('/past-work', {
      templateUrl: '/views/templates/past-work.html',
      controller: 'PastWorkController as pw'
    })
    .otherwise({
      redirectTo: '/home'
    });
});