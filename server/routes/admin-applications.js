const router = require("express").Router();
const {application} = require('../models/applicationModel')


router.get('/get-new-applications',async (req,res)=>{
   
    let newApplications =  await application.find({status:"applied"})
    if(newApplications){
        res.json({newApplications});

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






module.exports = router;