import React, {Component} from 'react';
import Map from './map'

class Location extends Component {
  render() {
    return (
      <div id="location-component">
        {/* PANEL-1 */}
        <div id="l-panel-1">
          <Map
              isMarkerShown
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%`, margin: '50px 100px 0 100px'}} />}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC2JWUeQf4QsSlYg0A4d-AjwRSYrAsOMGg&v=3.exp&libraries=geometry,drawing,places"
          />
        </div>
      </div>
    );
  }
}

export default Location;
