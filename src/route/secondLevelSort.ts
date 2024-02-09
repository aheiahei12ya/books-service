import {
  secondLevelSortCreate,
  secondLevelSortDetail,
  secondLevelSortList,
  secondLevelSortModify,
  secondLevelSortRemove
} from '@/service/secondLevelSort'
import {
  secondLevelSortCreateInterface,
  secondLevelSortDetailInterface,
  secondLevelSortListInterface,
  secondLevelSortModifyInterface,
  secondLevelSortRemoveInterface
} from '@/service/secondLevelSort/interface'
import { ChildRouteType } from '@/type/route'

const router: ChildRouteType[] = [
  {
    method: 'post',
    path: '/list',
    action: secondLevelSortList,
    validator: secondLevelSortListInterface
  },
  {
    method: 'post',
    path: '/detail',
    action: secondLevelSortDetail,
    validator: secondLevelSortDetailInterface
  },
  {
    method: 'post',
    path: '/create',
    action: secondLevelSortCreate,
    validator: secondLevelSortCreateInterface
  },
  {
    method: 'post',
    path: '/modify',
    action: secondLevelSortModify,
    validator: secondLevelSortModifyInterface
  },
  {
    method: 'post',
    path: '/remove',
    action: secondLevelSortRemove,
    validator: secondLevelSortRemoveInterface
  }
]

export default router
