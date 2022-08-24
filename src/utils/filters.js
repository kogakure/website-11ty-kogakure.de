const markdownIt = require('markdown-it');
const moment = require('moment');

module.exports = {
	sortBySortKey: function (values) {
		return values.slice().sort((a, b) => a.sort.localeCompare(b.sort));
	},
	markdown: function (value) {
		let markdown = markdownIt({
			html: true,
		});

		if (typeof value === 'string') {
			return markdown.render(value);
		}
	},
	dateToFormat: function (date, format = 'MMMM Do, YYYY') {
		return moment(date).format(format);
	},
	dateToISO: function (date) {
		return moment(date).format();
	},
};
