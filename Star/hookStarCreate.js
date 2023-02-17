const { Octokit } = require('@octokit/rest');

// Create a new Octokit client instance with your personal access token
const client = new Octokit({
  auth: "<AUTHAPP_TOKEN>",
});

// Set the webhook payload configuration
const config = {
  url: "<NGROK>/<API/SERVICE/WEBHOOK_HANDLER>",
  content_type: "json"
};

// Set the webhook events that you want to listen for
const events = ["star"];

// Create the webhook
client.repos.createWebhook({
  owner: "<OWNER_NAME>",
  repo: "<REPO_NAME>",
  name: "web",
  config: config,
  events: events,
  active: true
})
.then(response => {
  console.log("Webhook created:", response.data);
})
.catch(error => {
  console.error("Error creating webhook:", error);
});