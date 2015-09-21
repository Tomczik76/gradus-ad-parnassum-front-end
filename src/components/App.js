import React, { Component } from 'react';
import ControlBar from './controlbar/ControlBar';
import Staff from './music/Staff';
import TrebleClef from './music/clefs/TrebleClef';

export default class App extends Component {

  render() {

    return (
      <div>
        <ControlBar></ControlBar>
        <div style={{marginLeft: "15px"}}>
          <Staff>
            <TrebleClef />
          </Staff>
        </div>
      </div>
    );
  }
}
