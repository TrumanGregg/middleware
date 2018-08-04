// Simple logger middleware for a node.js application.

var express = require("express");
var path = require("path");
var fs = require("fs");

// Creates express application.
var app = express();

// Defines the first express function to be run.
app.use(function(request, response, next) {
  console.log("Request IP:" + request.url);
  console.log("Request Date" + new Date());
  next();
});

// ... Other Middleware functions.

app.listen(3000, function() {
  console.log("App started on port 3000.");
});
