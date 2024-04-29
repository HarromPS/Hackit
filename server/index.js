// This is a root folder for the backend server 

// import the module express js
const express = require("express");

// middleware agent to interact nodejs and databases
const mongoose = require('mongoose');

// import other routes
const Data = require('./routes/data');
const Excel = require('./routes/excel');

const PORT = 3001;

// creating a express app
const app = express();

// step 1: database URL
let path = 'mongodb+srv://Harry:harry@mongocloud.hvhwirl.mongodb.net/?retryWrites=true&w=majority&appName=MongoCloud' 

// connect database with nodejs
const connect = async()=>{
    try {
        await mongoose.connect(path);
        console.log("Connection Established")
        
    } catch (error) {
        console.log(error)
        
    }
}

connect();
// App main endpoints
// this is a home endpoint
app.get('/',(req,res)=>{
    res.send("Welcome to Home")
})

app.get('/no',(req,res)=>{
    res.send("Welcome to Data")
})

app.get('/data/personal',(req,res)=>{
    res.send("Welcome to Personal Data ")
})

/*
localhost:3001/ => Welcome to Home
localhost:3001/no => Welcome to Data
localhost:3001/data/personal => Welcome to Personal Data

localhost:3001/Data/ => Welcome to Personal Data

*/

// app uses routes for different endpoints
app.use(express.json());
app.use('/Data',Data);
app.use('/excel',Excel);

// listen to the app at a port no
app.listen(PORT, ()=>{
    console.log(`App is listening at port no: http://localhost:${PORT}`);
})

// // template literal -> inserting a varible to a string
// let variable = "World";

// let string = "Hello"
// console.log(string)

// // Syntax: use backticks "`"
// string = `Hello ${variable}` ;

// console.log(string)



