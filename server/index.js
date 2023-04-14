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

<<<<<<< HEAD
const bloguAPI = require('../server/routes/blogu.route');
app.use("/api/post", require("../server/routes/Post.route"));


=======
const bloguAPI = require('../server/routes/blogu.route')
const fanellatAPI = require('../server/routes/fanellat.route')
const teamAPI=require('../server/routes/team.route')

const app = express()
>>>>>>> 6e3eee412d46b5e524931645e73f7b89fe998186
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)

// API
app.use('/api', bloguAPI)
app.use('/api', fanellatAPI)
app.use('/team', teamAPI)

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