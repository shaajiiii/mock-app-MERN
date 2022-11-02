const router = require("express").Router();
const Joi = require('joi');



router.post('/',async (req,res)=>{
   // console.log(req.body);
    let {error} = validateData(req.body);
    if (error){
        console.log(error);
        return res.status(400).send({ message: error.details[0].message });
    }

    if(req.body.username =="admin" && req.body.password == "123"){
        res.status(200).send({adminStatus:"logged in"});
    }else{
        return res.status(400).send({ message:"Invalid username or password.."});
    }
   

    
})

//=========== ADMIN LOGIN DATA VALIDATION

const validateData = (LoginData) => {
    const schema = Joi.object({
        username:Joi.string().regex(/^[A-Za-z]+$/).required().label("username").messages({
            "string.pattern.base": "please enter a valid username..."
        }),
        password: Joi.required().label("Password"),

    })

    return schema.validate(LoginData)

}


module.exports = router;