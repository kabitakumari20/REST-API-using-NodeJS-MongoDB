const express = require("express");

require("./db/conn");

const Student = require("./models/students")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.get("/getdata",(req,res)=>{
    res.send("Hello This is Manvi Mayuriya")
})

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
app.get("/getdata",(req,res)=>{
    //res.send("Hello This is Manvi Mayuriya")
    const getData = async () => {
        const result = await Student.find()
        console.log(result)
        res.send(result)
    }
    getData()
})


app.listen(port,()=>{
    console.log(`connection is successfully ${port}`)
})
