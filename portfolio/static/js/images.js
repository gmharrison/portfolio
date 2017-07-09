import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
window.jQuery = $;

const image = require('-!url-loader!../img/selection.png?name=Selection');
import HorzSquiggle from '-!babel-loader!svg-react-loader!../img/squiggle.svg?name=Squiggle';
import Durer from '-!url-loader!../img/Durer.png?name=Durer'
import Caravaggio from '-!url-loader!../img/Caravaggio.png?name=Caravaggio'

export const about = {
    className: "about image-container",
    style: { backgroundImage: 'url(' + Durer + ')' },
    durer: {
        header: "About",
        title: "Knight, Death, and the Devil, Albrecht Dürer, 1513",
        text: "Gabrielle is a designer, developer, and proud cacti parent who is passionate about art history and thick denim jeans.",
    },
};

export const contact = {
    className: "contact image-container",
    style: { backgroundImage: 'url(' + Caravaggio + ')' },
    caravaggio: {
        title: "Judith Beheading Holofernes, Caravaggio, 1599",
        section: { backgroundImage: 'url(' + image + ')' }
    }
};

function load(){
    $('.form-container form').css('z-index', '1000');
}

export function Squiggle() {
	return (
		<HorzSquiggle className='squiggle' />
	)
}

export function TextContainer (props) {
    return (
        <div className="text-container">
            <p className="header">{props.category.header}</p>
            <div className="squiggle-container">
                <Squiggle />
            </div>
            <p>{props.category.text}</p>
        </div>
    )
}

export class ImageContainer extends React.Component {
	render() {
        return (
            <div className={this.props.className} style={this.props.style}>
                <div className="title-container">
                    <p className="work-title">{this.props.category.title}</p>
                </div>
                <div className="section" style={this.props.category.section} onClick={load}/>
            </div>
        )
    }
}
