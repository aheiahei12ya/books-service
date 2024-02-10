import { settingList } from '@/service/setting'

const router = [
  {
    method: 'post',
    path: '/list',
    action: settingList
  }
]
export default router
