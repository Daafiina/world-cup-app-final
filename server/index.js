const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const createError = require('http-errors');

// Connect mongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/World-Cup-App-Final')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason);
  });

// Create two Express applications
const app1 = express();
const app2 = express();

app1.use(bodyParser.json());
app1.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app1.use(cors());

app2.use(bodyParser.json());
app2.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app2.use(cors());

// Import the routes for each model
const bloguAPI = require('../server/routes/blogu.route');
const fanellatAPI = require('../server/routes/fanellat.route');

// Assign routes to the respective applications
app1.use('/api', bloguAPI);
app2.use('/api', fanellatAPI);

// Create port for app1
const port1 = process.env.PORT || 4000;

// Create port for app2
const port2 = process.env.PORT || 5000;

// Start listening for requests on the respective ports
const server1 = app1.listen(port1, () => {
  console.log(`App1 is running on port ${port1}`);
});

const server2 = app2.listen(port2, () => {
  console.log(`App2 is running on port ${port2}`);
});

// Find 404
app1.use((req, res, next) => {
  next(createError(404));
});

app2.use((req, res, next) => {
  next(createError(404));
});

// error handler for app1
app1.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

// error handler for app2
app2.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
