import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [mdsvex(mdsvexConfig), preprocess({})],

	kit: {
		adapter: adapter({
			pages: 'public',
			assets: 'public'
		}),

		prerender: {
			entries: ['*', '/sitemap.xml', '/rss.xml']
		},

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			// allows vite access to ./posts
			server: {
				fs: {
					allow: ['./']
				}
			}
		}
	}
};

export default config;
