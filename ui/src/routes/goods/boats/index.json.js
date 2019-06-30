import boats from './_boats.js';

const contents = JSON.stringify(boats.map(boat => {
	return {
		title: boat.title,
		slug: boat.slug
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}
