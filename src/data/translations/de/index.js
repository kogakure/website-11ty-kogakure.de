const books = require('./books.json');
const movies = require('./movies.json');
const glossary = require('./glossary.json');

module.exports = {
	homepage: {
		intro: 'Dies ist 木隠 (jap. *kogakure*, <q>Verborgen hinter Blättern und Bäumen.</q>), eine Sammlung von Texten über Ninja und Ninjutsu, mit der ich 1999 begonnen habe. Im Laufe der Jahre kamen immer mehr Seiten, Bilder und Illustrationen hinzu, bis schließlich dieses Buch daraus wurde.',
		tocHeadline: 'Inhaltsverzeichnis',
	},
	downloads: {
		intro: 'Hier gibt es das Online-Buch zum Download als eBook, 3D-Modelle von Waffen und Werkzeugen, sowie eine Ninja-Schriftart.',
		font: {
			headline: 'Iga-Ninja-Font',
			text: 'Das Iga-Ninja Museum hatte vor vielen Jahren ein Bild einer Iga-Ninja-Geheimschrift auf ihrer Website veröffentlicht. Ich habe daraus eine Schriftart entwickelt, die hier heruntergeladen werden kann.',
			more: 'Schrift auf GitHub ansehen',
			download: 'Schrift herunterladen',
		},
		cgi: {
			headline: '3D Modelle von Waffen und Werkzeugen der Ninja',
			text: 'Für die erste Version dieser Website hatte ich 3D-Modelle von Waffen und Werkzeugen erstellt, die ich dann später in das `stl` Format umgewandelt habe. Die Modelle können auf GitHub direkt im Browser angesehen und von allen Seiten betrachtet werden.',
			more: 'Waffen und Werkzeuge auf GitHub ansehen',
		},
		book: {
			headline: 'Das Buch',
			text: 'Es gibt den Inhalt dieses Online-Buches zum **kostenlosen** Download als eBook.',
			pdf: 'PDF',
			epub: 'EPUB',
			mobi: 'MOBI',
		},
	},
	colophon: {
		intro: 'Dies ist 木隠. Seit 1999 kann man hier Artikel, Textsammlungen und Übersetzungen zu Themen rund um die japanischen Schattenkrieger und Spione, die Ninja, und deren Kampfkunst Ninjutsu lesen.\n\nDie Idee dazu wurde von Stefan Imhoff, einem Designer, Entwickler und Kampfkünstler aus Wolfsburg (heute aus Hamburg) entwickelt und umgesetzt.',
		meaning: {
			headline: 'Was bedeutet 木隠?',
			text: 'Der Name *kogakure* (木隠) ist japanisch und bedeutet wörtlich übersetzt in etwa <q>Verborgen hinter Blättern und Bäumen</q>.\n\nIch habe diesen Namen in Anlehnung an das Buch des Samurai Tsunetomo Yamamoto, <cite>Hagakure</cite> (<q>Verborgen unter Laub</q>) und der ältesten Schule im Bujinkan, <cite>Togakure</cite> (<q>Verborgen hinter einer Tür</q>) gewählt.',
		},
		why: {
			headline: 'Warum gibt es dieses Buch?',
			text: 'Seit Anfang der 90er, ursprünglich wahrscheinlich durch die Teenage Mutant Hero Turtles auf das Ninjutsu gestoßen, interessierten mich die Ninja und ihre Gedankenwelt.\n\nDamals war das Bujinkan in Deutschland nur spärlich zu finden, eine Trainingsmöglichkeit nahezu unmöglich zu finden. Auch die erhältliche Fachliteratur war mehr als dürftig.\n\nAuf der Suche nach Wissen, Hintergrundinformationen und Informationen sammelte sich im Laufe der Zeit eine Notizsammlung an, die in diesem Buch verarbeitet wurde.\n\nDieses Buch erhebt keinen Anspruch auf Vollständigkeit, oder nach absoluter, belegbarer, geschichtlicher Beweise. Sie soll allen *bugeisha* (Kriegern) helfen, mehr über die Weisheiten dieser über tausend Jahre alten Kunst zu erfahren.',
		},
		contact: {
			headline: 'Kontakt',
			text: 'Man kann mich über meine E-Mail-Adresse oder verschiedene Social Media Platformen auf meiner <a href="https://www.stefanimhoff.de/about/#contact" rel="nofollow noopener noreferrer external" target="_blank">Website</a> erreichen.\n\nBitte lies zuerst durch, ob deine Frage bereits in den FAQ beantwortet wurde. Es ist mir zeitlich nicht immer möglich auf jede Frage zu antworten, ich verspreche jedoch, dass ich jede Nachricht lese!',
		},
		faq: {
			headline: 'FAQ',
			subheadline1: 'Wo kann ich trainieren?',
			text1: 'Um ein Dōjō für Bujinkan Budō Taijutsu zu finden, solltet ihr am besten in einer Suchmaschine nach **Bujinkan** in Verbindung mit einer Stadt in eurer Nähe suchen. Aber mit Sicherheit wird es keine so gute Abdeckung mit Dōjō wie bei Jūdō oder Karate geben. Auf der Bujinkai-Seite gibt es eine sehr umfangreiche [Dōjō-Liste](http://www.bujinkan-deutschland.de/dojoliste-bujinkan.html).\n\nIch selbst habe *kein* eigenes Dōjō und biete *kein* Training an. Kogakure ist kein Kampfkunst-Stil, sondern der Name des Buches.',
			subheadline2: 'Was für Bücher gibt es?',
			text2: 'Die Auswahl an Fachbüchern über Ninja und Ninjutsu ist sehr groß. Der größte Teil ist jedoch auf Japanisch oder Englisch. Am besten einfach mal in meine [Empfehlungen](/empfehlungen/) schauen.',
			subheadline3: 'Welche Bücher kannst du mir empfehlen?',
			text3: 'Zuerst lege ich euch die Bücher von Dr. *Masaaki Hatsumi* ans Herz. *Andrew Adams* Buch <cite>Ninja</cite> ist gut, um einen Gesamtüberblick zu bekommen. *Stephen K. Hayes* hat sehr viele philosophische Aspekte in seinen Büchern (z. B. Tendai, Shugendō, Mikkyō), da ihn dies persönlich sehr interessiert, er ist sogar genau wie Takamatsu zum Mönch des Tendai ernannt worden.',
			subheadline4: 'Wo bekomme ich Bücher über Ninjutsu her?',
			text4: 'Seit es Buchversender wie z. B. [Amazon](http://www.amazon.de/exec/obidos/redirect?link_code=ur2&camp=1638&tag=kogakurede-21&creative=6742&path=tg%2Fbrowse%2F-%2F301128%3Fsite-redirect%3Dde) gibt, sollte es keine Problem mehr darstellen, Bücher aus dem Ausland zu bekommen. Auf der Seite [Empfehlungen](/empfehlungen/) habe ich eine Liste von Büchern und Filmen zusammengestellt, die ich empfehlen kann.',
			subheadline5: 'Ich möchte auf eine Seite verlinken. Was ist zu beachten?',
			text5: 'Es ist generell untersagt die Verlinkung in einem Frame zu verwirklichen, bei dem die Website nicht mehr als Urheber erkennbar ist. Du darfst gerne auf jede Seite dieser Domain verlinken.\n\nBilder, Photos und andere Medien dürfen *nicht direkt verlinkt werden*, wohl aber heruntergeladen und auf eigene Server gestellt werden (so lange die Regeln der [Creative Commons Lizenz](http://creativecommons.org/licenses/by-nc/3.0/deed.de) eingehalten werden).',
			subheadline6: 'Sind Übersetzungen der Texte erlaubt?',
			text6: 'Übersetzungen der Texte in andere Sprachen sind grundsätzlich erlaubt, solange dem Text eine Quellenangabe beigefügt wird. Bitte schicke mir einen Link, wo die Übersetzung publiziert wird. Wenn du eine Übersetzung in einer anderen Sprache erstellen möchtest, die hier gehostet werden soll, kontaktiere mich gerne.\n\nEine kommerzielle Nutzung, in welcher Form auch immer, ist nur mit schriftlicher Genehmigung möglich.',
		},
		donation: {
			headline: 'Spenden',
			text: 'Dieses Buch ist kostenlos, werbefrei und hat mich im Laufe der Zeit viele hundert Stunden Arbeit gekostet.\n\nWenn es dir gefallen hat, freue ich mich über Lob und Anerkennung. Du kannst mich unterstützen, indem du etwas aus meinen [Empfehlungen](/empfehlungen/) kaufst oder mir eine kleine Spende zukommen lässt.',
			paypal: 'Spenden mit PayPal',
		},
		tech: {
			headline: 'Technische Informationen',
			text: 'Wer es bis hier hin durchgehalten hat, den interessieren wahrscheinlich auch die technischen Details zu dieser Seite.\n\nAlle Arbeiten wurden auf einem [Apple](https://www.apple.com/de/) Computer erstellt, die Grafiken wurden mit [Affinity Photo](https://affinity.serif.com/de/photo/), und [Affinity Designer](https://affinity.serif.com/de/designer/) gestaltet, alle Templates und Codesegmente mit [Neovim](https://neovim.io/) per Hand geschrieben und mit [Git](https://git-scm.com/) versioniert. Die Seiten werden mit [Eleventy](https://www.11ty.dev/) (11ty) generiert und die Entwicklungsumgebung und das Deployment werden mit [Gulp.js](https://gulpjs.com/) automatisiert.\n\nDer Quellcode dieser Website liegt für jeden zugänglich auf [GitHub](https://github.com/kogakure/website-11ty-kogakure.de). Fehler, Verbesserungen oder Ergänzungen können gerne dort als [Issue](https://github.com/kogakure/website-11ty-kogakure.de/issues) oder per E-Mail gemeldet werden.',
		},
	},
	recommendations: {
		intro: `Ich empfehle hier **${books.length}** Bücher und **${movies.length}** Filme aus den Themenbereichen Ninja, Samurai, Bujutsu, Kampfkunst, Philosophie und Asien. Es sind nicht immer alle Bücher erhältlich, manche kann man nur noch im Antiquariat bekommen. Ebenso sind einige der Filme nur schwer zu finden.`,
		books: {
			headline: 'Bücher',
		},
		movies: {
			headline: 'Filme',
		},
	},
	glossary: {
		intro: `Dieses Glossar enthält **${glossary.length}** Einträge aus dem Bereich des Ninjutsu, der Kriegskunst und der japanischen Geschichte. Alle Worte sind Japanisch, ausser anderweitig angegeben.`,
		chinese: 'Chinesisch',
		sanskrit: 'Sanskrit',
	},
	homeLink: 'Zurück zur Startseite',
	themeToggle: 'Farbthema wechseln',
	upLink: 'Zurück nach oben',
	creditAuthor: 'Text:',
	creditTranslator: 'Übersetzung:',
};
