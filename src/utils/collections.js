module.exports = {
  sortedBookPages: function (collection) {
    return collection.getFilteredByTag('book').sort(function (a, b) {
      return a.data.priority - b.data.priority;
    });
  },
};
