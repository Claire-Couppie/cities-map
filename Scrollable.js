import React, { Component } from 'react';
import ObjectRow from './ObjectRow.js';
import './Scrollable.css';

export default class Scrollable extends Component {
  render() {
    var rows = [];
    for (var i = 0; i < this.props.cities.length; i++) {
      rows.push(<ObjectRow value={{ city: this.props.cities[i], index: i }}
        onMouseOver={(i) => { this.props.handlemouseover(i) } }
        key={i}
        />);
    }
    return (
      <div id="Scrollable-container">
        {rows}
      </div>
    );
  }
}
