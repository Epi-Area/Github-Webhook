const { Octokit } = require('@octokit/rest');

// Create a new Octokit client instance with your personal access token
const client = new Octokit({
  auth: "<AUTHAPP_TOKEN>",
});

// Create the webhook
client.repos.deleteWebhook({
  owner: "<OWNER_NAME>",
  repo: "<REPO_NAME>",
  hook_id: 401394510 // ID of the webhook to delete
})
.then(response => {
  console.log("Webhooks for repository:", response);
})
.catch(error => {
  console.error("Error listing webhooks:", error);
});