# Weekend 6 HW  (Part One)
## Start a Portfolio

### Objectives
- Angular practice with multiple views, controllers, and a service
- Front end styling
- Hosting without a database on Heroku

### Setup

- Fork this repo and clone it to your computer
- `npm install`
- Copy **config-dist.js** as **config.js**
- Add your GitHub username and API key to this file (see instructions below to get an API key)
- `npm start`

### Instructions

Create a landing page for yourself as a developer. This is a front end project, it has a simple server set up to serve back your static files. Otherwise, the focus will be on Angular and front end styling.

#### Front End
- Have at least two views. One page about you and one page about your code.
  - One view about you that uses some info from the Github Profile API call
  - One view about your code that uses info from the Github Repo API call.
- Use the `GithubAPI` service to interact with the GitHub API.
  - You will need to generate a token assign it to the `oauthToken` variable.
  - Also assign the `username` variable your GitHub username.
 - [Generate a GitHub Token](https://github.com/settings/tokens). Select only `public_repo` and `read:user`.
- For reference, here is the [API Docs](https://developer.github.com/v3/) for GitHub.
- Style your site.

#### Back End
- You have already been given a simple server. You shouldn't need to change the code but are welcome to make changes.
- As practice, comment each line of code in the server. Make sure you know what each line does.

**Existing Routes**

The following routes have been provided and should work after you've set up your **config.js** file.

- `http://localhost:5000/github/repos` - returns your repositories
- `http://localhost:5000/github/user` - returns your GitHub user information

## Hard Mode

### Deploy
- Deploy the app on Heroku. It doesn't have a database so you can follow the same steps as we did in lecture.
- Here is the repo from the deployment lecture: [https://github.com/devjanaprime/herokuDeploy_noDb
](https://github.com/devjanaprime/herokuDeploy_noDb)
- Use environment variables for your GitHub username and API key, **the config.js file should not be checked in (leave it in the .gitignore)**.

## Submit
- The github url (where the code lives)
- If deployed: The Heroku url (url of the deployed site)
