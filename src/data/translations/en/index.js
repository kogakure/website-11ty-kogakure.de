const books = require('./books.json');
const movies = require('./movies.json');
const glossary = require('./glossary.json');

module.exports = {
  homepage: {
    intro:
      'This is 木隠 (jap. *kogakure*, <q>Hidden behind leaves and trees.</q>), a collection of texts about Ninja and Ninjutsu that I started in 1999. Over the years more and more pages, pictures and illustrations were added until finally this book came out of it.',
    tocHeadline: 'Table of Contents',
  },
  downloads: {
    intro:
      'Here you can download the online book as an eBook, 3D models of weapons and tools, and a ninja font.',
    font: {
      headline: 'Iga Ninja Font',
      text:
        'Many years ago, the Iga Ninja Museum published an image of an Iga Ninja cipher on their website. I developed a font from it, which can be downloaded here.',
      more: 'View the Font on GitHub',
      download: 'Download Font',
    },
    cgi: {
      headline: '3D Models of Ninja Weapons and Tools',
      text:
        'For the first version of this website I created 3D models of weapons and tools, which I later converted to `stl` format. The models can be viewed directly in the browser on GitHub and viewed from all sides.',
      more: 'View Weapons and Tools on GitHub',
    },
    book: {
      headline: 'The Book',
      text:
        'The content of this online book is available for **free** download as an eBook.',
      pdf: 'PDF',
      epub: 'EPUB',
      mobi: 'MOBI',
    },
  },
  colophon: {
    intro:
      'This is 木隠. Since 1999 you can read articles, collections of texts and translations on topics related to the Japanese shadow warriors and spies, the Ninja, and their martial art Ninjutsu.\n\nThe idea for this was developed and implemented by Stefan Imhoff, a designer, developer and martial artist from Wolfsburg (today from Hamburg).',
    meaning: {
      headline: 'What Does 木隠 Mean?',
      text:
        'The name *kogakure* (木隠) is Japanese and literally means translated something like <q>Hidden behind leaves and trees</q>.\n\nI got the ideas for this name in reference to the book of the Samurai Tsunetomo Yamamoto, <cite>Hagakure</cite> (<q>Hidden under leaves</q>) and the oldest school in the Bujinkan, <cite>Togakure</cite> (<q>Hidden behind a door</q>).',
    },
    why: {
      headline: 'Why Does This Book Exist?',
      text:
        'Since the beginning of the 90s, I probably first came across Ninjutsu through the Teenage Mutant Hero Turtles, and I have been interested in the Ninja and their world of ideas.\n\nAt that time, the Bujinkan was hard to find in Germany, and it was almost impossible to find a training opportunity. The specialist literature that was available was also more than poor.\n\nIn the search for knowledge, knowledge and information, a collection of notes accumulated over time, which was processed in this book.\n\nThis book does not claim to be complete, nor does it to be absolute, verifiable, historical evidence. It should help all *bugeisha* (warriors) to learn more about the wisdom of this thousand-year-old art.',
    },
    contact: {
      headline: 'Contact',
      text:
        'You can contact me via my email address or various social media platforms on my <a href="https://www.stefanimhoff.de/about/#contact" rel="nofollow noopener noreferrer external" target="_blank">website</a>.\n\nPlease check first if your question has already been answered in the FAQ. I don’t always have the time to respond to every question, but I promise I’ll read every message!',
    },
    faq: {
      headline: 'FAQ',
      subheadline1: 'Where Can I Train?',
      text1:
        'The best way to find a Dōjō for Bujinkan Budō Taijutsu is to use a search engine to search for **Bujinkan** in connection with a city near you. But certainly there will not be as good coverage with Dōjō as in Judo or Karate. There is a very extensive [dojo list](http://www.bujinkan-deutschland.de/dojoliste-bujinkan.html) on the Bujinkai site.\n\nI *don’t* have my own Dōjō and offer *no* training. Kogakure is not a martial art style, it is the name of the book.',
      subheadline2: 'What Books Are There?',
      text2:
        'The selection of specialist books on Ninja and Ninjutsu is very large. However, most of it is in Japanese or English. It’s best to just take a look at my [recommendations](/en/recommendations/).',
      subheadline3: 'Which Books Can You Recommend Me?',
      text3:
        'First I recommend the books of Dr. *Masaaki Hatsumi*. *Andrew Adams* book <cite>Ninja</cite> is good to get an overview. *Stephen K. Hayes* has a lot of philosophical aspects in his books (e.g. Tendai, Shugendō, Mikkyō), since this interests him personally, he has even been appointed a monk of Tendai, just like Takamatsu.',
      subheadline4: 'Where Can I Get Books on Ninjutsu?',
      text4:
        'Ever since book retailers such as [Amazon](https://www.amazon.com/?&_encoding=UTF8&tag=kogakure-20&linkCode=ur2&linkId=98ada809b8f08559fbbd5bd54df01f2e&camp=1789&creative=9325) exist, it should no longer be a problem to get books from abroad. On the [recommendations](/en/recommendations/) page I have compiled a list of books and films that I can recommend.',
      subheadline5: 'I Want to Link to a Page. What Is to Be Considered?',
      text5:
        'It is generally prohibited to implement the link in a frame in which the website is no longer recognizable as the author. You are welcome to link to any page in this domain.\n\nImages, photos and other media may *not be directly linked*, but may be downloaded and placed on your own servers (as long as the rules of the [Creative Commons License](http://creativecommons.org/licenses/by-nc/3.0/deed.de) are complied with).',
      subheadline6: 'Are Translations of the Texts Allowed?',
      text6:
        'Translations of the texts into other languages are generally permitted as long as the text is accompanied by a reference to the source. Please send me a link where the translation will be published. If you want to translate the website in a different language and hosted on it’s original location, please contact me.\n\nCommercial use in any form is only possible with written permission.',
    },
    donation: {
      headline: 'Donations',
      text:
        'This book is free, ad-free and has cost me many hundreds of hours of work over time.\n\nIf you enjoyed it, I welcome praise and recognition. You can support me by buying something from my [recommendations](/en/recommendations/) or by making a small donation.',
      paypal: 'Donate With PayPal',
    },
    tech: {
      headline: 'Technical Information',
      text:
        'Anyone who has made it this far is probably also interested in the technical details on this page.\n\nAll work was created on an [Apple](https://www.apple.com/de/) computer, the graphics were  designed with [Affinity Photo](https://affinity.serif.com/de/photo/), and [Affinity Designer](https://affinity.serif.com/de/designer/), all templates and code segments [Neovim](https://neovim.io/) were written by hand and versioned with [Git](https://git-scm.com/). The pages are generated with [Eleventy](https://www.11ty.dev/) (11ty) and the development environment and deployment are automated with [Gulp.js](https://gulpjs.com/).\n\nThe source code of this website is available to everyone on [GitHub](https://github.com/kogakure/website-11ty-kogakure.de). Errors, improvements or additions can be reported there as [Issue](https://github.com/kogakure/website-11ty-kogakure.de/issues) or by email.',
    },
  },
  recommendations: {
    intro: `I recommend **${books.length}** books and **${movies.length}** movies about Ninja, Samurai, Bujutsu, martial arts, philosophy and Asia. Not all books are always available, some can only be found in antiquarian bookshops. Likewise, some of the films are hard to find.`,
    books: {
      headline: 'Books',
    },
    movies: {
      headline: 'Movies',
    },
  },
  glossary: {
    intro: `This glossary contains **${glossary.length}** entries related to Ninjutsu, martial arts, and Japanese history. All words are Japanese unless otherwise noted.`,
    chinese: 'Chinese',
    sanskrit: 'Sanskrit',
  },
  homeLink: 'Back to Homepage',
  themeToggle: 'Switch color theme',
  upLink: 'Back to top',
  creditAuthor: 'Text:',
  creditTranslator: 'Translation:',
};
