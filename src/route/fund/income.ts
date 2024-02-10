import { incomeInitial } from '@/service/fund/income'

const router = [
  {
    method: 'post',
    path: '/initial',
    action: incomeInitial
  }
]

export default router
