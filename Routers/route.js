const express=require('express')

const taskController=require('../Controller/tasksController')

const router= new express.Router()


// server side route localhost/get-task
router.get('/get-task',taskController.getTask)
router.post('/add-task',taskController.addTask)



module.exports=router