const express=require("express");
const router=express.Router();

const servicesController=require("../controllers/service-controller")

router.route("/allService").get(servicesController.services);
router.route("/createService").post(servicesController.createService);
module.exports=router