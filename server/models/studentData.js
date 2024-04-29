// create structure for the data

const mongoose = require('mongoose')

// Syntax: to create a new schema
const ExcelData = mongoose.Schema({

    // key value pair

    // value: type, required, uniques
    id : {
        type : String,
        required: true,
        unique: true
    },
    name : {
        type : String,
        required:true
    },
},
{ collection: "excelData" }
)


module.exports = mongoose.model("excelData", ExcelData);