const {z}=require('zod')
const userValidator=z.object({
    username:z.string({required_error:"Name is required"}).trim().min(3,{message:"name char 3"}),
    email:z.string({required_error:"Email is required"}).email({message:"Invalid email address"}).min(3,{message:"email char 3"}),
    password:z.string({required_error:"password is required"}).trim().min(3,{message:"password char 3"}),
    phone:z.string({required_error:"Phone is required"}).trim().min(10,{message:"phone char 10"}),
    
})

module.exports=userValidator