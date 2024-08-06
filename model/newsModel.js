const mongoose = require("mongoose");

const articleSchema= new mongoose.Schema({
    title:{type: String, required:true},
    author: { type: String, required: true },
    publishDate: { type: Date, default: Date.now },
    content: {type:String, required:true},
    imageUrl: String,
    tags: String
})
module.exports=mongoose.model('Article',articleSchema);
