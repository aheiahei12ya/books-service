import {
  methodCreate,
  methodDetail,
  methodList,
  methodModify,
  methodRemove
} from '@/service/method'
import {
  methodCreateInterface,
  methodDetailInterface,
  methodListInterface,
  methodModifyInterface,
  methodRemoveInterface
} from '@/service/method/interface'
import { ChildRouteType } from '@/type/route'

const router: ChildRouteType[] = [
  {
    method: 'post',
    path: '/list',
    action: methodList,
    validator: methodListInterface
  },
  {
    method: 'post',
    path: '/detail',
    action: methodDetail,
    validator: methodDetailInterface
  },
  {
    method: 'post',
    path: '/create',
    action: methodCreate,
    validator: methodCreateInterface
  },
  {
    method: 'post',
    path: '/modify',
    action: methodModify,
    validator: methodModifyInterface
  },
  {
    method: 'post',
    path: '/remove',
    action: methodRemove,
    validator: methodRemoveInterface
  }
]

export default router
