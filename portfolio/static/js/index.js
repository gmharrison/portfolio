import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Link, BrowserRouter as Router} from 'react-router-dom'
import {AboutContainer, GalleryContainer, ContactContainer, RouletteContainer} from './tabs'
import $ from 'jquery';
import '../css/portfolio.scss'
import {setupAjax} from './token'

import {Pear, TA, RI, CB, Codesters, Illustrations} from './detail'

$(document).ready(function () {
    console.log('jquery ready');
    setupAjax();
});

var ReactGA = require('react-ga');
ReactGA.initialize('UA-104484958-1');

function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}


const routes = [{
    path: '/pear-tree',
    component: Pear,
    key: 1
}, {
    path: '/tutor-associates',
    component: TA,
    key: 2
}, {
    path: '/rhode-island',
    component: RI,
    key: 3
}, {
    path: '/code-brooklyn',
    component: CB,
    key: 4
}, {
    path: '/illustrations',
    component: Illustrations,
    key: 5
}, {
    path: '/codesters',
    component: Codesters,
    key: 6,
}];

const routeComponents = routes.map(({path, component, key}) => <Route exact path={path} component={component} key={key} />);

ReactDOM.render(
    <HashRouter onUpdate={logPageView}>
        <div>
            <ul className="nav-list">
                <li className="nav-link">
                    <Link to="/">
                        About
                    </Link>
                </li>
                <li className="nav-link">
                    <Link to="/work">
                        Work
                    </Link>
                </li>
                <li className="nav-link">
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>
                <li className="nav-link roulette">
                    <Link to="/roulette">
                        Art Roulette
                    </Link>
                </li>
            </ul>

            <Route exact path="/" component={AboutContainer} />
            <Route path="/work" component={GalleryContainer}/>
            <Route path="/contact" component={ContactContainer}/>
            <Route path="/roulette" component={RouletteContainer}/>
            <div>{routeComponents}</div>
        </div>

    </HashRouter>, document.getElementById('container'));