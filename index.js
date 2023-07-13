/**
 * Original code for a simple API call is left below.
 * This way we can always try a simple test to make sure the module is still
 * working.
 */

/*
import express from 'express'
const app = express()
const port = 3000
// allows us to parse json
app.use(express.json())

app.get('/', (req, res) => res.send('Hello world'))

app.listen(port, () => console.log(`API server ready on http://localhost:${port}`))
*/

/**
 * GitLab API Test
 */

import { Gitlab } from '@gitbeaker/rest';

// Test variables for the test project
const user_name     = 'dplascenciap'
const token_project = 'glpat-ZWJxMautAowswzm6buCZ'
const host_project  = 'https://gitlab.com/api/v4/users/' + user_name + '/projects?access_token=' + token_project

console.log('Start.')

const apiProject = new Gitlab({
  host: host_project,
  token: token_project,
});

const apiUser = new Gitlab({
  token: token_project,
});

// Get list of projects
console.log('-----------------------')
const projects = await apiProject.Projects.all({ maxPages: 2 });
console.log(projects)

// Get current user
console.log('-----------------------')
const currentUser = await apiUser.Users.showCurrentUser();
console.log(currentUser.name)

console.log('Done.')