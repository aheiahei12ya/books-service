import { expenseInitial } from '@/service/expense'

const router = [
  {
    method: 'post',
    path: '/initial',
    action: expenseInitial
  }
]
export default router
