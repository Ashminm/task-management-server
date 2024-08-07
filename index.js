require('dotenv').config()
const express =require('express')
const cors=require('cors')

const tasks=express()
// cors use
tasks.use(cors())
// express use
tasks.use(express.json())

const router=require('./Routers/route')
require('./Connection/database')

// router use
tasks.use(router)

// port setup
const PORT=3000 || process.env.PORT

// Application listen. show browser
tasks.listen(PORT,()=>{
    console.log('Task Management App Running:',PORT);    
})

// browser show get methord

tasks.get('/',(req,res)=>{
    res.send('<h3>Waiting for request....!!!</h3>')
})