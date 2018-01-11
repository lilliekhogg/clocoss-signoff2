'use strict';
//require express
const express = require('express');

const app = express();

//set location for api folder
app.use('/api', require('./api'));

//define location for static folder
app.use(express.static('static', { extensions: ['html'] }));

const port = process.env.PORT || 8080;

//run the app
app.listen(port, (err) => {
  if (err) console.log('error', err);
  else console.log(`app listening on port ${port}`);
});
