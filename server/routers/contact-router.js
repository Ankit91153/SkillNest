const express=require("express");
const router=express.Router();

const contactController=require("../controllers/contact-controller")

router.route("/contact").post( contactController.userContact);
module.exports=router