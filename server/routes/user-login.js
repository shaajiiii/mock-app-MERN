const router = require("express").Router();
const {User} = require('../models/userModel');
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



router.post('/submit-application', async (req,res)=>{
    console.log('app submit route');
    //let user = null;
    let user = await User.findById("63451011542801347978a454");
    
    console.log(user);
    /////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!=========== paused here.. 
    // fetched user. store that data into application. store application, before that, create apllication model.
    
   // console.log(req.body)
})


//===============================//
const validateData = (signupData) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.required().label("Password"),

    })

    return schema.validate(signupData)

}




module.exports = router;