const mongoose = require ("mongoose");

const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
        email:{
            type:String,
            required:true,
            unique:[true,"Email id already present"],
            validate(value){
                if(!validator.isEmail(value)){
                    throw new error("invalide Email")
                }
            }
        },
        phone:{
            type:Number,
            min:10,
            //max:10,
            required:true,
            unique:true
        },
        address:{
            type:String,
            required:true,
        }
    
})

//we will create new collection 


const Student = new mongoose.model("Student",studentSchema )

module.exports = Student