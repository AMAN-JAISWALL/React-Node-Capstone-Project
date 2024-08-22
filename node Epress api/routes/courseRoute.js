import express  from "express"

const router = express.Router()

import * as courseController from '../Controler/courseControler.js';


router.post("/insert",courseController.insertData);
router.get("/fetch",courseController.fetchCourseData);
router.delete("/delete/:course_id",courseController.deleteCourseData);
router.post("/update",courseController.updateCourseData);
router.get("/fetchOne/:course_id",courseController.fetchOne);
router.patch("/active/",courseController.courseActive);



// router.delete("/delete/:user_id",userController.userDelete);











export default router