import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom'
import {AboutContainer, GalleryContainer, ContactContainer} from './tabs'
import $ from 'jquery';
import '../css/portfolio.scss'
import {setupAjax} from './token'


$(document).ready(function () {
    console.log('jquery ready');
    setupAjax();
});

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
            </ul>

            <Route exact path="/" component={AboutContainer} />
            <Route path="/work" component={GalleryContainer}/>
            <Route path="/contact" component={ContactContainer}/>
        </div>

    </HashRouter>, document.getElementById('container'));