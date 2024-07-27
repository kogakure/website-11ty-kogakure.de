const outdent = require('outdent')({
	newline: ' ',
});

module.exports = {
	product: function (asin, alt = '', lang = 'de') {
		let url;
		const amazonImageUrl = `https://images-na.ssl-images-amazon.com/images/P/${asin}.01.LZZZZZZZ.jpg`;

		if (lang === 'en') {
			url = `https://www.amazon.com/gp/product/${asin}`;
		} else {
			url = `http://www.amazon.de/gp/product/${asin}`;
		}

		const html = outdent`
    <a class="product" href="${url}" rel="nofollow noopener noreferrer external" target="_blank">
      <img
    		data-umami-event="${alt}"
        alt="${alt}"
        class="product-cover"
        src="${amazonImageUrl}"
      />
    </a>`;

		return html;
	},
	productshelf: function (content) {
		return outdent`
    <div class="product-shelf">
      ${content}
    </div>`;
	},
	banner: function (content, summary, open = false) {
		let isOpen;

		if (open) {
			isOpen = 'open';
		} else {
			isOpen = '';
		}

		return outdent`
    <aside>
      <details ${isOpen} class="banner">
        <summary>${summary}</summary>
        ${content}
      </details>
    </aside>`;
	},
	figure: function (content, caption = false) {
		let captionText = caption;

		if (caption) {
			captionText = `<figcaption>${caption}</figcaption>`;
		} else {
			captionText = '';
		}

		return outdent`
      <figure class="image-figure">
        <div class="image-figure-image-container">${content}</div>
        ${captionText}
      </figure>`;
	},
	duoColorImage: function (light, dark, alt = '') {
		return outdent`
      <div class="show-light">
        <img src="${light}" alt="${alt}" />
      </div>
      <div class="show-dark">
        <img src="${dark}" alt="${alt}" />
      </div>`;
	},
	more: function (text, url, external = false) {
		let externalLink;

		if (external) {
			externalLink = 'rel="nofollow noopener noreferrer external" target="_blank"';
		} else {
			externalLink = '';
		}

		const html = outdent`
    <a href="${url}" ${externalLink} data-umami-event="${text}">${text}<span class="more-icon">
        <svg aria-hidden="true" viewBox="0 0 24 24" width="1em" height="1em">
          <use xlink:href="#arrow-right"></use>
        </svg>
      </span>
    </a>`;

		return html;
	},
	download: function (text, url, external = false) {
		let externalLink;

		if (external) {
			externalLink = 'rel="nofollow noopener noreferrer external" target="_blank"';
		} else {
			externalLink = '';
		}

		const html = outdent`
    <a href="${url}" ${externalLink} data-umami-event="${text}">${text}<span class="download-icon">
        <svg aria-hidden="true" viewBox="0 0 24 24" width="1em" height="1em">
          <use xlink:href="#download"></use>
        </svg>
      </span></a>`;

		return html;
	},
	email: function (text, key = false) {
		const downloadText = 'Download public key (ProtonMail/GPG)';
		const link = outdent`
    <a id="email" class="objuscated" href="mailto:hey (at) imhoff (dot) name" data-umami-event="${text}">${text}</a>`;
		const keyDownload = outdent`
    <span id="lock-box" class="lock-box hidden">
      <a
				data-umami-event="${downloadText}"
        aria-label="${downloadText}"
        href="https://www.stefanimhoff.de/downloads/publickey.hey@stefanimhoff.de-9cb867d4ccd2c1d7d9fde82f4b649797f3e007a9.asc"
        title="${downloadText}"
      >
        <svg class="lock-icon" aria-hidden="true" viewBox="0 0 24 24" width="1em" height="1em">
          <use xlink:href="#lock"></use>
        </svg>
      </a></span>`;

		return `${link} ${key ? keyDownload : ''}`;
	},
	youtube: function (id) {
		return outdent`
    <div class="video-wrapper">
      <iframe src="https://www.youtube.com/embed/${id}"
        frameborder="0" allowfullscreen
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
      </iframe>
    </div>`;
	},
};
