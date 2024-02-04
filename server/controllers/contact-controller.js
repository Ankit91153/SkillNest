const ContactModel=require("../models/contact-model")

const userContact=async(req,res)=>{
    try{
        const {email,username,message}=req.body;
        
            
            const messageCreate=await ContactModel.create({email,username,message})
            
            res.send({
                status:200,
                mesg:"message send successfully",
                data:messageCreate,
            })
        
    }
    catch(e){
        res.send({
            status:500,
            mesg:e
        })
    }
}


module.exports={userContact}