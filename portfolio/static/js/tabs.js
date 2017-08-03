import React from 'react'
import json from '../js/pieces.json'
import {ImageContainer, TextContainer, about, contact} from './images'
import {Gallery} from './gallery'
import {EssayForm} from './forms'
import Appear from 'react-appear'
import {WindowResize} from './gallery'


export class AboutContainer extends React.Component {
    render() {
        return (
            <Appear className="custom-fade">
                <div className="container">
                    <div className="row">
                        <div id="content" className="col-md-8 col-md-offset-2">
                            <ImageContainer className={about.className} style={about.style} category={about.durer} />
                            <TextContainer category={about.durer}/>
                        </div>
                    </div>
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
                        {/*<Gallery pieces={json.pieces} key={json.pieces.id}/>*/}
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
                <div className="container">
                    <div className="row">
                        <div id="content" className="col-md-8 col-md-offset-2">
                            <ImageContainer className={contact.className} style={contact.style} category={contact.caravaggio} />
                            <EssayForm />
                        </div>
                    </div>
                </div>
            </Appear>
        )
    }
}