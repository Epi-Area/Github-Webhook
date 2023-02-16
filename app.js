//const { createEventHandler: COW } = require("@octokit/webhooks");
//const express = require("express");
//const app = express();
//
//const client = new COW({
//  appId: 287851,
//  privateKey: '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'
//});
//
//app.get("/", (req, res) => {
//    res.send("Hello World!");
//});
//
//app.get("/webhooks", (req, res) => {
//    client.("star.created", ({ octokit, payload }) => {
//        res.send({
//            owner: payload.repository.owner.login,
//            repo: payload.repository.name,
//            body: "Hello, World!"
//        });
//    });
//});
//
//
//app.listen(3001, () => {
//    console.log("Server running on port 3000");
//});

const { Octokit } = require('@octokit/rest');

// Create a new Octokit client instance with your personal access token
const client = new Octokit({
  auth: "<AUTH_TOKEN>",
});

// Set the webhook payload configuration
const config = {
  url: "<NGROK>/api/v1/github/info",
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