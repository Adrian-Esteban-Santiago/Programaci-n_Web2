const express = require("express");
const router = express.Router();



router.get("/",(req,res)=>{
    res.send("Hola Adrian desde el inicio")
});

router.get("/registro",(req,res)=>{
    res.send("Hola Adrian desde el registro")
});

module.exports = router;