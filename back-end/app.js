const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser=require('body-parser');
PORT = 4000

const nodemailer = require("nodemailer");


app.use(bodyParser.json());

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "usman1234",
    database : "Uservice"
})

db.connect((err)=>{
    if(err)
        throw err
    
    console.log("Database successfully connected")
})

app.use(require('./routes/auth').router)
app.use(require('./routes/admin').router)
app.use(require('./routes/users').router)
app.use(require('./routes/projects').router)



app.listen(PORT,()=>{
    console.log('server started, Listening to port ',PORT)
})

