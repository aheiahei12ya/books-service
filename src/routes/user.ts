import { userInfo, userLogin } from '@/services/user'

const router = [
  {
    method: 'post',
    path: '/login',
    action: userLogin
  },
  {
    method: 'post',
    path: '/info',
    action: userInfo
  }
]

export default router
