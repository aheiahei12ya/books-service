import express from 'express'

import { userInfo, userLogin } from '@/services/user'

const router = express.Router()

router.post('/login', userLogin)
router.post('/info', userInfo)

export default router
