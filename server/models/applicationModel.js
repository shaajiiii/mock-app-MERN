
const mongoose = require('mongoose');



const applySchema = new mongoose.Schema({
    companyName:String,
    address:String,
    city:String,
    state:String,
    email:String,
    phone:String,
    Describe_team:String,
    Describe_company:String,
    Describe_problem:String,
    Describe_solution:String,
    Describe_value:String,
    user_data:Object,
    status:String
})

const application = mongoose.model('applications',applySchema);

module.exports = {application}