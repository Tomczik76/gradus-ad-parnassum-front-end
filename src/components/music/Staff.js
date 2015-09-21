import React, { Component } from 'react';

export default class Staff extends Component {

  render() {
    const lineStyle = {stroke:"rgb(0,0,0)", strokeWidth:"1.5"};
    return (
      <svg height="150" width="400">
        <line x1="1" y1="30" x2="1" y2="110" style={lineStyle} />
        <line x1="0" y1="30" x2="400" y2="30" style={lineStyle} />
        <line x1="0" y1="50" x2="400" y2="50" style={lineStyle} />
        <line x1="0" y1="70" x2="400" y2="70" style={lineStyle} />
        <line x1="0" y1="90" x2="400" y2="90" style={lineStyle} />
        <line x1="0" y1="110" x2="400" y2="110" style={lineStyle} />
        <line x1="399" y1="30" x2="399" y2="110" style={lineStyle} />
        {this.props.children}
      </svg>
    );
  }
}
