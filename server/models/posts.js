const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: String,
    category: String,
    content:String, 
    image:String,
    created:{
        type:Date,
        default:Date.now
    }
},
    {
    collection: 'posts', 
  },
  
  
  );

module.exports = mongoose.model("Post", postSchema);