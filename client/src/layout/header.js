import React, {Component} from "react";
import logo from "../images/azimutlogo.png";
import {Link} from "react-router-dom";

class Header extends Component {
  render() {

    const fbLink = "https://www.facebook.com/azimutinsurance/";
    const instaLink = "https://instagram.com/azimutinsurance";
    const targetTab = "_blank";

    return (
      <nav id="nav-header-1" className="navbar navbar-expand-lg navbar-light">

        {/* BRAND LOGO */}
        <a className="navbar-brand" href="/">
          <img id="azimut-logo"src={logo} alt="Azimut Insurance"/>
        </a>

        <div id="nav-header-callus">
          <span className="pr-2"><i className="fa fa-phone"></i></span>
          Call us: (305) 517-1106
        </div>

        {/* TOGGLE BUTTON */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapse-nav" aria-controls="collapse-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAV MENU */}
        <div className="collapse navbar-collapse" id="collapse-nav">

          <div id="nav-header-links" className="navbar-nav ml-auto">

            <div className="dropdown" style={{paddingLeft: '20px'}}>
              <a className="btn btn-danger dropdown-toggle" href="" id="ddlButton" data-toggle="dropdown">
                Insurance
              </a>
              <div className="dropdown-menu dropdown-menu-right bg-danger" aria-labelledby="ddlButton">
                <Link className="dropdown-item" to="/car">Auto</Link>
                <Link className="dropdown-item" to="/boat">Marine</Link>
                <Link className="dropdown-item" to="/house">Home</Link>
                <Link className="dropdown-item" to="/business">Business</Link>
              </div>
            </div>

            <Link style={{width: '120px'}} className="nav-link nav-item-class px-4" to="/about">About Us</Link>
            <Link style={{width: '140px'}} className="nav-link nav-item-class px-4" to="/contact">Contact Us</Link>
            <Link style={{width: '160px'}} className="nav-link nav-item-class px-4" to="/quotes">Get A Quote</Link>

            {/* FACEBOOK LINK*/}
            <a style={{width: '50px'}} className="nav-link px-4" href={fbLink} target={targetTab} rel="noopener noreferrer">
              <span><i className="fab fa-lg fa-facebook-square"></i></span>
            </a>

            {/* INSTAGRAM LINK*/}
            <a style={{width: '50px'}} className="nav-link px-4" href={instaLink} target={targetTab} rel="noopener noreferrer">
              <span><i className="fab fa-lg fa-instagram"></i></span>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
