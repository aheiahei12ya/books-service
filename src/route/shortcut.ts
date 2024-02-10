import {
  shortcutCreate,
  shortcutDetail,
  shortcutList,
  shortcutModify,
  shortcutRemove
} from '@/service/shortcut'
import {
  shortcutCreateInterface,
  shortcutDetailInterface,
  shortcutListInterface,
  shortcutModifyInterface,
  shortcutRemoveInterface
} from '@/service/shortcut/interface'
import { ChildRouteType } from '@/type/route'

const router: ChildRouteType[] = [
  {
    method: 'post',
    path: '/list',
    action: shortcutList,
    validator: shortcutListInterface
  },
  {
    method: 'post',
    path: '/detail',
    action: shortcutDetail,
    validator: shortcutDetailInterface
  },
  {
    method: 'post',
    path: '/create',
    action: shortcutCreate,
    validator: shortcutCreateInterface
  },
  {
    method: 'post',
    path: '/modify',
    action: shortcutModify,
    validator: shortcutModifyInterface
  },
  {
    method: 'post',
    path: '/remove',
    action: shortcutRemove,
    validator: shortcutRemoveInterface
  }
]

export default router
