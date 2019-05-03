import React, {Component} from 'react';
import HousePic from '../images/modernhouse.jpg';

class House extends Component {
  render() {
    return (
      <div id="house-component" style={
        {backgroundImage: `url(${HousePic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        marginTop: '-226px'
      }}>

        {/* HEADER-1 */}
        <div id="boat-header-1" className="container" style={{height: '500px'}}></div>
        <h1 className="container py-3">Home Insurance</h1>

        {/* PANEL-1 */}
        <div id="house-panel-1" className="panel-insurance p-5" >
          <div className="row justify-content-center">
            <div className="col-sm-6 px-5 pb-5 text-align-center">
              <h4 className="pb-3">Protect your home</h4>
              <h6>A house is usually a person's most expensive asset. All the more reason to insure it. We can help you find a policy that will protect your house and it's belongings. Rent or buy, we have the coverage necessary for you to feel safe at home.</h6>
            </div>

            <div className="col-sm-6 px-5 text-align-center">
              <h4 className="pb-3">Dont own a home?</h4>
              <h6>Applying for renter's insurance will cover you and your belongings for loss or damage. Although the landlord own's the property, protecting your assets is up to you.</h6>
            </div>
          </div>

          <div className="row align-items-start pt-5" style={{margin: '0 25%'}}>
            <div className="col-sm-12 text-align-center">
             <h4 className="pb-3">Different policies:</h4>
              <ul style={{marginLeft: '-22px'}}>
                <li className="py-2">HO-2: A broad policy that will cover your house and contents against 16 disasters.</li>
                <li className="py-2">HO-3: Most common and broadest policy. It covers against all perils except those specifically excluded</li>
                <li className="py-2">HO-6: A policy that covers your condominium. This policy provides coverage for liability, personal property, and structural parts of the building.</li>
                <li className="py-2">HO-8: This policy is designed for older homes whose replacement cost exceeds the property's value.</li>
              </ul>
              <br/>
              <p style={{fontSize: '20px'}}>Click the link for a quote: <a href="/houseApp" target="_blank" style={{color: 'red', textDecoration: "underline"}}>Home Insurance Application</a></p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default House;
