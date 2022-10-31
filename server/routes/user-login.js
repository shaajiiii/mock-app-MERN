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
        res.status(200).send({message:"Login success" });
    }

    console.log('user  found ===');
    console.log(user);
       


    
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