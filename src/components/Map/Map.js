import React, { Component } from 'react';

import Cell from '../Cell/Cell';

import './Map.css';

class Map extends Component {

    render () {

    
        const board = this.props.map.map((row, indRow) => {
            const line = row.map( (cell, indCol) => (
                <div key={`${indRow}${indCol}`} className="map-cell">
                    <Cell value={cell} def={this.props.cellProps}></Cell>
                </div>
            ))
            return (
                <div key={indRow} className="map-row">
                    {line}
                </div>
            );
        });

        return (
            <div className="map-board">
                {board}
            </div>
        )
    }
}

export default Map;