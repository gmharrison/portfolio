import React from 'react';
let STATIC_URL = document.getElementById('static-url').value;

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
    			<div key={i}>
                    <p>{datum.name}</p>
                    <p>{datum.text}</p>
                    <img src={datum.image} />
	  			</div>
   			    );
			}
  		});
    return (
      <div>
          <button onClick={this.setNewTarget}>Click me</button>
          {listItems}
      </div>
    );
  }
}