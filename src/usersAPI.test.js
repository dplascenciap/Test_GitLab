const { Gitlab } = require('@gitbeaker/rest');

const token_codewise_test = 'glpat-xg9YG5znqdqLznz3hgxy'

// Instantiate a GitLab client
const api = new Gitlab({
    token: token_codewise_test,
});

const projectApi = new Gitlab({
    host: 'https://gitlab.com/api/v4/users/mikey.walkerrr/projects?access_token=glpat-xg9YG5znqdqLznz3hgxy',
    token: 'glpat-xg9YG5znqdqLznz3hgxy'
})


test('Ensure users name is correct', async () => {
    // Fetch the user information
    const user = await api.Users.showCurrentUser();

    // Assert that the user's name is 'John Doe'
    expect(user.name).toBe('Mikey Walker');
});

test('Ensure project name is correct', async () => {
    // Fetch the project information
    let projects = await projectApi.Projects.all({ maxPages: 2 });

    // Assert that the project's name is Codewise-Test
    expect(projects[0].name).toBe('Codewise-Test');
});

test('Ensure repository is not empty', async () => {
    // Fetch the project information
    let projects = await projectApi.Projects.all({ maxPages: 2 });

    // Assert that the project is not an empty repo
    expect(projects[0].empty_repo).toBeFalsy();
});

test('Ensure user is owner of the project', async () => {
    // Fetch the project information
    let projects = await projectApi.Projects.all({ maxPages: 2 });
    // Fetch the user's information
    const user = await api.Users.showCurrentUser();

    // Assert that the project is not an empty repo
    expect(projects[0].owner.username).toEqual(user.username);
});