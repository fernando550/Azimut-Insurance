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


class Carousel extends Component {
  render() {
    return (
      <div id="carousel-component">
          {/* CAROUSEL */}
          <div id="insurance-carousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner" role="listbox" style={{padding: '0 15%'}}>
                <div className="carousel-item active">
                <p>"Great agency which I highly recomment! Eddie researched all coverages available to my needs. He found a policy significantly
                cheaper than what I was paying, and with the same coverage. He is very knowledgeable, pleasant, and always attentive. The process
                was a very positive experience. He did an excellent job."
                <br/><br/>
                - Manuel Perez, Founder of OLM Support Services, LLC.</p>
                </div>
                <div className="carousel-item">
                <p>“I was in need of insurance and was recommended to Eduardo. Working with him was great. He made the process easy, fast and affordable.”
                <br/><br/>
                -Sebastian Amorosino, Founder CFB Performance </p>
                </div>
                <div className="carousel-item">
                <p>“I needed yacht insurance and called Azimut Insurance. I was helped by Eddie. He was very knowledgeable and was able to quickly assist me.
                I have since insured all my assets with azimuth insurance and recommend them all the time!”
                <br/><br/>
                -	Thomas Marion, Managing member Knights Bridge </p>
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
    );
  }
}

export default Carousel;
