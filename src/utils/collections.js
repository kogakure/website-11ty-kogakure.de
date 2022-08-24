module.exports = {
	sortedGermanBookPages: function (collection) {
		return collection.getFilteredByTags('book', 'german').sort(function (a, b) {
			return a.data.priority - b.data.priority;
		});
	},
	sortedEnglishBookPages: function (collection) {
		return collection.getFilteredByTags('book', 'english').sort(function (a, b) {
			return a.data.priority - b.data.priority;
		});
	},
};
