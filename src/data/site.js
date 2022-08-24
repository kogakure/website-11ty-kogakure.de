const animation = 'slide-up';
const delay = 300;
const duration = 800;
const easing = 'ease-out-sine';

module.exports = {
	animation: `data-sal=${animation} data-sal-duration=${duration} data-sal-easing=${easing}`,
	animationDelay: `data-sal=${animation} data-sal-duration=${duration} data-sal-delay=${delay} data-sal-easing=${easing}`,
	author: 'Stefan Imhoff',
	bitcoin: 'bc1quzvqw66khsnrmqh0ds8dprnrtcxfytfa3x2x7m',
	buildTime: new Date(),
	description: {
		de: 'Ninja, Ninjutsu & Kampfkunst',
		en: 'Ninja, Ninjutsu & Martial Arts',
	},
	ethereum: '0x9e177CA8eD880991cb976aFbcC409c5c15Fa0080',
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
