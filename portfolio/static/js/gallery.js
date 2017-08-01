import React from 'react';
import {Squiggle} from './shapes.js'
let STATIC_URL = document.getElementById('static-url').value;
import {Link} from 'react-router-dom'


function GalleryCol({piece}){
    return(
        <div key={piece.id}>
        <Link key={piece.id} to={piece.path} >
            <div className="col-md-4 col-sm-4" key={piece.id}>
                <div className="object-container" key={piece.id}>
                    <div className="title-container">
                        <p className="work-title">{piece.work}</p>
                    </div>
                    <div className="sub-container" key={piece.id} style={{backgroundImage:'url(' + STATIC_URL + piece.style + ')'}}>
                    </div>
                </div>
                <div className="object-title-container text-container">
                    <div className="object-title">
                        {piece.title}
                        <p className="desc">{piece.desc}</p>
                    </div>
                </div>
            </div>
        </Link>
        </div>
    )
}

function GalleryRow({ cols }){
    return(
        <div className="row">
            {cols.map((col, i) =>
                <GalleryCol piece={col} />
            )}
        </div>
    );
}

export function Gallery({ pieces }) {
    const itemsPerRow = 3;
    let rows = [];

    // Turn our list of items into a list of rows that each have a list of columns
    // so our data structure more accurately reflects our display structure
    for (let i=0; i < pieces.length; i += itemsPerRow){
        let cols = [];
        for(let j=0; j < itemsPerRow && i + j < pieces.length; j++ ){
            cols.push(pieces[i+j]);
        }
        rows.push(cols);
    }

  return (
    <div className="Gallery">
        {rows.map((row, i) =>
            <GalleryRow cols={row}/>
        )}
    </div>
  );
}
