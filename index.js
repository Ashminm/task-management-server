require('dotenv').config()
const express =require('express')
const cors=require('cors')

const tasks=express()
tasks.use(cors())
tasks.use(express.json())

const router=require('./Routers/route')
require('./Connection/database')

tasks.use(router)


const PORT=3000 || process.env.PORT

tasks.listen(PORT,()=>{
    console.log('Task Management App Running:',PORT);    
})
tasks.get('/',(req,res)=>{
    res.send('<h3>Waiting for request....!!!</h3>')
})