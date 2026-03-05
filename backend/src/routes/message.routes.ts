import { Router } from 'express';
import * as controller from '../controllers/message.controller.js';

const router = Router();

router.post('/', controller.create);
router.get('/', controller.getAll);

export default router;
