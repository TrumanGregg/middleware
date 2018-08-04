// Simple 404 handler middleware for a node.js application.

var express = require("express");
var path = require("path");
var fs = require("fs");

// Creates express application.
var app = express();

// Defines the last express function to be run.
app.use(function(request, response) {
  response.status(404);
  response.send("File not found!");
});


app.listen(3000, function() {
  console.log("App started on port 3000.");
});
