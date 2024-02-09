import { platformList } from '@/service/platform'

const router = [
  {
    method: 'post',
    path: '/list',
    action: platformList
  }
]

export default router
