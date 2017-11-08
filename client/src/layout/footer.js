import React, {Component} from "react";
// import {Route, Link, Switch} from "react-router-dom";

class Footer extends Component {
  render() {

    const fbLink = "https://www.facebook.com/azimutinsurance/"
    const instaLink = "https://instagram.com/azimutinsurance"
    const targetTab = "_blank"

    return (
      <div id="footer-layout" className="row p-5">
        <div id="footer-page-location" className="col text-center border border-top-0 border-bottom-0 border-left-0">
          <h4 className="pb-3">LOCATION</h4>
          <div><span className="pr-2"><i className="fa fa-lg fa-map-marker"></i></span>Main Office</div>
          <div>
            2100B NW 82nd Avenue, Miami, FL 33122
          </div>
        </div>

        <div id="footer-page-contact" className="col text-center border border-top-0 border-bottom-0 border-left-0">
          <h4 className="pb-3">CONTACT</h4>
          <div><span className="pr-2"><i className="fa fa-envelope"></i></span>Email</div>
          <div className="pb-3">
            EduardoG@azimutinsurance.com
          </div>
          <div><span className="pr-2"><i className="fa fa-phone"></i></span>Phone</div>
          <div>
            (305) 517-1106
          </div>
        </div>

        <div id="footer-page-social-media" className="col text-center">
          <h4 className="pb-3">SOCIAL MEDIA</h4>
          <a href={fbLink} target={targetTab} rel="noopener noreferrer" className="footer-link"><span className="px-1"><i className="fa fa-lg fa-facebook-square"></i></span></a>
          <a href={fbLink} target={targetTab} rel="noopener noreferrer" className="footer-link"><span className="px-1"><i className="fa fa-lg fa-instagram"></i></span></a>
        </div>
      </div>
    );
  }
}

export default Footer;