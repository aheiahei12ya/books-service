import { incomeInitial } from '@/service/income'

const router = [
  {
    method: 'post',
    path: '/initial',
    action: incomeInitial
  }
]

export default router
