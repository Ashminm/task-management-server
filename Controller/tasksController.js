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
    const {title}=req.body
    try{
        const existingTask=await tasks.findOne({title})
        if(existingTask){
            res.status(406).json('Existing Task!')
        }else{
            const newTask=new tasks({title,date:Date.now()})
            await newTask.save()
            res.status(200).json(newTask)
        }
    }catch(err){
        res.status(401).json('Somthing went wrong:'+err)
    }
}