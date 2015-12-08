#!/usr/bin/env node

var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function(req, res) {
  res.send('success');
});


app.get('/write', function(req, res) {

  fs.writeFile('/var/lib/test/' + process.env.OPENSHIFT_BUILD_NAMESPACE + '.txt', process.env, function(err) {
    console.log('file written');
  }); 
  res.send('write success \n');
});


var server = app.listen(8080, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
