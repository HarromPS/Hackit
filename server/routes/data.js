// router for data handling
const router = require('express').Router();

router.get('/',(req,res)=>{
    res.send("Data's data")
})
router.get('/firstdata/*',(req,res)=>{
    res.send("404 page not found")
    
})
// get all the data 
router.get('/firstdata', async(request,response)=>{
    try{
        

        response.status(200).send(data);
    }
    catch(err){
        console.log("Error: " + err);
    }
})

module.exports = router;

