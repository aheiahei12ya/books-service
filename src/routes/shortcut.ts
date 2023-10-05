import express from 'express';
import { shortcutList } from '@/services/shortcut';

const router = express.Router();

router.post('/list', shortcutList);

export default router;
