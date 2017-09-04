PortfolioApp.controller('RepoController', ['GithubService', function (GithubService) {
    console.log('RepoController loaded.')
    var vm = this;
    vm.repos = GithubService.repos;
    
    // Search repo feature
    // vm.searchRepo = {};
    // vm.searchRepos = function () {
    //     vm.searchRepo = vm.search;
    // }
    
}]);
