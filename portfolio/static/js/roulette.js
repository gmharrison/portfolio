import React from 'react';
import Appear from 'react-appear'
import {Squiggle} from './shapes'

export class PieceData extends React.Component {
    constructor (props) {
    super(props);
    this.setNewTarget = this.setNewTarget.bind(this)
    this.state = {
            index: -1
        };
    }

    static get defaultProps() {
        return {
          data: []
        }
  }

    randomInteger(min, max) {
      var rand = min + Math.random() * (max - min)
      rand = Math.round(rand);
      return rand;
    }

    setNewTarget() {
        var l = this.props.data.length - 1;
        this.setState({
            index: this.randomInteger(0, l),
        })
    }
    render() {
        var hlI = this.state.index;
        var listItems = this.props.data.map(function(datum, i) {
			if (i == hlI) {
				return (
				    <Appear className="custom-fade">
                        <div key={i}>
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="roulette-text-container">
                                        <p className="artist">{datum.artist}</p>
                                        <p><span className="title">{datum.title},</span><span className="date"> {datum.date}</span></p>
                                        <div className="squiggle-container">
                                            <Squiggle />
                                        </div>
                                        <p className="text">"{datum.text}"
                                        <span className="additional">{datum.additional}</span></p>
                                        <p className="link">From the <a target="_blank" href={datum.link}>{datum.source}</a></p>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="roulette-image-container">
                                        <img src={datum.image} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Appear>
   			    );
			}
  		});
    return (
      <div>
        <div className="roulette-button-container">
            <button className="button" id="roulette-button" onClick={this.setNewTarget}>click for some art</button>
        </div>
            {listItems}
      </div>
    );
  }
}