import React, { Component } from 'react';
import WithAuth from './AuthContext';
import mapboxgl from 'mapbox-gl';

export class Map extends Component {
  mapContainer = React.createRef();
  componentDidMount() {
    mapboxgl.accessToken = "pk.eyJ1Ijoic3RlZmFuNDA3IiwiYSI6ImNrZ2RlbTltZTEwMmkydWt6cmNhaWJsZXQifQ.OQjz6sjtrshfQtFYmWXrLQ";
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [49.9808, 36.2527],
      zomm: 10
    })
  }
  componentWillUnmount() {
    this.map.remove()
  }
  render() {
    return <div className="map-wrapper">
      <div data-test-id="map" className="map" ref={this.mapContainer}></div>
    </div>
  }
}

const MapWithAuth = WithAuth(Map);
export default MapWithAuth