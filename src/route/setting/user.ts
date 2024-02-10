import {
  userSettingCreate,
  userSettingDetail,
  userSettingList,
  userSettingModify,
  userSettingRemove
} from '@/service/setting/user'
import {
  userSettingCreateInterface,
  userSettingDetailInterface,
  userSettingListInterface,
  userSettingModifyInterface,
  userSettingRemoveInterface
} from '@/service/setting/user/interface'
import { ChildRouteType } from '@/type/route'

const router: ChildRouteType[] = [
  {
    method: 'post',
    path: '/list',
    action: userSettingList,
    validator: userSettingListInterface
  },
  {
    method: 'post',
    path: '/detail',
    action: userSettingDetail,
    validator: userSettingDetailInterface
  },
  {
    method: 'post',
    path: '/create',
    action: userSettingCreate,
    validator: userSettingCreateInterface
  },
  {
    method: 'post',
    path: '/modify',
    action: userSettingModify,
    validator: userSettingModifyInterface
  },
  {
    method: 'post',
    path: '/remove',
    action: userSettingRemove,
    validator: userSettingRemoveInterface
  }
]

export default router
