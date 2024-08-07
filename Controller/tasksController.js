const tasks=require('../Model/tasksModel')

// controller

exports.getTask=async(req,res)=>{
      try{
        const allTasks=await tasks.find()
        res.status(200).json(allTasks)
      }catch(err){
        res.status(401).json(err)
      }
}

exports.addTask=async(req,res)=>{
    const {title,description,duration,priority,category}=req.body
    try{
        const existingTask=await tasks.findOne({title,description})
        if(existingTask){
            res.status(406).json('Existing Task!')
        }else{
            const newTask=new tasks({title,description,duration,priority,category,date:Date.now()})
            await newTask.save()
            res.status(200).json(newTask)
        }
    }catch(err){
        res.status(401).json('Somthing went wrong:'+err)
    }
}

exports.editTask=async(req,res)=>{
    const taskId=req.params.id
    console.log(taskId);
    const {title,description,duration,priority,category}=req.body
    const date=Date.now()
    try{
        const existingTask=await tasks.findOne({title,description,duration,priority,category})
        if(existingTask){
            res.status(406).json('Already exist task!')
        }else{
            const Result=await tasks.findByIdAndUpdate({_id:taskId},{title,description,duration,priority,category,date})
            res.status(200).json(Result)
        }
    }catch(err){
        res.status(401).json(err)
    }
    
}

exports.daletetask=async(req,res)=>{
    try{
        const taskId=req.params.id
        const Result=await tasks.findOneAndDelete({_id:taskId})
        res.status(200).json(Result)
    }catch(err){
        res.status(401).json(err)
    }
}

exports.singleTask=async(req,res)=>{
    try{
        const taskId=req.params.id
        const sTask=await tasks.findOne({_id:taskId})
        res.status(200).json(sTask)
    }catch(err){
        res.status(401).json(err)
    }
}