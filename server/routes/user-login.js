const router = require("express").Router();



router.post('/',(req,res)=>{
    console.log(req.body);
    res.send("req ethi loginroute => '/' post method ")
})


module.exports = router;