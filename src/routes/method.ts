import express from 'express';
import { methodList } from '@/services/method';

const router = express.Router();

router.post('/list', methodList);

export default router;
