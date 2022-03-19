import React, { Component, createRef } from 'react'
import mapboxgl from 'mapbox-gl'
import './map.css'
import { mapboxAccessToken } from '../../mapboxToken'

export class Map extends Component {
  map = null;
  mapConteiner = createRef();

  componentDidMount() {
    mapboxgl.accessToken = mapboxAccessToken;

    this.map = new mapboxgl.Map({
      container: this.mapConteiner.current,
      style: 'mapbox://styles/mapbox/navigation-day-v1',
      center: [ 39.1843000, 51.6720400 ],
      zoom: 10,
    })
  }

  componentWillUnmount() {
    this.map.remove()
  }

  render() {
    return <div className="map-wrapper">
      <div className="map" data-testid="map" ref={this.mapConteiner}></div>
    </div>

  }
}