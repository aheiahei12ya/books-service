import { shortcutList } from '@/services/shortcut'

const router = [
  {
    method: 'post',
    path: '/list',
    action: shortcutList
  }
]
export default router
