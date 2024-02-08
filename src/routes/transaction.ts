import { expenseList, yearList } from '@/services/transaction'

const router = [
  {
    method: 'post',
    path: '/year-list',
    action: yearList
  },
  {
    method: 'post',
    path: '/expense',
    action: expenseList
  }
]

export default router
