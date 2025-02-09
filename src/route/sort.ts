import {
  sortCreate,
  sortDetail,
  sortList,
  sortModify,
  sortRemove
} from '@/service/sort'
import {
  sortCreateInterface,
  sortDetailInterface,
  sortListInterface,
  sortModifyInterface,
  sortRemoveInterface
} from '@/service/sort/interface'
import { ChildRouteType } from '@/type/route'

export const sortRoutes: ChildRouteType[] = [
  {
    method: 'post',
    path: '/list',
    action: sortList,
    validator: sortListInterface
  },
  {
    method: 'post',
    path: '/detail',
    action: sortDetail,
    validator: sortDetailInterface
  },
  {
    method: 'post',
    path: '/create',
    action: sortCreate,
    validator: sortCreateInterface
  },
  {
    method: 'post',
    path: '/modify',
    action: sortModify,
    validator: sortModifyInterface
  },
  {
    method: 'post',
    path: '/remove',
    action: sortRemove,
    validator: sortRemoveInterface
  }
]
