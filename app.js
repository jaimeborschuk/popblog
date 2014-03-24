var express = require('express');
var routes = require('./routes');
var app = express();
var dbfile = "popblog.db";
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(dbfile);
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);
app.get('/blog', routes.blog(db));

app.get('/admin', function(req, res){
  res.send('pop blog admin');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
