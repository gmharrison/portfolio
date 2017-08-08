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
    }, {
    id: 5,
    title: "St. Sebastian Thrown into the Cloaca Maxima",
    artist: "Lodovico Carracci",
    date: "1612",
    text: "Against the dark of night, brutish soldiers lift and tug the dead saint's body. Ludovico contrasted the tensile strength of their straining bodies " +
    "with the slackness of the saint's limbs, head, and facial muscles as he falls into the sewer's depths. The night atmosphere " +
    "is dark and thick: figures seem to emerge from the blackness. Light glints dully off helmets and armor, but the soldiers' " +
    "faces are unreadable. A bright light suffuses the body of Saint Sebastian, making him the focal point of the composition. " +
    "In 1612 Cardinal Maffeo Barberini commissioned this painting from Ludovico for his family's chapel in the Church of San Andrea " +
    "della Valle in Rome. The chapel commemorated the site where Saint Sebastian's body was recovered from the sewer, called the Cloaca " +
    "Maxima. Barberini decided to keep the painting in his private collection, believing that an image of the recovery of Sebastian's body" +
    " by Christians was more appropriate for the church.",
    image: `${STATIC_URL}/img/roulette/sebastian.jpg`,
    source: "the J. Paul Getty Museum",
    link: "http://www.getty.edu/art/collection/objects/617/lodovico-carracci-st-sebastian-thrown-into-the-cloaca-maxima-italian-1612/"
    }, {
    id: 6,
    title: "The Penitence of Saint Jerome",
    artist: "Joachim Patinir",
    date: "ca. 1512–15",
    text: "Acknowledging Patinir’s leading role in a new genre, Albrecht Dürer referred to the artist in 1521 as the 'good landscape painter.'" +
    " This intact altarpiece was probably a German commission, since its exterior wings show Sebald, patron saint of Nuremberg, and " +
    "Saint Anne with the Virgin and Child. Following Netherlandish tradition, large-scale sacred figures dominate the foreground of " +
    "the interior: Saint John baptizing Christ, Saint Jerome, and Saint Anthony the Hermit with the monsters that assailed him. " +
    "The picture’s true subject, however, is the magnificent panoramic landscape, which the viewer is encouraged to travel through visually " +
    "in the manner of a pilgrimage.",
    image: `${STATIC_URL}/img/roulette/jerome.jpg`,
    source: "Metropolitan Museum of Art",
    link: "http://www.metmuseum.org/art/collection/search/437261"
    }, {
    id: 7,
    title: "Vessel, Mythological Scene",
    date: "7th–8th century",
    text: "The scene here is not fully understood, but represents one variation of a theme depicted on several other codex-style " +
    "vessels in public and private collections. Sometimes the rain god is shown with a human face, sometimes the death god has " +
    "the distended belly of a corpse, and sometimes the anthropomorphic jaguar is shown as an infant on its back, such as in the " +
    "Metropolitan Museum’s 'Baby Jaguar' vessel (1978.412.206). In other scenes the protagonists are accompanied by creatures of the night, " +
    "such as fireflies, toads, dogs, or other deities. The artists painting these vases might be showing different scenes in a larger narrative, " +
    "or the same scene depicted in very different ways.",
    image: `${STATIC_URL}/img/roulette/vessel.jpg`,
    source: "Metropolitan Museum of Art",
    link: "http://www.metmuseum.org/art/collection/search/314217"
    }, {
    id: 8,
    title: "Delightful Land",
    artist: "Paul Gauguin",
    date: "1893–94",
    text: "Gauguin spent much of his time in Paris in 1893–94 working on the text and illustrations for Noa Noa (Fragrance). " +
    "The project began as a narrative to guide an uncomprehending public through Gauguin's personal and artistic perceptions " +
    "of Tahiti, but ultimately became more complex and mysterious than anything he had produced in the South Seas. The " +
    "remarkable series of ten woodblock prints that Gauguin designed as illustrations bear little relationship to his " +
    "romanticized autobiographical text. Nor do they seem to follow any particular sequence. However, the imagery and " +
    "themes of the prints—love and fear, creation and death, day and night—relate closely to those of Gauguin's Tahitian paintings.",
    image: `${STATIC_URL}/img/roulette/gauguin.jpg`,
    source: "Metropolitan Museum of Art",
    link: "http://www.metmuseum.org/art/collection/search/337852"
}
]