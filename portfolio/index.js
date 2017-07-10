import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import {Tab, Tabs, Nav, NavItem} from 'react-bootstrap'
import ReactRouterBootstrap, { LinkContainer } from 'react-router-bootstrap';
import $ from 'jquery';
import './static/css/portfolio.scss'
import { EssayForm } from './static/js/forms'
import { ImageContainer, TextContainer, about, contact, Home } from './static/js/images'
import {setupAjax} from './static/js/token'
import { Gallery, Path } from './static/js/gallery'
import json from './static/js/pieces.json'


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

function handleSelect(selectedKey) {
  alert('selected ' + selectedKey);
}

const navInstance = (
  <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
    <LinkContainer to="/about">
      <NavItem eventKey={1} title="Home">
        Home
        </NavItem>
    </LinkContainer>
    <LinkContainer to="/work">
        <NavItem eventKey={2} title="Work">
            <div className="container" id="gallery-container">
                <div className="row">
                    <Gallery pieces={json.pieces} key={json.pieces.id}/>
                </div>
            </div>
        </NavItem>
    </LinkContainer>
    <NavItem eventKey={3} title="Contact">
        <div className="content col-md-8 col-md-offset-2">
            <ImageContainer className={contact.className} style={contact.style} category={contact.caravaggio} />
                <EssayForm />
            </div>
    </NavItem>
  </Nav>
);

ReactDOM.render(
    <Router>
        <Route component={navInstance}>
            <Route path="/" component={Home}/>
            <Route path="/cars" component={Car}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>, document.getElementById('container'));