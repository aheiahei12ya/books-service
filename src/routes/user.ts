import {
  userCreate,
  userInfo,
  userLogin,
  userModify,
  userRemove
} from '@/services/user'
import { userCreateInterface } from '@/services/user/interface'

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
  },
  {
    method: 'post',
    path: '/create',
    action: userCreate,
    validator: userCreateInterface
  },
  {
    method: 'post',
    path: '/modify',
    action: userModify
  },
  {
    method: 'post',
    path: '/remove',
    action: userRemove
  }
]

export default router
