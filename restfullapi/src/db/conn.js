const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/students-api",{
    // useCreateIndex:true,
    // useNewUrlParser:true,
    // useUnifiesTopology:true
}).then(() => {
    console.log("connection is successfully")
}).catch((err) => {
    console.log("no connection")
})