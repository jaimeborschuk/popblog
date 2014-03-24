var express = require('express');
var app = express();

app.get('/pop', function(req, res){
  res.send('pop blog');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});