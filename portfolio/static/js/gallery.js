import React from 'react';
import {Link} from 'react-router-dom'
import json from './data/pieces.json'
let STATIC_URL = document.getElementById('static-url').value;

export class WindowResize extends React.Component {
    constructor (props) {
		super(props);
		this._handleWindowResize = _.debounce(this._handleWindowResize.bind(this), 100);
		this.state = {
			containerWidth: '',
            Num: 3
		};
		this._isMounted = false;
	}

	componentDidMount () {
		this._isMounted = true;
		this._handleWindowResize()
		window.addEventListener('resize', this._handleWindowResize);
	}

	componentWillUnmount () {
		this._isMounted = false;
		window.removeEventListener('resize', this._handleWindowResize);
	}

	_handleWindowResize () {
		if (this._isMounted) {
			this.setState({
				containerWidth: document.getElementById('container').offsetWidth
			});
			if (this.state.containerWidth < 992) {
		        this.setState({Num: 2})
            } else {
                this.setState({Num: 3})
            }
		}
	}

	render () {
        return (
            <div>
                <Gallery itemsPerRow={this.state.Num} pieces={json.pieces} key={json.pieces.id} />
            </div>
        )
    }
}

const GalleryCol = ({piece}) => {
    return(
        <div key={piece.id}>
            <Link key={piece.id} to={piece.path} >
                <div className="col-md-4 col-sm-6" key={piece.id}>
                    <div className="object-container" key={piece.id}>
                        <div className="title-container">
                            <p className="work-title">{piece.work}</p>
                        </div>
                        <div className="sub-container" key={piece.id} style={{backgroundImage:'url(' + STATIC_URL + piece.style + ')'}}>
                        </div>
                        <div className="object-title-container text-container">
                            <div className="object-title">
                                {piece.title}
                                <p className="desc">{piece.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

const GalleryRow = ({ cols }) => {
    return(
        <div className="row">
            {cols.map((col, i) =>
                <GalleryCol piece={col} />
            )}
        </div>
    )
}

export const Gallery = (props) => {
    let rows = [];

    // Turn our list of items into a list of rows that each have a list of columns
    // so our data structure more accurately reflects our display structure
    for (let i=0; i < props.pieces.length; i += props.itemsPerRow){
        let cols = [];
        for(let j=0; j < props.itemsPerRow && i + j < props.pieces.length; j++ ){
            cols.push(props.pieces[i+j]);
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


