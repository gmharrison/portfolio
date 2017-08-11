import React from 'react'
import {ImageContainer, TextContainer, about, contact} from './images'
import {EssayForm} from './forms'
import Appear from 'react-appear'
import {WindowResize} from './gallery'
import {PieceData} from './roulette'
import {data} from './roulette_data'
import {SocialLinks} from './links'

export class AboutContainer extends React.Component {
    render() {
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
}

export class GalleryContainer extends React.Component {
    render () {
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
}

export class ContactContainer extends React.Component {
    render() {
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
}

export class RouletteContainer extends React.Component {
    render() {
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
}