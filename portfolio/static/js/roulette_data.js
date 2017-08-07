let STATIC_URL = document.getElementById('static-url').value;
import React from 'react';

export const data = [{
    id: 1,
    title: "Table of the Seven Deadly Sins",
    artist: "Hieronymus Bosch",
    date: "1505 - 1510",
    text: "Bosch represents the message in five circles. At the centre of the largest, " +
    "central circle, which resembles a huge eye or a concave mirror, Christ is shown rising " +
    "from his tomb as the Man of Sorrows, displaying the wound in his side. A similar image is " +
    "to be found in The Mass of Saint Gregory on the closed shutters of the Prado Adoration of " +
    "the Magi (P02048). It is an appeal to the faithful, urging them to follow the path that " +
    "Jesus has shown them and to meditate on his death on the cross for the forgiveness of man’s " +
    "sins. This innermost circle or pupil is surrounded by gilded rays stretching to the outer ring, " +
    "which is divided into seven segments of varying size, each depicting one of the seven Deadly Sins, " +
    "identified by an inscription. Bosch conveyed this moral teaching through everyday situations " +
    "involving people from different social classes, observed by the all-seeing eye of God. Yet, " +
    "regardless of the message, some of the scenes -particularly Gluttony- mark him out as a pioneer " +
    "in genre painting, which was later to acquire such importance.",
    image: `${STATIC_URL}/img/roulette/seven_sins.jpg`,
    source: 'Museo del Prado',
    link: 'https://www.museodelprado.es/en/the-collection/art-work/table-of-the-seven-deadly-sins/3fc0a84e-d77d-4217-b960-8a34b8873b70'
    }, {
    id: 2,
    title: "Album of Calligraphies Including Poetry and Prophetic Traditions (Hadith)",
    artist: "Shaikh Hamdullah ibn Mustafa Ded",
    date: "ca. 1500",
    text: "This album contains samples written by Shaykh Hamdullah, the most famous Ottoman " +
    "calligrapher. The text comes from the Hadith, the compilation of the Prophet Muhammad's " +
    "words and deeds that is an important source for moral and legal guidance in the Islamic " +
    "tradition. On each page, several lines of a small script (naskh) are framed by one or two " +
    "lines in a larger script (thuluth or muhaqqaq) and then pasted onto sheets of marbleized paper, " +
    "each with a different pattern.",
    image: `${STATIC_URL}/img/roulette/poetry.jpg`,
    source: "Metropolitan Museum of Art",
    link: 'http://www.metmuseum.org/art/collection/search/453166'
    }, {
    id: 3,
    title: "Outing to Zhang Gong's Grotto",
    artist: "Shitao (Zhu Ruoji)",
    date: "ca. 1700",
    text: "Zhang Gong's grotto, a famous scenic spot and once the abode of Zhang Daoling (Zhang Gong; 2nd century A.D.), " +
    "a patriarch of the Daoist church, is located near Lake Tai in Jiangsu Province, not far from the pottery center of Yixing. " +
    "According to Daoist beliefs, such grottoes are wellsprings of nature's creative force and offer the potential for " +
    "rejuvenation and renewal. Shitao's painting of the grotto, done at the peak of his artistic powers, about 1700, is " +
    "one of his most sumptuous masterpieces. Following an earlier composition by Shen Zhou (1427–1509), Shitao painted as if he " +
    "were reenacting the cosmic process of creation: by building up layers of energized brushwork in flowery hues of sky blue, " +
    "pale green, orange, and fuchsia, he transformed Shen Zhou's topographical likeness into a glowing image redolent of nature's " +
    "procreative power. In a long poem at the end of the scroll, Shitao acknowledges the mystical Daoist attributes of the cave and playfully " +
    "suggests that through his art he has captured both the cave and its creative force.",
    image: `${STATIC_URL}/img/roulette/grotto.jpg`,
    source: "Metropolitan Museum of Art",
    link: 'http://www.metmuseum.org/art/collection/search/49177'
    }, {
    id: 4,
    title: "Page of Calligraphy. Folio from the Shah Jahan Album",
    artist: "Painting: Bishan Das, Calligraphy: Mir 'Ali Haravi",
    date: "ca. 1640",
    text: "This panel of calligraphy conforms closely to the type probably established by the celebrated " +
    "calligrapher Sultan 'Ali about forty or fifty years earlier. The border illumination is signed by the artist Daulat, " +
    "who executed paintings and marginalia for three generations of Mughal emperors, from Akbar to Shah Jahan. Mir 'Ali was " +
    "both the calligrapher and author of the lines written here:",
    additional: `One with the eye of gazelles / ` +
    `hunted the bird of my heart, / ` +
    `Robbed me of steadfastness, / ` +
    `robbed me, poor lover, of rest. / ` +
    `Counsel and good advice / ` +
    `is no longer of use– / ` +
    `There is no use anymore, /` +
    `friends, in counseling me! /` +
    `The poor 'Ali.`,
    image: `${STATIC_URL}/img/roulette/verso.jpg`,
    source: "Metropolitan Museum of Art",
    link: 'http://www.metmuseum.org/art/collection/search/454620'
}
]