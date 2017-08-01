import React from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';
import {ta} from './detail_data'

const next = (
    <button className="button next-button">Next</button>
)

const prev = (
    <button className="button next-button">Prev</button>
)

export class Slider extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
        index: 0,
        direction: null,
    };
    this.handleSelect = this.handleSelect.bind(this)
  };

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    return (
      <Carousel className="slider" nextIcon={next} prevIcon={prev} indicators={false} activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
        <Carousel.Item>
            <img src={ta.slideshow1} />
        </Carousel.Item>
        <Carousel.Item>
            <img src={ta.slideshow2} />
        </Carousel.Item>
        <Carousel.Item>
            <img src={ta.slideshow3} />
        </Carousel.Item>
        <Carousel.Item>
            <img src={ta.slideshow4} />
        </Carousel.Item>
        <Carousel.Item>
            <img src={ta.slideshow5} />
        </Carousel.Item>
      </Carousel>
        )
    }
}
