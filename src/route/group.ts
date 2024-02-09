import {
  groupCreate,
  groupDetail,
  groupList,
  groupModify,
  groupRemove
} from '@/service/group'
import {
  groupCreateInterface,
  groupDetailInterface,
  groupListInterface,
  groupModifyInterface,
  groupRemoveInterface
} from '@/service/group/interface'
import { ChildRouteType } from '@/type/route'

const router: ChildRouteType[] = [
  {
    method: 'post',
    path: '/list',
    action: groupList,
    validator: groupListInterface
  },
  {
    method: 'post',
    path: '/detail',
    action: groupDetail,
    validator: groupDetailInterface
  },
  {
    method: 'post',
    path: '/create',
    action: groupCreate,
    validator: groupCreateInterface
  },
  {
    method: 'post',
    path: '/modify',
    action: groupModify,
    validator: groupModifyInterface
  },
  {
    method: 'post',
    path: '/remove',
    action: groupRemove,
    validator: groupRemoveInterface
  }
]

export default router
