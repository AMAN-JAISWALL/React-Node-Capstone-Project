import express  from "express";

const router = express.Router();

import * as moduleController from '../Controler/moduleController.js'

router.post("/insert",moduleController.insertModuleData);
router.get("/fetch",moduleController.fetchModuleData);
router.delete("/delete/:module_id",moduleController.deleteModuleData);
router.post("/update",moduleController.updateModuleData);
router.patch("/active/",moduleController.moduleActive);
router.get("/fetchOne/:module_id",moduleController.fetchOne);



// router.patch("/active/",userController.userActive);


export default router;