var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'boats';
	locals.filters = {
		boat: req.params.boat
	};
	locals.data = {
		boats: []
	};

	view.on('init', function(next) {
		var q = keystone.list('Boat').model.findOne({
			state: 'published',
			slug: locals.filters.boat
		});

		q.exec(function(err, result) {
			locals.data.boat = result;
			next(err);
		});

	});

	view.on('init', function(next) {

		var q = keystone.list('Boat').model.find().where(
            'state', 'published'
        ).limit('4');

		q.exec(function(err, results) {
			locals.data.baots = results;
			next(err);
		});

	});

	// Render the view
	view.render('boat');

};
