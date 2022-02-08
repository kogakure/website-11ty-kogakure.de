const animation = 'slide-up';
const delay = 300;
const duration = 800;
const easing = 'ease-out-sine';

module.exports = {
  isProduction: process.env.ELEVENTY_ENV === 'production',
  buildTime: new Date(),
  title: '木隠',
  description: 'Ninja, Ninjutsu und Kampfkunst',
  url: 'https://www.kogakure.de',
  author: 'Stefan Imhoff',
  faviconPath: '/assets/images/branding/favicons/',
  twitter: '@kogakure',
  animationDelay: `data-sal=${animation} data-sal-duration=${duration} data-sal-delay=${delay} data-sal-easing=${easing}`,
  animation: `data-sal=${animation} data-sal-duration=${duration} data-sal-easing=${easing}`,
};
