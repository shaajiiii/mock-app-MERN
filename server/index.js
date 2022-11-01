require('dotenv').config();
// console.log(process.env)
const express = require('express');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT ;
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL,(err)=>{ 
    if(err){
        console.log("someting went wrong with the database connection");
        console.log(err);
        return;
    }
    console.log("database connection successful");
});
//routes import
const userLogin = require('./routes/user-login');
const userSignup = require('./routes/user-sign-up')


//middelwares
app.use(express.json());
app.use(cors());


//routing

app.use('/login',userLogin)
app.use('/signup',userSignup)



// app.get('/', function (req, res) {
 
//     res.send({text:"helloOOOOOOOOOOOOOOOOOOOOOOOOOOO world"})
// })





app.listen(PORT,()=>{console.log(`server is listening.... to port ${PORT}`);})