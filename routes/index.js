exports.index = function(db) {
  return function(req, res) {
    db.all("SELECT rowid AS id, author, title, post FROM blogposts", function(err, posts) {
      res.render('blog', { 'posts': posts });
    });
  };
};

exports.newpost = function(req, res){
  res.render('newpost', { title: 'Add New Post' });
};

exports.addpost = function(db) {
  return function(req,res) {

    console.log(JSON.stringify(req));
    res.render('temp', { 'req': req});
    // Get our form values. These rely on the "name" attributes
    //var author = req.body.author;
    //var title = req.body.title;
    //var post = req.body.post;

    //var stmt = db.prepare("INSERT INTO blogposts(author,title,post) VALUES (#{author},#{title},#{post})");
    //stmt.run();
    //stmt.finalize();
    //db.close();
    //res.location("/");
    //// And forward to success page
    //res.redirect("userlist");
  };
};
