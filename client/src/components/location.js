import React, {Component} from 'react';
import Map from './map'

class Location extends Component {
  render() {
    return (
      <div id="location-component">

        {/* HEADER-1 */}
        <h1 className="container py-3">Locate Us</h1>

        {/* PANEL-1 */}
        <div id="l-panel-1" className="panel">
          <Map
              isMarkerShown
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` , borderTop: '5px solid red'}} />}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC2JWUeQf4QsSlYg0A4d-AjwRSYrAsOMGg&v=3.exp&libraries=geometry,drawing,places"
          />
        </div>
      </div>
    );
  }
}

export default Location;