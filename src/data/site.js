const animation = 'slide-up';
const delay = 300;
const duration = 800;
const easing = 'ease-out-sine';

module.exports = {
	animation: `data-sal=${animation} data-sal-duration=${duration} data-sal-easing=${easing}`,
	animationDelay: `data-sal=${animation} data-sal-duration=${duration} data-sal-delay=${delay} data-sal-easing=${easing}`,
	author: 'Stefan Imhoff',
	buildTime: new Date(),
	description: {
		de: 'Ninja, Ninjutsu & Kampfkunst',
		en: 'Ninja, Ninjutsu & Martial Arts',
	},
	faviconPath: '/assets/images/branding/favicons/',
	isProduction: process.env.ELEVENTY_ENV === 'production',
	languages: [
		{
			title: 'DE',
			language: 'de',
		},
		{
			title: 'EN',
			language: 'en',
		},
	],
	title: '木隠',
	twitter: '@kogakure',
	url: 'https://www.kogakure.de',
};
