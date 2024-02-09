import {
  accountCreate,
  accountDetail,
  accountList,
  accountModify,
  accountRemove
} from '@/service/account'
import {
  accountCreateInterface,
  accountDetailInterface,
  accountListInterface,
  accountModifyInterface,
  accountRemoveInterface
} from '@/service/account/interface'
import { ChildRouteType } from '@/type/route'

const router: ChildRouteType[] = [
  {
    method: 'post',
    path: '/list',
    action: accountList,
    validator: accountListInterface
  },
  {
    method: 'post',
    path: '/create',
    action: accountCreate,
    validator: accountCreateInterface
  },
  {
    method: 'post',
    path: '/detail',
    action: accountDetail,
    validator: accountDetailInterface
  },
  {
    method: 'post',
    path: '/modify',
    action: accountModify,
    validator: accountModifyInterface
  },
  {
    method: 'post',
    path: '/remove',
    action: accountRemove,
    validator: accountRemoveInterface
  }
]

export default router
