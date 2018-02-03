import React from 'react'
import {about, contact} from './data/container_data.js'
import {EssayForm} from './forms'
import Appear from 'react-appear'
import {WindowResize} from './gallery'
import {PieceData} from './roulette'
import {data} from './data/roulette_data.js'
import {SocialLinks} from './links'
import {Squiggle} from './shapes'
import $ from 'jquery';
window.jQuery = $;

// Generic text container
export const TextContainer = (props) => {
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

// Image container used for About and Contact
export const ImageContainer = (props) => {
    return (
        <div className={props.className} style={props.style}>
            <div className="title-container">
                <p className="work-title">{props.category.title}</p>
            </div>
            <div className="section" style={props.category.section} onClick={load}/>
        </div>
    )
}

export const AboutContainer = () => {
    return (
        <Appear className="custom-fade">
            <div className="container-fluid" id="about-container">
                <div className="row">
                    <div id="content" className="col-md-8 col-md-offset-2">
                        <ImageContainer className={about.className} style={about.style} category={about.durer} />
                        <TextContainer category={about.durer}/>
                    </div>
                </div>
            </div>
            <div>
                <SocialLinks />
            </div>
        </Appear>
    )
}

export const GalleryContainer = () => {
    return (
        <Appear className="custom-fade">
            <div className="container" id="gallery-container">
                <div className="row">
                    <WindowResize />
                </div>
            </div>
        </Appear>
    )
}

export const ContactContainer = () => {
    return (
    <Appear className="custom-fade">
        <div className="container-fluid" id="contact-container">
            <div className="row">
                <div id="content" className="col-md-8 col-md-offset-2">
                    <ImageContainer className={contact.className} style={contact.style} category={contact.caravaggio} />
                    <EssayForm />
                </div>
            </div>
        </div>
        <div>
            <SocialLinks />
        </div>
    </Appear>
    )
}

export const RouletteContainer = () => {
    return (
        <Appear className="custom-fade">
            <div className="container-fluid" id="roulette-container">
                <div className="row">
                    <div id="content" className="col-md-8 col-md-offset-2">
                        <PieceData data={data}/>
                    </div>
                </div>
            </div>
        </Appear>
    )
}

//Dumb little load function that brings the contact form forward
function load(){
    $('.form-container form').addClass('front');
}
