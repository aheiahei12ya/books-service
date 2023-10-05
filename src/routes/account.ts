import express from 'express';
import { accountList } from '../services/account';

const router = express.Router();

router.post('/list', accountList);

export default router;
