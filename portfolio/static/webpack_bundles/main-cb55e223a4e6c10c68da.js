/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 166);
/******/ })
/************************************************************************/
/******/ ({

/***/ 103:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/gabrielleharrison/Desktop/git/portfolio/node_modules/react-router-dom/es/index.js'");

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

let STATIC_URL = document.getElementById('static-url').value;

const pear = {
    style: { backgroundImage: `url(${STATIC_URL}/img/detail/bosch-wide.png)` },
    circle: `${STATIC_URL}/img/detail/pear-circle.png`,
    header: "Pear Tree Studio",
    summary: "Pear Tree Studio contacted me about creating a logo and design for their business cards, " + "providing me with two references for inspiration: old seed packets and socialist posters. " + "Here you'll find the final logo design, alternates, and the final business card design, which " + "attempt to synthesize these two styles.",
    maindisplay: `${STATIC_URL}/img/detail/pear-tree-logo.png`,
    subtitle: 'Pear Tree Studio 2017',
    alternate1: `${STATIC_URL}/img/detail/pear-alt-1.png`,
    alternate2: `${STATIC_URL}/img/detail/pear-alt-2.png`,
    alternate3: `${STATIC_URL}/img/detail/pear-alt-3.png`,
    alternate4: `${STATIC_URL}/img/detail/pear-alt-5.png`,
    alternate5: `${STATIC_URL}/img/detail/pear-alt-6.png`,
    alternate6: `${STATIC_URL}/img/detail/bc-front-1.png`,
    alternate7: `${STATIC_URL}/img/detail/bc-back-1.png`,
    title1: 'Business Card Front',
    title2: 'Business Card Back'
};
/* harmony export (immutable) */ __webpack_exports__["a"] = pear;


const ta = {
    style: { backgroundImage: `url(${STATIC_URL}/img/detail/folio-wide.png)` },
    header: "Tutor Associates",
    summary: "I've been working with Tutor Associates consistently for a few years, designing print materials and " + "informational graphics. They have consistently emphasized their desire for personable, simple designs that communicate professionalism " + "and warmth. With that in mind, Tutor Associates requested logo designs and website mock ups to fit their new rebranding " + "plan. Here you'll find mock ups for an online onboarding survey for clients, as well as proposed logo designs.",
    maindisplay: `${STATIC_URL}/img/detail/ta-alt-1.png`,
    alternate1: `${STATIC_URL}/img/detail/ta-alt-2.png`,
    alternate2: `${STATIC_URL}/img/detail/ta-alt-3.png`,
    alternate3: `${STATIC_URL}/img/detail/ta-alt-4.png`,
    slideshow1: `${STATIC_URL}/img/detail/ta-mockup-1.png`,
    slideshow2: `${STATIC_URL}/img/detail/ta-mockup-2.png`,
    slideshow3: `${STATIC_URL}/img/detail/ta-mockup-3.png`,
    slideshow4: `${STATIC_URL}/img/detail/ta-mockup-4.png`,
    slideshow5: `${STATIC_URL}/img/detail/ta-mockup-5.png`
};
/* harmony export (immutable) */ __webpack_exports__["b"] = ta;


const ri = {
    header: "Rhode Island Office of Innovation",
    summary: "I had the opportunity to work with the Rhode Island Office of Innovation on a design for a 30-page " + "document promoting their Personalized Learning Initiative. This was a unique challenge for me, since I had not previously designed" + " for longer, large-format documents. Here you'll find some samples of my favorite pages.",
    alternate1: `${STATIC_URL}/img/detail/ri-page-1.png`,
    alternate2: `${STATIC_URL}/img/detail/ri-page-2.png`,
    alternate3: `${STATIC_URL}/img/detail/ri-page-3.png`,
    alternate4: `${STATIC_URL}/img/detail/ri-page-4.png`,
    alternate5: `${STATIC_URL}/img/detail/ri-page-5.png`,
    alternate6: `${STATIC_URL}/img/detail/ri-page-6.png`
};
/* harmony export (immutable) */ __webpack_exports__["c"] = ri;


const codesters = {
    header: "Codesters",
    summary: "Currently I am a graphic designer and developer at Codesters, Inc. Much of my work involves creating" + " designs for our website and implementing those designs in a way that allows them to interact with a Python backend." + " I'm also responsible for creating print and promotional designs, as well as the interactive graphics on the website. You can see some of my front-end development work in action at ",
    link: "www.codesters.com",
    href: "http://www.codesters.com"
};
/* harmony export (immutable) */ __webpack_exports__["e"] = codesters;


const cb = {
    header: "Code Brooklyn",
    summary: "Code Brooklyn emerged as an initiative lead by Brooklyn Borough President, Eric Adams, to give every public school " + "student in Brooklyn the opportunity to learn how to code. I was approached by some of the organizers, who requested a logo and banner design " + "that could be used throughout Brooklyn public schools, on their website, and for any related PR materials. You can view my designs here as well as",
    link: "www.codebrooklyn.org",
    href: "http://www.codebrooklyn.org",
    alternate1: `${STATIC_URL}/img/detail/cb-alt-1.png`,
    alternate2: `${STATIC_URL}/img/detail/cb-alt-2.png`,
    alternate3: `${STATIC_URL}/img/detail/cb-alt-3.png`,
    alternate4: `${STATIC_URL}/img/detail/cb-banner.png`
};
/* harmony export (immutable) */ __webpack_exports__["d"] = cb;


const illustrations = {
    header: "Drawings & Illustrations",
    summary: "When I'm drawing or illustrating I get to flex creative muscles I don't typically use while coding. Pencil and paper" + " are challenging in an entirely different way, and I like to think that my artistic skills positively influence my ability to code. It's both" + " helpful and personally fulfilling to get back to the basics when I've had enough of the keyboard.",
    alternate1: `${STATIC_URL}/img/detail/joe.png`,
    alternate2: `${STATIC_URL}/img/detail/me.png`,
    alternate3: `${STATIC_URL}/img/detail/drake.png`,
    alternate4: `${STATIC_URL}/img/detail/drake-2.png`,
    alternate5: `${STATIC_URL}/img/detail/finn.png`,
    alternate6: `${STATIC_URL}/img/detail/finn-2.png`,
    alternate7: `${STATIC_URL}/img/detail/chance-1.png`,
    alternate8: `${STATIC_URL}/img/detail/chance-2.png`,
    alternate9: `${STATIC_URL}/img/detail/chance-3.png`,
    alternate10: `${STATIC_URL}/img/detail/drake-3.png`
};
/* harmony export (immutable) */ __webpack_exports__["f"] = illustrations;


/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Summary */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shapes__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_detail_data__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slider__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_appear__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_appear___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_appear__);






function Summary(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
        'div',
        { className: 'jumbo-container' },
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'div',
            { className: 'container' },
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                'div',
                { className: 'row' },
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    'div',
                    { className: 'col-md-6 col-md-offset-2 col-sm-12' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        'p',
                        { className: 'detail-header' },
                        props.detail.header
                    )
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                'div',
                { className: 'row' },
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    'div',
                    { className: 'col-md-4 col-sm-4 col-xs-3' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        'div',
                        { className: 'squiggle-container' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_1__shapes__["a" /* Squiggle */], null)
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    'div',
                    { className: 'col-md-5 col-sm-6 col-xs-8' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        __WEBPACK_IMPORTED_MODULE_4_react_appear__["default"],
                        { className: 'custom-fade' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                            'div',
                            { className: 'summary-container' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'p',
                                null,
                                props.detail.summary,
                                ' ',
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'a',
                                    { target: '_blank', href: props.detail.href },
                                    props.detail.link
                                )
                            )
                        )
                    )
                )
            )
        )
    );
}

class Pear extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'div',
            { id: 'pear-detail-page', className: 'detail-page-container' },
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(Summary, { detail: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["a" /* pear */] }),
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                'div',
                { className: 'detail-image-container' },
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    'div',
                    { className: 'container' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        __WEBPACK_IMPORTED_MODULE_4_react_appear__["default"],
                        { className: 'custom-fade' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                            'div',
                            { className: 'row' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-4 col-sm-4 col-xs-12' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'image-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'section-title' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            'Logo Design'
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('div', { className: 'vert-line' })
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'block-title-container' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            '001'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["a" /* pear */].maindisplay, className: 'alternate-1 display' })
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-4 col-sm-4 col-xs-12' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'image-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'block-title-container' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            '002'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["a" /* pear */].alternate1, className: 'alternate-1 display' })
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-4 col-sm-4 col-xs-12' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'image-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'block-title-container' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            '003'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["a" /* pear */].alternate2, className: 'alternate-2 display' })
                                )
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        __WEBPACK_IMPORTED_MODULE_4_react_appear__["default"],
                        { className: 'custom-fade' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                            'div',
                            { className: 'row vertical-align' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-4 col-sm-4 col-xs-12' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'quote-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('div', { className: 'small-line' }),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'p',
                                        null,
                                        'I loved the challenge of synthesizing two very specific styles into one logo'
                                    )
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-4 col-sm-4 col-xs-12' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'image-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'block-title-container' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            '004'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["a" /* pear */].alternate4, className: 'alternate-4 display' })
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-4 col-sm-4 col-xs-12' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'image-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'block-title-container' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            '005'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["a" /* pear */].alternate5, className: 'alternate-5 display' })
                                )
                            )
                        )
                    )
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                'div',
                { className: 'detail-image-container' },
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    'div',
                    { className: 'container' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        __WEBPACK_IMPORTED_MODULE_4_react_appear__["default"],
                        { className: 'custom-fade' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                            'div',
                            { className: 'row' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-6 col-sm-6 col-xs-12' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'image-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'section-title' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            'Business Card'
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('div', { className: 'vert-line' })
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["a" /* pear */].alternate6, className: 'alternate-6 display' })
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-6 col-sm-6 col-xs-12' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'image-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["a" /* pear */].alternate7, className: 'alternate-7 display' })
                                )
                            )
                        )
                    )
                )
            )
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Pear;


class TA extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'div',
            { id: 'ta-detail-page', className: 'detail-page-container' },
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(Summary, { detail: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["b" /* ta */] }),
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                'div',
                { className: 'detail-image-container' },
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    'div',
                    { className: 'container' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        __WEBPACK_IMPORTED_MODULE_4_react_appear__["default"],
                        { className: 'custom-fade' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                            'div',
                            { className: 'row vertical-align' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-12' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'browser-window' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'section-title' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            'Website Mockups'
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('div', { className: 'vert-line' })
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'browser-bar' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('div', { className: 'small-circle red' }),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('div', { className: 'small-circle yellow' }),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('div', { className: 'small-circle green' })
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { id: 'carousel-container' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_3__slider__["a" /* Slider */], { detail: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["b" /* ta */] })
                                    )
                                )
                            )
                        )
                    )
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                'div',
                { className: 'detail-image-container' },
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    'div',
                    { className: 'container' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        __WEBPACK_IMPORTED_MODULE_4_react_appear__["default"],
                        { className: 'custom-fade' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                            'div',
                            { className: 'row' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-4 col-sm-4 col-xs-12' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'image-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'section-title' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            'Logo Design'
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('div', { className: 'vert-line' })
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'block-title-container' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            '001'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["b" /* ta */].maindisplay, className: 'alternate-1 display' })
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-4 col-sm-4 col-xs-12' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'image-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'block-title-container' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            '002'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["b" /* ta */].alternate2, className: 'alternate-2 display' })
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-4 col-sm-4 col-xs-12' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'image-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'block-title-container' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            '003'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["b" /* ta */].alternate3, className: 'alternate-3 display' })
                                )
                            )
                        )
                    )
                )
            )
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = TA;


class RI extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'div',
            { id: 'ri-detail-page', className: 'detail-page-container' },
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(Summary, { detail: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["c" /* ri */] }),
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                'div',
                { className: 'detail-image-container' },
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    'div',
                    { className: 'container' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        __WEBPACK_IMPORTED_MODULE_4_react_appear__["default"],
                        { className: 'custom-fade' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                            'div',
                            { className: 'row' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-6 col-sm-12' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'image-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'section-title' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            'Print Design'
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('div', { className: 'vert-line' })
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'block-title-container' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            '001'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["c" /* ri */].alternate1, className: 'alternate-1 display' })
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-6 col-sm-12' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'image-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'block-title-container' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            '002'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["c" /* ri */].alternate2, className: 'alternate-1 display' })
                                )
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        __WEBPACK_IMPORTED_MODULE_4_react_appear__["default"],
                        { className: 'custom-fade' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                            'div',
                            { className: 'row' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-6 col-sm-12' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'image-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'block-title-container' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            '003'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["c" /* ri */].alternate3, className: 'alternate-2 display' })
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-6 col-sm-12' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'image-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'block-title-container' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            '004'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["c" /* ri */].alternate4, className: 'alternate-3 display' })
                                )
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        __WEBPACK_IMPORTED_MODULE_4_react_appear__["default"],
                        { className: 'custom-fade' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                            'div',
                            { className: 'row' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-6 col-sm-12' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'image-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'block-title-container' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            '005'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["c" /* ri */].alternate5, className: 'alternate-2 display' })
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-6 col-sm-12' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'image-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'block-title-container' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            '006'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["c" /* ri */].alternate6, className: 'alternate-3 display' })
                                )
                            )
                        )
                    )
                )
            )
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = RI;


class CB extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'div',
            { id: 'cb-detail-page', className: 'detail-page-container' },
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(Summary, { detail: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["d" /* cb */] }),
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                'div',
                { className: 'detail-image-container' },
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    'div',
                    { className: 'container' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        __WEBPACK_IMPORTED_MODULE_4_react_appear__["default"],
                        { className: 'custom-fade' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                            'div',
                            { className: 'row' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-4 col-sm-4 col-xs-12' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'image-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'section-title' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            'Logo Design'
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('div', { className: 'vert-line' })
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'block-title-container' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            '001'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["d" /* cb */].alternate1, className: 'alternate-1 display' })
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-4 col-sm-4 col-xs-12' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'image-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'block-title-container' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            '002'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["d" /* cb */].alternate2, className: 'alternate-2 display' })
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-4 col-sm-4 col-xs-12' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'image-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'block-title-container' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            '003'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["d" /* cb */].alternate3, className: 'alternate-3 display' })
                                )
                            )
                        )
                    )
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                'div',
                { className: 'detail-image-container' },
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    'div',
                    { className: 'container' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        __WEBPACK_IMPORTED_MODULE_4_react_appear__["default"],
                        { className: 'custom-fade' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                            'div',
                            { className: 'row' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-10 col-md-offset-1' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'image-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'section-title' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            'Print Design'
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('div', { className: 'vert-line' })
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["d" /* cb */].alternate4, className: 'alternate-4 display' })
                                )
                            )
                        )
                    )
                )
            )
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["d"] = CB;


class Codesters extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'div',
            { id: 'codesters-detail-page', className: 'detail-page-container' },
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(Summary, { detail: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["e" /* codesters */] })
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["f"] = Codesters;


class Illustrations extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'div',
            { id: 'illustrations-detail-page', className: 'detail-page-container' },
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(Summary, { detail: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["f" /* illustrations */] }),
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                'div',
                { className: 'detail-image-container' },
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    'div',
                    { className: 'container' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        __WEBPACK_IMPORTED_MODULE_4_react_appear__["default"],
                        { className: 'custom-fade' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                            'div',
                            { className: 'row' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-4 col-sm-4' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'image-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'section-title' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            'Graphite Illustrations'
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('div', { className: 'vert-line' })
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'block-title-container' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            '001'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["f" /* illustrations */].alternate7, className: 'alternate-1 display' })
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'image-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'block-title-container' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            '002'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["f" /* illustrations */].alternate8, className: 'alternate-2 display' })
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-8 col-sm-8' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'image-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'block-title-container' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            '003'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["f" /* illustrations */].alternate9, className: 'alternate-3 display' })
                                )
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        __WEBPACK_IMPORTED_MODULE_4_react_appear__["default"],
                        { className: 'custom-fade' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                            'div',
                            { className: 'row' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-4 col-sm-4' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'image-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'block-title-container' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            '004'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["f" /* illustrations */].alternate5, className: 'alternate-4 display' })
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-8 col-sm-8' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'image-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'block-title-container' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            '005'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["f" /* illustrations */].alternate6, className: 'alternate-5 display' })
                                )
                            )
                        )
                    )
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                'div',
                { className: 'detail-image-container' },
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    'div',
                    { className: 'container' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        __WEBPACK_IMPORTED_MODULE_4_react_appear__["default"],
                        { className: 'custom-fade' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                            'div',
                            { className: 'row' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-6 col-sm-6 col-xs-12' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'image-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'section-title' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            'Digital Illustrations'
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('div', { className: 'vert-line' })
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'block-title-container' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            '001'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["f" /* illustrations */].alternate1, className: 'alternate-6 display' })
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-6 col-sm-6 col-xs-12' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'image-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'block-title-container' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            '002'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["f" /* illustrations */].alternate2, className: 'alternate-7 display' })
                                )
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        __WEBPACK_IMPORTED_MODULE_4_react_appear__["default"],
                        { className: 'custom-fade' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                            'div',
                            { className: 'row vertical-align' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'quote-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('div', { className: 'small-line' }),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'p',
                                        null,
                                        'Instead of buying a whole roll of wrapping paper, I thought it would be fun to make my own'
                                    )
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                            'div',
                            { className: 'row' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-6 col-sm-6 col-xs-12' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'image-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'block-title-container' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            '003'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["f" /* illustrations */].alternate4, className: 'alternate-8 display' })
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-6 col-sm-6 col-xs-12' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'image-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'block-title-container' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'p',
                                            null,
                                            '004'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__data_detail_data__["f" /* illustrations */].alternate10, className: 'alternate-9 display' })
                                )
                            )
                        )
                    )
                )
            )
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["e"] = Illustrations;


/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__images__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_appear__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_appear___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_appear__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gallery__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__roulette__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_roulette_data_js__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__links__ = __webpack_require__(167);









class AboutContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_appear__["default"],
            { className: 'custom-fade' },
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                'div',
                { className: 'container-fluid', id: 'about-container' },
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    'div',
                    { className: 'row' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        'div',
                        { id: 'content', className: 'col-md-8 col-md-offset-2' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_1__images__["a" /* ImageContainer */], { className: __WEBPACK_IMPORTED_MODULE_1__images__["b" /* about */].className, style: __WEBPACK_IMPORTED_MODULE_1__images__["b" /* about */].style, category: __WEBPACK_IMPORTED_MODULE_1__images__["b" /* about */].durer }),
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_1__images__["c" /* TextContainer */], { category: __WEBPACK_IMPORTED_MODULE_1__images__["b" /* about */].durer })
                    )
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_7__links__["a" /* SocialLinks */], null)
            )
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AboutContainer;


class GalleryContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_appear__["default"],
            { className: 'custom-fade' },
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                'div',
                { className: 'container', id: 'gallery-container' },
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    'div',
                    { className: 'row' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_4__gallery__["a" /* WindowResize */], null)
                )
            )
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = GalleryContainer;


class ContactContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_appear__["default"],
            { className: 'custom-fade' },
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                'div',
                { className: 'container-fluid', id: 'contact-container' },
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    'div',
                    { className: 'row' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        'div',
                        { id: 'content', className: 'col-md-8 col-md-offset-2' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_1__images__["a" /* ImageContainer */], { className: __WEBPACK_IMPORTED_MODULE_1__images__["d" /* contact */].className, style: __WEBPACK_IMPORTED_MODULE_1__images__["d" /* contact */].style, category: __WEBPACK_IMPORTED_MODULE_1__images__["d" /* contact */].caravaggio }),
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2__forms__["a" /* EssayForm */], null)
                    )
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_7__links__["a" /* SocialLinks */], null)
            )
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = ContactContainer;


class RouletteContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_appear__["default"],
            { className: 'custom-fade' },
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                'div',
                { className: 'container-fluid', id: 'roulette-container' },
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    'div',
                    { className: 'row' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        'div',
                        { id: 'content', className: 'col-md-8 col-md-offset-2' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_5__roulette__["a" /* PieceData */], { data: __WEBPACK_IMPORTED_MODULE_6__data_roulette_data_js__["a" /* data */] })
                    )
                )
            )
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["d"] = RouletteContainer;


/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery, jQuery) {/* harmony export (immutable) */ __webpack_exports__["a"] = setupAjax;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);



__webpack_provided_window_dot_jQuery = __WEBPACK_IMPORTED_MODULE_2_jquery__["default"];

// export var csrftoken = getCookie('csrftoken');

function setupAjax() {

    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === name + '=') {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    function csrfSafeMethod(method) {
        // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method)
        );
    }
    __WEBPACK_IMPORTED_MODULE_2_jquery__["default"].ajaxSetup({
        beforeSend: function (xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
            }
        }
    });
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(16), __webpack_require__(16)))

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/gabrielleharrison/Desktop/git/portfolio/node_modules/jquery/dist/jquery.js'");

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open '/Users/gabrielleharrison/Desktop/git/portfolio/node_modules/css-loader/lib/css-base.js'\n    at runLoaders (/Users/gabrielleharrison/Desktop/git/portfolio/node_modules/webpack/lib/NormalModule.js:192:19)\n    at /Users/gabrielleharrison/Desktop/git/portfolio/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/gabrielleharrison/Desktop/git/portfolio/node_modules/loader-runner/lib/LoaderRunner.js:200:19\n    at /Users/gabrielleharrison/Desktop/git/portfolio/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:62:14\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\n    at process._tickCallback (internal/process/next_tick.js:180:9)");

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(3);

function Squiggle(props) {
    return React.createElement("svg", props, [React.createElement("g", { "key": 0 }, React.createElement("path", { "className": "st3", "style": { "fill": "none", "stroke": "#F05F5B", "strokeWidth": "11", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeMiterlimit": "10" }, "d": "M171-5" })), React.createElement("g", { "key": 1 }, React.createElement("path", { "className": "squiggle", "style": { "animation": "shift .8s linear infinite", "fill": "none", "stroke": "#F05F5B", "strokeWidth": "1", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeMiterlimit": "10" }, "d": "M-24,50c13.2,0,13.2,8,26.5,8c13.2,0,13.2-8,26.5-8c13.2,0,13.2,8,26.5,8c13.2,0,13.2-8,26.5-8\n\t\tc13.2,0,13.2,8,26.5,8c13.2,0,13.2-8,26.5-8c13.2,0,13.2,8,26.5,8c13.2,0,13.2-8,26.5-8c13.3,0,13.3,8,26.5,8c13.3,0,13.3-8,26.5-8\n\t\tc13.3,0,13.3,8,26.5,8c13.3,0,13.3-8,26.5-8c13.3,0,13.3,8,26.5,8c13.3,0,13.3-8,26.5-8" }))]);
}

Squiggle.displayName = "Squiggle";

Squiggle.defaultProps = { "version": "1.1", "id": "Layer_1", "x": "0px", "y": "0px", "viewBox": "0 0 200 100", "style": { "enableBackground": "new 0 0 300 100" } };

module.exports = Squiggle;

Squiggle.default = Squiggle;

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
let STATIC_URL = document.getElementById('static-url').value;


const data = [{
    id: 1,
    title: "Table of the Seven Deadly Sins",
    artist: "Hieronymus Bosch",
    date: "1505 - 1510",
    text: "Bosch represents the message in five circles. At the centre of the largest, " + "central circle, which resembles a huge eye or a concave mirror, Christ is shown rising " + "from his tomb as the Man of Sorrows, displaying the wound in his side. A similar image is " + "to be found in The Mass of Saint Gregory on the closed shutters of the Prado Adoration of " + "the Magi (P02048). It is an appeal to the faithful, urging them to follow the path that " + "Jesus has shown them and to meditate on his death on the cross for the forgiveness of man’s " + "sins. This innermost circle or pupil is surrounded by gilded rays stretching to the outer ring, " + "which is divided into seven segments of varying size, each depicting one of the seven Deadly Sins, " + "identified by an inscription. Bosch conveyed this moral teaching through everyday situations " + "involving people from different social classes, observed by the all-seeing eye of God. Yet, " + "regardless of the message, some of the scenes -particularly Gluttony- mark him out as a pioneer " + "in genre painting, which was later to acquire such importance.",
    image: `${STATIC_URL}/img/roulette/seven_sins.jpg`,
    source: 'Museo del Prado',
    link: 'https://www.museodelprado.es/en/the-collection/art-work/table-of-the-seven-deadly-sins/3fc0a84e-d77d-4217-b960-8a34b8873b70'
}, {
    id: 2,
    title: "Album of Calligraphies Including Poetry and Prophetic Traditions (Hadith)",
    artist: "Shaikh Hamdullah ibn Mustafa Ded",
    date: "ca. 1500",
    text: "This album contains samples written by Shaykh Hamdullah, the most famous Ottoman " + "calligrapher. The text comes from the Hadith, the compilation of the Prophet Muhammad's " + "words and deeds that is an important source for moral and legal guidance in the Islamic " + "tradition. On each page, several lines of a small script (naskh) are framed by one or two " + "lines in a larger script (thuluth or muhaqqaq) and then pasted onto sheets of marbleized paper, " + "each with a different pattern.",
    image: `${STATIC_URL}/img/roulette/poetry.jpg`,
    source: "Metropolitan Museum of Art",
    link: 'http://www.metmuseum.org/art/collection/search/453166'
}, {
    id: 3,
    title: "Outing to Zhang Gong's Grotto",
    artist: "Shitao (Zhu Ruoji)",
    date: "ca. 1700",
    text: "Zhang Gong's grotto, a famous scenic spot and once the abode of Zhang Daoling (Zhang Gong; 2nd century A.D.), " + "a patriarch of the Daoist church, is located near Lake Tai in Jiangsu Province, not far from the pottery center of Yixing. " + "According to Daoist beliefs, such grottoes are wellsprings of nature's creative force and offer the potential for " + "rejuvenation and renewal. Shitao's painting of the grotto, done at the peak of his artistic powers, about 1700, is " + "one of his most sumptuous masterpieces. Following an earlier composition by Shen Zhou (1427–1509), Shitao painted as if he " + "were reenacting the cosmic process of creation: by building up layers of energized brushwork in flowery hues of sky blue, " + "pale green, orange, and fuchsia, he transformed Shen Zhou's topographical likeness into a glowing image redolent of nature's " + "procreative power. In a long poem at the end of the scroll, Shitao acknowledges the mystical Daoist attributes of the cave and playfully " + "suggests that through his art he has captured both the cave and its creative force.",
    image: `${STATIC_URL}/img/roulette/grotto.jpg`,
    source: "Metropolitan Museum of Art",
    link: 'http://www.metmuseum.org/art/collection/search/49177'
}, {
    id: 4,
    title: "Page of Calligraphy. Folio from the Shah Jahan Album",
    artist: "Painting: Bishan Das, Calligraphy: Mir 'Ali Haravi",
    date: "ca. 1640",
    text: "This panel of calligraphy conforms closely to the type probably established by the celebrated " + "calligrapher Sultan 'Ali about forty or fifty years earlier. The border illumination is signed by the artist Daulat, " + "who executed paintings and marginalia for three generations of Mughal emperors, from Akbar to Shah Jahan. Mir 'Ali was " + "both the calligrapher and author of the lines written here:",
    additional: `One with the eye of gazelles / ` + `hunted the bird of my heart, / ` + `Robbed me of steadfastness, / ` + `robbed me, poor lover, of rest. / ` + `Counsel and good advice / ` + `is no longer of use– / ` + `There is no use anymore, /` + `friends, in counseling me! /` + `The poor 'Ali.`,
    image: `${STATIC_URL}/img/roulette/verso.jpg`,
    source: "Metropolitan Museum of Art",
    link: 'http://www.metmuseum.org/art/collection/search/454620'
}, {
    id: 5,
    title: "St. Sebastian Thrown into the Cloaca Maxima",
    artist: "Lodovico Carracci",
    date: "1612",
    text: "Against the dark of night, brutish soldiers lift and tug the dead saint's body. Ludovico contrasted the tensile strength of their straining bodies " + "with the slackness of the saint's limbs, head, and facial muscles as he falls into the sewer's depths. The night atmosphere " + "is dark and thick: figures seem to emerge from the blackness. Light glints dully off helmets and armor, but the soldiers' " + "faces are unreadable. A bright light suffuses the body of Saint Sebastian, making him the focal point of the composition. " + "In 1612 Cardinal Maffeo Barberini commissioned this painting from Ludovico for his family's chapel in the Church of San Andrea " + "della Valle in Rome. The chapel commemorated the site where Saint Sebastian's body was recovered from the sewer, called the Cloaca " + "Maxima. Barberini decided to keep the painting in his private collection, believing that an image of the recovery of Sebastian's body" + " by Christians was more appropriate for the church.",
    image: `${STATIC_URL}/img/roulette/sebastian.jpg`,
    source: "the J. Paul Getty Museum",
    link: "http://www.getty.edu/art/collection/objects/617/lodovico-carracci-st-sebastian-thrown-into-the-cloaca-maxima-italian-1612/"
}, {
    id: 6,
    title: "The Penitence of Saint Jerome",
    artist: "Joachim Patinir",
    date: "ca. 1512–15",
    text: "Acknowledging Patinir’s leading role in a new genre, Albrecht Dürer referred to the artist in 1521 as the 'good landscape painter.'" + " This intact altarpiece was probably a German commission, since its exterior wings show Sebald, patron saint of Nuremberg, and " + "Saint Anne with the Virgin and Child. Following Netherlandish tradition, large-scale sacred figures dominate the foreground of " + "the interior: Saint John baptizing Christ, Saint Jerome, and Saint Anthony the Hermit with the monsters that assailed him. " + "The picture’s true subject, however, is the magnificent panoramic landscape, which the viewer is encouraged to travel through visually " + "in the manner of a pilgrimage.",
    image: `${STATIC_URL}/img/roulette/jerome.jpg`,
    source: "Metropolitan Museum of Art",
    link: "http://www.metmuseum.org/art/collection/search/437261"
}, {
    id: 7,
    title: "Vessel, Mythological Scene",
    date: "7th–8th century",
    text: "The scene here is not fully understood, but represents one variation of a theme depicted on several other codex-style " + "vessels in public and private collections. Sometimes the rain god is shown with a human face, sometimes the death god has " + "the distended belly of a corpse, and sometimes the anthropomorphic jaguar is shown as an infant on its back, such as in the " + "Metropolitan Museum’s 'Baby Jaguar' vessel (1978.412.206). In other scenes the protagonists are accompanied by creatures of the night, " + "such as fireflies, toads, dogs, or other deities. The artists painting these vases might be showing different scenes in a larger narrative, " + "or the same scene depicted in very different ways.",
    image: `${STATIC_URL}/img/roulette/vessel.jpg`,
    source: "Metropolitan Museum of Art",
    link: "http://www.metmuseum.org/art/collection/search/314217"
}, {
    id: 8,
    title: "Delightful Land",
    artist: "Paul Gauguin",
    date: "1893–94",
    text: "Gauguin spent much of his time in Paris in 1893–94 working on the text and illustrations for Noa Noa (Fragrance). " + "The project began as a narrative to guide an uncomprehending public through Gauguin's personal and artistic perceptions " + "of Tahiti, but ultimately became more complex and mysterious than anything he had produced in the South Seas. The " + "remarkable series of ten woodblock prints that Gauguin designed as illustrations bear little relationship to his " + "romanticized autobiographical text. Nor do they seem to follow any particular sequence. However, the imagery and " + "themes of the prints—love and fear, creation and death, day and night—relate closely to those of Gauguin's Tahitian paintings.",
    image: `${STATIC_URL}/img/roulette/gauguin.jpg`,
    source: "Metropolitan Museum of Art",
    link: "http://www.metmuseum.org/art/collection/search/337852"
}, {
    id: 9,
    title: "Lidded Vessel",
    date: "17th–18th century",
    text: "This spectacular ivory vessel was once the treasured possession of an 'olowo,' the ruler of the Yoruba kingdom " + "of Owo in present-day southern Nigeria. Owo rose to regional prominence in the eighteenth century through trade and conquest, " + "and became one of the largest states in West Africa at that time. It had close political ties to the Benin kingdom some seventy miles " + "to the southeast. Much of Owo's courtly culture, including titles, costumes, and prestige sculpture, reflect a close association between " + "the two important political and cultural centers.",
    image: `${STATIC_URL}/img/roulette/vessel_2.jpg`,
    source: "Metropolitan Museum of Art",
    link: "http://www.metmuseum.org/art/collection/search/316594"
}, {
    id: 10,
    title: "Mask",
    date: "900–400 B.C.",
    text: "Depicting a typical Olmec face with slanted, almond-shaped eyes and a toothless, slightly downturned mouth, " + "this mask is rendered with simplicity and elegance. Its harmonious proportions are indicative of the sophistication " + "attained by Olmec sculptors. The smooth, highly polished planes of cheek, forehead, and chin plus the almost fleshy " + "quality of the nose and parted lips belie the incredible hardness of the jadeite cobble from which the mask was made. " + "The face itself is neither human nor supernatural but, rather, an idealized type that incorporates otherworldly aspects—such " + "as the mouth, with its reference to the so-called were-jaguar, a powerful mythic being with human and jaguar traits.",
    image: `${STATIC_URL}/img/roulette/mask.jpg`,
    source: "Metropolitan Museum of Art",
    link: "http://www.metmuseum.org/art/collection/search/310279"
}, {
    id: 11,
    title: "Hanako",
    artist: "Auguste Rodin",
    date: "1907",
    text: "The Japanese actress Ohta Hisa (1868–1945), known as Hanako, posed for a number of portrait studies, and Rodin " + "portrayed her mobile face in various media. The pensive mood of the actress in this sketch is disturbed by the disquieting " + "second image of her face as an enigmatic mask. Rodin apparently intended to use Hanako as a living model for a portrait of " + "Beethoven, probably in much the same way that he had used a man of the city of Tours named Estager as the living model " + "for the figure's head in the Monument to Balzac.",
    image: `${STATIC_URL}/img/roulette/rodin.jpg`,
    source: "Metropolitan Museum of Art",
    link: "http://www.metmuseum.org/art/collection/search/339710"
}, {
    id: 12,
    title: "Self-portrait, Study of a Hand and a Pillow",
    artist: "Albrecht Dürer",
    date: "1493",
    text: "In this extraordinary series of studies, Albrecht Durer has captured his own image and that of several pillows " + "on the sheet’s front and back with incomparable brilliance, achieving at a tender age a calligraphic precision and " + "expressiveness of line of unexcelled clarity. The self-portrait - of which the head was drawn using a mirror and the " + "hand directly from the model - occupies an important place in the artist’s series of self-characterizations. It is " + "generally agreed that it relates and perhaps was preparatory to a painted self-portrait of the same year, 1493, now " + "in the Louvre in Paris. The painting probably served as an engagement or courting portrait for the young suitor. " + "As an example of the young draftsman’s awakening sense of himself as an artist, and as a signal of his growing awareness" + "of the interplay of subject and viewer - the sitter and creator as one - this drawing stands as one of the most important " + "early visual documents of the modern era.",
    image: `${STATIC_URL}/img/roulette/pillow.jpg`,
    source: "Metropolitan Museum of Art",
    link: "http://www.metmuseum.org/art/collection/search/459214"
}, {
    id: 13,
    title: "Glass Mosaic Face Bead",
    date: "1st century B.C.–1st century A.D.",
    text: "Translucent deep blue green ground, with details in opaque white, red, and grayish green, and translucent purple, appearing black." + "Section of an irregular oval mosaic composite bar; flat with rough edges; hole diagonally through bead." + "Circular face, with variations on either side; hair rendered as alternating vertical black and white stripes on forehead; almond-shaped " + "eyes, eyebrows, nose, and slit mouth in black; green stripe around chin with traces of red; circular frame in white.",
    image: `${STATIC_URL}/img/roulette/bead.jpg`,
    source: "Metropolitan Museum of Art",
    link: "https://www.metmuseum.org/art/collection/search/254703"
}, {
    id: 14,
    title: "Textile with Animals, Birds, and Flowers",
    date: "late 12th–14th century",
    text: "This textile demonstrates the longevity of motifs in eastern Central Asia. The placement of animals—a spotted " + "horse, a rabbit, and two deer (or antelope)—at its cardinal points is a compositional device that began to appear in " + "the region during the Han dynasty. The birds on the piece, especially the parrot, entered the Central Asian repertoire " + "during a second period of strong Chinese influence, the Tang dynasty. The floral background's central motif of lotus blossoms, " + "a lotus leaf, and a trefoil leaf was seen in Central Asia and North China but became widespread during the Yuan dynasty.",
    image: `${STATIC_URL}/img/roulette/animal_textile.jpg`,
    source: "Metropolitan Museum of Art",
    link: "https://www.metmuseum.org/art/collection/search/39737"
}];
/* harmony export (immutable) */ __webpack_exports__["a"] = data;


/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


class EssayForm extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  submitForm(event) {
    var postData = $('#contact-form').serialize();
    event.preventDefault();
    $.post('/contact-submit/', postData).done(function (data) {
      if (data.result == 'success') {
        $('.success-message').show();
        $('.error-message').hide();
      } else if (data.result == 'error') {
        $('.error-message').show();
      }
    }).fail(function () {});
  }

  render() {
    let csrft = document.getElementById('csrftoken').value;
    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
      'div',
      { className: 'form-container' },
      __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
        'form',
        { id: 'contact-form', onSubmit: this.submitForm.bind(this) },
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('input', { type: 'hidden', value: csrft, name: 'csrfmiddlewaretoken' }),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
          'p',
          null,
          'Contact Me'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
          'div',
          { className: 'form-group' },
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('input', { type: 'email', name: 'from_email', className: 'form-control', id: 'input-email', placeholder: 'Email' })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('textarea', { className: 'form-control', name: 'message', rows: '5', placeholder: 'Leave a message', id: 'contact-text', value: this.state.value, onChange: this.handleChange }),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
          'div',
          { className: 'error-message' },
          'Please fill out both fields'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
          'div',
          { className: 'success-message' },
          'Thanks for the message!'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
          'div',
          { className: 'submit-button-container' },
          __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('input', { className: 'submit-button button', type: 'submit', value: 'SEND' })
        )
      )
    );
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EssayForm;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(16)))

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Gallery */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shapes_js__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_pieces_json__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_pieces_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__data_pieces_json__);



let STATIC_URL = document.getElementById('static-url').value;



class WindowResize extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {
    constructor(props) {
        super(props);
        this._handleWindowResize = _.debounce(this._handleWindowResize.bind(this), 100);
        this.state = {
            containerWidth: '',
            Num: 3
        };
        this._isMounted = false;
    }

    componentDidMount() {
        this._isMounted = true;
        this._handleWindowResize();
        window.addEventListener('resize', this._handleWindowResize);
    }

    componentWillUnmount() {
        this._isMounted = false;
        window.removeEventListener('resize', this._handleWindowResize);
    }

    _handleWindowResize() {
        if (this._isMounted) {
            this.setState({
                containerWidth: document.getElementById('container').offsetWidth
            });
            if (this.state.containerWidth < 992) {
                this.setState({ Num: 2 });
            } else {
                this.setState({ Num: 3 });
            }
        }
    }

    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(Gallery, { itemsPerRow: this.state.Num, pieces: __WEBPACK_IMPORTED_MODULE_4__data_pieces_json___default.a.pieces, key: __WEBPACK_IMPORTED_MODULE_4__data_pieces_json___default.a.pieces.id })
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = WindowResize;


function GalleryCol({ piece }) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
        'div',
        { key: piece.id },
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Link"],
            { key: piece.id, to: piece.path },
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                'div',
                { className: 'col-md-4 col-sm-6', key: piece.id },
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    'div',
                    { className: 'object-container', key: piece.id },
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        'div',
                        { className: 'title-container' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                            'p',
                            { className: 'work-title' },
                            piece.work
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('div', { className: 'sub-container', key: piece.id, style: { backgroundImage: 'url(' + STATIC_URL + piece.style + ')' } }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        'div',
                        { className: 'object-title-container text-container' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                            'div',
                            { className: 'object-title' },
                            piece.title,
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'p',
                                { className: 'desc' },
                                piece.desc
                            )
                        )
                    )
                )
            )
        )
    );
}

function GalleryRow({ cols }) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
        'div',
        { className: 'row' },
        cols.map((col, i) => __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(GalleryCol, { piece: col }))
    );
}

function Gallery(props) {
    let rows = [];

    // Turn our list of items into a list of rows that each have a list of columns
    // so our data structure more accurately reflects our display structure
    for (let i = 0; i < props.pieces.length; i += props.itemsPerRow) {
        let cols = [];
        for (let j = 0; j < props.itemsPerRow && i + j < props.pieces.length; j++) {
            cols.push(props.pieces[i + j]);
        }
        rows.push(cols);
    }

    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
        'div',
        { className: 'Gallery' },
        rows.map((row, i) => __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(GalleryRow, { cols: row }))
    );
}

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {/* harmony export (immutable) */ __webpack_exports__["c"] = TextContainer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shapes__ = __webpack_require__(52);

let STATIC_URL = document.getElementById('static-url').value;

__webpack_provided_window_dot_jQuery = __WEBPACK_IMPORTED_MODULE_1_jquery__["default"];


const about = {
    className: "about image-container",
    style: { backgroundImage: `url(${STATIC_URL}/img/durer.png)` },
    durer: {
        header: "About",
        title: "Knight, Death, and the Devil, Albrecht Dürer, 1513",
        text: "Gabrielle is a designer, developer, and proud cacti parent who is passionate about art history and thick denim jeans."
    }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = about;


const contact = {
    className: "contact image-container",
    style: { backgroundImage: `url(${STATIC_URL}/img/caravaggio.png)` },
    caravaggio: {
        title: "Judith Beheading Holofernes, Caravaggio, 1599",
        section: { backgroundImage: `url(${STATIC_URL}/img/selection.png)` }
    }
};
/* harmony export (immutable) */ __webpack_exports__["d"] = contact;


function load() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_jquery__["default"])('.form-container form').addClass('front');
}

function TextContainer(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
        'div',
        { className: 'text-container' },
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'p',
            { className: 'header' },
            props.category.header
        ),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'div',
            { className: 'squiggle-container' },
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2__shapes__["a" /* Squiggle */], null)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'p',
            null,
            props.category.text
        )
    );
}

class ImageContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'div',
            { className: this.props.className, style: this.props.style },
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                'div',
                { className: 'title-container' },
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    'p',
                    { className: 'work-title' },
                    this.props.category.title
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('div', { className: 'section', style: this.props.category.section, onClick: load })
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ImageContainer;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(16)))

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__css_portfolio_scss__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__css_portfolio_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__css_portfolio_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__token__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__detail__ = __webpack_require__(157);










__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_jquery__["default"])(document).ready(function () {
    console.log('jquery ready');
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__token__["a" /* setupAjax */])();
    setInterval(function () {
        var postData = { from_email: "test@test.com", message: "test" };
        __WEBPACK_IMPORTED_MODULE_4_jquery__["default"].post('/contact-submit/', postData);
    }, 1000 * 60);
});

const routes = [{
    path: '/pear-tree',
    component: __WEBPACK_IMPORTED_MODULE_7__detail__["a" /* Pear */],
    key: 1
}, {
    path: '/tutor-associates',
    component: __WEBPACK_IMPORTED_MODULE_7__detail__["b" /* TA */],
    key: 2
}, {
    path: '/rhode-island',
    component: __WEBPACK_IMPORTED_MODULE_7__detail__["c" /* RI */],
    key: 3
}, {
    path: '/code-brooklyn',
    component: __WEBPACK_IMPORTED_MODULE_7__detail__["d" /* CB */],
    key: 4
}, {
    path: '/illustrations',
    component: __WEBPACK_IMPORTED_MODULE_7__detail__["e" /* Illustrations */],
    key: 5
}, {
    path: '/codesters',
    component: __WEBPACK_IMPORTED_MODULE_7__detail__["f" /* Codesters */],
    key: 6
}];

const routeComponents = routes.map(({ path, component, key }) => __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Route"], { exact: true, path: path, component: component, key: key }));

__WEBPACK_IMPORTED_MODULE_1_react_dom__["default"].render(__WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
    __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["HashRouter"],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'ul',
            { className: 'nav-list' },
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                'li',
                { className: 'nav-link' },
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"],
                    { to: '/' },
                    'About'
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                'li',
                { className: 'nav-link' },
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"],
                    { to: '/work' },
                    'Work'
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                'li',
                { className: 'nav-link' },
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"],
                    { to: '/contact' },
                    'Contact'
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                'li',
                { className: 'nav-link roulette' },
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"],
                    { to: '/roulette' },
                    'Art Roulette'
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Route"], { exact: true, path: '/', component: __WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* AboutContainer */] }),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Route"], { path: '/work', component: __WEBPACK_IMPORTED_MODULE_3__tabs__["b" /* GalleryContainer */] }),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Route"], { path: '/contact', component: __WEBPACK_IMPORTED_MODULE_3__tabs__["c" /* ContactContainer */] }),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Route"], { path: '/roulette', component: __WEBPACK_IMPORTED_MODULE_3__tabs__["d" /* RouletteContainer */] }),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'div',
            null,
            routeComponents
        )
    )
), document.getElementById('container'));

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


class SocialLinks extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            "div",
            { className: "social-links-container" },
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                "div",
                { className: "icon-container" },
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    "a",
                    { href: "https://github.com/gmharrison/", target: "_blank" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("i", { className: "fa fa-github", "aria-hidden": "true" })
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                "div",
                { className: "icon-container" },
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    "a",
                    { href: "https://www.linkedin.com/in/gmharrison1", target: "_blank" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("i", { className: "fa fa-linkedin-square", "aria-hidden": "true" })
                )
            )
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SocialLinks;


/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_appear__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_appear___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_appear__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shapes__ = __webpack_require__(52);




class PieceData extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {
    constructor(props) {
        super(props);
        this.setNewTarget = this.setNewTarget.bind(this);
        this.state = {
            index: -1
        };
    }

    randomInteger(min, max) {
        let rand = min + Math.random() * (max - min);
        rand = Math.round(rand);
        return rand;
    }

    setNewTarget() {
        let length = this.props.data.length - 1;
        this.setState({
            index: this.randomInteger(0, length)
        });
    }
    render() {
        let index = this.state.index;
        let listItems = this.props.data.map(function (datum, i) {
            if (i == index) {
                return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_appear__["default"],
                    { className: 'custom-fade' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                        'div',
                        { key: i },
                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                            'div',
                            { className: 'row' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-5' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'roulette-text-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'p',
                                        { className: 'artist' },
                                        datum.artist
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'p',
                                        null,
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'span',
                                            { className: 'title' },
                                            datum.title,
                                            ','
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'span',
                                            { className: 'date' },
                                            ' ',
                                            datum.date
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'div',
                                        { className: 'squiggle-container' },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2__shapes__["a" /* Squiggle */], null)
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'p',
                                        { className: 'text' },
                                        '"',
                                        datum.text,
                                        '"',
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'span',
                                            { className: 'additional' },
                                            datum.additional
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                        'p',
                                        { className: 'link' },
                                        'From the ',
                                        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                            'a',
                                            { target: '_blank', href: datum.link },
                                            datum.source
                                        )
                                    )
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                'div',
                                { className: 'col-md-7' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                                    'div',
                                    { className: 'roulette-image-container' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: datum.image })
                                )
                            )
                        )
                    )
                );
            }
        });
        return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                'div',
                { className: 'roulette-button-container' },
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                    'button',
                    { className: 'button', id: 'roulette-button', onClick: this.setNewTarget },
                    'click for some art'
                )
            ),
            listItems
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PieceData;


/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Carousel__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_detail_data__ = __webpack_require__(104);




const next = __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
    'button',
    { className: 'button next-button' },
    'Next'
);

const prev = __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
    'button',
    { className: 'button back-button' },
    'Prev'
);

class Slider extends __WEBPACK_IMPORTED_MODULE_0_react__["default"].Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            index: 0,
            direction: null
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Carousel__["default"],
            { className: 'slider', nextIcon: next, prevIcon: prev, indicators: false, activeIndex: this.state.index, direction: this.state.direction, onSelect: this.handleSelect },
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Carousel__["default"].Item,
                null,
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: this.props.detail.slideshow1 })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Carousel__["default"].Item,
                null,
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: this.props.detail.slideshow2 })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Carousel__["default"].Item,
                null,
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: this.props.detail.slideshow3 })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Carousel__["default"].Item,
                null,
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: this.props.detail.slideshow4 })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_bootstrap_lib_Carousel__["default"].Item,
                null,
                __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('img', { src: this.props.detail.slideshow5 })
            )
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Slider;


/***/ }),

/***/ 239:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/gabrielleharrison/Desktop/git/portfolio/node_modules/react-bootstrap/lib/Carousel.js'");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/gabrielleharrison/Desktop/git/portfolio/node_modules/react/react.js'");

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

module.exports = {
	"pieces": [
		{
			"id": 1,
			"title": "Pear Tree Studio",
			"work": "The Haywain Triptych, Hieronymus Bosch, 1516",
			"style": "/img/bosch.png",
			"desc": "logo and business card design",
			"path": "pear-tree"
		},
		{
			"id": 2,
			"title": "Tutor Associates",
			"work": "Masnavi of Jalal-al Din Rumi, 1488-89",
			"style": "/img/folio.png",
			"desc": "logo and web design",
			"path": "tutor-associates"
		},
		{
			"id": 3,
			"title": "Rhode Island Office of Innovation",
			"work": "Annunciation and Visitation, Melchior Broederlam, 1398-99",
			"style": "/img/annunciation.png",
			"desc": "print design",
			"path": "rhode-island"
		},
		{
			"id": 4,
			"title": "Code Brooklyn",
			"work": "A Thousand Li of Rivers and Mountains, Wang Ximeng, 1113",
			"style": "/img/scroll.png",
			"desc": "logo design",
			"path": "code-brooklyn"
		},
		{
			"id": 5,
			"title": "Codesters",
			"work": "Medusa, Caravaggio, 1509",
			"style": "/img/medusa.png",
			"desc": "web development and graphic design",
			"path": "codesters"
		},
		{
			"id": 6,
			"title": "Illustrations",
			"work": "Wilton Diptych, 1395–1399",
			"style": "/img/wilton.png",
			"desc": "drawings and digital illustrations",
			"path": "illustrations"
		}
	]
};

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/gabrielleharrison/Desktop/git/portfolio/node_modules/react-dom/index.js'");

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {/* harmony export (immutable) */ __webpack_exports__["a"] = Squiggle;
/* unused harmony export Square */
/* unused harmony export SquareDots */
/* unused harmony export Circle */
/* unused harmony export Triangle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);

const HorzSquiggle = __webpack_require__(161);
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

__webpack_provided_window_dot_jQuery = __WEBPACK_IMPORTED_MODULE_1_jquery__["default"];

function Squiggle() {
	return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(HorzSquiggle, { className: 'squiggle' });
}

function Square() {
	return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('div', { className: 'rotate' });
}

function SquareDots() {
	return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('div', { className: 'rotate dots' });
}

function Circle() {
	return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('div', { className: 'circle' });
}

function Triangle() {
	return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('div', { className: 'triangle rotate' });
}

let sdegree = 0;

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_jquery__["default"])(window).scroll(function () {

	sdegree++;
	sdegree = sdegree + 2;
	var srotate = "rotate(" + sdegree + "deg)";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_jquery__["default"])(".rotate").css({ "-moz-transform": srotate, "-webkit-transform": srotate });
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(16)))

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/gabrielleharrison/Desktop/git/portfolio/node_modules/react-appear/dist-modules/index.js'");

/***/ })

/******/ });