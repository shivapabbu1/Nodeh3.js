const express=require("express");
const cors=require("cors");



const app =express();


app.use(
    cors({
      origin:["*"],
      method:["GET","POST"],
    })
);

const middleware= (req,res,next) =>{
    console.log("i am in middleware")
    next()
};
const middleware2=(req,res,next)=>{
    console.log("i am 2 nd middleware")
    next()
};
 
app.get("/cors", middleware,(req,res)=>{
    res.json({
        "Students" : [
            {
                "name": "Shivaprasad"
            }
        ]
    })
})




app.get("/",middleware,(req,res)=>{
    res.send("i am get method from m.w")
    res.end()
})
app.get("/second",middleware2,(req,res)=>{
    res.send("i am get method from 2nd m.w")
});
app.listen(3001,()=>{
    console.log("server is started")
})