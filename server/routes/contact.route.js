const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//model
let ContactModel = require('../models/contact')

router.route('/create-contact').post((req, res, next) => {
  ContactModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

router.route('/contacts').get((req, res, next) => {
  ContactModel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

router.route('/contacts/:id').get((req, res, next) => {
  ContactModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Delete
router.route('/delete-contact/:id').delete((req, res, next) => {
  ContactModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = router