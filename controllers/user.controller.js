
const userSchema = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.Register = async (req,res)=>{
    const {email,password} = req.body
    try {
        const userExists = await userSchema.findOne({email:email});
        if(userExists) {
            return res.status(400).send({msg: 'User already exists'});
        }
        const newUser = new userSchema(req.body)
        const salt = 10;
        const passwordHashed = bcrypt.hashSync(password,salt);
        newUser.password = passwordHashed;
        const userId = {id:newUser._id};
        const token = jwt.sign(userId,process.env.passwordToken);
        await newUser.save();
        return res.status(200).send({msg: 'User added successfully',token});
    } catch (error) {
        return res.status(500).send({msg: error.message});
    }
}


exports.Login = async (req,res)=>{
    const {email,password} = req.body
    try {
        const userExists = await userSchema.findOne({email:email});
        if(!userExists) {
            return res.status(400).send({msg: 'User not exists'});
        }
        const passwordHashed = bcrypt.compareSync(password,userExists.password);
        if(!passwordHashed){ 
            return res.status(400).send({msg:'Bad credentials'})
        }
        const userId = {id:userExists._id};
        const token = jwt.sign(userId,process.env.passwordToken);
        return res.status(200).send({msg: 'Logged successfully',token});
    } catch (error) {
        return res.status(500).send({msg: error.message});
    }
}


exports.updateUser = async (req,res) =>{
    const {email,password,id} = req.body 
    try {
        const hashedPassword = bcrypt.hashSync(password,10)
        req.body.password = hashedPassword;
        console.log(req.body)
        const userUpdated = await userSchema.findByIdAndUpdate(id,{$set:{...req.body}});
        if(!userUpdated){
            return res.status(400).send({msg:'user not updated'})
        }
        return res.status(200).send({msg:'user updated',user:userUpdated})
    } catch (error) {
        return res.status(500).send({msg:error})
    }
}