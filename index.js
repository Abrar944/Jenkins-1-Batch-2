var http = require('http');

// Create a server object
http.createServer(function (req, res) {
  res.write(' Hello Students!\n');
  res.write(' You are in the AWS Cloud.\n');
  res.write(' This is your Jenkins CI/CD pipeline in action.\n');
  res.write(' Node.js app deployed successfully.\n');
  res.end(); // End the response
}).listen(3000); // Server listens on port 3000

console.log('Server running at http://localhost:3000/');
