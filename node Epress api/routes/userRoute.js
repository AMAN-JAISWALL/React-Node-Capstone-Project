import express  from "express"

const router = express.Router()

import * as  userController from "../Controler/userControler.js" 

router.post("/signup",userController.signUp);
router.post("/login",userController.logIn);
router.get("/fetch",userController.fetchData);
router.delete("/delete/:user_id",userController.userDelete);
router.post("/update",userController.userUpdate);
router.patch("/active/",userController.userActive);
router.get("/fetchOne/:user_id",userController.fetchOne);
router.get("/fetchEmail/:email",userController.fetchEmail);
router.patch("/forget",userController.userForgetPass);
router.patch("/ChangePassword",userController.ChangePassword);

 





// router.post("/course",userController.signUp);




// router.post("/login",UserController.login);

export default router