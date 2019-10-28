import React, { Component } from "react";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import styled from "styled-components";

const Wrapped = styled.div`
        width: ${props => props.width};
        height: ${props => props.height};
  `;

class Map extends Component {


  componentDidMount() {
    this.map = L.map('map',
        {
          center: [10.123, 105.13],
          zoom: 13,
          zoomControl: false
        });

    L.tileLayer( 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      maxZoom: 8,
      maxNativeZoom: 8,
      detectRetina: true,
    }).addTo(this.map);
  }

  render() {
    return (
        <Wrapped id="map" width = "100%" height = "100%"/>
    );
  }
}

export default Map;
