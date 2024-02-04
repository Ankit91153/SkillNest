const mongoose=require("mongoose");
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },password:{
        type:String,
        required:true
    },phone:{
        type:Number,
        required:true
    },isadmin:{
        type:Boolean,
        default:false
    },
})

userSchema.pre('save',async function(){
    const password=this.password
    try{
        const hashPassword= await bcrypt.hash(password, saltRounds);
        this.password=hashPassword;
        // next(); 
    }catch(e){
        next(e)
    }
  
})
// Token Generate
userSchema.methods.generateToken=async function(){
    console.log("ehllo");
    try{
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isadmin
        },process.env.JWT_SECRET_KEY)
    }catch(e){
        console.log(e);
    }
}

userSchema.methods.comparePassword=async function(password){
    return bcrypt.compare(password,this.password)
}

const UserModel=new mongoose.model('users',userSchema)
module.exports=UserModel