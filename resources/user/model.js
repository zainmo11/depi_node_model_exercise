const mongoose = require("mongoose")


const userSchema = new mongoose.Schema(
    {
        email:{
            type:String,
            required :true,
            lowercase: true,
        },
        name:{
            type:String,
            required :true,
            minLength:3,
        },
        password:{
            type:String,
            required :true,
            minLength:8,
            select:false
        },
        role:{
            type:String,
            default:"user"

        }

    },{timestamps:true}
)


const  User = mongoose.model("User",userSchema)


module.exports = User
