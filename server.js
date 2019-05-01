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
    Phone: ${req.body.Telephone}
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
	  Phone: ${req.userPhone} \n
    Date of Birth: ${req.userDOB} \n
    Address: ${req.userAddress} \n
    Vessel Name: ${req.vesselName} \n
    Vessel Make: ${req.vesselMake} \n
    Vessel Length: ${req.vesselLength} \n
    Vessel Year: ${req.vesselYear} \n
    Vessel Engine: ${req.vesselEngine} \n
    Vessel HP: ${req.vesselHP} \n
    Operating Captain: ${req.opCaptain} \n
    Operator's Experience: ${req.opExp} \n
    Vessel Prior/Current Insurance: ${req.vesselPriorIns} \n
    Vessel Prior/Current Insurance Expiration: ${req.vesselPriorExp} \n
    Previously driven vessels: \n
    ${req.vessel1} \n
    ${req.vessel2} \n
    ${req.vessel3} \n
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
    Phone: ${req.userPhone} \n
    Date of Birth: ${req.userDOB} \n
    Address: ${req.userAddress} \n
    Property Address: ${req.propAddress} \n
    Year Built: ${req.propYear} \n
    Size of Property (sq ft): ${req.propSize} \n
    Construction Type: ${req.propConsType} \n
    Roof Type: ${req.propRoofType} \n
    Floors: ${req.propFloors} \n
    Beds: ${req.propBed} \n
    Bath: ${req.propBath} \n
    Market Value: ${preq.ropValue} \n
    Insurance: ${req.insName} \n
    Insurance Expiration Date: ${req.insExpire} \n
    Losses?: ${req.insLoss} \n
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
    Second Insured ${req.userName2} \n
    Phone: ${req.userPhone} \n
    Date of Birth: ${req.userDOB1} \n
    2nd Insured Date of Birth: ${req.userDOB2} \n
    Address: ${req.userAddress} \n
    Driving Experience: ${req.userExp} \n
    Married?: ${req.userMarried} \n
    Prior/Current Insurance: ${req.userPriorIns} \n
    Prior/Current Insurance Expiration: ${req.userPriorExp} \n
    Primary Driver License: ${req.userLicense1} \n
    Secondary Driver License: ${req.userLicense2} \n
    VIN1: ${req.VIN1} \n
    VIN2: ${req.VIN2} \n
    Vehicle1: ${req.Vehicle1} \n
    Vehicle2: ${req.Vehicle2} \n
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
    Company Name: ${req.companyName} \n
    Company Address: ${req.companyAddress} \n
    Size of Company (sq ft): ${req.companySize} \n
    Year Established: ${req.companyYear} \n
    Number of Employees: ${req.companyEmployees} \n
    Annual Sales Revenue: ${req.companySales} \n
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
