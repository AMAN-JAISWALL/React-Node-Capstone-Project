import express from 'express';

const router = express.Router();

import * as  materialController from '../Controler/materialController.js';

router.get('/fetch',materialController.fetchMaterialData);
router.delete('/delete/:material_id', materialController.deleteMaterialData);
router.post('/insert',materialController.insertMaterialData);
router.post('/update',materialController.updateMaterialData);
router.patch("/active/",materialController.materialActive);
router.get("/fetchOne/:material_id",materialController.fetchOne);




export default router;