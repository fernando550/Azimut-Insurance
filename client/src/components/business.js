import React, {Component} from 'react';
import BusPic from '../images/modernoffice.jpg';

class Business extends Component {
  render() {
    return (
      <div id="busi-component" style={
        {backgroundImage: `url(${BusPic})`,
        backgroundSize: 'contain',
        backgroundPosition: 'top',
        marginTop: '-226px'
      }
      }>

        {/* HEADER-1 */}
        <div id="busi-header-1" className="container" style={{height: '500px'}}></div>
        <h1 className="container py-3">Business Insurance</h1>>

        {/* PANEL-1 */}
        <div id="house-panel-1" className="panel-insurance p-5" >
          <div className="row justify-content-center">
            <div className="col-sm-6 px-5 pb-5 text-align-center">
              <h4 className="pb-3">Commercial Auto</h4>
              <h6>As an employer insuring your vehicle for daily business tasks is as important as that of your personal vehicle. Many business owners and their employees may use the same vehicle for both business and personal use, so insuring those assets properly will effectively minimize your insurance costs. Ask your insurance agent to explain all the details when selecting commercial auto insurance.</h6>
            </div>

            <div className="col-sm-6 px-5 text-align-center">
              <h4 className="pb-3">General Liability</h4>
              <h6>Since 2000 the probability of getting sued as a business owner has increased by over 20%. General Liability insurance can protect you by paying for losses due to bodily injury, property damage, or personal injury. Other forms of liability include damages caused by products or services, fire & water damage, liability assumed by contracts, etc. It is extremely important to get familiar with all forms of liability you company may take on.</h6>
            </div>
          </div>

          <div className="row align-items-start pt-5">
            <div className="col-sm-6 text-align-center">
             <h4 className="pb-3">Workers Compensation:</h4>
              <ul style={{marginLeft: '-22px'}}>
                <h6>Workers compensation laws are designed to aid companies pay benefits to their employees in order to control financial risk. Employees that specifically sustain injuries on the job are provided with monetary reparation. Most states require employers to provide workers compensation insurance, which is not to be mistaken with health insurance.</h6>
                <li className="py-2">Legally as an employer you have a responsibility to keep your workplace as a safe environment for your employees to carry out their jobs. Accidents will still happen even under safe circumstances.</li>
                <li className="py-2">In many states, workers compensation is required for employers to keep their employees safe.</li>
                <li className="py-2">The insurance policy also covers costs for both parties, no matter who is at fault.</li>
              </ul>
              <br/>
              <p style={{fontSize: '20px'}}>Click the link for a quote: <a href="/businessapp" target="_blank" style={{color: 'red', textDecoration: "underline"}}>Business Insurance Application</a></p>
            </div>

            <div className="col-sm-6 image-container">
              <div id="bus-panel-1-img"></div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Business;
