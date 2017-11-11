import React, {Component} from 'react';
import axios from 'axios';

class Contact extends Component {

  state = {
	  userName: '',
	  userEmail: '',
	  userPhone: '',
	  userMessage: '',
	  confirmation: false,
	  error: false
	};

  handleSubmit = async (e) => {
  	e.preventDefault();
  	try {
  		let res = await axios.post('/sendMail', this.state);

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
        <h1 className="container py-3">Contact Us</h1>

        {/* PANEL-1 */}
        <div id="c-panel-1" className="panel">
          {!this.state.confirmation && !this.state.error &&
            <form id="contact-form" className="mx-auto w-50" onSubmit={this.handleSubmit}>
              <h4 className="form-group row justify-content-center pb-2">Get in touch for a free quote or any questions!</h4>
              <div className="form-group row">
                <div className="col">
                  <input
                      className="form-control shadow"
                      type="text"
                      name="userName"
                      placeholder="Name"
                      value={this.state.userName}
                      id="name-input"
                      onChange={this.onInputChange}/>
                </div>
              </div>
              <div className="form-group row">
                <div className="col">
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
              <div className="form-group row">
                <div className="col">
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
              <div className="form-group row">
                <div className="col">
                  <textarea
                    className="form-control shadow"
                    type="text"
                    name="userMessage"
                    placeholder="Message"
                    value={this.state.userMessage}
                    id="message-input"
                    onChange={this.onInputChange}></textarea>
                </div>
              </div>
              <div className="form-group row justify-content-center">
                <button type="submit" className="btn btn-danger shadow">
                  <span className="pr-1"><i className="fa fa-paper-plane"></i></span>Submit
                </button>
              </div>
            </form>
          }

          {this.state.confirmation &&
            <div className="alert alert-success">
              Thank You! We will address your message as soon as possible.
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

export default Contact;