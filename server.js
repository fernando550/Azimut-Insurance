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
    subject: req.body.userName,
    text: req.body.Telephone + req.body.userMessage
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

