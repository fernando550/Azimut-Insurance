import React, {Component} from 'react';

class About extends Component {
  render() {
    return (
      <div id="about-component">

        {/* HEADER-1 */}
        <h1 id="a-header-1" className="container py-3">About Us</h1>

        {/* PANEL 1 */}
        <div id="a-panel-1" className="panel p-5 row align-items-center">
          <div className="col-sm-6 image-container">
            <div id="a-panel-1-img"></div>
          </div>
          <div className="col-sm-6 text-align-center">
            <h4 >Family Matters</h4>
            <h6 className="p-5">A family owned business that will work with you to find you the best insurance coverage.
            Azimut Insurance Consultants will strive to create a relationship with their clients.</h6>
          </div>
        </div>

        {/* PANEL-2 */}
        <div id="a-panel-2" className="panel p-5 row align-items-center">
          <div className="col-sm-6 text-align-center">
            <h4>Did You Know?</h4>
            <h6 className="p-5">Azimut Insurance Consultants work with leading insurance carriers to guarantee that
            you are receiving the coverage needed at the best price.</h6>
          </div>
          <div className="col-sm-6 image-container">
            <div id="a-panel-2-img"></div>
          </div>
        </div>

        {/* PANEL-3 */}
        <div id="a-panel-3" className="panel p-5 row align-items-center">
          <div className="col-sm-6 image-container">
            <div id="a-panel-3-img"></div>
          </div>
          <div className="col-sm-6 text-align-center">
            <h4>Close The Deal</h4>
            <h6 className="p-5">New to business and filled with excitement,
            we ensure you Azimut Inusrance Consultants will work to find you the best policies to cover your assets</h6>
          </div>
        </div>

      </div>
    );
  }
}

export default About;