exports.index = function(db) {
	return function(req, res){
		var response = {title: "POP"};
    	db.each("SELECT rowid AS id, title FROM blogposts", function(err, row) {
	 	   res.render('index', {
			   "posts" : row
	  	 });
      //console.log(row.id + ":" + row.title);
	  //response[row.id] = row.title;
    	});
	};  
};