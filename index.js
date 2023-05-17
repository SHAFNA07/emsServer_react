const express=require('express')
const server=express()
const cors=require('cors')
server.use(cors({origin:'http://localhost:3000'}))
server.use(express.json())

const logic=require('./Services/logic')

server.listen(8000,()=>{
    console.log("ems started...");
})


//get all employees

server.get('/getEmployees',(req,res)=>{
    logic.getAllEmployees().then(result=>{
        res.status(result.statusCode).json(result)

    })

})