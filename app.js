const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/',(req,res)=>res.send('root'))
app.listen(port,() => console.log(`express run at port: ${port}`))