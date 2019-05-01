import React, {Component} from 'react';
import axios from 'axios';

class BoatApp extends Component {

  state = {
	  userName: '',
	  userEmail: '',
	  userPhone: '',
    userDOB: '',
    userAddress: '',
    vesselName: '',
    vesselMake: '', // make/model
    vesselLength: '',
    vesselYear: '',
    vesselEngine: '',
    vesselHP: '',
    opCaptain: '', //captain yes/no
    opExp: '', //years of experience
    vesselPriorIns: '',
    vesselPriorExp: '',
    vessel1: '',
    vessel2: '',
    vessel3: '',
	  confirmation: false,
	  error: false
	};

  handleSubmit = async (e) => {
  	e.preventDefault();
  	try {
  		let res = await axios.post('/boatApp', this.state);

  		let data = res.data;
  		this.setState({confirmation: data.confirmation, error: data.error});

      console.log('server response: ', this.state);
  	}
  	catch (e) {
  		console.log(e);
  	}
  }

  onInputChange = (e) => {
    let {value, name} = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div id="contact-component">

        {/* HEADER-1 */}
        <h1 className="container py-3">Marine Insurance Application</h1>

        {/* PANEL-1 */}
        <div id="c-panel-1" className="panel">
          {!this.state.confirmation && !this.state.error &&
            <form id="contact-form" className="mx-auto" onSubmit={this.handleSubmit}>

              <div className="form-group row justify-content-center">
                <h4>Owner Information</h4>
              </div>

              <div className="form-group row justify-content-center">
                <div className="col-sm-6">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="userName"
                      placeholder="Full Name"
                      value={this.state.userName}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
              </div>
              <div className="form-group row justify-content-center">
                <div className="col-sm-6">
                  <input
                    className="form-control shadow"
                    type="email"
                    name="userEmail"
                    placeholder="Email"
                    value={this.state.userEmail}
                    id="email-input"
                    onChange={this.onInputChange}/>
                </div>
              </div>
              <div className="form-group row justify-content-center">
                <div className="col-sm-6">
                  <input
                    className="form-control shadow"
                    type="tel"
                    name="userPhone"
                    placeholder="Phone"
                    value={this.state.userPhone}
                    id="tel-input"
                    onChange={this.onInputChange}/>
                </div>
              </div>
              <div className="form-group row justify-content-center">
                <div className="col-sm-6">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="userDOB"
                      placeholder="Date of Birth (mm/dd/yyyy)"
                      value={this.state.userDOB}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
              </div>

              <div className="form-group row justify-content-center">
                <div className="col-sm-6">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="userAddress"
                      placeholder="Address (Street, City, State, Zipcode)"
                      value={this.state.userAddress}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
              </div>

              <br/>
              <div className="form-group row justify-content-center">
                <h4>Vessel Information</h4>
              </div>
              <div className="form-group row justify-content-center">
                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="vesselName"
                      placeholder="Vessel Name"
                      value={this.state.vesselName}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>

                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="vesselLength"
                      placeholder="Vessel Length"
                      value={this.state.vesselLength}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
              </div>

              <div className="form-group row justify-content-center">
                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="vesselMake"
                      placeholder="Vessel Make/Model"
                      value={this.state.vesselMake}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>

                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="vesselYear"
                      placeholder="Vessel Year"
                      value={this.state.vesselYear}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
              </div>

              <div className="form-group row justify-content-center">

                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="vesselEngine"
                      placeholder="Vessel Engine"
                      value={this.state.vesselEngine}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>

                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="vesselHP"
                      placeholder="Vessel HorsePower"
                      value={this.state.vesselHP}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
              </div>

              <div className="form-group row justify-content-center">

              <div className="col-sm-3">
              <div >
                <input
                    className="form-control shadow"
                    type="text"
                    name="opCaptain"
                    placeholder="Captain? (Y/N)"
                    value={this.state.opCaptain}
                    id="name-input"
                    onChange={this.onInputChange}/>

              </div>
              </div>

                <div className="col-sm-3">
                <div >
                  <input
                      className="form-control shadow"
                      type="text"
                      name="opExp"
                      placeholder="Years of Exp (Captain/Owner)"
                      value={this.state.opExp}
                      id="name-input"
                      onChange={this.onInputChange}/>

                </div>
                </div>
              </div>

              <div className="form-group row justify-content-center">
                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="vesselPriorIns"
                      placeholder="Prior or Current Insurance"
                      value={this.state.vesselPriorIns}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="vesselPriorExp"
                      placeholder="Insurance Expiration (mm/dd/yyyy)"
                      value={this.state.vesselPriorExp}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
              </div>

              <div className="form-group row justify-content-center">
                <br/>
                <div className="col-sm-6">
                  Last three vessels operated (Make, Length, Year)
                </div>
              </div>

              <div className="form-group row justify-content-center">
                <div className="col-sm-6">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="vessel1"
                      placeholder="Vessel 1"
                      value={this.state.vessel1}
                      id="name-input"
                      onChange={this.onInputChange}/>
                      </div>
                      </div>
              <div className="form-group row justify-content-center">
                <div className="col-sm-6">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="vessel2"
                      placeholder="Vessel 2"
                      value={this.state.vessel2}
                      id="name-input"
                      onChange={this.onInputChange}/>
                      </div>
                      </div>
              <div className="form-group row justify-content-center">
                <div className="col-sm-6">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="vessel3"
                      placeholder="Vessel 3"
                      value={this.state.vessel3}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
              </div>

              <br/>

              <div className="form-group row justify-content-center">
                <button type="submit" className="btn btn-danger shadow">
                  <span className="pr-1"><i className="fa fa-paper-plane"></i></span>Submit
                </button>
              </div>
            </form>
          }

          {this.state.confirmation &&
            <div className="alert alert-success">
              Thank You! We will get back to you as soon as possible.
            </div>
          }

          {this.state.error &&
            <div className="alert alert-danger">
              Sorry, there seems to have been a problem with your submission.
              Please try again, or check back later to see if the issue was resolved.
            </div>
          }

        </div>

      </div>
    );
  }
}

export default BoatApp;
