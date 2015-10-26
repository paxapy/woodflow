var keystone = require('keystone');
var Types = keystone.Field.Types;


var Boat = new keystone.List('Boat', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Boat.add({
	title: { type: String, required: true },
	type: { type: Types.Select, options: 'boat, canoe', default: 'canoe' },
	price: { type: Types.Money, currency: 'ru' },
	state: {
		type: Types.Select,
		options: 'draft, published, archived',
		default: 'draft',
		index: true
	},
	image: { type: Types.CloudinaryImage },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 }
	},
});

Boat.schema.virtual('content.full').get(function() {
	return this.content.extended || this.content.brief;
});



Boat.defaultColumns = 'title, type, price, state|20%';
Boat.register();
