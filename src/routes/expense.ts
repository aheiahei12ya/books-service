import { expenseInitial } from '@/services/expense'

const router = [
  {
    method: 'post',
    path: '/initial',
    action: expenseInitial
  }
]
export default router
