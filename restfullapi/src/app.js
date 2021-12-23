const express = require("express");

require("./db/conn");

const Student = require("./models/students")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

// insert data -----------------------------------------
app.post("/students",(req,res)=>{
    console.log(req.body);
    const user = new Student(req.body)


    user.save().then(() =>{
        res.status(201).send(user);
        // console.log(user)
    }).catch((err) =>{
        res.status(400).send(err);
        console.log(err)
    })
    // res.send("Hello This is Manvi Mayuriya")
})


// read all data from data base ---------------------------------
app.get("/getdata",(req,res)=>{
    //res.send("Hello This is Manvi Mayuriya")
    const getData = async () => {
        const result = await Student.find()
        console.log(result)
        res.send(result)
    }
    getData()
})

// read data by id-----------------

app.get("/mens/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const getMen = await Student.findById(_id)
        res.send(getMen);
    }catch(e){
        res.status(400).send(e)
    }
})


// update data -----------------------

app.patch("/mens/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const getMen = await Student.findByIdAndUpdate(_id,req.body,{
        new: true
        })
        res.send(getMen);
    }catch(e){
        res.status(500).send(e)
    }
})

// delete data----------------------------

app.delete("/mens/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const getMen = await Student.findByIdAndDelete(_id)
        res.send(getMen);
        // res.send("data deleted successfully")
    }catch(e){
        res.status(500).send(e)
    }
})


app.listen(port,()=>{
    console.log(`connection is successfully ${port}`)
})
