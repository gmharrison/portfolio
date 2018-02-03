import React from 'react';
import Appear from 'react-appear'
import {Squiggle} from './shapes'

export class PieceData extends React.Component {
    constructor (props) {
        super(props);
        this.setNewTarget = this.setNewTarget.bind(this);
        this.state = {
                // Define the current selection
                selection: -1,
                oldSelection: null,
            };
        }

    randomInteger(min, max) {
        // Create a random number
        let rand = min + Math.random() * (max - min);
        rand = Math.round(rand);
        return rand;
    }

    setNewTarget() {
        let length = this.props.data.length - 1;
        let randNum = this.randomInteger(0, length);
        // Make sure that the piece doesn't repeat by
        // selecting a random number every time
        if (this.state.selection !== randNum) {
            this.setState({
                selection: randNum,
                oldSelection: this.state.selection
            })
        } else {
            this.setNewTarget();
        }
    }

    render() {
        let selection = this.state.selection
        // Map over data prop and check if the index is equal to the current selection.
        // If it is, show the component
        let listItems = this.props.data.map(function(datum, i) {
            if (selection == i) {
                return (
                    <Appear className="custom-fade">
                        <div key={datum.id}>
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="roulette-text-container">
                                        <p className="artist">{datum.artist}</p>
                                        <p><span className="title">{datum.title},</span><span className="date"> {datum.date}</span></p>
                                        <div className="squiggle-container">
                                            <Squiggle />
                                        </div>
                                        <p className="text">"{datum.text}"
                                            <span className="additional">{datum.additional}</span>
                                        </p>
                                        <p className="link">From the <a target="_blank" href={datum.link}>{datum.source}</a></p>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="roulette-image-container">
                                        <img src={datum.image}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Appear>
                );
            }
        })
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