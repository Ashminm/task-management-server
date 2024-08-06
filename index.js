require('dotenv').config()
const express =require('express')
const cors=require('cors')
require('./Connection/database')
const router=require('./Routers/route')

const tasks=express()
tasks.use(cors())
tasks.use(express.json())
tasks.use(router)


const PORT=3000 || process.env.PORT

tasks.listen(PORT,()=>{
    console.log('Task Management App Running:',PORT);    
})
tasks.get('/',(req,res)=>{
    res.send('<h3>Waiting for request....!!!</h3>')
})