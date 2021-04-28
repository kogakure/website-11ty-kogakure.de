const outdent = require('outdent')({ newline: ' ' });

module.exports = {
  test: function () {
    const html = outdent`
    <div>Hello, World</div>`;

    return html;
  },
};
