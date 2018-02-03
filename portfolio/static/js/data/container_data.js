import React from 'react';
let STATIC_URL = document.getElementById('static-url').value;

export const about = {
    className: "about image-container",
    style: { backgroundImage: `url(${STATIC_URL}/img/durer.png)` },
    durer: {
        header: "About",
        title: "Knight, Death, and the Devil, Albrecht Dürer, 1513",
        text: "Gabrielle is a designer, developer, and proud cacti parent who is passionate about art history and thick denim jeans.",
    },
};

export const contact = {
    className: "contact image-container",
    style: { backgroundImage: `url(${STATIC_URL}/img/caravaggio.png)` },
    caravaggio: {
        title: "Judith Beheading Holofernes, Caravaggio, 1599",
        section: { backgroundImage: `url(${STATIC_URL}/img/selection.png)` }
    }
};