const router = require("express").Router();
const Joi = require('joi');
const {User} = require('../models/userModel')


router.post('/',async (req, res) => {
    //console.log(req.body);
    let {error} = validateData(req.body)
    if (error)
		return res.status(400).send({ message: error.details[0].message });

    await new User(req.body).save();
    res.status(201).send("User Created Successfully") // success responese...
})




//==========================================================//


// validation function=
// this function returns an object and it will have an error field if there is an error
const validateData = (signupData) => {
    const schema = Joi.object({
        firstName: Joi.string().regex(/^[A-Za-z]+$/).min(2).required().label("First Name").messages({
            "string.pattern.base": "Please enter a valid first name.."
        }),
        lastName: Joi.string().regex(/^[A-Za-z]+$/).min(2).required().label("Last Name").messages({
            "string.pattern.base": "Please enter a valid last name.."
        }),
        email: Joi.string().email().required().label("Email"),
        password: Joi.required().label("Password"),

    })

    return schema.validate(signupData)

}

module.exports = router;