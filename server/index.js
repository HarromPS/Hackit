// This is a root folder for the backend server 

// import the module express js
const express = require("express");

// import other routes
const Data = require('./routes/data');

const PORT = 3001;

// creating a express app
const app = express();


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
localhost:3000/ => Welcome to Home
localhost:3000/no => Welcome to Data
localhost:3000/data/personal => Welcome to Personal Data

localhost:3000/Data/ => Welcome to Personal Data

*/

// app uses routes for different endpoints
app.use(express.json());
app.use('/Data',Data);

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