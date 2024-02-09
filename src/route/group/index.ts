import groupAccountRouter from '@/route/group/account'
import groupLedgerRouter from '@/route/group/ledger'
import groupManagementRouter from '@/route/group/management'
import groupUserRouter from '@/route/group/user'

export const groupRoutes = [
  {
    path: '/api/group',
    child: groupManagementRouter
  },
  {
    path: '/api/group/user',
    child: groupUserRouter
  },
  {
    path: '/api/group/ledger',
    child: groupLedgerRouter
  },
  {
    path: '/api/group/account',
    child: groupAccountRouter
  }
]
