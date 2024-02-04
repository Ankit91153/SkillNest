const Service=require("../models/service-model")

const createService=async(req,res)=>{
    try{
        // const services=req.body;
        // console.log(services);
        console.log(req.body);
        const createService= await Service.create(req.body)
        // console.log(createService);
        if(createService){
            res.send({
                message:"service created",
                data:createService,
                status:200
            })
        }
    }
    catch(e){
        console.log(`error from the server ${error}`);

    }
}

const services=async (req,res)=>{
    try{
        const response=await Service.find();
        // console.log(response);
        if(!response){
            res.status(404).json({msg:"No service found"});
            return;
        }
        return res.status(200).json({msg:"service found",data:response})
    }
    catch(e){
        console.log(`error from the server ${e}`);
    }
}
module.exports={services,createService};