import React, {Component} from 'react';
import progressive from '../images/ins-progressive.png';
import united from '../images/ins-uaic.png';
import universal from '../images/ins-universal.png';
import citizens from '../images/ins-citizens.png';
import foremost from '../images/ins-foremost.png';
import mercury from '../images/ins-mercury.png';
import slb from '../images/ins-slb.png';
import starcasualty from '../images/ins-starcasualty.png';
import windhaven from '../images/ins-windhaven.png';
import upc from '../images/ins-upc.png';


class Home extends Component {
  render() {
    return (
      <div id="home-component">

        {/* HEADER-1 */}
        <h1 id="h-header-1" className="container py-3">Welcome to Azimut Insurance Consultants</h1>

        <div id="h-panel-1" className="panel p-5 row align-items-center">
          <div className="col-sm-6 align-items-center mx-auto">
            <h2 className="pb-5 text-align-center">Why Choose Us?</h2>
            <div className="text-align-center">
              <p style={{fontSize:'20px'}}>We are an independent insurance brokerage that aims to add value to your lifestyle.
              We only partner with leading insurance companies to ensure you the best product for your risks and needs.
              We are one of the few agencies in Florida licensed in Excess and Surplus lines of insurance making
              our brokerage unique and exceptional for all your insurance needs. </p>
            </div>
          </div>
        </div>

        <h1 id="h-header-2" className="container py-3">Get a Quote</h1>

        {/* PANEL 1 */}
        <div id="h-panel-1" className="panel p-5 row align-items-center">
          <div className="col-sm-6 image-container">
            <div id="h-panel-1-img"></div>
          </div>
          <div className="col-sm-6">
            <h4 className="pb-5 text-align-center">Trust is earned, get a free quote today and let us help you save</h4>
            <div className="text-align-center">
              <a className="btn btn-danger shadow" href="/quotes" style={{width: '200px'}}>GET A QUOTE</a>
            </div>
          </div>
        </div>


        {/* HEADER-2 */}
        <h1 id="h-header-2" className="container py-3">Our Trusted Carriers</h1>

        {/* PANEL 2 */}
        <div id="h-panel-2" className="panel p-5 row align-items-center">
          <div className="col-sm-6">
            <h4 className="pb-5 text-align-center">With over 20+ carriers, we are confident you will find what you need.</h4>
            <h6 className="text-align-center">Come to Azimut with all your worries, and leave with none.</h6>
          </div>

          {/* CAROUSEL */}
          <div className="col-sm-6">
            <div id="insurance-carousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img className="d-block img-fluid c" src={progressive} alt="slide1"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid" src={universal} alt="slide2"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid" src={united} alt="slide3"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid" src={starcasualty} alt="slide4"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid" src={citizens} alt="slide5"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid" src={foremost} alt="slide6"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid" src={mercury} alt="slide7"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid" src={slb} alt="slide8"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid" src={upc} alt="slide9"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid" src={windhaven} alt="slide10"/>
                </div>
              </div>
              <a className="carousel-control-prev" href="#insurance-carousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#insurance-carousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>

        <h1 id="h-header-2" className="container py-5"></h1>

      </div>
    );
  }
}

export default Home;
