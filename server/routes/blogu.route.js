const express = require('express')
const bloguRoute = express.Router()

// model
let bloguModel = require('../models/blogu')

// bloguRoute.route('/create-blogu').post((req, res, next) => {
//   bloguModel.create(req.body, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })

bloguRoute.route('/create-blogu').post((req, res, next) => {
  bloguModel.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
});

// bloguRoute.route('/').get((req, res, next) => {
//   bloguModel.find((error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })

bloguRoute.route('/').get((req, res, next) => {
  bloguModel.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
})


bloguRoute.route('/edit-blogu/:id').get((req, res, next) => {
  bloguModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update
bloguRoute.route('/update-blogu/:id').put((req, res, next) => {
  bloguModel.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(data => {
      res.json(data)
      console.log('Student successfully updated!')
    })
    .catch(error => {
      return next(error)
    })
})

// Delete
bloguRoute.route('/delete-blogu/:id').delete((req, res, next) => {
  bloguModel.findOneAndDelete({ _id: req.params.id })
    .then(data => {
      res.status(200).json({
        msg: data,
      });
    })
    .catch(error => {
      return next(error);
    });
});


module.exports = bloguRoute