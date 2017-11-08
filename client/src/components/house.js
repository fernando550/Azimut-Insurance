import React, {Component} from 'react';

class House extends Component {
  render() {
    return (
      <div id="house-component">

        {/* HEADER-1 */}
        <h1 id="house-header-1" className="container py-3">House Insurance</h1>

        {/* PANEL-1 */}
        <div id="house-panel-1" className="panel-insurance p-5" >
          <div className="row px-5 justify-content-center">
            <div className="col px-5 text-align-center border border-top-0 border-bottom-0 border-left-0">
              <h4 className="pb-3">Protect your home</h4>
              <h6>A house is usually a person's most expensive asset. All the more reason to insure it. We can help you find a policy that will protect your house and it's belongings. Rent or buy, we have the coverage necessary for you to feel safe at home.</h6>
            </div>

            <div className="col px-5 text-align-center">
              <h4 className="pb-3">Dont own a home?</h4>
              <h6>Applying for renter's insurance will cover you and your belongings for loss or damage. Although the landlord own's the property, protecting your assets is up to you.</h6>
            </div>
          </div>

          <div className="row px-5 align-items-start pt-5" style={{height: '400px'}}>
            <div className="col text-align-center">
             <h4 className="pb-3">Different policies:</h4>
              <ul style={{marginLeft: '-22px'}}>
                <li className="py-2">HO-2: A broad policy that will cover your house and contents against 16 disasters.</li>
                <li className="py-2">HO-3: Most common and broadest policy. It covers against all perils except those specifically excluded</li>
                <li className="py-2">HO-6: A policy that covers your condominium. This policy provides coverage for liability, personal property, and structural parts of the building.</li>
                <li className="py-2">HO-8: This policy is designed for older homes whose replacement cost exceeds the property's value.</li>
              </ul>
            </div>

            <div className="col h-100 w-100">
              <div id="house-panel-1-img"></div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default House;