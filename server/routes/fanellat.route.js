const express = require('express')
const fanellatRoute = express.Router()
const mongoose = require('mongoose');

// model
let fanellatModel = require('../models/fanellat')

// fanellatRoute.route('/create-fanellat').post((req, res, next) => {
//   fanellatModel.create(req.body, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })

fanellatRoute.route('/create-fanellat').post((req, res, next) => {
  fanellatModel.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
});

// fanellatRoute.route('/').get((req, res, next) => {
//   fanellatModel.find((error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })

fanellatRoute.route('/fanellat').get((req, res, next) => {
  fanellatModel.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
})


fanellatRoute.route('/edit-fanellat/:id').get((req, res, next) => {
  fanellatModel.findById(req.params.id)
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      return next(error)
    })
})


// Update
fanellatRoute.route('/update-fanellat/:id').put((req, res, next) => {
  fanellatModel.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(data => {
      res.json(data)
      console.log('Fanella successfully updated!')
    })
    .catch(error => {
      return next(error)
    })
})

// Delete
fanellatRoute.route('/delete-fanellat/:id').delete((req, res, next) => {
  fanellatModel.findOneAndDelete({ _id: req.params.id })
    .then(data => {
      res.status(200).json({
        msg: data,
      });
    })
    .catch(error => {
      return next(error);
    });
});


module.exports = fanellatRoute