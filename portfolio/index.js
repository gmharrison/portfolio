import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom'
import {AboutContainer, GalleryContainer, ContactContainer} from './static/js/tabs'
import $ from 'jquery';
import './static/css/portfolio.scss'
import {setupAjax} from './static/js/token'


$(document).ready(function () {
    console.log('jquery ready');
    setupAjax();
});

// const tabsInstance = (
//     <div className="container">
//         <div className="row">
//           <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
//             <Tab eventKey={1} title="About">
//                 <div className="content col-md-8 col-md-offset-2">
//                     <ImageContainer className={about.className} style={about.style} category={about.durer} />
//                     <TextContainer category={about.durer}/>
//                 </div>
//             </Tab>
//             <Tab eventKey={2} title="Work">
//                 <div className="container" id="gallery-container">
//                     <div className="row">
//                         <Gallery pieces={json.pieces} key={json.pieces.id}/>
//                     </div>
//                 </div>
//             </Tab>
//             <Tab eventKey={3} title="Contact">
//                 <div className="content col-md-8 col-md-offset-2">
//                     <ImageContainer className={contact.className} style={contact.style} category={contact.caravaggio} />
//                     <EssayForm />
//                 </div>
//             </Tab>
//           </Tabs>
//         </div>
//     </div>
// );
//
// ReactDOM.render(tabsInstance, document.getElementById('container'));


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