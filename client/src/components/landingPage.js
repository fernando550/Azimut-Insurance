import React, {Component} from 'react';
import Carousel1 from './carouselIns';
import Carousel2 from './carouselTest';

class Home extends Component {
  render() {
    return (
      <div id="home-component">
        {/* HEADER-1 */}
        <h1 id="h-header-1" className="container py-3 text-align-center" style={{height: '300px'}}>Welcome to Azimut Insurance Consultants</h1>
        {/* PANEL-1 */}
        <div id="h-panel-1" className="panel px-5 pb-5 row align-items-center">
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

        {/* HEADER 2 */}
        <h1 id="h-header-2" className="container py-3 text-align-center">Get a Quote</h1>
        {/* PANEL 2 */}
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
        <div className="row align-items-center" style={{border: 'solid 0px transparent', backgroundColor: 'white', paddingTop: '100px'}}>
          <div className="col-sm-12 text-align-center">
          <h4>Testimonials</h4>
          </div>
        </div>
        <div id="" className="p-5 row align-items-start" style={{border: 'solid 0px transparent', backgroundColor: 'white', height: '400px'}}>
        <div className="col-sm-8 mx-auto">
          <Carousel2/>
        </div>

        </div>
        {/* HEADER-3 */}
        <h1 id="h-header-2" className="container py-3 text-align-center">Our Trusted Carriers</h1>
        {/* PANEL 3 */}
        <div id="h-panel-2" className="panel p-5 row align-items-center">
          <div className="col-sm-6">
            <h4 className="pb-5 text-align-center">With over 20+ carriers, we are confident you will find what you need.</h4>
            <h6 className="text-align-center">Come to Azimut with all your worries, and leave with none.</h6>
          </div>
          {/* CAROUSEL */}
          <div className="col-sm-6">
            <Carousel1/>
          </div>
        </div>

        {/* CONTAINER */}
        <h1 id="h-header-2" className="container py-5"></h1>

      </div>
    );
  }
}

export default Home;
