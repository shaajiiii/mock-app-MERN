const router = require("express").Router();
const Joi =require('joi')


router.post('/',(req,res)=>{
    //console.log(req.body);
    let validateResult = validateData(req.body)
    console.log('validation outt put');
    console.log(validateResult);
    res.send("sign up reached")
})



// validation function
const validateData = (signupData)=>{
    const schema = Joi.object({
        firstName: Joi.string().min(3).required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
		email: Joi.string().email().required().label("Email"),
		password: Joi.required().label("Password"),

    })

    return schema.validate(signupData)

}

module.exports = router;