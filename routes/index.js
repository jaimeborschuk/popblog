exports.index = function(db) {
  return function(req, res) {
    db.all("SELECT rowid AS id, author, title, post FROM blogposts", function(err, posts) {
      res.render('blog', { 'posts': posts });
    });
  };
};

exports.newpost = function(req, res){
  res.render('editpost', { pagetitle: 'Add New Post'});
};

exports.addpost = function(db) {
  return function(req,res) {
    var author = req.body.author;
    var title = req.body.title;
    var post = req.body.post;
    var stmt = db.prepare("INSERT INTO blogposts(author,title,post) VALUES (?,?,?)");
    stmt.run(author,title,post);
    stmt.finalize();
    //db.close();
    //res.location("/");
    res.redirect("/");
  };
};

exports.editpost = function(db) {
  return function(req, res){
    db.get("SELECT id,author,title,post from blogposts WHERE id = ?", req.params.id, function(err, post) {
      res.render('editpost', { pagetitle: 'Edit Post', id: post.id, author: post.author, title: post.title, post: post.post });
    });
  };
};

exports.updatepost = function(db) {
  return function(req, res){
    var id = req.params.id;
    var author = req.body.author;
    var title = req.body.title;
    var post = req.body.post;
    var stmt = db.prepare("UPDATE blogposts SET author=?, title=?, post=? where id =?");
    stmt.run(author,title,post,id);
    stmt.finalize();
    //db.close();
    // res.location("/");
    res.redirect("/");
  };
};
exports.deletepost = function(db) {
  return function(req, res){
    var id = req.params.id;
    var stmt = db.prepare("DELETE FROM blogposts where id =?");
    stmt.run(id);
    stmt.finalize();
    //db.close();
    // res.location("/");
    res.redirect("/");
  };
};
