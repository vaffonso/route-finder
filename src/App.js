import React, { Component } from 'react';
import './App.css';

import Map from './components/Map/Map';

import { validateArea } from './shared/utilities';
import { mapRoutes, blockedPath, destiny } from './shared/navigation';

class App extends Component {

  area1 = [
    [1,1,1],
    [1,0,1],
    [1,1,9]
  ]

  area2 = [
    [0,0,1,0],
    [0,1,1,1],
    [9,1,0,1],
    [0,1,1,1]
  ]

  area3 = [
    [0,0,0],
    [0,1,1,1],
    [1,0],
    [0,1,1,1]
  ]

  area4 = [
    []
  ]

  render() {

    const cellProps = {block: 0, destination: 9, displayValue: ((value) => false)};
    const cellPropsAlt = {block: blockedPath, destination: destiny, displayValue: ((value)=> {
      return (value !== this.block && value !== this.destination);
    })};

    const pathMap1 = mapRoutes(this.area1);
    const pathMap2 = mapRoutes(this.area2);
    
    return (
      [
        validateArea(this.area1) ? <Map key="m1" map={this.area1} cellProps={cellProps}></Map> : null,
        validateArea(pathMap1) ? <Map key="m2" map={pathMap1} cellProps={cellPropsAlt}></Map> : null,
        
        validateArea(this.area2) ? <Map key="m3" map={this.area2} cellProps={cellProps}></Map> : null,
        validateArea(pathMap2) ? <Map key="m4" map={pathMap2} cellProps={cellPropsAlt}></Map> : null,
      ]
    );

  }
}

export default App;
