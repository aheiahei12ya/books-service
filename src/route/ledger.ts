import {
  ledgerCreate,
  ledgerDetail,
  ledgerList,
  ledgerModify,
  ledgerRemove
} from '@/service/ledger'
import {
  ledgerCreateInterface,
  ledgerDetailInterface,
  ledgerListInterface,
  ledgerModifyInterface,
  ledgerRemoveInterface
} from '@/service/ledger/interface'
import { ChildRouteType } from '@/type/route'

const router: ChildRouteType[] = [
  {
    method: 'post',
    path: '/list',
    action: ledgerList,
    validator: ledgerListInterface
  },
  {
    method: 'post',
    path: '/detail',
    action: ledgerDetail,
    validator: ledgerDetailInterface
  },
  {
    method: 'post',
    path: '/create',
    action: ledgerCreate,
    validator: ledgerCreateInterface
  },
  {
    method: 'post',
    path: '/modify',
    action: ledgerModify,
    validator: ledgerModifyInterface
  },
  {
    method: 'post',
    path: '/remove',
    action: ledgerRemove,
    validator: ledgerRemoveInterface
  }
]

export default router
