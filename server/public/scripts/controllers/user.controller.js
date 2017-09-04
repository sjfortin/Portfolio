PortfolioApp.controller('UserController', function(GithubService){
  console.log('UserController loaded.')
  var vm = this;
  vm.user = GithubService.user;
  vm.linkedin_url = 'https://www.linkedin.com/in/samfortin/';
  vm.changeHamburgerStatus = function() {
    if (vm.hamburgerStatus !== 'is-active') {
      vm.hamburgerStatus = 'is-active';
    } else {
      vm.hamburgerStatus = '';
    }
  }
});
