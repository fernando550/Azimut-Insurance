import React, {Component} from 'react';
import axios from 'axios';

class BusinessApp extends Component {

  state = {
    userEmail: '',
	  companyName: '',
	  companyAddress: '',
    companySize: '',
	  companyYear: '',
    companyEmployees: '',
    companyPayroll: '',
    companySales: '',
    companyOperation: '',
	  confirmation: false,
	  error: false
	};

  handleSubmit = async (e) => {
  	e.preventDefault();
  	try {
  		let res = await axios.post('/busApp', this.state);

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
        <h1 className="container py-3">Car Insurance Application</h1>

        {/* PANEL-1 */}
        <div id="c-panel-1" className="panel">
          {!this.state.confirmation && !this.state.error &&
            <form id="contact-form" className="mx-auto" onSubmit={this.handleSubmit}>

              <div className="form-group row justify-content-center">
                <h4>Company Information</h4>
              </div>

              <div className="form-group row justify-content-center">
                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="userEmail"
                      placeholder="Contact Email"
                      value={this.state.userEmail}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="userPhone"
                      placeholder="Contact Number"
                      value={this.state.userPhone}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
              </div>

              <div className="form-group row justify-content-center">
                <div className="col-sm-6">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="companyName"
                      placeholder="Company Name"
                      value={this.state.companyName}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
              </div>
              <div className="form-group row justify-content-center">
                <div className="col-sm-6">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="companyAddress"
                      placeholder="Company Address"
                      value={this.state.companyAddress}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
              </div>
              <div className="form-group row justify-content-center">
                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="companySize"
                      placeholder="Sq. Footage of Company"
                      value={this.state.companySize}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
                <div className="col-sm-3">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="companyYear"
                      placeholder="Year Built"
                      value={this.state.companyYear}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
              </div>
              <div className="form-group row justify-content-center">
                <div className="col-sm-3">
                  <input
                    className="form-control shadow"
                    type="email"
                    name="companyEmployees"
                    placeholder="Number of Employees"
                    value={this.state.companyEmployees}
                    id="email-input"
                    onChange={this.onInputChange}/>
                </div>
                <div className="col-sm-3">
                  <input
                    className="form-control shadow"
                    type="tel"
                    name="companySales"
                    placeholder="Annual Sales"
                    value={this.state.companySales}
                    id="tel-input"
                    onChange={this.onInputChange}/>
                </div>
              </div>
              <div className="form-group row justify-content-center">
                <div className="col-sm-6">
                  <textarea
                      className="form-control shadow"
                      type="text"
                      name="companyOperation"
                      placeholder="Description of Business Operation"
                      value={this.state.companyOperation}
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

export default BusinessApp;
