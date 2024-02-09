import {
  userCreate,
  userInfo,
  userLogin,
  userModify,
  userRemove
} from '@/service/user'
import {
  userCreateInterface,
  userInfoInterface,
  userLoginInterface,
  userModifyInterface,
  userRemoveInterface
} from '@/service/user/interface'

const router = [
  {
    method: 'post',
    path: '/login',
    action: userLogin,
    validator: userLoginInterface
  },
  {
    method: 'post',
    path: '/info',
    action: userInfo,
    validator: userInfoInterface
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
    action: userModify,
    validator: userModifyInterface
  },
  {
    method: 'post',
    path: '/remove',
    action: userRemove,
    validator: userRemoveInterface
  }
]

export default router
