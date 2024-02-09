import { accountList } from '@/service/account'
import { ChildRouteType } from '@/type/route'

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
