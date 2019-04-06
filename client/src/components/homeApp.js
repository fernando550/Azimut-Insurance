import React, {Component} from 'react';
import axios from 'axios';

class HomeApp extends Component {

  state = {
	  userName: '',
	  userEmail: '',
	  userPhone: '',
    userDOB: '',
    userAddress: '',
    propAddress: '',
    propYear: '', // make/model
    propSize: '',
    propConsType: '',
    propRoofType: '',
    propFloors: '',
    propBed: '',
    propBath: '',
    propValue: '',
    insName: '', //captain yes/no
    insExpire: '', //years of experience
    insLoss: '',
	  confirmation: false,
	  error: false
	};

  handleSubmit = async (e) => {
  	e.preventDefault();
  	try {
  		let res = await axios.post('/homeApp', this.state);

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
        <h1 className="container py-3">Home Insurance Application</h1>

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
                      name="userDOB"
                      placeholder="Address (Street, City, State, Zipcode)"
                      value={this.state.userAddress}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
              </div>

              <br/>
              <div className="form-group row justify-content-center">
                <h4>Home Information</h4>
              </div>
              <div className="form-group row justify-content-center">
              <div className="col-sm-6">
                <input
                    className="form-control shadow"
                    type="text"
                    name="propAddress"
                    placeholder="Property Address (Street, City, State, Zipcode)"
                    value={this.state.propAddress}
                    id="name-input"
                    onChange={this.onInputChange}/>
              </div>
              </div>

              <div className="form-group row justify-content-center">
                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="propYear"
                      placeholder="Year Built"
                      value={this.state.propYear}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>

                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="propSize"
                      placeholder="Square Footage"
                      value={this.state.propSize}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
              </div>

              <div className="form-group row justify-content-center">

                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="propValue"
                      placeholder="Home Market Value"
                      value={this.state.propValue}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>

                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="propFloors"
                      placeholder="No. Floors"
                      value={this.state.propFloors}
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
                    name="propBed"
                    placeholder="No. Bedrooms"
                    value={this.state.propBed}
                    id="name-input"
                    onChange={this.onInputChange}/>

              </div>
              </div>

                <div className="col-sm-3">
                <div >
                  <input
                      className="form-control shadow"
                      type="text"
                      name="propBath"
                      placeholder="No. Bathrooms"
                      value={this.state.propBath}
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
                      name="propRoofType"
                      placeholder="Roof Type"
                      value={this.state.propRoofType}
                      id="name-input"
                      onChange={this.onInputChange}/>
                      </div>
                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="propConsType"
                      placeholder="Construction Type"
                      value={this.state.propConsType}
                      id="name-input"
                      onChange={this.onInputChange}/>
                      </div>
                      </div>
              <div className="form-group row justify-content-center">
                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="insName"
                      placeholder="Current/Prior Insurance Provider"
                      value={this.state.insName}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="insExpire"
                      placeholder="Policy Expiration Date (mm/yy)"
                      value={this.state.insExpire}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
              </div>

              <div className="form-group row justify-content-center">
                <div className="col-sm-6">
                  <p>If any losses in the previous 5 years, please explain:</p>
                </div>
              </div>
              <div className="form-group row justify-content-center">
                <div className="col-sm-6">
                  <textarea
                      className="form-control shadow"
                      type="text"
                      name="insName"
                      placeholder="Current/Prior Insurance Provider"
                      value={this.state.insLoss }
                      id="name-input"
                      onChange={this.onInputChange}>
                  </textarea>
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

export default HomeApp;
