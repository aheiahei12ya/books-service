import express from 'express'

import { platformList } from '@/services/platform'

const router = express.Router()

router.post('/list', platformList)

export default router
