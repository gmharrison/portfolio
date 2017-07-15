import React from 'react';
let STATIC_URL = document.getElementById('static-url').value;
import {Squiggle} from './images'

export const pear = {
    style: { backgroundImage: `url(${STATIC_URL}/img/detail/bosch-wide.png)` },
    header: "Pear Tree Studio Designs",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin " +
    "massa neque, non aliquet urna placerat vitae. Nam auctor lacus et placerat gravida. Proin " +
    "pulvinar porttitor turpis, vitae facilisis sem. Morbi efficitur erat odio, id commodo enim rhoncus " +
    "sit amet. Quisque lobortis, erat at sodales lacinia, risus urna fringilla metus.",
    maindisplay: `${STATIC_URL}/img/detail/pear-tree-logo.png`,
    subtitle: 'Pear Tree Studio 2017'
}

export function Summary(props) {
    return (
        <div className="summary-container text-container">
            <p className="header">{props.details.header}</p>
            <div className="squiggle-container">
                <Squiggle />
            </div>
            <p>{props.details.summary}</p>
        </div>
    )
}

export function DetailImage (props) {
    return (
        <div className="jumbo-image" style={props.details.style}>
        </div>
    )
}

export function DisplayImage(props) {
    return (
        <div className="main-display-container">
            <img src={props.details.maindisplay} className="main-display-image"/>
            <p className="subtitle left">{props.details.subtitle}</p>
            <p className="subtitle right">{props.details.subtitle}</p>
        </div>
    )
}

export class Pear extends React.Component{
    render() {
        return (
            <div id="pear-detail-page">
                <div className="jumbo-container">
                    <DetailImage details={pear}/>
                    <Summary details={pear} />
                </div>
                <DisplayImage details={pear} />
            </div>
        )
    }
}