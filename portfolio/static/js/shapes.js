import React from 'react';
const HorzSquiggle = require('-!babel-loader!svg-react-loader!../img/squiggle.svg?name=Squiggle');
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import $ from 'jquery';
window.jQuery = $;

export function Squiggle() {
	return (
		<HorzSquiggle className='squiggle' />
	)
}

export function Square() {
	return (
		<div className="rotate" />
	)
}

export function SquareDots() {
	return (
		<div className="rotate dots" />
	)
}

export function Circle() {
    return (
		<div className="circle" />
    )
}

export function Triangle() {
    return (
		<div className="triangle rotate" />
    )
}

let sdegree = 0;

$(window).scroll(function() {

    sdegree ++ ;
    sdegree = sdegree + 2 ;
    var srotate = "rotate(" + sdegree + "deg)";
    $(".rotate").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});

});