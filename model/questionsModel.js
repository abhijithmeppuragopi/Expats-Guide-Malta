const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const questionsSchema= new Schema({
    question:{type:String, required:true},
    upvote:{type:Number, min:0},
    downvote:{type:Number, min:0},
    comments:[{
        type:Schema.Types.ObjectId,
        ref: 'Comments'
}],
    author:[{
        type:Schema.Types.ObjectId,
        ref:'User'
    }]
    
})
module.exports=mongoose.model('Questions',questionsSchema);