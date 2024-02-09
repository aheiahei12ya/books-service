import {
  categoryCreate,
  categoryDetail,
  categoryList,
  categoryModify,
  categoryRemove
} from '@/service/category'
import {
  categoryCreateInterface,
  categoryDetailInterface,
  categoryListInterface,
  categoryModifyInterface,
  categoryRemoveInterface
} from '@/service/category/interface'

const router = [
  {
    method: 'post',
    path: '/list',
    action: categoryList,
    validator: categoryListInterface
  },
  {
    method: 'post',
    path: '/detail',
    action: categoryDetail,
    validator: categoryDetailInterface
  },
  {
    method: 'post',
    path: '/create',
    action: categoryCreate,
    validator: categoryCreateInterface
  },
  {
    method: 'post',
    path: '/modify',
    action: categoryModify,
    validator: categoryModifyInterface
  },
  {
    method: 'post',
    path: '/remove',
    action: categoryRemove,
    validator: categoryRemoveInterface
  }
]

export default router
