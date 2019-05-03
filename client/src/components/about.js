import React, {Component} from 'react';

class About extends Component {
  render() {
    return (
      <div id="about-component">

        {/* HEADER-1 */}
        <h1 id="a-header-1" className="container py-3 text-align-center">About Us</h1>

        {/* PANEL 1 */}
        <div id="a-panel-1" className="panel p-5">
          <div className="row align-items-center">
            <div className="col-sm-6 image-container">
              <div id="a-panel-1-img"></div>
            </div>
            <div className="col-sm-6 text-align-center">
              <h4>Who We Are:</h4>
              <h6 className="p-5">
                We are an independent insurance agency specializing in insurance coverage for private clientele. <br/><br/>

                Azimut Insurance Consultants LLC. is focused on ensuring you the most comfortable and professional process for insuring
                all your assets. Whether you own an auto, yacht, home or business there are unforseen risks that you may face. It is our job
                to make sure that when these risks appear you are insured and your assets are well protected. Allow our consultants to
                rightfully guide you through the insurance process and find the right coverage to protect you. <br/><br/>

                As a small, independent agency we value our client relationships. Our consultants will take the time to learn about your needs,
                find you the appropriate coverage and continuously "WOW" you with their service. <br/><br/>

                With access to leading "A" rated companies, we are able to offer you competitive rates. As an insurance brokerage we represent
                many companies, negotiate on your behalf, and ensure you that you will be getting a competitive rate with outstanding coverage.
                Each year, our consultants strive to increase coverage and reduce premiums.
              </h6>
            </div>
          </div>
        </div>

        <h1 id="a-header-1" className="container py-3"></h1>

        <div id="a-panel-1" className="panel p-5">
          <div className="row align-items-center">
            <div className="col-sm-6 image-container">
              <div id="a-panel-2-img"></div>
            </div>
            <div className="col-sm-6 text-align-center">
              <h4>Meet the CEO:</h4>
              <h6 className="p-5">
                Eduardo G. Justo, III ("Eddie") founded Azimut Insurance Consultants in 2017 with the purpose of adding value to the client's life.
                Eddie is licensed as a Resident General Lines Insurance Agent (2-20 General Lines - Property, Casualty, Surety, Marine, Health,
                and Miscellaneous Lines) by the state of Florida. He is also licensed in Surplus Lines and holds a 1-20 Surplus Lines License and is
                currently completing his elite designations as a "Chartered Property Casualty Underwriter". Eddie graduate from Florida Gulf Coast University,
                holding a Bachelor of Science in Business management as well as a Minor in Marketing.
              </h6>
            </div>
          </div>
        </div>

        <h1 id="h-header-2" className="container py-5"></h1>
      </div>
    );
  }
}

export default About;
