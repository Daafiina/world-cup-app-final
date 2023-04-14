const express = require('express')
const teamRoute = express.Router()
const mongoose = require('mongoose');


let teamModel=require('../models/team')

teamRoute.route('/').get((req, res, next) => {
    teamModel.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        next(err);
      });
  })

teamRoute.route('/create-team').post((req, res, next) => {
    teamModel.create(req.body)
      .then((data) => {
        res.json(data);
        console.log('Successfully created!')
      })
      .catch((err) => {
        next(err);
      });
  });
  
   
  

  teamRoute.route('/edit-team/:id').get((req, res, next) => {
    teamModel.findById(req.params.id)
      .then((data) => {
        res.json(data)
      })
      .catch((error) => {
        return next(error)
      })
  })
  

  teamRoute.route('/update-team/:id').put((req, res, next) => {
    teamModel.findByIdAndUpdate(req.params.id, { $set: req.body })
      .then(data => {
        res.json(data)
        console.log('Successfully updated!')
      })
      .catch(error => {
        return next(error)
      })
  })
  

  
  
  teamRoute.route('/delete-team/:id').delete((req, res, next) => {
    teamModel.findOneAndDelete({ _id: req.params.id })
      .then(data => {
        res.status(200).json({
          msg: data,
        });
      })
      .catch(error => {
        return next(error);
      });
  });
  
  
  module.exports = teamRoute