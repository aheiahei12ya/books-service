import { methodList } from '@/services/method'

const router = [
  {
    method: 'post',
    path: '/list',
    action: methodList
  }
]
export default router
