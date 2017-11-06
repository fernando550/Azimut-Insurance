const express = require('express');
const path = require('path');

const app = express();

app.get('/api', (req, res) => {
  // add sendgrid stuff here
  res.send({msg: "this message came from server. Check server.js"});
});

app.use(express.static('client/build'));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App listening on PORT: ${port}`));

