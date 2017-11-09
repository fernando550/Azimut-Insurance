import React, {Component} from "react";
import logo from "../images/azimutlogo.png";
import {Link} from "react-router-dom";

class Header extends Component {
  render() {

    const fbLink = "https://www.facebook.com/azimutinsurance/"
    const instaLink = "https://instagram.com/azimutinsurance"
    const targetTab = "_blank"

    return (
      <div id="nav-header-layout" className="">

        {/* NAV BAR */}
        <nav id="nav-header-1" className="navbar navbar-expand-md justify-content-between container">

          {/* BRAND LOGO */}
          <a className="navbar-brand" href="/">
            <img id="azimut-logo"src={logo} alt="Azimut Insurance"/>
          </a>

          <div style={{marginLeft: '100px', color: 'white'}}>
            <span className="pr-2"><i className="fa fa-phone"></i></span>
            Call us: (305) 517-1106
          </div>

            {/* NAV MENU */}
            <div id="nav-header-links" className="navbar-nav">
              <div className="dropdown">
                <a className="btn btn-danger dropdown-toggle" href="" id="ddlButton" data-toggle="dropdown">
                  Insurance
                </a>
                <div className="dropdown-menu dropdown-menu-right bg-danger" aria-labelledby="ddlButton">
                  <Link className="dropdown-item" to="/car"><span style={{marginRight: '10px'}}><i className="fa fa-car"></i></span>Car</Link>
                  <Link className="dropdown-item" to="/boat"><span style={{marginRight: '10px'}}><i className="fa fa-ship"></i></span>Boat</Link>
                  <Link className="dropdown-item" to="/house"><span style={{marginRight: '9px'}}><i className="fa fa-lg fa-home"></i></span>House</Link>
                  {/*<Link className="dropdown-item" to="/life"><span style={{marginRight: '12px'}}><i className="fa fa-heartbeat"></i></span>Life</Link>*/}
                </div>
              </div>

              <Link className="nav-link px-4 border border-top-0 border-bottom-0 border-left-0" to="/about">About Us</Link>
              <Link className="nav-link px-4 border border-top-0 border-bottom-0 border-left-0" to="/contact">Contact Us</Link>
              <Link className="nav-link px-4 border border-top-0 border-bottom-0 border-left-0" to="/location">Location</Link>

              {/* FACEBOOK LINK*/}
              <a className="nav-link px-4" href={fbLink} target={targetTab} rel="noopener noreferrer">
                <span><i className="fa fa-lg fa-facebook-square"></i></span>
              </a>

              {/* INSTAGRAM LINK*/}
              <a className="nav-link px-4" href={instaLink} target={targetTab} rel="noopener noreferrer">
                <span style={{marginLeft: '-25px'}}><i className="fa fa-lg fa-instagram"></i></span>
              </a>

            </div>

        </nav>

      </div>
    );
  }
}

export default Header;