const express=require("express");
const router=express.Router();
const authController=require("../controllers/auth-controller")
const validate=require("../middlewares/validator-middleware")
const userValidator=require("../validator/auth-validator");
const authMiddleware = require("../middlewares/authMiddleware");

// router.get("/",(req,res)=>{
//     res.send("Hlelloo this ankit")
// })

router.route("/").get(authController.home)
router.route("/register").post(validate(userValidator),authController.userRegister)
router.route("/login").post(authController.loginRegister)
router.route("/user").get(authMiddleware, authController.user);
module.exports=router