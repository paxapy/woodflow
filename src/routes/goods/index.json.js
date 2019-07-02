import goods from './goods.js';


const lookup = new Map();
goods.forEach(good => {
	lookup.set(good.slug, JSON.stringify(good));
});

export function get(req, res, next) {

	const category = req.query && req.query.category;
	const slug = req.query && req.query.slug;

	if (category) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.end(JSON.stringify(goods.filter(g => g.category == category)));
  } else if (slug && lookup.has(slug)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.end(lookup.get(slug));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});
		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
