import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unuqie:true
    },
    fullName:{
       type:String,
       required:true,
    },
    password:{
        type:String,
        required:true,
    },
    confirmpassword:{
        type:String,
    },
    gender:{
        type:"string",
        required:true
    },
    profilePic:{
        type:"string",
        required:true
    }

})

export default mongoose.model("User", userSchema)
