exports.index = function(req, res) {
    var response = {title: "POP"};
    //db.each("SELECT rowid AS id, title FROM blogposts", function(err, row) {
    //  console.log(row.id + ":" + row.title);
    //  //res.render('index', {
    //  //  "posts" : row
    //  //});
    //  // response[row.id] = row.title;
    //});
    res.render('index', response);
};

exports.blog = function(db) {
  return function(req, res) {
    db.each("SELECT rowid AS id, title FROM blogposts", function(err, row) {
      res.render('blog', {
        'posts': row
      });
    });
  };
};

//exports.index = function(db) {
//  return function(req, res){
//    var response = {title: "POP"};
//      console.log(row.id + ":" + row.title);
//      //res.render('index', {
//      //  "posts" : row
//      //});
//      // response[row.id] = row.title;
//      res.render('index', response);
//    });
//  };
//};
