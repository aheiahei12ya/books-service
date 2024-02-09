import { categoryList } from '@/service/category'

const router = [
  {
    method: 'post',
    path: '/list',
    action: categoryList
  }
]

export default router
