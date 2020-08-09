require('dotenv/config')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5555

const userRoute = require('./src/routes/user'); 
const scheduleRoute = require('./src/routes/schedule')

//buat lempar data pake formdata
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// Set routes
app.use('/users', userRoute)
app.use('/schedules', scheduleRoute)

app.listen(port, () =>{
    console.log(`Server running on ${port}`)
})