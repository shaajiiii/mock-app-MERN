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


router.get('/get-approved-companies', async (req,res)=>{

    
    let approvedApplications =  await application.find({status:"approved"}).distinct("companyName")
    //console.log(approvedApplications);
    if(approvedApplications){
        res.json({approvedApplications});

    }else{
        res.send(404)
    }

})



router.post('/book-room', async (req,res)=>{

    console.log(req.body);
    await Room.updateOne({no:req.body.roomNo},{$set:{status:"booked",companyName:req.body.company}})

    res.send({msg:"booked!"})
    // let rooms =  await Room.find({})
    // if(rooms){
    //     res.json({rooms});

    // }else{
    //     res.send(404)
    // }

})






module.exports = router;