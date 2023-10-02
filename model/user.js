import mongoose from 'mongoose'

const Schema = mongoose.Schema() 

const user = new Schema({
    name: {
        type: toString, required : true
    },
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,minlength:6},
    blogs:[{type:mongoose.Types.ObjectId,ref:"Blog",required:true}]


})


export default mongoose.model("User", userSchema);
