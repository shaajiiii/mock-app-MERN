const router = require("express").Router();
const { application } = require('../models/applicationModel');
const { Room } = require('../models/roomModel')


router.get('/create-room', async (req, res) => {

    await new Room({
        companyName: null,
        status: "available",
        no: "5"

    }).save();

    res.send("ok route set")

})


router.get('/get-all-rooms', async (req,res)=>{

    let rooms =  await Room.find({})
    if(rooms){
        res.json({rooms});

    }else{
        res.send(404)
    }

})








module.exports = router;