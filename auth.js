exports.auth = function(mongoCol) {return function (req, res, next) {
	var authFail = function () {
		res.statusCode = 401;
		res.end();
	};

	var authOk = function (account) {
		res.end(JSON.stringify(account));
	};

	if (req.method === 'POST') {
		var body = req.body;
		if (!body.username) {
			authFail();
			return;
		}

		mongoCol.find({_id:body.username}).toArray(function(err,results){
			if (results.length === 0) {
				authFail();
				return;
			}
			var account = results[0];
			if (account.password) {	// password already set
				if (body.password == account.password) {
					authOk(account);
				} else {
					authFail();
				}
			} else {	// new user
				if (body.password) {
					// set password
					mongoCol.update({_id:body.username}, {password:body.password}, function(err){
						account.password = body.password;
						authOk(account);
					});
				} else {
					authFail();
				}
			}
		});
	} else {
		authFail();
	}
}};