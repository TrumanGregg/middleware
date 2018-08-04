// Simple static file sender middleware for a node.js application.

var express = require("express");
var path = require("path");
var fs = require("fs");

// Creates express application.
var app = express();

// Defines the first express function to be run.
app.use(function(request, response, next) {
  // Finds the path where the file should be.
  var filePath = path.join(__dirname, "static", request.url);
  fs.stat(filePath, function(err, fileInfo) {
    // If there is an error opening/accessing the file continue to next middleware.
    if (err) {
      next();
    }
    // If the file exists then call response.sendFile;
    if (fileInfo.isFile()) {
      response.sendFile(filePath);
    }
    // Otherwise continues to next middleware function.
    else {
      next();
    }
  });
});

app.listen(3000, function() {
  console.log("App started on port 3000.");
});
