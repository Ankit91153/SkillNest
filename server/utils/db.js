const mongoose=require("mongoose")
const URI=process.env.MONGO_URI

const connect=async()=>{
    try{
        await mongoose.connect(URI);
        console.log("connection successfully");
    }catch(e){
        console.log("Something went wrong when connect the Database");
        console.log(e);
    }
}

module.exports=connect;