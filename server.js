const express =require("express");

app.get('/',(req,res)=>{
    res.json({
        message:"fixware is the best"
    });
});

app.listen(8000,()=>{
    console.log("server is running on port 8000");
});
