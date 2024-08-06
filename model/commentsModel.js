const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const commentsSchema= new Schema({
    comment:{type:String, required:true},
    author:[{
        type:Schema.Types.ObjectId,
        ref:'User'
    }]
    
})
module.exports=mongoose.model('Comments',commentsSchema);