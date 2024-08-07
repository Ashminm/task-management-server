const mongoose=require('mongoose')

// mongoose schema

const taskMangmtSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    duration:{
        type:String
    },
    priority:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now,
        required:true
    }
})

const tasks=mongoose.model('tasks',taskMangmtSchema)
module.exports=tasks