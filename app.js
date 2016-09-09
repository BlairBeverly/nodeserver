var http = require('http');

var static_contents = require('./static.js');

server = http.createServer(function (request, response){
  static_contents(request, response);  //this will serve all static files automatically
  console.log(response.contents)
});

server.listen(8000);
console.log("Running in localhost at port 8000");