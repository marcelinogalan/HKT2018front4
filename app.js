var express = require('express'),
app = express(),
port = process.env.PORT || 3000;

var path = require('path');

// Next line to work with build directory: cells app:build
//app.use (express.static(__dirname + '/build/composer-mock-local/vulcanize/'));

// Next line to work with package directory: cells app:package
app.use (express.static(__dirname + '/dist/'));

app.listen(port);

app.get('/', function (req,res) {
  res.sendFile ('index.html', {root: '.'});
});

console.log('Cells Server started on: ' + port);

module.exports = app;