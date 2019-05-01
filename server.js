const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/sendMail', async (req, res) => {
  console.log('client request: ', req.body);
  const msg = {
    to: 'EduardoG@azimutinsurance.com',
    from: req.body.userEmail,
    subject: `General Inquiry: ${req.body.userName}`,
    text:
    `General Inquiry...
    Phone: ${req.body.userPhone} \n
    Message: ${req.body.userMessage}
    `
  };

  try {
    let confirmation = await sgMail.send(msg);

    if (confirmation) {
      res.send({confirmation: true, error: false});
    }
  }
  catch (e) {
		console.log(e);
		res.send({confirmation: false, error: true});
	}
});

app.post('/boatApp', async (req, res) => {
  console.log('boat app request: ', req.body);
  const msg = {
    to: 'EduardoG@azimutinsurance.com',
    from: req.body.userEmail,
    subject: `Marine Insurance: ${req.body.userName}`,
    text:
    `Marine Insurance... \n
	  Phone: ${req.body.userPhone} \n
    Date of Birth: ${req.body.userDOB} \n
    Address: ${req.body.userAddress} \n
    Vessel Name: ${req.body.vesselName} \n
    Vessel Make: ${req.body.vesselMake} \n
    Vessel Length: ${req.body.vesselLength} \n
    Vessel Year: ${req.body.vesselYear} \n
    Vessel Engine: ${req.body.vesselEngine} \n
    Vessel HP: ${req.body.vesselHP} \n
    Operating Captain: ${req.body.opCaptain} \n
    Operator's Experience: ${req.body.opExp} \n
    Vessel Prior/Current Insurance: ${req.body.vesselPriorIns} \n
    Vessel Prior/Current Insurance Expiration: ${req.body.vesselPriorExp} \n
    Previously driven vessels: \n
    ${req.body.vessel1} \n
    ${req.body.vessel2} \n
    ${req.body.vessel3} \n
    `
  };

  try {
    let confirmation = await sgMail.send(msg);

    if (confirmation) {
      res.send({confirmation: true, error: false});
    }
  }
  catch (e) {
		console.log(e);
		res.send({confirmation: false, error: true});
	}
});

app.post('/houseApp', async (req, res) => {
  console.log('home app request: ', req.body);
  const msg = {
    to: 'EduardoG@azimutinsurance.com',
    from: req.body.userEmail,
    subject: `Home Insurance: ${req.body.userName}`,
    text:
    `Home Insurance... \n
    Phone: ${req.body.userPhone} \n
    Date of Birth: ${req.body.userDOB} \n
    Address: ${req.body.userAddress} \n
    Property Address: ${req.body.propAddress} \n
    Year Built: ${req.body.propYear} \n
    Size of Property (sq ft): ${req.body.propSize} \n
    Construction Type: ${req.body.propConsType} \n
    Roof Type: ${req.body.propRoofType} \n
    Floors: ${req.body.propFloors} \n
    Beds: ${req.body.propBed} \n
    Bath: ${req.body.propBath} \n
    Market Value: ${preq.body.ropValue} \n
    Insurance: ${req.body.insName} \n
    Insurance Expiration Date: ${req.body.insExpire} \n
    Losses?: ${req.body.insLoss} \n
    `
  };

  try {
    let confirmation = await sgMail.send(msg);

    if (confirmation) {
      res.send({confirmation: true, error: false});
    }
  }
  catch (e) {
		console.log(e);
		res.send({confirmation: false, error: true});
	}
});

app.post('/carApp', async (req, res) => {
  console.log('home app request: ', req.body);
  const msg = {
    to: 'EduardoG@azimutinsurance.com',
    from: req.body.userEmail,
    subject: `Auto Insurance: ${req.body.userName1}`,
    text:
    `Auto Insurance... \n
    Second Insured ${req.body.userName2} \n
    Phone: ${req.body.userPhone} \n
    Date of Birth: ${req.body.userDOB1} \n
    2nd Insured Date of Birth: ${req.body.userDOB2} \n
    Address: ${req.body.userAddress} \n
    Driving Experience: ${req.body.userExp} \n
    Married?: ${req.body.userMarried} \n
    Prior/Current Insurance: ${req.body.userPriorIns} \n
    Prior/Current Insurance Expiration: ${req.body.userPriorExp} \n
    Primary Driver License: ${req.body.userLicense1} \n
    Secondary Driver License: ${req.body.userLicense2} \n
    VIN1: ${req.body.VIN1} \n
    VIN2: ${req.body.VIN2} \n
    Vehicle1: ${req.body.Vehicle1} \n
    Vehicle2: ${req.body.Vehicle2} \n
    `
  };

  try {
    let confirmation = await sgMail.send(msg);

    if (confirmation) {
      res.send({confirmation: true, error: false});
    }
  }
  catch (e) {
		console.log(e);
		res.send({confirmation: false, error: true});
	}
});

app.post('/busApp', async (req, res) => {
  console.log('home app request: ', req.body);
  const msg = {
    to: 'EduardoG@azimutinsurance.com',
    from: req.body.userEmail,
    subject: `Business Insurance: ${req.body.userName} on behalf of ${req.body.COmpanyName}`,
    text:
    `Business Insurance... \n
    Company Name: ${req.body.companyName} \n
    Company Address: ${req.body.companyAddress} \n
    Size of Company (sq ft): ${req.body.companySize} \n
    Year Established: ${req.body.companyYear} \n
    Number of Employees: ${req.body.companyEmployees} \n
    Annual Sales Revenue: ${req.body.companySales} \n
    Prior/Current Insurance: ${companyPriorIns} \n
    Prior/Current Insurance Expiration: ${companyPriorExp} \n
    Business Description: ${companyOperation}
    `
  };

  try {
    let confirmation = await sgMail.send(msg);

    if (confirmation) {
      res.send({confirmation: true, error: false});
    }
  }
  catch (e) {
		console.log(e);
		res.send({confirmation: false, error: true});
	}
});

app.use(express.static('client/build'));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App listening on PORT: ${port}`));
