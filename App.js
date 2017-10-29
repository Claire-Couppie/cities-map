import React, { Component } from 'react';
import './App.css';
import Model from './Model.js';
import Pagination from './Pagination.js';
import Map from './Map.js';
import Scrollable from './Scrollable.js';

class App extends Component {
  constructor() {
    super();
    this.model = new Model();
    this.total = this.model.getCitiesCount();
    this.citiesByPage = 50;
    this.state = { subModel: this.model.getSubList(0, this.citiesByPage) };
    this.page = 0;
  }
  handlePageChange(n) {
    // The submodel is updated for this new page
    this.setState({ subModel: this.model.getSubList(n * this.citiesByPage, this.citiesByPage), hoveredCity: undefined });
    this.page = n;
  }
  handleMouseOver(i) {
    // The hovered city is updated for the map view
    this.setState({ subModel: this.model.getSubList(this.page * this.citiesByPage, this.citiesByPage), hoveredCity: i });
  }
  render() {
    return (
      <div id="App-container">
        <Scrollable  cities={this.state.subModel}
          handlemouseover={(i) => this.handleMouseOver(i) }/>
        <Map cities={this.state.subModel} bouncedMarker={this.state.hoveredCity}/>
        <Pagination
          onPageChange={(n) => this.handlePageChange(n) }
          citiesLength={this.total}
          citiesByPage={this.citiesByPage}
          />
      </div>
    );
  }
}

export default App;
