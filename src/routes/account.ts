import { accountList } from '@/services/account'
import { ChildRouteType } from '@/types/route'

const router: ChildRouteType[] = [
  {
    method: 'post',
    path: '/list',
    action: accountList
  },
  {
    method: 'post',
    path: '/create',
    action: accountList
  },
  {
    method: 'post',
    path: '/modify',
    action: accountList
  },
  {
    method: 'post',
    path: '/remove',
    action: accountList
  }
]

export default router
