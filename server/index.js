const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const createError = require('http-errors')

const app = express();
//edited
app.use(express.json());
app.use(express.static("uploads"));
app.use(cors())
app.use(express.urlencoded({extended:true}))
// Connect mongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/World-Cup-App-Final')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })

const bloguAPI = require('../server/routes/blogu.route');
app.use("/api/post", require("../server/routes/Post.route"));


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)

// API
app.use('/api', bloguAPI)

// Create port
const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Find 404
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})