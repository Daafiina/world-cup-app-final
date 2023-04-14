const mongoose = require('mongoose')

const Schema = mongoose.Schema


let teamSchema = new Schema(
    {
        TeamName:{  
            type:String
        },
        Club:{
            type:String
        },
        PlayerName:{
            type:String
        },
        Permbajtja:{
            type:String
        },
        rating:{
        type:Number
       }
    },

    {
        collection: 'team', 
    },

)

module.exports = mongoose.model('team', teamSchema)