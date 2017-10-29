import L from 'leaflet';
import React, { Component } from 'react';
import './Map.css';

export default class Map extends Component {
    constructor() {
        super();
        this.markers = [];
        this.map = {}
    }
    render() {
        return <span id="Map-container"/>
    }
    componentDidMount() {
        // Map creation
        this.mymap = L.map('Map-container').setView([this.props.cities[0].latitude, this.props.cities[0].longitude], 3);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiY2xhaXJlYyIsImEiOiJjajliMzF3MHoxaTAzMzJweTJ3OWFvOWRiIn0.eEE8-dHJKiMEWY-ypCfXmg'
        }).addTo(this.mymap);

        //Markers are added for every city of the sub list
        this.addMarkers();
    }
    componentDidUpdate() {
        if (this.props.bouncedMarker !== undefined) {
            this.highlightMarker(this.props.bouncedMarker)
        }
        else {
            this.updateMarkers()
        }
    }
    highlightMarker(marker) {
        if (this.markers.length > marker) {
            this.markers[marker].setOpacity(1);
            this.markers[marker].setZIndexOffset(100);
            if (this.previousMarker !== undefined) {
                this.previousMarker.setOpacity(0.7);
                this.previousMarker.setZIndexOffset(1);;
            }
            this.previousMarker = this.markers[marker];
        }
    }
    updateMarkers() {
        while (this.markers.length) {
            this.mymap.removeLayer(this.markers.shift());
        }
        this.addMarkers()
    }
    addMarkers() {
        for (var i = 0; i < this.props.cities.length; i++) {
            this.markers.push(L.marker([this.props.cities[i].latitude, this.props.cities[i].longitude],
                { opacity: 0.7 }));
            this.markers[this.markers.length - 1].addTo(this.mymap);
        }
    }
}
