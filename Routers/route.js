const express=require('express')

const taskController=require('../Controller/tasksController')

const router= new express.Router()


// server side route localhost/get-task
router.get('/get-task',taskController.getTask)
router.post('/add-task',taskController.addTask)
router.put('/edit-task/:id',taskController.editTask)
router.delete('/delete-task/:id',taskController.daletetask)
router.get('/single-task/:id',taskController.singleTask)
router.delete('/delete-all',taskController.DeleteAll)


module.exports=router