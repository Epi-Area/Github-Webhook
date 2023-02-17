const { Octokit } = require('@octokit/rest');

// Create a new Octokit client instance with your personal access token
const client = new Octokit({
  auth: "<AUTHAPP_TOKEN>",
});

// Create the webhook
client.repos.updateWebhook({
  owner: "<OWNER_NAME>",
  repo: "<REPO_NAME>",
  hook_id: 401393359, // ID of the webhook to update up
  active: true
})
.then(response => {
  console.log("Webhooks for repository:", response.data);
})
.catch(error => {
  console.error("Error listing webhooks:", error);
});