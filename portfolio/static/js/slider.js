import React from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';

const next = (
    <button className="button next-button">Next</button>
)

const prev = (
    <button className="button back-button">Prev</button>
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
                <img src={this.props.detail.slideshow1} />
            </Carousel.Item>
            <Carousel.Item>
                <img src={this.props.detail.slideshow2} />
            </Carousel.Item>
            <Carousel.Item>
                <img src={this.props.detail.slideshow3} />
            </Carousel.Item>
            <Carousel.Item>
                <img src={this.props.detail.slideshow4} />
            </Carousel.Item>
            <Carousel.Item>
                <img src={this.props.detail.slideshow5} />
            </Carousel.Item>
        </Carousel>
        )
    }
}

