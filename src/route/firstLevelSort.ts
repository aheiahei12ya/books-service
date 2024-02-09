import {
  firstLevelSortCreate,
  firstLevelSortDetail,
  firstLevelSortList,
  firstLevelSortModify,
  firstLevelSortRemove
} from '@/service/firstLevelSort'
import {
  firstLevelSortCreateInterface,
  firstLevelSortDetailInterface,
  firstLevelSortListInterface,
  firstLevelSortModifyInterface,
  firstLevelSortRemoveInterface
} from '@/service/firstLevelSort/interface'
import { ChildRouteType } from '@/type/route'

const router: ChildRouteType[] = [
  {
    method: 'post',
    path: '/list',
    action: firstLevelSortList,
    validator: firstLevelSortListInterface
  },
  {
    method: 'post',
    path: '/detail',
    action: firstLevelSortDetail,
    validator: firstLevelSortDetailInterface
  },
  {
    method: 'post',
    path: '/create',
    action: firstLevelSortCreate,
    validator: firstLevelSortCreateInterface
  },
  {
    method: 'post',
    path: '/modify',
    action: firstLevelSortModify,
    validator: firstLevelSortModifyInterface
  },
  {
    method: 'post',
    path: '/remove',
    action: firstLevelSortRemove,
    validator: firstLevelSortRemoveInterface
  }
]

export default router
