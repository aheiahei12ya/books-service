import { methodList } from '@/service/method'

const router = [
  {
    method: 'post',
    path: '/list',
    action: methodList
  }
]
export default router
