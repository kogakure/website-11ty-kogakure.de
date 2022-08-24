const pluginLazyImages = require('eleventy-plugin-lazyimages');
const filterNbsp = require('eleventy-nbsp-filter');

const filters = require('./src/utils/filters.js');
const shortcodes = require('./src/utils/shortcodes.js');
const collections = require('./src/utils/collections.js');

module.exports = function (config) {
	// Plugins
	if (process.env.ELEVENTY_ENV == 'production') {
		config.addPlugin(pluginLazyImages);
	}

	// Markdown It
	let markdownIt = require('markdown-it');
	let markdownItGitHubHeadings = require('markdown-it-github-headings');
	let markdownItExternalAnchor = require('markdown-it-external-anchor');
	let options = {
		html: true,
	};

	let markdownLib = markdownIt(options)
		.use(markdownItGitHubHeadings)
		.use(markdownItExternalAnchor, {
			domain: 'www.kogakure.de',
			class: 'external',
		});

	config.setLibrary('md', markdownLib);

	// Compress and combine JS files
	config.addFilter('jsmin', require('./src/utils/minify-js.js'));

	// Minify the HTML in production
	if (process.env.ELEVENTY_ENV == 'production') {
		config.addTransform('htmlmin', require('./src/utils/minify-html.js'));
	}

	// Shortcodes
	config.addShortcode('download', shortcodes.download);
	config.addShortcode('duoColorImage', shortcodes.duoColorImage);
	config.addShortcode('email', shortcodes.email);
	config.addShortcode('more', shortcodes.more);
	config.addShortcode('product', shortcodes.product);
	config.addShortcode('youtube', shortcodes.youtube);
	config.addPairedShortcode('banner', shortcodes.banner);
	config.addPairedShortcode('figure', shortcodes.figure);
	config.addPairedShortcode('productshelf', shortcodes.productshelf);

	// Filters
	Object.keys(filters).forEach((filterName) => {
		config.addFilter(filterName, filters[filterName]);
	});
	config.addFilter('nbsp', filterNbsp(2, 10));

	// Watch for changes and reload
	config.addWatchTarget('src/assets');

	// Copy static files to dist
	config.addPassthroughCopy({
		'src/static/**/*.{xml,html,ico}': '.',
	});
	config.addPassthroughCopy({
		'src/static/.well-known/*': '.well-known',
	});
	config.addPassthroughCopy({
		'src/downloads': 'downloads',
	});
	config.addPassthroughCopy({
		'src/assets/fonts': 'assets/fonts',
	});
	config.addPassthroughCopy({
		'src/assets/images': 'assets/images',
	});

	// Deep-Merge
	config.setDataDeepMerge(true);

	// Custom Collections
	Object.keys(collections).forEach((collectionName) => {
		config.addCollection(collectionName, collections[collectionName]);
	});

	// Set input and output folders
	return {
		dir: {
			input: 'src',
			data: 'data',
			includes: 'includes',
			layouts: 'layouts',
			output: 'dist',
		},
		templateFormats: ['njk', 'md', '11ty.js'],
		htmlTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk',
		passthroughFileCopy: true,
	};
};
