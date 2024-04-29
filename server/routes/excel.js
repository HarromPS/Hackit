const router = require('express').Router();
let ExcelData = require('../models/studentData');

// get method to read the data : endpoint
router.get('/getExcelData', async (request, response) => {
    try {

        username = req.body.username
        password = req.body.password
        // to get all data from database we use mongodb function find(): fetches all data
        let data = await ExcelData.find();
        response.status(200).json({ data });
    } catch (error) {
        response.status(400).send("Internal Server Error");
    }
})


// adding a new record to the database
router.post('/addNewExcel', async (request, response) => {
    try {

        let record = await ExcelData.create({
            id: request.body.id,
            name: request.body.name
        });
        response.status(200).json({ record });

    } catch (error) {
        console.log(error);
        response.send("Internal Server Error", error);
    }
})

module.exports = router;