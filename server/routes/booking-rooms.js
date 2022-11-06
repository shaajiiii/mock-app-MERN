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
    let alloted =  await Room.find({status:"booked"}).distinct("companyName")

    // console.log("y mark___________");
    // console.log(approvedApplications);
    // console.log(alloted);

    //filtering
    const companiesTolist =  approvedApplications.filter(n => !alloted.includes(n))
    console.log(companiesTolist);
    //console.log(approvedApplications);
    if(approvedApplications){
        res.json({approvedApplications:companiesTolist});

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