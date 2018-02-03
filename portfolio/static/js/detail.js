import React from 'react';
import {Squiggle} from './shapes'
import {pear, ta, ri, cb, codesters, illustrations, kruis, current} from './data/detail_data'
import {Slider} from './slider'
import Appear from 'react-appear';

export const Summary = (props) => {
    return (
        <div className="jumbo-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-2 col-sm-12">
                        <p className="detail-header">{props.detail.header}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-4 col-xs-3">
                        <div className="squiggle-container">
                            <Squiggle />
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-6 col-xs-8">
                        <Appear className="custom-fade">
                            <div className="summary-container">
                                <p>{props.detail.summary} <a target="_blank" href={props.detail.href}>{props.detail.link}</a></p>
                            </div>
                        </Appear>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Pear = () => {
    return (
        <div id="pear-detail-page" className="detail-page-container">
            <Summary detail={pear} />
            <div className="detail-image-container">
                <div className="container">
                    <Appear className="custom-fade">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="image-container">
                                <div className="section-title">
                                    <p>Logo Design</p>
                                    <div className="vert-line" />
                                </div>
                                <div className="block-title-container">
                                    <p>001</p>
                                </div>
                                <img src={pear.maindisplay} className="alternate-1 display" />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="image-container">
                                <div className="block-title-container">
                                    <p>002</p>
                                </div>
                                <img src={pear.alternate1} className="alternate-1 display" />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="image-container">
                                <div className="block-title-container">
                                    <p>003</p>
                                </div>
                                <img src={pear.alternate2} className="alternate-2 display" />
                            </div>
                        </div>
                    </div>
                    </Appear>
                    <Appear className="custom-fade">
                        <div className="row vertical-align">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="quote-container">
                                    <div className="small-line" />
                                    <p>I loved the challenge of synthesizing two very specific styles into one logo</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="image-container">
                                    <div className="block-title-container">
                                        <p>004</p>
                                    </div>
                                    <img src={pear.alternate4} className="alternate-4 display" />
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="image-container">
                                    <div className="block-title-container">
                                        <p>005</p>
                                    </div>
                                    <img src={pear.alternate5} className="alternate-5 display" />
                                </div>
                            </div>
                        </div>
                    </Appear>
                </div>
            </div>
            <div className="detail-image-container">
                <div className="container">
                    <Appear className="custom-fade">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="image-container">
                                    <div className="section-title">
                                        <p>Business Card</p>
                                        <div className="vert-line" />
                                    </div>
                                    <img src={pear.alternate6} className="alternate-6 display" />
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="image-container">
                                    <img src={pear.alternate7} className="alternate-7 display" />
                                </div>
                            </div>
                        </div>
                    </Appear>
                </div>
            </div>
        </div>
    )
}

export const TA = () => {
    return (
        <div id="ta-detail-page" className="detail-page-container">
            <Summary detail={ta} />
            <div className="detail-image-container">
                <div className="container">
                    <Appear className="custom-fade">
                        <div className="row vertical-align">
                            <div className="col-md-12">
                                <div className="browser-window">
                                    <div className="section-title">
                                        <p>Website Mockups</p>
                                        <div className="vert-line" />
                                    </div>
                                    <div className="browser-bar">
                                        <div className="small-circle red" />
                                        <div className="small-circle yellow" />
                                        <div className="small-circle green" />
                                    </div>
                                    <div id="carousel-container">
                                        <Slider detail={ta}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Appear>
                </div>
            </div>
            <div className="detail-image-container">
                <div className="container">
                    <Appear className="custom-fade">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="image-container">
                                    <div className="section-title">
                                        <p>Logo Design</p>
                                        <div className="vert-line" />
                                    </div>
                                    <div className="block-title-container">
                                        <p>001</p>
                                    </div>
                                    <img src={ta.maindisplay} className="alternate-1 display" />
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="image-container">
                                    <div className="block-title-container">
                                        <p>002</p>
                                    </div>
                                    <img src={ta.alternate2} className="alternate-2 display" />
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="image-container">
                                    <div className="block-title-container">
                                        <p>003</p>
                                    </div>
                                    <img src={ta.alternate3} className="alternate-3 display" />
                                </div>
                            </div>
                        </div>
                    </Appear>
                </div>
            </div>
        </div>
    )
}

export const RI = () => {
    return (
        <div id="ri-detail-page" className="detail-page-container">
            <Summary detail={ri} />
            <div className="detail-image-container">
                <div className="container">
                    <Appear className="custom-fade">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="image-container">
                                    <div className="section-title">
                                        <p>Print Design</p>
                                        <div className="vert-line" />
                                    </div>
                                    <div className="block-title-container">
                                        <p>001</p>
                                    </div>
                                    <img src={ri.alternate1} className="alternate-1 display" />
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="image-container">
                                    <div className="block-title-container">
                                        <p>002</p>
                                    </div>
                                    <img src={ri.alternate2} className="alternate-1 display" />
                                </div>
                            </div>
                        </div>
                    </Appear>
                    <Appear className="custom-fade">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="image-container">
                                    <div className="block-title-container">
                                        <p>003</p>
                                    </div>
                                    <img src={ri.alternate3} className="alternate-2 display" />
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="image-container">
                                    <div className="block-title-container">
                                        <p>004</p>
                                    </div>
                                    <img src={ri.alternate4} className="alternate-3 display" />
                                </div>
                            </div>
                        </div>
                    </Appear>
                    <Appear className="custom-fade">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="image-container">
                                    <div className="block-title-container">
                                        <p>005</p>
                                    </div>
                                    <img src={ri.alternate5} className="alternate-2 display" />
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="image-container">
                                    <div className="block-title-container">
                                        <p>006</p>
                                    </div>
                                    <img src={ri.alternate6} className="alternate-3 display" />
                                </div>
                            </div>
                        </div>
                    </Appear>
                </div>
            </div>
        </div>
    )
}

export const CB = () => {
    return (
        <div id="cb-detail-page" className="detail-page-container">
            <Summary detail={cb} />
            <div className="detail-image-container">
                <div className="container">
                    <Appear className="custom-fade">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="image-container">
                                    <div className="section-title">
                                        <p>Logo Design</p>
                                        <div className="vert-line" />
                                    </div>
                                    <div className="block-title-container">
                                        <p>001</p>
                                    </div>
                                    <img src={cb.alternate1} className="alternate-1 display" />
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="image-container">
                                    <div className="block-title-container">
                                        <p>002</p>
                                    </div>
                                    <img src={cb.alternate2} className="alternate-2 display" />
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="image-container">
                                    <div className="block-title-container">
                                        <p>003</p>
                                    </div>
                                    <img src={cb.alternate3} className="alternate-3 display" />
                                </div>
                            </div>
                        </div>
                    </Appear>
                </div>
            </div>
            <div className="detail-image-container">
                <div className="container">
                    <Appear className="custom-fade">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <div className="image-container">
                                    <div className="section-title">
                                        <p>Print Design</p>
                                        <div className="vert-line" />
                                    </div>
                                    <img src={cb.alternate4} className="alternate-4 display" />
                                </div>
                            </div>
                        </div>
                    </Appear>
                </div>
            </div>
        </div>
    )
}

export const Codesters = () => {
    return (
        <div id="codesters-detail-page" className="detail-page-container">
            <Summary detail={codesters} />
        </div>
    )
}

export const Illustrations = () => {
    return (
        <div id="illustrations-detail-page" className="detail-page-container">
            <Summary detail={illustrations} />
            <div className="detail-image-container">
                <div className="container">
                    <Appear className="custom-fade">
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                <div className="image-container">
                                    <div className="section-title">
                                        <p>Graphite Illustrations</p>
                                        <div className="vert-line" />
                                    </div>
                                    <div className="block-title-container">
                                        <p>001</p>
                                    </div>
                                    <img src={illustrations.alternate7} className="alternate-1 display" />
                                </div>
                                <div className="image-container">
                                    <div className="block-title-container">
                                        <p>002</p>
                                    </div>
                                    <img src={illustrations.alternate8} className="alternate-2 display" />
                                </div>
                            </div>
                            <div className="col-md-8 col-sm-8">
                                <div className="image-container">
                                    <div className="block-title-container">
                                        <p>003</p>
                                    </div>
                                    <img src={illustrations.alternate9} className="alternate-3 display" />
                                </div>
                            </div>
                        </div>
                    </Appear>
                    <Appear className="custom-fade">
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                <div className="image-container">
                                    <div className="block-title-container">
                                        <p>004</p>
                                    </div>
                                    <img src={illustrations.alternate5} className="alternate-4 display" />
                                </div>
                            </div>
                            <div className="col-md-8 col-sm-8">
                                <div className="image-container">
                                    <div className="block-title-container">
                                        <p>005</p>
                                    </div>
                                    <img src={illustrations.alternate6} className="alternate-5 display" />
                                </div>
                            </div>
                        </div>
                    </Appear>
                </div>
            </div>
            <div className="detail-image-container">
                <div className="container">
                    <Appear className="custom-fade">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="image-container">
                                    <div className="section-title">
                                        <p>Digital Illustrations</p>
                                        <div className="vert-line" />
                                    </div>
                                    <div className="block-title-container">
                                        <p>001</p>
                                    </div>
                                    <img src={illustrations.alternate1} className="alternate-6 display" />
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="image-container">
                                    <div className="block-title-container">
                                        <p>002</p>
                                    </div>
                                    <img src={illustrations.alternate2} className="alternate-7 display" />
                                </div>
                            </div>
                        </div>
                    </Appear>
                    <Appear className="custom-fade">
                        <div className="row vertical-align">
                            <div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12">
                                <div className="quote-container">
                                    <div className="small-line" />
                                    <p>Instead of buying a whole roll of wrapping paper, I thought
                                    it would be fun to make my own</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="image-container">
                                    <div className="block-title-container">
                                        <p>003</p>
                                    </div>
                                    <img src={illustrations.alternate4} className="alternate-8 display" />
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="image-container">
                                    <div className="block-title-container">
                                        <p>004</p>
                                    </div>
                                    <img src={illustrations.alternate10} className="alternate-9 display" />
                                </div>
                            </div>
                        </div>
                    </Appear>
                </div>
            </div>
        </div>
    )
}

export const Kruis = () => {
    return (
        <div id="kruis-detail-page" className="detail-page-container">
            <Summary detail={kruis} />
        </div>
    )
}

export const Current = () => {
    return (
        <div id="current-detail-page" className="detail-page-container">
            <Summary detail={current} />
        </div>
    )
}