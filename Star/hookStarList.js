const { Octokit } = require('@octokit/rest');

// Create a new Octokit client instance with your personal access token
const client = new Octokit({
  auth: "<AUTHAPP_TOKEN>",
});

// Create the webhook
client.repos.listWebhooks({
  owner: "<OWNER_NAME>",
  repo: "<REPO_NAME>"
})
.then(response => {
  console.log("Webhooks for repository:", response.data);
})
.catch(error => {
  console.error("Error listing webhooks:", error);
});