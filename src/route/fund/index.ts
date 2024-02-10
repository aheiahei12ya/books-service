import expenseRouter from './expense'
import incomeRouter from './income'

export const fundRoutes = [
  {
    // 待修改
    path: '/api/expense',
    child: expenseRouter
  },
  {
    // 待修改
    path: '/api/income',
    child: incomeRouter
  }
]
