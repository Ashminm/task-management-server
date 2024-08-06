const mongoose=require('mongoose')

const taskMangmtSchema=new mongoose.Schema({
    title:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now,
        required:true
    }
})

const tasks=mongoose.model('tasks',taskMangmtSchema)
module.exports=tasks