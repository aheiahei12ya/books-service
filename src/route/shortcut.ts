import { shortcutList } from '@/service/shortcut'

const router = [
  {
    method: 'post',
    path: '/list',
    action: shortcutList
  }
]
export default router
