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
    .when('/resume', {
      templateUrl: '/views/templates/resume.html',
      controller: 'ResumeController as rc'
    })
    .otherwise({
      redirectTo: '/home'
    });
});