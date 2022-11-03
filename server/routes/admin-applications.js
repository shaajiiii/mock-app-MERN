const router = require("express").Router();
const {application} = require('../models/applicationModel');
const {Room} = require('../models/roomModel')


router.get('/get-new-applications',async (req,res)=>{
   
    let newApplications =  await application.find({status:"applied"})
    if(newApplications){
        res.json({newApplications});

    }else{
        res.send(404)
    }
    
})

router.get('/get-pending-applications',async (req,res)=>{

    //console.log("reached fetch pendingg");
   
    let pendingApplications =  await application.find({status:{$in:["pending","approved"]}})
    if(pendingApplications){
        res.json({pendingApplications});

    }else{
        res.send(404)
    }
    
})


router.put('/update-to-pending',async (req,res)=>{
   
    console.log("update route..");
    // console.log(req.body);
    await application.updateOne({_id:req.body.doc_Id},{$set:{status:"pending"}})
    res.status(200).send({msg:"updated the document"});
    
})


router.put('/update-to-approved',async (req,res)=>{
   
    //console.log("update route..");
    // console.log(req.body);
    await application.updateOne({_id:req.body.doc_Id},{$set:{status:"approved"}})
    res.status(200).send({msg:"updated the document"});
    
})






module.exports = router;