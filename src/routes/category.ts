import { categoryList } from '@/services/category'

const router = [
  {
    method: 'post',
    path: '/list',
    action: categoryList
  }
]

export default router
