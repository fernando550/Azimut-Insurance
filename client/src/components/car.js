import React, {Component} from 'react';

class Car extends Component {
  render() {
    return (
      <div id="car-insurance-component">

        {/* HEADER-1 */}
        <h1 id="car-header-1" className="container py-3">Car Insurance</h1>

        {/* PANEL-1 */}
        <div id="car-panel-1" className="panel-insurance p-5">
          <div className="row align-items-center">
            <div className="col">
              <h4 className="pb-3">Get insured by a team that loves your car just as much as you do</h4>
              <h6>Cars aren't just parts. Azimut started because our love for cars extends to our community.</h6>
            </div>
          </div>

          <div className="row align-items-start pt-5" style={{height: '400px'}}>
            <div className="col">
              Facts you need to know about car insurance:
              <ul style={{marginLeft: '-22px', marginTop: '10px'}}>
                <li className="py-2">Driver must have a personal injury protection of at least $10,000</li>
                <li className="py-2">Drivers must have Bodily injury limits of at least $10,000 per person and $20,000 per accident</li>
                <li className="py-2">Drivers must have a property damage liability of atleast $10,000</li>
              </ul>
            </div>

            <div className="col h-100 w-100">
              <div id="car-panel-1-img"></div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Car;