const { Gitlab } = require('@gitbeaker/rest');

const token_codewise_test = 'glpat-xg9YG5znqdqLznz3hgxy'

// Instantiate a GitLab client
const api = new Gitlab({
    token: token_codewise_test,
});

test('Example test', async () => {
    // Fetch the user information
    const user = await api.Users.showCurrentUser();

    // Assert that the user's name is 'John Doe'
    expect(user.name).toBe('Mikey Walker');
});