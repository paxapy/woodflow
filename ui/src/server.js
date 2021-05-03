require('dotenv').config();

import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
const { createProxyMiddleware } = require('http-proxy-middleware');

const { PORT, NODE_ENV, API_HOST } = process.env;
const dev = NODE_ENV === 'development';

const app = polka() // You can also use Expresso

if (dev) {
	app.use('/uploads', createProxyMiddleware({ target: API_HOST, changeOrigin: true }));
}

app.use(
	compression({ threshold: 0 }),
	sirv('static', { dev }),
	sapper.middleware({
		session: () => ({
			API_HOST,
		}),
	}),
)
.listen(PORT, err => {
	if (err) console.log('error', err);
});
