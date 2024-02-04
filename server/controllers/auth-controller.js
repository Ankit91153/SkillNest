const UserModel=require("../models/user-model")
const bcrypt = require('bcrypt');
const home=(req,res)=>{
    res.send("Home Controller")
}
const userRegister=async(req,res)=>{
    try{
        const {email,username,password,isadmin,phone}=req.body;
        const emailExist=await UserModel.findOne({email});
        if(emailExist){
            res.send({
                status:300,
                mesg:"already exist email",
            })
        }else{
            
            const userCreate=await UserModel.create({username,phone,email,password})
            
            res.send({
                status:200,
                mesg:"register successfully",
                data:userCreate,
                token:await userCreate.generateToken(),
                userId:userCreate._id.toString(),
            })
        }
    }
    catch(e){
        res.send({
            status:500,
            message:e
        })
    }
}
const loginRegister=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const emailExist=await UserModel.findOne({email});
        if(emailExist){
           const checkPass=await emailExist.comparePassword(password);
           if(checkPass){
            res.send({
                status:200,
                token:await emailExist.generateToken(),
                userId:emailExist._id.toString(),
            })
           }else{
            res.send({
                status:400,
                message:"password not match"
            })
           }
        }else{
            res.send({
                status:404,
                mesg:"Invalid credential",
        
            })
        }
    }
    catch(e){
        res.send({
            status:500,
            mesg:e
        })
    }
}

const user = async (req, res) => {
    try {
      // const userData = await User.find({});
      const userData = req.user;
      return res.status(200).json({ msg: userData });
    } catch (error) {
      console.log(` error from user route ${error}`);
    }
  };

module.exports={home,userRegister,loginRegister,user}