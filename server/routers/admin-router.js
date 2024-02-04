const express=require("express");
const router=express.Router();
const adminRouter=require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/authMiddleware");

router.route("/allUsers").get(authMiddleware,adminRouter.allUsers)
router.route("/singleUser").post(authMiddleware,adminRouter.singleUser)
router.route("/deleteUser").delete(authMiddleware,adminRouter.deleteUser)
router.route("/updateUser").put(authMiddleware,adminRouter.updateUser)

router.route("/allMessages").get(authMiddleware,adminRouter.allmessages)
router.route("/singleMessages").post(authMiddleware,adminRouter.singleMessage)
router.route("/updateMessages").put(authMiddleware,adminRouter.updateMessages)
router.route("/deleteMessages").delete(authMiddleware,adminRouter.deleteMessages)
module.exports=router