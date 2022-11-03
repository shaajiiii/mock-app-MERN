const mongoose = require('mongoose');



const roomSchema = new mongoose.Schema({
    companyName:String,
    status:String,
    no:String
})

const Room = mongoose.model('rooms',roomSchema);

module.exports = {Room}