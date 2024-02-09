import {
  groupLedgerCreate,
  groupLedgerDetail,
  groupLedgerList,
  groupLedgerModify,
  groupLedgerRemove
} from '@/service/group/ledger'
import {
  groupLedgerCreateInterface,
  groupLedgerDetailInterface,
  groupLedgerListInterface,
  groupLedgerModifyInterface,
  groupLedgerRemoveInterface
} from '@/service/group/ledger/interface'

const router = [
  {
    method: 'post',
    path: '/list',
    action: groupLedgerList,
    validator: groupLedgerListInterface
  },
  {
    method: 'post',
    path: '/detail',
    action: groupLedgerDetail,
    validator: groupLedgerDetailInterface
  },
  {
    method: 'post',
    path: '/create',
    action: groupLedgerCreate,
    validator: groupLedgerCreateInterface
  },
  {
    method: 'post',
    path: '/modify',
    action: groupLedgerModify,
    validator: groupLedgerModifyInterface
  },
  {
    method: 'post',
    path: '/remove',
    action: groupLedgerRemove,
    validator: groupLedgerRemoveInterface
  }
]

export default router
