import React, {Component} from 'react';
import axios from 'axios';

class CarApp extends Component {

  state = {
	  userName1: '',
	  userName2: '',
    userEmail: '',
	  userPhone: '',
    userDOB1: '',
    userDOB2: '',
    userAddress: '',
    userExp: '',
    userMarried: '',
    userPriorIns: '',
    userPriorExp: '',
    userLicense1:'',
    userLicense2:'',
    VIN1: '',
    VIN2: '', // make/model
    Vehicle1: '',
    Vehicle2: '',
	  confirmation: false,
	  error: false
	};

  handleSubmit = async (e) => {
  	e.preventDefault();
  	try {
  		let res = await axios.post('/carApp', this.state);

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
        <h1 className="container py-3">Auto Insurance Application</h1>

        {/* PANEL-1 */}
        <div id="c-panel-1" className="panel">
          {!this.state.confirmation && !this.state.error &&
            <form id="contact-form" className="mx-auto" onSubmit={this.handleSubmit}>

              <div className="form-group row justify-content-center">
                <h4>Owner Information</h4>
              </div>

              <div className="form-group row justify-content-center">
                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="userName1"
                      placeholder="Name of Insured"
                      value={this.state.userName1}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="userDOB1"
                      placeholder="Date of Birth (mm/dd/yyyy)"
                      value={this.state.userDOB1}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
              </div>
              <div className="form-group row justify-content-center">
                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="userName2"
                      placeholder="Second Driver"
                      value={this.state.userName2}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="userDOB2"
                      placeholder="Date of Birth (mm/dd/yyyy)"
                      value={this.state.userDOB2}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
              </div>
              <div className="form-group row justify-content-center">
                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="userLicense1"
                      placeholder="First Driver's License"
                      value={this.state.userLicense1}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="userLicense2"
                      placeholder="Second Driver's License"
                      value={this.state.userLicense2}
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
                    name="userAddress"
                    placeholder="Home Address for Cars (Street, City, State, Zipcode)"
                    value={this.state.userAddress}
                    id="name-input"
                    onChange={this.onInputChange}/>
              </div>
              </div>

              <div className="form-group row justify-content-center">
                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="userExp"
                      placeholder="Own/Rent Years"
                      value={this.state.userExp}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="userMarried"
                      placeholder="Married/Single"
                      value={this.state.userMarried}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
              </div>

              <div className="form-group row justify-content-center">
                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="userPriorIns"
                      placeholder="Prior or Current Insurance"
                      value={this.state.userPriorIns}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="userPriorExp"
                      placeholder="Insurance Expiration (mm/dd/yyyy)"
                      value={this.state.userPriorExp}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
              </div>

              <br/>
              <div className="form-group row justify-content-center">
                <h4>Vehicle Information</h4>
              </div>

              <div className="form-group row justify-content-center">
                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="VIN1"
                      placeholder="VIN 1"
                      value={this.state.VIN1}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>

                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="VIN2"
                      placeholder="VIN 2"
                      value={this.state.VIN2}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
              </div>

              <div className="form-group row justify-content-center">

                <div className="col-sm-6">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="Vehicle1"
                      placeholder="Vehicle 1 (Year/Make/Model)"
                      value={this.state.Vehicle1}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
              </div>

              <div className="form-group row justify-content-center">

                <div className="col-sm-6">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="Vehicle2"
                      placeholder="Vehicle 2 (Year/Make/Model)"
                      value={this.state.Vehicle2}
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

export default CarApp;
