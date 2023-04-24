const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const createError = require('http-errors')
const multer = require('multer');
const app = express();

//edited

app.use(express.static("uploads"));

app.use(express.json());
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


const fanellatAPI = require('../server/routes/fanellat.route')
const teamAPI=require('../server/routes/team.route')
const contactAPI=require('../server/routes/contact.route')
const ProdAPI=require('../server/routes/productsRouter')



app.use(express.static("./upload"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./../my-project/public/upload");
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    cb(null, file.fieldname + "-" + Date.now() + "." + ext);
  },
});

const upload = multer({ storage });

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
app.use('/api', contactAPI)
app.use("/products", upload.single("image"), ProdAPI);


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