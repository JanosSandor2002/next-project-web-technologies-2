import { Router } from 'express';
import * as controller from '../controllers/product.controller.js';

const router = Router();

router.post('/', controller.create);
router.get('/', controller.getAll);
router.get('/brand/:brand', controller.getByBrand); // <<< ide kell

export default router;
