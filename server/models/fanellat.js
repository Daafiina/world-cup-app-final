const mongoose = require('mongoose')

const Schema = mongoose.Schema


let fanellatSchema = new Schema(
    {
        Foto:{  
            
            type:String
        },
        Shteti:{
            type:String
        },
        Cmimi:{
            type:Number
        },
        Madhesite:{
            type:String
        },
       
       Gjinia:{
        type:String
       }
    },

    {
        collection: 'fanellat', 
      },

)

module.exports = mongoose.model('fanellat', fanellatSchema)
