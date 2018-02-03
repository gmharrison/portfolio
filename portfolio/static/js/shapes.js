import React from 'react';
const HorzSquiggle = require('-!babel-loader!svg-react-loader!../img/squiggle.svg?name=Squiggle');
import $ from 'jquery';
window.jQuery = $;

// Many of these shapes are not used, but might be incorporated later
export const Squiggle = () => {
	return (
		<HorzSquiggle className='squiggle' />
	)
}

export const Square = () => {
	return (
		<div className="rotate" />
	)
}

export const SquareDots = () => {
	return (
		<div className="rotate dots" />
	)
}

export const Circle = () => {
    return (
		<div className="circle" />
    )
}

export const Triangle = () => {
    return (
		<div className="triangle rotate" />
    )
}

let sdegree = 0;

// On scroll rotate shape
$(window).scroll(function() {
    sdegree ++ ;
    sdegree = sdegree + 2 ;
    var srotate = "rotate(" + sdegree + "deg)";
    $(".rotate").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});
});