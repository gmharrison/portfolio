var React = require('react');
var ReactDOM = require('react-dom');
import {Tab, Tabs} from 'react-bootstrap'
import $ from 'jquery';
import './static/css/portfolio.scss'
import { EssayForm } from './static/js/forms'
import { ImageContainer, TextContainer, about, contact } from './static/js/images'
import {setupAjax} from './static/js/token'



$(document).ready(function () {
    console.log('jquery ready');
    setupAjax();
});

const tabsInstance = (
    <div className="container">
        <div className="row">
          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="About">
                <div className="content col-md-8 col-md-offset-2">
                    <ImageContainer className={about.className} style={about.style} category={about.durer} />
                    <TextContainer category={about.durer}/>
                </div>
            </Tab>
            <Tab eventKey={2} title="Work">content</Tab>
            <Tab eventKey={3} title="Contact">
                <div className="content col-md-8 col-md-offset-2">
                    <ImageContainer className={contact.className} style={contact.style} category={contact.caravaggio} />
                    <EssayForm />
                </div>
            </Tab>
          </Tabs>
        </div>
    </div>
);

ReactDOM.render(tabsInstance, document.getElementById('container'));