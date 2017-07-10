import React from 'react'
import json from '../js/pieces.json'
import {ImageContainer, TextContainer, about, contact} from '../js/images'
import {Gallery} from '../js/gallery'
import {EssayForm} from '../js/forms'


export class AboutContainer extends React.Component {
    render() {
        return (
            <div className="content col-md-8 col-md-offset-2">
                <ImageContainer className={about.className} style={about.style} category={about.durer} />
                <TextContainer category={about.durer}/>
            </div>
        )
    }
}

export class GalleryContainer extends React.Component {
    render () {
        return (
            <div className="container" id="gallery-container">
                <div className="row">
                    <Gallery pieces={json.pieces} key={json.pieces.id}/>
                </div>
            </div>
        )
    }
}

export class ContactContainer extends React.Component {
    render() {
        return (
        <div className="content col-md-8 col-md-offset-2">
            <ImageContainer className={contact.className} style={contact.style} category={contact.caravaggio} />
            <EssayForm />
        </div>
        )
    }
}