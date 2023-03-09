const mongoose = require('mongoose')

const Schema = mongoose.Schema


let bloguSchema = new Schema(
    {
        Titulli:{  
            type:String
        },
        Foto:{
            type:String
        },
        Autori:{
            type:String
        },
        Permbajtja:{
            type:String
        },
        DataPostimit:{
             type:Date,
             default:Date.now,
        },
       category:{
        type:String
       }
    },

    {
        collection: 'blogu', 
      },

)

module.exports = mongoose.model('blogu', bloguSchema)
