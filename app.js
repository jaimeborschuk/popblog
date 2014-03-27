var express = require('express');
var path = require('path');
var routes = require('./routes');
var sqlite3 = require("sqlite3").verbose();

var dbfile = "popblog.db";
var db = new sqlite3.Database(dbfile);

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.bodyParser());

app.get('/', routes.index(db));
app.get('/newpost', routes.newpost);
app.post('/addpost', routes.addpost(db));
app.get('/editpost/:id', routes.editpost(db));
app.post('/updatepost/:id', routes.updatepost(db));
app.get('/deletepost/:id', routes.deletepost(db));

app.get('/admin', function(req, res){
  res.send('pop blog admin');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
