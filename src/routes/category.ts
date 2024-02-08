import express from 'express'

import { categoryList } from '@/services/category'

const router = express.Router()

router.post('/list', categoryList)

export default router
