import { accountList } from '@/services/account'
import { ChildRouteType } from '@/types/route'

const router: ChildRouteType[] = [
  {
    method: 'post',
    path: '/list',
    action: accountList
  }
]

export default router
