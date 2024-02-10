import {
  ledgerSettingCreate,
  ledgerSettingDetail,
  ledgerSettingList,
  ledgerSettingModify,
  ledgerSettingRemove
} from '@/service/setting/ledger'
import {
  ledgerSettingCreateInterface,
  ledgerSettingDetailInterface,
  ledgerSettingListInterface,
  ledgerSettingModifyInterface,
  ledgerSettingRemoveInterface
} from '@/service/setting/ledger/interface'
import { ChildRouteType } from '@/type/route'

const router: ChildRouteType[] = [
  {
    method: 'post',
    path: '/list',
    action: ledgerSettingList,
    validator: ledgerSettingListInterface
  },
  {
    method: 'post',
    path: '/detail',
    action: ledgerSettingDetail,
    validator: ledgerSettingDetailInterface
  },
  {
    method: 'post',
    path: '/create',
    action: ledgerSettingCreate,
    validator: ledgerSettingCreateInterface
  },
  {
    method: 'post',
    path: '/modify',
    action: ledgerSettingModify,
    validator: ledgerSettingModifyInterface
  },
  {
    method: 'post',
    path: '/remove',
    action: ledgerSettingRemove,
    validator: ledgerSettingRemoveInterface
  }
]

export default router