PortfolioApp.service('GithubService', function($http) {

  // Object that will store our user data
  var user = {};
  //Call to Github API to fetch user's profile info
  function githubProfile(){
    return $http({
      method: 'GET',
      url: '/github/user/',
    }).then(function(response) {
      user.data = response.data;
    });
  }


  // Object that will store our repo data
  var repos = {};
  
  //Call to Github API to fetch list of user's repos
  function githubRepos(){
    $http({
      method: 'GET',
      url: '/github/repos/'
    }).then(function(response) {
      repos.data = response.data;
    });
  }


  // Make requests for data when the service is created.
  // This will make our data appear to load faster.
  githubProfile();
  githubRepos();

  // Return objects and functions allowing them to be used
  // in our controllers.
  return {
    user: user,
    githubProfile: githubProfile,
    repos: repos,
    githubRepos: githubRepos
  }
});
