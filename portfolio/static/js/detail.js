import React from 'react';
import {Squiggle, Square, SquareDots, Circle, Triangle} from './shapes'
import {pear, ta} from './detail_data'
let STATIC_URL = document.getElementById('static-url').value;

export function Summary(props) {
    return (
        <div>
            <div className="summary-container">
                <p className="header">{props.details.header}</p>
                <div className="squiggle-container">
                    <Squiggle />
                </div>
                <p>{props.details.summary}</p>
            </div>
            <div className="jumbo-image-container">
                <img src={props.details.maindisplay} className="display"/>
                {/*<p className="subtitle left">{props.details.subtitle}</p>*/}
                {/*<p className="subtitle right">{props.details.subtitle}</p>*/}
            </div>
            <Square />
            <SquareDots />
            <Circle />
            <Circle />
        </div>
    )
}

export class Pear extends React.Component{
    render() {
        return (
            <div id="pear-detail-page" className="detail-page-container">
                <div className="jumbo-container">
                    <Summary details={pear} />
                </div>
                <div className="detail-image-container">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="background-image" style={pear.style}>
                                <div className="section-title-container">
                                    <div className="number">.001</div>
                                    <p>Alternate<br />Logos</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="image-container">
                                            <img src={pear.alternate1} className="alternate-1 display" />
                                        </div>

                                    </div>
                                    <div className="col-md-4">
                                        <div className="image-container">
                                            <img src={pear.alternate2} className="alternate-2 display" />
                                        </div>

                                    </div>
                                    <div className="col-md-4">
                                        <div className="image-container">
                                            <img src={pear.alternate3} className="alternate-3 display" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="row vertical-align">
                        <div className="col-md-3 col-md-offset-1">
                             <div className="quote-container">
                                <div className="small-line" />
                                <p>I loved the challenge of synthesizing two very specific styles into one logo</p>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="background-image" style={pear.style}>
                                <div className="section-title-container">
                                    <div className="number">.002</div>
                                    <p>Alternate<br />Logos</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="image-container">
                                            <img src={pear.alternate4} className="alternate-4 display" />
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="image-container">
                                            <img src={pear.alternate5} className="alternate-5 display" />
                                        </div>

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
                </div>
                <div className="detail-image-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <div className="background-image" style={pear.style}>
                                    <div className="section-title-container">
                                        <div className="number">.003</div>
                                        <p>Business<br />Card</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="image-container no-padding">
                                                <img src={pear.alternate6} className="alternate-6 display" />
                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div className="image-container no-padding">
                                                <img src={pear.alternate7} className="alternate-7 display" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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