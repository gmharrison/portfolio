import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Link, BrowserRouter as Router} from 'react-router-dom'
import {AboutContainer, GalleryContainer, ContactContainer, RouletteContainer} from './tabs'
import $ from 'jquery';
import '../css/portfolio.scss'
import {setupAjax} from './token'

import {Pear, TA, RI, CB, Illustrations} from './detail'

$(document).ready(function () {
    console.log('jquery ready');
    setupAjax();
});

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
}];

const routeComponents = routes.map(({path, component, key}) => <Route exact path={path} component={component} key={key} />);

ReactDOM.render(
    <HashRouter>
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