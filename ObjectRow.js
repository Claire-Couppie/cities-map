import React, { Component } from 'react';
import './ObjectRow.css';

export default class ObjectRow extends Component {
  render() {
    return (
      <div className='Object-row' onMouseEnter={(i) => { this.props.onMouseOver(this.props.value.index) } }>
        <div>City: {this.props.value.city.city}</div>
        <div>State: {this.props.value.city.state}</div>
        <div>Population: {this.props.value.city.population}</div>
      </div>
    );
  }
}

