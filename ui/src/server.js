import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
const { createProxyMiddleware } = require('http-proxy-middleware');

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const app = polka() // You can also use Expresso
if (dev) {
	app.use('/uploads', createProxyMiddleware({ target: 'http://localhost:1337', changeOrigin: true }));
}

app.use(
	compression({ threshold: 0 }),
	sirv('static', { dev }),
	sapper.middleware()
)
.listen(PORT, err => {
	if (err) console.log('error', err);
});
