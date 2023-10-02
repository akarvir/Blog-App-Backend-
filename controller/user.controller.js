import User from "../model/user";
import bcrypt from 'bcryrpt.js'

export const getAllUser = async(req,res,next) =>{
    let users;
    try {
        users = await User.find() 

    } catch (err) {
        return console.log(err);
    }
    if (!users) {
        return res.status(404).json({message:"No users found"});
    }
    return res.status(200).json({users});
}

export const signup = async (req,res,next)=> {
    const {name,email,password} = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({email});

    } catch(err){
        return console.log(err)
    }
    if (existingUser){
        return res.status(400).json({message:"User already there"});
    }
    const hashedPassword = bcrypt.hashSync(password);
    const user = new User({name,email,password:hashedPassword,blogs:[]});
    
    try {
        await user.save();

    } catch (err) {
        return console.log(err);
    }
    return response.status(201).json({user})
}   

export const login = async (req,res,next) => {
    const {email,password} = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({email});

    } catch(err){
        return console.log(err)
    }
    if (!existingUser){
        return res.status(404).json({message:"User not found"});
    }

    const isPasswordCorrect = bycrypt.compareSync(password,existingUser.password)
    if (!ispasswordCorrect) {
        return res.status(400).json({message:"Incorrect password"})
    }
    return res.status(200).json({message:"Succcess successful"})

} 