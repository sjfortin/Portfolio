// set port to deployment variable or local environment
var express = require('express');
var path = require('path'); 
var app = express();

// set port to deployment variable or local environment
var port = process.env.PORT || 5000; 

// serve static public files
app.use(express.static('server/public')); 

// Using requst module to make HTTP requests from the server
// https://www.npmjs.com/package/request
var request = require('request');

// API Key & username are environment variables in Heroku
var username = process.env.USER_NAME || require('./config.js').username;
var oauthToken = process.env.GIT_TOKEN || require('./config.js').oauthToken;

// Can this be removed?
app.use(express.static('public'));

// Set user url and headers
var user_options = {
  url: 'https://api.github.com/users/' + username,
  headers: {
    'User-Agent': 'request',
    'Authorization': 'token ' + oauthToken
  }
};

// Moved API call into server to protect oAuthToken
// Get github user data
app.get('/github/user', function (req, res) {
  request(user_options, function (error, response, body) {
    if (response && response.statusCode == 200) {
      res.send(body);
    } else {
      res.sendStatus(500);
    }
  });
});

// Set repo url and headers
var repo_options = {
  url: 'https://api.github.com/users/' + username + '/repos?per_page=50',
  headers: {
    'User-Agent': 'request',
    'Authorization': 'token ' + oauthToken
  }
};

// Moved API call into server to protect oAuthToken
// Get github repo data
app.get('/github/repos', function (req, res) {
  request(repo_options, function (error, response, body) {
    if (response && response.statusCode == 200) {
      res.send(body);
    } else {
      res.sendStatus(500);
    }
  });
});

// route to send to index.html file
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

// Listens for connections on set port
app.listen(port, function () {
  console.log('localhost running on port', port);
});
