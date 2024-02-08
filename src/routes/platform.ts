import { platformList } from '@/services/platform'

const router = [
  {
    method: 'post',
    path: '/list',
    action: platformList
  }
]

export default router
