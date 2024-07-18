import mongoose from "mongoose";
const userCasino = mongoose.connection.useDb("casino")
 const userShema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
 })
 export const userModel = userCasino.model("user",userShema);
 