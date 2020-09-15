const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const db = require('./db/models')

app.get('/',(req,res)=>{
    db.Users.findAll().then(
        (data) => res.send(data)
    
    )
    } )
app.listen(port,() => console.log(`express run at port: ${port}`))