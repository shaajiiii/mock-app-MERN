const router = require("express").Router();
const {User} = require('../models/userModel');
const {application} = require('../models/applicationModel')
const Joi = require('joi');



router.post('/',async (req,res)=>{
    console.log(req.body);
    let {error} = validateData(req.body);
    if (error){
        console.log(error);
        return res.status(400).send({ message: error.details[0].message });
    }

    const user = await User.findOne({email:req.body.email})
    if(!user){
        return res.status(400).send({ message:"Invalid email or password.."});
    }

    if(user.password!==req.body.password){
        return res.status(400).send({ message:"Invalid email or password.."});
    }else{
        res.status(200).send({token:user._id});
    }

    console.log('user  found ===');
    console.log(user);
       


    
})


//=== SUBITION OF APPLICATION

router.post('/submit-application', async (req,res)=>{
    console.log('app submit route');
    
    //data validation here
    let {error} = validateApplicationData(req.body)
    if (error)
		return res.status(400).send({ error: error.details[0].message }); // validation error

    let user = await User.findById(req.body.token);
    console.log(user);
    // not user aanel sent error
    if(!user){
        console.log("rejected");
        return res.status(400).send({error :"request authentication failed..."})
    }

    
    req.body.user_data= user;
    req.body.status = "applied"

    await new application(req.body).save();

    res.status(201).send("Applied successfully")

    
    
    //console.log(user);
    /////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!=========== paused here.. 
    // fetched user. store that data into application. store application, before that, create apllication model.
    
   // console.log(req.body)
})




// checking existing application
router.post('/check-status',async (req,res)=>{

    console.log("check status fired");
    console.log(req.body.Id);
    let id = req.body.Id;

    let user = await User.findById(id);
    let applications = await application.find({"user_data.firstName":user.firstName ,status:{$ne:"approved"}});

    console.log(user)
    console.log(applications);
    
    if(applications.length == 0){
        console.log("Form ok , user can apply");
        res.status(201).send({canApply:true})
       
    }else{
        console.log("Form hidden, user blocked")
        res.status(201).send({canApply:false})
    }


    // const user = await User.findOne({email:req.body.email})
    // if(!user){
    //     return res.status(400).send({ message:"Invalid email or password.."});
    // }

    // if(user.password!==req.body.password){
    //     return res.status(400).send({ message:"Invalid email or password.."});
    // }else{
    //     res.status(200).send({token:user._id});
    // }


    
})












//=============================== APPLICATION DATA VALIDATION//  ^[a-zA-Z0-9_ ]*$
const validateApplicationData = (applicationData) => {
    const schema = Joi.object({
        companyName: Joi.string().required().label("company name"),
        address:Joi.string().regex(/^[a-zA-Z0-9_ '\,]*$/).required().label("address"),
        city:Joi.string().required().label("city"),
        state:Joi.string().required().label("state"),
        email:Joi.string().email().required().label("Email"),
        phone:Joi.string().regex(/^[0-9]{10}$/).messages({'string.pattern.base': `Phone number should contain only 10 digits.`}).required(),
        Describe_team:Joi.string().required().label("team description"),
        Describe_company:Joi.string().required().label("company description"),
        Describe_problem:Joi.string().required().label("problem description"),
        Describe_solution:Joi.string().required().label("solution description"),
        Describe_value:Joi.string().required().label("value description"),
        token:Joi.required()
        
    })

    return schema.validate(applicationData)

}


//=========== LOGIN DATA VALIDATION

const validateData = (LoginData) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.required().label("Password"),

    })

    return schema.validate(LoginData)

}




module.exports = router;