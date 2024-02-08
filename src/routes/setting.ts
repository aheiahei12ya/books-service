import { settingList } from '@/services/setting'

const router = [
  {
    method: 'post',
    path: '/list',
    action: settingList
  }
]
export default router
