import express from 'express'

import { settingList } from '@/services/setting'

const router = express.Router()

router.post('/list', settingList)

export default router
