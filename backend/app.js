const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/users',(req,res)=>{
    res.send([
        {
        name:'John',
        age:20
        },
        {
            name:'Smith',
            age:25
            },
            {
                name:'Doe',
                age:30
                },
])
})

app.listen(8000,()=>{
    console.log('Server running successfully')
})