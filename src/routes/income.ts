import { incomeInitial } from '@/services/income'

const router = [
  {
    method: 'post',
    path: '/initial',
    action: incomeInitial
  }
]

export default router
