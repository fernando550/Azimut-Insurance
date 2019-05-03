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
        <h1 className="container py-3 text-align-center">Select A Product Below</h1>

        {/* PANEL-1 */}
        <div id="c-panel-1" className="panel">
              <div className="row justify-content-center">

                <div className="col-sm-3">
                <div className="" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div className="btnQuote" style={{margin: '20%', height: '75%', width: '75%', border: 'solid 2px red', borderRadius: '40px'}}>
                  <div className="A" style={{height: '100%', margin: '30% 0', textAlign: 'center'}}>AUTO</div>
                  <div className="B" style={{height: '100%', margin: '25% 0', textAlign: 'center', color: 'white'}}><i className="fas fa-3x fa-car"></i></div></div>
                </div>

                <div className="" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <a href="/autoapp" target="_blank" >
                <button type="submit" className="btn btn-danger shadow" style={{width: '200px', height: '60px'}}>
                  Auto Insurance <br/> Quote
                </button> </a>
                </div>
              </div>

                <div className="col-sm-3">
                <div className="" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                    <div className="btnQuote" style={{margin: '20%', height: '75%', width: '75%', border: 'solid 2px red', borderRadius: '40px'}}>
                    <div className="A" style={{height: '100%', margin: '30% 0', textAlign: 'center'}}>MARINE</div>
                    <div className="B" style={{height: '100%', margin: '25% 0', textAlign: 'center', color: 'white'}}><i className="fas fa-3x fa-ship"></i></div></div>
                  </div>

                  <div className="" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  <a href="/marineapp" target="_blank" >
                  <button type="submit" className="btn btn-danger shadow" style={{width: '200px', height: '60px'}}>
                    Marine Insurance Quote
                  </button></a>
                  </div>
                </div>

                <div className="col-sm-3">
                <div className="" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                    <div className="btnQuote" style={{margin: '20%', height: '75%', width: '75%', border: 'solid 2px red', borderRadius: '40px'}}>
                    <div className="A" style={{height: '100%', margin: '30% 0', textAlign: 'center'}}>HOME</div>
                    <div className="B" style={{height: '100%', margin: '25% 0', textAlign: 'center', color: 'white'}}><i className="fas fa-3x fa-home"></i></div></div>
                  </div>

                  <div className="" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  <a href="/homeapp" target="_blank" >
                  <button type="submit" className="btn btn-danger shadow" style={{width: '200px', height: '60px'}}>
                    Home Insurance Quote
                  </button></a>
                  </div>
                </div>


                <div className="col-sm-3">
                <div className="" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                    <div className="btnQuote" style={{margin: '20%', height: '75%', width: '75%', border: 'solid 2px red', borderRadius: '40px'}}>
                    <div className="A" style={{height: '100%', margin: '30% 0', textAlign: 'center'}}>BUSINESS</div>
                    <div className="B" style={{height: '100%', margin: '25% 0', textAlign: 'center', color: 'white'}}><i className="fas fa-3x fa-building"></i></div></div>
                  </div>

                  <div className="" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  <a href="/businessapp" target="_blank" >
                  <button type="submit" className="btn btn-danger shadow" style={{width: '200px', height: '60px'}}>
                    Business Insurance Quote
                  </button></a>
                  </div>
                </div>
              </div>
              <br/>
        </div>
      </div>
    );
  }
}

export default Contact;
