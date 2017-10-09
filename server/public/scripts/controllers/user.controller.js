PortfolioApp.controller('UserController', ['$location', function (GithubService, $location) {
  var vm = this;

  vm.user = GithubService.user;

  vm.linkedin_url = 'https://www.linkedin.com/in/samfortin/';


  // Active/Deactivate Hamburger Menu
  vm.changeHamburgerStatus = function () {
    if (vm.hamburgerStatus !== 'is-active') {
      vm.hamburgerStatus = 'is-active';
    } else {
      vm.hamburgerStatus = '';
    }
  }

  vm.techList = [
    'Javascript',
    'jQuery',
    'AngularJS',
    'Express',
    'Node.js',
    'Bootstrap',
    'Angular Material',
    'Bulma',
    'HTML5',
    'CSS3',
    'MongoDB',
    'PostgreSQL'
  ]
}]);
