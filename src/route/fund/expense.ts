import { expenseInitial } from '@/service/fund/expense'

const router = [
  {
    method: 'post',
    path: '/initial',
    action: expenseInitial
  }
]
export default router
