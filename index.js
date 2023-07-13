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

// Test variables for the codewise-test project
const host_codewise_test  = 'https://gitlab.com/api/v4/users/dplascenciap/projects?access_token=glpat-ZWJxMautAowswzm6buCZ'
const token_codewise_test = 'glpat-ZWJxMautAowswzm6buCZ'

console.log('Start.')

const apiProject = new Gitlab({
  host: host_codewise_test,
  token: token_codewise_test,
});

// Get list of projects
let projects = await apiProject.Projects.all({ maxPages: 2 });
console.log(projects)

console.log('Done.')