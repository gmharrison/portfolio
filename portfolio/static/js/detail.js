import React from 'react';
import {Squiggle, Square, SquareDots, Circle, Triangle} from './shapes'
import {pear, ta} from './detail_data'
let STATIC_URL = document.getElementById('static-url').value;

export function Summary(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <div className="summary-container">
                    <p className="header">{props.details.header}</p>
                    <div className="squiggle-container">
                        <Squiggle />
                    </div>
                    <p>{props.details.summary}</p>
                </div>
                </div>
            </div>
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
            <img src={props.details.maindisplay} className="display"/>
            <Square />
            <div className="squiggle-container">
                <Squiggle />
            </div>
            <Circle />
            <Circle />
            {/*<p className="subtitle left">{props.details.subtitle}</p>*/}
            {/*<p className="subtitle right">{props.details.subtitle}</p>*/}
        </div>
    )
}

export function ImageSection(props) {
    return (
    <div className="detail-image-container">
        <div className="line"/>
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                </div>
                <div className="col-md-8">
                    <div className="col-md-4">
                        <div className="image-container">
                            <img src={props.details.alternate1} className="alternate-1 display" />
                        </div>
                        <div className="title-container">
                            <p>Alternate 1</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="image-container">
                            <img src={props.details.alternate2} className="alternate-2 display" />
                        </div>
                        <div className="title-container">
                            <p>Alternate 2</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="image-container">
                            <img src={props.details.alternate3} className="alternate-3 display" />
                        </div>
                        <div className="title-container">
                            <p>Alternate 3</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                </div>
                <div className="col-md-8">
                    <div className="col-md-4 col-md-offset-2">
                        <div className="image-container">
                            <img src={props.details.alternate4} className="alternate-4 display" />
                        </div>
                        <div className="title-container">
                            <p>Alternate 4</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="image-container">
                            <img src={props.details.alternate5} className="alternate-5 display" />
                        </div>
                        <div className="title-container">
                            <p>Alternate 5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="shapes">
            <Square />
            <SquareDots />
            <SquareDots />
            <div className="circle-container">
                <Circle />
            </div>
        </div>
    </div>
    )
}

export function ImageSectionTwo(props) {
    return (
        <div className="detail-image-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-2">
                        <div className="image-container no-padding">
                            <img src={props.details.alternate6} className="alternate-6 display" />
                        </div>
                        <div className="title-container">
                            <p>{props.details.title1}</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="image-container no-padding">
                            <img src={props.details.alternate7} className="alternate-7 display" />
                        </div>
                        <div className="title-container">
                            <p>{props.details.title2}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="squiggle-container">
                <Squiggle />
            </div>
        </div>
    )
}

export class Pear extends React.Component{
    render() {
        return (
            <div id="pear-detail-page" className="detail-page-container" style={pear.style}>
                {/*<img src={pear.circle} className="rotate circle-text"/>*/}
                <div className="jumbo-container">
                    <Summary details={pear} />
                </div>
                <DisplayImage details={pear} />
                <ImageSection details={pear} />
                <ImageSectionTwo details={pear} />
            </div>
        )
    }
}


export class TA extends React.Component {
    render() {
        return (
            <div id="ta-detail-page" className="detail-page-container" style={ta.style}>
                <div className="jumbo-container">
                    <Summary details={ta}/>
                </div>
                <div className="screenshot-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3">
                                <div className="browser-window">
                                    <div className="browser-bar">
                                        <div className="small-circle red" />
                                        <div className="small-circle yellow" />
                                        <div className="small-circle green" />
                                    </div>
                                    <img src={ta.slideshow1} className="display"/>
                                    <div className="browser-shadow" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}