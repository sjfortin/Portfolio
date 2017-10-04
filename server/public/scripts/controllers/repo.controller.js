PortfolioApp.controller('RepoController', ['GithubService', function (GithubService) {
    console.log('RepoController loaded.')
    var vm = this;
    vm.repos = GithubService.repos;
    vm.orderBy = '-pushed_at';

    vm.orderByRepoName = function () {
        if (vm.orderBy === 'name') {
            vm.orderBy = '-name';
        } else {
            vm.orderBy = 'name';
        }
    }
    vm.orderByCreatedDate = function () {
        if (vm.orderBy === '-created_at') {
            vm.orderBy = 'created_at';
        } else {
            vm.orderBy = '-created_at';
        }
    }

}]);
