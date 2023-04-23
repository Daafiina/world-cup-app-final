const mongoose = require('mongoose')
const Schema = mongoose.Schema

let contactSchema = new Schema(
  {
    name: {
      type: String, required: true 
    },
    email: {
      type: String, required: true 
    },
    phone: {
      type: String, required: true 
    },
    message: {
      type: String, required: true 
    },
  },
  {
    collection: 'contacts',
  },
)

module.exports = mongoose.model('Contact', contactSchema)