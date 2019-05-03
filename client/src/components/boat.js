import React, {Component} from 'react';
import Yacht from '../images/modernyacht.png';

class Boat extends Component {
  render() {
    return (
      <div id="boat-insurance-component" style={
        {backgroundImage: `url(${Yacht})`,
        backgroundSize: 'contain',
        backgroundPosition: 'top',
        marginTop: '-226px'
      }
      }>

        {/* HEADER-1 */}
        <div id="boat-header-1" className="container" style={{height: '500px'}}></div>
        <h1 className="container py-3">Marine Insurance</h1>

        {/* PANEL-1 */}
        <div id="boat-panel-1" className="panel-insurance p-5">
          <div className="row">
            <div className="col-sm-12">
              <h4 className="pb-3">Have us protect your boat</h4>
              <h6>Focus on spending a great day with your friends and family</h6>
            </div>
          </div>

          <div className="row align-items-start pt-5">
            <div className="col-sm-6">
              Facts you need to know about Marine insurance:
              <ul style={{marginLeft: '-22px', marginTop: '10px'}}>
                <li className="py-2">A policy covers you for liability if someone is injured on your watercraft</li>
                <li className="py-2">Your marine policy gives you the choice between cash value (agreed value) or replacement cost in case of a total loss</li>
              </ul>
              <br/>
              <p style={{fontSize: '20px'}}>Click the link for a quote: <a href="/boatApp" target="_blank" style={{color: 'red', textDecoration: "underline"}}>Marine Insurance Application</a></p>

            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Boat;
