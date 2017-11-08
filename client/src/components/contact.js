import React, {Component} from 'react';
import axios from 'axios';

class Contact extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  userName: 'Name',
		  userEmail: 'Email',
		  userPhone: 'Phone',
		  userMessage: 'Message'
		};
	}

  handleSubmit = async (e) => {
  	e.preventDefault();
  	try {
  		let res = await axios.post('/sendMail', {
  		  userName: this.state.userName,
  		  userEmail: this.state.userEmail,
  		  userPhone: this.state.userPhone,
  		  userMessage: this.state.userMessage
  		});
  		console.log(res);
  	}
  	catch (e) {
  		console.log(e);
  	}

      this.setState = {
  		  userName: 'Name',
  		  userEmail: 'Email',
  		  userPhone: 'Phone',
  		  userMessage: 'Message'
  		};
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
        <h1 className="container py-3">Contact us and get a free quote!</h1>

        {/* PANEL-1 */}
        <div id="c-panel-1" className="panel">
          <form id="contact-form" className="mx-auto w-50" onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <div className="col">
                <input
                    className="form-control"
                    type="text" name="userName"
                    value={this.state.userName}
                    id="name-input"
                    onChange={this.onInputChange}/>
              </div>
            </div>
            <div className="form-group row">
              <div className="col">
                <input
                  className="form-control"
                  type="email"
                  name="userEmail"
                  value={this.state.userEmail}
                  id="email-input"
                  onChange={this.onInputChange}/>
              </div>
            </div>
            <div className="form-group row">
              <div className="col">
                <input
                  className="form-control"
                  type="tel"
                  name="userPhone"
                  value={this.state.userPhone}
                  id="tel-input"
                  onChange={this.onInputChange}/>
              </div>
            </div>
            <div className="form-group row">
              <div className="col">
                <textarea
                  className="form-control"
                  type="text"
                  name="userMessage"
                  value={this.state.userMessage}
                  id="message-input"
                  onChange={this.onInputChange}></textarea>
              </div>
            </div>
            <div className="form-group row justify-content-center">
              <button type="submit" className="btn btn-danger">
                <span className="pr-1"><i className="fa fa-paper-plane"></i></span>Submit
              </button>
            </div>
          </form>
        </div>

      </div>
    );
  }
}

export default Contact;